// import express and category/product models
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

  // Get all categories
router.get('/', async (req, res) => {
  try {
    // be sure to include its associated Products
    const categoryData = await Category.findAll({
      include: [ Product ],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get a single category by id
router.get('/:id', async (req, res) => {
  try {
    // be sure to include its associated Products
    const categoryData = await Category.findByPk(req.params.id, {
      include: [ Product ],
    });
    // if not categorydata then return a 404
    if(!categoryData) {
      res.status(404).json({ message: 'No category found with this id.' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    // if not categorydata then return a 404
    if(!categoryData) {
      res.status(404).json({ message: 'No category found with this id.' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    // if not categorydata then return a 404
    if(!categoryData) {
      res.status(404).json({ message: 'No cateogry found with this id.' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;