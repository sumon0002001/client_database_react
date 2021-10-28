import React from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button } from "@material-ui/core";

const AddUser = () => {
    return (
        <FormGroup >
          <FormControl>
            <InputLabel htmlFor="my-input"> Name </InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Country</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Phone Number</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <Button>Add User</Button>
        </FormGroup>
       
    )
}

export default AddUser
