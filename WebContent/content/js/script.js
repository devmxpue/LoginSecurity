/**
 * 
 */
//jquery ver 1.0
$(document).ready(function(){
	console.log("Jquery Listo");
});
//jquery Ver 3.0
//Manupulacion de CSS
$(function(){
	console.log("Jquery Listo");
	var h1tag =$('h1');
	alert(h1tag.html());
	h1tag.html("Ejemplo con jquery");
	
	var h2tag = $("#subtitulo");
	h2tag.html("Bienvenido a <span class ='alert alert-success'>javaScript </span>");
	
	
	console.log(h1tag.css('font-size'));
	h1tag.css('font-size','76px');
	
	//objeto
	h1tag.css({
		//atributos
		'background-color': '#9c9c9c',
		'border-style': 'solid' ,
		'color':'white',
		'text-shadow': '5px 5px  10px yellow '
	});
	h2tag.addClass('alert alert-info');
	
	
	
	/* Manipulacion de elementos con JQUERY */
	
	$('#misfavoritos li').each(function(idx,elemento){
		console.log("N°. " + idx + " contiene " + $(elemento).html());
		if(idx==1){
			$(elemento).addClass('text-danger')
			
			$(elemento).clone().appendTo("#misOdiados")
		}
		if($(elemento).html() === 'SAP'){
			$("#misOdiados").prepend($(elemento).clone());
			
		}
	});
	
	var nfav1 = $("<li class='bg-success'> Hana</li>");
	$('#misfavoritos').append(nfav1);
	
	$("<li/>", {
		html :'Crystal Reports',
		'class': 'bg-primary',
		'id': 'li-jquery'
	}).appendTo("#misfavoritos");
	
	
//eventos
	//creamos la estructura
	
	//patron Constructor
   function Album(id,name,artist,genere,urlImg){
	   this.id = id;
	   this.name =name;
	   this.genere = genere;
	   this.urlImg= urlImg;
	   
   }
	var albums =[];
	var selectedAlbum = new Album(undefined,"",{name:""},{name:""},"");
	
	
	function enviarForm(album){
		$("#id").val(album.id);
		$("#name").val(album.name);
		$("#artist").val(album.artist);
		$("#genere").val(album.genere);
		$("#foto").val(album.foto);
	}
	
	function recibirForm(){
		
		var album = new Album(); 
		
		album.id= $("#id").val();
		album.name=$("#name").val();
		album.artist ={name: $("#artist").val()};
		album.genere = {name: $("#genere").val()};
		album.foto = $("#foto").val();
		return album;
	}
	function editar(id){
		for(var i=0;i<albums.length;i++){
		if(albums[i].id === id){
			selectedAlbum = albums[i];
				enviarForm(selectedAlbum);
				break;
		 	}	
		}
	}
	
	function borrar(id){
		for(var i=0;i<albums.length;i++){
		if(albums[i].id === id){
			albums.splice(i,1);
				break;
		 	}	
		}
	}

	function actualizarTabla(){
		$("#tabla tbody").empty();
		$(albums).each(function(idx,album){
			var tr = $("<tr/>").on("Click",function(evt){
					editar(album.id);
		});
			var tdId = $("<td/>",{html: album.id});
			var tdName = $("<td/>",{html: album.name});
			var tdArtist = $("<td/>",{html: album.artist.name});
			var tdGenere = $("<td/>",{html: album.genere.name});
			var tdImgTag = $("<img/>",{
				'src': album.foto, 'class':'img-rounded',
				'style': 'width:120px;height120px;'
			});
			//var tdFoto = $("<td/>",{html:"<img src='"+album.foto+"'></img>"});
			var tdFoto =$("<td/>").append(tdImgTag);
			
			var aEditar = $("<a/>",{
				html : "Editar",'class':'btn btn-info','href':"#"
			}).click(function(evt){
				editar(album.id);
						
			});
			var tdAcciones = $("<td/>").append(aEditar);
			tr.append(tdId).append(tdName).append(tdName).append(tdArtist).append(tdGenere).append(tdFoto).append(tdAcciones).appendTo("#tabla tbody");
			
		});
	}
	 $("#guardar").click(function(evt){
		 
		 var album = recibirForm();
		 albums.push(album);
		 actualizarTabla();
		 
	 });
	
});




