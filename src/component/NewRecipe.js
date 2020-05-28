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

    state = {
        initialState
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.createRecipe(this.state, this.props.history)
        .then(res => {
            if (!res.error) {
                this.resetForm()
                this.props.history.push("/recipes")
            }
        })
    }

    render() {
        return (
            <div className="NewRecipe">
                <h4>Add a Recipe</h4>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            name="title"
                            placeholder="title"
                            onChange={this.handleChange}
                            value={this.state.title} /><br/>

                        <input
                            name="ingredients"
                            placeholder="ingredients"
                            onChange={this.handleChange}
                            value={this.state.ingredients} /><br/>
                        
                        <input
                            name="instructions"
                            placeholder="instructions"
                            onChange={this.handleChange}
                            value={this.state.instructions} /><br/>

                        <input type="submit" value="Add a Recipe" />
                    </form>
            </div>
        );
    }
}

export default connect(null, { createRecipe })(NewRecipe)