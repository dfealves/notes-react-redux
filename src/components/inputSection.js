import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import noteActions from "../store/actions/noteAction";
import inputActions from "../store/actions/inputAction";
import "./inputSection.style.css";

const InputSection = () => {
  const id = useSelector((state) => state.inputs.id);
  const title = useSelector((state) => state.inputs.title);
  const content = useSelector((state) => state.inputs.content);
  const dispatch = useDispatch();

  const AddNote = () => {
    if (title && content) {
      dispatch(
        noteActions.AddNote({
          title,
          content,
        })
      );
      dispatch(inputActions.resetInputs());
    }
  };

  const UpdateNote = () => {
    if (title && content) {
      dispatch(noteActions.UpdateNote(id, { title, content }));
    }
    dispatch(inputActions.resetInputs());
  };
  const deleteNote = () => {
    dispatch(noteActions.DeleteNote(id));
    dispatch(inputActions.resetInputs());
  };

  return (
    <div className="InputSection__container">
      <input
        type="text"
        placeholder="Título da nota"
        value={title}
        onChange={(e) => dispatch(inputActions.setInputTitle(e.target.value))}
      />
      <textarea
        placeholder="Conteúdo da nota"
        value={content}
        onChange={(e) => dispatch(inputActions.setInputContent(e.target.value))}
      ></textarea>
      <div style={{ display: "flex" }}>
        <button onClick={id === -1 ? AddNote : UpdateNote}>
          {id === -1 ? "ADICIONAR" : "ALTERAR"}
        </button>
        {id !== -1 && (
          <button
            style={{ marginLeft: "1em", backgroundColor: "red", color: "#fff" }}
            onClick={deleteNote}
          >
            DELETE
          </button>
        )}
      </div>
    </div>
  );
};

export default InputSection;
