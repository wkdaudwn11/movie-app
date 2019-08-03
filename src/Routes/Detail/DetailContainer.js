import React, { Component } from 'react';
import DetailPresenter from './DetailPresenter';

export default class extends Component {
    state = {
        result: null,
        error: null,
        loading: null
    }

    redner() {
        const { result, error, loading } = this.state;
        return (
            <DetailPresenter
                result={result}
                error={error}
                loading={loading}
            />
        )
    }
}