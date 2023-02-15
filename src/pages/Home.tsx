import React, {
  useMemo,
  useState
} from "react";
import {
  Col,
  Form,
  Row
} from "react-bootstrap";
import Select from "react-select";
import {
  RawNote,
  Tag
} from "../App";
import NoteList from "../components/NoteList";

interface Props {
  availableTags: Tag[];
  notes: (RawNote & { tags: Tag[] })[];
}

const Home = ({
				availableTags,
				notes
			  }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  
  const filteredNotes = useMemo(
	() => notes.filter(note =>
	  (
		title === "" || note.title.toLowerCase()
							.includes(title)
	  ) && (
		selectedTags.length === 0 || selectedTags.every(
		  tag => note.tags.some(noteTag => noteTag.id === tag.id))
	  )), [
	  notes,
	  title,
	  selectedTags
	]);
  
  return (
	<>
	  <Form>
		<Row className = "my-3 align-items-center">
		  <Col>
			<Form.Group controlId = "title"
			>
			  <Form.Label>
				Title
			  </Form.Label>
			  <Form.Control required
							value = {title}
							onChange = {(e) => setTitle(e.target.value)}
			  />
			</Form.Group>
		  </Col>
		  <Col>
			<Form.Group controlId = "tags">
			  <Form.Label>
				Tags
			  </Form.Label>
			  <Select
				value = {selectedTags.map(tag => (
				  {
					label: tag.label,
					value: tag.id,
				  }
				))}
				options = {availableTags.map(tag => (
				  {
					label: tag.label,
					value: tag.id
				  }
				))}
				onChange = {tags => {
				  setSelectedTags(tags.map(tag => (
					{
					  label: tag.label,
					  id   : tag.value,
					}
				  )));
				}
				}
				isMulti = {true}
				isSearchable = {true}
			  />
			</Form.Group>
		  </Col>
		</Row>
	  </Form>
	  <NoteList filteredNotes = {filteredNotes}></NoteList>
	</>
  );
};

export default Home;
