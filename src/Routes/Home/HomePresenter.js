import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Section from '../../components/Section';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Poster from '../../components/Poster';

const Container = styled.div`
    padding: 0px 10px;
`;

class HomePresenter extends Component {
    render() {
        const { nowPlaying, popular, upcoming, loading, error } = this.props;   
        return (
            <>
                <Helmet>
                    <title>Movies | Nomfix</title>
                </Helmet>
                {loading ? (
                    <Loader />
                ) : (
                    <Container>
                        <Helmet>
                            <title>Movies | Nomflix</title>
                        </Helmet>
                        {nowPlaying && nowPlaying.length > 0 && (
                            <Section title="Now Playing">
                                {nowPlaying.map(movie => (
                                    <Poster
                                        key={movie.id}
                                        id={movie.id}
                                        imageUrl={movie.poster_path}
                                        title={movie.original_title}
                                        rating={movie.vote_average}
                                        year={movie.release_date.substring(0, 4)}
                                        isMovie={true}
                                    />
                                ))}
                            </Section>
                        )}
                        {upcoming && upcoming.length > 0 && (
                            <Section title="Upcoming Movies">
                                {upcoming.map(movie => (
                                    <Poster
                                        key={movie.id}
                                        id={movie.id}
                                        imageUrl={movie.poster_path}
                                        title={movie.original_title}
                                        rating={movie.vote_average}
                                        year={movie.release_date.substring(0, 4)}
                                        isMovie={true}
                                    />
                                ))}
                            </Section>
                        )}
                        {popular && popular.length > 0 && (
                            <Section title="Popular Movies">
                                {popular.map(movie => (
                                    <Poster
                                        key={movie.id}
                                        id={movie.id}
                                        imageUrl={movie.poster_path}
                                        title={movie.original_title}
                                        rating={movie.vote_average}
                                        year={movie.release_date.substring(0, 4)}
                                        isMovie={true}
                                    />
                                ))}
                            </Section>
                        )}
                        {error && <Message color="#e74c3c" text={error} />}
                    </Container>
                )}
            </>
        )
    }
}

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcomfing: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;