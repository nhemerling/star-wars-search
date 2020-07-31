import React from 'react';
import './Results.css';

export default function Results(props) {
    // console.log('type of results: ', typeof props.results);
    // console.log(props.results[0]);
    return (
        <div className="Results">
            {/* map over the results and return the names of the characters with some details */}
            {props.results.map(result => 
                <div className={result.name} key={result.name}>
                    <h2>{result.name}</h2>
                    <ul>
                        <li>height: {result.height} cm</li>
                        <li>mass: {result.mass} kg</li>
                        <li>birth year: {result.birth_year}</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

Results.defaultProps = {
    results: []
}