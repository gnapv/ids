import 'popper.js';
import 'bootstrap';
//import "gsap";
//import { ScrollToPlugin } from "gsap/ScrollToPlugin";

//gsap.registerPlugin(ScrollToPlugin);


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

	function goDown() {
		
		let linkGoDown = document.getElementsByClassName("scroll-down")[0];
		let homePage = document.getElementsByClassName("page-node-14")[0];
		let missaoPage = document.getElementsByClassName("page-node-15")[0];
		
		


		if(linkGoDown != null && homePage != null ){
			linkGoDown.onclick = function () {
				let disTopY = $('.paragraph--id--1529').offset().top - 40;
				$("html,body").animate({ scrollTop: disTopY }, 600, "swing");
				//console.log(com.greensock.plugins.ScrollToPlugin.version); 
				//gsap.to(window, {duration: 2, scrollTo:'.paragraph--id--1529'});
			}
		} else  if(linkGoDown != null && missaoPage != null ){
			linkGoDown.onclick = function () {
				let disTopY = $('.missao').offset().top - 40;
				$("html,body").animate({ scrollTop: disTopY }, 600, "swing");
			}
		}
		
	}

	function goDownCCardsSol() {

		let linkSolucoes1 = document.getElementsByClassName("its-1")[0];
		let linkSolucoes2 = document.getElementsByClassName("its-2")[0];
		let linkSolucoes3 = document.getElementsByClassName("its-3")[0];

		if(linkSolucoes1 != null ){

			linkSolucoes1.onclick = function () {
				let disTopY = $('.sol-card:nth-child(1)').offset().top - 90;
				console.log("disTopY = ",disTopY);
				$("html,body").animate({ scrollTop: disTopY }, 600);
			}
			linkSolucoes2.onclick = function () {
				let disTopY = $('.sol-card:nth-child(2)').offset().top - 90;
				console.log("disTopY = ",disTopY);
				$("html,body").animate({ scrollTop: disTopY }, 600);
			}
			linkSolucoes3.onclick = function () {
				let disTopY = $('.sol-card:nth-child(3)').offset().top - 90;
				console.log("disTopY = ",disTopY);
				$("html,body").animate({ scrollTop: disTopY }, 600);
			}
		}
	}

	function mudaNav() {
		// confirma sacos
		let laundryPage = document.getElementsByClassName("page-node-17")[0];
		let dryseatPage = document.getElementsByClassName("page-node-18")[0];
		let uvRobotPage = document.getElementsByClassName("page-node-19")[0];

		if(laundryPage != null || dryseatPage != null || uvRobotPage != null){
			let logoImg = document.getElementsByClassName("navbar-brand")[0];
			let logoFinal = logoImg.getElementsByTagName('img')[0];
			logoFinal.setAttribute('src','/sites/default/files/2021-10/logo_ids_positivo.svg');
		}
	}



	function corrigirModal() {
		//
		//Fix Modal News Position
		//
		  $( '.modal' ).each(function( index ) {
			let thisOne  = $(this).remove();
			let myDivOnde = $( 'body' );
			thisOne.appendTo(myDivOnde);
		  });

		$('.btn-modal[data-target|="#modal-1825"]').on('click', function (e) {
				// alterar a select por defeito
				let finalPath = window.location.href;
				console.log("finalPath = "+finalPath);
				if (finalPath.indexOf("uv-robot") !== -1) {
					// alterar a select por defeito
					$("#edit-produto option[value=UV-Robot]").attr('selected', 'selected');
				} else if (finalPath.indexOf("dryseat") !== -1) {
					$("#edit-produto option[value=DrySeat]").attr('selected', 'selected');
				}else {
					$("#edit-produto option[value=Laundry-Bags]").attr('selected', 'selected');
					
				}
		})
	}

	function sliderHomeRandomImg() {
		//page-node-14
		let imgFundoHomePage = ['/sites/default/files/2021-10/istockphoto-1215020405-612x612.jpeg',
								'/sites/default/files/2021-10/istockphoto-488377600-1024x1024.jpeg',
								'/sites/default/files/2021-10/istockphoto-1217126540-1024x1024.jpeg'];

		let rdmImage = Math.round(Math.random()*2);

		let bgImageHomeSlider = document.querySelector('.parallax-bg');
		bgImageHomeSlider.style.removeProperty("background-image");
		bgImageHomeSlider.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.68)), url("'+ imgFundoHomePage[rdmImage] +'")';
  
		console.log('bgImageHomeSlider - ',bgImageHomeSlider);
		console.log("imgFundoHomePage[rdmImage]  - ",imgFundoHomePage[rdmImage] );

		startParallax();
	}


	function startParallax(){
		gsap.to(".parallax-bg", {
			scrollTrigger: {
			  scrub: true
			}, 
			y: (i, target) => -ScrollTrigger.maxScroll(window) * -0.6,
			ease: "none"
		  });
	}

	//setTimeout(sliderHomeRandomImg,10);
	
	sliderHomeRandomImg();


	removeLoading();
	corrigirModal();
	addDataSwipperSlidesElements ()
	goDownCCardsSol();
	goDown();
	mudaNav();


	//document.getElementsByTagName("BODY")[0].onresize = function() {removeBottomSpace()};




 	}); //end once
 
    }
  };
})(jQuery, Drupal);
