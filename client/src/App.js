
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "../src/pages/productGatogary";
import Home from "./pages/home";
import ContactUs from "./pages/contactUS/";
import Products from "./pages/Products";
import AboutUS from "./pages/aboutUS/AboutUS";
import Gallerys from "./pages/gallery";
import  NotFoundPage  from "./pages/pageNotFound/";
import ProductDetails from "./pages/productDetails/";
import { Footer, Header } from "./components/layouts";



// const NavRoute = ({ exact, path, component: Component }) => (
//   <Route
//     exact={exact}
//     path={path}
//     render={(props) => (
//       <div>
//         <Header />
//         <Component {...props} />
//         <Footer />
//       </div>
//     )}
//   />
// );

const App = () => {
  
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={AboutUS} />
          <Route path="/contactus" exact component={ContactUs} />
          <Route path="/product" exact component={Product} />
          <Route path="/products" exact component={Products} />
          <Route path="/gallery" exact component={Gallerys} />
          <Route path="/productDetails" exact component={ProductDetails} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
