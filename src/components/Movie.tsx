import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Movie: React.FC<{
    movie?: any;
    id?: number
}> = ({
    movie,
    id
}) => {
        return (
            <MovieCard>
                <Wrapper>
                    <MovieImg src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.title} />
                    <MovieMoreInfo>
                        <MoreInfoTitle>Release date: <MoreInfoTitleSpan>{movie.release_date}</MoreInfoTitleSpan></MoreInfoTitle>
                        <MoreInfoTitle>Vote average: <MoreInfoTitleSpan>{movie.vote_average}</MoreInfoTitleSpan></MoreInfoTitle>
                    </MovieMoreInfo>
                </Wrapper>
                <MovieTitle>{movie.title}</MovieTitle>

            </MovieCard>
        )
    }

const MovieCard = styled.div`
`;
const MovieTitle = styled.h2`
    font-size: 16px;
`;
const MovieImg = styled.img`
    width: 100%;
    height: 30vh;
    object-fit: cover;
    border-radius: 10px;
`;

const MovieMoreInfo = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: -100%;
    right: 0;
    width: 100%;
    height: 65px;
    transition: all 10ms;
    border-radius: 10px;
`;
const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
        &:hover ${MovieMoreInfo} {
            bottom: 4px;
            transition: all 10ms;
        }
`;
const MoreInfoTitle = styled.div`
    color: #fff;
    font-weight: 500; 
    padding: 5px 10px;
    font-size: 15px;
`;
const MoreInfoTitleSpan = styled.span`
    color: #fff;
    font-weight: 500; 
    padding-left: 15px;
`;

export default Movie;