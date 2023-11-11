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
    offers : Array<Offer>
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

    return( <FlexBox>
                { discounts?.offers.map(offer => <Store name={offer.store} offers={offer.offers}/>) }
                <div> Stand: {discounts?.lastFetched.toString()} </div>
            </FlexBox>
    )


}