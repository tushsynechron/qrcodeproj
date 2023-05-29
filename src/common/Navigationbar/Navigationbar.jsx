import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
//import { AzureAD, AuthenticationState } from "react-aad-msal";
import { DialogWrapper } from "../dialog/DialogWrapper";
//import { authProvider } from "../../configurations/authProvider";

export const Navigationbar = () => {
  const [showLanguageDialog, setShowLanguageDialog] = useState(false);
  //const [logoutFlg, setLogoutFlg] = useState(false);
  //const [username, setUsername] = useState('')
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
    },
    {
      label: "Select Language",
      icon: "pi pi-fw pi-language",
      visible: false,
      command: () => {
        setShowLanguageDialog(true);
      },
    },
    {
      label: "Navigation Menu",
      icon: "pi pi-fw pi-arrow-right-arrow-left",
      items: [
        {
          label: "Checklist",
          icon: "pi pi-fw pi-align-left",
        },
        {
          label: "Step 1",
          icon: "pi pi-fw pi-align-right",
        },
        {
          label: "Step 2",
          icon: "pi pi-fw pi-align-center",
        },
        {
          label: "Step 3",
          icon: "pi pi-fw pi-align-justify",
        },
        {
          label: "Step 4",
          icon: "pi pi-fw pi-align-justify",
        },
        {
          label: "Step 5",
          icon: "pi pi-fw pi-align-justify",
        },
        {
          label: "Step 6",
          icon: "pi pi-fw pi-align-justify",
        },
        {
          label: "Step 7",
          icon: "pi pi-fw pi-align-justify",
        },
      ],
    },
    {
      label: `Welcome`,
      icon: "pi pi-fw pi-user",
    },
    {
      label: "Logout",
      icon: "pi pi-fw pi-power-off",
      //visible: AuthenticationState.Unauthenticated ? true : false,
      //command: () => {
      //  setLogoutFlg(true);
      //},
    },
  ];

  return (
    <>
      {/* <AzureAD provider={authProvider}>
        {({ login, logout, authenticationState, error, accountInfo }) => {
          if (authenticationState && AuthenticationState.Authenticated){
            return (
              <>
                  {setUsername(accountInfo.account.userName)}
                  {logoutFlg ? logout() : null}
                  </>
              );
          }
        }
      }
      </AzureAD> */}
      {showLanguageDialog ? <DialogWrapper /> : <></>}
      <Menubar model={items} />
    </>
  );
};
