import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {Container} from "react-bootstrap";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider
} from "react-router-dom";
import EditNote from "./pages/EditNote";
import Home from "./pages/Home";
import NewNote from "./pages/NewNote";
import RootLayout from "./pages/RootLayout";
import ShowNote from "./pages/ShowNote";

export interface Tag {
  id: string,
  label: string,
}

export interface NoteData {
  title: string,
  markdown: string,
  tags: Tag[]
}

export interface Note
  extends NoteData {
  id: string,
}

const router = createBrowserRouter(createRoutesFromElements(
  <Route path = "/"
		 element = {<RootLayout></RootLayout>}
  >
	<Route index
		   element = {<Home></Home>}
	></Route>
	<Route path = "/new-note"
		   element = {<NewNote></NewNote>}
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

const App = () => {
  
  
  return (
	<Container className = "my-4">
	  <RouterProvider router = {router}></RouterProvider>
	</Container>
  );
};

export default App;
