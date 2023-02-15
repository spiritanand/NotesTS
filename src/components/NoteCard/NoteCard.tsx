import React from "react";
import {
  Badge,
  Card,
  Stack
} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Tag} from "../../App";
import styles from "./NoteCard.module.css";

interface Props {
  id: string;
  title: string;
  tags: Tag[];
}

const NoteCard = ({
					id,
					title,
					tags
				  }: Props) => {
  return (
	<Card as = {Link}
		  to = {`/note/${id}`}
		  className = {`h-100 text-reset text-decoration-none ${styles.card}`}
	>
	  <Card.Body>
		<Stack gap = {2}
			   className = "align-items-center justify-content-center h-100"
		>
		<span className = "fs-5">
		  {title}
		</span>
		  {tags.map(tag =>
			<Stack key = {tag.id}
				   gap = {1}
				   direction = "horizontal"
				   className = "flex-wrap justify-content-center"
			>
			  <Badge className = "text-truncate">
				{tag.label}
			  </Badge>
			</Stack>
		  )}
		</Stack>
	  </Card.Body>
	</Card>
  );
};

export default NoteCard;
