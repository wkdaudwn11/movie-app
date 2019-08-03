import React, { Component } from 'react';
import TVPresenter from './TVPresenter';
import { tvApi } from '../../api';

export default class extends Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        error: null,
        loading: null
    }

    async componentDidMount() {
        try {
            const {
                data: { results: nowPlaying }
            } = await tvApi.topRated();
            const {
                data: { results: upcoming }
            } = await tvApi.popular();
            const {
                data: { results: popular }
            } = await tvApi.airingToday();
            this.setState({
                nowPlaying,
                upcoming,
                popular
            })
        }catch{
            this.setState({
                error: "Can't find movies information."
            })
        }finally{
            this.setState({
                loading: false
            })
        }
    }

    redner() {
        const { topRated, popular, airingToday, error, loading } = this.state;
        return (
            <TVPresenter
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                error={error}
                loading={loading}
            />
        )
    }
}