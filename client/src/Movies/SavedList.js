import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';




const SavedList = props => {
  let id = props.id;
  let history = useHistory();
  
  function handleClick() {
      history.push("/");
    }


  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      
      {props.list.map(movie => (
        <nav><span className="saved-movie"><Link to={`/movies/${props.id}`}>{movie.title}</Link></span></nav>
      ))}
      <div onClick={handleClick} className="home-button">
        {/* link and push could also work here*/}
        Home
      </div>
    </div>
  );
};

export default SavedList;