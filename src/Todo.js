import { ListItem, ListItemText, List } from '@material-ui/core';
import React from 'react';

function Todo(props) {
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemText primary={props.text} id={props.key} ></ListItemText>
                </ListItem>
            </List>
        </div>
    )
}

export default Todo
