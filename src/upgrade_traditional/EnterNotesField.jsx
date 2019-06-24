import React from 'react'

const EnterNotesField = ({ hasNotes, setHasNotes, setNotes = () => {} }) => {
  return (
    <>
      <label>
        <input type="checkbox" checked={hasNotes} onChange={setHasNotes} />
        <span className="label-title">I have extra notes</span>
      </label>
      <textarea
        className="notes-field"
        disabled={!hasNotes}
        onChange={setNotes}
      />
    </>
  )
}

export default EnterNotesField