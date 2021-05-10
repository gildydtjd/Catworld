import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Main from "./page/Main";
// import About from "./page/About";
// import Shop from "./page/Shop";
// import QNA from "./page/QNA";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route path="/company" component={Main} />
        <Route path="/about" component={Main} />
        <Route path="/shop" component={Main} />
        <Route path="/qna" component={Main} />
      </BrowserRouter>
    </div>
  );
}

export default App;
