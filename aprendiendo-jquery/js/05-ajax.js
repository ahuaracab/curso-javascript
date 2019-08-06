$(document).ready(function(){
	// LOAD
	// $("#datos").load("https://reqres.in/");

	// GET y POST

	$.get("https://reqres.in/api/users",{page:3},function(response){
		response.data.forEach((element)=>{
			//console.log(element.first_name);
			//console.log(index);
			$("#datos").append("<p>" + element.first_name + " "+ element.last_name+ "</p>");
		})
	});

	/*var usuario = {
		nombre: "angelo",
		web:"https://google.com.pe"
	};

	$.post("https://reqres.in/api/users",usuario,function(response){
		console.log(response);
	})
*/
	

	$("#formulario").submit(function(e){

		e.preventDefault();
		var usuario = {
			first_name: $("input[name='first_name']").val(),
			last_name: $("input[name='last_name']").val()
		}
		console.log(usuario);

		/*$.post($(this).attr("action"),usuario,function(response){
			console.log(response);
		}).done(function(){
			alert("usuario correctamente agregado");
		});*/

		$.ajax({
			type: 'POST',
			url: $(this).attr("action"),
			data: usuario,
			beforeSend: function(){
				console.log("Enviando usuario...");
			},
			success: function(response){
				console.log(response);
			},
			error: function(){
				console.log("Ha ocuurido un error");
			},
			timeout: 100 // ha ocurrido un error

		});

		//return false;
	});


});