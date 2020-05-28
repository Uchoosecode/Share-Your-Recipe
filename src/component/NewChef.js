import React, { Component } from 'react';
import { createChef } from '../action/chefs';
import { connect } from 'react-redux'

const initialState = {
    name: "",
    bio: ""
}

export class NewChef extends Component {

    state = {
       initialState
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value})
    }

    resetForm = () => {
        this.setState(initialState)
      }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.createChef(this.state)
        this.resetForm();
    }

    render() {
        return (
            <div className="NewChef">
                <h4>Create a Chef</h4>
                    <form className="chef-form" onSubmit={this.handleSubmit}>
                        <input
                            name="name"
                            placeholder="name"
                            onChange={this.handleChange}
                            value={this.state.name} /><br/>

                        <br></br><textarea
                            name="bio"
                            placeholder="bio"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.bio} /><br/>

                        <input type="submit" value="Create Chef" />
                    </form>
            </div>
        );
    }
}

export default connect(null, { createChef })(NewChef);
