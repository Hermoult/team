import React, { Component } from 'react'
import Member from './Members/MemberForm'

export default class Team extends Component {

  state = {
    name : "",
    players : [],
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
          
          <button className="btn btn-primary btn-block">
                  Générer les équipes
          </button>
        </div>
      </div>
    )
  }
}
