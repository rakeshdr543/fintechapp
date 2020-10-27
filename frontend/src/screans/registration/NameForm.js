import { Box, Button, Card, CardContent } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const NameForm = ({ setName }) => {
  let history = useHistory();
  const [nameField, setNameField] = useState();

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setName(nameField);
    history.push("/user/email");
  };
  return (
    <div className='form'>
      <Card>
        <form
          onSubmit={handleNameSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") return handleNameSubmit;
          }}
          className='form-container'
        >
          <CardContent>
            <h2>Welcome to the Future</h2>
            <div className='flex-container'>
              <select name='title'>
                <option disabled>Title</option>
                <option value='mr'>Mr</option>
                <option value='mrs'>Mrs</option>
              </select>
              <input
                type='name'
                name='name'
                id='name'
                placeholder='Enter Your Name'
                required
                onChange={(e) => setNameField(e.target.value)}
              ></input>
            </div>
            <Button type='submit' variant='contained' color='primary'>
              {" "}
              Next{" "}
            </Button>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};

export default NameForm;
