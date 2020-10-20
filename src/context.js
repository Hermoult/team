import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {

  switch(action.type) {
    case 'DELETE_CONTACT' :
      const newPseudos = [...state.pseudos]
      newPseudos.splice(action.payload.index,1)
      return {
        pseudos:newPseudos
      };
      case 'ADD_CONTACT' :
        return {
          pseudos : [action.payload.pseudo, ...state.pseudos]
        }
      default:
      return state;
  }
}

export class Provider extends Component {

  state = {
    pseudos: [],

    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
export const Consumer = Context.Consumer;