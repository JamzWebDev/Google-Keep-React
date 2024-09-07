import "./Notes.css";
import Note from "./Note";

const Notes = (props) => {
  const { deleteNote, setSelectedNote, toggleModal } = props;

  return (
    <div className="notes">
      {props.notes.length === 0 ? (
        <p>Notes You Add Appear Here.</p>
      ) : (
        props.notes.map((note, index) => (
          <Note
            key={index}
            id={note.id}
            title={note.title}
            text={note.text}
            deleteNote={deleteNote}
            toggleModal={toggleModal}
            setSelectedNote={setSelectedNote}
          />
        ))
      )}
    </div>
  );
};

export default Notes;
