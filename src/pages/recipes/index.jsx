import React from "react"
import { Container, Grid, Card, CardMedia, TextField, CardContent, Typography } from "@mui/material";
import RecipeItem from "../../Component/recipe-item";
import { useEffect, useState } from "react";

export default function Recipes() {

    const [recipes, setRecipes] = useState([]);
    const [searchItem, setSearchItem] = useState("");

    const searchRecipes = () => {
        //prepare url
        const url = new URL('https://api.spoonacular.com/recipes/complexSearch')
        url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
        //fetch recipes
        url.searchParams.append('query', searchItem);
        url.searchParams.append('offset', 25)
        url.searchParams.append('offset', 5)

        fetch(url)
            .then((response) => { return response.json() })
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
            <TextField fullWidth id="outlined-basic"
                label="Enter a keyword to search recipes and hit Enter" variant="outlined"
                value={searchItem}
                onChange={(event) => setSearchItem(event.target.value)}
                onKeyDown={event => event.key == "Enter" && searchRecipes()} />

            <Grid sx={{ mt: '1rem' }} container spacing={3}>
                {recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image} />)}

            </Grid>
        </Container>
    );
}


