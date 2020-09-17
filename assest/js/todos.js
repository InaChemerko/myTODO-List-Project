// check off specific Todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


//click on X to delete TOdo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function (){
		$(this).remove();
	});
	event.stopPropagation();
})


$("input[type= 'text']").keypress(function(event){
	if(event.which === 13){
 		//grabbing new todo text from input
 		var todoText = $(this).val();
 		//check if todoText is not empty
 		if (todoText !== "") {
 		$(this).val("");

 		//create a new li and add to ul
 		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText +"</li>");
 	}
 	} 	
 })

$(".fa-plus").on("click", function(){
	$("input[type= 'text']").fadeToggle();
}) 