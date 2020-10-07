const { useState } = require("react");

const Movie = () => {
  const [Movie, setMovie] = useState({
    title: "",
    rating: "",
    storyline: "",
    picture: "",
  });

  const inputHandle = (e) => {
    //console.log(e.target.value);
    setMovie({
      ...Movie,
      [e.target.name]: e.target.value,
    });
    console.log(1, Movie);
  };

  const MovieRegister = (e) => {
    //event방지
    e.preventDefault();
    fetch("http://10.100.102.2:8000/api/movie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.status)
      .then((res) => {
        if (res === 200) {
          alert("등록 성공");
          props.history.push("/");
        }
      });
  };

  const reset = (e) => {
    e.preventDefault(); // event 방지
    setMovie({
      title: "",
      rating: "",
      storyline: "",
      picture: "",
    });
  };

  return (
    <MainStyle>
      <TitleStyle>Movie Register PAGE</TitleStyle>

      <SubTitleStyle>Title</SubTitleStyle>
      <form>
        <InputStyle
          type="text"
          name="title"
          placeholder="title"
          onChange={inputHandle}
          value={movie.title}
        />
        <br />
        <SubTitleStyle>Rating</SubTitleStyle>
        <InputStyle
          type="text"
          name="rating"
          placeholder="rating"
          onChange={inputHandle}
          value={movie.rating}
        />
        <br />
        <SubTitleStyle>storyline</SubTitleStyle>
        <InputStyle
          type="text"
          name="storyline"
          placeholder="storyline"
          onChange={inputHandle}
          value={movie.storyline}
        />
        <br />
        <SubTitleStyle>Picture</SubTitleStyle>
        <InputStyle
          type="text"
          name="picture"
          placeholder="picture"
          onChange={inputHandle}
          value={movie.picture}
        />
        <br />
        <br />록<ButtonStyle onClick={submitMovie}>등</ButtonStyle>
        {/* <button onClick={reset}>리셋</button> */}
      </form>
    </MainStyle>
  );
};
export default Movie;
