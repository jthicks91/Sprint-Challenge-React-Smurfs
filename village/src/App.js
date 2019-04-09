import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
// import SmurfForm from "./components/SmurfForm";
import axios from "axios";

import AddSmurfForm from "./components/AddSmurfForm";
import UpdateSmurfForm from "./components/UpdateSmurfForm";
import SingleSmurf from "./components/SingleSmurf";
import Smurfs from "./components/Smurfs";
import Nav from "./components/Nav";
import Home from "./components/Home";

const URL = "http://localhost:3333/smurfs";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    console.log("CDM now running");
    axios
      .get(URL)
      .then(response => {
        console.log("get response", response);
        this.setState({ smurfs: response.data });
      })
      .catch(err => console.log(err));
  }

  handleData = data => {
    console.log(data, "data");
    this.setState({ smurfs: data });
  };

  updateSmurfs = newSmurfs => {
    this.setState({ smurfs: newSmurfs });
  };

  smurfFilename = name => {
    let modifiedName = name.toLowerCase().replace(" ", "-");
    return modifiedName + ".png";
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route path="/" component={Nav} />
        <main>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/smurfs"
            render={props => (
              <Smurfs
                {...props}
                smurfs={this.state.smurfs}
                smurfFilename={this.smurfFilename}
              />
            )}
          />
          <Route
            exact
            path="/add-smurf"
            render={props => (
              <AddSmurfForm {...props} updateSmurfs={this.updateSmurfs} />
            )}
          />
          <Route
            exact
            path="/smurfs/:id"
            render={props => (
              <SingleSmurf
                {...props}
                updateSmurfs={this.updateSmurfs}
                smurfs={this.state.smurfs}
                smurfFilename={this.smurfFilename}
              />
            )}
          />
          <Route
            path="/smurfs/:id/update"
            render={props => (
              <UpdateSmurfForm
                {...props}
                updateSmurfs={this.updateSmurfs}
                smurfs={this.state.smurfs}
              />
            )}
          />
        </main>
      </div>
    );
  }
}
