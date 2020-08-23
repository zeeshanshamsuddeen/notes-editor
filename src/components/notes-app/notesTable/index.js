import React, { Fragment } from 'react';
import NotesTableRows from './notesTableRows';
import constants from '../../../constants';

function NotesTable({ currentTab, notes }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody data-testid="noteList">
        {currentTab === constants.ALL && (
          <Fragment>
            <NotesTableRows notes={notes[constants.ACTIVE]} />
            <NotesTableRows notes={notes[constants.COMPLETED]} />
            <NotesTableRows notes={notes[constants.OTHERS]} />
          </Fragment>
        )}
        {currentTab === constants.ACTIVE && <NotesTableRows notes={notes[constants.ACTIVE]} />}
        {currentTab === constants.COMPLETED && <NotesTableRows notes={notes[constants.COMPLETED]} />}
      </tbody>
    </table>
  )
}

export default NotesTable;
