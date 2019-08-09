import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from '../../components/Section';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Poster from '../../components/Poster';

const Container = styled.div`
    padding: 0px 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    widhth: 100%;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;

const SearchPresenter = ({ movieResults, tvResults, searchTerm, loading, error, handleSubmit, updateTerm }) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input
                placeholder="Search Movies or TV Shows..."
                value={searchTerm}
                onChange={updateTerm}
            />
        </Form>

        {loading ? (
            <Loader />
        ) : (
            <>
                {movieResults && movieResults.length > 0 && (
                    <Section title="Movie Results">
                        {movieResults.map(movie => (
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                imageUrl={movie.poster_path}
                                title={movie.original_title}
                                rating={movie.vote_average}
                                year={movie.release_date.substing(0,4)}
                                isMovie={true}
                            />
                        ))}
                    </Section>
                )}

                {tvResults && tvResults.length > 0 && (
                    <Section title="TV Results">
                        {tvResults.map(tv => (
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
            </>
        )}
        { error && <Message color="#e74c3c" text={error} /> }
        {tvResults && movieResults && tvResults.length === 0 && movieResults === 0 && (
            <Message color="#95a5a6" text="Nothing found" />
        )}
    </Container>
);

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;