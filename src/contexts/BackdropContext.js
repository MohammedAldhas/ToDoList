import { createContext } from "react";

export const BackDropContext = createContext({
  actions: null,
  actionEdit: null,
  open: false,
  handleOpen: null,
  handleClose: null,
});

// export const BackdropProvider = () => {
//   const [open, setOpen] = useState(false);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };
// };
