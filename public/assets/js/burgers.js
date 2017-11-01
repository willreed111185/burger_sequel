$(function(){
	$(".devour-burger").on("click", function(event){
		var id = $(this).data("id");
		$.ajax("/api/burgers/"+id, {
			type: "PUT",
			data: id
		}).then(function(){
			location.reload();
		})
	});
});