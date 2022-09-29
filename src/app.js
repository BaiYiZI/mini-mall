import { Component } from "react";
import "./app.less";

import { checkLogin } from "./service/service";

class App extends Component {
  componentDidMount() {
    checkLogin()
  }

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return this.props.children;
  }
}

export default App;
