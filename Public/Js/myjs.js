$(document).ready(function() {
	$('#fullpage').fullpage({
				sectionsColor: ['#1bbc9b', '#4BBFC3', '#C63D0F', '#7BAABE', '#1BBC9B','#ccddff'],
				anchors: ['firstPage', 'secondPage', '3rdPage','4thPage', 'lastPage'],
				menu: '#menu',
				navigation: false,
				scrollingSpeed: 700,
	});
	$('#group').hover(function(){
		$(this).find('.design h1').animate({
			left:'150px',
			top:'150px',
			fontSize:'10em',
		},"slow");
		$('.design p').animate({
			left:'500px',
			top:'300px',
			fontSize:'4em',
		},"slow");
		
		// $(this).find('.android h1').animate({
		// 	right:'150px',
		// 	top:'500px',
		// 	fontSize:'10em',
		// },"slow")
	});
});
	// $('#work').fullpage({
	// 	anchors: ['bozhi', 'e-tips', 'k'],
	// 	Color: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
	// 	navigation:true,
	// 	navigationPosition:'right',
	// 	navigationTooltips: ['bozhi', 'e-tips', 'k'],
	// 	responsive: 900,
	// })();
