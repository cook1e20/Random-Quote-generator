$(document).ready(function() {
  function findNewQuote() {
    var tweetUrl = "https://twitter.com/intent/tweet?text=";
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(response) {
        console.log(response);
        $("#contentQuote").html("<h2>"+response.quoteText+"</h2>");
        $("#authorQuote").html("<h3>- "+response.quoteAuthor+"</h3>"|| "<h2>- unknown</h2>");
        $("#tweet-quote").attr("href", tweetUrl + response.quoteText + "--" + response.quoteAuthor); 
      }
    });
  }
  $("#getQuote").click(function(event){
    event.preventDefault();
    findNewQuote();});
  
});