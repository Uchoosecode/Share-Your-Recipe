import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'

import { fetchChefs } from '../action/chefs'
import Chefs from '../component/Chefs';

class ChefContainer extends React.Component {
    
    componentDidMount() {
        console.log(this.props)
        this.props.fetchChefs()
    }
    render() {
       
    console.log(this.props.chefs)
        return(
            <div>
                <Route exact path="/chefs" render={() => <Chefs chefs={this.props.chefs}/>} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        chefs: state.chefs,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {fetchChefs})(ChefContainer)