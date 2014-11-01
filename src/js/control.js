
$(function () {
	$('#tabbox #b1').bind('click',function (){
		$('#tabbox #b1 a').attr("class","active");
		$('#tabbox #b2 a').attr("class"," ");
		$('#box_1').show(),
		$('#activities').hide()
	}),
	$('#tabbox #b2').bind('click',function (){
		$('#tabbox #b2 a').attr("class","active");
		$('#tabbox #b1 a').attr("class"," ");
		$('#box_1').hide(),
		$('#activities').show()
	}),
	$('#bq #boy1').bind('click',function (){
		$('#bq #boy1 a').attr("class","active");
		$('#bq #grol1 a').attr("class"," ");
		$('#boxcon_1').show(),
		$('#boxcon_2').hide()
	}),
	$('#bq #grol1').bind('click',function (){
		$('#bq #boy1 a').attr("class","");
		$('#bq #grol1 a').attr("class","active");
		$('#boxcon_1').hide(),
		$('#boxcon_2').show()
		
	})
	
},jQuery)
  
  	

