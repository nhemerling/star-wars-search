import React, { Component } from 'react';
import CharacterSearch from '../CharacterSearch/CharacterSearch';
import Results from '../Results/Results';
import config from '../config';
import './Main.css';

export default class Main extends Component {
    state = {
        searchResults: [],
        loading: false
    }

    //set state when user searches new data
    handleShowResults = (searchData) => {
        this.setState({
            searchResults: searchData,
            loading: false
        });
    }

    handleSearch = (event) => {
        event.preventDefault();
        //get the search terms entered by the user
        const searchTerms = event.target.searchInput.value;
        //empty results and provide loading screen
        this.setState({
            searchResults: [],
            loading: true
        });
        //make a fetch call with the search terms
        fetch(`${config.API_ENDPOINT}/people/?search=${searchTerms}`)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(data => {
                this.handleShowResults(data.results)
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        return(
            <main>
                <CharacterSearch showResults={this.handleShowResults} onSearch={this.handleSearch}/>
                <Results results={this.state.searchResults} />
                {this.state.loading && <h3>searching the galaxy...</h3>}
            </main>
        );
    }
}