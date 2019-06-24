import React, { Component } from 'react'
import AccountsContext from '../context/AccountsContext'

// Pre 16.6 or Multiple Contexts method
const AlternateAccountCreatedTitle = () => {
  return (
    <AccountsContext.Consumer>
      {({ accountName }) => (
        <h1 className="account-created-title">
          Account "{accountName}" Created
        </h1>
      )}
    </AccountsContext.Consumer>
  )
}

// 16.6+ and single context method
class AccountCreatedTitle extends Component {
  static contextType = AccountsContext

  render() {
    return (
      <h1 className="account-created-title">
        Account "{this.context.accountName}" Created
      </h1>
    )
  }
}

export default AccountCreatedTitle