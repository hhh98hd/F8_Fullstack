import './App.css'
import Header from '../components/Header/Header';
import Note from '../components/Note/Note';
import Form from '../components/Form/Form';

import notes from "../data/notes";

function createNote(noteObj) {
  return <Note title={noteObj.title} content={noteObj.content} key={noteObj.id}/>;
}

function App() {
  var setShowForm = false;


  return (
    <div>
      <Header />
      <Form />

      <div id="notes-container">
        {notes.map(createNote)}
        
      </div>
    </div>
  );
}

export default App;
