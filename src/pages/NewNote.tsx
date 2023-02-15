import React from "react";
import {
  NoteData,
  Tag
} from "../App";
import NoteForm from "../components/NoteForm";

interface Props {
  onAddTag: (newTag: Tag) => void;
  availableTags: Tag[];
  onCreateNote: (note: NoteData) => void;
}

const NewNote = ({
				   onAddTag,
				   availableTags,
				   onCreateNote
				 }: Props) => {
  return (
	<>
	  <h1 className = "mb-4">
		New Note
	  </h1>
	  <NoteForm onSubmit = {onCreateNote}
				onAddTag = {onAddTag}
				availableTags = {availableTags}
	  ></NoteForm>
	</>
  );
};

export default NewNote;
