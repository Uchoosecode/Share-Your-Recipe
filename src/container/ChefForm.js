import React, { Component } from 'react'

export class ChefForm extends Component {

    state = {
        name: "",
        bio: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        let strongParams = {
            chef: {
                name: this.state.name,
                bio: this.state.bio
            }
        }

        fetch('http://localhost:3001/api/v1/chefs', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
        })
            .then(res => res.json())
            .then(chef => {
                this.props.history.push('/chefs')
        })
    }

    render() {
        return (
            <> 
                <h4>Create a Chef</h4>
                <form >
                    <div className="input-field">
                        <label htmlFor="name">Name:</label>< br/>
                        <input type="text" name="name" id="name" value={this.state.title} onChange={this.handleChange} />
                    </div><br />

                    <div className="input-field">
                        <label htmlFor="bio">Bio:</label><br />
                        <textarea name="bio" id="" cols="30" rows="10" className="materialize-textarea" value={this.state.content} onChange={this.handleChange}></textarea>
                    </div>

                    <input type="submit" value="Create Chef" className="btn brown" />

                </form>
            </>
        )
    }
}

export default ChefForm
