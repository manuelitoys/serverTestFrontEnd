/* Routes Items
    host + /api/items
*/
const { Router } = require('express');

const router = Router();

const { _itemDescription } = require('../controllers/itemDescription');

router.post('/', _itemDescription);

module.exports = router;

export {}