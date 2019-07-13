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
        required: true
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
module.exports.get = function (callback, limit) {
    Blog.find(callback).limit(limit);
}