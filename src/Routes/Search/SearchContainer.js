import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';

export default class extends Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: null,
        error: null,
        loading: null
    }

    redner() {
        const { movieResults, tvResults, searchTerm, error, loading } = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
            />
        )
    }
}