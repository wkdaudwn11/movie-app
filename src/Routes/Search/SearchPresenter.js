import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchPresenter = ({ movieResults, tvResults, searchTerm, loading, error }) => null;

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default SearchPresenter;