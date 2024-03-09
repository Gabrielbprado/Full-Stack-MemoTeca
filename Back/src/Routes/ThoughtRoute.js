const { Router } = require('express');
const ThoughtController = require('../Controller/ThoughtController');
const controller = new ThoughtController;
const router = Router();

router.get('/api/thought',(req,res) => controller.GetAllThought(req,res));
router.get('/api/thought/:id',(req,res)=> controller.GetId(req,res));
router.post('/api/thought',(req,res) => controller.Post(req,res));
router.put('/api/thought/:id',(req,res) => controller.Put(req,res));
router.delete('/api/thought/:id',(req,res) => controller.Delete(req,res));
router.patch('/api/thought/favorite/:id',(req,res) => controller.FavoriteThought(req,res));

module.exports = router;