import { Offer } from "../Offer"
import { Container } from "./styles"

interface Props {
    name : string,
    offers : Array<Offer>
}

export type Offer = {
    price : number,
    description : string,
    brand : string,
    name  : string,
    from  : Date,
    to    : Date
}


export function Store(props : Props) {
    return <div>
                <Container>
                    <ul>
                        <li><h2>🏪 { props.name }</h2></li>
                        { props.offers.map(offer => 
                            <li><Offer  brand={offer.brand}
                                    description={offer.description}
                                    from={offer.from}
                                    to={offer.to}
                                    name={offer.name}
                                    price={offer.price} />
                            </li>) 
                            }
                    </ul>
                </Container>
                
            </div>
}