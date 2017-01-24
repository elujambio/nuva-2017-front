/*
*		   	
*
*	 
*		 NUVA.ROCKS WEBSITE
*
*
*
*/

function introEffects(){

	shapes_timeline = new TimelineMax({repeat: -1}); 
	shapes_color_timeline = new TimelineMax({repeat: -1}); 
	introSpan1 = document.querySelectorAll(".big-as-fuck-text span:nth-of-type(1)");
	introSpan2 = document.querySelectorAll(".big-as-fuck-text span:nth-of-type(2)");

	rocksTimeline = new TimelineMax({repeat: -1});

	blob_1 = MorphSVGPlugin.convertToPath("#blob_1");
	blob_2 = MorphSVGPlugin.convertToPath("#blob_2");
	blob_3 = MorphSVGPlugin.convertToPath("#blob_3");
	blob_4 = MorphSVGPlugin.convertToPath("#blob_4");
	blob_5 = MorphSVGPlugin.convertToPath("#blob_5");
	blob_6 = MorphSVGPlugin.convertToPath("#blob_6");

	shapes_timeline
		.to(blob_1, 2.5, { ease: Back.easeInOut.config(1.7), morphSVG: { shape: blob_2 } })
		.to(blob_1, 2.5, { ease: Back.easeInOut.config(1.7), morphSVG: { shape: blob_3 } })
		.to(blob_1, 2.5, { ease: Back.easeInOut.config(1.7), morphSVG: { shape: blob_4 } })
		.to(blob_1, 2.5, { ease: Back.easeInOut.config(1.7), morphSVG: { shape: blob_5 } })
		.to(blob_1, 2.5, { ease: Back.easeInOut.config(1.7), morphSVG: { shape: blob_6 } })
		.to(blob_1, 2.5, { ease: Back.easeInOut.config(1.7), morphSVG: { shape: blob_1 } });
	shapes_timeline.play();

	shapes_color_timeline
		.to("#blob_stop_1", 1.61, { stopColor: '#FF6CEC' }, 1.61)
		.to("#blob_stop_1", 1.61, { stopColor: '#00BFA5' }, 3.22)
		.to("#blob_stop_1", 1.61, { stopColor: '#FFDA11' }, 4.83)
		.to("#blob_stop_1", 1.61, { stopColor: '#FF3737' }, 6.44)
		.to("#blob_stop_1", 1.61, { stopColor: '#FF3434' }, 8.05)
		.to("#blob_stop_1", 1.61, { stopColor: '#D500F9' }, 9.66)

		.to("#blob_stop_2", 1.61, { stopColor: '#0074E4' }, 1.61)
		.to("#blob_stop_2", 1.61, { stopColor: '#AEEA00' }, 3.22)
		.to("#blob_stop_2", 1.61, { stopColor: '#FF5414' }, 4.83)
		.to("#blob_stop_2", 1.61, { stopColor: '#FF8502' }, 6.44)
		.to("#blob_stop_2", 1.61, { stopColor: '#FF1145' }, 8.05)
		.to("#blob_stop_2", 1.61, { stopColor: '#FF9100' }, 8.05)
		
		.play();

	rocksTimeline
		.add(TweenMax.to(introSpan1, .5, {delay: .5, text: {value: "makes"}}))
		.add(TweenMax.to(introSpan2, .5, { text: {value: "art"}}), "-=.3")

		.add(TweenMax.to(introSpan1, .5, {delay: .5, text: {value: "crafts"}}))
		.add(TweenMax.to(introSpan2, .5, { text: {value: "tech"}}), "-=.3")

		.add(TweenMax.to(introSpan1, .5, {delay: .5, text: {value: "builds"}}))
		.add(TweenMax.to(introSpan2, .5, { text: {value: "brands"}}), "-=.3")

		.add(TweenMax.to(introSpan1, .5, {delay: .5, text: {value: "creates"}}))
		.add(TweenMax.to(introSpan2, .5, { text: {value: "products"}}), "-=.3")

		.add(TweenMax.to(introSpan1, .5, {delay: .5, text: {value: "develops"}}))
		.add(TweenMax.to(introSpan2, .5, { text: {value: "software"}}), "-=.3")

		.add(TweenMax.to(introSpan1, .5, {delay: .5, text: {value: "rocks"}}))
		.add(TweenMax.to(introSpan2, .5, { text: {value: "^"}}), "-=.3")

		.add(TweenMax.to(introSpan1, .5, {delay: 3, text: {value: "makes"}}))
		.add(TweenMax.to(introSpan2, .5, {delay: 3, text: {value: "art"}}), "-=3")

	var cx, 
		cy,
		dx, 
		dy, 
		tiltx, 
		tilty, 
		radius, 
		degree;
    $('body').on("mousemove", function(event) {

        cx = Math.ceil($('body').width() / 2.0);
        cy = Math.ceil($('body').height() / 2.0);
        dx = event.pageX - cx;
        
        if (event.pageY <= $('body').height())
        	dy = event.pageY - cy;

        tiltx = (dy / cy);
        tilty = - (dx / cx);
        radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
        degree = (radius * 35);
        TweenMax.set(".intro", {transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)'});
   });

}

function caseShowcase() {
	var case_tl = new TimelineMax(); 
	var kase = document.querySelectorAll(".case");

	var sc_image_width = 550; 
	var description = new SplitText(".case .description", { type: "words"});
	case_tl
		.fromTo(
			".image__clip", 
			1, 
			{
				maxWidth:  0, 
				maxHeight:  0, 
				x:  200,
				y:  200	
			}, 
			{
				maxWidth:  sc_image_width, 
				maxHeight:  sc_image_width, 
				x:  0, 
				y:  0,
				ease: Back.easeOut
			})
		.fromTo(
			".name__clip",
			1, 
			{
				color:  "#ff3737",
				maxWidth:  0, 
				y:  -200
			}, 
			{
				maxWidth:  $(".name__clip h1").css("width"),
				color:  "#ff8e13",
				y:  0,
				ease:  Sine.easeInOut
			},
			"-=1"
			)
		.add(
			TweenMax.staggerFromTo(
			description.words, 
			.6, 
			{
				x: 12,
				opacity:  0, 
				color:  "#777777"
			}, 
			{
				x:  0, 
				opacity:  1, 
				color:  "#424242",
				ease:  Power2.easeOut	
			},
			.005
			)) 
			; 
}
$(document).ready(function() {
	introEffects();
});

