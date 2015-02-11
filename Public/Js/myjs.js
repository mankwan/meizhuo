$(document).ready(function() {
	$('#fullpage').fullpage({
				sectionsColor: ['#1bbc9b', '#4BBFC3', '#C63D0F', '#7BAABE', '#1BBC9B','#ccddff'],
				anchors: ['firstPage', 'secondPage', '3rdPage','4thPage', 'lastPage'],
				menu: '#menu',
				navigation: false,
				scrollingSpeed: 700,
				afterRender: function(){
					$('.inner a').each(function(){
						var $rel = $(this).attr('rel');
						var $arr = $rel.split(',');
						$(this).animate({
							left: $arr[0] + 'px',
							top: $arr[1] + 'px'
						}, 500);
					});
				},
				afterLoad:function(anchorLink, index){
					$('.inner').eq(index - 3).find('a').each(function(){
					var $rel = $(this).attr('rel');
					var $arr = $rel.split(',');
					$(this).animate({
						left: $arr[2] + 'px',
						top: $arr[3] + 'px'
					}, 500);
					});
				},
				onLeave:function(index, direction){
					$('.inner').eq(index - 3).find('a').each(function(){
					var $rel = $(this).attr('rel');
					var $arr = $rel.split(',');
					$(this).animate({
						left: $arr[0] + 'px',
						top: $arr[1] + 'px'
					}, 500);
					});
				}

	});
	$('#group').hover(function(){
		$(this).find('.design h1').animate({
			left:'150px',
			top:'150px',
			fontSize:'10em',
		},"slow",function(){
		$('.design p').animate({
			left:'500px',
			top:'300px',
			fontSize:'2em',
		},"slow");
		});
	});	
	$('.android').hover(function(){
		$(this).find('h1').animate({
			top:'-20px',
			left:'800px',
			fontSize:'6em'
		},800,'swing',function(){
			$(this).parent().find('p').show().animate({
				top:'30px',
				left:'700px',
				fontSize:'1.5em'
			},800,'swing');
		});
	});
	$('.web').hover(function(){
		$(this).find('h1').animate({
			top:'150px',
			left:'70px',
			fontSize:'6em'
		},800,'swing',function (){
			$('.webImg').find('img').first().show(1000).animate({
			left:'700px',
		},'slow',function(){
			$(this).next().show().animate({
				left:'120px',
			},1000,function(){
				$(this).next().show().animate({
					left:'500px',
				},1000);
			});
		});
		});
		$(this).find('p').animate({
				top:'200px',
				left:'120px',
				fontSize:'1.5em'
		},900,'swing');
		
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
