const { response } = require('express');

const items = (req: any, res: any = response) =>{

    console.log(req.body);
    
    res.json({
        status: 'ok',
        msg: 'items',
        user: req.body
    })
    
}

module.exports = {
    _items: items,
}