import { itemDescriptionInterface } from "../interfaces/itemDescriptionInterface";

const { response } = require('express');
const axios = require('axios')

const _apiMeliItem = 'https://api.mercadolibre.com/items/';
let _itemDescInterface: itemDescriptionInterface = {}

const itemDescription = (req: any, res: any = response) => {  
    
    const urlApi = _apiMeliItem + req.body.id

    axios.all([
        axios.get(urlApi),
        axios.get(urlApi + '/description')
    ]).then(( _res: any ) => {
        
        const { data } = _res[0]
        const { plain_text } = _res[1].data;

        res.json({
            author: {
                name: 'Manuel David',
                lastname: 'Rodriguez Riveros'
            },
            item: dataReform(data, plain_text)
        })
        
    })

}

const dataReform = (
    {
        id, title,
        currency_id,
        available_quantity,
        price, thumbnail,
        condition, shipping, 
        sold_quantity
    }: any, description: string ) => {


    return _itemDescInterface = {
        id: id,
        title: title,
        price: {
            currency: currency_id,
            amount: available_quantity,
            decimals: price
        },
        picture: thumbnail,
        condition: condition,
        free_shipping: shipping.free_shipping,
        sold_quantity: sold_quantity,
        description: description 
     }

}

module.exports = {
    _itemDescription: itemDescription,
}