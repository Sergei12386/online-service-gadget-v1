rnd.today = new Date();
rnd.seed = rnd.today.getTime();

function rnd() {
	rnd.seed = (rnd.seed * 9301 + 49297) % 233280;
	return rnd.seed / (233280.0);
}

function rand(number) {
	return Math.ceil(rnd() * number);
}

adLink = "";
createAd(adLink + rand(1000));

function createAd(adUrl) {
	var request;
	try {
		request = new XMLHttpRequest();
	} catch (e) {
		request = new ActiveXObject("Msxml2.XMLHTTP");
	}
	try {
		netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
	} catch (e) {}
	try {
		request.open("GET", adUrl, false);
		request.send(null);
	} catch (e) {
		document.getElementById("ad_text_div").innerHTML = "<a href=" + noAdLink + ">" + noAdText + "</a>";
		document.getElementById("main_adtext").innerHTML = "<a href=" + noAdLink + ">" + noAdText + "</a>";
	}
	try {
		if (request.status == 200 && request.responseXML != null) {
			var feed = request.responseXML;
			var itemList = feed.getElementsByTagName('item');
			var numItems = itemList.length;
			for (var i = 0; i < numItems; i++) {
				var itemLink = itemList[i].getElementsByTagName('link');
				var itemTitle = itemList[i].getElementsByTagName('title');
				document.getElementById("ad_text_div").innerHTML = "<a href=\"javascript:;\" onclick=\"openHref('" + itemLink[0].firstChild.nodeValue + "')\">" + itemTitle[0].firstChild.nodeValue + "</a>";
				document.getElementById("main_adtext").innerHTML = "<a href=\"javascript:;\" onclick=\"openHref('" + itemLink[0].firstChild.nodeValue + "')\">" + itemTitle[0].firstChild.nodeValue + "</a>";
			}
		} else {
			document.getElementById("ad_text_div").innerHTML = "<a href=" + noAdLink + ">" + noAdText + "</a>";
			document.getElementById("main_adtext").innerHTML = "<a href=" + noAdLink + ">" + noAdText + "</a>";
		}
	} catch (e) {}
}

var bg1 = "images/none7-org1.png";
var bg1_s = "images/small_bg7.png";
var selectNum = 7;
var changeNum = 7;
var upColor = "main_color_icon7";

function changeBg() {
	changeNum = selectNum;
	bg1 = "images/none" + changeNum + "-org1.png";
	bg1_s = "images/small_bg" + changeNum + ".png";
	var idTitle = "main_color_icon" + changeNum;
	document.getElementById(upColor).id = idTitle;
	upColor = idTitle;
	document.getElementById("main_color").style.visibility = 'hidden';
	document.getElementById("main_rss").style.visibility = 'hidden';
	dockStateChanged();
	closeAll();
}

function dockStateChanged() {
	document.getElementById("main_color").style.visibility = 'hidden';
	document.getElementById("main_rss").style.visibility = 'hidden';
	if (System.Gadget.docked) {
		System.Gadget.background = bg1_s;
		document.body.style.width = "135px";
		document.body.style.height = "305px";
	} else {
		System.Gadget.background = bg1;
		document.body.style.width = "442px";
		document.body.style.height = "400px";
	}
}

var checkboxChecked = new Array();

function closeAll() {
	if (flag == "true") {
		var checkBox = document.getElementsByName("checkbox");
		for (var i = 0; i < checkBox.length; i++) {
			if (checkbox[i].checked) {
				checkboxChecked[i] = "true";
			} else {
				checkboxChecked[i] = "false";
			}
		}
	}
	document.getElementById("main_color").style.visibility = 'hidden';
	document.getElementById("main_rss").style.visibility = 'hidden';
	System.Gadget.background = bg1;
	var checkBox = document.getElementsByName("checkbox");
	var uncheckedCount = 0;
	for (var i = 0; i < checkBox.length; i++) {
		if (checkboxChecked[i] == "true") {
			checkbox[i].checked = true;
		} else {
			checkbox[i].checked = false;
			var uncheckedCount = uncheckedCount + 1;
		}
	}
	if (uncheckedCount == 9) {}
	flag = true;
}

function openColor() {
	document.getElementById("main_rss").style.visibility = 'hidden';
	document.getElementById("main_color").style.visibility = 'visible';

}

function selectColor(num) {
	selectNum = num;
	var idTitle = "selectColor" + num;
	for (var i = 1; i <= 7; i++) {
		idTitle = "selectColor" + i;
		document.getElementById(idTitle).style.backgroundImage = "url(images/color_icon" + i + "_1.png)";
	}
	idTitle = "selectColor" + num;
	document.getElementById(idTitle).style.backgroundImage = "url(images/color_icon" + num + "_2.png)";
}

function openBk() {
	document.getElementById("main_color").style.visibility = 'hidden';
	document.getElementById("main_rss").style.visibility = 'visible';
}

var flag = "true";

function changeBk() {
	document.getElementById("rss_small_marquee").innerHTML = '';
	document.getElementById("rss_main_marquee").innerHTML = '';
	var checkBox = document.getElementsByName("checkbox");
	for (var i = 0; i < checkBox.length; i++) {
		if (checkbox[i].checked) {
			checkboxChecked[i] = "true";
			checkbox[i].value;
			readRSS(checkbox[i].value)
		} else {
			checkboxChecked[i] = "false";
		}
	}
	flag = "false";
	closeAll();
}

function doSearch() {
	var searchString = "http://www.bing.com/?q=" + document.getElementById('q').value + "&scope=web&mkt=" + variable_7;
	window.open(searchString);
	document.getElementById('q').value = '';
	document.getElementById('q2').value = '';
}

function doSearch2() {
	document.getElementById('q').value = document.getElementById('q2').value;
	doSearch();
}

function isEnterOne() {
	if (event.keyCode == 13) {
		doSearch();
	} else {
		document.getElementById('q').style.backgroundImage = "";
	}
}

function isEnter() {
	if (event.keyCode == 13) {
		doSearch2();
	} else {
		document.getElementById('q2').style.backgroundImage = "";
	}
}

function openHref(url) {
	window.open(url);
}

function openWin7() {
	window.open(win7Link);
}

readRSS(checkbox1Value);

function readRSS(rssUrl) {
	var request;
	var stringbuffer = '';
	try {
		request = new XMLHttpRequest();
	} catch (e) {
		request = new ActiveXObject("Msxml2.XMLHTTP");
	}
	try {
		netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
	} catch (e) {}
	request.open("GET", rssUrl, false);
	request.send(null);
	var feed = request.responseXML;
	var itemList = feed.getElementsByTagName('item');
	var numItems = itemList.length;
	for (var i = 0; i < numItems; i++) {
		var itemLink = itemList[i].getElementsByTagName('link');
		var itemTitle = itemList[i].getElementsByTagName('title');
		var itemDescription = itemList[i].getElementsByTagName('description');
		var contentText = "";
		if (itemDescription[0] != null) {
			if (itemDescription[0].firstChild != null) {
				if (itemDescription[0].text.substr(0, 10).indexOf('<br') != -1) {
					contentText = ":<span class=\"rss_text\"><a style=\"font-weight:normal;\" href=\"" + itemLink[0].firstChild.nodeValue + "\"> </a> </span>";
				} else {
					if (itemDescription[0].firstChild.nodeValue.length > 10) {
						contentText = ":<span class=\"rss_text\"><a style=\"font-weight:normal;\" href=\"" + itemLink[0].firstChild.nodeValue + "\">" + itemDescription[0].firstChild.nodeValue.substr(0, 10) + "...</a></span>";
					} else {
						contentText = ":<span class=\"rss_text\"><a style=\"font-weight:normal;\" href=\"" + itemLink[0].firstChild.nodeValue + "\">" + itemDescription[0].firstChild.nodeValue + "</a></span>";
					}
				}
			} else {
				contentText = '-';
			}
		} else {
			contentText = '';
		}
		stringbuffer = stringbuffer + "<span class=\"rss_title\"><a href=\"" + itemLink[0].firstChild.nodeValue + "\">" + itemTitle[0].firstChild.nodeValue + "</a></span>" + contentText;
	}
	document.getElementById("rss_small_marquee").innerHTML = document.getElementById("rss_small_marquee").innerHTML + stringbuffer;
	document.getElementById("rss_main_marquee").innerHTML = document.getElementById("rss_main_marquee").innerHTML + stringbuffer;
}