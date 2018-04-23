module.exports = (app) => {
    const articles = require('../controllers/article.controller.js');

    // Create a new Article
    app.post('/articles', articles.create);

    // Retrieve all Article
    app.get('/articles', articles.findAll);

    // Retrieve a single Article with articlesId
    app.get('/articles/:articleId', articles.findOne);

    // Update a Article with articlesId
    app.put('/articles/:articleId', articles.update);

    // Delete a Article with articlesId
    app.delete('/articles/:articleId', articles.delete);
}
