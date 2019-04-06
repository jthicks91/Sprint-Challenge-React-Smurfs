import React from "react";

// import SmurfsTitle from "village/src/components/SmurfsTitle.png";
import "../App.css";

function Home(props) {
  const routeToList = event => {
    event.preventDefault();
    props.history.push("/smurfs");
  };

  return (
    <div className="smurf-home">
      {/* <img src={SmurfsTitle} alt="smurf title card" /> */}
      <button onClick={routeToList}>List Them Smurfs!</button>
    </div>
  );
}

export default Home;
