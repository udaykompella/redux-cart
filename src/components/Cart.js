import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () =>{
    const dispatch = useDispatch()
    const products = useSelector(state => state.cart)
    const removeFromCart = (id) => {
         dispatch(remove(id))
    }
    const cards = products.map((product) => (
        <div className="col-md-12" style={{ marginBottom: "10px" }}>
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
              <Button variant="danger" onClick={() => removeFromCart(product.id)}>
                Remove
              </Button>
            </Card.Footer>
          </Card>
        </div>
      ));
    return(
        <div className="row">
           {cards}
        </div>
    )
}

export default Cart