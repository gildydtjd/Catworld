import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Main from "./page/Main";
import About from "./page/About";
import Company from "./page/Company";
import ScrollToTop from "./ScrollToTop";
import Header from "./components/header/Header";
import Contact from "./page/Contact";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/company" component={Company} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
