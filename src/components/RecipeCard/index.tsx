import { Container, Description, Image, StyledLink, Title } from "./styles"

export interface Card {
    id : string,
    title: string,
    image: string,
    description: string
}



export function RecipeCard(props : Card) {
    const imageStyle = {
        backgroundImage: `url(${props.image}) `
    }

    const href = "/recipe/" + props.id

    return   <StyledLink to={href}>
                <Container>
                    <Image style={imageStyle}></Image>
                    <Title>{props.title}</Title>
                    <Description>{props.description}</Description>
                </Container>
            </StyledLink>
}