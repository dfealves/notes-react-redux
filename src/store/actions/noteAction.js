import actionTypes from "../actions";

export default {
  AddNote: (note) => ({
    type: actionTypes.ADD_NOTE,
    note,
  }),
  UpdateNote: (index, note) => ({
    type: actionTypes.UPDATE_NOTE,
    index,
    note,
  }),
  DeleteNote: (index) => ({
    type: actionTypes.DELETE_NOTE,
    index,
  }),
};
