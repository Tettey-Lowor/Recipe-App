import React from 'react';
import { TextField, Button, FormControl, Typography } from '@material-ui';

export default function AddRecipe() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Material-UI Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl margin="normal">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
  

