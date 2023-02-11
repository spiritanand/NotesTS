import React, {
  FormEvent,
  useRef,
  useState
} from "react";
import {
  Button,
  Col,
  Form,
  Row,
  Stack
} from "react-bootstrap";
import {Link} from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import {
  NoteData,
  Tag
} from "../../App";

interface Props {
  onSubmit: (data: NoteData) => void;
}

const NoteForm = ({onSubmit}: Props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  
  function handleSubmit(e: FormEvent) {
	e.preventDefault();
	
	onSubmit({
	  title   : titleRef.current!.value,
	  markdown: markdownRef.current!.value,
	  tags    : []
	});
  }
  
  return (
	<Form>
	  <Stack gap = {4}>
		<Row>
		  <Col>
			<Form.Group controlId = "title">
			  <Form.Label>
				Title
			  </Form.Label>
			  <Form.Control required
							ref = {titleRef}
			  >
			  </Form.Control>
			</Form.Group>
		  </Col>
		  <Col>
			<Form.Group controlId = "tags">
			  <Form.Label>
				Tags
			  </Form.Label>
			  <CreatableSelect
				value = {selectedTags.map(tag => (
				  {
					label: tag.label,
					value: tag.id,
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
			  />
			</Form.Group>
		  </Col>
		</Row>
		<Row>
		  <Col>
			<Form.Group controlId = "markdown">
			  <Form.Label>
				Body
			  </Form.Label>
			  <Form.Control required
							as = "textarea"
							rows = {10}
							ref = {markdownRef}
			  />
			</Form.Group>
		  </Col>
		</Row>
		<Stack direction = "horizontal"
			   gap = {2}
			   className = "justify-content-end"
		>
		  <Button type = "submit"
				  variant = "primary"
		  >Save</Button>
		  <Link to = "..">
			<Button type = "button"
					variant = "outline-secondary"
			>Cancel</Button>
		  </Link>
		</Stack>
	  </Stack>
	</Form>
  );
};

export default NoteForm;
