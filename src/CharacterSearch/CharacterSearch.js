import React, { Component } from 'react';
import './CharacterSearch.css';

export default class CharacterSearch extends Component {
    render() {
        return (
            <div className="Search">
                <form className="search-form" onSubmit={e => this.props.onSearch(e)}>
                    <label htmlFor="searchInput">The Galaxy awaits your search terms:</label>
                    <input type="text" name="searchInput" id="searchInput" required></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}