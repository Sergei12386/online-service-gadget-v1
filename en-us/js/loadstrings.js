function bringFocus() {
	if (System.Gadget.docked) {
		document.getElementById('gadget').focus();
		document.getElementById('q').focus();
	}
	else {
		document.getElementById('gadget').focus();
		document.getElementById('q2').focus();
	}
}

function applyBingSmall() {
	if (document.getElementById('q').value == "") document.getElementById('q').style.backgroundImage = "url(images/search_bar.png)";
}

function applyBingLarge() {
	if (document.getElementById('q2').value == "") document.getElementById('q2').style.backgroundImage = "url(images/search_bar.png)";
}

function loadStrings() {
	document.getElementById('checkbox1').checked = "true";

	document.getElementById('main_color_title').innerText = mainColorTitle;
	document.getElementById('rss_booking_text').innerText = rssBookingText;

	document.getElementById('main_iconAnchor1').title = main_icon1Title;
	document.getElementById('main_iconAnchor2').title = main_icon2Title;
	document.getElementById('main_iconAnchor3').title = main_icon3Title;
	document.getElementById('main_iconAnchor4').title = main_icon4Title;
	document.getElementById('main_iconAnchor5').title = main_icon5Title;
	document.getElementById('main_iconAnchor6').title = main_icon6Title;
	document.getElementById('main_iconAnchor7').title = main_icon7Title;

	document.getElementById('rssIconSpan1').innerText = rssIconSpanText1;
	document.getElementById('rssIconSpan2').innerText = rssIconSpanText2;
	document.getElementById('rssIconSpan3').innerText = rssIconSpanText3;
	document.getElementById('rssIconSpan4').innerText = rssIconSpanText4;
	document.getElementById('rssIconSpan5').innerText = rssIconSpanText5;
	document.getElementById('rssIconSpan6').innerText = rssIconSpanText6;
	document.getElementById('rssIconSpan7').innerText = rssIconSpanText7;
	document.getElementById('rssIconSpan8').innerText = rssIconSpanText8;
	document.getElementById('rssIconSpan9').innerText = rssIconSpanText9;

	document.getElementById('checkbox1').value = checkbox1Value;
	document.getElementById('checkbox2').value = checkbox2Value;
	document.getElementById('checkbox3').value = checkbox3Value;
	document.getElementById('checkbox4').value = checkbox4Value;
	document.getElementById('checkbox5').value = checkbox5Value;
	document.getElementById('checkbox6').value = checkbox6Value;
	document.getElementById('checkbox7').value = checkbox7Value;
	document.getElementById('checkbox8').value = checkbox8Value;
	document.getElementById('checkbox9').value = checkbox9Value;

	document.getElementById('icon_buttonAnchor1').title = main_icon1Title;
	document.getElementById('icon_buttonAnchor2').title = main_icon2Title;
	document.getElementById('icon_buttonAnchor3').title = main_icon3Title;
	document.getElementById('icon_buttonAnchor4').title = main_icon5Title;
	document.getElementById('icon_buttonAnchor5').title = main_icon4Title;

	document.getElementById('main_color_icon7').title = mainColorTitle;
	document.getElementById('main_rss_left').title = rssBookingText;

	document.getElementById('searchOneInput1').value = searchOneInputValue;

	document.getElementById('msn_qa').title = whatsNewTitle;
	document.getElementById('main_msnqa').title = whatsNewTitle;

	document.getElementById('search_right').title = searchTitle;
	document.getElementById('main_search_right').title = searchTitle;
}