import React from "react";
import { useHistory } from "react-router-dom";

const SavedList = props => {
  let history = useHistory();
  
    function handleClick() {
      history.push("/");
    }


  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div onClick={handleClick} className="home-button">
        {/* link and push could also work here*/}
        Home
      </div>
    </div>
  );
};

export default SavedList;