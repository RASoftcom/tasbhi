import "./style.css"

import 
{ Container, Row, Col, Button, Card } 
from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, 
{ useEffect } 
from "react";
import 
{ useSelector, useDispatch }
 from "react-redux";
import {
  countDecrement,
  countIncrement,
  countReset,
} from "../store/constants/countConstants";
const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const { count } = counter;
  const subtractHandler = () => {
    if (count > 0) {
      dispatch({ type: countDecrement });
    } else {
      alert("You Cann't count tasbhi in negative");
    }
  };
  const addHandler = () => {
    dispatch({ type: countIncrement });
  };
  const reset = () => {
    dispatch({ type: countReset });
  };
 
  return (
    <Container className=" my-4">
      <Row className="my-4">
        <Col md="3"></Col>
        <Col md="6" id="cardcon">
          <Card
            className="my-4 mx-auto"
            style={{
                
                borderRadius:"100%",
              backgroundColor: "#ff66ff",
              width: "100%",
              height: "85%",
            }}
          >
            <Row style={{ height: "100%", alignItems: "center" }}>
              <Col md="3" sm="2" xs="2">
                <Button
                  onClick={subtractHandler}
                  className="btn btn-light "
                  style={{ borderRadius: "100%" }}
                >
                  -
                </Button>
              </Col>
              <Col md="6" sm="6" xs="8">
                <h1 style={{color:"white", fontSize: "90px", textAlign: "center" }}>
                  {count}
                </h1>
              </Col>
              <Col md="3" sm="2" xs="2">
                <Button
                  className="btn btn-light "
                  onClick={addHandler}
                  style={{
                    borderRadius: "100%",

                    float: "right",
                  }}
                >
                  +
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md="3"></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Button
            className="btn btn-success ml-4 "
            style={{
                
                border:"none",
              backgroundColor: "#ff66ff",
              color:"white",
              padding: "0 3rem 0 3rem",
              borderRadius: "25px",
              justifyContent: "justify",
              alignItems: "justify",
              textAlign: "justify",
            }}
            onClick={reset}
          >
            <i class="fa fa-undo"> Reset </i>
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default App;
