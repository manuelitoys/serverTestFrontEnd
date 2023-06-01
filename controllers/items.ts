import { itemsInterface } from "../interfaces/itemsInterface";

const { response } = require('express');
const axios = require('axios')

const _apiMeli = 'https://api.mercadolibre.com/sites/MLA/search?q=';
let _itemsInterface: itemsInterface = {} 
const _itemsNew: any = []


const items = (req: any, res: any = response) =>{
    
    // let _categories = [{ values:[{}] }]
    axios.get(_apiMeli + req.body.search)
    .then(({ data }: any) =>{
        
            let _items = data.results
            let _categories = data.available_filters.filter((c: any) => c.id == 'category')
        
            _itemsNew.splice(0, _itemsNew.length)
            
            res.json({
                author: {
                    name: 'Manuel David',
                    lastname: 'Rodriguez Riveros'
                },
                items: dataReform(_items, _categories[0].values) 
            })
        })

}

const dataReform = (_items: any, _categories: any) =>{
    
    _items.map((
        { 
            id, title, 
            currency_id, 
            installments, 
            price, thumbnail, 
            condition, shipping, 
            category_id
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
            free_shipping: shipping.free_shipping,
            categories: _categories,
            category_id: category_id,
        }    
        _itemsNew.push( _itemsInterface )
    })

    return _itemsNew;
}

module.exports = {
    _items: items,
}