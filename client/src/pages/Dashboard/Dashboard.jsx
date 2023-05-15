import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TabPanel from "../../components/TabPanel/TabPanel";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const formRef = {
    classCode: useRef(),
    className: useRef(),
    subject: useRef(),
  };

  const [value, setValue] = useState(1);
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    console.log("value:", newValue);
    setValue(newValue);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleJoin = () => {
    handleClose();
    console.log(formRef.classCode.current.value);
  };

  const handleCreate = () => {
    handleClose();
    console.log(formRef.subject.current.value);
    console.log(formRef.className.current.value);
  };

  return (
    <div>
      <div
        onClick={() => {
          setOpen(true);
        }}
      >
        <IconButton color="primary" component="label">
          <AddIcon />
        </IconButton>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab label="CREATE" />
                <Tab label="JOIN" />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <TextField
                sx={{ display: "block", pb: 2 }}
                inputRef={formRef.className}
                autoFocus
                label="Class Name"
                type="text"
                variant="outlined"
                autoComplete="off"
              />
              <TextField
                inputRef={formRef.subject}
                label="Subject"
                type="text"
                variant="outlined"
                autoComplete="off"
              />
              <DialogActions>
                <Button onClick={handleCreate}>Create</Button>
              </DialogActions>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <TextField
                inputRef={formRef.classCode}
                fullWidth
                autoFocus
                autoComplete="off"
                label="Class Code"
                type="text"
                variant="outlined"
              />
              <DialogActions>
                <Button onClick={handleJoin}>Join</Button>
              </DialogActions>
            </TabPanel>
          </Box>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
