import React, { Fragment } from 'react';

function NotesTableRows({ notes }) {
  return notes.map((note, index) => (
    <tr key={index}>
      <td>{note.title}</td>
      <td>{note.status}</td>
    </tr>)
  )
}

export default NotesTableRows;
