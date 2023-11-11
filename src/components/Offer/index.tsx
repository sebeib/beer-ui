import { Container } from "./styles"
import Moment from 'moment';

interface Props {
    price : number,
    description : string,
    brand : string,
    name  : string,
    from  : Date,
    to    : Date
}

const DATEFORMAT = 'DD.MM.yyyy'

export function Offer(props : Props) {
    return  <Container>
                <ul>
                    <li><h3>🍺 {props.brand}</h3></li>
                    <li>💵 {props.price}€</li>
                    <li>ℹ️ {props.description}</li>
                    <li>📅 Gültig von { Moment(props.from).format(DATEFORMAT)} bis { Moment(props.to).format(DATEFORMAT) }</li>
                </ul>
            </Container>   
}