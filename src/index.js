document.addEventListener('DOMContentLoaded', function() {
  const imageId = 11 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  $.get(imageURL, function(image) {
  	$('#image').attr('src', image.url)
  	$('#name').text(image.name)
  	$('#likes').text(image.like_count)
  	image.comments.forEach(comment => {	
  		const newComment = new Comment(comment.id, comment.content)
  		$('#comments').append(newComment.renderComment());
  	})	
  })

  $('#like_button').on('click', function(e) {
  	e.preventDefault();
  	const likeCount = document.getElementById("likes").innerHTML
  	const newCount = (parseInt(likeCount) + 1)
  	$('#likes').html(newCount) 
  
  	$.ajax({ 
  		method: POST,
  		url: likeURL,
  		data: { 'image_id': imageId },
  		headers: { 
  			'Accept': 'application/json',
  			'Content-Type': 'application/json'
  			 }
  	})
  })

})
