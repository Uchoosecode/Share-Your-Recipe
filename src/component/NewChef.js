import React, { Component } from 'react';
import { createChef } from '../action/chefs';
import { connect } from 'react-redux'

const initialState = {
    name: "",
    bio: ""
}

export class NewChef extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            initialState
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        this.props.createChef(this.state, this.props.history)
        this.props.history.push("/chefs")
        this.resetForm();
    }

    render() {
        return (
            <div className="NewChef">
                <h4>Create a Chef</h4>
                    <form className="chef-form" onSubmit={event => this.handleSubmit(event)}>
                        <input
                            name="name"
                            placeholder="name"
                            onChange={event => this.handleChange(event)}
                            value={this.state.name} /><br/>

                        <br></br><textarea
                            name="bio"
                            placeholder="bio"
                            type="text"
                            onChange={event => this.handleChange(event)}
                            value={this.state.bio} /><br/>

                        <input type="submit" value="Create Chef" />
                    </form>
            </div>
        );
    }
}

export default connect(null, { createChef })(NewChef);
