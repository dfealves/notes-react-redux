import actionTypes from "../actions";
const initialState = {
  notes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE: {
      const notes = [...state.notes];
      notes.push(action.note);
      return {
        notes,
      };
    }
    case actionTypes.UPDATE_NOTE: {
      const { index, note } = action;
      const notes = [...state.notes];
      notes[index] = note;
      return {
        notes,
      };
    }
    case actionTypes.DELETE_NOTE: {
      const { index } = action;
      const notes = [...state.notes];
      delete notes[index];
      return {
        notes,
      };
    }

    default:
      return state;
  }
};
