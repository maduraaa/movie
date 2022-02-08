import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Movie from './components/Movie';
import PopUp from './components/PopUp';

function App() {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, [])

  const fetchPopular = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=65e5e9c46df5de686ab98e8e04f562fb&language=en-US&page=1");
    const movies = await data.json();
    console.log(movies.results);
    setPopular(movies.results);
  }

  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <Wrapper>
      <Card>
        {popular.map((movie, index) => {
          return <CardWrapper onClick={() => setShowPopUp(!showPopUp)} key={index}><Movie movie={movie} /></CardWrapper>
        })}
      </Card>

      {/* {showPopUp ?
        <PopUp movie={popular} onClose={() => setShowPopUp(!showPopUp)} />
        : null} */}
    </Wrapper>
  );
}


const Wrapper = styled.div`
`;
const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  margin: 5% 10%;
`;
const CardWrapper = styled.div`
  cursor: pointer;
`;

export default App;
