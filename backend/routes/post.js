const express = require('express');
const postCtrl = require('../controllers/post')
const router = express.Router();

router.post('/', postCtrl.save);
router.get('/:id', postCtrl.show);
router.get('/', postCtrl.index);
router.patch('/:id', postCtrl.update);
router.delete('/:id', postCtrl.destroy);

module.exports = router;