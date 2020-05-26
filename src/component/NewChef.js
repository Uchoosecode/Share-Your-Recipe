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

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.createChef(this.state, this.props.history)
        .then(res => {
            if (!res.error) {
                this.resetForm()
                this.props.history.push("/chefs")
            }
        })
    }


    render() {
        return (
            <div className="NewChef">
                <h4>Create a Chef</h4>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            name="name"
                            placeholder="name"
                            onChange={this.handleChange}
                            value={this.state.name} /><br/>

                        <input
                            name="bio"
                            placeholder="bio"
                            onChange={this.handleChange}
                            value={this.state.bio} /><br/>

                        <input type="submit" value="Create Chef" />
                    </form>
            </div>
        );
    }
}

export default connect(null, { createChef})(NewChef);
