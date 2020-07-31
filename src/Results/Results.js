import React from 'react';
import './Results.css';

export default function Results(props) {
    return (
        <div className="Results">
            {/* map over the results and return the names of the characters with some details */}
            {props.results.map(result => 
                <div className={result.name} key={result.name}>
                    {props.type !== 'films' && <h2>{result.name}</h2>}
                    {props.type === 'films' && <h2>{result.title}</h2>}
                    {props.type === 'people' &&
                        <ul>
                            <li>Height: {result.height} cm</li>
                            <li>Mass: {result.mass} kg</li>
                            <li>Birth Year: {result.birth_year}</li>
                        </ul>
                    }
                    {props.type === 'starships' &&
                        <ul>
                            <li>Hyperdrive Rating: {result.hyperdrive_rating}</li>
                            <li>Manufacturer: {result.manufacturer}</li>
                            <li>Starship Class: {result.starship_class}</li>
                        </ul>
                    }
                    {props.type === 'vehicles' &&
                        <ul>
                            <li>Length: {result.length} m</li>
                            <li>Manufacturer: {result.manufacturer}</li>
                            <li>Model: {result.model}</li>
                        </ul>
                    }
                    {props.type === 'species' &&
                        <ul>
                            <li>Average Height: {result.average_height} m</li>
                            <li>Designation: {result.designation}</li>
                            <li>Language: {result.language}</li>
                        </ul>
                    }
                    {props.type === 'planets' &&
                        <ul>
                            <li>Climate: {result.climate}</li>
                            <li>Population: {result.population}</li>
                            <li>Terrain: {result.terrain}</li>
                        </ul>
                    }
                    {props.type === 'films' &&
                        <ul>
                            <li>Episode: {result.episode_id}</li>
                            <li>Director: {result.director}</li>
                            <li>Opening Crawl: {result.opening_crawl}</li>
                        </ul>
                    }
                </div>
            )}
        </div>
    );
}

Results.defaultProps = {
    results: [],
    type: 'people'
}