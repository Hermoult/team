import React, { Component } from 'react'
import { Consumer } from '../../context'

export default class Member extends Component {

  delete = (index, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: {index}})
  }

  render () {
    return (
      <Consumer>
        {value => (
          value.pseudos.map((pseudo,index) => {
            return (
              <div className="card text-center my-1 mx-auto" key={index}>
              <h4>{pseudo}
                <i 
                  className="fa fa-times ml-2" 
                  style={{cursor: 'pointer', float: 'right', color:"red"}}
                  onClick= {() => this.delete(index, value.dispatch)}></i>
              </h4>
            </div>
            )
          })
        )}
      </Consumer>
    )
  }
}
