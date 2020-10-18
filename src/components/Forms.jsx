import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { code } from "../constants/sampleCode/supplyChain";
import RoleBlock from "./RoleBlock";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  xScrollable: {
    width: "auto",
    whiteSpace: "noWrap",
    overflowX: "scroll",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    textAlign: "center",
  },
  container: {
    minHeight: "55vh",
  },
  deployContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "55vh",
    width: "100%",
  },
  codebox: {
    flex: 1,
    height: "100%",
    backgroundColor: "#FCFCFC",
    overflowY: "scroll",
  },

  codeboxHeading: {
    backgroundColor: "#E7E7E7",
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    paddingLeft: theme.spacing(5),
  },

  detailContainer: {
    padding: theme.spacing(5),
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
}));

export function YourDetails() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <motion.div
        className={classes.container}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <Typography variant="h4" component="h2">
          Your Details
        </Typography>
        <br />
        <br />
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic1"
            label="Your Name"
            variant="outlined"
            required
            autoFocus
          />
          <TextField
            id="outlined-basic2"
            label="Organisation Name"
            variant="outlined"
            required
          />
          <TextField
            id="outlined-basic3"
            label="Your Address"
            variant="outlined"
            required
            multiline
          />
        </form>
      </motion.div>
    </Container>
  );
}

export function ProductDetails() {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");

  const [productArgs, setProductArgs] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [propertyName, setPropertyName] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTypeChange = (event) => {
    setPropertyType(event.target.value);
  };
  const addProductArg = () => {
    setProductArgs([
      ...productArgs,
      { name: propertyName, type: propertyType },
    ]);
    setPropertyName("");
    setPropertyType("");
    setOpen(false);
  };

  const deleteProductArg = (item) => {
    const newProductArgs = productArgs.filter(
      (property) => property.name !== item.name
    );
    setProductArgs([...newProductArgs]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <motion.div
        className={classes.container}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <Typography variant="h4" component="h2">
          Product Details
        </Typography>
        <br />
        <br />

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic1"
            label="Product Name"
            variant="outlined"
            required
            autoFocus
          />
          <FormControl
            variant="outlined"
            className={classes.formControl}
            required
          >
            <InputLabel id="demo-simple-select-filled-label">
              Category
            </InputLabel>
            <Select value={category} onChange={handleChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Industrial</MenuItem>
              <MenuItem value={20}>Medical</MenuItem>
              <MenuItem value={30}>Other</MenuItem>
            </Select>
          </FormControl>

          {productArgs.map((item, index) => (
            <ListItem>
              <ListItemIcon>
                <DeleteIcon
                  color="error"
                  cursor="pointer"
                  onClick={() => deleteProductArg(item)}
                />
              </ListItemIcon>
              <ListItemText primary={item.name} secondary={item.type} />
            </ListItem>
          ))}
        </form>
        <br />
        <div>
          <Fab variant="extended" color="primary" onClick={handleClickOpen}>
            <AddIcon className={classes.extendedIcon} />
            Add Property &nbsp;
          </Fab>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Add Property</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Manufactuers will have to make sure to add theses customized
                property values while packing products.
              </DialogContentText>
              <br />
              <TextField
                value={propertyName}
                onChange={(event) => setPropertyName(event.target.value)}
                label="Property Name"
                type="text"
                margin="dense"
              />
              <br />
              <FormControl>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  value={propertyType}
                  labelId="demo-simple-select-label"
                  onChange={handleTypeChange}
                  style={{ minWidth: 120 }}
                >
                  <MenuItem aria-label="None" value="" />
                  <MenuItem value={"String"}>String</MenuItem>
                  <MenuItem value={"Integer"}>Integer</MenuItem>
                  <MenuItem value={"Boolean"}>Boolean</MenuItem>
                  <MenuItem value={"Address(Hex)"}>Address(Hex)</MenuItem>
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={addProductArg} color="primary">
                Add
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </motion.div>
    </Container>
  );
}

export function SupplyChain() {
  const classes = useStyles();
  const [roles, setRoles] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [roleName, setRoleName] = useState("");
  const [state, setState] = React.useState({
    trackwithlot: false,
    trackwithproduct: true,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addRole = () => {
    setRoles([...roles, roleName]);
    setOpen(false);
    setRoleName("");
  };

  const removeRole = (role) => {
    const newRoles = roles.filter((item) => item !== role);
    setRoles(newRoles);
  };

  const handleChangeCheckbox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const callApi = async () => {
    const res = await axios.post("http://127.0.0.1:5000/createcontracts", {
      name: "Shubham",
      role: roles,
    });
    console.log(res.data);
  };

  return (
    <div style={{ padding: 20 }}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <br />
        <div>
          {roles.length ? (
            <RoleBlock blank handleClickOpen={handleClickOpen} />
          ) : (
            <></>
          )}
        </div>
        <br />
        <br />
        <div className={classes.xScrollable}>
          {roles.length ? (
            roles.map((role, index) =>
              roles.length - 1 === index ? (
                <RoleBlock
                  key={index}
                  name={role}
                  removeRole={removeRole}
                  roles={roles}
                  setRoles={setRoles}
                  lastElement
                />
              ) : (
                <RoleBlock
                  key={index}
                  name={role}
                  removeRole={removeRole}
                  setRoles={setRoles}
                  roles={roles}
                />
              )
            )
          ) : (
            <RoleBlock blank handleClickOpen={handleClickOpen} />
          )}
          <br />
          <br />
          <br />
          <br />

          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.trackwithlot}
                  onChange={handleChangeCheckbox}
                  name="trackwithlot"
                  color="primary"
                />
              }
              label="Track With Lot ID "
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.trackwithproduct}
                  onChange={handleChangeCheckbox}
                  name="trackwithproduct"
                  color="primary"
                />
              }
              label="Track With Product ID "
            />
          </div>
        </div>
        <Button onClick={callApi}>CALL API</Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Role</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Manufactuers will have to make sure to add theses customized role
              values while packing products.
            </DialogContentText>

            <TextField
              value={roleName}
              onChange={(event) => setRoleName(event.target.value)}
              label="Role Name"
              type="text"
              margin="dense"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={addRole} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </motion.div>
    </div>
  );
}

export function Deployment() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
        className={classes.deployContainer}
      >
        <div className={classes.codebox}>
          <div className={classes.codeboxHeading}>
            <Typography>SupplyChain.sol</Typography>
            <Button
              className={classes.deployAction}
              color="primary"
              variant="contained"
            >
              DEPLOY
            </Button>
          </div>
          <div className={classes.content}>
            <pre>{code}</pre>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}

export function Completed() {
  const classes = useStyles();
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "tween" }}
    >
      <Container maxWidth="md">
        <div className={classes.container}>
          <br />
          <Paper square className={classes.detailContainer} elevation={5}>
            <Typography variant="h3">Contract Address</Typography>
            <Typography variant="h6">
              0xfab9f7a5615a4fa7da0b8e669b076dc62b545e86
            </Typography>
            <br />
            <Typography variant="h3">Transaction Hash</Typography>
            <Typography variant="h6">
              0x8b38a6d785f3ba2784a322b33e6fcc9932458429aeaff88cbe03ac4625ffedfc
            </Typography>
            <br />
            <Typography variant="h3">Owner</Typography>
            <Typography variant="h6">
              0x2114107ddd2c0bb7a174dda0245d0052618c1c28
            </Typography>
          </Paper>
        </div>
      </Container>
    </motion.div>
  );
}
