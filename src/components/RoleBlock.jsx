import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 50,
    minWidth: 120,
    justifyContent: "center",
    alignItems: "center",
    display: "inline-flex",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderRadius: 20,
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  arrowContainer: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: 75,
  },
  arrow: {
    backgroundColor: theme.palette.primary.main,
    height: 2,
    width: "100%",
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

function RoleBlock(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeRole = () => {
    props.removeRole(props.name);
    setOpen(false);
  };

  if (props.blank) {
    return (
      <div
        onClick={props.handleClickOpen}
        style={{
          textAlign: "center",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fab color="primary" aria-label="add" variant="extended">
          <AddIcon />
          Add Role &nbsp;
        </Fab>
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "tween", delay: 0.2 }}
        style={{
          display: "inline-flex",
          flexDirection: "row",
          cursor: "pointer",
        }}
        onClick={handleOpen}
      >
        <div className={classes.paper}>{props.name}</div>
        {!props.lastElement ? (
          <div className={classes.arrowContainer}>
            <div className={classes.arrow}></div>
          </div>
        ) : (
          <></>
        )}
      </motion.div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}
        keepMounted
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {props.name}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <DialogTitle id="form-dialog-title">Edit Role</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Manufactuers will have to make sure to add theses customized role
            values while packing products.
          </DialogContentText>
          <br />
        </DialogContent>
        <DialogActions>
          <Button onClick={removeRole} color="primary">
            Delete Role
          </Button>
          <Button onClick={handleClose} color="primary">
            Discard
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default RoleBlock;
