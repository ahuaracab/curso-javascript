$(document).ready(function(){
	// selector de ID
	var rojo = $("#rojo").css("background","red")
						 .css("color","white");

	$("#amarillo").css("background","yellow")
				  .css("color","green");
	// console.log(rojo);

	$("#verde").css("background","green")
			   .css("color","white");

	// Selector de clase

	var zebra = $(".zebra");
	zebra.css("padding","5px");
	//console.log(zebra.eq(0));

	
	$(".sin_borde").click(function(){
		console.log("CLick");
		$(this).addClass('zebra');
	});

	// Selector de etiqueta
	var p = $("p").css("cursor","pointer");
	p.click(function(){
		var th = $(this);
		if(!th.hasClass("grande")){
			//th.removeClass("chico");
			th.addClass("grande");
		} else {
			th.removeClass("grande");
			//th.addClass("chico");
		}
		
	});
	//console.log(p);

	// Selectores de atributos
	$('[title="Google"]').css("background","green");
	$('[title="Facebook"]').css("background","blue");

	//Otros
	//$("a,p").addClass("margen-superior");

	//var busqueda = $("#caja").find(".resaltado");

	// var busqueda = $("#caja .resaltado");

	var busqueda = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="Google"]');

	console.log(busqueda);



});