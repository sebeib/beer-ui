import { Card, RecipeCard } from "../../components/RecipeCard"
import { Container } from "./styles"

interface RecipePageProps {
    user_id : string
}



export function RecipePage(props : RecipePageProps) {
    const recipeList = fetchRecipesForUser(props.user_id)

    return <Container>{recipeList.map(recipe => {
        return <RecipeCard image={recipe.image} title={recipe.title} description={recipe.description} id={recipe.id}/>
    })}</Container>
}


function fetchRecipesForUser(id : string) {
    return [{
        id : "5e984054-b92a-45a8-8d81-cea9e24e81de",
        title : "Nudeln mit Wurst",
        image : "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1687802627~exp=1687803227~hmac=a59581f6970d86a632be4fc3d7c17eec6a87591f151552a958ec1184cc0cca4d",
        description : "Wenns am Monatsende wieder mal knapp wird."
    },
    {
        id : "5e984054-b92a-45a8-8d81-cea9e24e81de",
        title : "Nudeln mit Wurst",
        image : "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1687802627~exp=1687803227~hmac=a59581f6970d86a632be4fc3d7c17eec6a87591f151552a958ec1184cc0cca4d",
        description : "Wenns am Monatsende wieder mal knapp wird."
    },
    {
        id : "5e984054-b92a-45a8-8d81-cea9e24e81de",
        title : "Nudeln mit Wurst",
        image : "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1687802627~exp=1687803227~hmac=a59581f6970d86a632be4fc3d7c17eec6a87591f151552a958ec1184cc0cca4d",
        description : "Wenns am Monatsende wieder mal knapp wird."
    }]
}