import { createContext, useState } from "react";
import React from "react";

const AccountContext = createContext({
  account: "",
  bounties: [],
  completed: 0,
  failed: 0,
  debt: 0,
  login: () => {},
  logout: () => {},
});

export function AccountContextProvider(props) {
  const [account, setAccount] = useState("");

  function loginHandler(account) {
    setAccount("");
  }

  function logoutHandler(account) {
    setAccount("");
  }

  const context = {
    account: account,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AccountContext.Provider value={context}>
      {props.children}
    </AccountContext.Provider>
  );
}

export default AccountContext;
