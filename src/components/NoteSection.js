import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NoteItem from "./NoteItem";
import inputActions from "../store/actions/inputAction";
import "./NoteSection.style.css";

const NoteSection = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputID(index));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputContent(item.content));
  };

  if (notes.length === 0) {
    return (
      <div className="NoteSection__container">
        <p className="empty">Ainda não existe nenhuma nota.</p>
      </div>
    );
  }

  return (
    <div className="NoteSection__container">
      {notes.map((item, index) => (
        <NoteItem
          title={item.title}
          content={item.content}
          onItemClicked={() => {
            onItemClicked(item, index);
          }}
        />
      ))}
    </div>
  );
};

export default NoteSection;
