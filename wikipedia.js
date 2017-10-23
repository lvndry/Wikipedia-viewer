/*$(document).ready(function() {

});*/

var html = "";
var url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=';

function search(){
      var search_content = $("#searchinp").val().replace(' ', "%20");
      //console.log('search_content: ' + search_content);
      $.ajax({
            url: url + search_content,
            type: 'POST',
            dataType: 'jsonp',
            crossDomain: true,
            success: function (json){
                  $(".results").empty(); //Makes sure the div is empty before writing in it
                  console.log(json);

                  var query = json.query;
                  var result = query.search;

                  result.forEach(function(element){
                        var title = element.title;
                        var snippet = element.snippet;
                        var href = element.title.replace(' ', '_');
                        var wikilink = 'https://en.wikipedia.org/wiki/' + href;
                        html = "<div id='result_content'>";
                        html += "<a href='" + wikilink + "'> <div class='title'>" + href + "<p>" + snippet +  "</p> </div> </a>";
                        $(".results").append(html);
                        html += "</div>";
                  });
            }
      })
      .done(function() {
            console.log("success");
      })
      .fail(function() {
            console.log("error");
      })
      .always(function() {
            console.log("complete");
      });
}
