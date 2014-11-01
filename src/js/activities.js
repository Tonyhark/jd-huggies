
(function(){
	var $imgTextMod = $('#img-text-mod')
	,	$imgTextCon = $('#img-txt-container')
	,	$bg = $('#bg');

	var state=true;
	var $imgs=$('#img-text-mod img');

	detailData = {
		'1': [
			'img/NB/1.jpg',
			'img/NB/2.jpg',
			'img/NB/3.jpg',
			'img/NB/4.jpg',
			'img/NB/5.jpg'
		],
		'2': [
			'img/s/1.jpg',
			'img/s/2.jpg',
			'img/s/3.jpg',
			'img/s/4.jpg',
			'img/s/5.jpg'
		],
		'3': [
			'img/Super_thick/1.jpg',
			'img/Super_thick/2.jpg',
			'img/Super_thick/3.jpg',
			'img/Super_thick/4.jpg',
			'img/Super_thick/5.jpg'
		],
		'4': [
			'img/gold129/1.jpg',
			'img/gold129/2.jpg',
			'img/gold129/3.jpg',
			'img/gold129/4.jpg',
			'img/gold129/5.jpg'
		],
		'5': [
			'img/XL_boy/1.jpg',
			'img/XL_boy/2.jpg',
			'img/XL_boy/3.jpg',
			'img/XL_boy/4.jpg',
			'img/XL_boy/5.jpg'
		],
		'6': [
			'img/Super_thick/1.jpg',
			'img/Super_thick/2.jpg',
			'img/Super_thick/3.jpg',
			'img/Super_thick/4.jpg',
			'img/Super_thick/5.jpg'
		],
		'7': [
			'img/L128/1.jpg',
			'img/L128/2.jpg',
			'img/L128/3.jpg',
			'img/L128/4.jpg',
			'img/L128/5.jpg'
		],
		'8': [
			'img/XL104/1.jpg',
			'img/XL104/2.jpg',
			'img/XL104/3.jpg',
			'img/XL104/4.jpg',
			'img/XL104/5.jpg'
		],
		'9': [
			'img/Super_thick/1.jpg',
			'img/Super_thick/2.jpg',
			'img/Super_thick/3.jpg',
			'img/Super_thick/4.jpg',
			'img/Super_thick/5.jpg'
		]
		,
		'10': [
			'img/XL_g/1.jpg',
			'img/XL_g/2.jpg',
			'img/XL_g/3.jpg',
			'img/XL_g/4.jpg',
			'img/XL_g/5.jpg'
		]
	};

	$(document).on('click', '.img-text-detail', function () {


		// 填充图片详情
		var id = $(this).data('id')
		,	images = detailData[id]
		,	$images = [];

		for (var i = 0; i < images.length; i++) {
			$images.push('<img src="', images[i]  ,'" >');

		};

		$imgTextCon.html($images.join(''));
		$('#img-text-mod').bPopup({
			 	modalColor: 'black',
			 	closeClass: 'Close',
			 	positionStyle:['fixed'],
			 	position:['0','2rem'],
			 	follow:[true,false],
			 	onClose: function(){
			 		$('.wrap').css({'height':'auto','overflow':'auto'});
			 	},
			 	onOpen: function(){
					var ee = $(window).height();
					$('.wrap').css({'height':ee,'overflow':'hidden'});
					
			 	}
			 	

		});


	});



	

})();




