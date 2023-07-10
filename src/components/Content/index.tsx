import {
    Routes,
    Route,
    BrowserRouter as Router
  } from "react-router-dom";
import { Container } from "./styles";
import { RecipePage } from "../../pages/RecipePage";
import { NotFound } from "../../pages/NotFound";
import { RecipeDetail } from "../RecipeDetail";
import { Protected } from "../Protected";
import { Login } from "../../pages/Login";

interface ContentProps {
    user_id : string
}


export function Content(props : ContentProps) {
    return  <Container>
                <Routes>
                    <Route path="/"           element={<RecipePage user_id={props.user_id}/>}/>
                    <Route path="/recipe/:id" element={<RecipeDetail/>}/> 
                    <Route path="*"           element={<NotFound/>}/>
                </Routes>
            </Container>
}




/*



<Router>
    <Navigation/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sub/page" element= {<SubPage/>}/>
        <Route path="/sub/page/:value" element= {<SubPage/>}/>
        <Route path="*" element= {<NotFound/>}/>
    </Routes>
</Router>

*/