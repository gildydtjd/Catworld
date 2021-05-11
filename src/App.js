import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Main from "./page/Main";
import About from "./page/About";
import Shop from "./page/Shop";
import Company from "./page/Company";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Route exact path="/" component={Main} />
        <Route path="/company" component={Company} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </BrowserRouter>
    </div>
  );
}

export default App;
