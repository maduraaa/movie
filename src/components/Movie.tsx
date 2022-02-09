import styled from 'styled-components';
import { motion } from "framer-motion";


const Movie: React.FC<{
    movie?: any;
    id?: number
}> = ({
    movie,
    id
}) => {
        return (
            <Wrapper 
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            >
                <MovieImg src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.title} />
                <MovieTitle>{movie.title}</MovieTitle>
            </Wrapper>

        )
    }


const MovieTitle = styled.h2`
    font-size: 16px;
`;
const MovieImg = styled.img`
    width: 100%;
    height: 30vh;
    object-fit: cover;
    border-radius: 10px;
`;
const Wrapper = styled(motion.div)`
    position: relative;
    overflow: hidden;
`;
export default Movie;