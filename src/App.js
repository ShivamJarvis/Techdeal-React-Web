import "./App.css";
import {
  Home,
  Shop,
  Cart,
  ProductDetail,
  Error,
  Account,
  MyOrders,
  Login,
  NewSeller,
  NewCustomer,
  SellerLogin,
  Contact,
  ProductList,
} from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="/seller-login" exact>
            <SellerLogin></SellerLogin>
          </Route>
          <Route path="/seller-registration" exact>
            <NewSeller></NewSeller>
          </Route>
          <Route path="/register" exact>
            <NewCustomer></NewCustomer>
          </Route>
          <Route path="/shop" exact>
            <Shop></Shop>
          </Route>

          <Route path="/shop/products-list" exact>
            <ProductList></ProductList>
          </Route>
          
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/product-details/:id?">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/my-orders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/account">
            <Account></Account>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
