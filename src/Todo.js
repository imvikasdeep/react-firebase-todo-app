import { Button, ListItem, ListItemText, List } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import db from './firebase'

function Todo(props) {
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemText primary={props.text} id={props.key} ></ListItemText>
                    <DeleteIcon onClick={event => db.collection('todos').doc(props.id).delete()}></DeleteIcon>
                </ListItem>
            </List>
        </div>
    )
}

export default Todo
