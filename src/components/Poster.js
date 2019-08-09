import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Containter = styled.div``;
const ImageContainter = styled.div``;
const Image = styled.div``;
const Rating = styled.span``;
const Title = styled.span``;
const Year = styled.span``;

const Poster = ({ id, imageUrl, title, rating, year, isMovie }) => {
    <Link to={ isMovie ? `/movie/${id}` : `/show/${id}` }>
        <Containter>
            <ImageContainter>
                <Image bgurl={imageUrl} />
                <Rating>
                    <span role="img" aria-label="rating">⭐</span>
                    {"  "}
                    {rating}/10
                </Rating>
                <Title>{title}</Title>
                <Year>{year}</Year>
            </ImageContainter>
        </Containter>
    </Link>
}

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool,
}

export default Poster;