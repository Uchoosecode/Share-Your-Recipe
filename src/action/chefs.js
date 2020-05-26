export const loadChefs = chefs => ({ type: "LOAD_CHEFS", chefs });

export const addChef = chef => ({ type: "ADD_CHEF", chef});

export const fetchChefs = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/chefs")
        .then(res => res.json)
        .then(chefJSON => {
            if (chefJSON.error) {
                alert(chefJSON.error)
            }
            else {
                dispatch(loadChefs(chefJSON))
            }
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
                dispatch(addChef(newChef))
            }
            return newChef
        })
    }
}