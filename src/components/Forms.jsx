import {
  Button,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
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
import React, { useState } from "react";
import { motion } from "framer-motion";
import RoleBlock from "./RoleBlock";

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
  //   const [state, setState] = React.useState({
  //     trackwithlot: true,
  //     trackwithproduct: true,
  //   });
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
          {/* <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChangeCheckbox}
                name="trackwithlot"
                color="primary"
              />
            }
            label="Track With Lot ID - Less Gas Consumption"
          />
          <br />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChangeCheckbox}
                name="trackwithproduct"
                color="primary"
              />
            }
            label="Track With Product ID - More Gas Consumption"
          />
        </div> */}
          {productArgs.map((item, index) => (
            <TextField
              key={index}
              label={item.name}
              variant="filled"
              autoFocus
              disabled
              color="primary"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <DeleteIcon
                      color="error"
                      cursor="pointer"
                      onClick={() => deleteProductArg(item)}
                    />
                  </InputAdornment>
                ),
              }}
            />
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
  const [roles, setRoles] = useState([
    "Manufacturer",
    "Dealer",
    "Distributor",
    "Retailer",
    "Customer",
  ]);
  const [open, setOpen] = React.useState(false);
  const [roleName, setRoleName] = useState("");

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

  return (
    <div style={{ padding: 20 }}>
      <motion.div>
        <br />
        <div>
          {roles.length ? (
            <RoleBlock blank handleClickOpen={handleClickOpen} />
          ) : (
            <></>
          )}
        </div>
        <br />
        <div className={classes.xScrollable}>
          {roles.length ? (
            roles.map((role, index) =>
              roles.length - 1 === index ? (
                <RoleBlock
                  key={index}
                  name={role}
                  removeRole={removeRole}
                  lastElement
                />
              ) : (
                <RoleBlock key={index} name={role} removeRole={removeRole} />
              )
            )
          ) : (
            <RoleBlock blank handleClickOpen={handleClickOpen} />
          )}
          <br />
          <br />
          <br />
        </div>
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
            <br />
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
  return (
    <Container maxWidth="sm">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <div>SupplyChain.sol</div>
        <div></div>
      </motion.div>
    </Container>
  );
}

export function Completed() {
  return <div>Completed</div>;
}
