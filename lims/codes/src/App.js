import React from "react";
import "./App.css";
import "./style/dark1";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./develop/login";
import Main from "./develop/main";
import { login } from "./redux/actions";

// 国际化
import { ConfigProvider } from "antd";
import zh_CN from "antd/es/locale/zh_CN.js";
import en_US from "antd/es/locale/en_US.js";
import locale from "./locale.js";

import { rootUrl } from "./config.js";

//语言切换变换器
const langDistinguish = lang => {
  switch (lang) {
    case "CN":
      return zh_CN;
    case "EN":
      return en_US;
    default:
      return en_US;
  }
};

class App extends React.Component {
  componentDidMount() {
    //初始化语言选择
    const { language } = this.props;
    switch (language) {
      case "CN":
        locale.CN();
        break;
      case "EN":
        locale.EN();
        break;
      default:
        locale.EN();
    }
  }
  render() {
    const { language } = this.props;
    return (
      <ConfigProvider locale={langDistinguish(language)}>
        <div className="App">
          <Router>
            <Switch>
              <Route path={rootUrl + "/"} exact component={Login} />
              <Route component={Main} />
            </Switch>
          </Router>
        </div>
      </ConfigProvider>
    );
  }
}

const mapStateToProps = (state, props) => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    login: bool => {
      dispatch(login(bool));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
