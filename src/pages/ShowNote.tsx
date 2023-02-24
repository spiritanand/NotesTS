import React from "react";
import {useParams} from "react-router-dom";

const ShowNote = () => {
  const {id} = useParams();
  
  return (
	<div>
	  ShowNote
	</div>
  );
};

export default ShowNote;
