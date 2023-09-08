import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
// import {useDispatch} from "react-redux";
import {add} from "./store/cartSlice";
import { getProducts } from "./store/productSlice";
import { useDispatch,useSelector } from "react-redux";
const Product = () => {
  const dispatch = useDispatch();
  const {data:products } = useSelector(state => state.product)
  const [product, setProduct] = useState([]);
  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => setProduct(result));
     dispatch(getProducts)
  }, []);

  const addToCart = (product) => {
    debugger;
     dispatch(add(product));
  };

  const cards = product.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
          <Button variant="primary" onClick={() => {addToCart(product)}}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};
export default Product;
