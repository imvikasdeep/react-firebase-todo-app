
import { Button, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
	
	const [todos, setTodos] = useState([]); 
	const [input, setInput] = useState('');

	// when app is loaded, fetch new todos from the database
	useEffect(() => {
		// this code fires when app.js is loaded
		db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
			setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})));
		})
	}, []);

	const addTodo = (event) => {
		// this will fire when button is cliked

		event.preventDefault(); // will stop refresh on submit form
		
		// send todos to database
		db.collection('todos').add({
			todo: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		})

		setTodos ([...todos, input]);
		setInput(''); // clear the input field after submitting
	}

	return (
		<div className="App">
			<h1>Hello World</h1>

			<form onSubmit={addTodo}>
				<TextField label="Add Todo" value={input} onChange={	event => setInput(event.target.value)} variant="outlined" />
				<Button disabled={!input} type="submit" variant="contained" color="primary">Add todo</Button>
			</form>

			<ul>
				{todos.map(todo => (
					<Todo text={todo.todo} id={todo.id}></Todo>
				))}
			</ul>

		</div>
	);
}

export default App;
