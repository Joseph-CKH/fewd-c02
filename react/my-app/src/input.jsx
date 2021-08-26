import React from "react";

export class input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        ></input>
        <button
          type="button"
          onClick={() => this.props.handleChangeName(this.state.name)}
        >
          click
        </button>
      </div>
    );
  }
}

export default input;
