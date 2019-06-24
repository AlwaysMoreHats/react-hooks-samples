import React, { Component } from 'react'

class EnterNotesField extends Component {
  notesField = React.createRef()

  componentDidUpdate(prevProps) {
    if (!prevProps.hasNotes && this.props.hasNotes) {
      this.notesField.current.focus()
    }
  }

  render() {
    const { hasNotes, setHasNotes, setNotes = () => {} } = this.props

    return (
      <>
        <label>
          <input type="checkbox" checked={hasNotes} onChange={setHasNotes} />
          <span className="label-title">I have extra notes</span>
        </label>
        <textarea
          className={`notes-field${hasNotes ? '' : ' hide'}`}
          disabled={!hasNotes}
          ref={this.notesField}
          onChange={setNotes}
        />
      </>
    )
  }
}

export default EnterNotesField