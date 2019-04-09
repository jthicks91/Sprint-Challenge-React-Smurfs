import React from "react";
import axios from "axios";

export default class UpdateSmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setSmurf = () => {
    let currentSmurf = null;
    if (this.props.smurfs && !this.state.smurf) {
      currentSmurf = this.props.smurfs.find(
        smurf => `${smurf.id}` === this.props.match.params.id
      );
      this.setState({ smurf: currentSmurf });
    }
  };

  componentDidMount = () => {
    this.setSmurf();
  };

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    this.setState(prevState => ({
      smurf: { ...prevState.smurf, [ev.target.name]: value }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .put(
        `http://localhost:3333/smurfs/${this.props.match.params.id}`,
        this.state.smurf
      )
      .then(response => {
        this.props.updateSmurfs(response.data);
        this.props.history.push(`/smurfs`);
      })
      .catch(err => console.log(err));
  };

  render() {
    let rendered = this.state.smurf ? (
      <div>
        <h2>Update Smurf</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            placeholder="Name"
            value={this.state.smurf.name}
          />
          <div className="baseline" />

          <input
            type="number"
            name="age"
            onChange={this.changeHandler}
            placeholder="Age"
            value={this.state.smurf.age}
          />
          <div className="baseline" />

          <input
            type="text"
            name="height"
            onChange={this.changeHandler}
            placeholder="Height"
            value={this.state.smurf.height}
          />
          <div className="baseline" />
          <button type="submit">Update Smurf</button>
        </form>
      </div>
    ) : (
      "Loading Smurfs"
    );
    return <div>{rendered}</div>;
  }
}
