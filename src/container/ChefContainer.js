import React from 'react';
import { connect } from 'react-redux';

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
                
                <Chefs chefs={this.props.chefs}/>
                
                ChefContainer
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