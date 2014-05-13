var entries = ["bookings","sales","users","donations","audience","subscribers"];
var entrypos = 0;
var stringpos = 0;

function loop(string, callback){
	if(stringpos == string.length){
		callback();
		return;
	} else {
		$(".subject").html($(".subject").html() + string[stringpos]);
		stringpos += 1;
	}

	setTimeout(function(){
		loop(string, callback);
	}, 80);
}

function cycle(instantly){
	if(instantly){
		$(".graphcaption").html(entries[entrypos]);
		loop(entries[entrypos], function(){
			cycle();
		});
	} else {
		stringpos = 0;
		entrypos += 1;
		if(entrypos == entries.length){entrypos = 0;}
		
		setTimeout(function(){
			$(".subject").html("");
			$(".graphcaption").html(entries[entrypos]);
			loop(entries[entrypos], function(){
				cycle();
			});
		}, 2000);
	}
}

// cycle(true);

function animation(){
	var obj = $(".mac .window");
	var scrollheight = obj[0].scrollHeight;
	var midway = scrollheight/2;

	$(".cnvrt").fadeIn(400, function(){
		$(".cnvrt").addClass("pulsate");
		obj.animate({scrollTop: scrollheight,opacity:0.2}, 1400, function(){
			obj.find("button").addClass("pulsate");
			setTimeout(function(){
				obj.animate({scrollTop:0,opacity:1},700);

				$(".mouse").fadeIn(200).animate({top:275,left:520},1400, function(){
					setTimeout(function(){
						obj.find("button").removeClass("pulsate").addClass("active");
						setTimeout(function(){
							obj.find("button").removeClass("active");
							$(".mouse").fadeOut(1000, function(){
								$(".mouse").css({
									"top":"",
									"left":"",
								});
								setTimeout(animation, 1000);
							});
							$(".cnvrt").fadeOut(1000).removeClass("pulsate");
						},1000);
					}, 1600);
				});
			}, 4000);
		});
	});
}

// setTimeout(animation, 1000);