import { useEffect } from "react";
import styled from "styled-components";

const Filter: React.FC<{
    popular?: any;
    setFiltered?: any;
    activeGenre?: any;
    setActiveGenre?: any;

}> = ({
    popular,
    setFiltered,
    activeGenre,
    setActiveGenre,
}) => {
    useEffect(() => {
        if (activeGenre === 0){
            setFiltered(popular);
            return;
        };
        const filtered = popular.filter((movie: { genre_ids: string | any[]; }) => movie.genre_ids.includes(activeGenre));
        setFiltered(filtered);
    }, [activeGenre])
    return (
        <ButtonWrapper>
            <Button className={activeGenre === 0 ? "acitve" : ''} onClick={() => setActiveGenre(0)}>All</Button>
            <Button className={activeGenre === 35 ? "acitve" : ''} onClick={() => setActiveGenre(35)}>Comedy</Button>
            <Button className={activeGenre === 28 ? "acitve" : ''} onClick={() => setActiveGenre(28)}>Action</Button>
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.div`
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 margin-bottom: 30px;
`;
const Button = styled.button`
 height: 40px;
 border: 2px solid #487eb0;
 outline: none;
 border-radius: 15px;
 padding-left: 15px;
 padding-right: 15px;
 min-width: 80px;
 background-color: transparent;
 cursor: pointer;
`;


export default Filter;