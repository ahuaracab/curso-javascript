$(document).ready(function(){
	
	reloadLinks();

	var button = $("#add_button");
	var link = $("#add_link"); 
	var menu = $("#menu");

	link.focus();

	button.removeAttr("disabled")
		  .click(function(){
				/*var  li = document.createElement("li");
				var  a = document.createElement("a");
				a.append(link.val());
				li.append(a);
				menu.append(li);*/
				//menu.html('<li><a href="' + link.val() + '"/></a></li>');//chanca datos
				menu.append('<li><a href="' + link.val() + '"/></a></li>');
				link.val("")
					.focus();
				reloadLinks();
		   });
});

function reloadLinks(){
	$("a").each(function(){
		var th = $(this);
		var enlace = th.attr("href");
		//console.log(enlace);
		th.attr('target','_blank');//abre en nueva pestana
		//that.attr('href','holaxdxd');

		th.text(enlace);
		// console.log(that.text(enlace));
	});	
}