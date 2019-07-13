// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

// Import contact controller
var blogController = require('./blogController');
// Contact routes
router.route('/blog')
    .get(blogController.index)
    .post(blogController.new);
router.route('/blog/:id')
    .get(blogController.view)
    .patch(blogController.update)
    .put(blogController.update)
    .delete(blogController.delete);

// Export API routes
module.exports = router;