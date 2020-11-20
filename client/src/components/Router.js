import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { __CheckSession } from "../services/UserServices";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ProtectedRoute from "./ProtectedRoute";
// import Layout from "../components/Layout";
import Profile from "../pages/Profile";
import UpdatePost from "../pages/UpdatePost";
import LandingPage from "../pages/LandingPage";
import CreatePost from "../pages/CreatePost";
// import Update from "../pages/UpdatePost";
// import Post from "./components/Post";
// import ImageUpload from "./components/ImageUpload";
class Router extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      currentUser: null,
      pageLoading: true,
    };
  }
  componentDidMount() {
    this.verifyTokenValid();
    this.setState({ pageLoading: false });
  }
  verifyTokenValid = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const session = await __CheckSession();
        console.log("session", session);
        this.setState(
          {
            currentUser: session.user,
            authenticated: true,
          },
          () => this.props.history.push("/feed")
        );
      } catch (error) {
        this.setState({ currentUser: null, authenticated: false });
        localStorage.clear();
      }
    }
  };
  toggleAuthenticated = (value, user, done) => {
    this.setState({ authenticated: value, currentUser: user }, () => done());
  };
  render() {
    return (
      // home = '/', signup = '/register', signin = '/login', update = '/edit/:post_id, create = '/upload'
      <main>
        {this.state.pageLoading ? (
          <h3>Loading...</h3>
        ) : (
          <Switch>
            <Route
              path="/login"
              component={(props) => (
                <SignIn
                  toggleAuthenticated={this.toggleAuthenticated}
                  {...props}
                />
              )}
            />
            <Route
              path="/register"
              component={(props) => <SignUp {...props} />}
            />
            <Route
              exact
              path="/"
              component={(props) => <LandingPage {...props} />}
            />
            <Route
              authenticated={this.state.authenticated}
              exact
              path="/feed"
              component={(props) => (
                <Home
                  {...props}
                  currentUser={this.state.currentUser}
                  authenticated={this.state.authenticated}
                >
                  <Profile {...props} />
                </Home>
              )}
            />

            <Route
              path="/feed/:post_id"
              component={(props) => (
                // <Home {...props}>
                <UpdatePost {...props} />
                // </Home>
              )}
            />
          </Switch>
        )}
      </main>
    );
  }
}

export default withRouter(Router);
