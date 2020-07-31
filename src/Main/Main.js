import React, { Component } from 'react';
import CharacterSearch from '../CharacterSearch/CharacterSearch';
import Results from '../Results/Results';
import './Main.css';

export default class Main extends Component {
    state = {
        searchResults: []
    }

    handleShowResults = (searchData) => {
        this.setState({
            searchResults: searchData
        });
    }

    render() {
        return(
            <main>
                <CharacterSearch showResults={this.handleShowResults} />
                <Results results={this.state.searchResults} />
            </main>
        );
    }
}