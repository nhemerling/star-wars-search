import React, { Component } from 'react';
import config from '../config'
import './CharacterSearch.css';

export default class CharacterSearch extends Component {

    handleSearch = (event) => {
        event.preventDefault();
        //get the search terms entered by the user
        const searchTerms = event.target.searchInput.value;
        // console.log(searchTerms);
        // console.log(config.API_ENDPOINT);
        //make a fetch call with the search terms
        fetch(`${config.API_ENDPOINT}/people/?search=${searchTerms}`)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(data => {
                // console.log(data);
                // console.log(data.results);
                // console.log(data.results[0]);
                // console.log(data.results[0].name)
                // console.log('is this an array?', typeof data.results);
                this.props.showResults(data.results)
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        return (
            <div className="Search">
                <form className="search-form" onSubmit={e => this.handleSearch(e)}>
                    <label htmlFor="searchInput">The Galaxy awaits your search terms:</label>
                    <input type="text" name="searchInput" id="searchInput" required></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}