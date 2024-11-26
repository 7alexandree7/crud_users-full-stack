import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { DeleteIcon, Users2 } from "lucide-react";
import { User } from "../../App";

interface DialogProps {
  users: User[];
  deleteUsers: (id: number) => Promise<void>;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Define o tipo do componente com DialogProps
const DialogUsers: React.FC<DialogProps> = ({ users, deleteUsers }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          border: "none",
          color: "#fff",
        }}
      >
        <Users2 />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Usuários Cadastrados no banco de dados"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {/* Exibe os usuários na lista */}
            {users.map((user) => (
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div key={user.id} style={{width: '55%'}}>
                  <strong>Nome:</strong> {user.name} <br />
                  <strong>Idade:</strong> {user.age} <br />
                  <strong>Profissão:</strong> {user.profession}
                  <hr />
                </div>
                <div>
                  <button className="ss" onClick={() => deleteUsers(user.id)}>
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogUsers;
