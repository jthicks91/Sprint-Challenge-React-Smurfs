import React from "react";

import titleImg from "./smurfs-title-card.jpg";
import "../App.css";

function Home(props) {
  const routeToList = event => {
    event.preventDefault();
    props.history.push("/smurfs");
  };

  return (
    <div className="smurf-home">
      <img src={titleImg} alt="smurf title card" />
      <button onClick={routeToList}>List Smurfs!</button>
    </div>
  );
}

export default Home;
