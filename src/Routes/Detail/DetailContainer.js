import React, { Component } from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from '../../api';

export default class extends Component {

    constructor(props){
        super(props);
        const {
            location: { pathname }
        } = props;

        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        }
    }

    async componentDidMount() {
        const {
            match: {
                params: { id }
            },
            history: { push }
        } = this.props;

        const { isMovie } = this.state;
        const parsedId = parseInt(id);

        if(isNaN(parsedId)){
            return push("/");
        }

        let result = null;

        try {
            if (isMovie) {
                // const request = await moviesApi.movieDetail(parsedId);
                // result = request.data;
                ({ data: result } = await moviesApi.movieDetail(parsedId));
            }else{
                // const request = await tvApi.showDetail(parsedId);
                // result = request.data;
                ({ data: result } = await tvApi.showDetail(parsedId));
            }
        }catch{
            this.setState({ error: "Can't find anything..." });
        }finally{
            this.setState({ loading: false, result });
        }
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