import React, { useEffect, useRef } from 'react'

const EnterNotesField = ({ hasNotes, setHasNotes, setNotes = () => {} }) => {
  const notesField = useRef(null)

  useEffect(() => {
    if (hasNotes) {
      notesField.current.focus()
    }
  }, [hasNotes])
  
  return (
    <>
      <label>
        <input type="checkbox" checked={hasNotes} onChange={setHasNotes} />
        <span className="label-title">I have extra notes</span>
      </label>
      <textarea
        className={`notes-field${hasNotes ? '' : ' hide'}`}
        disabled={!hasNotes}
        ref={notesField}
        onChange={setNotes}
      />
    </>
  )
}

export default EnterNotesField