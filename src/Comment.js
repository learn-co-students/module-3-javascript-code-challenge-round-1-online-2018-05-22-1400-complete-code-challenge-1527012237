class Comment {
	constructor(id, content) {
		this.id = id
		this.content = content
	}
}

Comment.prototype.renderComment = function() {
	return `<li>${this.content}</li>`;
}
