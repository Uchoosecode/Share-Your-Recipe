import React from 'react';

const Chefs = (props) => {
    console.log(props.chefs.chefs)
    return (
        props.chefs.chefs
        
        ? <div className="Chef">
            
            <div className="chef-header">Chefs</div>
            {props.chefs.chefs.map(chef =>
                <React.Fragment key={chef.id}>
                    <h2 className="chef-name"><small>{chef.id}.</small> {chef.name}</h2>
                    <p className="chef-bio"><strong className="bio-title">Bio: </strong> {chef.bio} </p>
                
                
            
                </React.Fragment >
            )}
        </div>
       : <h3>.....Still Loading.....</h3>
    )
}

export default Chefs
