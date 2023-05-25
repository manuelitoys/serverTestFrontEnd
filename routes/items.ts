/* Routes Items
    host + /api/items
*/
const { Router } = require('express');

const router = Router();

const { _items } = require('../controllers/items');

router.post('/', _items);

module.exports = router;