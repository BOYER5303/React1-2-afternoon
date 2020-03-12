import React from 'react';


export default function ContentCard(props){
    return(
        <div>
            <h1>{props.data.id}/25</h1>
            <h1>{props.data.name.first} {props.data.name.last}</h1>
            <h2>From: {props.data.city}, {props.data.country}</h2>
            <h2>Job Title: {props.data.name.employer}</h2>
            <h2>Employer: {props.data.employer}</h2>
            <h2>Favorite Movies:</h2>
            <ol>
                <li>{props.data.favoriteMovies[0]}</li>
                <li>{props.data.favoriteMovies[1]}</li>
                <li>{props.data.favoriteMovies[2]}</li>
            </ol>
        </div>
    )
} 