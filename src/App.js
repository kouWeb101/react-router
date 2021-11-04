import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      {/* ルーティングする際は全体を囲む */}
      <div className="App">
        {/* aタグのような扱いで遷移させることが出来る 
        to="XXXX"がhref属性に相当する
    */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
