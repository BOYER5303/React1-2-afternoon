import React from 'react';

const Person = (props) => {
    console.log("props", props)
    const { person } = props;
    const { id, name, city, country, title, employer,favoriteMovies} = person;
    return ( 
       
        <div key={person.id}>
        
                    <h1>{person.id}/25</h1>
                    <h1>{person.name.first} {person.name.last}</h1>
                    <h3>From: {person.city}, {person.country}</h3>
                    <h3>Job Title: {person.title}</h3>
                    <h3>Employer: {person.employer}</h3>
                    <h3>Favorite Movies:</h3>
                    <ol>
                    {person.favoriteMovies.map(movie => {
                        return <li>{movie}</li>
                    })}
                    </ol>
                    </div>
    );
}


export default Person;