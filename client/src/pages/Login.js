import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
// components
import Signup from "../components/signUpForm";
import LoginForm from "../components/loginForm";
import Navbar from "../components/navLogin";
import Home from "../components/home";
import API from "../../../../../../Week 20_React/01-Activities/11-Stu_ReactRouter/Solved/client/src/utils/API";

class Login extends Component {
  //passed props are updateUser, username
  constructor(props) {
    super();
    this.state = {
      updateUser: '',
      username: ''
    };

  //   this.getUser = this.getUser.bind(this);
  //   this.componentDidMount = this.componentDidMount.bind(this);
  //   this.updateUser = this.updateUser.bind(this);
  // }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = async () => {
      const res = await axios.get('/api/login/' + id);
    return this.setState({ updateUser: res.data, username: '' });
    }
  };

  updateUser(userObject) {
    this.setState(userObject);
  }

//   getUser() {
//     axios.get("/api/user").then(response => {
//       console.log("Get user response: ");
//       console.log(response.data);
//       if (response.data.user) {
//         console.log("Get User: There is a user saved in the server session: ");

//         this.setState({
//           loggedIn: true,
//           username: response.data.user.username
//         });
//       } else {
//         console.log("Get user: no user");
//         this.setState({
//           loggedIn: false,
//           username: null
//         });
//       }
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
//         {/* greet user if logged in: */}
//         {this.state.loggedIn && <p>Join the party, {this.state.username}!</p>}
//         {/* Routes to different components */}
//         <Route exact path="/" component={Home} />
//         <Route
//           path="/login"
//           render={() => <LoginForm updateUser={this.updateUser} />}
//         />
//         <Route path="/signup" render={() => <Signup signup={this.signup} />} />
//       </div>
//     );
//   }
// }

// export default App;
