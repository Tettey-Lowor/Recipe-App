import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './Component/navbar';
import Recipe from "./pages/recipe";
import Recipes from './pages/recipes';
import AddRecipe from './pages/add-recipe';

const router = createBrowserRouter([
  { path: "/", element:<Recipes />},
  { path:"/recipes/:id", element: <Recipe />},
  {path:"/recipes", element: <AddRecipe/> }
]);

function App() {
  return (
    <>
    <Navbar />
    <RouterProvider router={router} />
    </>
  );
}

export default App;
