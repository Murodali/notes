import {
    LOAD_NOTES,
    ADD_NOTE,
    UPDATE_NOTE,
    DELETE_NOTE,
  } from '../constants.js';
  
  export default function (state, { type, payload }) {
    switch (type) {
      case LOAD_NOTES: return { notes: payload };
      case ADD_NOTE: return { notes: [...state.notes, payload] };
      case UPDATE_NOTE: {
        const noteToUpdate = state.notes.find((note) => note.id === payload.id);
        return { notes: [
          ...state.notes.filter((note) => note.id !== payload.id),
          Object.assign({}, noteToUpdate, { done: payload.done }),
        ] };
      }
      case DELETE_NOTE: return { notes: state.notes.filter((note) => note.id !== payload) };
      default: return state;
    }
  }