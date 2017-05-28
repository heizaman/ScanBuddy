var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
  return query_string;
}();

//console.log(QueryString);


function getDetails() {
	$.ajax({
		type: "GET",
		url: 'http://192.168.4.28:3000/test/' + QueryString.pid,
		success: function(response) {
			if(response.status == 'success') {
				var pdt = response.data;
        var his = response.history;
				$("#name").html(pdt.name);
        $("#dop").html(pdt.dop);
        $("#owner").html(pdt.owner);
        $("#phone").html(pdt.phone);
        $("#website").html(pdt.website);
        $("#date1").html(his[0].date);
        $("#date2").html(his[1].date);
        $("#date3").html(his[2].date);
        $("#info1").html(his[0].info);
        $("#info2").html(his[1].info);
        $("#info3").html(his[2].info);
			}
			else {
				window.location = "./notfound.html";
			}
		},
		error: function(xhr, status, err) {
			console.log(err.toString());
		}
	});
}

