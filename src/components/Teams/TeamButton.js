import React, { Component } from "react";

export default class TeamButton extends Component {
  state = {
    pseudo: [],
    nombreJoueur: "",
    nombreEquipe: "",
  };

  render() {
    onSubmit = (e) => {
      e.preventdefault();
    };

    return (
      <>
        <button className="btn btn-primary btn-block" onClick={this.onSubmit}>
          Générer les équipes
        </button>
      </>
    );
  }
}
