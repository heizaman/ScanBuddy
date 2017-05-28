function getDetails() {

	$.ajax({
		type: "GET",
		url: 'http://localhost/OoneHack/myapp/routes/' + 'test.php',
		success: function(response) {
			if(response.status == 'failed') {
				window.location = "./notfound.html";
			}
			else {
				var pdt = response.data;
				$("#name").html(pdt.name);
			}
		},
		error: function(xhr, status, err) {
			console.log(err.toString());
		}
	});
}