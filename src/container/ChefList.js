import React, { Component } from 'react';
import Chef from '../presentation/Chef';

export class ChefList extends Component {
    state = {
        chefs: []
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/v1/chefs")
        .then(res => res.json())
        .then(chefs => this.setState({ chefs }))
    }

    render() {
        const chefs = this.state.chefs.map((chef, i) => (
            <Chef key={i} chef={chef} />
        ))
        console.log( chefs )

        return (
            <>
                <h4> Chefs </h4>
                { chefs }
            </>
        )
    }
}

export default ChefList
