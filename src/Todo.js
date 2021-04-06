import { Button, ListItem, ListItemText, List, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import DeleteIcon from '@material-ui/icons/Delete';
import React, {useState} from 'react';
import db from './firebase'

function Todo(props) {
    const [open,setOpen] = useState(false);
    const [input, setInput] =useState('');

    function getModalStyle() {
        const top = 50 + Math.random();
        const left = 50 + Math.random();
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const [modalStyle] = useState(getModalStyle);
    
    const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
    }));

    const classes = useStyles();

    const updateTodo = () => {
        // update the todo here

        db.collection('todos').doc(props.id).set({
            todo: input
        }, { merge: true });

        setOpen(false);
    }

    return (
        <div>

            <Modal open={open} onClose={e => setOpen(false)} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" >
                <div style={modalStyle} className={classes.paper}>
                    <h2>This is the modal</h2>
                    <input placeholder={props.text} type="text" value={input} onChange={e => setInput(e.target.value)}/>
                    <Button onClick={updateTodo}> Update Todo </Button>
                </div>
            </Modal>

            <List>
                <ListItem>
                    <ListItemText primary={props.text} id={props.key} ></ListItemText>
                    <button type="button" onClick={e => setOpen(true)}>
                        Edit
                    </button>
                    <DeleteIcon onClick={event => db.collection('todos').doc(props.id).delete()}></DeleteIcon>
                </ListItem>
            </List>
        </div>
    )
}

export default Todo
