import React from "react";
import "../App.css";

const images = require.context("./smurf-imgs", true);

const SmurfForList = props => {
  let img;
  try {
    img = images(`./${props.smurfImgFilename(props.name)}`);
  } catch (err) {
    img = null;
  }

  return (
    <div className="smurf">
      {img ? (
        <img src={img} alt={props.name} height="100px" />
      ) : (
        <span>No image for this smurf</span>
      )}
      <div className="smurf-info">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
    </div>
  );
};

SmurfForList.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default SmurfForList;
