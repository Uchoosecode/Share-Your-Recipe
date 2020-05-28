import React from 'react'
import { connect } from 'react-redux'

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

                <Recipes recipes={this.props.recipes} />

                RecipeContainer                
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