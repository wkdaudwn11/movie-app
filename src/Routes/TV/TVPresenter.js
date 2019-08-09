import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from '../../components/Section';
import Loader from '../../components/Loader';

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
                        <span key={tv.id}>{tv.title}</span>
                    ))}
                </Section>
            )}

            {popular && popular.length > 0 && (
                <Section title="Popular TV">
                    { popular.map(tv => (
                        <span key={tv.id}>{tv.title}</span>
                    ))}
                </Section>
            )}

            {airingToday && airingToday.length > 0 && (
                <Section title="AiringToday TV">
                    { airingToday.map(tv => (
                        <span key={tv.id}>{tv.title}</span>
                    ))}
                </Section>
            )}
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