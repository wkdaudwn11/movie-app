import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from '../../components/Section';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Poster from '../../components/Poster';

const Container = styled.div`
    padding: 0px 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
    loading ? (
        <Loader />
    ) : (
        <Container>
            {topRated && topRated.length > 0 && (
                <Section title="TopRated">
                    { topRated.map(tv => (
                        <Poster
                            key={tv.id}
                            id={tv.id}
                            imageUrl={tv.poster_path}
                            title={tv.original_name}
                            rating={tv.vote_average}
                            year={tv.release_date.substing(0,4)}
                            isMovie={false}
                        />
                    ))}
                </Section>
            )}

            {popular && popular.length > 0 && (
                <Section title="Popular TV">
                    { popular.map(tv => (
                        <Poster
                            key={tv.id}
                            id={tv.id}
                            imageUrl={tv.poster_path}
                            title={tv.original_name}
                            rating={tv.vote_average}
                            year={tv.release_date.substing(0,4)}
                            isMovie={false}
                        />
                    ))}
                </Section>
            )}

            {airingToday && airingToday.length > 0 && (
                <Section title="AiringToday TV">
                    { airingToday.map(tv => (
                        <Poster
                            key={tv.id}
                            id={tv.id}
                            imageUrl={tv.poster_path}
                            title={tv.original_name}
                            rating={tv.vote_average}
                            year={tv.release_date.substing(0,4)}
                            isMovie={false}
                        />
                    ))}
                </Section>
            )}
            { error && <Message color="#e74c3c" text={error} /> }
        </Container>
    )
);

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default TVPresenter;