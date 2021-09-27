import 'popper.js';
import 'bootstrap';




(function ($, Drupal) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
		
     // $('input.myCustomBehavior', context).once('myCustomBehavior').each(function () {
        // Apply the myCustomBehaviour effect to the elements only once.


		$(document, context).once('myCustomBehavior').each(function () {

			//console.log("Start IDS APP v0.1! - one time");



   	console.log(" ");
  	console.log(" ");

    console.log("  %cby:%cGoMaStudio.net %c %c %c", "border-left:10px solid #de4b3a; background: #444; color: #eb7f3b; padding: 10px; border-radius:0px", "color: orange; background: #444; color: #fff; padding:10px 10px 10px 0; border-right:10px solid #2a9a88; border-radius:0px; ", "background: #444; border-left:5px solid #e4683a; padding:10px;  border-radius:20px", "border-left:5px solid #e24e3b; padding:10px;background: #444;", "border-left:5px solid #e4683a; padding:10px;background: #444; border-radius:20px");

  	console.log(" ");
  	console.log(" ");



    	$( "#bt-hambuguer" ).click(function() {
		  $(this).toggleClass('is-active');
		});




		function confirmaURL() {
		  let finalPath = window.location.href;
		  abrePorDefeitoPag(finalPath);
		}

		function abrePorDefeitoPag(qualModal) {
		  //confirmar a path para ver se vale a pena carregar o modal
		  if (qualModal.indexOf("?") !== -1) {
		    let myPath = qualModal.split("?");
		    let finalPathID = getParameterByName('id');
		    let finalPath = '#'+finalPathID;
		    let alvoAbrir = finalPath.replace("heading", "collapse");
		    $(alvoAbrir).toggleClass( "show" );


	        setTimeout(function(){
	        		        let disTopY = $(finalPath).offset().top - 120;
		    				//console.log("disTopY = ",disTopY);
	        				$("html,body").animate({ scrollTop: disTopY }, 600);	

	        }, 500);
		
		  }
		}

	function getParameterByName(name, url = window.location.href) {
	    name = name.replace(/[\[\]]/g, '\\$&');
	    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}


	function removeLoading() {
		//gsap.to(".loader", {scale: 0, duration: .175});
		//gsap.to(".fundo-loader", {disTopY: -100%, duration: .275});
		  $(".fundo-loader").addClass('loaded');
	}
	
	function addDataSwipperSlidesElements () {
		$(".slider-home .swiper-slide h4").attr("data-swiper-parallax","-300");
	}

	function removeBottomSpace() {
		let pageH = $( '.page' ).height();
		pageH -= 130;
		//console.log("pageH = "+pageH);

		$( '.page' ).height(pageH);
	}

	removeLoading();
	addDataSwipperSlidesElements ()
	removeBottomSpace();




 	}); //end once
 
    }
  };
})(jQuery, Drupal);
