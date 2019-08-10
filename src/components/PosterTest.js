import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Containter = styled.div`
    font-size: 12px;
`;

const Image = styled.div`
    background-image: url()(${props => props.bgUrl});
    height: 100px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
`;

const Rating = styled.span`
    bottom: 5px;
    right: 5px;
    position:  absolute;
    opacity: 0;
    transition: opacity 0.1s linear;
`;

const ImageContainter = styled.div`
    margin-bottom: 5px;
    position: relative;
    &:hover {
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity: 1;
        }
    }
`;

const Title = styled.span`
    display: block;
    margin-bottom: 3px;
`;

const Year = styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
`;


class PosterTest extends Component {
    render() {
        const { id, imageUrl, title, rating, year, isMovie } = this.props;
        return (
            <Link to={ isMovie ? `/movie/${id}` : `/show/${id}` }>
                <Containter>
                    <ImageContainter>
                        <Image bgurl={
                            imageUrl
                            ? `https://image.tmdb.org/t/p/w300${imageUrl}`
                            : require('./assets/noPosterSmall.png')
                        } />
                        <Rating>
                            <span role="img" aria-label="rating">⭐</span>
                            {"  "}
                            {rating}/10
                        </Rating>
                        <Title>
                            {title.length > 18 ? `${title.substring(0,18)}...` : title}
                        </Title>
                        <Year>{year}</Year>
                    </ImageContainter>
                </Containter>
            </Link>
        )
    }
}

PosterTest.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool,
}

export default PosterTest;