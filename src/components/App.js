import React, {Component} from "react";
import "../css/App.css";
import Home from "./HomePage.js";
import Lfg from "./Lfg/LfgPage.js";
import Profile from "./ProfilePage.js";
import FireteamsForm from "./Fireteams/FireteamsFormPage.js";
import Fireteams from "./Fireteams/FireteamsPage.js";
import Admin from "./AdminPage.js";
import Testing from "./Testing.js";
import Clans from './Clans.js'
// import TeamSearch from './TeamSearch.js';
import NotFound from "./NotFound.js";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, withRouter, Switch } from "react-router-dom";
import { getQueryParams } from '../tools/utils';
import  jwtDecode from 'jwt-decode';


class App extends Component  {

  constructor() {
    super();

    const params = getQueryParams();
    // console.log(params);
    if (params.token != null) {
      const jwt = jwtDecode(params.token);
      
      // console.log(jwt);

      this.state = { 
        token: params.token,
        profile_picture: jwt.profile_picture,
        display_name: jwt.display_name,
        membership_id: jwt.membership_id,
        membership_type: jwt.membership_type,
        locale: jwt.locale,

      };
      
      // console.log(jwt);
      localStorage.setItem('auth_token', params.token);
      localStorage.setItem('jwt', JSON.stringify(jwt));

      window.location.replace('/');
    } else {
      this.state = { 
        token: params.token
      };
    }
  }

  isLoggedIn() {
    return !!this.state.token;
  }
  render() {

    const currentKey = this.props.location.pathname.split("/")[1] || "/";
    const timeout = { enter: 300, exit: 200 };
    return (
      <TransitionGroup component="main" className="page-main" style={{height: '100%'}}>
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="fade"
          appear
        >
          <Switch location={this.props.location}>
            <Route path="/" exact component={Home} />
            <Route path="/lfg" component={Lfg} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/fireteams" component={FireteamsForm} />          }
            <Route path="/fireteams/:platform/:gamertag" component={Fireteams} />
            <Route path="/clans" component={Clans} />
            <Route path="/admin" component={Admin} />
            <Route path="/test" component={Testing} />
            <Route
              path="/donate"
              component={() =>
                (window.location =
                  "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HUYFMWSSJERU2")}
            />
            <Route
              path="/twitter"
              component={() =>
                (window.location =
                  "https://twitter.com/Destinderdotcom")}
            />
            <Route
              path="/instagram"
              component={() =>
                (window.location =
                  "https://www.instagram.com/destinderdotcom/")}
            />
            <Route
              path="/reddit"
              component={() =>
                (window.location =
                  "https://www.reddit.com/r/destinder/")}
            />
            <Route component={NotFound} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
};

export default withRouter(App);
