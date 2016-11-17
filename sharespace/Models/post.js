// Require mongoose
var mongoose = require('mongoose');

// Posts Schema
var postSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	description:{
		type: String,
		required: true
	}
// To prevent of adding version key
});

// How we make Post object accessible from outside (module.exports)
var Post = module.exports = mongoose.model('Post', postSchema);

// Get Posts function (getPosts)
module.exports.getPosts = function(callback, limit){
	Post.find(callback).limit(limit);
}

// Get post function (getPostById) its id
module.exports.getPostById = function(id, callback){
	Post.findById(id, callback);
}

// Add post function (addPost)
module.exports.addPost = function(post, callback){
	Post.create(post, callback);
}

// Update post function (updatePost)
module.exports.updatePost = function(id, post, options, callback){
	var query = {_id: id};
	var update = {
		title: post.title,
		description: post.description,
		keywords: post.keywords,
		file: post.file
	}
	Post.findOneAndUpdate(query, update, options, callback);
}

// Delete post function (deletePost)
module.exports.removePost = function(id, callback){
	var query = {_id: id};
	Post.remove(query, callback);
}
