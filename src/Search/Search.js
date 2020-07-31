import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    render() {
        return (
            <div className="Search">
                <form className="search-form" onSubmit={e => this.props.onSearch(e)}>
                    <label htmlFor="searchInput">The Galaxy awaits your search terms:</label>
                    <br />
                    <input type="text" name="searchInput" id="searchInput" required></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}