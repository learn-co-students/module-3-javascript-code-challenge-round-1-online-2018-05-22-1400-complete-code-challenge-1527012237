document.addEventListener('DOMContentLoaded', function() {
  const imageId = 12 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

})







$(function() {

    $.get('https://randopic.herokuapp.com/images/12', function(data) {

    data["url"] //where to append?
    $("#likes").append(data["like_count"])
    $("#name").append(data["name"])
    var comments= data["comments"]

    comments.forEach(function(comment){
      $("#comments").append("<li>"+ comment["content"]+ "</li>")
    })


    });
    $("#like_button").on("click", function() {


var AddLike = parseInt($("#likes")[0].innerHTML) + 1;

$("#likes").html(AddLike)

// fetch('https://randopic.herokuapp.com/likes', {
//   debugger
//   method: 'POST',
//   body: {image_id:12}
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   }
// }).then(res => res.json()).then(json => console.log(json));


    })

$("#comment_form").on("submit",function(){
var value = $(this).serialize()  // or $(this)[0].value
var realvalue= value.slice(8)
$("#comments").append("<li>"+realvalue+"</li>")
$("#comment_form").val("")
})


  });


  // const postData = {
  //   body: {image_id:12}
  // };

//  use faraday request




  // Example Response:
  // {
  //     "id": 112,
  //     "image_id": 8,
  //     "created_at": "2017-11-17T13:52:22.167Z",
  //     "updated_at": "2017-11-17T13:52:22.167Z"
  // }
  // ```
