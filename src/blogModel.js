var mongoose = require('mongoose');

// Setup schema
var blogSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        text: true,
        required: true,
        index: true
    },
    image: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});
// Export Blog model
var Blog = module.exports = mongoose.model('blog', blogSchema);
module.exports.get = function (callback, limit, search) {
    Blog.find({ $text: { $search: search } }, callback).limit(limit);
}