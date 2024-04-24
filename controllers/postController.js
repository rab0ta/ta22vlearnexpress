const express = require('express');
const router = express.Router();
const db = require('../models/index');
const paginate = require('../pagination');

router.get('/', async (req, res) => {
    let page = req.query.page ? parseInt(req.query.page) : 1;
    let perPage = 20;
    let posts = await db.Post.findAll({
        offset: (page-1) * perPage,
        limit: perPage
    });
    let pages = Math.ceil(await db.Post.count()/perPage);
    let pagination = paginate(page, pages, perPage);
    res.render('posts/index.njk', {posts, pagination});
});

module.exports = router;