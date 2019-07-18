// Import contact model
let Blog = require('./blogModel');
const uuidv1 = require('uuid/v1');

// Handle index actions
exports.index = function (req, res) {
    Blog.get(function (err, blog) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Blogs retrieved successfully",
            data: blog
        });
    }, req.query.limit, req.query.search);
};


// Handle create blog actions
exports.new = function (req, res) {
    var blog = new Blog();
    blog.id = uuidv1()
    blog.title = req.body.title;
    blog.author = req.body.author;
    blog.content = req.body.content;
    blog.image = req.body.image;

// save the blog and check for errors
    blog.save(function (err) {
    res.json({
            message: 'New blog created!',
            data: blog
        });
    });
};
// Handle view blog info
exports.view = function (req, res) {
    Blog.findById(req.params.id, function (err, blog) {
        if (err)
            res.send(err);
        res.json({
            message: 'Blog details loading..',
            data: blog
        });
    });
};
// Handle update blog info
exports.update = function (req, res) {
Blog.findById(req.params.id, function (err, blog) {
        if (err)
            res.send(err);
        blog.title = req.body.title;
        blog.author = req.body.author;
        blog.content = req.body.content;
        blog.image = req.body.image;
// save the blog and check for errors
        blog.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Blog Info updated',
                data: blog
            });
        });
    });
};
// Handle delete blog
exports.delete = function (req, res) {
    Blog.remove({
        _id: req.params.id
    }, function (err, blog) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Blog deleted'
        });
    });
};

