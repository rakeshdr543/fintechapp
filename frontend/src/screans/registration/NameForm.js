import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const NameForm = ({ setName }) => {
  let history = useHistory();
  const [initial, setInitial] = useState("Mr");
  const [nameField, setNameField] = useState();

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setName(nameField);
    history.push("/user/email");
  };
  return (
    <Container maxWidth='sm'>
      <Card>
        <CardContent>
          <form
            onSubmit={handleNameSubmit}
            onKeyDown={(e) => {
              if (e.key === "Enter") return handleNameSubmit;
            }}
            className='form-container'
          >
            <List>
              <ListItem>
                <ThemeProvider theme={theme}>
                  <Typography variant='h4'> Welcome to the Future</Typography>
                </ThemeProvider>

                {/* <Typography variant='h4' gutterBottom>
                 
                </Typography> */}
              </ListItem>
              <ListItem>
                <TextField
                  id='select'
                  value={initial}
                  onChange={(e) => setInitial(e.target.value)}
                  select
                >
                  <MenuItem value='Mr'>Mr</MenuItem>
                  <MenuItem value='Mrs'>Mrs</MenuItem>
                </TextField>
                {/* <div className='flex-container'> */}
                {/* <Select value='title' onChange={(e) => setInitial(e.target.value)}>
              <MenuItem disabled>Title</MenuItem>
              <MenuItem value='mr'>Mr</MenuItem>
              <MenuItem value='mrs'>Mrs</MenuItem>
            </Select> */}
                <TextField
                  type='name'
                  name='name'
                  id='name'
                  placeholder='Enter Your Name'
                  required
                  onChange={(e) => setNameField(e.target.value)}
                ></TextField>
                {/* </div> */}
              </ListItem>
              <ListItem>
                <Button type='submit' variant='contained' color='primary'>
                  {" "}
                  Next{" "}
                </Button>
              </ListItem>
            </List>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NameForm;
