import React, {Component} from 'react';
import TVPresenter from './TVPresenter';
import { tvApi } from '../../api';

class TvContainer extends Component {
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
                data: { results: topRated }
            } = await tvApi.topRated();
            const {
                data: { results: popular }
            } = await tvApi.popular();
            const {
                data: { results: airingToday }
            } = await tvApi.airingToday();
            this.setState({
                topRated,
                popular,
                airingToday
            })
        }catch{
            this.setState({
                error: "Can't find tv information."
            })
        }finally{
            this.setState({
                loading: false
            })
        }
    }

    render() {
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

export default TvContainer;