import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { fetchChefs } from '../action/chefs'
import Chefs from '../component/Chefs';

class ChefContainer extends React.Component {
    
    componentDidMount() {
        console.log(this.props)
        this.props.fetchChefs()
    }
    render() {
        // debugger;
    console.log(this.props.chefs)
        return(
            <div>
                
                <Chefs chefs={this.props.chefs}/>
                {/* <Switch>
                    <Route exact path="/chefs/:id" render={(routerProps)=> {
                        const chef = chefs.find(chef => chef.id === parseInt(routerProps.match.params.id))
                        return <Chef {...routerProps} chef={chef} />
                    }} />
                </Switch> */}
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