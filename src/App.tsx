import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Movie from './components/Movie';
import PopUp from './components/PopUp';
import Filter from './components/Filter';
import { motion, AnimatePresence } from "framer-motion";

function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, [])

  const fetchPopular = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=65e5e9c46df5de686ab98e8e04f562fb&language=en-US&page=1");
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);

  }

  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <Wrapper>
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />

      <Card layout>
        <AnimatePresence>
          {filtered.map((movie, index) => {
            return <CardWrapper onClick={() => setShowPopUp(!showPopUp)} key={index}><Movie movie={movie} /></CardWrapper>
          })}
        </AnimatePresence>
      </Card>

    </Wrapper>
  );
}


const Wrapper = styled(motion.div)`
  margin: 5% 10%;
`;
const Card = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;
const CardWrapper = styled.div`
  cursor: pointer;
`;

export default App;
