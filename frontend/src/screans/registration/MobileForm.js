import { Button, Card, CardContent } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const MobileForm = ({ setPhoneNumber }) => {
  let history = useHistory();
  const [code, setCode] = useState(91);
  const [numberField, setNumberField] = useState();
  const handlePhoneNumber = (e) => {
    e.preventDefault();
    setPhoneNumber(`+${code} ${numberField}`);
    history.push("/user/verify-otp");
  };
  return (
    <div className='form'>
      <Card>
        <form
          className='form-container'
          onSubmit={handlePhoneNumber}
          onKeyDown={(e) => {
            if (e.key === "Enter") return handlePhoneNumber;
          }}
        >
          <CardContent>
            <h2>Verify using OTP </h2>
            <div className='flex-container'>
              <select
                name='countryCode'
                value={code}
                onChange={(e) => setCode(e.target.value)}
              >
                <option value={91}>India (+91)</option>
                <optgroup label='Other countries'>
                  <option value={44}>UK (+44)</option>
                  <option value={21}>Algeria (+21)</option>
                </optgroup>
              </select>
              <input
                type='text'
                name='number'
                id='number'
                placeholder='Enter Mobile No'
                maxLength={10}
                required
                onChange={(e) => setNumberField(e.target.value)}
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

export default MobileForm;
