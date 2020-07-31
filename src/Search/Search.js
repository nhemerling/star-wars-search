import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    render() {
        return (
            <div className="Search">
                <form className="search-form" onSubmit={e => this.props.onSearch(e)}>
                    <label htmlFor="searchType">What are you searching for? </label>
                    <select name="searchType" id="searchType" defaultValue="people">
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="species">Species</option>
                        <option value="planets">Planets</option>
                    </select>
                    <br />
                    <br />
                    <label htmlFor="searchInput">The galaxy awaits your search terms: </label>
                    <input type="text" name="searchInput" id="searchInput" required></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}