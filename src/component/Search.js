
import React, { Component } from 'react'

export class Search extends Component {

    render() {
        return (
        <div className="search">
            <form className="search-form">
                <input className="search-bar" type="text" />
                    <button className="search-button" type="submit">
                        Search
                    </button>    
            </form>            
        </div>
        )
    }
}

export default Search
