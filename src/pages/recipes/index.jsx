import React from "react"
import { Container, Grid, Card, CardMedia, TextField, CardContent, Typography } from "@mui/material";
import RecipeItem from "../../Component/recipe-item";
import {useEffect, useState} from "react";

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const searchRecipes = () => {
        //prepare url
        const url =new URL('https://api.spoonacular.com/recipes/complexSearch')
        url.searchParams.append('apiKey','6e2a215a9336434a8c6be34637312642');
        //fetch recipes

        fetch(url)
        .then((response) => {return response.json() })
        .then((data) => {
            //update recipes state
            setRecipes(data.results)
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
       
    }
    useEffect(searchRecipes, []);

    return (
        <Container sx={{ my: '2rem' }} maxwidth="sm">
            <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />

            <Grid sx={{ mt: '1rem' }} container spacing={3}>
                {recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image}/> )}
              
            </Grid>
        </Container>
    );
}

