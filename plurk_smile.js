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
 *		-獨立噗的網址例如 http://www.plurk.com/ct/plurk/putong/bcd65s 也能使用表情咯
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

var ct_init_check = function () {
	try{
		jQuery.Class("com.ct.plurk.ui.Check", {});
		clearInterval(ct_init_inter); 
		ct_init();
	}catch(e){}
};

var ct_init_inter = setInterval(ct_init_check, 300);

function ct_init(){
	

	
	//將所有icon圖示整理進這個Class內，方便New來使用。
	jQuery.Class("com.ct.plurk.ui.PlurkIcon", {  
		//繼承
		Extends : [],  
		//接口
		Implements : [],  
		//初始話
		instance : function(options) {
			
		},
		//基本圖
		basicSet: [{
			imgUrl: 'http://statics.plurk.com/ff124032f8cc3a9d43b99e661f8fcb4d.gif',
			codeText: ':-))',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/99ef3957ef779718546752b749bdeabd.gif',
			codeText: ':-)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/3385896779bf1c13188bf92ca516878e.gif',
			codeText: ':-D',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/615f18f7ea8abc608c4c20eaa667883b.gif',
			codeText: '(LOL)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/2d5e21929e752498e36d74096b1965e1.gif',
			codeText: ':-P',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/13b15aa49358be8f47b58552401d7725.gif',
			codeText: '(woot)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/57c69f50e40a283dcd2e7b56fc191abe.gif',
			codeText: ';-)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/8eb05ca7a32301ba16c9496bcad893c4.gif',
			codeText: ':-o',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/261c0fe4a88417146ae0292d697a5f52.gif',
			codeText: 'X-(',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/11eed61b41a3e935773476ac33bc00d9.gif',
			codeText: ':-(',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/72ddf2c585fe77dd0be731b19624d8cb.gif',
			codeText: ':\'-(',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/2884b8d0e496c06136c86e9c9599edae.gif',
			codeText: ':-&',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/9454d15bcaf411b159dcc147ebc3f0eb.gif',
			codeText: '(K)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/a5ae31c4185bc60cd006650dc10f8147.gif',
			codeText: '(angry)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/35b16fc25623670e41c2be6bf8ac38c7.gif',
			codeText: '(annoyed)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/4afd784c0df9f7a3ceacb92beca543f6.gif',
			codeText: '(wave)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/c1c9870cf653fa3cd103d2eb0f519ccb.gif',
			codeText: 'B-)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/d1a6f08507b126ec6a215e6a2372e8bb.gif',
			codeText: '(cozy)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/5495d64ccb898ca596b061168fa0374a.gif',
			codeText: '(sick)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/b82e3225c92a764d225429a6487d9f04.gif',
			codeText: '(:',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/65271ac2126706bc09d31ff67c525d67.gif',
			codeText: '(goodluck)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/a709dab8ddd26bd222466d31bd549579.png',
			codeText: '(griltongue)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/e3baa9d0d78c35e955a6b07c39f530fa.gif',
			codeText: '(mmm)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/0f96595ed7733393b93a3d67aa4f2f4f.gif',
			codeText: '(hungry)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/919b87048fdf7bd59dae457f4284b20b.gif',
			codeText: '(music)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/96872d481bbfe87aad5aed976c7de4ee.gif',
			codeText: '(tears)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/56336bb821c4766001816639e55e5811.gif',
			codeText: '(tongue)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/6cb1dc388b9259565efedef8f336d27d.gif',
			codeText: '(unsure)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/a9560787e93f4f8890e4bd38696ba537.gif',
			codeText: '(highfive)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/a55bdb344892676b0fea545354654a49.gif',
			codeText: '(dance)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/9939dd585cf0e8d39e7912a98a9ce727.gif',
			codeText: '(blush)',
			type: 'base'
		}],
		//karma50的圖
		extraSet: [{
			imgUrl: 'http://statics.plurk.com/e8ed6c7eed76d2acd9dbf469f29fbec2.gif',
			codeText: '(doh)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/2b3593aea68efa7a00b4ef2850f98b8a.gif',
			codeText: '(brokenheart)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/ed3620ff28a02e3dc9ac4ffa8e6ae2e6.gif',
			codeText: '(drinking)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/08a43d50691a1ed22706fc92f568fa07.gif',
			codeText: '(girlkiss)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/8600839dc03e6275b53fd03a0eba09cf.gif',
			codeText: '(rofl)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/e6bb16b6ef386c5f23900b103dbdba31.gif',
			codeText: '(money)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/1c890273544559b17f090d09238fa763.gif',
			codeText: '(rock)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/f053074bcce500fbd1e2327d49748a6d.gif',
			codeText: '(nottalking)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/1f44d3984a094fceae1f1a016a730fc9.gif',
			codeText: '(party)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/2f7c90ce56fb4a70e34c04d8d7692dd0.gif',
			codeText: '(sleeping)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/900f3dd0adaad9142d567caf6bfb1311.gif',
			codeText: '(thinking)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/95ace5ba1097301b5206a9e0fb431624.gif',
			codeText: '(bringit)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/95e69aa508d4bb435706b9db0a610dad.gif',
			codeText: '(worship)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/a08ed27ec14b48d4703f53f7eb94834b.gif',
			codeText: '(applause)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/85ef5fa01a6a67a525429f8bf4279fe7.gif',
			codeText: '8-)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/986ecf2b1ae69072e0195b0a58545900.gif',
			codeText: '(gym)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/150e3f367a063d3baf9720719d78d778.gif',
			codeText: '(heart)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/3fabe74e992888be701de2a9d80c180a.gif',
			codeText: '(devil)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/92b595a573d25dd5e39a57b5d56d4d03.gif',
			codeText: '(lmao)',
			type: 'base'
		}],
		//karma81的圖
		karma81:[{
			imgUrl: 'http://statics.plurk.com/b0b0596acce9ffc1f2a27548aa642eaf.gif',
			codeText: '(headspin)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/4f01bac8a707e5450307f97065ec0fa7.gif',
			codeText: '(banana_cool)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/48515125401120316abb97666458d05b.gif',
			codeText: '(banana_rock)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/aabbc82c2b0dc72bfbce2f82c97a95e8.gif',
			codeText: '(evil_grin)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/52991d7ff65a05526454bd1170a0f14c.gif',
			codeText: '(heart_beat)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/846277f0a154dc95a08594b7d32a5ccd.gif',
			codeText: '(ninja)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/843739a95294fd0bf4c958840b46408f.gif',
			codeText: '(haha)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/22416dced8b59446db8cd366cc925d09.gif',
			codeText: '(evilsmirk)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/e3f0f67ca3af62e34f13abf1d036a010.gif',
			codeText: '(eyeroll)',
			type: 'base'
		}],
		//karma100的圖
		karma100: [{
			imgUrl: 'http://statics.plurk.com/84f94a47fcaf1df0a5f17a1cfa52fa64.gif',
			codeText: '(muhaha)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/44117848701cd748460921cfea5c3781.gif',
			codeText: '(taser)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/88f6dda8d290f66a923c1116a2a2b4ab.gif',
			codeText: '(banana_ninja)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/eeaf87c619a0221ec9fa06413fd2d5dc.gif',
			codeText: '(beer)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/48ec47723cb34be3fcbc914e591e69cd.gif',
			codeText: '(coffee)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/259a728a690204148037fbee7e2ca2d3.gif',
			codeText: '(fish_hit)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/4383af0e055bce112176c5104deeaadf.gif',
			codeText: '(muscle)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/70722ab5756c3b89c86d85feab91725d.gif',
			codeText: '(smileydance)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/91cf07e3aa16738943fa1147940b48ea.gif',
			codeText: '(morning)',
			type: 'base'
		}],
		//朋友圖
		friendSet: [
		{
			imgUrl: 'http://statics.plurk.com/8073c1716e75d32eb79f97a9f521fa01.gif',
			codeText: '(bigeyes)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/373cd2f23dab7528d4875170d13d64f7.gif',
			codeText: '(funkydance)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/8863234ebea13f109c9b15ba19a4531c.gif',
			codeText: '(idiot)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/8738c7a1c402f41b5319abe504ce9687.gif',
			codeText: '(lonely)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/db4c4a7d141fdcaca4d4b11f8fb360db.gif',
			codeText: '(scenic)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/ced6d40bebe2d424b59322b311fc04bb.gif',
			codeText: '(hassle)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/b62d1e55e8311af5bc7526c595ac1dbb.gif',
			codeText: '(panic)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/9b6f4864c822e1a97c98507c2b41a74f.gif',
			codeText: '(okok)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/e49c8ae965452550c98fc7f99741ae0d.gif',
			codeText: '(yahoo)',
			type: 'base'
		},
		{
			imgUrl: 'http://statics.plurk.com/318416eab5a856bddb1e106a21ff557a.gif',
			codeText: '(cry)',
			type: 'base'
		}
		],
		//隱藏圖
		hiddenSet: [
		{
			imgUrl: 'http://statics.plurk.com/47d20905d017c396d67b4a30c9ac9b10.png',
			codeText: '(goal)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/5a2a63fa773e68797ec69a1303bfa3b9.png',
			codeText: '(bzzz)',
			type: 'hide'
		},

		{
			imgUrl: 'http://statics.plurk.com/7256dae81d56d150120ccd0c96dd2197.gif',
			codeText: '(fireworks)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/4ad099fba019942f13058610ff3fc568.gif',
			codeText: '(dance_bzz)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/deda4d9f78ad528d725e3a6bfbf6352f.gif',
			codeText: '(\u0420\u0443\u0441\u0441\u043A\u0438\u0439)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/0efc4d55d28704f4370ef874ae906161.gif',
			codeText: '(code)',
			type: 'hide'
		},//http://statics.plurk.com/1a5f23ed863e70e52f239b045a48e6fb.gif
		
		{
			imgUrl: 'http://statics.plurk.com/4c40d16a0d369b895c08f2e33d062ec8.gif',
			codeText: '(yarr)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/71acd802cc931649dd9a371ccf70bad2.gif',
			codeText: '(hungry_okok)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/74030f05f06547a3d26b02ccbf0bbac7.gif',
			codeText: '(music_okok)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/3acbaf42504fff32c5eac4f12083ce56.gif',
			codeText: '(yarr_okok)',
			type: 'hide'
		},
		
		{
			imgUrl: 'http://statics.plurk.com/fcd28d7d78ec1f828c76930fa63270e6.gif',
			codeText: '(gym_okok)',
			type: 'hide'
		},

		{
			imgUrl: 'http://statics.plurk.com/bac8c8392f7ca8f5ac74612be4d08b74.gif',
			codeText: '(wave_okok)',
			type: 'hide'
		},

		{
			imgUrl: 'http://statics.plurk.com/8855f56400a936db07f348d9290adaac.gif',
			codeText: '(code_okok)',
			type: 'hide'
		},

		{
			imgUrl: 'http://statics.plurk.com/5b51892d7d1f392d93ea7fe26e5100f4.gif',
			codeText: '(banana_gym)',
			type: 'hide'
		},
				
		{
			imgUrl: 'http://statics.plurk.com/a555399b40c379adca5b6f5bad5bf732.gif',
			codeText: '(dance_okok)',
			type: 'hide'
		},
		
		{
			imgUrl: 'http://statics.plurk.com/6de58c967f1c2797d250a713ba50eddd.gif',
			codeText: '(dance_yarr)',
			type: 'hide'
		},

		{
			imgUrl: 'http://statics.plurk.com/88fac5a4b99110a35d4e4794dad58ab4.gif',
			codeText: '(taser_okok)',
			type: 'hide'
		},

		{
			imgUrl: 'http://statics.plurk.com/6675254cd7449b1847a93b0024127eae.gif',
			codeText: '(angry_okok)',
			type: 'hide'
		},
					
		{
			imgUrl: 'http://statics.plurk.com/feb43dbbbf2763905571060be9a496d1.gif',
			codeText: '(no_dance)',
			type: 'hide'
		},	
		{
			imgUrl: 'http://statics.plurk.com/b3b9856e557fcc2700fd41c53f9d4910.gif',
			codeText: '(droid_dance)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/cfdd2accc1188f5fbc62e149074c7f29.png',
			codeText: '(fuu)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/828b9819249db696701ae0987fba3638.png',
			codeText: '(gfuu)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/1bd653e166492e40e214ef6ce4dd716f.png',
			codeText: '(yay)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/3fe6cf919158597d7ec74f8d90f0cc9f.png',
			codeText: '(gyay)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/9c5c54081547d2ad903648f178fcc595.png',
			codeText: '(bah)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/2da76999ca3716fb4053f3332270e5c9.png',
			codeText: '(gbah)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/f73b773aa689647cb09f57f67a83bb89.png',
			codeText: '(troll)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/45beda260eddc28c82c0d27377e7bf42.png',
			codeText: '(gtroll)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/8590888362ae83daed52e4ca73c296a6.png',
			codeText: '(aha)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/c7551098438cc28ec3b54281d4b09cc3.png',
			codeText: '(gaha)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/cfd84315ebceec0c4389c51cf69132bd.png',
			codeText: '(whatever)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/0e0bf1ec2c2958799666f3995ef830ca.png',
			codeText: '(gwhatever)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/e2998ca75f80c1c4a5508c549e3980a6.png',
			codeText: '(pokerface)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/c6ad1c4f9e11f6859a1ba39c4341ef8b.png',
			codeText: '(gpokerface)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/4a61085f1c6a639f028cd48ae97d07d0.png',
			codeText: '(yea)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/53253ca60f5831f0812954213a2e9bb3.png',
			codeText: '(gyea)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/6928f3117658cc38d94e70519a511005.png',
			codeText: '(jazzhands)',
			type: 'hide'
		},
		{
			imgUrl: 'http://statics.plurk.com/af44689f789b98cfcb103844f7fbfce8.png',
			codeText: '(flower)',
			type: 'hide'
		},
		

//=============================以下自訂圖=================================
		


		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/d9.jpg',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/d9.jpg ',
			type: 'city'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/2.gif',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/2.gif ',
			type: 'city'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/32.gif',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/32.gif ',
			type: 'city'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/e4.gif',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/e4.gif ',
			type: 'city'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/11.gif',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/11.gif ',
			type: 'city'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/12.gif',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/12.gif ',
			type: 'city'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/13.gif',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/13.gif ',
			type: 'city'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/14.gif',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/14.gif ',
			type: 'city'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/15.gif',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/15.gif ',
			type: 'city'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/16.gif',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/16.gif ',
			type: 'city'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/17.gif',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/17.gif ',
			type: 'city'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/18.gif',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/18.gif ',
			type: 'city'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/28.gif',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/28.gif ',
			type: 'city'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/30.gif',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/30.gif ',
			type: 'city'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/b6.gif',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/b6.gif ',
			type: 'city'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/f7.gif',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/f7.gif ',
			type: 'city'
		},

		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/like.gif',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/like.gif ',
			type: 'city'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/bad.gif',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/bad.gif ',
			type: 'city'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/dislike.gif',
			codeText: ' http://www.citytalk.tw/img/ct/plurk/putong/dislike.gif ',
			type: 'city'
		},
		{
			imgUrl: 'http://emos.plurk.com/7d7a84db7136218b61c87f3055399d9b_w26_h17.png',
			codeText: ' http://emos.plurk.com/7d7a84db7136218b61c87f3055399d9b_w26_h17.png ',
			type: 'emos'
		},
		{
			imgUrl: 'http://emos.plurk.com/861fca82ab42a27c9d3d51f73e9fe4a2_w26_h17.png',
			codeText: ' http://emos.plurk.com/861fca82ab42a27c9d3d51f73e9fe4a2_w26_h17.png ',
			type: 'emos'
		},
		{
			imgUrl: 'http://emos.plurk.com/f47339923cbabe37535c74b160bb7c7a_w31_h15.png',
			codeText: ' http://emos.plurk.com/f47339923cbabe37535c74b160bb7c7a_w31_h15.png ',
			type: 'emos'
		},
		{
			imgUrl: 'http://emos.plurk.com/616a6487eec338d17e1e21c8edeff4f5_w52_h16.png',
			codeText: ' http://emos.plurk.com/616a6487eec338d17e1e21c8edeff4f5_w52_h16.png ',
			type: 'emos'
		},
		{
			imgUrl: 'http://emos.plurk.com/debf0f0ad3ce1d244c82b5d823ba02ae_w45_h16.png',
			codeText: ' http://emos.plurk.com/debf0f0ad3ce1d244c82b5d823ba02ae_w45_h16.png ',
			type: 'emos'
		},
		
		{
			imgUrl: 'http://emos.plurk.com/e3aefc19d5acd778a7b73c17edfd47df_w19_h16.png',
			codeText: ' http://emos.plurk.com/e3aefc19d5acd778a7b73c17edfd47df_w19_h16.png ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/f3efa5fb3f92da9d03ccec5bc24279e8_w33_h16.png',
			codeText: ' http://emos.plurk.com/f3efa5fb3f92da9d03ccec5bc24279e8_w33_h16.png ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/2c94cbe8feea39a47039826531a00fb3_w55_h16.png',
			codeText: ' http://emos.plurk.com/2c94cbe8feea39a47039826531a00fb3_w55_h16.png ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/60aa887d9df35dfb283788df8d740fe1_w54_h16.png',
			codeText: ' http://emos.plurk.com/60aa887d9df35dfb283788df8d740fe1_w54_h16.png ',
			type: 'emos'
		},				
		
		{
			imgUrl: 'http://emos.plurk.com/19257e373e262e26f4e06267ee4752ec_w24_h24.gif',
			codeText: ' http://emos.plurk.com/19257e373e262e26f4e06267ee4752ec_w24_h24.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/a4364cc0987a9aa4b29e928a8f86bb68_w16_h16.png',
			codeText: ' http://emos.plurk.com/a4364cc0987a9aa4b29e928a8f86bb68_w16_h16.png ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/dc9a97a13f03d61dac5c242cf54b909d_w16_h16.png',
			codeText: ' http://emos.plurk.com/dc9a97a13f03d61dac5c242cf54b909d_w16_h16.png ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/b6ebb0a088fa352ee03ed6f760fb319d_w16_h16.png',
			codeText: ' http://emos.plurk.com/b6ebb0a088fa352ee03ed6f760fb319d_w16_h16.png ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/f61ee4d0a8c76308dde2f08815848774_w16_h16.png',
			codeText: ' http://emos.plurk.com/f61ee4d0a8c76308dde2f08815848774_w16_h16.png ',
			type: 'emos'
		},		
		
		{
			imgUrl: 'http://emos.plurk.com/5930b69adf98ebaa5692f1f56b65cb23_w20_h12.png',
			codeText: ' http://emos.plurk.com/5930b69adf98ebaa5692f1f56b65cb23_w20_h12.png ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/d386fee9d60c2afabeeaa87562c59747_w27_h12.png',
			codeText: ' http://emos.plurk.com/d386fee9d60c2afabeeaa87562c59747_w27_h12.png ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/c002dec697a38c73203d20f938159a50_w13_h12.gif',
			codeText: ' http://emos.plurk.com/c002dec697a38c73203d20f938159a50_w13_h12.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/0773bc5952486007c6d0ab164c0d591a_w13_h12.gif',
			codeText: ' http://emos.plurk.com/0773bc5952486007c6d0ab164c0d591a_w13_h12.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/e4bc489e5d83193bc02ff346142e5d5a_w13_h12.gif',
			codeText: ' http://emos.plurk.com/e4bc489e5d83193bc02ff346142e5d5a_w13_h12.gif ',
			type: 'emos'
		},		
		{
			imgUrl: 'http://emos.plurk.com/74988dfa2cb3122e16e24f2290c618e0_w18_h18.gif',
			codeText: ' http://emos.plurk.com/74988dfa2cb3122e16e24f2290c618e0_w18_h18.gif ',
			type: 'emos'
		},
		{
			imgUrl: 'http://emos.plurk.com/ec2a8f0ee25edc930992ec8251c785ba_w18_h18.gif',
			codeText: ' http://emos.plurk.com/ec2a8f0ee25edc930992ec8251c785ba_w18_h18.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/7ef4a33e7818e2040a902a808397a8a4_w18_h18.gif',
			codeText: ' http://emos.plurk.com/7ef4a33e7818e2040a902a808397a8a4_w18_h18.gif ',
			type: 'emos'
		},	

		{
			imgUrl: 'http://emos.plurk.com/514e1cfa8f84c79da4d96d8cb5e93aeb_w18_h18.gif',
			codeText: ' http://emos.plurk.com/514e1cfa8f84c79da4d96d8cb5e93aeb_w18_h18.gif ',
			type: 'emos'
		},			
		{
			imgUrl: 'http://emos.plurk.com/28afdbdbe4b3151467cdba83b46ad7eb_w20_h18.gif',
			codeText: ' http://emos.plurk.com/28afdbdbe4b3151467cdba83b46ad7eb_w20_h18.gif ',
			type: 'emos'
		},	

		{
			imgUrl: 'http://emos.plurk.com/b1517d1e47c9acb61f589e56a56fc53f_w17_h15.gif',
			codeText: ' http://emos.plurk.com/b1517d1e47c9acb61f589e56a56fc53f_w17_h15.gif ',
			type: 'emos'
		},		
		{
			imgUrl: 'http://emos.plurk.com/1ff4f9a530c38ed18dfe0c205c784a15_w18_h18.gif',
			codeText: ' http://emos.plurk.com/1ff4f9a530c38ed18dfe0c205c784a15_w18_h18.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/1bb4ad7a4537736909d4aae550d963f5_w18_h18.gif',
			codeText: ' http://emos.plurk.com/1bb4ad7a4537736909d4aae550d963f5_w18_h18.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/cf21e2fd3cbbbd1157faf60d491f36bb_w22_h18.gif',
			codeText: ' http://emos.plurk.com/cf21e2fd3cbbbd1157faf60d491f36bb_w22_h18.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/48f65db11bfbd25e5b6d8f1ad69876d5_w34_h18.gif',
			codeText: ' http://emos.plurk.com/48f65db11bfbd25e5b6d8f1ad69876d5_w34_h18.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/595b57b9899afc5aa42b6590227bfa0c_w22_h18.gif',
			codeText: ' http://emos.plurk.com/595b57b9899afc5aa42b6590227bfa0c_w22_h18.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/78405deafd497948341867451b552bba_w18_h18.gif',
			codeText: ' http://emos.plurk.com/78405deafd497948341867451b552bba_w18_h18.gif ',
			type: 'emos'
		},	
		
		{
			imgUrl: 'http://emos.plurk.com/273ff7eb03b4f76f15c8113b4df47d6f_w19_h19.gif',
			codeText: ' http://emos.plurk.com/273ff7eb03b4f76f15c8113b4df47d6f_w19_h19.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/f83923c724cfc51c039c88dd32a084f7_w18_h18.gif',
			codeText: ' http://emos.plurk.com/f83923c724cfc51c039c88dd32a084f7_w18_h18.gif ',
			type: 'emos'
		},		
		
		{
			imgUrl: 'http://emos.plurk.com/8ca920d66287b6e2999b8ea7f0af844e_w25_h29.gif',
			codeText: ' http://emos.plurk.com/8ca920d66287b6e2999b8ea7f0af844e_w25_h29.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/4a8042602eab8dffc29c30e85b608e59_w25_h22.gif',
			codeText: ' http://emos.plurk.com/4a8042602eab8dffc29c30e85b608e59_w25_h22.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/14e1ca83adfc3cd09e144a2988702881_w41_h27.gif',
			codeText: ' http://emos.plurk.com/14e1ca83adfc3cd09e144a2988702881_w41_h27.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/7c79f78937f5e25644ca7add62f14a8d_w41_h27.gif',
			codeText: ' http://emos.plurk.com/7c79f78937f5e25644ca7add62f14a8d_w41_h27.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/02f0ba226e329c63b0a082f44ffef9fc_w41_h27.gif',
			codeText: ' http://emos.plurk.com/02f0ba226e329c63b0a082f44ffef9fc_w41_h27.gif ',
			type: 'emos'
		},	
		
		{
			imgUrl: 'http://emos.plurk.com/420f25913fa89894a1c61ac0654e4ac8_w41_h27.gif',
			codeText: ' http://emos.plurk.com/420f25913fa89894a1c61ac0654e4ac8_w41_h27.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/b2c79c4e48d7aa0c38a434df53458723_w38_h18.gif',
			codeText: ' http://emos.plurk.com/b2c79c4e48d7aa0c38a434df53458723_w38_h18.gif ',
			type: 'emos'
		},		
		
		{
			imgUrl: 'http://emos.plurk.com/964b77539edcdfe1c7ea0fee95eae2aa_w19_h19.gif',
			codeText: ' http://emos.plurk.com/964b77539edcdfe1c7ea0fee95eae2aa_w19_h19.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/c02504441e39444838a743e4b5bbde78_w20_h20.gif',
			codeText: ' http://emos.plurk.com/c02504441e39444838a743e4b5bbde78_w20_h20.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/f9522f7c35738e8aad7f581f1aec36d3_w19_h19.gif',
			codeText: ' http://emos.plurk.com/f9522f7c35738e8aad7f581f1aec36d3_w19_h19.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/019246b26056da324088cda7dc07202f_w19_h19.gif',
			codeText: ' http://emos.plurk.com/019246b26056da324088cda7dc07202f_w19_h19.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/e3ea0a309e68d03438442cf4a1a54dcd_w19_h19.gif',
			codeText: ' http://emos.plurk.com/e3ea0a309e68d03438442cf4a1a54dcd_w19_h19.gif ',
			type: 'emos'
		},	
		
		{
			imgUrl: 'http://emos.plurk.com/b27fc8238183a6c221d1f69c874da4d9_w19_h19.gif',
			codeText: ' http://emos.plurk.com/b27fc8238183a6c221d1f69c874da4d9_w19_h19.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/887e383335c5b8e3e4f9d2c66bcd2988_w20_h20.png',
			codeText: ' http://emos.plurk.com/887e383335c5b8e3e4f9d2c66bcd2988_w20_h20.png ',
			type: 'emos'
		},		
		
		{
			imgUrl: 'http://emos.plurk.com/871e3710bbfbc0c106f610b5574ea192_w19_h19.gif',
			codeText: ' http://emos.plurk.com/871e3710bbfbc0c106f610b5574ea192_w19_h19.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/f4dc314c81bbc0e0291940e2be5ffb2e_w38_h20.gif',
			codeText: ' http://emos.plurk.com/f4dc314c81bbc0e0291940e2be5ffb2e_w38_h20.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/2a44dee48405428b297cc8bc6c9ace3a_w34_h26.gif',
			codeText: ' http://emos.plurk.com/2a44dee48405428b297cc8bc6c9ace3a_w34_h26.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/5bf0b4db42969d1cb5ec8ed7a9171dda_w44_h20.gif',
			codeText: ' http://emos.plurk.com/5bf0b4db42969d1cb5ec8ed7a9171dda_w44_h20.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/425e9b25655a4d2c5ea4dd3704f74f0b_w46_h20.gif',
			codeText: ' http://emos.plurk.com/425e9b25655a4d2c5ea4dd3704f74f0b_w46_h20.gif ',
			type: 'emos'
		},
		{
			imgUrl: 'http://emos.plurk.com/2f632ebc3dbf773ce16ed06781a8de31_w19_h19.gif',
			codeText: ' http://emos.plurk.com/2f632ebc3dbf773ce16ed06781a8de31_w19_h19.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/8cceb1289c64cb3b44f6f6da7b3d6cc3_w22_h22.gif',
			codeText: ' http://emos.plurk.com/8cceb1289c64cb3b44f6f6da7b3d6cc3_w22_h22.gif ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/f8c9dd9ba3f9858e92bc32c5aa50f598_w18_h17.png',
			codeText: ' http://emos.plurk.com/f8c9dd9ba3f9858e92bc32c5aa50f598_w18_h17.png ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/bc69e31d3b9fe8d228bcfab51234fa00_w27_h29.png',
			codeText: ' http://emos.plurk.com/bc69e31d3b9fe8d228bcfab51234fa00_w27_h29.png ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/c8f6c1ee7171cf7a13ed0e396102bca5_w28_h29.png',
			codeText: ' http://emos.plurk.com/c8f6c1ee7171cf7a13ed0e396102bca5_w28_h29.png ',
			type: 'emos'
		},	
		{
			imgUrl: 'http://emos.plurk.com/376728e58c750bab98fd825d7817259b_w33_h35.gif',
			codeText: ' http://emos.plurk.com/376728e58c750bab98fd825d7817259b_w33_h35.gif ',
			type: 'emos'
		},	

//==================================以下tokro=================================
//==================================雜=================================

		{
			imgUrl: 'https://emos.plurk.com/ab214f13d271e7f76929ab82759e2709_w28_h28.png',
			codeText: ' https://emos.plurk.com/ab214f13d271e7f76929ab82759e2709_w28_h28.png ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/20c926cb60ffc993080cb2a4fcc51c1f_w48_h48.gif',
			codeText: ' https://emos.plurk.com/20c926cb60ffc993080cb2a4fcc51c1f_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/3774734a695d8ed1f89b8f60db85b53e_w48_h48.jpeg',
			codeText: ' https://emos.plurk.com/3774734a695d8ed1f89b8f60db85b53e_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/fdcdb68d106807aeec84aa8475814caa_w48_h40.jpeg',
			codeText: ' https://emos.plurk.com/fdcdb68d106807aeec84aa8475814caa_w48_h40.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/46488dcda183093326796fde6949756d_w48_h48.png',
			codeText: ' https://emos.plurk.com/46488dcda183093326796fde6949756d_w48_h48.png ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/356cab8378f79083c39b0b939ddafa25_w48_h48.jpeg',
			codeText: ' https://emos.plurk.com/356cab8378f79083c39b0b939ddafa25_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/e1cd410e318032ca1d67e50b8115ec2a_w48_h48.gif',
			codeText: ' https://emos.plurk.com/e1cd410e318032ca1d67e50b8115ec2a_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/6dd3638793ded487e65482e9365cedd3_w48_h48.png',
			codeText: ' https://emos.plurk.com/6dd3638793ded487e65482e9365cedd3_w48_h48.png ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/81810c44ec13230a220ffab2dffa657c_w48_h48.gif',
			codeText: ' https://emos.plurk.com/81810c44ec13230a220ffab2dffa657c_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/a041dab25b71acc1b797ed9a58aaecbc_w48_h48.jpeg',
			codeText: ' https://emos.plurk.com/a041dab25b71acc1b797ed9a58aaecbc_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/52d2418a50c3910029634f739deb8611_w48_h48.gif',
			codeText: ' https://emos.plurk.com/52d2418a50c3910029634f739deb8611_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/6c37a8c5acb98de6da9232f5cac5d741_w48_h48.gif',
			codeText: ' https://emos.plurk.com/6c37a8c5acb98de6da9232f5cac5d741_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/b7b335eb6184bca737f360ee7ee74a3e_w48_h48.png',
			codeText: ' https://emos.plurk.com/b7b335eb6184bca737f360ee7ee74a3e_w48_h48.png ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/6006e39f4014bce648956fb1412fa320_w48_h48.png',
			codeText: ' https://emos.plurk.com/6006e39f4014bce648956fb1412fa320_w48_h48.png ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/97cf4f3b3a21071b9b3df30993c7b300_w48_h48.gif',
			codeText: ' http://emos.plurk.com/97cf4f3b3a21071b9b3df30993c7b300_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/3e959ee7c42a8d4f2f0e3da97d842b4c_w48_h48.png',
			codeText: ' http://emos.plurk.com/3e959ee7c42a8d4f2f0e3da97d842b4c_w48_h48.png ',
			type: '雜'
		},


		{
			imgUrl: 'http://emos.plurk.com/fe043e1fed944997ec8ee7687306a088_w48_h48.gif',
			codeText: ' http://emos.plurk.com/fe043e1fed944997ec8ee7687306a088_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/9b4237510efebd697f1546d8b71d76c0_w43_h20.gif',
			codeText: ' https://emos.plurk.com/9b4237510efebd697f1546d8b71d76c0_w43_h20.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/98ee070db641a4e235aaa79a18a78aaa_w48_h19.gif',
			codeText: ' http://emos.plurk.com/98ee070db641a4e235aaa79a18a78aaa_w48_h19.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/e62f0520383c760d16923cee0c1c2ac9_w46_h20.gif',
			codeText: ' http://emos.plurk.com/e62f0520383c760d16923cee0c1c2ac9_w46_h20.gif ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/dabd65a4b321ad0868e5c059ea8442c6_w48_h48.gif',
			codeText: ' https://emos.plurk.com/dabd65a4b321ad0868e5c059ea8442c6_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/0d810cd587e273de6c2ea70f8a4895f7_w48_h48.png',
			codeText: ' https://emos.plurk.com/0d810cd587e273de6c2ea70f8a4895f7_w48_h48.png ',
			type: '雜'
		},


		{
			imgUrl: 'https://emos.plurk.com/da1387ca37fac867ba449c9062f19ee2_w20_h20.gif',
			codeText: ' https://emos.plurk.com/da1387ca37fac867ba449c9062f19ee2_w20_h20.gif ',
			type: '雜'
		},


		{
			imgUrl: 'https://emos.plurk.com/1113a039e764850a12147572f8cb6e39_w48_h48.png',
			codeText: ' https://emos.plurk.com/1113a039e764850a12147572f8cb6e39_w48_h48.png ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/bba3a732fb5bbf55975d4033a3550079_w48_h48.jpeg',
			codeText: ' https://emos.plurk.com/bba3a732fb5bbf55975d4033a3550079_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/a1b55adf98a67d132fc9d93d416627a2_w48_h48.gif',
			codeText: ' https://emos.plurk.com/a1b55adf98a67d132fc9d93d416627a2_w48_h48.gif ',
			type: '雜'
		},


		{
			imgUrl: 'https://emos.plurk.com/ecf8a9e1daec5398c753fdd728580c8c_w48_h48.gif',
			codeText: ' https://emos.plurk.com/ecf8a9e1daec5398c753fdd728580c8c_w48_h48.gif ',
			type: '雜'
		},


		{
			imgUrl: 'http://emos.plurk.com/f86e5f9f042e53ced964b6d08fe47fe0_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/f86e5f9f042e53ced964b6d08fe47fe0_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/502cc4f303f6803d0ebdf1ef093c9e80_w48_h48.gif',
			codeText: ' https://emos.plurk.com/502cc4f303f6803d0ebdf1ef093c9e80_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/72dacbaf3f38d7984cb3ac58b4c5a2f0_w48_h48.gif',
			codeText: ' https://emos.plurk.com/72dacbaf3f38d7984cb3ac58b4c5a2f0_w48_h48.gif ',
			type: '雜'
		},


		{
			imgUrl: 'https://emos.plurk.com/c56c6a8c4e14da9a44ed9ba35d3990b8_w48_h48.png',
			codeText: ' https://emos.plurk.com/c56c6a8c4e14da9a44ed9ba35d3990b8_w48_h48.png ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/524fc2ddacc789d27f7188940fce825f_w48_h48.gif',
			codeText: ' https://emos.plurk.com/524fc2ddacc789d27f7188940fce825f_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/045c966474c22060827c32179b46325c_w48_h48.gif',
			codeText: ' https://emos.plurk.com/045c966474c22060827c32179b46325c_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/fbd1bf21e0e98ae474f0e3f2fe9f6eec_w48_h48.png',
			codeText: ' https://emos.plurk.com/fbd1bf21e0e98ae474f0e3f2fe9f6eec_w48_h48.png ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/39bba54729caf1f11c600aa2743f55ab_w48_h48.jpeg',
			codeText: ' https://emos.plurk.com/39bba54729caf1f11c600aa2743f55ab_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/39f3d529289a48775cf22cbebb289be5_w48_h48.gif',
			codeText: ' http://emos.plurk.com/39f3d529289a48775cf22cbebb289be5_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/7d4ee707feba02e259393a93269fcb53_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/7d4ee707feba02e259393a93269fcb53_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/d72c4cc98a9c4a530b4785c91ee1da4d_w48_h48.gif',
			codeText: ' http://emos.plurk.com/d72c4cc98a9c4a530b4785c91ee1da4d_w48_h48.gif ',
			type: '雜'
		},


		{
			imgUrl: 'http://emos.plurk.com/fc796ea613e279640955bd84d0a4a552_w48_h48.png',
			codeText: ' http://emos.plurk.com/fc796ea613e279640955bd84d0a4a552_w48_h48.png ',
			type: '雜'
		},


		{
			imgUrl: 'http://emos.plurk.com/b943e890608b877e42c76ea2d18d668d_w48_h48.png',
			codeText: ' http://emos.plurk.com/b943e890608b877e42c76ea2d18d668d_w48_h48.png ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/4ff6c1fbe39a93d259501d21396ca51d_w47_h47.gif',
			codeText: ' http://emos.plurk.com/4ff6c1fbe39a93d259501d21396ca51d_w47_h47.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/c77facb07563f8a4289f444b477f8058_w48_h48.png',
			codeText: ' http://emos.plurk.com/c77facb07563f8a4289f444b477f8058_w48_h48.png ',
			type: '雜'
		},


		{
			imgUrl: 'http://emos.plurk.com/a59f833c9015a1df04efdbce7b0d427b_w48_h48.gif',
			codeText: ' http://emos.plurk.com/a59f833c9015a1df04efdbce7b0d427b_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/0c56e0670b01ce2597b4415d6a820b84_w48_h48.png',
			codeText: ' http://emos.plurk.com/0c56e0670b01ce2597b4415d6a820b84_w48_h48.png ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/5223911a04d3ba8051d65d9cb36ed860_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/5223911a04d3ba8051d65d9cb36ed860_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/88522db9c57298a61031361cfde5ba0b_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/88522db9c57298a61031361cfde5ba0b_w48_h48.jpeg ',
			type: '雜'
		},


		{
			imgUrl: 'http://emos.plurk.com/5846529abb90cabba6ce1c7560942ca9_w48_h38.gif',
			codeText: ' http://emos.plurk.com/5846529abb90cabba6ce1c7560942ca9_w48_h38.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/2309dc616d2553081b318e3f278fcb05_w48_h48.png',
			codeText: ' http://emos.plurk.com/2309dc616d2553081b318e3f278fcb05_w48_h48.png ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/541a2d120ee8081db361b363a31ca5e4_w48_h33.png',
			codeText: ' http://emos.plurk.com/541a2d120ee8081db361b363a31ca5e4_w48_h33.png ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/9a7c92766b5bed0c952f5e64fd0830f5_w48_h48.gif',
			codeText: ' http://emos.plurk.com/9a7c92766b5bed0c952f5e64fd0830f5_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/d2d88f6e3b395ffad55a44fa76aeb4d3_w48_h48.gif',
			codeText: ' http://emos.plurk.com/d2d88f6e3b395ffad55a44fa76aeb4d3_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/25c5ea1cf8885cd4995045ca0411927f_w48_h48.gif',
			codeText: ' http://emos.plurk.com/25c5ea1cf8885cd4995045ca0411927f_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/45e70182ce02bc9ce4a37d669a33ee09_w48_h48.gif',
			codeText: ' http://emos.plurk.com/45e70182ce02bc9ce4a37d669a33ee09_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/731db47e86315539d8e8d378c0a8e39b_w47_h47.gif',
			codeText: ' http://emos.plurk.com/731db47e86315539d8e8d378c0a8e39b_w47_h47.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/bc63a414fac5650861dac4275398578e_w48_h48.png',
			codeText: ' http://emos.plurk.com/bc63a414fac5650861dac4275398578e_w48_h48.png ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/497b9b191537075c8f14cbeb99e39cbb_w48_h48.gif',
			codeText: ' http://emos.plurk.com/497b9b191537075c8f14cbeb99e39cbb_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/ecc1d636867ef9d9a61a5d6c81a3e772_w48_h48.gif',
			codeText: ' http://emos.plurk.com/ecc1d636867ef9d9a61a5d6c81a3e772_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/a94937d3193fde31c5e2c8f205b14dfb_w48_h48.gif',
			codeText: ' http://emos.plurk.com/a94937d3193fde31c5e2c8f205b14dfb_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/7958c740333801156660409e6531c26f_w48_h48.gif',
			codeText: ' http://emos.plurk.com/7958c740333801156660409e6531c26f_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/948d3b742aa6fb3f7cd44d1b937cd4d6_w48_h35.gif',
			codeText: ' http://emos.plurk.com/948d3b742aa6fb3f7cd44d1b937cd4d6_w48_h35.gif ',
			type: '雜'
		},


		{
			imgUrl: 'http://emos.plurk.com/81e8fffbb1bff9b6e7318e361bbfef3a_w48_h35.gif',
			codeText: ' http://emos.plurk.com/81e8fffbb1bff9b6e7318e361bbfef3a_w48_h35.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/99133ed008000f36798a51205d5dd77d_w48_h48.gif',
			codeText: ' http://emos.plurk.com/99133ed008000f36798a51205d5dd77d_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/cdca8377d59893da4573ba114f52fcfb_w48_h48.gif',
			codeText: ' http://emos.plurk.com/cdca8377d59893da4573ba114f52fcfb_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/2b3f0e3e535ab418011f95fdd7d17da0_w48_h48.gif',
			codeText: ' http://emos.plurk.com/2b3f0e3e535ab418011f95fdd7d17da0_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/a6c45252931a8fa5bb1a27ebb2949faa_w48_h48.gif',
			codeText: ' http://emos.plurk.com/a6c45252931a8fa5bb1a27ebb2949faa_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/4ec08a851b2d3a8bdd23c3167502f79f_w48_h48.gif',
			codeText: ' http://emos.plurk.com/4ec08a851b2d3a8bdd23c3167502f79f_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/817695912f7da1d3990591d6e16435d5_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/817695912f7da1d3990591d6e16435d5_w48_h48.jpeg ',
			type: '雜'
		},


		{
			imgUrl: 'http://emos.plurk.com/b2e76e35476f2d0459f590e6926508c3_w47_h20.gif',
			codeText: ' http://emos.plurk.com/b2e76e35476f2d0459f590e6926508c3_w47_h20.gif ',
			type: '雜'
		},


		{
			imgUrl: 'http://emos.plurk.com/acbfd2eee442b9969de4994a19fb2fc6_w48_h48.gif',
			codeText: ' http://emos.plurk.com/acbfd2eee442b9969de4994a19fb2fc6_w48_h48.gif ',
			type: '雜'
		},


		{
			imgUrl: 'http://emos.plurk.com/720aea9ad1a6a74f0656c9fd938cd221_w45_h45.gif',
			codeText: ' http://emos.plurk.com/720aea9ad1a6a74f0656c9fd938cd221_w45_h45.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/175e8fe7ab4a15808ee970bea5447341_w48_h48.gif',
			codeText: ' http://emos.plurk.com/175e8fe7ab4a15808ee970bea5447341_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'https://emos.plurk.com/502cc08695daf81d504d8312aa502a9a_w48_h48.jpeg',
			codeText: ' https://emos.plurk.com/502cc08695daf81d504d8312aa502a9a_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/7a41d84548dcb17841685996c21bacd4_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/7a41d84548dcb17841685996c21bacd4_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/e05a0af9e54082dbc1907887e97b7a9a_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/e05a0af9e54082dbc1907887e97b7a9a_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/b3ecd03b9dcf8516e0cc8eda81a48796_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/b3ecd03b9dcf8516e0cc8eda81a48796_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/ea8e6681d233b02dd2a5cc5666e85056_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/ea8e6681d233b02dd2a5cc5666e85056_w48_h48.jpeg ',
			type: '雜'
		},


		{
			imgUrl: 'http://emos.plurk.com/8d8b7d4c1ca8d367971d3c1781b28245_w48_h48.gif',
			codeText: ' http://emos.plurk.com/8d8b7d4c1ca8d367971d3c1781b28245_w48_h48.gif ',
			type: '雜'
		},


		{
			imgUrl: 'http://emos.plurk.com/f28b6f1033ee79c9c19e4563368a7303_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/f28b6f1033ee79c9c19e4563368a7303_w48_h48.jpeg ',
			type: '雜'
		},


		{
			imgUrl: 'http://emos.plurk.com/1f7c9a8b2c937eb60710bf4b8b3376b3_w48_h48.gif',
			codeText: ' http://emos.plurk.com/1f7c9a8b2c937eb60710bf4b8b3376b3_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/9c44461bb24a1414a7061b234803e9f7_w30_h25.png',
			codeText: ' http://emos.plurk.com/9c44461bb24a1414a7061b234803e9f7_w30_h25.png ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/54e394e9c48ce3d1a17f940c24abe9a2_w20_h20.gif',
			codeText: ' http://emos.plurk.com/54e394e9c48ce3d1a17f940c24abe9a2_w20_h20.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/741a43ee5bf5576d3c77870020971e4f_w20_h20.gif',
			codeText: ' http://emos.plurk.com/741a43ee5bf5576d3c77870020971e4f_w20_h20.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/c25153ea4f4a85ffce965e12503b8efd_w20_h20.gif',
			codeText: ' http://emos.plurk.com/c25153ea4f4a85ffce965e12503b8efd_w20_h20.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/11c862bb5048c4c812b8545d6e573a55_w20_h20.gif',
			codeText: ' http://emos.plurk.com/11c862bb5048c4c812b8545d6e573a55_w20_h20.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/e3f9c7ec27c9ac438b9cfe1d27954d07_w20_h20.gif',
			codeText: ' http://emos.plurk.com/e3f9c7ec27c9ac438b9cfe1d27954d07_w20_h20.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/c531ab5a1f3a08b67534964ee9ddefc2_w20_h20.gif',
			codeText: ' http://emos.plurk.com/c531ab5a1f3a08b67534964ee9ddefc2_w20_h20.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/b9f596c63b3fd75824fedc862ae197fd_w20_h20.gif',
			codeText: ' http://emos.plurk.com/b9f596c63b3fd75824fedc862ae197fd_w20_h20.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/5c90beead85498bf3635f3e43299fe34_w20_h20.gif',
			codeText: ' http://emos.plurk.com/5c90beead85498bf3635f3e43299fe34_w20_h20.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/84583ceb887b08251b6d86bbcda59094_w20_h20.gif',
			codeText: ' http://emos.plurk.com/84583ceb887b08251b6d86bbcda59094_w20_h20.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/b9f8dc8076862543666e01a6b3d4bbe2_w42_h15.jpeg',
			codeText: ' http://emos.plurk.com/b9f8dc8076862543666e01a6b3d4bbe2_w42_h15.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/88e50c491a10cfb14f6a3376751ce0c0_w20_h20.gif',
			codeText: ' http://emos.plurk.com/88e50c491a10cfb14f6a3376751ce0c0_w20_h20.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/ae0508124562542b15ece0e78e4f3cd6_w20_h20.gif',
			codeText: ' http://emos.plurk.com/ae0508124562542b15ece0e78e4f3cd6_w20_h20.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/c5c5d69d9eb4816ef33cbc26820c94bd_w20_h20.gif',
			codeText: ' http://emos.plurk.com/c5c5d69d9eb4816ef33cbc26820c94bd_w20_h20.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/def8d7f347ad1f94957c75f546bcb42e_w20_h20.gif',
			codeText: ' http://emos.plurk.com/def8d7f347ad1f94957c75f546bcb42e_w20_h20.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/81bdaa597eacac14e9e45d0a8bb0887b_w20_h20.gif',
			codeText: ' http://emos.plurk.com/81bdaa597eacac14e9e45d0a8bb0887b_w20_h20.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/22c2564b199c1ae4a4a326dbcf311064_w48_h48.gif',
			codeText: ' http://emos.plurk.com/22c2564b199c1ae4a4a326dbcf311064_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/5a7daea7b9ce7938d0111b333b2c703d_w48_h48.gif',
			codeText: ' http://emos.plurk.com/5a7daea7b9ce7938d0111b333b2c703d_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/63ec76027bc04efee25efcf979d04b37_w38_h20.gif',
			codeText: ' http://emos.plurk.com/63ec76027bc04efee25efcf979d04b37_w38_h20.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/e4e30751442783f358c841b3a19fcc72_w48_h48.gif',
			codeText: ' http://emos.plurk.com/e4e30751442783f358c841b3a19fcc72_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/2a6eb8d200d38f0332f6554463725f16_w48_h48.gif',
			codeText: ' http://emos.plurk.com/2a6eb8d200d38f0332f6554463725f16_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/f8750659f0249ee9372fee93fc10ce69_w48_h19.png',
			codeText: ' http://emos.plurk.com/f8750659f0249ee9372fee93fc10ce69_w48_h19.png ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/3eb60f6a735641348437cca5a4fa34ce_w48_h47.gif',
			codeText: ' http://emos.plurk.com/3eb60f6a735641348437cca5a4fa34ce_w48_h47.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/30d1643dd824a00df33fcc7ea9a3f423_w48_h46.png',
			codeText: ' http://emos.plurk.com/30d1643dd824a00df33fcc7ea9a3f423_w48_h46.png ',
			type: '雜'
		},


		{
			imgUrl: 'http://emos.plurk.com/8e88a50cbb49441501e1ffa127c29887_w48_h46.png',
			codeText: ' http://emos.plurk.com/8e88a50cbb49441501e1ffa127c29887_w48_h46.png ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/b12b54bbb86905fb9410120eaa598a4e_w48_h26.gif',
			codeText: ' http://emos.plurk.com/b12b54bbb86905fb9410120eaa598a4e_w48_h26.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/85d162d82ce3a461dae8df1bb1437ee5_w48_h48.gif',
			codeText: ' http://emos.plurk.com/85d162d82ce3a461dae8df1bb1437ee5_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/f213d596e2fbaffe63f076b2bc7b9161_w48_h48.gif',
			codeText: ' http://emos.plurk.com/f213d596e2fbaffe63f076b2bc7b9161_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/6c700640176abb963fe10477a1f5e468_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/6c700640176abb963fe10477a1f5e468_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/dd384c1323a4da379d363dd57b8aefa6_w48_h48.gif',
			codeText: ' http://emos.plurk.com/dd384c1323a4da379d363dd57b8aefa6_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/e193b086a5c99949e83fc383e8caf480_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/e193b086a5c99949e83fc383e8caf480_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/067fa00654c690be5416abf892f8a2f2_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/067fa00654c690be5416abf892f8a2f2_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/1e14af86c407a74288c054b369e8b03f_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/1e14af86c407a74288c054b369e8b03f_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/721324e30b1d60a76b32fdd0fca5d809_w48_h48.gif',
			codeText: ' http://emos.plurk.com/721324e30b1d60a76b32fdd0fca5d809_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/300f76c584f4ab86c94fba71df946ead_w40_h15.jpeg',
			codeText: ' http://emos.plurk.com/300f76c584f4ab86c94fba71df946ead_w40_h15.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/eb8c92862c0aa8d12025f14537c448d6_w41_h15.jpeg',
			codeText: ' http://emos.plurk.com/eb8c92862c0aa8d12025f14537c448d6_w41_h15.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/e391ef6fadc57532b5aceebe4eaee0f1_w48_h25.gif',
			codeText: ' http://emos.plurk.com/e391ef6fadc57532b5aceebe4eaee0f1_w48_h25.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/d49b88f5f12305b4b69acef697f93fbd_w48_h48.gif',
			codeText: ' http://emos.plurk.com/d49b88f5f12305b4b69acef697f93fbd_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/c77c5cb44f863252cd7497437fa9d08c_w48_h47.png',
			codeText: ' http://emos.plurk.com/c77c5cb44f863252cd7497437fa9d08c_w48_h47.png ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/cedeae868c9c5ac941712fb0e227391e_w48_h48.gif',
			codeText: ' http://emos.plurk.com/cedeae868c9c5ac941712fb0e227391e_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/38c89c7521e37d9869227c7d2f6ef17e_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/38c89c7521e37d9869227c7d2f6ef17e_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/fa5c2ea7d90face93399e02371769f84_w32_h21.gif',
			codeText: ' http://emos.plurk.com/fa5c2ea7d90face93399e02371769f84_w32_h21.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/207d4a3444791a9ef96e3737d0a47b4a_w48_h47.jpeg',
			codeText: ' http://emos.plurk.com/207d4a3444791a9ef96e3737d0a47b4a_w48_h47.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/73c693b2f62f3bb56212f0a81464b8f4_w48_h45.jpeg',
			codeText: ' http://emos.plurk.com/73c693b2f62f3bb56212f0a81464b8f4_w48_h45.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/822ac3e1ed1a53beb24cae88dbf51213_w48_h48.gif',
			codeText: ' http://emos.plurk.com/822ac3e1ed1a53beb24cae88dbf51213_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/446ac441661200290e4d8d57ed73898e_w43_h43.gif',
			codeText: ' http://emos.plurk.com/446ac441661200290e4d8d57ed73898e_w43_h43.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/e6c8d3cf2f9f12aa518bbc8c5428e075_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/e6c8d3cf2f9f12aa518bbc8c5428e075_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/6ab067b61d05074678888036bdbdd134_w48_h48.gif',
			codeText: ' http://emos.plurk.com/6ab067b61d05074678888036bdbdd134_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/a8b3a8afddce80d2c447d665e5fc86b2_w44_h36.gif',
			codeText: ' http://emos.plurk.com/a8b3a8afddce80d2c447d665e5fc86b2_w44_h36.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/ac3d0e418f84cf65e5c2003c01d2b815_w48_h48.gif',
			codeText: ' http://emos.plurk.com/ac3d0e418f84cf65e5c2003c01d2b815_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/d69dbba0448cde0b06b836fb8dce999c_w47_h47.jpeg',
			codeText: ' http://emos.plurk.com/d69dbba0448cde0b06b836fb8dce999c_w47_h47.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/2c544d0bb6a7472c9b070131a166bd66_w46_h48.jpeg',
			codeText: ' http://emos.plurk.com/2c544d0bb6a7472c9b070131a166bd66_w46_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/8bdf74363993cf26bbf41975afe38778_w48_h48.png',
			codeText: ' http://emos.plurk.com/8bdf74363993cf26bbf41975afe38778_w48_h48.png ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/89711676b4426ed192be3a6316b55579_w48_h48.gif',
			codeText: ' http://emos.plurk.com/89711676b4426ed192be3a6316b55579_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/ff07310727d88b784721eae301ee7b4c_w48_h48.gif',
			codeText: ' http://emos.plurk.com/ff07310727d88b784721eae301ee7b4c_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/30df0c95af31f005fd9bcc79a208ec19_w46_h48.png',
			codeText: ' http://emos.plurk.com/30df0c95af31f005fd9bcc79a208ec19_w46_h48.png ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/019930f9bc74db7dae340395b7f3df99_w48_h48.gif',
			codeText: ' http://emos.plurk.com/019930f9bc74db7dae340395b7f3df99_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/d07581c568cf21fdf4e26071a862dda7_w48_h48.gif',
			codeText: ' http://emos.plurk.com/d07581c568cf21fdf4e26071a862dda7_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/251fec8592c7759faa7f1fd78ff89450_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/251fec8592c7759faa7f1fd78ff89450_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/8656def252e22a8d5a983520a42357dc_w48_h48.gif',
			codeText: ' http://emos.plurk.com/8656def252e22a8d5a983520a42357dc_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/c0e14de636e51d1e8750c5ffe03ea3f3_w48_h48.gif',
			codeText: ' http://emos.plurk.com/c0e14de636e51d1e8750c5ffe03ea3f3_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/b9c23daacf8a338a87bc744dd49177c9_w48_h48.gif',
			codeText: ' http://emos.plurk.com/b9c23daacf8a338a87bc744dd49177c9_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/52febbc0f975d20d42cb1f9fc1f2d82b_w48_h48.gif',
			codeText: ' http://emos.plurk.com/52febbc0f975d20d42cb1f9fc1f2d82b_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/330b4f0b1366d0f0c9551af4b0057641_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/330b4f0b1366d0f0c9551af4b0057641_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/0a991ce4b09ba24dbd0b94203c27a960_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/0a991ce4b09ba24dbd0b94203c27a960_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/ff9aa4fc93231bc6744a1315b399f546_w48_h48.gif',
			codeText: ' http://emos.plurk.com/ff9aa4fc93231bc6744a1315b399f546_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/caa42288912f172d26591d222351edef_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/caa42288912f172d26591d222351edef_w48_h48.jpeg ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/ced75268cb3fdeeb6bbee8bd5021208e_w48_h48.gif',
			codeText: ' http://emos.plurk.com/ced75268cb3fdeeb6bbee8bd5021208e_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/f524e775f8b1722260a770a9f8476e1f_w48_h48.png',
			codeText: ' http://emos.plurk.com/f524e775f8b1722260a770a9f8476e1f_w48_h48.png ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/3311f6444daa03c6dfb0a9f5e4669425_w48_h48.gif',
			codeText: ' http://emos.plurk.com/3311f6444daa03c6dfb0a9f5e4669425_w48_h48.gif ',
			type: '雜'
		},

		{
			imgUrl: 'http://emos.plurk.com/3b15fcc331b20fd241ed450dafcc3cbd_w48_h48.gif',
			codeText: ' http://emos.plurk.com/3b15fcc331b20fd241ed450dafcc3cbd_w48_h48.gif ',
			type: '雜'
		},
//===================================鳥鳥====================================


		{
			imgUrl: 'https://emos.plurk.com/f42096f83c4e2fc3cc886d050b470f8e_w48_h48.gif',
			codeText: ' https://emos.plurk.com/f42096f83c4e2fc3cc886d050b470f8e_w48_h48.gif ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/5352741c4a5d521a4ea45e5f796469e5_w48_h48.gif',
			codeText: ' https://emos.plurk.com/5352741c4a5d521a4ea45e5f796469e5_w48_h48.gif ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/d85024154050feff96b78d118703fbe2_w48_h48.gif',
			codeText: ' https://emos.plurk.com/d85024154050feff96b78d118703fbe2_w48_h48.gif ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/b7a8f121a88877f6d991da67296ca461_w47_h47.gif',
			codeText: ' https://emos.plurk.com/b7a8f121a88877f6d991da67296ca461_w47_h47.gif ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/5e039b61dfb24bd6470988e1b5b36e50_w48_h48.gif',
			codeText: ' https://emos.plurk.com/5e039b61dfb24bd6470988e1b5b36e50_w48_h48.gif ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/f028dd6b857513a8f86373d8a69368af_w48_h48.gif',
			codeText: ' https://emos.plurk.com/f028dd6b857513a8f86373d8a69368af_w48_h48.gif ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/23cbbc60ee109badecb087472a93fdfa_w48_h48.gif',
			codeText: ' https://emos.plurk.com/23cbbc60ee109badecb087472a93fdfa_w48_h48.gif ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/bffa5d8ed221cee6f5e7abfb57ad1d33_w48_h48.gif',
			codeText: ' https://emos.plurk.com/bffa5d8ed221cee6f5e7abfb57ad1d33_w48_h48.gif ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/635c3b248b4a973370e6f0d554c55c3b_w40_h40.gif',
			codeText: ' https://emos.plurk.com/635c3b248b4a973370e6f0d554c55c3b_w40_h40.gif	 ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/1b9cf67a1571ce995612b8e70873286c_w45_h45.gif',
			codeText: ' https://emos.plurk.com/1b9cf67a1571ce995612b8e70873286c_w45_h45.gif ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/b47864c19b72b3d66b67ddadf73c5926_w45_h45.gif',
			codeText: ' https://emos.plurk.com/b47864c19b72b3d66b67ddadf73c5926_w45_h45.gif ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/c3bd588d2c53c5cc180eced68e42fb2f_w45_h45.gif',
			codeText: ' https://emos.plurk.com/c3bd588d2c53c5cc180eced68e42fb2f_w45_h45.gif ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/b45d1122dd2bdf9b81cb26540a3ddfab_w45_h45.png',
			codeText: ' https://emos.plurk.com/b45d1122dd2bdf9b81cb26540a3ddfab_w45_h45.png ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/c7050bde86e14f139d7a261110f11d70_w45_h45.gif',
			codeText: ' https://emos.plurk.com/c7050bde86e14f139d7a261110f11d70_w45_h45.gif ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/12fb083b11216e85193e3491f8a2cd3e_w48_h48.jpeg',
			codeText: ' https://emos.plurk.com/12fb083b11216e85193e3491f8a2cd3e_w48_h48.jpeg ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/f4e0bd262c286fb79a5b8c90cd1c5659_w48_h48.gif',
			codeText: ' https://emos.plurk.com/f4e0bd262c286fb79a5b8c90cd1c5659_w48_h48.gif ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/7d4c56a557daffc821add571455fdd91_w48_h48.png',
			codeText: ' https://emos.plurk.com/7d4c56a557daffc821add571455fdd91_w48_h48.png ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/66689c12222228311ddd718212f35491_w48_h48.jpeg',
			codeText: ' https://emos.plurk.com/66689c12222228311ddd718212f35491_w48_h48.jpeg ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/eaba0dd208457616ca3a2314023ab692_w48_h48.gif',
			codeText: ' https://emos.plurk.com/eaba0dd208457616ca3a2314023ab692_w48_h48.gif ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/e980a9cdcf52fbc97df2de4edaeec3d1_w48_h48.gif',
			codeText: ' https://emos.plurk.com/e980a9cdcf52fbc97df2de4edaeec3d1_w48_h48.gif ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/0ef0120b1d682d8bacc9b9dec8bd3a24_w47_h29.gif',
			codeText: ' https://emos.plurk.com/0ef0120b1d682d8bacc9b9dec8bd3a24_w47_h29.gif ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/a655ef14b6e740312621b4c167f5e5a8_w48_h44.jpeg',
			codeText: ' https://emos.plurk.com/a655ef14b6e740312621b4c167f5e5a8_w48_h44.jpeg ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/3dcd62727006a7a6266532368536f00e_w48_h36.gif',
			codeText: ' https://emos.plurk.com/3dcd62727006a7a6266532368536f00e_w48_h36.gif ',
			type: '鳥鳥'
		},

		{
			imgUrl: 'https://emos.plurk.com/ee7fb52ff4b1789f4a8f152eb6aed0ce_w45_h45.gif',
			codeText: ' https://emos.plurk.com/ee7fb52ff4b1789f4a8f152eb6aed0ce_w45_h45.gif ',
			type: '鳥鳥'
		},




//==================================LNG====================================
		

		{
			imgUrl: 'https://emos.plurk.com/2094530b9aa726e03cdae6006c1681d5_w48_h48.gif',
			codeText: ' https://emos.plurk.com/2094530b9aa726e03cdae6006c1681d5_w48_h48.gif ',
			type: 'LNG'
		},

		{
			imgUrl: 'https://emos.plurk.com/2e1f8b2c7bdbb2951dcb7e1584f249fc_w48_h48.gif',
			codeText: ' https://emos.plurk.com/2e1f8b2c7bdbb2951dcb7e1584f249fc_w48_h48.gif ',
			type: 'LNG'
		},

		{
			imgUrl: 'https://emos.plurk.com/6957a56a1087fdf44e2a82dc6c7ad57c_w47_h48.jpeg',
			codeText: ' https://emos.plurk.com/6957a56a1087fdf44e2a82dc6c7ad57c_w47_h48.jpeg ',
			type: 'LNG'
		},

		{
			imgUrl: 'https://emos.plurk.com/1cd3480b547f0241f52e0b75e345c8ce_w48_h48.jpeg',
			codeText: ' https://emos.plurk.com/1cd3480b547f0241f52e0b75e345c8ce_w48_h48.jpeg ',
			type: 'LNG'
		},

		{
			imgUrl: 'http://emos.plurk.com/531206b3859727392a07804e120a1ed7_w48_h38.gif',
			codeText: ' http://emos.plurk.com/531206b3859727392a07804e120a1ed7_w48_h38.gif ',
			type: 'LNG'
		},

		{
			imgUrl: 'http://emos.plurk.com/d5d8b9a0b0883fe440ef563be1f1b07c_w48_h48.gif',
			codeText: ' http://emos.plurk.com/d5d8b9a0b0883fe440ef563be1f1b07c_w48_h48.gif ',
			type: 'LNG'
		},

		{
			imgUrl: 'http://emos.plurk.com/924775d33dce30bd8521743f6bacae77_w48_h48.gif',
			codeText: ' http://emos.plurk.com/924775d33dce30bd8521743f6bacae77_w48_h48.gif ',
			type: 'LNG'
		},

		{
			imgUrl: 'http://emos.plurk.com/f4fd6f0193765cb177415e1d5b7d9989_w48_h48.gif',
			codeText: ' http://emos.plurk.com/f4fd6f0193765cb177415e1d5b7d9989_w48_h48.gif ',
			type: 'LNG'
		},

		{
			imgUrl: 'http://emos.plurk.com/6d386d60f72a455ba18e7e251eb3af16_w48_h48.gif',
			codeText: ' http://emos.plurk.com/6d386d60f72a455ba18e7e251eb3af16_w48_h48.gif ',
			type: 'LNG'
		},

		{
			imgUrl: 'http://emos.plurk.com/9a43885ffce9588001b36d9242dfddfb_w48_h48.gif',
			codeText: ' http://emos.plurk.com/9a43885ffce9588001b36d9242dfddfb_w48_h48.gif ',
			type: 'LNG'
		},

		{
			imgUrl: 'http://emos.plurk.com/b6ae48eed5b91636caf7c2b119e404a9_w48_h48.gif',
			codeText: ' http://emos.plurk.com/b6ae48eed5b91636caf7c2b119e404a9_w48_h48.gif ',
			type: 'LNG'
		},

		{
			imgUrl: 'http://emos.plurk.com/16ab76f759440fda4134b39e0f6855bd_w48_h48.gif',
			codeText: ' http://emos.plurk.com/16ab76f759440fda4134b39e0f6855bd_w48_h48.gif ',
			type: 'LNG'
		},

		{
			imgUrl: 'http://emos.plurk.com/5b3427454d9572118d7815b6bfc4b7e6_w48_h48.gif',
			codeText: ' http://emos.plurk.com/5b3427454d9572118d7815b6bfc4b7e6_w48_h48.gif ',
			type: 'LNG'
		},

		{
			imgUrl: 'http://emos.plurk.com/4f977afb35a48a01c57bdf93fecd1526_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/4f977afb35a48a01c57bdf93fecd1526_w48_h48.jpeg ',
			type: 'LNG'
		},

		{
			imgUrl: 'http://emos.plurk.com/c0801a46814ba9306b18bb23a967e8a6_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/c0801a46814ba9306b18bb23a967e8a6_w48_h48.jpeg ',
			type: 'LNG'
		},

		{
			imgUrl: 'http://emos.plurk.com/8e054ff074e8f0ce1aaa6f53a054d04b_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/8e054ff074e8f0ce1aaa6f53a054d04b_w48_h48.jpeg ',
			type: 'LNG'
		},

		{
			imgUrl: 'http://emos.plurk.com/6e074f44eaee8d32511482458fba1f9c_w45_h48.png',
			codeText: ' http://emos.plurk.com/6e074f44eaee8d32511482458fba1f9c_w45_h48.png ',
			type: 'LNG'
		},


		{
			imgUrl: 'http://emos.plurk.com/d84ddea0b49ae127ec3db0ec0ab49981_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/d84ddea0b49ae127ec3db0ec0ab49981_w48_h48.jpeg ',
			type: 'LNG'
		},

		{
			imgUrl: 'http://emos.plurk.com/ae5522a5caed2af4b56551a255ee391c_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/ae5522a5caed2af4b56551a255ee391c_w48_h48.jpeg ',
			type: 'LNG'
		},

//==================================LoveLive====================================

		{
			imgUrl: 'https://emos.plurk.com/19253839ed147f85dc431bebbb787455_w48_h48.gif',
			codeText: ' https://emos.plurk.com/19253839ed147f85dc431bebbb787455_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/10e811fc5b6a1fa7378059b49cbc5398_w48_h48.gif',
			codeText: ' https://emos.plurk.com/10e811fc5b6a1fa7378059b49cbc5398_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/4bc04aee6924ee17fd5e9212e9f99856_w46_h48.gif',
			codeText: ' https://emos.plurk.com/4bc04aee6924ee17fd5e9212e9f99856_w46_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/bcf93d7c1f57ee04e8ea4a011aa41206_w48_h48.gif',
			codeText: ' https://emos.plurk.com/bcf93d7c1f57ee04e8ea4a011aa41206_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/3b6d17dd85607c63d42ad38fec9ece82_w48_h48.gif',
			codeText: ' https://emos.plurk.com/3b6d17dd85607c63d42ad38fec9ece82_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/ac9c5f79f834302469f9972980718508_w48_h48.gif',
			codeText: ' https://emos.plurk.com/ac9c5f79f834302469f9972980718508_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/ef269bc5ad029e80c1819660cc978247_w48_h48.gif',
			codeText: ' https://emos.plurk.com/ef269bc5ad029e80c1819660cc978247_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/1eadaab7b80b9894a95ad46affa7b80c_w48_h48.gif',
			codeText: ' https://emos.plurk.com/1eadaab7b80b9894a95ad46affa7b80c_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/b5f17b0f8c6c0169bd2371c0930b98a9_w48_h48.gif',
			codeText: ' https://emos.plurk.com/b5f17b0f8c6c0169bd2371c0930b98a9_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/63cc3cd3d534270f668fab380d51e55b_w48_h48.gif',
			codeText: ' https://emos.plurk.com/63cc3cd3d534270f668fab380d51e55b_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/aa066a7894e4af1f8bbc57d50fe9fcbc_w48_h48.gif',
			codeText: ' https://emos.plurk.com/aa066a7894e4af1f8bbc57d50fe9fcbc_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/c306beb2c6ee2fed6abc8f4051de81e1_w48_h48.gif',
			codeText: ' https://emos.plurk.com/c306beb2c6ee2fed6abc8f4051de81e1_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/1ef5a3c7b7372a34e8a5b5b8756b6c56_w48_h48.gif',
			codeText: ' https://emos.plurk.com/1ef5a3c7b7372a34e8a5b5b8756b6c56_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/1146e55ef42e9fa90982f65171610c75_w48_h48.gif',
			codeText: ' https://emos.plurk.com/1146e55ef42e9fa90982f65171610c75_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/d7a7a38c44c15f8865ef7e32d365ee47_w48_h48.gif',
			codeText: ' https://emos.plurk.com/d7a7a38c44c15f8865ef7e32d365ee47_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/b4abea20a6f778f3d01c94003cbe4b34_w48_h48.gif',
			codeText: ' https://emos.plurk.com/b4abea20a6f778f3d01c94003cbe4b34_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/d4f0b07e486aaaf81800898adf243963_w48_h48.gif',
			codeText: ' https://emos.plurk.com/d4f0b07e486aaaf81800898adf243963_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/d6d9a292461bead7acd74e77afe4782c_w48_h48.gif',
			codeText: ' https://emos.plurk.com/d6d9a292461bead7acd74e77afe4782c_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/2c38df1e62df39f54d1ae9949d397838_w48_h48.gif',
			codeText: ' https://emos.plurk.com/2c38df1e62df39f54d1ae9949d397838_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/b23749545a64f479d2b4df06a9f24a82_w48_h48.gif',
			codeText: ' https://emos.plurk.com/b23749545a64f479d2b4df06a9f24a82_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/d29f75b4b8daf71fbb12288d67e6ce8d_w48_h48.gif',
			codeText: ' https://emos.plurk.com/d29f75b4b8daf71fbb12288d67e6ce8d_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/2172b4c97fdb0103c5477fd6c3f8734e_w48_h48.gif',
			codeText: ' https://emos.plurk.com/2172b4c97fdb0103c5477fd6c3f8734e_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/8bfdd1beb4856ab400081408c759e908_w48_h48.gif',
			codeText: ' https://emos.plurk.com/8bfdd1beb4856ab400081408c759e908_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/67bda16712bedc9da0226a760151d7f6_w48_h48.gif',
			codeText: ' https://emos.plurk.com/67bda16712bedc9da0226a760151d7f6_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/2b933ac0dc38e4f9d8c24c13945a8be0_w48_h48.jpeg',
			codeText: ' https://emos.plurk.com/2b933ac0dc38e4f9d8c24c13945a8be0_w48_h48.jpeg ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/4e5f0e0de4a15834069eefd217900be1_w48_h48.jpeg',
			codeText: ' https://emos.plurk.com/4e5f0e0de4a15834069eefd217900be1_w48_h48.jpeg ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/db4a66c3ba15579ee62e15e961e1f3d0_w48_h48.gif',
			codeText: ' https://emos.plurk.com/db4a66c3ba15579ee62e15e961e1f3d0_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/be94d86cc4af8fb6c33712444e3209c6_w48_h48.gif',
			codeText: ' https://emos.plurk.com/be94d86cc4af8fb6c33712444e3209c6_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/77889014cb03e6d945efd9b79e9cded8_w48_h48.gif',
			codeText: ' https://emos.plurk.com/77889014cb03e6d945efd9b79e9cded8_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/32321d6eab637a4d46d2c31ea6d9c796_w48_h48.gif',
			codeText: ' https://emos.plurk.com/32321d6eab637a4d46d2c31ea6d9c796_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/afa64dd4c14a867496b78e1ec2f7df61_w48_h48.gif',
			codeText: ' https://emos.plurk.com/afa64dd4c14a867496b78e1ec2f7df61_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/98724d9901d062dac8570a809431be5a_w48_h48.gif',
			codeText: ' https://emos.plurk.com/98724d9901d062dac8570a809431be5a_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/75c38dd03fac2ac2b9b716b9284b3afd_w48_h48.gif',
			codeText: ' https://emos.plurk.com/75c38dd03fac2ac2b9b716b9284b3afd_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/550882cb7ece238dc9fdcaefe33f67d2_w48_h48.gif',
			codeText: ' https://emos.plurk.com/550882cb7ece238dc9fdcaefe33f67d2_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/a390745c53ad8aeeaf81037e2dc3d2dd_w48_h48.gif',
			codeText: ' https://emos.plurk.com/a390745c53ad8aeeaf81037e2dc3d2dd_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/c9773043ce1a6be417eab02a677d9d22_w48_h48.gif',
			codeText: ' https://emos.plurk.com/c9773043ce1a6be417eab02a677d9d22_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/54126a577e68fef61277760bb72808bd_w48_h48.gif',
			codeText: ' https://emos.plurk.com/54126a577e68fef61277760bb72808bd_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/91d7434613cd38ecd2aff6e8f5961af8_w48_h48.gif',
			codeText: ' https://emos.plurk.com/91d7434613cd38ecd2aff6e8f5961af8_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/f2e0f091ea78ecead2e55135cc63d2e5_w48_h48.gif',
			codeText: ' https://emos.plurk.com/f2e0f091ea78ecead2e55135cc63d2e5_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/64c54f43f26a390fc38df327af6e8c54_w48_h48.gif',
			codeText: ' https://emos.plurk.com/64c54f43f26a390fc38df327af6e8c54_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/47d515ecfbcacc1869d3b23d2e3d0d66_w48_h48.gif',
			codeText: ' https://emos.plurk.com/47d515ecfbcacc1869d3b23d2e3d0d66_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/439bc14169b1c27cb3aba4d67d6b4085_w48_h37.gif',
			codeText: ' https://emos.plurk.com/439bc14169b1c27cb3aba4d67d6b4085_w48_h37.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/e7dba4bed33522d5f01f4b9eeacf3645_w48_h48.gif',
			codeText: ' https://emos.plurk.com/e7dba4bed33522d5f01f4b9eeacf3645_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/f18b300094d1b6464030fad3219542c3_w48_h48.jpeg',
			codeText: ' https://emos.plurk.com/f18b300094d1b6464030fad3219542c3_w48_h48.jpeg ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'http://emos.plurk.com/2230766f1498e5a840ea5b1e8c47698f_w47_h39.jpeg',
			codeText: ' http://emos.plurk.com/2230766f1498e5a840ea5b1e8c47698f_w47_h39.jpeg ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/5d082ed06e49c44b966df61c9ca35be3_w48_h48.jpeg',
			codeText: ' https://emos.plurk.com/5d082ed06e49c44b966df61c9ca35be3_w48_h48.jpeg ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'http://emos.plurk.com/5e0fe37e59fb778c89f412d490813972_w48_h48.png',
			codeText: ' http://emos.plurk.com/5e0fe37e59fb778c89f412d490813972_w48_h48.png ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'http://emos.plurk.com/6b824ae5982ad387e17d0f00498f2a95_w48_h45.png',
			codeText: ' http://emos.plurk.com/6b824ae5982ad387e17d0f00498f2a95_w48_h45.png ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'http://emos.plurk.com/f1f451109a4bf28c6c3b652fc28a9ba9_w48_h48.gif',
			codeText: ' http://emos.plurk.com/f1f451109a4bf28c6c3b652fc28a9ba9_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'http://emos.plurk.com/31391777f296f8d96d83afbc9953e97a_w48_h48.gif',
			codeText: ' http://emos.plurk.com/31391777f296f8d96d83afbc9953e97a_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/d1688395d34cc24fdd47f735526a0f37_w48_h48.gif',
			codeText: ' https://emos.plurk.com/d1688395d34cc24fdd47f735526a0f37_w48_h48.gif ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'http://emos.plurk.com/0bca674ee2341ff1eb52fbad8d1ea40f_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/0bca674ee2341ff1eb52fbad8d1ea40f_w48_h48.jpeg ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/5d207829a60e693f7422921518a70ea7_w48_h48.jpeg',
			codeText: ' https://emos.plurk.com/5d207829a60e693f7422921518a70ea7_w48_h48.jpeg ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'http://emos.plurk.com/7b8001e9d0af5d0bf36154dafe8358c2_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/7b8001e9d0af5d0bf36154dafe8358c2_w48_h48.jpeg ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'https://emos.plurk.com/8852d38c05162f2f1f7d3533633332e9_w48_h48.jpeg',
			codeText: ' https://emos.plurk.com/8852d38c05162f2f1f7d3533633332e9_w48_h48.jpeg ',
			type: 'LoveLive'
		},

		{
			imgUrl: 'http://emos.plurk.com/c3a12259e03fa94f45527ea7eccb5bc0_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/c3a12259e03fa94f45527ea7eccb5bc0_w48_h48.jpeg ',
			type: 'LoveLive'
		},



//==================================貓貓====================================


		{
			imgUrl: 'https://emos.plurk.com/0696ed5fc0bdbe656cb7cea08a6b4cfc_w48_h48.jpeg',
			codeText: ' https://emos.plurk.com/0696ed5fc0bdbe656cb7cea08a6b4cfc_w48_h48.jpeg ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/8c3b051a5528ae8a48ecc70117174c35_w48_h48.gif',
			codeText: ' http://emos.plurk.com/8c3b051a5528ae8a48ecc70117174c35_w48_h48.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/4615a15905e11efc354a8b54368846b8_w48_h48.gif',
			codeText: ' http://emos.plurk.com/4615a15905e11efc354a8b54368846b8_w48_h48.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/e01cb44b107ef3befde79313894358c4_w48_h48.gif',
			codeText: ' http://emos.plurk.com/e01cb44b107ef3befde79313894358c4_w48_h48.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/b581ef36c060580beec91592a8e8ff23_w48_h48.gif',
			codeText: ' http://emos.plurk.com/b581ef36c060580beec91592a8e8ff23_w48_h48.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/673d7ca36f50fab09ee57a4c1c2d276c_w48_h48.gif',
			codeText: ' http://emos.plurk.com/673d7ca36f50fab09ee57a4c1c2d276c_w48_h48.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/9868166830e46d94c65a79aa9a6503ed_w48_h48.gif',
			codeText: ' http://emos.plurk.com/9868166830e46d94c65a79aa9a6503ed_w48_h48.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/8582496e804e145f17f4230285f81265_w48_h48.gif',
			codeText: ' http://emos.plurk.com/8582496e804e145f17f4230285f81265_w48_h48.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/a68a35af50b1e562416e60ea68dda498_w48_h48.gif',
			codeText: ' http://emos.plurk.com/a68a35af50b1e562416e60ea68dda498_w48_h48.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/4320bfdfae0e17f4708f51be8af1fcd5_w48_h48.gif',
			codeText: ' http://emos.plurk.com/4320bfdfae0e17f4708f51be8af1fcd5_w48_h48.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/29be01757f1b36329d144acdbfcc739e_w48_h48.gif',
			codeText: ' http://emos.plurk.com/29be01757f1b36329d144acdbfcc739e_w48_h48.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/39b6d13fffe97255fb5f19d0369aa5bb_w48_h48.gif',
			codeText: ' http://emos.plurk.com/39b6d13fffe97255fb5f19d0369aa5bb_w48_h48.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/442260906945dab82776106ed15ad2da_w48_h48.gif',
			codeText: ' http://emos.plurk.com/442260906945dab82776106ed15ad2da_w48_h48.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/46d931180310950e8e12c4f135775fb0_w48_h48.gif',
			codeText: ' http://emos.plurk.com/46d931180310950e8e12c4f135775fb0_w48_h48.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/760540e7217b431ea6df56a265cf241f_w48_h46.gif',
			codeText: ' http://emos.plurk.com/760540e7217b431ea6df56a265cf241f_w48_h46.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/1e6f87d34d9dd000ddc67a1988fa5719_w48_h48.gif',
			codeText: ' http://emos.plurk.com/1e6f87d34d9dd000ddc67a1988fa5719_w48_h48.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/5130f10f68a8443f3bdd5e1af09c5205_w48_h48.gif',
			codeText: ' http://emos.plurk.com/5130f10f68a8443f3bdd5e1af09c5205_w48_h48.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/1369406ba64f525741c9c5692825c30e_w48_h29.gif',
			codeText: ' http://emos.plurk.com/1369406ba64f525741c9c5692825c30e_w48_h29.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/3a1834e06fc4646f4e1e7795da7629d3_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/3a1834e06fc4646f4e1e7795da7629d3_w48_h48.jpeg ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/e4e76acc514bacb859674ee372c2ef01_w48_h48.gif',
			codeText: ' http://emos.plurk.com/e4e76acc514bacb859674ee372c2ef01_w48_h48.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/88ed83bd7af3b5603c74f067d3f912ce_w48_h48.gif',
			codeText: ' http://emos.plurk.com/88ed83bd7af3b5603c74f067d3f912ce_w48_h48.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/a7df00ff8ccaf54c8b124bef6bb4bb88_w48_h48.gif',
			codeText: ' http://emos.plurk.com/a7df00ff8ccaf54c8b124bef6bb4bb88_w48_h48.gif ',
			type: '貓貓'
		},

		{
			imgUrl: 'http://emos.plurk.com/a2b29fcdf217af1ff374509241682827_w48_h48.gif',
			codeText: ' http://emos.plurk.com/a2b29fcdf217af1ff374509241682827_w48_h48.gif ',
			type: '貓貓'
		},

//==================================出來玩====================================


		{
			imgUrl: 'http://emos.plurk.com/6c793964247240d782faad53c70b7749_w48_h41.png',
			codeText: ' http://emos.plurk.com/6c793964247240d782faad53c70b7749_w48_h41.png ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/5d92f4dfc2aa627591641e0481bbb440_w47_h47.jpeg',
			codeText: ' http://emos.plurk.com/5d92f4dfc2aa627591641e0481bbb440_w47_h47.jpeg ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/42c7a42e2ffe1cdee15aa02c7f02315c_w48_h47.png',
			codeText: ' http://emos.plurk.com/42c7a42e2ffe1cdee15aa02c7f02315c_w48_h47.png ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/add37b50e9de5d680c44d4ac5326ee8b_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/add37b50e9de5d680c44d4ac5326ee8b_w48_h48.jpeg ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/b8fc237d84d5b54a7acb5a2d5d52a2e5_w47_h41.png',
			codeText: ' http://emos.plurk.com/b8fc237d84d5b54a7acb5a2d5d52a2e5_w47_h41.png ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/088619da22e8abce25756dd5c619247d_w48_h48.gif',
			codeText: ' http://emos.plurk.com/088619da22e8abce25756dd5c619247d_w48_h48.gif ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/173047a9d9ddacdffc705050fdf4f958_w48_h48.png',
			codeText: ' http://emos.plurk.com/173047a9d9ddacdffc705050fdf4f958_w48_h48.png ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/dc30d9e38a8b16a6e6fff92c4afa2bb6_w48_h48.png',
			codeText: ' http://emos.plurk.com/dc30d9e38a8b16a6e6fff92c4afa2bb6_w48_h48.png ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/b56639a6d4a304ec269f035c7e0d98e6_w48_h48.gif',
			codeText: ' http://emos.plurk.com/b56639a6d4a304ec269f035c7e0d98e6_w48_h48.gif ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/cccb60588fd9563a3567eb7451ac9b34_w48_h48.png',
			codeText: ' http://emos.plurk.com/cccb60588fd9563a3567eb7451ac9b34_w48_h48.png ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/81ca1e86699cd5acaa7b95891ca9f69a_w48_h48.png',
			codeText: ' http://emos.plurk.com/81ca1e86699cd5acaa7b95891ca9f69a_w48_h48.png ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/94743a0a739d5eea3888abb2f4f82b1f_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/94743a0a739d5eea3888abb2f4f82b1f_w48_h48.jpeg ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/a202aa7acdbd11243f80fcd799e8b85a_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/a202aa7acdbd11243f80fcd799e8b85a_w48_h48.jpeg ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/ef837ba57f7b8973fa0812f0caa6c54c_w48_h48.png',
			codeText: ' http://emos.plurk.com/ef837ba57f7b8973fa0812f0caa6c54c_w48_h48.png ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/4237929608f87fd5e2dfa43d84291cc7_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/4237929608f87fd5e2dfa43d84291cc7_w48_h48.jpeg ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/9a1fda1aad428060a31b7b6b6526cc00_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/9a1fda1aad428060a31b7b6b6526cc00_w48_h48.jpeg ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/99fb7d75336568167b901b4e1c6fa508_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/99fb7d75336568167b901b4e1c6fa508_w48_h48.jpeg ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/d677d8e26ef79cf1492f3ce6a4b1eed0_w47_h47.jpeg',
			codeText: ' http://emos.plurk.com/d677d8e26ef79cf1492f3ce6a4b1eed0_w47_h47.jpeg ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/96e3f6cf82374b1532c2635109ee1c75_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/96e3f6cf82374b1532c2635109ee1c75_w48_h48.jpeg ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/446a198c7cda036c94cd265b6f197f2f_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/446a198c7cda036c94cd265b6f197f2f_w48_h48.jpeg ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/d6bf8e6a1a01374c88ed58c75508c196_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/d6bf8e6a1a01374c88ed58c75508c196_w48_h48.jpeg ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/f1d6d9e6794ebabb282fcaaac31f82c4_w48_h39.jpeg',
			codeText: ' http://emos.plurk.com/f1d6d9e6794ebabb282fcaaac31f82c4_w48_h39.jpeg ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/0d9fd95336a8170d239f2faf2178ff17_w48_h48.gif',
			codeText: ' http://emos.plurk.com/0d9fd95336a8170d239f2faf2178ff17_w48_h48.gif ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/e57ef21b8e02642e9692551ce6fac9b5_w48_h48.gif',
			codeText: ' http://emos.plurk.com/e57ef21b8e02642e9692551ce6fac9b5_w48_h48.gif ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/7c06dde3dbfe968ca647271c4de6c57d_w48_h48.gif',
			codeText: ' http://emos.plurk.com/7c06dde3dbfe968ca647271c4de6c57d_w48_h48.gif ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/9d1b6af8e7baf7975308d4e72eb989ee_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/9d1b6af8e7baf7975308d4e72eb989ee_w48_h48.jpeg ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/39f396d75ef4d1bcc185268f74e71c9d_w48_h48.png',
			codeText: ' http://emos.plurk.com/39f396d75ef4d1bcc185268f74e71c9d_w48_h48.png ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/06e37f2ce5bedaae9aad509a996bebb1_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/06e37f2ce5bedaae9aad509a996bebb1_w48_h48.jpeg ',
			type: '出來玩'
		},

		{
			imgUrl: 'http://emos.plurk.com/9b91fa78ca7cd07c60975076cb93b9b3_w48_h40.png',
			codeText: ' http://emos.plurk.com/9b91fa78ca7cd07c60975076cb93b9b3_w48_h40.png ',
			type: '出來玩'
		},


//==================================Frozen=================================

		{
			imgUrl: 'http://emos.plurk.com/4e33e2fe7db9bb7c9b37932d5dcc99d7_w48_h48.gif',
			codeText: ' http://emos.plurk.com/4e33e2fe7db9bb7c9b37932d5dcc99d7_w48_h48.gif ',
			type: 'Frozen'
		},

		{
			imgUrl: 'http://emos.plurk.com/35b3c7238272b777bded7b8705c0e132_w48_h45.gif',
			codeText: ' http://emos.plurk.com/35b3c7238272b777bded7b8705c0e132_w48_h45.gif ',
			type: 'Frozen'
		},

		{
			imgUrl: 'http://emos.plurk.com/1a537d9b819d8e16f3e595e9024878c3_w48_h48.gif',
			codeText: ' http://emos.plurk.com/1a537d9b819d8e16f3e595e9024878c3_w48_h48.gif ',
			type: 'Frozen'
		},

		{
			imgUrl: 'http://emos.plurk.com/b1d3b9a4da4c1b9de6fdb6aefd07c13e_w48_h48.gif',
			codeText: ' http://emos.plurk.com/b1d3b9a4da4c1b9de6fdb6aefd07c13e_w48_h48.gif ',
			type: 'Frozen'
		},

		{
			imgUrl: 'http://emos.plurk.com/ed4691300f9dc7c5af2fec7ec5ecba0b_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/ed4691300f9dc7c5af2fec7ec5ecba0b_w48_h48.jpeg ',
			type: 'Frozen'
		},

		{
			imgUrl: 'http://emos.plurk.com/aadcdf65aa1101ddb7b95265f75873aa_w48_h48.gif',
			codeText: ' http://emos.plurk.com/aadcdf65aa1101ddb7b95265f75873aa_w48_h48.gif ',
			type: 'Frozen'
		},

		{
			imgUrl: 'http://emos.plurk.com/25b4bcfe8a7edad52e6ed6ed248408b5_w48_h48.gif',
			codeText: ' http://emos.plurk.com/25b4bcfe8a7edad52e6ed6ed248408b5_w48_h48.gif ',
			type: 'Frozen'
		},

		{
			imgUrl: 'http://emos.plurk.com/14591979d249e05b1490410fb46e5240_w48_h48.gif',
			codeText: ' http://emos.plurk.com/14591979d249e05b1490410fb46e5240_w48_h48.gif ',
			type: 'Frozen'
		},


		{
			imgUrl: 'http://emos.plurk.com/6614fbc54ca9b97c52c4bd4fa641f429_w48_h48.gif',
			codeText: ' http://emos.plurk.com/6614fbc54ca9b97c52c4bd4fa641f429_w48_h48.gif ',
			type: 'Frozen'
		},

		{
			imgUrl: 'http://emos.plurk.com/69327a38a9a78775a76b49a2e72d6793_w48_h48.gif',
			codeText: ' http://emos.plurk.com/69327a38a9a78775a76b49a2e72d6793_w48_h48.gif ',
			type: 'Frozen'
		},

		{
			imgUrl: 'http://emos.plurk.com/f92ba6d75d42ef018ef597b2f6af4d62_w48_h48.gif',
			codeText: ' http://emos.plurk.com/f92ba6d75d42ef018ef597b2f6af4d62_w48_h48.gif ',
			type: 'Frozen'
		},

		{
			imgUrl: 'http://emos.plurk.com/17fe414ccf4ef78c0606f83fc4fab474_w48_h48.gif',
			codeText: ' http://emos.plurk.com/17fe414ccf4ef78c0606f83fc4fab474_w48_h48.gif ',
			type: 'Frozen'
		},

		{
			imgUrl: 'http://emos.plurk.com/f8cd0a354ffeb4c75b17e9eb69c1aa08_w48_h48.gif',
			codeText: ' http://emos.plurk.com/f8cd0a354ffeb4c75b17e9eb69c1aa08_w48_h48.gif ',
			type: 'Frozen'
		},

		{
			imgUrl: 'http://emos.plurk.com/ac39bc05f8c95da15980c8f6affb4ef5_w48_h42.gif',
			codeText: ' http://emos.plurk.com/ac39bc05f8c95da15980c8f6affb4ef5_w48_h42.gif ',
			type: 'Frozen'
		},

		{
			imgUrl: 'http://emos.plurk.com/30aadcb0d11b77ebd898a2ef76c2a61d_w48_h48.gif',
			codeText: ' http://emos.plurk.com/30aadcb0d11b77ebd898a2ef76c2a61d_w48_h48.gif ',
			type: 'Frozen'
		},

		{
			imgUrl: 'http://emos.plurk.com/d14544fd843c1dc1b9e2d067ede976d5_w48_h48.gif',
			codeText: ' http://emos.plurk.com/d14544fd843c1dc1b9e2d067ede976d5_w48_h48.gif ',
			type: 'Frozen'
		},


		{
			imgUrl: 'http://emos.plurk.com/a5cc6ff0d18bf94acbcce3ceb9b2e802_w48_h44.gif',
			codeText: ' http://emos.plurk.com/a5cc6ff0d18bf94acbcce3ceb9b2e802_w48_h44.gif ',
			type: 'Frozen'
		},

		{
			imgUrl: 'http://emos.plurk.com/5f293a73915f403ff3c771fb527c03af_w48_h48.gif',
			codeText: ' http://emos.plurk.com/5f293a73915f403ff3c771fb527c03af_w48_h48.gif ',
			type: 'Frozen'
		},

//==================================Unlight=================================

		{
			imgUrl: 'http://emos.plurk.com/0f9e39a0ae65eeb68f8d897d8f715aa1_w48_h47.png',
			codeText: ' http://emos.plurk.com/0f9e39a0ae65eeb68f8d897d8f715aa1_w48_h47.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/2493bc9f49cac4c5954b5d41fdb73958_w48_h47.png',
			codeText: ' http://emos.plurk.com/2493bc9f49cac4c5954b5d41fdb73958_w48_h47.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/a7af5cd00e93a2d335491e0134681f2b_w48_h47.png',
			codeText: ' http://emos.plurk.com/a7af5cd00e93a2d335491e0134681f2b_w48_h47.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/d6c4a7278075f9d6103038a62a7a7232_w48_h47.png',
			codeText: ' http://emos.plurk.com/d6c4a7278075f9d6103038a62a7a7232_w48_h47.png ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/c854329596f156f352934e6bf31379e6_w48_h48.gif',
			codeText: ' http://emos.plurk.com/c854329596f156f352934e6bf31379e6_w48_h48.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/f61d2c6c9cfb49d3afe7add9798a2960_w48_h48.png',
			codeText: ' http://emos.plurk.com/f61d2c6c9cfb49d3afe7add9798a2960_w48_h48.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/c8d463e728876a2ed0defae7342e3e5a_w48_h48.png',
			codeText: ' http://emos.plurk.com/c8d463e728876a2ed0defae7342e3e5a_w48_h48.png ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/352677bd71d7b522cf67d08531b1378b_w48_h48.png',
			codeText: ' http://emos.plurk.com/352677bd71d7b522cf67d08531b1378b_w48_h48.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/0ffdddcd3b473cdac00d4fed5fc76b7f_w48_h48.png',
			codeText: ' http://emos.plurk.com/0ffdddcd3b473cdac00d4fed5fc76b7f_w48_h48.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/17235a5a478037dcda75d221af96c1ef_w48_h48.png',
			codeText: ' http://emos.plurk.com/17235a5a478037dcda75d221af96c1ef_w48_h48.png ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/b17e79a0e4ac671a3e37e3c0142ab5f9_w48_h48.png',
			codeText: ' http://emos.plurk.com/b17e79a0e4ac671a3e37e3c0142ab5f9_w48_h48.png ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/9f2ac6e302c68865ef44d605e7fac5c7_w48_h48.png',
			codeText: ' http://emos.plurk.com/9f2ac6e302c68865ef44d605e7fac5c7_w48_h48.png ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/bec94c811eac0013033ba442c9174c97_w48_h48.png',
			codeText: ' http://emos.plurk.com/bec94c811eac0013033ba442c9174c97_w48_h48.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/95d8e5ff1eaa54d59136315fd4522d60_w48_h48.png',
			codeText: ' http://emos.plurk.com/95d8e5ff1eaa54d59136315fd4522d60_w48_h48.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/0b0427909dcb87d097336bacd796f309_w48_h48.bmp',
			codeText: ' http://emos.plurk.com/0b0427909dcb87d097336bacd796f309_w48_h48.bmp ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/2d236c3984ac00c4a1698b382bfc6a56_w48_h48.png',
			codeText: ' http://emos.plurk.com/2d236c3984ac00c4a1698b382bfc6a56_w48_h48.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/253790f55587a8242c350eda35e61f3f_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/253790f55587a8242c350eda35e61f3f_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/363cd7903c4fe62be065edb3433b8b9b_w48_h48.png',
			codeText: ' http://emos.plurk.com/363cd7903c4fe62be065edb3433b8b9b_w48_h48.png ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/dd140fddc9ebdafee94532c78ed549d3_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/dd140fddc9ebdafee94532c78ed549d3_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/b7f0de76d7100fd45f18826a0690afa9_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/b7f0de76d7100fd45f18826a0690afa9_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/167a9b2885be2ef6ab5715ecfb4cdf5d_w48_h48.png',
			codeText: ' http://emos.plurk.com/167a9b2885be2ef6ab5715ecfb4cdf5d_w48_h48.png ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/dc19a80037e7b41168fd5206ea96483e_w48_h48.png',
			codeText: ' http://emos.plurk.com/dc19a80037e7b41168fd5206ea96483e_w48_h48.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/9693a212495b2d9444f1fb36ab2c47a6_w48_h48.png',
			codeText: ' http://emos.plurk.com/9693a212495b2d9444f1fb36ab2c47a6_w48_h48.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/674fa6a6da173ab3e369266426c7ee3b_w48_h48.png',
			codeText: ' http://emos.plurk.com/674fa6a6da173ab3e369266426c7ee3b_w48_h48.png ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/ce322173740acb105becbbd036ba8e1e_w48_h48.png',
			codeText: ' http://emos.plurk.com/ce322173740acb105becbbd036ba8e1e_w48_h48.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/a311946d57b82f919f118e8e8a4cb6dd_w48_h48.gif',
			codeText: ' http://emos.plurk.com/a311946d57b82f919f118e8e8a4cb6dd_w48_h48.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/5b0aa438f6a1ceec68093fb411d41422_w47_h47.jpeg',
			codeText: ' http://emos.plurk.com/5b0aa438f6a1ceec68093fb411d41422_w47_h47.jpeg ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/66b9c8f76bc772025bec4e3c5a81bf55_w47_h47.jpeg',
			codeText: ' http://emos.plurk.com/66b9c8f76bc772025bec4e3c5a81bf55_w47_h47.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/0f26863c5b7208338464106b0ed6bf82_w47_h47.jpeg',
			codeText: ' http://emos.plurk.com/0f26863c5b7208338464106b0ed6bf82_w47_h47.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/4f1390094c93624a93b94e6ba3fd1a73_w47_h47.jpeg',
			codeText: ' http://emos.plurk.com/4f1390094c93624a93b94e6ba3fd1a73_w47_h47.jpeg ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/0f9583d8faa6700d7834d6313268d346_w47_h47.jpeg',
			codeText: ' http://emos.plurk.com/0f9583d8faa6700d7834d6313268d346_w47_h47.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/0b91bf3af6ac03b002e261f7dfb4edec_w47_h47.jpeg',
			codeText: ' http://emos.plurk.com/0b91bf3af6ac03b002e261f7dfb4edec_w47_h47.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/e63bdc2f28617b700c3ce77976f84189_w47_h47.jpeg',
			codeText: ' http://emos.plurk.com/e63bdc2f28617b700c3ce77976f84189_w47_h47.jpeg ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/94a8913d092816430214c06ad063bfb1_w47_h47.jpeg',
			codeText: ' http://emos.plurk.com/94a8913d092816430214c06ad063bfb1_w47_h47.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/48383f4439684e9437b2a9b7b0b0ee1d_w47_h47.jpeg',
			codeText: ' http://emos.plurk.com/48383f4439684e9437b2a9b7b0b0ee1d_w47_h47.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/d8c96320c423e60e61319a10c417bbba_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/d8c96320c423e60e61319a10c417bbba_w48_h48.jpeg ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/9ffb5ebd6a68a78dccc84ed32a83bbc0_w47_h47.jpeg',
			codeText: ' http://emos.plurk.com/9ffb5ebd6a68a78dccc84ed32a83bbc0_w47_h47.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/261f5f2062b066694cf12a0bc84196ce_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/261f5f2062b066694cf12a0bc84196ce_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/fc882fa6a1a54b7cc7b6531c05f0e3d2_w47_h47.jpeg',
			codeText: ' http://emos.plurk.com/fc882fa6a1a54b7cc7b6531c05f0e3d2_w47_h47.jpeg ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/7db0816f920e8aed4cc35683ff8861f5_w38_h38.jpeg',
			codeText: ' http://emos.plurk.com/7db0816f920e8aed4cc35683ff8861f5_w38_h38.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/3894ec17803384de98610c244f31f225_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/3894ec17803384de98610c244f31f225_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/088b6dad005ed608e1bbbeffb489ed73_w48_h48.bmp',
			codeText: ' http://emos.plurk.com/088b6dad005ed608e1bbbeffb489ed73_w48_h48.bmp ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/5e2b605e24de94e236eee80a5d2d6919_w48_h48.gif',
			codeText: ' http://emos.plurk.com/5e2b605e24de94e236eee80a5d2d6919_w48_h48.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/fd04e751f3c10854776b997f93a8aad3_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/fd04e751f3c10854776b997f93a8aad3_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/6f444f352aa55dd2867215692e665a7c_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/6f444f352aa55dd2867215692e665a7c_w48_h48.jpeg ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/3c9c183af28a38e21a7d53593d711682_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/3c9c183af28a38e21a7d53593d711682_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/6ee0d912e92d2d7494e9184f70ca2d44_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/6ee0d912e92d2d7494e9184f70ca2d44_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/3d206e966c77a11304b804aaf9338166_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/3d206e966c77a11304b804aaf9338166_w48_h48.jpeg ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/30844405c044f48ec918f03d62dd9e85_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/30844405c044f48ec918f03d62dd9e85_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/8ba4812db5ca8203dafb07abc808ab0c_w48_h47.gif',
			codeText: ' http://emos.plurk.com/8ba4812db5ca8203dafb07abc808ab0c_w48_h47.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/a0b39492921905921ac56df822946cb2_w48_h47.gif',
			codeText: ' http://emos.plurk.com/a0b39492921905921ac56df822946cb2_w48_h47.gif ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/2ac6c17f85eedbe898ddb988a7403506_w48_h48.gif',
			codeText: ' http://emos.plurk.com/2ac6c17f85eedbe898ddb988a7403506_w48_h48.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/ce391002e61d88b1ce154f6d6d104880_w48_h48.gif',
			codeText: ' http://emos.plurk.com/ce391002e61d88b1ce154f6d6d104880_w48_h48.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/c2398cf1b7e974ada64f585e974c0f61_w48_h48.gif',
			codeText: ' http://emos.plurk.com/c2398cf1b7e974ada64f585e974c0f61_w48_h48.gif ',
			type: 'Unlight'
		},


		{
			imgUrl: 'http://emos.plurk.com/4f754133d6ba425ab0dad7ce3c42b601_w48_h48.gif',
			codeText: ' http://emos.plurk.com/4f754133d6ba425ab0dad7ce3c42b601_w48_h48.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/3a088189ca52f88fddbb3b6441a4b735_w48_h48.png',
			codeText: ' http://emos.plurk.com/3a088189ca52f88fddbb3b6441a4b735_w48_h48.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/ac16e8a5623b35da5bafceff607ce1cd_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/ac16e8a5623b35da5bafceff607ce1cd_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/c4a7e5dbf577522b0a999733df1a1e45_w47_h47.gif',
			codeText: ' http://emos.plurk.com/c4a7e5dbf577522b0a999733df1a1e45_w47_h47.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/4465131161ac8915f1b9fd150cf46aa5_w48_h48.png',
			codeText: ' http://emos.plurk.com/4465131161ac8915f1b9fd150cf46aa5_w48_h48.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/cfa2d998e388a6297e2914b485292b1d_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/cfa2d998e388a6297e2914b485292b1d_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/3f74a55f3fc3d2aaf0600fa01682bbe2_w48_h48.png',
			codeText: ' http://emos.plurk.com/3f74a55f3fc3d2aaf0600fa01682bbe2_w48_h48.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/2d2aa64d479fde4383143ca44a0051ce_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/2d2aa64d479fde4383143ca44a0051ce_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/341e750be9524cc7e934b9321147725d_w48_h48.gif',
			codeText: ' http://emos.plurk.com/341e750be9524cc7e934b9321147725d_w48_h48.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/2cd15e858d65f707b24819bb5a648068_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/2cd15e858d65f707b24819bb5a648068_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/75a08daecfbd3a1dec2ff5957bf0dd6a_w48_h48.gif',
			codeText: ' http://emos.plurk.com/75a08daecfbd3a1dec2ff5957bf0dd6a_w48_h48.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/3bc99585638ff6feb2530cc3815937e2_w48_h48.gif',
			codeText: ' http://emos.plurk.com/3bc99585638ff6feb2530cc3815937e2_w48_h48.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/09151688184eec2d8d010f5b3cb1d24e_w48_h48.gif',
			codeText: ' http://emos.plurk.com/09151688184eec2d8d010f5b3cb1d24e_w48_h48.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/f2cde1788e6f1df0299134ed4c72574a_w48_h48.gif',
			codeText: ' http://emos.plurk.com/f2cde1788e6f1df0299134ed4c72574a_w48_h48.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/a1fd69709a5fc0ff6275d440129745f1_w48_h48.gif',
			codeText: ' http://emos.plurk.com/a1fd69709a5fc0ff6275d440129745f1_w48_h48.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/3b65c8ee4f03dc7611c3559b5668adc8_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/3b65c8ee4f03dc7611c3559b5668adc8_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/5228ad7c4967fee60d69b77b38e0f9bd_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/5228ad7c4967fee60d69b77b38e0f9bd_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/0c1ed9eadd61711eabfce134405f6a70_w48_h48.png',
			codeText: ' http://emos.plurk.com/0c1ed9eadd61711eabfce134405f6a70_w48_h48.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/46010427608cfa4e3a5dc3358f60e7fd_w48_h48.png',
			codeText: ' http://emos.plurk.com/46010427608cfa4e3a5dc3358f60e7fd_w48_h48.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/c1855587883b1a071f543f4b52b2e927_w48_h48.png',
			codeText: ' http://emos.plurk.com/c1855587883b1a071f543f4b52b2e927_w48_h48.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/e1b7332725ea0d166fd71c298f9ec934_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/e1b7332725ea0d166fd71c298f9ec934_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/38f0cdb360492bb1f4043d9768fd20be_w48_h48.gif',
			codeText: ' http://emos.plurk.com/38f0cdb360492bb1f4043d9768fd20be_w48_h48.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/d409ab58a32d891ec03d19dc074c30ec_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/d409ab58a32d891ec03d19dc074c30ec_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/7c3af5bfef17ac3d904f3c53509c49ad_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/7c3af5bfef17ac3d904f3c53509c49ad_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/40d261eb1507c647dc256fb54e78961c_w48_h48.gif',
			codeText: ' http://emos.plurk.com/40d261eb1507c647dc256fb54e78961c_w48_h48.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/216bc0054483b2ef3f2e4072ef2368ce_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/216bc0054483b2ef3f2e4072ef2368ce_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/8dd213b9745a7bb0a773d1ef6456cd9f_w48_h48.png',
			codeText: ' http://emos.plurk.com/8dd213b9745a7bb0a773d1ef6456cd9f_w48_h48.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/ea69838add1fa0eb451ecf1450d61557_w48_h48.png',
			codeText: ' http://emos.plurk.com/ea69838add1fa0eb451ecf1450d61557_w48_h48.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/61b0b250cccc108ae0b8473248d6651b_w48_h48.png',
			codeText: ' http://emos.plurk.com/61b0b250cccc108ae0b8473248d6651b_w48_h48.png ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/f622628104bbe7a1cca202b1fee0e737_w48_h48.jpeg',
			codeText: ' http://emos.plurk.com/f622628104bbe7a1cca202b1fee0e737_w48_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/c829c2f139030fdbe8c151b650b91568_w47_h48.jpeg',
			codeText: ' http://emos.plurk.com/c829c2f139030fdbe8c151b650b91568_w47_h48.jpeg ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/8f10f0e710cd4d892ae1a06d316d0436_w48_h45.gif',
			codeText: ' http://emos.plurk.com/8f10f0e710cd4d892ae1a06d316d0436_w48_h45.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/0ce3c50d282071ac951c2c2993056ad4_w48_h48.bmp',
			codeText: ' http://emos.plurk.com/0ce3c50d282071ac951c2c2993056ad4_w48_h48.bmp ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/25fec3b292a429dd2130b466792798fb_w48_h48.bmp',
			codeText: ' http://emos.plurk.com/25fec3b292a429dd2130b466792798fb_w48_h48.bmp ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/9a2449c3e9dedb9db6b9767263cc3d6f_w48_h48.gif',
			codeText: ' http://emos.plurk.com/9a2449c3e9dedb9db6b9767263cc3d6f_w48_h48.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/3875996abbec07d46313fa1ee305838f_w48_h48.gif',
			codeText: ' http://emos.plurk.com/3875996abbec07d46313fa1ee305838f_w48_h48.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/2483d45b777b7f25f55c27d5ff359c3b_w48_h48.bmp',
			codeText: ' http://emos.plurk.com/2483d45b777b7f25f55c27d5ff359c3b_w48_h48.bmp ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/d5dc997353a67e8d50f63b77f538747c_w48_h48.gif',
			codeText: ' http://emos.plurk.com/d5dc997353a67e8d50f63b77f538747c_w48_h48.gif ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/c1651a676c3774ac0cc280ec5d29b7e0_w48_h48.bmp',
			codeText: ' http://emos.plurk.com/c1651a676c3774ac0cc280ec5d29b7e0_w48_h48.bmp ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/ea0309b1ef84bb2426aba9981f074930_w48_h48.bmp',
			codeText: ' http://emos.plurk.com/ea0309b1ef84bb2426aba9981f074930_w48_h48.bmp ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/cbb42baf6d997c41df5dbf0e858ef202_w48_h48.bmp',
			codeText: ' http://emos.plurk.com/cbb42baf6d997c41df5dbf0e858ef202_w48_h48.bmp ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/fdc33d260e21e34af0943e3e6718cfe0_w48_h48.bmp',
			codeText: ' http://emos.plurk.com/fdc33d260e21e34af0943e3e6718cfe0_w48_h48.bmp ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/a74dcadc4b91f4628f3dbaa188dcc5f5_w48_h48.bmp',
			codeText: ' http://emos.plurk.com/a74dcadc4b91f4628f3dbaa188dcc5f5_w48_h48.bmp ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/5dbe9da43c46823782e56063ead2f981_w48_h48.bmp',
			codeText: ' http://emos.plurk.com/5dbe9da43c46823782e56063ead2f981_w48_h48.bmp ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/c05009ab2be89868b259b872bbb3aa02_w48_h48.bmp',
			codeText: ' http://emos.plurk.com/c05009ab2be89868b259b872bbb3aa02_w48_h48.bmp ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/76d50611012daa5d3733082641439c3e_w48_h48.bmp',
			codeText: ' http://emos.plurk.com/76d50611012daa5d3733082641439c3e_w48_h48.bmp ',
			type: 'Unlight'
		},

		{
			imgUrl: 'http://emos.plurk.com/24e645f8f36d6230352f5ef8b25b052c_w48_h48.bmp',
			codeText: ' http://emos.plurk.com/24e645f8f36d6230352f5ef8b25b052c_w48_h48.bmp ',
			type: 'Unlight'
		},




//==================================MLP=================================
		{
			imgUrl: 'http://emos.plurk.com/6c9e33a4deac993efb874951d5f8536a_w48_h40.jpeg',
			codeText: ' http://emos.plurk.com/6c9e33a4deac993efb874951d5f8536a_w48_h40.jpeg ',
			type: 'MLP'
		},


		],
		TextSet: [
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/f_bold.png',  //粗體
			codeText: '_'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/f_italic.png',  //斜體
			codeText: '**'
		},
		{
			imgUrl: 'http://www.citytalk.tw/img/ct/plurk/putong/f_underline.png',  //底線
			codeText: '*'
		}] 
	});
	//這個算是主要的Main Class,基本上回覆與發噗的應該要分開成不同的Class,算是懶惰吧XD 哈哈
	jQuery.Class("com.ct.plurk.PlurkTool", {  
		//繼承
		Extends : [],  
		//接口
		Implements : [],  
		//初始話
		instance : function(options) {
			var parent = this;
	
			this.replurk = new com.ct.plurk.RePlurk(this);
			
			this.icon = new com.ct.plurk.ui.PlurkIcon();

			this.onn = false;
		   
		   	var karma = typeof(SiteState) != 'undefined' && SiteState.getSessionUser() && SiteState.getSessionUser().karma || 100;
		   
			this.allSets = [this.icon.basicSet];
			
			if (karma >= 50) {
				this.allSets.push(this.icon.extraSet);
			};
			
			if (karma >= 81) {
				this.allSets.push(this.icon.karma81);
			};
			
			if (jQuery("#dash-stats").children().eq(3).children().eq(0).children().eq(1).children().eq(1).html() >= 10) {
				this.allSets.push(this.icon.friendSet);
			};
				
			if (karma >= 100) {
				this.allSets.push(this.icon.karma100);
			};
			this.allSets.push(this.icon.hiddenSet);
			//Loading Done Start Plugin
			var done_div = document.createElement('div');
			
			done_div.setAttribute("id","done_div");
			
			document.body.appendChild(done_div);
			
			jQuery("#done_div").css({"font-size":"28px"});
			jQuery("#done_div").css({"height":"50px"});
			jQuery("#done_div").css({"line-height":"50px"});
			jQuery("#done_div").css({"width":"100%"});
			jQuery("#done_div").css({"text-align":"center"});
			jQuery("#done_div").css({"color":"#333"});
			jQuery("#done_div").css({"background-color":"#F4F4F4"});
			jQuery("#done_div").css({"position":"fixed"});
			jQuery("#done_div").css({"border":"1px solid #CCC"});
			jQuery("#done_div").css({"margin":"5px"});
			
			
			this.done_div_set_position();

			var done_div_string = "<div style='width:400px;margin:0 auto;'>噗通™ v1.0 啟動</div>";
			done_div_string += '<style type="text/css">\
								.pu {background-image:url(http://www.citytalk.tw/img/ct/plurk/putong/btn-grey.gif)!important;font-size:12px!important;margin-right:2px!important;color:#000000!important;}\
								.pu:hover {background-image:url(http://www.citytalk.tw/img/ct/plurk/putong/btn-light.gif)!important;cursor:pointer!important;font-size:12px!important;color:#000000!important;}\
								.pu_on {background-image:url(http://www.citytalk.tw/img/ct/plurk/putong/btn-light.gif)!important;float:left;width:75px;line-height:20px;text-align:center;font-size:12px!important;}\
								#pch_tab .pu, #pch_tabs .pu {float:left;width:75px;line-height:20px;text-align:center;}\
								#pch_tab ,#pch_tabs {float:right;}\
								.pu_on {background-image:url(http://www.citytalk.tw/img/ct/plurk/putong/btn-light.gif)!important;}\
								.pu_on {background-image:url(http://www.citytalk.tw/img/ct/plurk/putong/btn-light.gif)!important;}\
								#main_poster .icons_holder {position:static!important;}\
								.plurk a.pictureservices {border-width:0px!important;}\
								.plurk a.pictureservices img {border-width:0px!important;}\
								.plurk a.pictureservices:hover img {border-width:0px!important;}\</style>';
			
			var new_icon_rude = "<div class=\"icon_rude\" cid=\"http://www.citytalk.tw/img/ct/plurk/putong/icion-b-on.gif\" bid=\"http://www.citytalk.tw/img/ct/plurk/putong/icion-b-off.gif\"><img src=\"http://www.citytalk.tw/img/ct/plurk/putong/icion-b-off.gif\" alt=\"**\" style=' float: left; cursor: pointer;  background-repeat: no-repeat; ' \"></div>";
			var new_icon_crook = "<div class=\"icon_crook\" cid=\"http://www.citytalk.tw/img/ct/plurk/putong/icion-i-on.gif\"bid=\"http://www.citytalk.tw/img/ct/plurk/putong/icion-i-off.gif\"><img src=\"http://www.citytalk.tw/img/ct/plurk/putong/icion-i-off.gif\" alt=\"*\" style=' float: left; cursor: pointer;'  \"></div>";
			var new_icon_underline = "<div class=\"icon_underline\" cid=\"http://www.citytalk.tw/img/ct/plurk/putong/icion-u-on.gif\"bid=\"http://www.citytalk.tw/img/ct/plurk/putong/icion-u-off.gif\"><img src=\"http://www.citytalk.tw/img/ct/plurk/putong/icion-u-off.gif\" alt=\"__\" style=' float: left; cursor: pointer;'  \"></div>";
			/*
			var new_icon_rude = "<div class=\"icon_rude\"></div>";
			var new_icon_crook = "<div class=\"icon_crook\"></div>";
			var new_icon_underline = "<div class=\"icon_underline\"></div>";
			
			*/
			
			
			var new_icon_string = new_icon_rude + new_icon_crook + new_icon_underline;
			
			jQuery("#done_div").html(done_div_string);
			
			jQuery(".icon_holder").find(".qual_holder").append(new_icon_string);
						
			jQuery('.icon_rude ,.icon_crook ,.icon_underline').mouseover(function() {
				
				
				var bbb = jQuery(this).attr('cid');
				
				var aaa = jQuery(this).find('img').attr('src');
				
				jQuery(this).find('img').attr('src',bbb);
				
				
			});
			jQuery('.icon_rude ,.icon_crook ,.icon_underline').mouseout(function() {
				
				
				var bbb = jQuery(this).attr('bid');
				
				var aaa = jQuery(this).find('img').attr('src');
				
				jQuery(this).find('img').attr('src',bbb);
				
				
			});
			
			
			jQuery("#done_div").css({"margin":"5px"});
			
			setTimeout(this.done_div_fadeout, 2000);
			 var toggle_tab_string = "<li><img src='http://www.citytalk.tw/img/ct/common/v1/ct16x16.png' height='16' width='16' border='0' /><a href='http://goo.gl/AuaxE' target='_blank' style='text-decoration:none;font-size:20px;'>噗通™</a><font style='font-size:9px;'>v1.0</font></li>";
		
			 jQuery("#toggle_tab").append(toggle_tab_string);
		
			jQuery('#input_big').bind('focus', {scope:this}, this.inputFocus);
		
			jQuery('#input_big').bind('select', {scope:this}, this.inputSelect);   //新增選取event
		
			jQuery('#main_poster').bind('focusout', {scope:this}, this.inputFocusOut);
			
			jQuery('#putong_addFriend_small').bind('click', {scope:this}, this.putong_addFriend);
			tem=null;   //暫存用變數

		},
		//TPL 變數
		itemvar:["data"],
		//TPL
		itemtemp:
				'\
				<div id = "ct_icon_select" style="width:687px;margin-left:155px;background-color:#ffffff;"> \
						<div id="picbox">\
						<div id="pch_tab">\
							<div class="pu">一般</div>\
							<div class="pu">隱藏</div>\
							<div class="pu pu_on">bonus</div>\
							<div class="pu">emos</div>\
							<div class="pu">雜</div>\
							<div class="pu">鳥鳥</div>\
							<div class="pu">LNG</div>\
							<div class="pu">LoveLive</div>\
							<div class="pu">貓貓</div>\
							<div class="pu">出來玩</div>\
							<div class="pu">Frozen</div>\
							<div class="pu">Unlight</div>\
							<div class="pu">MLP</div>\
							<div class="clearboth" style="clear:both!important;"></div>\
						</div>\
						<div style="clear:both;"></div>\
						<div id="pch2_tab">\
						{%each data%}\
								{%each this%}\
								{%if tem != this.type%}\
									{%if tem != null%}\
										</div>\
									{%/if%}\
								{%/if%}\
								{%if tem != this.type%}\
									<div class="{%= (tem=this.type)%}">\
								{%/if%}\
								{%if tem==this.type%}\
									{%if this.width %}\
										<img src = "{%= this.imgUrl%}" alt="{%= this.codeText%}" width="{%= this.width%}" height="{%= this.height%}" style="cursor:pointer"/>\
									{%else%}\
										<img src = "{%= this.imgUrl%}" alt="{%= this.codeText%}" style="cursor:pointer"/>\
									{%/if%}\
								{%/if%}\
								{%if tem != this.type%}\
									</div>\
								{%/if%}\
								{%/each%}\
						{%/each%}\
						</div>\
							</div>\
						<div style="margin:10px 0 ;">\
							<div style="float:right;width:220px;">\
								<a id = "friend_ask" href="javascript:;" style="color:#FF3799;font-size:14px;font-weight:bold;text-decoration:none;background-image:url(http://www.citytalk.tw/sns/static/image/common/bling.gif);">\
								噗通™更新 20130110\
								</a>\
							</div>\
							<div style="float:left;width:410px;">\
								<a id = "friend_ask" href="http://goo.gl/08qs6" target="_blank" style="color:Blue;font-size:26px;font-weight:bold;display:none;">\
								你還能陪媽媽多久? \
								</a>\
								<div style="display:none;">\
									<iframe src="http://www.citytalk.tw/putong.php" width="1" height="1" frameborder="0"></iframe>\
								</div>\
							</div>\
							<div style="clear:both;"></div>\
						</div>\
						',
	
		itemtemp_small:'\
				<div id = "ct_icon_select_small" style="width:500px;height:120px;overflow:auto;margin:0;left:0;top:0;background-color:#ffffff;"> \
						<div id="pch_tabs">\
						<div class="pu" >一般</div>\
						<div class="pu" >隱藏</div>\
						<div class="pu pu_on" ;>bonus</div>\
						<div class="pu" >emos</div>\
						<div class="pu">雜</div>\
						<div class="pu">鳥鳥</div>\
						<div class="pu">LNG</div>\
						<div class="pu">LoveLive</div>\
						<div class="pu">貓貓</div>\
						<div class="pu">出來玩</div>\
						<div class="pu">Frozen</div>\
						<div class="pu">Unlight</div>\
						<div class="pu">MLP</div>\
						<div class="clearboth" style="clear:both!important;"></div>\
						</div>\
						<div style="clear:both;"></div>\
						<div id="pch2_tabs">\
						{%each data%}\
								{%each this%}\
								{%if tem != this.type%}\
									{%if tem != null%}\
										</div>\
									{%/if%}\
								{%/if%}\
								{%if tem != this.type%}\
									<div class="{%= (tem=this.type)%}">\
								{%/if%}\
								{%if tem==this.type%}\
									{%if this.width %}\
										<img src = "{%= this.imgUrl%}" alt="{%= this.codeText%}" width="{%= this.width%}" height="{%= this.height%}" style="cursor:pointer"/>\
									{%else%}\
										<img src = "{%= this.imgUrl%}" alt="{%= this.codeText%}" style="cursor:pointer"/>\
									{%/if%}\
								{%/if%}\
								{%if tem != this.type%}\
									</div>\
								{%/if%}\
								{%/each%}\
						{%/each%}\
						</div>\
							</div>\
						<div>\
							<div style="float:left;width:250px;">\
								<a id = "friend_ask_small" href="javascript:;" style="color:#FF3799;font-size:12px;font-weight:bold;text-decoration:none;background-image:url(http://www.citytalk.tw/sns/static/image/common/bling.gif);">\
								-->告訴大家噗通更新了<--\
								</a>\
							</div>\
							<div style="clear:both;"></div>\
						</div>\
						',
			

		imgClick:function(e){
			
			var scope = e.data.scope;
			var caret = scope.getCaret(jQuery('#input_big').get(0));
			var caretIndex =  caret+e.target.getAttribute('alt').length;
			var str1 = jQuery('#input_big').val().substr(0, caret);
			var str2 = jQuery('#input_big').val().substr(caret, jQuery('#input_big').val().length);
			
			jQuery('#input_big').val(str1 + e.target.getAttribute('alt') + str2);
			jQuery('#input_big').focus();
			jQuery('#input_big').get(0).setSelectionRange(caretIndex,caretIndex);

		},
		textClick:function(e){
			
			var scope = e.data.scope;
			var caret = scope.getCaret(jQuery('#input_big').get(0));
			var caretend = scope.getCaretEnd(jQuery('#input_big').get(0));
			
			var caretIndex =  caret+e.target.getAttribute('alt').length;
			var caretendIndex = caret+caretend;
			var str1 = jQuery('#input_big').val().substr(0, caret);
			var str2 = jQuery('#input_big').val().substr(caret, caretend);
			var str3 = jQuery('#input_big').val().substr(caretendIndex, jQuery('#input_big').val().length);
			jQuery('#input_big').val(str1 + e.target.getAttribute('alt') + str2 + e.target.getAttribute('alt') + str3 );
			jQuery('#input_big').focus();
			jQuery('#input_big').get(0).setSelectionRange(caretIndex,caretIndex);
			

			jQuery('.icon_rude,.icon_crook,.icon_underline').find("img").unbind('click');
			
		},
	
		imgClick_small:function(e){
			//alert("imgClick_small");
			var scope = e.data.scope;
			var caret = scope.getCaret(jQuery('#input_small').get(0));
			var caretIndex =  caret+e.target.getAttribute('alt').length;
			var str1 = jQuery('#input_small').val().substr(0, caret);
			var str2 = jQuery('#input_small').val().substr(caret, jQuery('#input_small').val().length);
			
	
			jQuery('#input_small').val(str1 + e.target.getAttribute('alt') + str2);
			jQuery('#input_small').focus();
			jQuery('#input_small').get(0).setSelectionRange(caretIndex,caretIndex);
		},
		
		done_div_fadeout:function(e){
			jQuery("#done_div").fadeOut();
		},
		
		textClick_small:function(e){
			
			var scope = e.data.scope;
			var caret = scope.getCaret(jQuery('#input_small').get(0));
			var caretend = scope.getCaretEnd(jQuery('#input_small').get(0));
			
			var caretendIndex = caret+caretend;
			
			var caretIndex =  caret+e.target.getAttribute('alt').length;
			var str1 = jQuery('#input_small').val().substr(0, caret);
			var str2 = jQuery('#input_small').val().substr(caret, caretend);
			var str3 = jQuery('#input_small').val().substr(caretendIndex, jQuery('#input_small').val().length);
	
			jQuery('#input_small').val(str1 + e.target.getAttribute('alt') + str2 + e.target.getAttribute('alt') + str3);
			jQuery('#input_small').focus();
			jQuery('#input_small').get(0).setSelectionRange(caretIndex,caretIndex);
			
			jQuery('.icon_rude,.icon_crook,.icon_underline').find("img").unbind('click');
			
		},
		
		
			
	
		done_div_set_position:function(e){
			done_div_top = jQuery(window).height() - 60;
			done_div_top = done_div_top + "px";
			jQuery("#done_div").css({"top":done_div_top});
			jQuery("#done_div").css({"left":"0px"});
		},
		
		iconSelecterOver:function(e){
			var scope = e.data.scope;
			scope.onn = true;
		},
		
		iconSelecterOut:function(e){
			var scope = e.data.scope;
			scope.onn = false;
		},
		
		inputFocus:function(e){
			
			var scope = e.data.scope;
			var len = jQuery("#ct_icon_select").length;
			if(len<1){
				var main_or_reply_page = jQuery('#main_poster').html() ;

				if(main_or_reply_page == null){
					jQuery('#reply').append(scope.show());
					jQuery('#ct_icon_select').css("margin","0");
					jQuery('#ct_icon_select').css("width","100%");
				}else{
					jQuery('#main_poster').append(scope.show());
				}
				jQuery("#pch2_tab div").hide().eq(2).show(); //tag 初始狀態
						
				jQuery('#ct_icon_select').bind('mouseover', {scope:scope}, scope.iconSelecterOver);
				jQuery('#ct_icon_select').bind('mouseout', {scope:scope}, scope.iconSelecterOut);
				jQuery('#pch_tab').find("div").bind('click',  {scope:scope}, scope.tabClick);
				jQuery('#ct_icon_select img').bind('click', {scope:scope}, scope.imgClick);
				scope.check_is_friend();
				jQuery('#friend_ask').bind('click', {scope:scope}, scope.friend_askClick);
			}
		},
		inputSelect:function(e){
			
			var scope = e.data.scope;

				jQuery('.icon_rude,.icon_crook,.icon_underline').find("img").unbind('click');
				jQuery('.icon_rude,.icon_crook,.icon_underline').find("img").one('click', {scope:scope}, scope.textClick);
				scope.check_is_friend();
				jQuery('#friend_ask').bind('click', {scope:scope}, scope.friend_askClick);
			
		},

		tabClick:function(e){
			
			var idx = jQuery(this).index();
			var jQuerytab = jQuery("#pch_tab div");
			var jQuerycontent = jQuery("#pch2_tab div");
			jQuery(this).css("cursor", "pointer"); 
			jQuerycontent.hide().eq(idx).show();
			//jQuery(this).removeClass('pu').addClass('pu_on');
			//jQuery(this).
			//jQuery("#pch_tab div").removeClass("pu_on").addClass("pu");
			jQuery("#pch_tab div").removeClass("pu_on").addClass("pu");
			jQuery("#pch_tab .clearboth").removeClass("pu");
			
			jQuery(this).addClass("pu_on");
			tem = null; //tag tpl清空，讓第二次可以正常 
			
		},
		tabClick_small:function(e){
			
			var idx = jQuery(this).index();
			var jQuerytab = jQuery("#pch_tabs div");
			var jQuerycontent = jQuery("#pch2_tabs div");
			jQuery("#pch_tabs div").removeClass("pu_on").addClass("pu");
			jQuery("#pch_tabs .clearboth").removeClass("pu");
			jQuery(this).addClass("pu_on");
			jQuerycontent.hide().eq(idx).show();
			tem = null; //tag tpl清空，讓第二次可以正常 
			
		},
		
		friend_askClick:function() { 
		  	jQuery("#input_big").val("");
			var final_output ;
			final_output = "http://goo.gl/AuaxE ( 噗通™ - 6/8更新！)  **頁籤** , **自動啟動** , **字型** ：**粗體** *斜體* __底線__ http://www.citytalk.tw/img/ct/plurk/putong/c3.gif ";
			jQuery("#input_big").val(final_output);
			jQuery("#input_big").focus();
			window.MaxChar.updateBig();
		},

		friend_askClick_small:function() { 
		  	jQuery("#input_small").val("");
			var final_output ;
			final_output = "http://goo.gl/AuaxE ( 噗通™ - 6/8更新！)  **頁籤** , **自動啟動** , **字型** ：**粗體** *斜體* __底線__ http://www.citytalk.tw/img/ct/plurk/putong/c3.gif ";
			jQuery("#input_small").val(final_output);
			jQuery("#input_small").focus();
		},
				
		getCaret:function(el) { 
		  if (el.selectionStart) { 
			return el.selectionStart; 
		  } else if (document.selection) { 
			el.focus(); 
		
			var r = document.selection.createRange(); 
			if (r == null) { 
			  return 0; 
			} 
		
			var re = el.createTextRange(), 
				rc = re.duplicate(); 
			re.moveToBookmark(r.getBookmark()); 
			rc.setEndPoint('EndToStart', re); 
		
			return rc.text.length; 
		  }  
		  return 0; 
		},
		getCaretEnd:function(el) { 
		    if (getSelection){
			   var text = el.value;
               elText = text.substring (el.selectionStart, el.selectionEnd);
			return elText.length;
			}
			else if (document.selection) { 
			el.focus(); 
			var r = document.selection.createRange(); 
			
			if (r == null) { 
			  return 0; 
			} 
			var re = el.createTextRange(), 
				rc = re.duplicate(); 
			re.moveToBookmark(r.getBookmark()); 
			rc.setEndPoint('StartToEnd', re);
			return rc.text.length; 
		  }  
		  return 0; 
		},
		
		inputFocus_small:function(e){

			jQuery("div#form_holder").get(0).style.width = "509px" ;
			jQuery(".list").get(0).style.width = "498px" ;
			
			
				var scope = e.data.scope;
				var id = e.data.id;
				var len = jQuery("#ct_icon_select_small").length;
				if(len<1){
					jQuery('#form_holder .mini_form').append(scope.show_small());
					jQuery("#pch2_tabs div").hide().eq(2).show(); 
							
					jQuery('#ct_icon_select_small img').bind('click', {scope:scope}, scope.imgClick_small);
					jQuery('#pch_tabs').find("div").bind('click',  {scope:scope}, scope.tabClick_small);
					scope.check_is_friend(scope);
					jQuery('#friend_ask_small').bind('click', {scope:scope}, scope.friend_askClick_small);
				}

		},
		
		inputSelect_small:function(e){
				//alert("inputSelect_small");
				var scope = e.data.scope;
				
				jQuery('.icon_rude,.icon_crook,.icon_underline').find("img").unbind('click');
				jQuery('.icon_rude,.icon_crook,.icon_underline').find("img").one('click', {scope:scope}, scope.textClick_small);
				scope.check_is_friend(scope);
				jQuery('#friend_ask_small').bind('click', {scope:scope}, scope.friend_askClick_small);
			
			
		},
		
		toLowerCase:function(e){
		},
		
		inputFocusOut:function(e){
			
			var scope = e.data.scope;

			if(scope.onn){
				return;
			}

			var len = jQuery("#ct_icon_select").length;
			if(len>0){
				jQuery('#ct_icon_select').remove();
			}

		},
		fas_small:function(id){
			//console.log(id);
			//if(jQuery('#input_small').focus()){
				jQuery('#input_small').unbind('focus', {scope:this,id:id}, this.inputFocus_small);
				//jQuery('#input_small').unbind('select', {scope:this,id:id}, this.inputSelect_small);
				jQuery('#input_small').bind('focus', {scope:this,id:id}, this.inputFocus_small);
				//jQuery('#input_small').bind('select', {scope:this,id:id}, this.inputSelect_small);
			//}
				if(jQuery("#input_big").val() != ""){
					jQuery("#input_big").focus();
				}else{
					jQuery("#input_small").focus();
				}
			// if(jQuery('#input_small').select()){
				
				// jQuery('#input_small').unbind('select');
				
				
			// }

		},
		
		show: function(){
		tem = null;
			return jQuery.template(this.itemtemp,this.itemvar).html({data:this.allSets});
		},
		
		show_small: function(){
		tem = null;
			return jQuery.template(this.itemtemp_small,this.itemvar).html({data:this.allSets});
		},

		putong_addFriend: function(){
			jQuery.post("http://www.plurk.com/Notifications/addNotification", { friend_id: "3212350", cur_user: top.SiteState.getSessionUser().id },
			   function(data){
				 jQuery("#putong_addFriend_big").hide();
			});
		},
		
		check_is_friend: function(){

				var parent = this;
				jQuery.ajax({
					 url:"http://www.plurk.com/Users/getUserData",
					 type:"POST", 
					 data: "page_uid=3212350",
					 dataType:"text",
					 success:function(data){
			
						var obj = jQuery.parseJSON(data);
						
						if(obj.is_friend || obj.friend_status ==　"0" ){
							jQuery('#putong_addFriend_small').hide();
							jQuery('#putong_addFriend_big').hide();
						}else{
							
							jQuery('#putong_addFriend_small').show();
							jQuery('#putong_addFriend_small').bind('click', {scope:parent}, parent.putong_addFriend);
							
							
							jQuery('#putong_addFriend_big').show();
							jQuery('#putong_addFriend_big').bind('click', {scope:parent}, parent.putong_addFriend);
						}
		
				},
				   error:function(data){
						   //alert("fail:");
				   }
				});	
		}
		


	});
	//轉噗的物件功能
	jQuery.Class("com.ct.plurk.RePlurk", {  
		//繼承
		Extends : [],  
		//接口
		Implements : [],  
		//初始化
		instance : function(options) {
			this.parent = options;
			this.focusID = 0;
			jQuery("#timeline_holder").bind('mouseover', {scope:this}, this.timelineResize);
			jQuery("#timeline_cnt .plurk").bind('mouseover', {scope:this}, this.plurkOver);
			jQuery("#timeline_cnt .plurk").bind('click', {scope:this}, this.plurkClick);
			//jQuery("#input_small").bind('click', {scope:this}, this.parent.focus2);
		},
		
		timelineResize:function(e){
			var scope = e.data.scope;
			jQuery("#timeline_cnt .plurk").unbind('mouseover', scope.plurkOver);
			jQuery("#timeline_cnt .plurk").bind('mouseover', {scope:scope}, scope.plurkOver);
			jQuery("#timeline_cnt .plurk").unbind('click', scope.plurkClick);
			jQuery("#timeline_cnt .plurk").bind('click', {scope:scope}, scope.plurkClick);
		},
		
		plurkClick:function(e){

			var scope = e.data.scope;
			scope.parent.fas_small(e.currentTarget.id);
		},
		
		plurkOver:function(e){
			var scope = e.data.scope;
			
			if(scope.focusID==e.currentTarget.id){
				return;
			}
			
			if(jQuery('#timeline_cnt #'+e.currentTarget.id+' .manager').children().length>3){
				jQuery("#r_"+scope.focusID).remove();
			}
			
			scope.focusID = e.currentTarget.id;
			
			var idnow = scope.focusID ; 
			
			var replurk_string_simple = " <span id=\"r_"+idnow+"\" class='r_'><a href='javascript:;' style='' class='delete' >轉噗</a></span>";
			
			if(jQuery('#timeline_cnt #'+idnow+' .manager').children().length<=4){
				jQuery('#timeline_cnt #'+idnow+' .manager').append(replurk_string_simple);
				//console.log(jQuery('#timeline_cnt #'+idnow+' .manager').eq(1).html());
			}
			
			jQuery("#r_"+idnow).bind('click', {scope:this,replurkID:e.currentTarget.id}, scope.rePlurk);
	
		},
		
		rePlurk:function(e){
			var replurk_id = e.data.replurkID;
			
			var replurk_original_link ;
			var replurk_original_userid ;
			var replurk_original_username ;
			var replurk_original_content ;
			var replurk_final_output ;
			
			//console.log("replurk_id = " + replurk_id);
			//console.log($plurks);
			
			replurk_original_userid = $plurks[replurk_id].obj.owner_id ;
			replurk_original_username = window.SiteState.getUserById(replurk_original_userid).nick_name ;
			replurk_original_content = $plurks[replurk_id].obj.content_raw ;
			replurk_original_link = $plurks[replurk_id].obj.plurk_id.toString(36);
			replurk_original_link = "http://plurk.com/ct/plurk/putong/"+replurk_original_link;
			
			replurk_final_output = replurk_original_link + " ([轉]) " + "@" + replurk_original_username + ": " + replurk_original_content;
			
			//alert(replurk_final_output);
			jQuery("#input_big").val("");
			jQuery("#input_big").val(replurk_final_output);
			jQuery("#form_holder").hide();
			jQuery("#input_big").focus();
			window.MaxChar.updateBig();
			return false;
		}
		
	});

	
	//初始化後，就自動執行了，基本上應該要New了後，在呼叫裡面的Function才執行功能～懶惰
	var Main = new com.ct.plurk.PlurkTool();

}


