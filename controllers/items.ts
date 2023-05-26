import { itemsInterface } from "../interfaces/itemsInterface";

const { response } = require('express');
const axios = require('axios')

const _apiMeli = 'https://api.mercadolibre.com/sites/MLA/search?q=';
let _itemsInterface: itemsInterface = {} 
const _itemsNew: any = []


const items = (req: any, res: any = response) =>{
    
    axios.get(_apiMeli + req.body.search)
    .then(({ data }: any) =>{
            
            let _items = data.results
            _items.map((
                { 
                    id, title, 
                    currency_id, 
                    installments, 
                    price, thumbnail, 
                    condition, shipping
                } : any
            ) => {
                _itemsInterface = {
                    id: id,
                    title: title,
                    price: {
                        currency: currency_id,
                        amount: installments.amount,
                        decimals: price
                    },
                    picture: thumbnail,
                    condition: condition,
                    free_shipping: shipping.free_shipping
                }    
                _itemsNew.push( _itemsInterface )
            })


            res.json({
                author: {
                    name: 'Manuel David',
                    lastname: 'Rodriguez Riveros'
                },
                items: _itemsNew
            })
        })

}

module.exports = {
    _items: items,
}