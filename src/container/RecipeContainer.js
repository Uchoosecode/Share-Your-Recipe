import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { fetchRecipes } from '../action/recipes'
import Recipes from '../component/Recipes'

class RecipeContainer extends React.Component {

    componentDidMount() {
        this.props.fetchRecipes()
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
                <Route exact path="/recipes" render={() => <Recipes recipes={this.props.recipes} />} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { fetchRecipes })(RecipeContainer)