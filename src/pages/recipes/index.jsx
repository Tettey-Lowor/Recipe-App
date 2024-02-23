import React from "react"
import { Container, Grid, Card, CardMedia, TextField, CardContent, Typography } from "@mui/material";

export default function Recipes() {
    return (
        <Container sx={{ my:'2rem'}} maxwidth="sm">
            <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />

            <Grid sx={{ mt: '1rem'}} container spacing={3}>
               <Grid item xs={4}>
                    <Card>
                    <CardMedia 
                    sx={{height: 140}}
                    image="https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    </Card>

                    <CardContent>
                        <Typography varient="h5">
                            Recipe Name
                        </Typography>
                    </CardContent>
                </Grid> 
            </Grid>
        </Container>
    );
}

