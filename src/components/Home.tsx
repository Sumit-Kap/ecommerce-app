import React from "react";
import productList from "./productList";
interface apiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

interface State {
  response: apiResponse[];
}
interface Props {}
export default class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      response: [],
    };
  }
  getProducts = async () => {
    const data = await productList.getProducts();
    await this.setState({
      response: data,
    });
  };
  componentDidMount() {
    this.getProducts();
  }
  render() {
    const { response } = this.state;
    // console.log("response", response);
    if (response.length === 0) {
      return <div className="loader">Loading......</div>;
    }
    return (
      <div className="products">
        <div className="product-list">
          {response.map((res, index) => (
            <div
              className="product-cards"
              data-test-id={`products_${index}`}
              key={index}
            >
              <img src={res.image}></img>
              <div className="product-description">{res.description}</div>
              <div className="product-price">
                <strong>₹{res.price}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
