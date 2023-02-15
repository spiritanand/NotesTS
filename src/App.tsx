import "bootstrap/dist/css/bootstrap.min.css";
import React, {useMemo} from "react";
import {Container} from "react-bootstrap";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider
} from "react-router-dom";
import {v4 as uuidV4} from "uuid";
import {useLocalStorage} from "./hooks/useLocalStorage";
import EditNote from "./pages/EditNote";
import Home from "./pages/Home";
import NewNote from "./pages/NewNote";
import RootLayout from "./pages/RootLayout";
import ShowNote from "./pages/ShowNote";

export interface Tag {
  id: string,
  label: string,
}

export interface RawNoteData {
  title: string,
  markdown: string,
  tagIds: string[]
}

export interface RawNote
  extends RawNoteData {
  id: string;
}

export interface NoteData {
  title: string,
  markdown: string,
  tags: Tag[]
}

const App = () => {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);
  
  const notesWithTags = useMemo(() => notes.map(note => (
	{
	  ...note,
	  tags: tags.filter(tag => note.tagIds.includes(tag.id))
	}
  )), [
	notes,
	tags
  ]);
  
  function handleCreateNote({
							  tags,
							  ...data
							}: NoteData) {
	setNotes(prevNotes => [
	  ...prevNotes,
	  {
		...data,
		id    : uuidV4(),
		tagIds: tags.map(tag => tag.id)
	  }
	]);
  }
  
  function handleAddTag(newTag: Tag) {
	setTags(prevState => [
	  ...prevState,
	  newTag
	]);
  }
  
  const router = createBrowserRouter(createRoutesFromElements(
	<Route path = "/"
		   element = {<RootLayout></RootLayout>}
	>
	  <Route index
			 element = {<Home availableTags = {tags}
							  notes = {notesWithTags}
			 ></Home>}
	  ></Route>
	  <Route path = "/new-note"
			 element = {<NewNote onAddTag = {handleAddTag}
								 availableTags = {tags}
								 onCreateNote = {handleCreateNote}
			 ></NewNote>}
	  ></Route>
	  <Route path = "/note/:id">
		<Route index
			   element = {<ShowNote></ShowNote>}
		></Route>
		<Route path = "edit"
			   element = {<EditNote></EditNote>}
		></Route>
	  </Route>
	  <Route path = "*"
			 element = {<Navigate to = "/"/>}
	  ></Route>
	</Route>
  ));
  return (
	<Container className = "my-4">
	  <RouterProvider router = {router}></RouterProvider>
	</Container>
  );
};

export default App;
