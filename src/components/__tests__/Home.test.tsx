import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from "@testing-library/react";
import Home from "../Home";
import React from "react";
import productList from "../../__mocks__/MockProductList";
const productsData = productList.getProducts();
const productListMock: jest.Mock = jest.fn(() => Promise.resolve(productsData));
describe("Home component", () => {
  beforeEach(() => {
    global.fetch = () => {
      return Promise.resolve({
        json: () => productsData,
      });
    };
    // jest.spyOn(global, "fetch").mockImplementation(productListMock);
    // global.fetch.mockImplementation(productListMock);
  });
  afterEach(cleanup);
  test("check listing page rendered or not", () => {
    const container = render(<Home />);
    expect(screen.queryByText("Loading......")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test("check data arrived or not", () => {
    const { getByTestId } = render(<Home />);
    // const productRendered = getByTestId("products_0");
    waitFor(() => expect(getByTestId("products_0")).toBeInTheDocument());
  });
});
