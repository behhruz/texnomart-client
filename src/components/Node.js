app.get('/Products', (req, res) => {
    const category = req.query.category; // Query parametrini olish
    const filteredProducts = products.filter(product => product.category === category); // Kategoriyaga asoslanib filtrlash
    res.json(filteredProducts);
  });
  