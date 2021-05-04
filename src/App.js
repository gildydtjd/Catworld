import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Main from "./page/Main";
import About from "./page/About";
import Shop from "./page/Shop";
import QNA from "./page/QNA";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/qna" component={QNA} />
      </BrowserRouter>
    </div>
  );
}

export default App;
