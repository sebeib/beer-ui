import { useParams } from "react-router-dom"
import { Container, Image, Navigation, Title, Description, Ingredients, Steps } from "./styles"

type RecipeParams = {
    id : string
}

export function RecipeDetail() {
    const { id } = useParams()
    const details = fetchRecipe(id!)

    const imageStyle = {
        backgroundImage: `url(${details.image}) `
    }


    return  <Container>
                <Image style={imageStyle}></Image>
                <Title><h1>{details.title}</h1></Title>
                <Description>{details.description}</Description>
                <hr />
                <Ingredients>
                    <span><h2>Zutaten</h2></span>
                    <ul>
                        { details.ingredients.map(ingredient => {
                            return <li>{ingredient.amount + " " + ingredient.qty + " " + ingredient.name}</li>
                        }) }
                    </ul>
                </Ingredients>
                <hr />
                <Steps>
                <span><h2>Schritte</h2></span>
                    <ul>
                        { details.steps.map(step => {
                            return <li>{step.description}</li>
                        }) }
                    </ul>
                </Steps>
            </Container>
}

function fetchRecipe(id : string) {
    return {
        id : "5e984054-b92a-45a8-8d81-cea9e24e81de",
        title: "Nudeln mit Wurst",
        image : "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1687802627~exp=1687803227~hmac=a59581f6970d86a632be4fc3d7c17eec6a87591f151552a958ec1184cc0cca4d",
        description : "Wenns am Monatsende wieder mal knapp wird.",
        steps : [{
            id : 1,
            description : "Wasser aufkochen"
        }, 
        {
            id : 2,
            description : "Nudeln rein"
        }
        ,
        {
            id : 3,
            description : "Stunden warten, und dabei folgenden Kurzgeschichte lesen, die garantiert nicht nur existiert, um große Textblöcke zu testen."
        },
        {
            id: 4,
            description : `
                Die Dosensardine hüpfte fröhlich auf dem Vulkankrater des Wahnsinns herum.
                Währenddessen kam aus dem Boden eine gelbe Schatztruhe, die nur Naruto Uzumaki öffnen konnte. Doch Mr Frankreichglockenbockenhalverstein, genannt Hanswurst, interessierte sich nicht dafür, denn soeben hatte er die Apokalypse durch die toten Hosen verhindert.
                Mr Frankreichglockenbockenhalverstein’s beste Freundin, Kira das Alpaka, hatte die allmächtige Bratpfanne des Thaddäus aktiviert.
                Hello Kitty musste sich sehr zusammenreißen, um nicht mit der Zitronenlimonade durchzubrennen.
                "Ich glaube", sagte Kira gerade, "dass das Ende der Welt naht."
                Hanswurst meinte darauf: „Wir müssen nun stark sein. Der mächtige Käptn Blaubär wird das Muffinrezept sonst verbrennen.“ 
            `
        }],
        ingredients : [
            {
                id: 1,
                name: "Wasser",
                amount: 10,
                qty: "L"
            },
            {
                id: 2,
                name: "Nudeln",
                amount: 500,
                qty: "g"
            }
        ]

    }
}