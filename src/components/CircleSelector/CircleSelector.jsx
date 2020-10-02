import React, { Component } from "react";
import "./CircleSelector.css";

export class CircleSelector extends Component {
  render() {
    return (
      <div className="CircleSelector">
        <button
          onClick={this.props.selectedone}
          className={this.props.state.selected1 ? "selected" : ""}
        >
          Select Circle 1
        </button>
        <br />
        <button
          onClick={this.props.selectedtwo}
          className={this.props.state.selected2 ? "selected" : ""}
        >
          Select Circle 2
        </button>
        <br />
        <button
          onClick={this.props.selectedthree}
          className={this.props.state.selected3 ? "selected" : ""}
        >
          Select Circle 3
        </button>
        <br />
        <button
          onClick={this.props.selectedfour}
          className={this.props.state.selected4 ? "selected" : ""}
        >
          Select Circle 4
        </button>
        <br />
      </div>
    );
  }
}

export default CircleSelector;
