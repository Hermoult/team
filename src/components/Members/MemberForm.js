import React, { Component } from "react";
import { Consumer } from "../../context";

export default class MemberForm extends Component {
  state = {
    name: "",
  };

  onChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { pseudo: this.state.name } });
    this.setState({ name: "" });
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <>
              <div className="card my-3 col-4 mx-auto text-center">
                <h1 className="card-header">Team Builder</h1>
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                    <div className="form-group">
                      <label htmlFor="name">Ecrire pseudo : </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="name"
                        onChange={this.onChange}
                        value={this.state.name}
                      />
                    </div>
                    <button className="btn btn-primary btn-block">
                      Ajouter un participant !
                    </button>
                  </form>
                </div>
              </div>
              <div className="card col-4 mx-auto">
                <p className="text-center">
                  Particiants ({value.pseudos.length})
                </p>
              </div>
            </>
          );
        }}
      </Consumer>
    );
  }
}
