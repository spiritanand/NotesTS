import React from "react";
import {
  Col,
  Row
} from "react-bootstrap";
import {
  RawNote,
  Tag
} from "../App";
import NoteCard from "./NoteCard/NoteCard";

interface Props {
  filteredNotes: (RawNote & { tags: Tag[] })[];
}

const NoteList = ({filteredNotes}: Props) => {
  return (
	<Row xs = {1}
		 sm = {2}
		 md = {3}
		 className = "g-3"
	>
	  {filteredNotes.map(note => (
		<Col key = {note.id}>
		  <NoteCard id = {note.id}
					title = {note.title}
					tags = {note.tags}
		  />
		</Col>
	  ))}
	</Row>
  );
};

export default NoteList;
