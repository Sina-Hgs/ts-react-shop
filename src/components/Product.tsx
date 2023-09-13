import { ProductType } from "../context/ProductsProvider";

import { ReducerActionType, ReducerAction } from "../context/CartProvider";

type PropType = {
  products: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
};

const Product = () => {
  return <div>Product</div>;
};

export default Product;
