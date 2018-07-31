$(function(){
// "use strict";
	var s = $("#svg2");
	// var one = s.find("#layer1").children(".one").eq(0);
	// var two = s.find("#layer1").children(".two").eq(0);//.eq(0)
	// var three = s.find("#layer1").children(".three").eq(0);
	var now = 360;
	
	// jPM.on();
	// $.Velocity.hook(one,"transformOrigin","50% 50%");
	// $.Velocity.hook(two,"transformOrigin","50% 50%");
	// $.Velocity.hook(three,"transformOrigin","50% 50%");
		// init scotch slide
		// var scotchPanel;
	// transformicons.add([]);	
	// 
	// { parent: ".scotch-panel-canvas" }
	
	// $(".profile").stick_in_parent();
	
  //    $(".jspDrag").on('mouseover', function(event) {
  //              	event.preventDefault();
  //              	/* Act on the event */
  //              	    $(this).addClass('jspHover');
  //              });
	 // $(".jspDrag").on('click', function(event) {
	 // 	event.preventDefault();
	 //   	/* Act on the event */
	 //   	    $(this).addClass('jspActive');
	 //   });
     
   
// ,recalc_every:3
    // $(".page-content .profile").stick_in_parent();
        $(".site-header").stick_in_parent({parent:"body",spacer:false,bottoming:true,recalc_every:1})
         .on("sticky_kit:stick", function(e) {
    			console.log("has stuck!", e.target);
    			$(this).children('.wrapper').children('.site-title').css({
    				lineHeight: "120px",
    				marginTop: "-.5em"
    			});
    			// if(!matchMedia("only screen and (max-width: 480px)").matches){
    			if($(window).width() >= 480){
	    			$(this).children('.wrapper').children('.site-nav').css({
	    				lineHeight: "120px",
	    				marginTop: "-.5em"
	    			});
    				
    			}	
    		$(this).children('.wrapper').children('#mySvgWrapper').children("svg").css({width: "100px", height:"100px"});	
    			// }
 		})
  		.on("sticky_kit:unstick", function(e) {
    			console.log("has unstuck!", e.target);
    			// .style("transform","translate3d(0px, 0px, 0px)")
    			// $(this).parent('.scotch-panel-canvas').css('transform', 'translate3d(0px, 0px, 0px)');;
    			// $(this).addClass('.site-header');
    			$(this).children('.wrapper').children('.site-title').removeAttr("style");
    			$(this).children('.wrapper').children('.site-nav').removeAttr("style");
    			$(this).children('.wrapper').children('#mySvgWrapper').children('svg').removeAttr('style');
  		});

	
	var elm = Snap("#mySvgWrapper");
	var g = elm.select("#layer1");

	var one = g.select("#path4186");
	var two = g.select("#path4201");
	var three = g.select("#path4208");
	// console.log(one);
	// console.log(two);
 //    console.log(three);
//     $("body div:first-of-type").wrap('<div id="scotch-panel">
// </div>');

	oneBb = one.getBBox();
	twoBb = two.getBBox();
	threeBb = three.getBBox();

	//--- this is for firefox------
	var oneBb1x = oneBb.cx-170;
var oneBb1y = oneBb.cy-300;
var twoBb1x = twoBb.cx-85;
var twoBb1y = twoBb.cy-220;
var threeBb1x = threeBb.cx-75;
var threeBb1y = threeBb.cy-175;

$(window).load(function() {
	/* Act on the event */

if(matchMedia('only screen and (max-width: 480px)').matches){
     // scotchPanel.on();
     $(".profile").children('div').first().hide();
     $(".site-header").trigger("sticky_kit:detach");

       var scotchPanel = $('#panel').scotchPanel({
		    containerSelector: 'body', // As a jQuery Selector .page-content
		    direction: 'left', // Make it toggle in from the left
		    duration: 300, // Speed in ms how fast you want it to be
		    transition: 'ease', // CSS3 transition type: linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(P1x,P1y,P2x,P2y)
		    // clickSelector: '.profile', // Enables toggling when clicking elements of this class
		    distanceX: '40%', // Size fo the toggle
		    enableEscapeKey: true // Clicking Esc will close the panel
		});

	 $(".profile").click(function(event) {
			/* Act on the event */
		scotchPanel.open();
		$('#panel').children('.pro-pic').show();
		$('#panel').children('.name').show();
		$('#panel').children('.id').show();
		$('#panel').children('.biography').show();
		$('#panel').children('.share-buttons-bio').show();
		$(".profile svg").hide('400', function() {
			$(".close").css({
	      		"position":"static",
	        	"margin-left":"-80px",
	        	"margin-top":"10px",
	        }).fadeIn('1000');
		});

      
		
	});

		$(".close").click(function(event) {
			/* Act on the event */
			    event.preventDefault();
				$(this).fadeOut('400', function() {
					// $(this).hide();
					$(".close").attr('style', '');
					scotchPanel.close();
					// $(".profile").fadeIn();			
					$(".profile svg").fadeIn();
	              });
		});

}else if(!matchMedia("only screen and (max-width: 480px)").matches){

	 // scotchPanel.off();
// ,offset_top:""
	$(".profile").stick_in_parent({parent:"body",spacer:false,bottoming:false,recalc_every:1,offset_top:100})
	.on("sticky_kit:stick",function(e) {
		// $(this).css('top', '50px');
	})
	.on('sticky_kit:bottom', function(event) {
		/* Act on the event */
		// $(this).css({'position':'fixed','top': '250px !important'});
	});
//--------- click on the id cart icon--------------------------
$(".profile").click(function(event) {
	/* Act on the event */
	event.preventDefault();
	var box = $(this).children('div').first();
	 // scotchPanel.close();
   $(".profile svg").hide();
	

	//for desktop version
	if(!box.hasClass('bio')){	
	  box.addClass('bio');
	  // $elem = $(this).children('.bio');
	  if(box.hide())
	  {
	  	box.show();
	  }
		
     
				box.children('.pro-pic').velocity("transition.fadeIn",{duration:1000,delay:250});
				box.children('.name').velocity("transition.slideRightIn",{duration:1000,delay:1000});
				box.children('.id').velocity("transition.slideLeftIn",{duration:1000,delay:500});
				box.children('.biography').velocity("transition.shrinkIn",{duration:1000,delay:2000});
				box.children('.share-buttons-bio').velocity("transition.slideUpIn",{duration:2000,delay:2500,complete:function() {
					
        	$(".close").css({
        		"position":"relative",
        		// "top":"5px",
        		"left":"175px",
        		"margin-left":"0"
        	}).show('2000');

				}});
		
				
	}


	
});



$(" .close").click(function(event) {

		 // scotchPanel.close();
	
	var box1 = $(".profile").children('div').first();
	$(".profile").children("div.bio").hide();

	$(this).fadeOut('400', function() {
		box1.removeClass('bio');
		$(".profile svg").fadeIn('500');
	});


});

}// end of the responsive section 


});


setInterval(function() {
  if($(window).width() >= 480 ){
	// console.log($(".profile").children('div').first());
	// 
		// console.log(document.querySelector('div.profile').childNodes[3].style);
		 // scotchPanel.close();
		 // scotchPanel.off();
		 // $(".close").hide();
		 // $(".profile svg").show();
	}else{
		$(".profile").children('div').first().css('display', 'none');
		if ($('.scotch-panel-canvas').hasClass('scotch-is-showing') && !$(".close").is(':visible')) {
			$(".close").show();
		}
		// $(".profile svg").show();
	}
	
	$(window).scroll(function(event) {
		/* Act on the event */
		if($(this).scrollTop() == 0){
			$(".site-header").trigger('sticky_kit:unstick');
		}
	});

},200);


// let doneTheStuff3 = false;
// let doneTheStuff4= false;
let doneTheStuff2 = false;
let doneTheStuff = false;
$(window).resize(function(event) {
	/* Act on the event */
	
	if($(window).width() >= 480){
		
		if (!doneTheStuff) {
			doneTheStuff = true;
			document.location.href = document.location.href;
		}
		if ($('.scotch-panel-canvas').hasClass('scotch-is-showing')) {
			// scotchPanel.close();
		 	$(".close").hide();
		 	// if(!$(".profile svg").is(':visible')){

		 	$(".profile svg").show();
		}
		 	
		 	// }
		 	// }
		 
		 //correct start
		  $("figure.highlight .jspContainer").children('.jspHorizontalBar').remove();

		  $("figure.highlight")
				.removeClass('jspScrollable')
				.css({
							overflow: "hidden",
							padding: "0px",
							width: "740px"			
						});
				
				$(".jspContainer").css(
	    			"width", "740px"
	    		);
	    		
	    		$(".jspContainer .jsPane").css({
					padding: "0px", 
					width: "740px",
					 left: "0px"
	    		});
	   //  	correct end
	   

			 // scotchPanel.off();
		 	// $(".close").hide();
		 	// $(".profile svg").show();
	}else{
			// let doneTheStuff = false;
		if (!doneTheStuff2) {
			doneTheStuff2 = true;
			document.location.href = document.location.href;
		}		//   var scotchPanel = $('#panel').scotchPanel({
		//     containerSelector: 'body', // As a jQuery Selector .page-content
		//     direction: 'left', // Make it toggle in from the left
		//     duration: 300, // Speed in ms how fast you want it to be
		//     transition: 'ease', // CSS3 transition type: linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(P1x,P1y,P2x,P2y)
		//     // clickSelector: '.profile', // Enables toggling when clicking elements of this class
		//     distanceX: '40%', // Size fo the toggle
		//     enableEscapeKey: true // Clicking Esc will close the panel
		// });

		//big correct section  
		// $(".profile").children('div').first().css('display', 'none');
		// if($(".profile").children('div').first().hasClass('bio')){
		// 		$(".profile").children('div').first().removeClass('bio');
		// 		scotchPanel.open();
		// 	    $('#panel').children('.pro-pic').show();
		// 		$('#panel').children('.name').show();
		// 		$('#panel').children('.id').show();
		// 		$('#panel').children('.biography').show();
		// 		$('#panel').children('.share-buttons-bio').show();
		// 		$(".profile svg").hide('400', function() {
		// 			$(".close").attr('style', '');
		// 			$(".close").css({
		// 	      		"position":"static",
		// 	        	"margin-left":"-80px",
		// 	        	"margin-top":"10px",
		// 	        	"opacity":".5"
		// 	        }).fadeIn('1000');
		// 		});	

		// 		 // if(!$(".close").is(':visible')){
	 //    //    			$(".close").css({
		// 	  //     		"position":"static",
		// 	  //       	"margin-left":"-80px",
		// 	  //       	"margin-top":"10px",
		// 	  //       }).show();
	 //    //          }
		// } end of big correct section

		//correct start
		// var winwidth = $(window).width() - 50 + 'px';
		// var jspdrag = $(window).width() - 198 + 'px';
	    
	 //    		$("figure.highlight").addClass("jspScrollable")
	 //    		.css({
	 //    			overflow: "hidden", 
	 //    			padding:"0px",
	 //    			width: $(window).width() - 50
	 //    		});

	 //    		$(".jspContainer").css(
	 //    			"width", $(window).width() - 50 
	 //    		);
	 //    		$(".jspContainer .jsPane").css({
	 // 			padding: "0px", 
	 // 			width: $(window).width() - 50,
	 // 			left: "0px"
	 //    		});
	 // correct end   		
			   // <div class=\"jspDrag\" style=\"'+ $(window).width() - 198 +'\"><div class=\"jspDragLeft\"></div><div class=\"jspDragRight\"></div></div>
               // if (!$(".jspHorizontalBar").get(0)) {
		    	
			// correct start
		   	// $(".jspHorizontalBar").remove();
		   	// $(".jspContainer").append('<div class=\"jspHorizontalBar\"><div class=\"jspCap jspCapLeft\"></div><div class=\"jspTrack\" style=\"width:'+ winwidth +'\"><div class=\"jspDrag\" style=\"width:'+ jspdrag +'\"><div class=\"jspDragLeft\"></div><div class=\"jspDragRight\"></div></div></div><div class=\"jspCap jspCapRight\"></div></div>');
            // correct end


               // }
               

	    // if(!$(".close").is(':visible')){
	    //    $(".close").show();
	    // }
	    // if(!scotchPanel.on()){
	    	// $(".profile svg").show();
	    // }
	}

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //-------------------------------- this is RESPONSIVE SECTION --------------------------------------------- //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

 if(matchMedia('only screen and (max-width: 480px)').matches){
     // scotchPanel.on();
     
		// if (!doneTheStuff3) {
		// 	doneTheStuff3 = true;
		// 	document.location.href = document.location.href;
		// }	 

		//  scotchPanel = $('#panel').scotchPanel({
		//     containerSelector: 'body', // As a jQuery Selector
		//     direction: 'left', // Make it toggle in from the left
		//     duration: 300, // Speed in ms how fast you want it to be
		//     transition: 'ease', // CSS3 transition type: linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(P1x,P1y,P2x,P2y)
		//     // clickSelector: '.profile', // Enables toggling when clicking elements of this class
		//     distanceX: '40%', // Size fo the toggle
		//     enableEscapeKey: true // Clicking Esc will close the panel
		// });

	$(".profile").click(function(event) {
			/* Act on the event */
		scotchPanel.open();
		$('#panel').children('.pro-pic').show();
		$('#panel').children('.name').show();
		$('#panel').children('.id').show();
		$('#panel').children('.biography').show();
		$('#panel').children('.share-buttons-bio').show();
		$(".profile svg").hide('400', function() {
			$(".close").attr('style', '');
			$(".close").css({
	      		"position":"static",
	        	"margin-left":"-80px",
	        	"margin-top":"10px",
	        	"opacity":".5"
	        }).fadeIn('1000');
		});

      // $(".close").css({
      //   	marginTop: '10px',
      //   	marginLeft:'-65px'
      //   });
		
	});

       // $(".profile svg").css({
       // 	marginLeft: '-25px',
       // 	property2: '-10px'
       // });

		$(".close").click(function(event) {
			/* Act on the event */
			    event.preventDefault();
				$(this).fadeOut('400', function() {
					// $(this).hide();
					$(".close").attr('style', '');
					scotchPanel.close();
					// $(".profile").fadeIn();			
					$(".profile svg").fadeIn();
	              });
		});


		// $(".close").attr('style', '');

}else if(!matchMedia("only screen and (max-width: 480px)").matches){

	 // scotchPanel.off();
	 	// let doneTheStuff = false;
		// if (!doneTheStuff4) {
		// 	doneTheStuff4 = true;
		// 	document.location.href = document.location.href;
		// }
			 // $(".profile svg").attr('style', '');
	 // $("#panel").remove();
//--------- click on the id cart icon--------------------------
$(".profile").click(function(event) {
	/* Act on the event */
	event.preventDefault();
	var box = $(this).children('div').first();
	 // scotchPanel.close();
   $(".profile svg").hide();
	// if(jPM.getMenu())
       // {
       	  // console.log(jPM.getMenu());
       	  // jPM.menu.remove();
       		// $("#jPanelMenu-menu").remove();
       // }
	//left pannel 
	
  // smartphone/iphone... maybe run some small-screen related dom scripting?

       
       // $(".profile svg").wrap('<a href="#menu" class="menu-link"></a>');
        // $(".profile .close").wrap('<a href="#menu2" class="menu-link2"></a>');
  //        scotchPanel = $('#panel').scotchPanel({
		//     containerSelector: 'body', // As a jQuery Selector
		//     direction: 'left', // Make it toggle in from the left
		//     duration: 300, // Speed in ms how fast you want it to be
		//     transition: 'ease', // CSS3 transition type: linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(P1x,P1y,P2x,P2y)
		//     clickSelector: '.profile', // Enables toggling when clicking elements of this class
		//     distanceX: '70%', // Size fo the toggle
		//     enableEscapeKey: true // Clicking Esc will close the panel
		// });
		
//rwd mode
      //  scotchPanel.open();

       // {
   // 	 menu: box,
   // 	 trigger: '.profile svg'
			// }
       // box.addClass('bio');
       // jPM.menu = box;
      
       //	jPM.on();
        // }
      // jPM.trigger(true);
 

///what should happen in rwd mode
  //       $('#panel').children('.pro-pic').show();
		// $('#panel').children('.name').show();
		// $('#panel').children('.id').show();
		// $('#panel').children('.biography').show();
  //     $(".close").css({
  //       	marginTop: '20px',
  //       	marginLeft:'-15px'
  //       });
      

	// box.attr({
	// 	class: '',
	// 	id: ''
	// });
    // if(scotchPanel){
    // 		scotchPanel.remove();
    // }
    // scotchPanel.close();
 // if(!matchMedia('only screen and (max-width: 480px)').matches)
	// jPM.remove();
    // box1= $(this).children('div').first();
	// if(box.attr("id")){
		// box.removeAttr('id');
        
        // hide and show of biocart
        // $(".profile svg").hide('200', function() {
        // 	$(".close").show('4000');

        // });
		

		// if(jPM.on){		
		// }
		// bigSlide.close();


	//for desktop version
	if(!box.hasClass('bio')){	
	  box.addClass('bio');
	  // $elem = $(this).children('.bio');
	  if(box.hide())
	  {
	  	box.show();
	  }
			// $elem.append('');
			// $elem.append('<img class="pro-pic" src="images/arashtext.jpg" />')
			// $elem.append('<h4 class="name">آرش اورنگ پور</h4>');
			// $elem.append('<span class="id">طراح وب و تجربه كاربري</span>');
			// $elem.append('<p class="biography"></p>');
   //          $elem.children('.biography').text("شخصي هستم دوست دار تجربه كاربري و علاقه مند به طراحي رابط كاربري");
      // $elem.load("file://C:/Users/Dell/ooarashoo/bio.html",function(response,status,xhr){
      //  	   if(status == "error")
      //  	   {
      //  	   	console.log(xhr.status+" "+xhr.statusText);
      //  	   }
      //  	   $(this).append(response);
      //  	   console.log(response);
      //  	   console.log("file complete");
      //  });
			// $elem.append('<div>{% include bio.html %}</div>');
     
				box.children('.pro-pic').velocity("transition.fadeIn",{duration:1000,delay:250});
				box.children('.name').velocity("transition.slideRightIn",{duration:1000,delay:1000});
				box.children('.id').velocity("transition.slideLeftIn",{duration:1000,delay:500});
				box.children('.biography').velocity("transition.shrinkIn",{duration:1000,delay:2000});
				box.children('.share-buttons-bio').velocity("transition.slideUpIn",{duration:2000,delay:2500,complete:function() {
					
        	$(".close").css({
        		"position":"relative",
        		// "top":"5px",
        		"left":"175px",
        		"margin-left":"0",
        		"opacity":".5"
        	}).show('500');

				}});
				// $(".close").css('marginTop', '-400px');
				// $(".close").css({
    //     				marginTop: '-380'
    //             });
					// $(".close").attr('style', '');
				
	}

// } else if rwd

		// $(".close svg").fadeIn(1000);
	
});



$(".close").click(function(event) {

		 // scotchPanel.close();
	/* Act on the event */
	// event.preventDefault();
	//rwd mode
	// if(matchMedia('only screen and (max-width: 480px)').matches){
        // scotchPanel.remove();
  //       $('#panel').children('.pro-pic').hide();
		// $('#panel').children('.name').hide();
		// $('#panel').children('.id').hide();
		// $('#panel').children('.biography').hide();
	// rwd mode
		// if ($('.scotch-panel-canvas').hasClass('scotch-is-showing')) {
				
		// 		console.log("oops");
		// 		$("#panel").velocity("transition.slideLeftOut",{duration:1000,delay:1000});
		// 		scotchPanel.remove();
		// 		// scotchPanel.close();
		// }
		// $(this).fadeOut('400', function() {
		// 	$(".profile svg").fadeIn();
		// });
	// rwd mode
	// }else{
	var box1 = $(".profile").children('div').first();
	$(".profile").children("div.bio").hide();
	// $(".close").hide();
	$(this).fadeOut('400', function() {
		box1.removeClass('bio');
		$(".profile svg").fadeIn('500');
	});
  // } rwd mode

});

}// end of the responsive section 


  });


s.mouseover(function(event) {
	// console.log("mouse over");

	event.preventDefault();
	/* Act on the event */
	//console.log(one.attr("id")+" "+two.attr("id")+" "+three.attr("id"));
	// one.animate({border-spacing:0},{
	// step:function(now,fx){
	// 	$(this).css('transform','rotate('+now+'deg)');
	// },
	// 	duration:1000
	// });
	// two.animate({border-spacing:0},{
	// 	step:function(now,fx){
	// 	$(this).css('transform','rotate('+(-now)+'deg)');	
	// },
	// 	duration:2000
	// 	});
	// three.animate({border-spacing:0},{
	// 	step:function(now,fx){
	// 	$(this).css('transform','rotate('+now+'deg)');
	// },
	// 	duration:3000
	//   });
 		
	//--------------------------------wrong answer---------------------------------------------------
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

if($.browser.webkit){	
	// console.log("webkit browser");
			//  here is snapsvg animation
 		one.animate({ transform:"r360,"+ oneBb.cx +","+ oneBb.cy+"s1.02,1.02,"+oneBb1x+","+oneBb1y,strokeWidth:7},
 			2000);
 		two.animate({ transform:"r-360,"+ twoBb.cx +","+ twoBb.cy+"s1.02,1.02,"+oneBb1x+","+oneBb1y,strokeWidth:7},
 			2000);
 		three.animate({ transform:"r360,"+ threeBb.cx +","+ threeBb.cy+"s1.02,1.02,"+oneBb1x+","+oneBb1y,strokeWidth:7},
 			2000);
 		         // end snap svg animation
// 	one.velocity({
// 		// rotateX:"20deg",
// 		rotateZ:"360deg",
// 		strokeWidth:3
// 	},{
// 		easing :"ease-out",
// 		duration:1000
// 	}).velocity("reverse",{ 
// 		delay: 500
// 		//duration:1000 ,
// 		//loop:false
// 	});

// 	two.velocity({
			
// 			 rotateZ: "-360deg",
// 			strokeWidth:5
// 	},{
// 	    duration:1500,
// 		easing :"ease-out"

// 	}).velocity("reverse",{ 
// 	delay: 1000
// 	//duration:1000
// 		//loop:false 
// 	});

// 	three.velocity({
// 		rotateZ:"360deg",
// 		strokeWidth:8
// 	},{
// 		duration:2000,
// 		easing :"ease-out" 
// 		//loop:false
// 		// delay:1000
// 	}).velocity("reverse",{
// 		delay: 1500
// 	//	duration:1000,
// 		//loop:false
// 	});
// -------------------------------------------------end of wrong answer--------------------------------------
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
}else if($.browser.mozilla){
    console.log("firefox browser");
//   event.preventDefault();
//   
//   // svg charactaristics for firefox :-----------------------------
	// transform-origin: 75px 185px !important => #svg2 #layer1 .three
	//  transform-origin: 65px 235px 0 !important => #svg2 #layer1 .two
	//  transform-origin: 150px 305px 0 !important => #svg2 #layer1 .one
    
    // var paths = $("#svg2 g#layer1").children('path');
	// console.log(paths);
	// console.log($("path#path4186"));
	// paths[0].style.transformOrigin='150px 305px 0 !important';
	$("path#path4186").css('transformOrigin', '150px 305px 0 !important');
	$("path#path4201").css('transformOrigin', '65px 235px 0 !important');
	$("path#path4208").css('transformOrigin', '150px 305px 0 !important');
	// paths[1].css('transformOrigin', '65px 235px 0 !important');
	// paths[2].css('transformOrigin', '75px 185px !important');
	
	// paths[0].style.transformOrigin = "150px 305px 0 !important";
	// one

    one.animate({ transform:"r360,"+ oneBb1x +","+ oneBb1y+"s1.02,1.02,"+oneBb1x+","+oneBb1y,strokeWidth:7},
 			2000);
 	two.animate({ transform:"r-360,"+ twoBb1x +","+ twoBb1y+"s1.02,1.02,"+twoBb1x+","+twoBb1y,strokeWidth:7},
 			2000);
 	three.animate({ transform:"r360,"+ threeBb1x +","+ threeBb1y+"s1.02,1.02,"+threeBb1x+","+threeBb1y,strokeWidth:7},
 			2000);
// //  start of the fallback or polyfill
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//     var animatee1 = document.createElementNS("http://www.w3.org/2000/svg","animateTransform");
//      var animatee2= document.createElementNS("http://www.w3.org/2000/svg","animateTransform");
//       var animatee3 = document.createElementNS("http://www.w3.org/2000/svg","animateTransform");
//       // console.log(one.getBBox());
//     var bb = $(one).offset();
//     var width = $(one).width();
//     var  height = $(one).height();
//     var cx = bb.left + width/2;
//     cx = Math.round(cx);
//     var cy = bb.top + height/2;
//     cy = Math.round(cy);
    //console.log(cx+","+cy);

// animatee1.setAttributeNS(null,'id','num1');
// animatee1.setAttributeNS(null,'begin','1s');
// animatee1.setAttributeNS(null,'attributeName','transform');
// animatee1.setAttributeNS(null,'attributeType','xml');
// animatee1.setAttributeNS(null,'type','rotate');
// animatee1.setAttributeNS(null,'dur','4000ms');
// animatee1.setAttributeNS(null,'repeatCount','1');
// animatee1.setAttributeNS(null,'from','0');
// animatee1.setAttributeNS(null,'to','360');
// animatee1.setAttributeNS(null,'values','0'+''+cx+''+cy+';'+'360'+''+cx+''+cy);


   // bb = $(two).offset();
   // width = $(two).width();
   // height = $(two).height();

// animatee2.setAttributeNS(null,'id','num2');
// animatee2.setAttributeNS(null,'begin','1s');
// animatee2.setAttributeNS(null,'attributeName','transform');
// animatee2.setAttributeNS(null,'attributeType','xml');
// animatee2.setAttributeNS(null,'type','rotate');
// animatee2.setAttributeNS(null,'dur','4000ms');
// animatee2.setAttributeNS(null,'repeatCount','1');
// animatee2.setAttributeNS(null,'from','0');
// animatee2.setAttributeNS(null,'to','360');
// animatee1.setAttributeNS(null,'values','0'+''+cx+''+cy+';'+'360'+''+cx+''+cy);


  // bb= $(three).offset();
  // width = $(three).width();
  // height = $(three).height();

// animatee3.setAttributeNS(null,'id','num3');
// animatee3.setAttributeNS(null,'begin','1s');
// animatee3.setAttributeNS(null,'attributeName','transform');
// animatee3.setAttributeNS(null,'attributeType','xml');
// animatee3.setAttributeNS(null,'type','rotate');
// animatee3.setAttributeNS(null,'dur','4000ms');
// animatee3.setAttributeNS(null,'repeatCount','1');
// animatee3.setAttributeNS(null,'from','0');
// animatee3.setAttributeNS(null,'to','360');
// animatee1.setAttributeNS(null,'values','0'+''+cx+''+cy+';'+'360'+''+cx+''+cy);



  //   s.find("#layer1").children('.one').append(animatee1);
  //   s.find("#layer1").children('.two').append(animatee2);
  //   s.find("#layer1").children('.three').append(animatee3);
  // animatee1.beginElement();
  //  animatee2.beginElement();
  //  animatee3.beginElement();
// ------------------------------------------------------


}	
            });
s.mouseout(function() {
	/* Act on the event */
	if($.browser.webkit){
	one.animate({ transform:"r0,"+ oneBb.cx +","+ oneBb.cy,strokeWidth:2},
 			2000);
 		two.animate({ transform:"r0,"+ twoBb.cx +","+ twoBb.cy,strokeWidth:2},
 			2000);
 		three.animate({ transform:"r0,"+ threeBb.cx +","+ threeBb.cy,strokeWidth:2},
 			2000);
 	}else if ($.browser.mozilla){
 		  one.animate({ transform:"r0,"+ oneBb1x +","+ oneBb1y,strokeWidth:2},
 			2000);
 		two.animate({ transform:"r0,"+ twoBb1x +","+ twoBb1y,strokeWidth:2},
 			2000);
 		three.animate({ transform:"r0,"+ threeBb1x +","+ threeBb1y,strokeWidth:2},
 			2000);
 	}
	//--------------------------------wrong answer---------------------------------------------------
// event.preventDefault();
// 		s.find("#layer1").children('.one').children("#num1").delay(5000).remove();
// 		s.find("#layer1").children('.two').children("#num2").delay(5000).remove();
// 		s.find("#layer1").children('.three').children("#num3").delay(5000).remove();

});


//---------------------scroll highjacking----------------------------------------


// $(window).scroll(function(event) {
// 	// console.log("scroll top :"+$(this).scrollTop());
// 	event.preventDefault();
// 		// console.log("page content :"+$(".site-header").height()+$(".page-content").height());
// 		// console.log("scroll:"+$(this).scrollTop());	
// 		var scrollFromTop = $(this).scrollTop();
// 		var heightOfPage = $(".site-header").height() + $(".page-content").height();
// 		var height = $(".profile svg").outerHeight() + 20;		
// 	/* Act on the event */	
// 	//< $(".site-header").height() + $(".page-content").height()
// 	if(scrollFromTop > 100 && scrollFromTop < heightOfPage){
// 		 // $(".page-content .profile").attr('style','');
// 		 // console.log("happend :"+$(".page-content .profile").marginTop+"page content:"+$(".site-header").height()+$(".page-content").height());
        
//   		// $(".page-content .profile").attr('style', '');
// 							  // 		$(".page-content .profile").css({
// 									// 	position: 'fixed',
// 									// 	top: '165px',
// 									// 	left: '50px'
// 									// });
//        // if()
//        	// $(".page-content .profile ").attr('style','');
// 		$(".page-content .profile").css({
// 			position: 'fixed',
// 			top: '165px'
// 		});

// 		// .css(
// 		// 	'position': 'fixed'
// 		// 	// top: '165px'
// 		// );
// 	}
// 	// else{

// 		 // $(".page-content .profile").attr('style', '');
//   	// 	 $(".page-content .profile").css({
//   	// 	 	position: 'absolute',
//   	// 	 	top: '20px'
//   	// 	 });
// 	// }
// 	// if($(this).scrollTop() + height > $(".site-header").height() + $(".page-content").height())
// 	// {
// 		// $(".page-content .profile").css({
// 		// 	position: 'absolute',
// 		// 	top: '20px'
// 		// 	// left:'45px'
// 		// });
//          // $(".page-content .profile").addClass('AbsoluteIdcart');
//      //     $(".page-content .profile").attr('style', '');
//   		 // $(".page-content .profile").css({
//   		 // 	position: 'absolute',
//   		 // 	top: '20px'
//   		 // });
// 	// }
// 	if(scrollFromTop >= heightOfPage)
// 	{
// 		// console.log("something happend:" + scrollFromTop);
// 		// $(".page-content .profile ").attr('style', '');
// 		// $(".page-content .profile svg").attr('style', '');
// 	// 	 $(".page-content .profile").attr('style','');
// 		         $(".page-content .profile").css({
// 		         	position: 'absolute',
// 		         	top: '20px'
// 		         });
// 		 //        // $(".page-content .profile").removeClass('AbsoluteIdcart');
// 	}
// 	// if($(this).scrollTop() > 150 ){
// 	// 	$(".site-header").css({
// 	// 		position:'fixed',
// 	// 		width: '100%',
// 	// 		top: 0,
// 	// 		// left:'50px',
// 	// 		height:'80px'
// 	// 	});
// 	// }
// 	// if($(this).scrollTop() <= 150 ){
// 	// 	$(".site-header").css({
// 	// 		position:'relative',
// 	// 		// width: '100%',
// 	// 		// top: 0,
// 	// 		// left:'50px',
// 	// 		height:'100px'
// 	// 	});
// 	// }
// });

// if(window.location.href == "%http://localhost:4000/jekyll/update%"){
// 	console.log("log for index pages");
// 	$(".profile").children('.bio').css({
// 		marginTop: '-150px',
// 		marginLeft: '50px'
// 	});
// }
//----------------------------------------------------------------------///////

	




//-------------------------  mailchimp form -----------------------------
   $(".newsletter .mailchimp0").formchimp({
   		// 'appendElement' : '.mce-responses',//where the new element, containing the messages from Mailchimp will be appended to.
		'buttonText' : 'متشكر',//message after success subscription
		'errorMessage' : "ايميل خود را وارد كنيد",
		'responseClass' : "mce-response",//: Declare custom element in page for error output.
		'successMessage' : "از اشتراك شما در بلاگ خيلي خرسند شديم اميدوارم كه بتونم خبراي خوبي براتون تهيه كنيم",
		//'url': actionUrl,

   });
//-------------------------  end ----------------------------


//-------------------------  jScrollPane plugin -----------------------------
   $(".highlight").jScrollPane({	
        shadowArrows:false
		// theme:"dark",
		// autoExpandScrollbar: true,
		// mouseWheel:{ enable: true }
   });
//-------------------------  end ----------------------------

//-------------------------  lazy-loading section ----------------------------
 
// progressively.init({
// 	delay:50,
// 	throttle:300,
// 	imgload: function(elem) {
//     console.log(elem);
//   },
//     afterload: function() {
//     console.log('All images have finished loading!');
//   }
// });

 // $(".lazy").lazy({
	// effect:'fadein',
	// // threshold:'200',
	// effectTime:2500,
	// delay:10000,
	// afterLoad:function(element,response) {
	// 	// body...
	// 	// element.css({
	// 	// 	opacity: '1',
	// 	// 	filter: 'none'
	// 	// });
	// 	// element.style.filter = "none";
	// 	console.log(element);
	// 	// element.addClass("lazy-loaded");
	// 	element.classList.add('lazy-loaded');
	// 	// element.style.opacity = "100%";
	// 	response(true);
	// },
	// onError:function(err,response){
	// 	console.log(err);
	// 	// response(false);
	// }
	// // onLoad:function(element,res) {
	// //   console.log(element);
	// //   res(true);	
	// // }
 // });

 // $(".lazy").load(function(e) {
 // 	/* Act on the event */
 // 	$(this).css({
 // 		"opacity": "1",
 // 		"blur":"0"
 // 	});
 // });


//-------------------------  end ----------------------------

});
