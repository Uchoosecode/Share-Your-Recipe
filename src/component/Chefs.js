import React from 'react';

const Chefs = (props) => {
    console.log(props.chefs.chefs)
    return (
        <div className="Chef">
            <div className="chef-header">Chefs</div>
            {props.chefs.chefs.map(chef =>
                <ul key={chef.id}><h2 className="chef-name"> {chef.name}</h2><p className="chef-bio"><strong className="bio-title">Bio: </strong> {chef.bio} </p></ul>
            )}
        </div>
       
    )
}

export default Chefs

// return(
//     chefs
//     ? <div>
//         Chefs List
       
//         <li>{chef.name} - {chef.bio} </li>)
//     </div>
//     : <h2>...Still Loading...</h2>
// )
// }