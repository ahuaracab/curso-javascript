$(document).ready(function(){
	//mover elemento por la pagina
	$(".elemento").draggable();

	// redimensionar
	 $(".elemento").resizable();

	 //Seleccionar elementos
	 //$(".lista-seleccionable").selectable();

	 //Ordenar elementos
	 $(".lista-seleccionable").sortable({
	 	update: function(){
	 		console.log("Has alterado el orden");
	 	}
	 }); // no puede funcionar junto a selectable

	 $("#elemento-movido").draggable(); 
	 $("#area").droppable({
	 	drop: function(){
	 		console.log("has soltado algo dentro del area");
	 	}
	 }); 

	 //Efectos
	 $("#mostrar").click(function(){
	 	//$(".caja-efectos").fadeToggle();
	 	//$(".caja-efectos").toggle("fade");
	 	//$(".caja-efectos").effect("explode");
	 	//$(".caja-efectos").toggle("explode");
	 	//$(".caja-efectos").toggle("drop");
	 	//$(".caja-efectos").toggle("scale");
	 	$(".caja-efectos").toggle("puff",4000);
	 	//$(".caja-efectos").toggle("shake");

	 });

	 //Tooltip
	 $(document).tooltip();

	 $("#lanzar-popup").click(function()
	 {
	 	$("#popup").dialog();
	 });

	 //DATAPICKER

	 $("#calendario").datepicker();

	 //TABS
	 $("#pestanas").tabs();
	 

});