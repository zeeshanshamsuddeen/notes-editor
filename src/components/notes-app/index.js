import React, { Component, Fragment, useState } from "react";
import "./index.css";
import constants from '../../constants';
import NotesTable from "./notesTable";

const initialState = {
  [constants.ACTIVE]: [],
  [constants.COMPLETED]: [],
  [constants.OTHERS]: [],
};

export default function NotesApp() {

  const [notes, setNotes] = useState(initialState)
  const [currentTab, setCurrentTab] = useState(constants.ALL);
  const [noteTitleText, setNoteTitleText] = useState('');
  const [noteStatusText, setNoteStatusText] = useState('');

  const onClickAddNote = () => {
    if (!noteTitleText)
      return;

    const updatedNotes = { ...notes };
    const upperCaseStatus = noteStatusText.toUpperCase();
    const statusToPush = initialState[upperCaseStatus] ? upperCaseStatus : constants.OTHERS;
    updatedNotes[statusToPush].push({ title: noteTitleText, status: noteStatusText });
    setNotes(updatedNotes);

    setNoteTitleText('');
    setNoteStatusText('');
  }

  return (
    <div className="layout-column align-items-center justify-content-start">
      <section className="layout-row align-items-center justify-content-center mt-30">
        <input data-testid="input-note-name" type="text" className="large mx-8"
          placeholder="Note Title" onChange={(e) => setNoteTitleText(e.target.value)} value={noteTitleText} />
        <input data-testid="input-note-status" type="text" className="large mx-8"
          placeholder="Note Status" onChange={(e) => setNoteStatusText(e.target.value)} value={noteStatusText} />
        <button className="" data-testid="submit-button" onClick={onClickAddNote}>Add Note</button>
      </section>

      <div className="mt-50">
        <ul className="tabs">
          <li className="tab-item slide-up-fade-in" data-testid="allButton" onClick={() => setCurrentTab(constants.ALL)}> All</li>
          <li className="tab-item slide-up-fade-in" data-testid="activeButton" onClick={() => setCurrentTab(constants.ACTIVE)} > Active</li>
          <li className="tab-item slide-up-fade-in" data-testid="completedButton" onClick={() => setCurrentTab(constants.COMPLETED)}>Completed</li>
        </ul>
      </div>

      <div className="card w-40 pt-30 pb-8">
        <NotesTable
          currentTab={currentTab}
          notes={notes}
        />
      </div>
    </div>
  );
}
