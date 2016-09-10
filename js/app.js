$(function(){
  //get data from You Tube and display it
function getResults(searchTerm){
  $.getJSON("https://www.googleapis.com/youtube/v3/search",
  {
    "part":"snippet",
    "key":"AIzaSyBp6lyF73RjrgncP8ZoZsWLF7K0b12VaaE",
    "q":searchTerm,
    "maxResults":20
},
function(data){
  if (data.pageInfo.totalResults == 0){
    alert("No results found!");
  }
  //Empty list if no results
  displayResults(data.items);
}
);
}
//Results display in ul
function displayResults(videos) {
  var html = "";
  $.each(videos, function (index, video){
  console.log(video.snippet.title);
  console.log(video.snippet.thumbnails.high.url);
  html = html + "<li><p class='line-clamp'>" + video.snippet.title +
  "</p><a target='blank' href='https://www.youtube.com/watch?v=" +video.id.videoID +"'><img src='" + video.snippet.thumbnails.high.url + "'/></a></li>";
});
$("#search-results ul").html(html);
}
//Use term for search
$("#search-form").submit(function(event){
  event.preventDefault();
  getResults($("#search-term").val());
});
});
