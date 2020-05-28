
export const fetchChefs = () => {
    return (dispatch) => {
        dispatch({ type: 'LOAD_CHEFS'})
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
    return dispatch => {
        const body = {
            chef
        }
        return("http://localhost:3001/api/v1/chefs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(newChef => {
            if (newChef.error) {
                alert(newChef.error)
            }
            else {
                dispatch()
            }
            return newChef
        })
    }
}