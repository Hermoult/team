import React, { Component } from 'react'


const Context = React.createContext();

const reducer = (state, action) => {

  switch(action.type) {
    case 'DELETE_CONTACT' :
      return {
        contacts: state.contacts.filter(contact =>
          contact.id !== action.paylod)
      };
      default:
      return state;
  }
}

export class Provider extends Component {

  state = {
    element:"",
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