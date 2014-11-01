var openapp = {};
openapp.jump = function(appurl,murl){
	var g_sSchema = appurl;
	var g_sDownload = murl;
	var div, tid, startTime;
	var g_sUA = navigator.userAgent.toLowerCase();
	var jdApp = g_sUA.indexOf('jdapp');
	if(jdApp != -1){
		location.href = appurl;
	}else{
        location.href = murl;
	}
};
