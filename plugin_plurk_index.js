/**
 *	Plurk 噗通 v1.0
 *
 *	@author			
 *			babymaple(my)(tw)	楓葉寶寶	babymaple@gmail.com 
 *			tureki(my)(tw)		烏龜		tureki11@gmail.com
 *
 *	@since	
 *		2011-01-12 by Citytalk
 *
 *	@teach	http://www.citytalk.tw/sns/forum.php?mod=viewthread&tid=21874
 *
 *	@version(0.1)
 *		-兼容性,讓主要的瀏覽器都可使用 IE7,8,Firefox,Google Chrome,Safari,Opera(IE6呢？bye!)
 *		-追加一些表情符號
 *		-判斷Karma 出現不同的圖示
 *		-Replurk
 *
 *	@version(0.2)2011/1/26
 *		-新增懶人投票，全部選上或全部選下 OS：工作之餘，忙裡偷閒，做做好玩的東西XD
 *
 *	@version(0.3)2011/3/16
 *		-去掉plurk原有圖，保留隱藏圖，最後加了一些加快版圖示
 *		-去除了懶人投票機制 這個機制其實對噗浪不太好 考慮之後決定移除
 *
 *	@version(0.31)2011/3/25
 *		-獨立噗的網址例如 http://www.plurk.com/p/bcd65s 也能使用表情咯
 *
 *	@version(0.5)2011/7/6 ~ 2011/7/7
 *		-Google Chrome 外掛 
 *		-FireFox 外掛
 *
 *	@version(1.0)2011/7/8
 *		-頁籤 
 *		-增加噗浪Emos 隱藏 + 沒有 CODE 的表情符號
 *
 *	@future
 *		-加入轉facebook的功能
 *		-尋找自己噗的功能（按照時間）OS:畢竟要找回之前的噗太辛苦了 = =+
 *		-備份噗的功能
 *		想到在繼續追加...
 *			
 *	@os
 *		發現這種做法時純粹帶著好奇的心態去研究,沒想到竟然真的可以動態include js
 *		竟然都測試到了,那就順便把一些常用性的功能順便補上(轉噗),
 *		好處是是使用者可以完全不裝plugin的情況馬上使用,而且還誇瀏覽器,
 *		壞處就是使用前需啟動
 *		為何要動態載入？純粹是為了可以動態更新工具的新功能。		
 *
 *	@intro	此JS為工具核心程式,目前已封裝成CLASS
 *
 */

if (typeof(timestamp) == "undefined") {
	var timestamp = new Date().getTime();
}

if(window.location.host!="www.plurk.com"){
		//alert("噗通工具只能在Plurk使用");
}else{
	
	if(typeof(CTPLURK) !== 'undefined' && CTPLURK != null) {
    	//alert('噗通已經在您的Plurk啟動了');
	}else{

		var CTPLURK = true;
		var _unique_main = function () {
			var jquery_oop 	= document.createElement('script');
			jquery_oop.type = 'text/javascript';
			jquery_oop.src 	= 'http://www.citytalk.tw/ct_plugin_jquery_core-oop.js?' + timestamp;

			var jquery_tpl 	= document.createElement('script');
			jquery_tpl.type = 'text/javascript';
			jquery_tpl.src 	= 'http://www.citytalk.tw/ct_plugin_jquery_core-tpl.js?' + timestamp;

			var plurk 	= document.createElement('script');
			plurk.type 	= 'text/javascript';
			plurk.src 	= 'https://rawgit.com/johnchris1/r1/5a521cedafa9591fb3d6973975eae0d30710380e/plurk_smile.js?' + timestamp;
			
			document.body.appendChild(jquery_oop);
			document.body.appendChild(jquery_tpl);
			document.body.appendChild(plurk);

			
				/*
			var plurkjs = document.createElement('script');
			plurkjs.setAttribute('type', 'text/javascript');
//			plurkjs.setAttribute('src', 'http://statics.plurk.com/74da709f3eebb942ade9da6ad760056f.js.jgz?');
				
			document.body.appendChild(plurkjs);
			
			var plurkjs2 = document.createElement('script');
			plurkjs2.setAttribute('type', 'text/javascript');
//			plurkjs2.setAttribute('src', 'http://statics.plurk.com/3020c9e73b812e4d59520d1a73893933.js.jgz?');
				
			document.body.appendChild(plurkjs2);
		
			var plurkjs3 = document.createElement('script');
			plurkjs3.setAttribute('type', 'text/javascript');
//			plurkjs3.setAttribute('src', 'http://statics.plurk.com/62ad00a411a9ab43fc18d0767ebe8e91.js.jgz?');
				
			document.body.appendChild(plurkjs3);
			
			var plurkjs4 = document.createElement('script');
			plurkjs4.setAttribute('type', 'text/javascript');
//			plurkjs4.setAttribute('src', 'http://statics.plurk.com/5ebcb5c9dab23ea6a88bc40b35dbc061.js.jgz?');
				
			document.body.appendChild(plurkjs4);
			
			var plurkjs5 = document.createElement('script');
			plurkjs5.setAttribute('type', 'text/javascript');
//			plurkjs5.setAttribute('src', 'http://statics.plurk.com/5a289dd05bcf8ffde291cffeef1c8946.js.jgz?');
				
			document.body.appendChild(plurkjs5);
			*/
		};
		
		// if (typeof jQuery != 'function' || typeof jQuery().jquery != 'string') {
			// var _unique_doc = document.getElementsByTagName('head')[0];
			// var _unique_js = document.createElement('script');
			// _unique_js.setAttribute('type', 'text/javascript');
			// _unique_js.setAttribute('src', 'http://www.citytalk.tw/jquery142.js?' + timestamp);
			// _unique_doc.appendChild(_unique_js);
			// _unique_trytrygo = function () {
				// if (typeof jQuery == 'function' && typeof jQuery().jquery == 'string') {
					// clearInterval(_unique_mainIntv);
					// _unique_main();
				// }
			// };
			// var _unique_mainIntv = setInterval(_unique_trytrygo, 300);
			
		// } else {
			//jQuery.noConflict();
			// _unique_main();
		// }
		_unique_main();
	}
}
