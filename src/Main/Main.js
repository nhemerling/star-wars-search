import React, { Component } from 'react';
import CharacterSearch from '../CharacterSearch/CharacterSearch';
import Results from '../Results/Results';
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

    render() {
        return(
            <main>
                <CharacterSearch showResults={this.handleShowResults} loading={this.state.loading} />
                <Results results={this.state.searchResults} />
                {this.state.loading && <h3>searching the galaxy...</h3>}
            </main>
        );
    }
}