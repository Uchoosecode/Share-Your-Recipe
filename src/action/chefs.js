
export const fetchChefs = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CHEFS'});
        fetch('http://localhost:3000/api/v1/chefs')
        .then(res => { return res.json()})
        .then(chefJSON => {
            if (chefJSON.error) {
                alert(chefJSON.error)
            }
            else {
                dispatch({ type: 'LOAD_CHEFS', chefs: chefJSON})}
            })
        }
    }


export const createChef = (chef) => {
    return (dispatch) => {
    
        fetch("http://localhost:3000/api/v1/chefs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(chef)
        })
        .then(res => { return res.json()})
        .then(newChef => {
            if (newChef.error) {
                alert(newChef.error)
            }
            else {
                dispatch({type: 'ADD_CHEF', chefs: newChef})
            } 
            return newChef
            }
            
        )}
}

