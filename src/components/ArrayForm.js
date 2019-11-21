import React from 'react'

class ArrayForm extends React.Component {
    state={
        Term1: '',
        Term2: '',
        Term3: '' 
    }
    onFormSubmit = (event) => {
        event.preventDefault();

        alert("Your array: [" + this.state.Term1 + ", " + this.state.Term2 + ", " + this.state.Term3 + "]");

    }

    render(){
        return (
            <div className="text-container">
                    <div className="ui center aligned header"><p>Build an array!</p></div>
                    <div class="ui form">
                        <div className="fields">
                            <div className="field">
                            <label>First #</label>
                            <input 
                                type="number" 
                                placeholder="1" 
                                value={this.state.Term1}
                                onChange={(e) => this.setState({ Term1: e.target.value })}
                                />
                            </div>
                            <div className="field">
                            <label>Second #</label>
                            <input 
                                type="number" 
                                placeholder="2" 
                                value={this.state.Term2}
                                onChange={(e) => this.setState({ Term2: e.target.value })}
                                />
                            </div>
                            <div className="field">
                            <label>Third #</label>
                            <input 
                                type="number" 
                                placeholder="3" 
                                value={this.state.Term3}
                                onChange={(e) => this.setState({ Term3: e.target.value })}
                                />
                            </div>
                        </div>
                        </div>
                    <button className="fluid ui button" onClick={this.onFormSubmit}>Generate Array</button>
                </div>
        )
    }
    }
    

export default ArrayForm
