import React from "react";
import NoteForm from "../components/NoteForm/NoteForm";

const NewNote = () => {
  return (
	<>
	  <h1 className="mb-4">
		New Note
	  </h1>
	  <NoteForm></NoteForm>
	</>
  );
};

export default NewNote;
