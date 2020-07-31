import React, { Component } from 'react';
import Search from '../Search/Search';
import Results from '../Results/Results';
import config from '../config';
import './Main.css';

export default class Main extends Component {
    state = {
        searchResults: [],
        searchType: 'people',
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
        //get search type entered by the user
        const searchType = event.target.searchType.value;
        //empty results and provide loading screen
        this.setState({
            searchResults: [],
            searchType: searchType,
            loading: true
        });
        //make a fetch call with the search terms
        fetch(`${config.API_ENDPOINT}/${searchType}/?search=${searchTerms}`)
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
                <Search showResults={this.handleShowResults} onSearch={this.handleSearch}/>
                <Results results={this.state.searchResults} type={this.state.searchType}/>
                {this.state.loading && <h3>searching the galaxy...</h3>}
            </main>
        );
    }
}