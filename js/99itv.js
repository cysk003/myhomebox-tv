var rule = {
    title: '99影院',
    host: 'https://99itv.net',
    url: '/show/fyfilter.html',
    searchUrl: '/search/**----------fypage---.html',
    searchable: 2, //是否启用全局搜索,
    quickSearch: 0, //是否启用快速搜索,
    filterable: 1, //是否启用分类筛选,
    filter_url: '{{fl.cateId}}-{{fl.area}}-{{fl.by}}------fypage---{{fl.year}}',
    filter: {
		"movie":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"movie"},{"n":"動作片","v":"action"},{"n":"喜劇片","v":"comedy"},{"n":"科幻片","v":"sciencefiction"},{"n":"恐怖片","v":"terror"},{"n":"愛情片","v":"lover"},{"n":"劇情片","v":"plot"},{"n":"戰争片","v":"war"},{"n":"動畫片","v":"donghuapian"}]},
			{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陸"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台灣"},{"n":"美國","v":"美國"},{"n":"法國","v":"法國"},{"n":"英國","v":"英國"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韓國"},{"n":"德國","v":"德國"},{"n":"泰國","v":"泰國"},{"n":"新加坡","v":"新加坡"},{"n":"馬來西亞","v":"馬來西亞"},{"n":"印度","v":"印度"},{"n":"義大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"俄羅斯","v":"俄羅斯"},{"n":"加拿大","v":"加拿大"},{"n":"其他","v":"其他"}]},
			{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},
			{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
		"drama":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"drama"},{"n":"臺灣劇","v":"taiwan"},{"n":"日劇","v":"jp"},{"n":"陸劇","v":"china"},{"n":"韓劇","v":"kr"},{"n":"歐美劇","v":"usa"},{"n":"香港劇","v":"hkg"},{"n":"泰國劇","v":"tailan"}]},
			{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陸"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台灣"},{"n":"美國","v":"美國"},{"n":"法國","v":"法國"},{"n":"英國","v":"英國"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韓國"},{"n":"德國","v":"德國"},{"n":"泰國","v":"泰國"},{"n":"新加坡","v":"新加坡"},{"n":"馬來西亞","v":"馬來西亞"},{"n":"印度","v":"印度"},{"n":"義大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"俄羅斯","v":"俄羅斯"},{"n":"加拿大","v":"加拿大"},{"n":"其他","v":"其他"}]},
			{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},
			{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
		"variety":[{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陸"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台灣"},{"n":"美國","v":"美國"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韓國"}]},
			{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},
			{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
		"anime":[{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陸"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台灣"},{"n":"美國","v":"美國"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韓國"}]},
			{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},
			{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}]

	},
	filter_def:{
		movie:{cateId:'movie',by:'time'},
		drama:{cateId:'drama',by:'time'},
		variety:{cateId:'variety',by:'time'},
		anime:{cateId:'anime',by:'time'}
	},
        headers: {
        'User-Agent': 'UC_UA',
    },
    //class_parse:'.myui-header__menu&&li;a&&Text;a&&href;.*/(.*?).html',
    class_name: '電影&電視劇&綜藝&動漫',
    class_url: 'movie&drama&variety&anime',
    play_parse: true,
    lazy:`js:
		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
		var url = html.url;
		if (html.encrypt == '1') {
			url = unescape(url)
		} else if (html.encrypt == '2') {
			url = unescape(base64Decode(url))
		}
		if (/\\.m3u8|\\.mp4/.test(url)) {
			input = {
				jx: 0,
				url: url,
				parse: 0
			}
		} else if (/\\/share/.test(url)) {
			url = getHome(url) + request(url).match(/main.*?"(.*?)"/)[1];
			input = {
				jx: 0,
				url: url,
				parse: 0
			}
		} else {
			input
		}
	`,
    limit: 6,
    推荐: 'ul.myui-vodlist.clearfix;li;a&&title;a&&data-original;.pic-tag.text-right&&Text;a&&href',
    double: true, // 推荐内容是否双层定位
    一级: '.myui-vodlist li;a&&title;a&&data-original;.text-right&&Text;a&&href',
    二级: {
        "title": ".myui-content__detail .title&&Text;p.data:eq(0)&&a:eq(0)&&Text",
        "img": ".myui-content__thumb .lazyload&&data-original",
        "desc": "p.data:eq(1) a&&Text;p.data:eq(0)&&a:eq(2)&&Text;p.data:eq(0)&&a:eq(1)&&Text;.myui-content__detail p.data:eq(2)--span&&Text;.myui-content__detail p.data:eq(3)--span&&Text",
        "content": ".myui-panel_bd .content span&&Text",
        "tabs": ".nav-tabs:eq(0) li",
        "lists": ".myui-content__list:eq(#id) li"
    },
    搜索: '#searchList li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href;.text-muted:eq(-1)&&Text',
}
