$(document).ready(function() {
	$('#fullpage').fullpage({
				sectionsColor: ['#1bbc9b', '#4BBFC3', '#C63D0F', '#7BAABE', '#1BBC9B', '#C63D0F','#ccddff'],
				anchors: ['firstPage', 'secondPage', '3rdPage','4thPage', '5thPage'],
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
					$('#lightBox').each(function(){
							$(this).addClass('lightBoxPrev');
						})
					
				},
				afterLoad:function(anchorLink, index){
					if(index==3){
						$('.inner').eq(index - 3).find('a').each(function(){
							var $rel = $(this).attr('rel');
							var $arr = $rel.split(',');
						$(this).animate({
							left: $arr[2] + 'px',
							top: $arr[3] + 'px'
							}, 500);
						});
					}
					if(index==4){
						$('#lightBox').eq(index-4).each(function(){
							$(this).removeClass('lightBoxPrev').removeClass('lightBoxLeave').addClass('lightBoxLast');
							$(this).find('div').animate({
								top:'80px',
								opacity:'1',
							},1500);
						})
					}
				},
				onLeave:function(index, direction){
					if(index==3){
						$('.inner').eq(index - 3).find('a').each(function(){
							var $rel = $(this).attr('rel');
							var $arr = $rel.split(',');
						$(this).animate({
							left: $arr[0] + 'px',
							top: $arr[1] + 'px'
							}, 500);
						});
					}
					if(index==4){
						$('#lightBox').eq(index-4).each(function(){
							$(this).removeClass('lightBoxLast').addClass('lightBoxLeave');
							$(this).find('div').animate({
								top:'-250px',
								opacity:'0.15',
							},500);
												
						})
					}
				}
	});
	
	$('#group').hover(function(){
		$(this).find('.design h1').animate({
			left:'150px',
			top:'150px',
			fontSize:'5em',
		},"slow",function(){
		$('.design p').animate({
			left:'550px',
			top:'500px',
			fontSize:'1.5em',
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
$(function(){
            $('#slides').slides({
                preload: true,
                preloadImage: 'Public/img/playbox/loading.gif',
                play: 5000,
                pause: 2500,
                hoverPause: true,
                animationStart: function(){
                    $('.caption').animate({
                        bottom:-35,
                    },100);
                },
                animationComplete: function(current){
                    $('.caption').animate({
                        bottom:0
                    },200);
                    if (window.console && console.log) {
                        // example return of current slide number
                        console.log(current);
                    };
                }
            });
        });
/*图片长廊*/
$(document).ready(function () {
    $(".item").click(function (e) {
        e.stopPropagation();
        $(".item").removeClass("clicked");
        $(this).toggleClass("clicked");
        $("body").addClass("showing-item");
 
        var offset = $(this).offset();
        var pos = offset.left + $(this).width()
        var center = $(".gallery").width() / 2;
        if (pos > center) {
            var align = "left";
        } else {
            var align = "right";
        }
        $(this).removeClass(".left, .right").addClass(align);
 
        return false;
    });
 
    $('html').click(function () {
        $(".item").removeClass("clicked");
        $("body").removeClass("showing-item");
    });
});