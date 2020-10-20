import React, { Component } from 'react'

export default class TeamConfigForm extends Component {


  state = {
    numbreEquipe : "", 
    numbreJoueurs : "", 
  }
/*   onSubmit = (e) => {
    this.setState ({
      
    })
  } */

  render() {
    return (
      <div>
        <div className="card">
          <h3 className="text-center my-5">Choix du parametre </h3>
          <form onSubmit="#" className="form-inline">
            <label htmlFor="nombreEquipe" className="col-12">Nombre d'équipes</label>
            <input type="number"
            className="form-control mx-auto"
            name="nombreEquipe"
            />
            <label htmlFor="nombreJoueurs" className="col-12">Nombre de joueurs par équipe</label>
            <input type="number"
            className="form-control mx-auto"
            name="nombreJoueurs"
            /> 

          </form>
        </div>
      </div>
    )
  }
}
