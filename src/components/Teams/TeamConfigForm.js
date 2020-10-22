import React, { Component } from 'react'
import TeamButton from './TeamButton'

export default class TeamConfigForm extends Component {


  state = {
    numbreEquipe : "", 
    numbreJoueurs : "", 
  }

  render() {
    return (
      <>
        <div className="card">
          <h3 className="text-center my-5">Choix du parametre </h3>
          <form onSubmit="#" className="form-inline justify-content-around">
            <div className="">
              <label htmlFor="nombreEquipe">Nombre d'équipes</label>
              <input type="number"
              className="form-control my-2"
              name="nombreEquipe"
              />
            </div>
            <h3>OU</h3>
            <div className="">
              <label htmlFor="nombreJoueurs">Nombre de joueurs par équipe</label>
              <input type="number"
              className="form-control my-2"
              name="nombreJoueurs"
              /> 
            </div>
            <TeamButton onSubmit/>
          </form>
        </div>
      </>
    )
  }
}
