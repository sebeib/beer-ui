
interface Props {
    price : number,
    description : string,
    brand : string,
    name  : string,
    from  : Date,
    to    : Date
}

export function Offer(props : Props) {
    return  <ul>
                <li>{props.brand}  -  {props.description}  -  {props.price}€</li>
                <li>Gültig von {props.from.toString()} bis {props.to.toString()}</li>
            </ul>
}