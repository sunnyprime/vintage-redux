import React,{Fragment} from 'react';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import './App.css';
import Checkout from './pages/Checkout';
import Cart from "./pages/Cart"
import About from "./pages/About"
import Error from "./pages/Error"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Login from "./pages/Login"
import Navbar from './components/Header/Navbar';
// Redux
import {Provider} from "react-redux"
import store from "./store"
import Alert from './components/Header/alert';
import Register from './pages/Register';
// Context API
import ProductsProvider from "./context/products"
// import {CartProvider} from "./context/Cart"
import PrivateRoute from "./utils/PrivateRoute"

function App() {
  return (
<Provider store={store}>

<Fragment>
<ProductsProvider>
  {/* <CartProvider> */}
    <Router>
      <Navbar></Navbar>
      <Alert></Alert>
      <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/about"><About /></Route>
      <PrivateRoute exact path="/cart" component={Cart}></PrivateRoute>
      <Route path="/checkout"><Checkout /></Route>
      <Route path="/login"><Login /></Route>
      <Route path="/register"><Register /></Route>
      <Route exact path="/products"><Products /></Route> 
      <Route path="/products/:id" children={<ProductDetails />}></Route>
      <Route path="*"><Error /></Route>
      </Switch>
    </Router>
    {/* </CartProvider> */}
    </ProductsProvider>    
</Fragment>

</Provider>
  );
}

export default App;
