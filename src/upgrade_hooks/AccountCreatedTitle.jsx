import React, { useContext } from 'react'
import AccountsContext from '../context/AccountsContext'

const AccountCreatedTitle = () => {
  const { accountName } = useContext(AccountsContext)

  return (
    <h1 className="account-created-title">
      Account "{accountName}" Created
    </h1>
  )
}

export default AccountCreatedTitle