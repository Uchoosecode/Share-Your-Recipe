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
                <h4 className="form-title">Add a Recipe</h4>
                <div className="recipe-instructions">**Add your Chef ID to add a Recipe!**</div>
                    <form onSubmit={event => this.handleSubmit(event)}>
                        
                        <label className="recipe-label">
                           Chef_ID:
                        <input
                            className="input-chef_id"
                            name="chef_id"
                            placeholder="chef_id"
                            onChange={event => this.handleChange(event)}
                            value={this.state.chef_id} />
                        </label><br/>
                        
                        <label className="recipe-label">
                            Title:
                        <input
                            className="input-title"
                            name="title"
                            placeholder="title"
                            onChange={event => this.handleChange(event)}
                            value={this.state.title} />
                        </label><br/>

                        <label className="recipe-label">
                            Ingredients:
                        <textarea
                            className="input-ingredients"
                            name="ingredients"
                            placeholder="ingredients"
                            onChange={event => this.handleChange(event)}
                            value={this.state.ingredients} />
                        </label><br/>
                            
                        <label className="recipe-label">
                            Instructions:
                        <textarea
                            className="input-instructions"
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