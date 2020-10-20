import React, { Component } from 'react'

export default class TeamButton extends Component {
  
  render() {

    onSubmit = (e) => {
      e.preventdefault();
      
    }


    return (
      <div>
          <button className="btn btn-primary btn-block" onClick={this.onSubmit}>
            Générer les équipes
          </button>
      </div>
    )
  }
}
