/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const BackDropContext = createContext({
  actions: null,
  actionEdit: null,
  open: false,
  handleOpen: null,
  handleClose: null,
});
const BackdropProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [actions, setaction] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const actionEdit = (text) => setaction(`${text}`);

  return (
    <BackDropContext.Provider
      value={{ actionEdit, actions, open, handleClose, handleOpen }}
    >
      {children}
    </BackDropContext.Provider>
  );
};
const useBackdrop = () => {
  return useContext(BackDropContext);
};
export { BackdropProvider, useBackdrop };
