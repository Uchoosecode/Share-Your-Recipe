
export const fetchChefs = () => {
    return (dispatch) => {
        dispatch({ type: 'LOAD_CHEFS'});
        fetch('http://localhost:3001/api/v1/chefs')
        .then(res => {
            return res.json()
        })
        .then(chefJSON => {
            dispatch({ type: 'ADD_CHEFS', chefs: chefJSON})
        })      
    }
}

export const createChef = (chef) => {
    return (dispatch) => {
       dispatch({ type: 'ADD_CHEFS'});
        fetch("http://localhost:3001/api/v1/chefs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(chef)
        })
        .then(res => {
            return res.json()
        })
        .then(newChef => {
            dispatch({type: 'ADD_CHEFS', chefs: newChef})
        })

    }
}