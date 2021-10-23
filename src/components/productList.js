const productList = {
  getProducts: async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    // console.log("printing ", response);
    const data = await response.json();
    return data;
  },
};
export default productList;
