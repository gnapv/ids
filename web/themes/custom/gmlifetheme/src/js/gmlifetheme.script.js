import 'popper.js';
import 'bootstrap';
import SplitType from 'split-type';
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
		  $('.navbar.navbar-expand-lg').toggleClass('nav-back-color');
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


		let contatosMenu = document.querySelector('.navbar-nav .nav-item:last-child a');
		if(contatosMenu != null  ){
			contatosMenu.onclick = function (e) {
				e.preventDefault();
				let disTopY = $('.paragraph--id--1402').offset().top - 40;
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
		let imgFundoHomePage = ['/sites/default/files/2021-10/entrada-robot.jpg',
								'/sites/default/files/2021-10/roupa.jpg',
								'/sites/default/files/2021-10/familia.jpg'];

		let rdmImage = Math.round(Math.random()*2);

		let bgImageHomeSlider = document.querySelector('.parallax-bg');

		if (bgImageHomeSlider != null) {
			bgImageHomeSlider.style.removeProperty("background-image");
			bgImageHomeSlider.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.68)), url("'+ imgFundoHomePage[rdmImage] +'")';
	  
			console.log('bgImageHomeSlider - ',bgImageHomeSlider);
			console.log("imgFundoHomePage[rdmImage]  - ",imgFundoHomePage[rdmImage] );
			//init parallax GSAP
			//startParallax();
		}

	}


	function startParallax(){
		console.log("ola startParallax ----------");
		gsap.to(".parallax-bg-mau", {
			scrollTrigger: {
			  scrub: true
			}, 
			y: (i, target) => -ScrollTrigger.maxScroll(window) * -0.6,
			ease: "none"
		  });
	}

	function animaTxt() {
		//const text = new SplitType('.split-txt'); // da 3 ARRAY - text.lines text.words text.chars
		const text = new SplitType('.slider-home .split-txt-js', { types: 'words, lines' });
  
		let words = text.words; //an array of all the divs that wrap each character
		const tl = gsap.timeline();
		//gsap.set(".split-txt", { y:100});
		//gsap.set(words, { y:"100%"});
		gsap.set(words, { y:100});
		tl.to(words, {duration:.8 , y:0,  ease:"back", stagger: 0.1}, "+=0");
		//tl.to(words, {duration:.8 , y:0,  ease: CustomEase.create("custom", "M0,0 C0.128,0.572 0.243,0.966 0.498,1.04 0.658,1.086 0.838,1 1,1 "), stagger: 0.1}, "+=0");
		//console.log("ola agora");
	}
	
	sliderHomeRandomImg();
	//animaTxt();
	animaSecctionsTexto();
	removeLoading();
	corrigirModal();
	addDataSwipperSlidesElements ()
	goDownCCardsSol();
	goDown();
	mudaNav();

	//startParallax();

	function animaSecctionsTexto() {

		const seccionElements = document.querySelectorAll("[class*='animated-section']");
		
		
			// animaTxt - words
			seccionElements.forEach((section, i) => {

					//console.log("section = ",section);

					let itemAniElements = section.querySelectorAll(".split-txt-js-words");
					const text = new SplitType(itemAniElements, { types: 'words' });
					let words = text.words; //an array of all the divs that wrap each character
			
					let startPosItems = "top bottom-=120px";
					let itemElements = words;

					let objInItems = {};
					let objOutitems = {};
					let objSet = {};

					objSet.opacity = "0";
					objSet.y =40;
					
					gsap.set(itemElements, objSet);

					objInItems.duration = 0.8;
					objInItems.opacity = 1;
					objInItems.y = 0;
					objInItems.ease = "back";
					objInItems.stagger = 0.05;

					objOutitems.duration = 0.35;
					objOutitems.opacity = 0;
					objOutitems.y = 100;
					objOutitems.ease = "power1.inOut";
					objOutitems.stagger = 0.1;

					ScrollTrigger.batch( itemElements, {
					onEnter: (elements, triggers) => {
						gsap.to(elements, objInItems );
					},
					onLeaveBack: (elements, triggers) => {
						gsap.to(elements, objOutitems );
					},
					start: startPosItems,
					});


			});




			// animaTxt - lines
			seccionElements.forEach((section, i) => {

				//console.log("section = ",section);
				let itemAniElements = section.querySelectorAll(".split-txt-js");
				const text = new SplitType(itemAniElements, { types: 'lines' });
				let words = text.lines; //an array of all the divs that wrap each character
		
				let startPosItems = "top bottom-=120px";
				let itemElements = words;

				let objInItems = {};
				let objOutitems = {};
				let objSet = {};

				objSet.opacity = "0";
				objSet.y =40;
				
				gsap.set(itemElements, objSet);

				objInItems.duration = 0.8;
				objInItems.opacity = 1;
				objInItems.y = 0;
				objInItems.ease = "back";
				objInItems.stagger = 0.3;

				objOutitems.duration = 0.35;
				objOutitems.opacity = 0;
				objOutitems.y = 100;
				objOutitems.ease = "power1.inOut";
				objOutitems.stagger = 0.1;

				ScrollTrigger.batch( itemElements, {
				onEnter: (elements, triggers) => {
					gsap.to(elements, objInItems );
				},
				onLeaveBack: (elements, triggers) => {
					gsap.to(elements, objOutitems );
				},
				start: startPosItems,
				});


		});



			//anima tapa-img
			seccionElements.forEach((section, i) => {

				//console.log("section = ",section);

				let itemAniElements = section.querySelectorAll(".tapa-img");

				let startPosItems = "top bottom-=220px";
				let itemElements = itemAniElements;



				let objInItems = {};
				let objOutitems = {};
				let objSet = {};



				//objSet.transformOrigin  = '0% 100%';
				//objSet.xPercent = 100;
				//gsap.set(itemElements, objSet);


				objInItems.duration = .6;
				objInItems.width = 0;
				//objInItems.xPercent = 1000;
				objInItems.ease = "none";

				
				objOutitems.duration = 1;
				objOutitems.width = 1200;
				//objOutitems.xPercent = 0;
				objOutitems.ease = "none";




				ScrollTrigger.batch( itemElements, {
				onEnter: (elements, triggers) => {
					gsap.to(elements, objInItems );
				},
				onLeaveBack: (elements, triggers) => {
					gsap.to(elements, objOutitems );
				},
				start: startPosItems,
				});



		});

	}

	      //Help functions 

		  function getFullClass(partialClass) {
			foundClasses = [];
			$("[class*='" + partialClass + "']").each(function (i, e) {
			  seccionElements.push(e);
				foundClasses.push($(e).attr("class").split(" ").filter(function (d) {
					return d.indexOf(partialClass) >= 0
				}));
			});
		  // console.log("seccionElements = "+seccionElements);
			return foundClasses;
	
		}
		function extractProps(groupClass){
			//groupClass.split("--");
			//console.log("groupClass = "+ groupClass);
			foundProps = [];
			$.each( groupClass, function( i, val ) {
				//console.log("val = "+ val +" i = "+i);
				foundProps.push(val.toString().split("--"));
				//console.log("foundProps = "+ foundProps[i]);
			});
			return foundProps;
		  }


	//document.getElementsByTagName("BODY")[0].onresize = function() {removeBottomSpace()};




 	}); //end once
 
    }
  };
})(jQuery, Drupal);
