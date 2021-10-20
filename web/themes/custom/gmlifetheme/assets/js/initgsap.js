

(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.initgsap =  {
    attach: function (context, settings) {
      $(document, context).once('initgsap').each( function() {
     
const seccionElements = [];
const finalSections = getFullClass("animated-section", seccionElements );
const finalProps = extractProps(finalSections);
let delayPosY = [];

seccionElements.forEach((section, i) => {

  // grab props from classes to apply animation
  let obj = {};
  let startPos = "top bottom-=120px";

  obj.autoAlpha = 0;

  if(finalProps[i][1] == "move"){
    if(finalProps[i][2] == "t"){
      obj.y= "-150px";
      delayPosY.push(0);
    } else   if(finalProps[i][2] == "r"){
      obj.x= "150px";
      delayPosY.push(0);
    } else   if(finalProps[i][2] == "b"){
      obj.y= "150px";
      delayPosY.push(150);
      startPos = "top bottom-=-30px";
    } else   if(finalProps[i][2] == "l"){
      obj.x= "-150px";
      delayPosY.push(0);
    }
  } else if(finalProps[i][1] == "no-alpha"){
    obj.autoAlpha = 1;
  }


  
  obj.ease = "power1.inOut";
  obj.scrollTrigger = {
      trigger: section,
      start: startPos,
      toggleActions: "play none none reverse"
    }
    // run animation width current configuration
  gsap.from(section, obj );

});

// ScrollTrigger.refresh();





//items por secction
seccionElements.forEach((section, i) => {
    let partialClass = "animated-col";
    let colsElements = section.querySelectorAll("[class*='" + partialClass + "']");
    let finalCols = [];

    //remove the tween y pos if delay on posY
    let startPosCols = "top bottom-=250px";
    if (delayPosY[i] != 0) {
        startPosCols = "top bottom-=100";
    } 

    //grab all classes that have the query partialClass

    if (colsElements.length != 0) {

        for (var i = 0; i < colsElements.length; i++) {
            finalCols.push(colsElements[i].className.split(" ").filter(function (d) {
              return d.indexOf(partialClass) >= 0
          }));
        }

 

        const finalPropsCols = extractProps(finalCols);
       // console.log("finalPropsCols : ",finalPropsCols);
        // grab props from classes to apply animation
        let objInItems = {};
        let objOutitems = {};
        let objSet = {};

        //animated-col--move--b
        if(finalPropsCols[0][1] == "move"){
            if(finalPropsCols[0][2] == "t"){
            objInItems.y= "0%";
            objOutitems.y= "-40px";
            objSet.y = "-40px";


            } else   if(finalPropsCols[0][2] == "r"){
            objInItems.x= "0%";
            objOutitems.x= "40px";
            objSet.x = "40px";


            } else   if(finalPropsCols[0][2] == "b"){
            objInItems.y= "0%";
            objOutitems.y= "40px";
            objSet.y = "40px";

            } else   if(finalPropsCols[0][2] == "l"){
            objInItems.x= "0%";
            objOutitems.x= "-40px";
            objSet.y = "-40px";



            }
        }

        if(finalPropsCols[0][3] == "scale"){
            objInItems.scale= "1";
            objOutitems.scale= "0";
            objSet.scale = "0";
            objSet.transformOrigin= "top 50%" ;

            //gsap.add(item, {scale: 1});
        }else  if(finalPropsCols[0][3] == "blur"){
            objInItems.filter = "blur(0px)";
            objOutitems.filter= "blur(8px)";
            objSet.filter = "blur(0px)";
        }



        objSet.opacity = "0";
        
        gsap.set(colsElements, objSet);


        objInItems.duration = 0.25;
        objInItems.opacity = 1;
        objInItems.ease = "power1.inOut";
        objInItems.stagger = 0.15;

        
        objOutitems.duration = 0.35;
        objOutitems.opacity = 0;
        objOutitems.ease = "power1.inOut";
        objOutitems.stagger = 0.15;



        //animated columns 
        //gsap.set(".animated-col", {opacity: 0});

        //console.log("objInCols :",objInItems);
        //console.log("objOutCols :",objOutitems);

        ScrollTrigger.batch( colsElements, {
        onEnter: (elements, triggers) => {
            gsap.to(elements, objInItems );
        },
        onLeaveBack: (elements, triggers) => {
            gsap.to(elements, objOutitems );
        },
        start: startPosCols,
        });


        
    } // itemElements.length

});



//items por secction
// podemos usar animated-item--move--b--none

seccionElements.forEach((section, i) => {
    let partialClass = "animated-item";
    let itemElements = section.querySelectorAll("[class*='" + partialClass + "']");
    let finalitems = [];
    

    
    let startPosItems = "top bottom-=230px";
    if (delayPosY[i] != 0) {
        startPosItems = "top bottom-=40";
    } 

    //console.log("elementsInSection : ",itemElements);

    if (itemElements.length != 0) {

        for (var i = 0; i < itemElements.length; i++) {
          finalitems.push(itemElements[i].className.split(" ").filter(function (d) {
              return d.indexOf(partialClass) >= 0
          }));
        }

        const finalPropsItems = extractProps(finalitems);
        // grab props from classes to apply animation
        let objInItems = {};
        let objOutitems = {};
        let objSet = {};

        if(finalPropsItems[0][1] == "move"){
            if(finalPropsItems[0][2] == "t"){
            objInItems.y= "0%";
            objOutitems.y= "-40px";
            objSet.y = "-40px";


            } else   if(finalPropsItems[0][2] == "r"){
            objInItems.x= "0%";
            objOutitems.x= "40px";
            objSet.x = "40px";


            } else   if(finalPropsItems[0][2] == "b"){
            objInItems.y= "0%";
            objOutitems.y= "40px";
            objSet.y = "40px";

            } else   if(finalPropsItems[0][2] == "l"){
            objInItems.x= "0%";
            objOutitems.x= "-40px";
            objSet.y = "-40px";



            }
        }

        if(finalPropsItems[0][3] == "scale"){
            objInItems.scale= "1";
            objOutitems.scale= "0";
            objSet.scale = "0";
            objSet.transformOrigin= "50% 50%" ;

            //gsap.add(item, {scale: 1});
        }else  if(finalPropsItems[0][3] == "blur"){
            objInItems.filter = "blur(0px)";
            objOutitems.filter= "blur(8px)";
            objSet.filter = "blur(0px)";
        }



        objSet.opacity = "0";
        
        gsap.set(itemElements, objSet);


        objInItems.duration = 0.25;
        objInItems.opacity = 1;
        objInItems.ease = "power1.inOut";
        objInItems.stagger = 0.15;

        
        objOutitems.duration = 0.35;
        objOutitems.opacity = 0;
        objOutitems.ease = "power1.inOut";
        objOutitems.stagger = 0.15;



        //animated columns 
        //gsap.set(".animated-col", {opacity: 0});

        ScrollTrigger.batch( itemElements, {
        onEnter: (elements, triggers) => {
            gsap.to(elements, objInItems );
        },
        onLeaveBack: (elements, triggers) => {
            gsap.to(elements, objOutitems );
        },
        start: startPosItems,
        });


        
    } // itemElements.length

});


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





    });
  }
}
} (jQuery, Drupal, drupalSettings));
