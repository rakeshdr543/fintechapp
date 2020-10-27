import { Button, Card, CardContent } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const EmailForm = ({ setEmail }) => {
  let history = useHistory();
  const [emailField, setEmailField] = useState();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmail(emailField);
    history.push("/user/phone");
  };
  return (
    <>
      <div className='form'>
        <Card>
          <form
            onSubmit={handleEmailSubmit}
            onKeyDown={(e) => {
              if (e.key === "Enter") return handleEmailSubmit;
            }}
            className='form-container'
          >
            <CardContent>
              <h2>Enter Your Email</h2>
              <div className='flex-container'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter Your Email address'
                  required
                  onChange={(e) => setEmailField(e.target.value)}
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
    </>
  );
};

export default EmailForm;
