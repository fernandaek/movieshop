import React, { useState } from "react";
import "./App.css";
import "./main.scss";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import logo from "./Components/Images/logoek.png";
import { Home } from "./Components/Home";
import { Products, IProducts } from "./Components/Products";
import { Details } from "./Components/Details";
import { Cart } from "./Components/Cart";
import { Search } from "./Components/SearchComponent";
import { Register } from "./Components/Order";
import { Admin } from "./Components/Admin";

function App() {
  const defaultOrder: IProducts[] = [];
  const [order, setOrder] = useState(defaultOrder);

  const handleClick = (productClicked: IProducts) => {
    console.log("You clicked in a product", productClicked);
    let array: IProducts[] = order;
    array.push(productClicked);
    setOrder(array);
    console.log("orders", order);
  };

  const removeHandler = (productClicked: IProducts) => {
    console.log("you clicked to remove", productClicked.name);
  };

  return (
    <div className="App">
      <Router>
        <AppBar title="My App">
          <Tabs value="">
            <img src={logo} className="myImg" />
            <Link to="/">
              <Tab label="Home" className="tab" />
            </Link>

            <Link to="/products">
              <Tab label="Products" />
            </Link>

            <Link to="/cart">
              <Tab label="Cart" />
            </Link>
          </Tabs>
        </AppBar>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products" exact component={Products}>
            <Products handleClick={handleClick} />
          </Route>
          <Route path="/details/:id" exact children={<Details />} />
          <Route path="/cart" exact component={Cart}>
            <Cart orders={order} removeHandler={removeHandler} />
          </Route>
          <Route path="/paycheck" exact component={Register}>
            <Register orders={order} />
          </Route>
          <Route path="/admin" exact component={Admin}>
            <Admin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
