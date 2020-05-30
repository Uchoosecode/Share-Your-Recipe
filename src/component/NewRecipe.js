import React, { Component } from 'react';
import { createRecipe } from '../action/recipes';
import { connect } from 'react-redux';

const initialState = {
    chef_id: "",
    title: "",
    ingredients: "",
    instructions: ""
}

class NewRecipe extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            initialState
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    resetForm = () => {
        this.setState(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createRecipe(this.state, this.props.history)
        this.props.history.push("/recipes")
        this.resetForm();
    
    }

    render() {
        return (
            <div className="NewRecipe">
                <h4>Add a Recipe</h4>
                    <form onSubmit={event => this.handleSubmit(event)}>
                        
                        <label>
                           Chef_ID:
                        <input
                            className="input"
                            name="chef_id"
                            placeholder="chef_id"
                            onChange={event => this.handleChange(event)}
                            value={this.state.chef_id} />
                        </label><br/>
                        
                        <label>
                            Title:
                        <input
                            className="input"
                            name="title"
                            placeholder="title"
                            onChange={event => this.handleChange(event)}
                            value={this.state.title} />
                        </label><br/>

                        <label>
                            Ingredients:
                        <textarea
                            className="input"
                            name="ingredients"
                            placeholder="ingredients"
                            onChange={event => this.handleChange(event)}
                            value={this.state.ingredients} />
                        </label><br/>
                            
                        <label>
                            Instructions:
                        <textarea
                            className="input"
                            name="instructions"
                            placeholder="instructions"
                            onChange={event => this.handleChange(event)}
                            value={this.state.instructions} />
                        </label><br/>    

                        <input type="submit" value="Add a Recipe" />
                    </form>
            </div>
        );
    }
}

export default connect(null, { createRecipe })(NewRecipe)