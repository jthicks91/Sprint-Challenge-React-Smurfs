import React, { Component } from "react";

import SmurfForList from "./SmurfForList";
import { Link } from "react-router-dom";

import "../App.css";

class Smurfs extends Component {
  render() {
    return (
      <div className="smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Link to={`/smurfs/${smurf.id}`}>
                <SmurfForList
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                  smurfImgFilename={this.props.smurfImgFilename}
                />
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

SmurfForList.defaultProps = {
  smurfs: []
};

export default Smurfs;
