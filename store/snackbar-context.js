import React, { useContext, useState } from "react";
const SnackbarContext = React.createContext({
  msg: "",
  id: "",
  isDisplayed: false,
  displayMsg: (msg, id, type) => {},
  onClose: () => {},
  setType: (type) => {},
  isSuccess: false,
});

export const SnackbarContextProvider = (props) => {
  const [msg, setMsg] = useState("");
  const [id, setId] = useState("");
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [type, setType] = useState(false);

  const displayHandler = (msg, id, type) => {
    console.log(msg);
    setMsg(msg);
    setType(type);
    type ? setId(id) : setId("");
    setIsDisplayed(true);
    let timer = setTimeout(() => {
      closeHandler(timer);
    }, 3000);
  };
  const closeHandler = (timer) => {
    clearTimeout(timer);
    setIsDisplayed(false);
  };
  return (
    <SnackbarContext.Provider
      value={{
        isSuccess: type,
        msg,
        id,
        isDisplayed,
        displayMsg: displayHandler,
        onClose: closeHandler,
      }}
    >
      {props.children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContext;
