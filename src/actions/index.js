import {
    LOAD_NOTES,
    ADD_NOTE,
    UPDATE_NOTE,
    DELETE_NOTE,
  } from '../constants.js';
  import db from '../db';
  
  export function loadnotes() {
    return (dispatch) => {
      db.table('notes')
        .toArray()
        .then((notes) => {
          dispatch({
            type: LOAD_NOTES,
            payload: notes,
          });
        });
    };
  }
  
  export function addNote({title,content}) {
    return (dispatch) => {
      const noteToAdd = { title, content };
      db.table('notes')
        .add(noteToAdd)
        .then((id) => {
           dispatch({
             type: ADD_NOTE,
             payload: Object.assign({}, noteToAdd, { id,title,content }),
           });
        });
    }
  }
  
  export function deleteNote(id) {
    return (dispatch) => {
      db.table('notes')
        .delete(id)
        .then(() => {
          dispatch({
            type: DELETE_NOTE,
            payload: id,
          });
        });
    };
  }
  
  export function updateNote(id, done) {
    return (dispatch) => {
      db.table('notes')
        .update(id, { done })
        .then(() => {
          dispatch({
            type: UPDATE_NOTE,
            payload: { id, done },
          });
        });
    };
  }