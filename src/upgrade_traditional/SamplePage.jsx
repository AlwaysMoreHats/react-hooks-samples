import React, { Component } from 'react'
import AccountCreatedTitle from './AccountCreatedTitle'
import EnterNotesField from './EnterNotesField'
import MoreInfoBox from './MoreInfoBox'
import AccountsContext from '../context/AccountsContext'

export default class SamplePage extends Component {
  state = { hasNotes: false }

  render() {
    const { hasNotes } = this.state

    return (
      <AccountsContext.Provider>
        <div className="center-page">
          <AccountCreatedTitle />

          <div className="content-box">
            <p>
              Your account has been created via old React. You may add extra
              notes now, or later at any time from the Account Settings page.
            </p>
            <EnterNotesField
              hasNotes={hasNotes}
              setHasNotes={() => this.setState({ hasNotes: !hasNotes })}
            />
            <button>Continue to Accounts Page</button>
          </div>

          <MoreInfoBox title="Who can see my notes?">
            Only you can see your notes by default, but you can change your
            controls in your settings to allow anyone else with access to the
            account to also be able to see these notes. You can additionaly
            customize it by access type.
          </MoreInfoBox>
        </div>
      </AccountsContext.Provider>
    )
  }
}