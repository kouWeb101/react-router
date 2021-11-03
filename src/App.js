import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
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
      {/* 
      ルーティングの設定
      <Switch>
      exactを付けないと完全一致ではないので/(ルート)配下も遷移の対象にしてしまう
        <Route exact path="/">
        </Route>
      </Switch>
    */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
