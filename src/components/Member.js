import React, { Component } from 'react'
import {Consumer} from '../context'

export default class Member extends Component {



  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
    console.log(this.state.pseudos);
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      element:"",
      pseudos: [...this.state.pseudos, {element: this.state.element}]
    })
  }

  delete = (index) => {
    const arr = this.state.pseudos;
    arr.splice(index,1);
    this.setState({
      pseudos: arr
    })
  }

  renderMembers = () => {
    return this.state.pseudos.map((pseudo,index) => {
      return  (
        <div className="card text-center  my-1 mx-auto">
          <h4>{pseudo.element}
            <i className="fa fa-times ml-2" 
              style={{cursor: 'pointer', float: 'right', color:"red"}}
              onClick= {() => this.delete(index)}></i>
          </h4>
        </div>
      )
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="card my-3 col-4 mx-auto">
            <div className="card-header">Team Builder</div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                          
                      <label htmlFor="element">Ajouter participants</label>
                      <input 
                        type="text" 
                        className="form-control form-control-lg"
                        name="element"
                        onChange={this.onChange}
                        value={this.state.element}
                      />
                    </div>
                    <button className="btn btn-primary btn-block">
                      Ajouter un participant !
                    </button>
                  </form>
                </div>
          </div>
          <div className="card col-4 mx-auto">
            <p className="text-center">Particiants (NOMBRES DE PARTICIPANTS)</p>
            {this.renderMembers()}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
