import React from 'react';


const PlayersList = props => {
    // console.log(props.player)

    return(
        <div className= "players-list" id= "playerList">
            {props.player.map(person =>
                <div key={person.id} id= {person.id} name= "playerCard" className= "playerCard">
                    <h2 className="name" >{person.name}</h2>
                    <p className= "information" >Country: {person.country}<br/> 
                    Searches: {person.searches} </p>
                </div>
                )}
        </div>
    )
}

export default PlayersList