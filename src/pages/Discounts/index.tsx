import React, { useState, useEffect } from 'react';
import { Store, Offer } from '../../components/Store';
import { FlexBox } from './styles';
import { Beer, Table } from '../../components/Table';

const URL = "http://192.168.178.10:8080/poll"

type Wrapper = {
    lastFetched : Date
    offers : Array<StoreType>
}

type StoreType = {
    store : string,
    offers : Array<Beer>
}




export function Discounts() {
    const [discounts, setDiscounts] = useState<Wrapper>()
    useEffect(() => {
        fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            setDiscounts(data)
        })
    } ,[])

    console.log(discounts)

    return( <>
                <div> Bierangebote Stand: {discounts?.lastFetched.toString()} </div>
                { discounts?.offers.map(offer => {

                    return <Table name={offer.store} beer={offer.offers}/>

                }) }
            </>
    )


}