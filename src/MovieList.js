import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieItem from "../component/MovieItem";

const MovieList = () => {
  const MovieCardStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 5%;
    height: 300px;
    /* 한 줄에 4개씩 각각의 간격은 전체 가로길이의 5%, 한 영화 정보당 높이는 300px */
  `;

  const TitleStyle = styled.div`
    padding: 10px 0px;
    font-size: 30px;
    font-weight: 800;
    color: rgb(70, 70, 70);
  `;

  const MainStyle = styled.div`
    margin: 30px 5%;
  `;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://10.100.102.2:8000/api/movie", {
      method: "get",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMovies(res);
      });
  }, []);

  function deleteById(id) {
    fetch(`http://10.100.102.2:8000/api/movie/${id}`, {
      method: "DELETE",
    })
      .then(function (res) {
        return res.status;
      })

      .then(function (res) {
        if (res === 200) {
          alert(`${id} 삭제 성공`);
          setMovies(movies.filter((value) => value.id !== id));
        } else {
          alert("err");
        }
      });
  }

  return (
    <MainStyle>
      <TitleStyle>Movie List PAGE</TitleStyle>
      <MovieCardStyle>
        {movies.map((res) => (
          <MovieItem movie={res} key={res.id} deleteById={deleteById} />
        ))}
      </MovieCardStyle>
    </MainStyle>
  );
};

export default MovieList;
