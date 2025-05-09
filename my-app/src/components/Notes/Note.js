import React, { useState } from "react";

const Note = (props) => {
  const { toggleModal, note, setSelectedNote } = props;
  console.log(useState(props.title));

  const [isHover, setIsHover] = useState(true);

  const noteClickHandler = () => {
    toggleModal();
    setSelectedNote();
  };

  const hoverOverHandler = () => {
    setIsHover(true);
  };
  const hoverOutHandler = () => {
    setIsHover(false);
  };

  const deleteHandler = () => props.deleteNote(note.id);

  return (
    <div
      className="note"
      onClick={noteClickHandler}
      onMouseOver={hoverOverHandler}
      onMouseOut={hoverOutHandler}
    >
      {isHover && (
        <span className="material-symbols-outlined check-circle">
          check_circledelete
        </span>
      )}

      <div className="title">{note.title}</div>
      <div className="text">{note.text}</div>

      <div
        className="note-footer"
        style={{ visibility: isHover ? "visible" : "hidden" }}
      >
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            add_alert
          </span>
          <span className="tooltip-text">Remind me</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            person_add
          </span>
          <span className="tooltip-text">Collaborator</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            palette
          </span>
          <span className="tooltip-text">Change Color</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            image
          </span>
          <span className="tooltip-text">Add Image</span>
        </div>
        <div className="tooltip archive" onClick={deleteHandler}>
          <span className="material-symbols-outlined hover small-icon">
            archive
          </span>
          <span className="tooltip-text">Archive</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            more_vert
          </span>
          <span className="tooltip-text">More</span>
        </div>
      </div>
    </div>
  );
};

export default Note;
