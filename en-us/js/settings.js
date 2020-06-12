function loadPage() {
	document.getElementById('uid').focus();
	readBuildVersionFromMetaTags();
	SettingsWindowsLive.innerText = SettingsWindowsLive_Text;
	SettingsMicrosoftCopyright_Text = SettingsMicrosoftCopyright_Text.replace("SystemYear", (new Date()).getFullYear());
	//SettingsMicrosoftCopyright_Text = SettingsMicrosoftCopyright_Text.replace(SettingsMicrosoftCopyright_Text.substring(0, 11), "Copyright &copy;");
	SettingsMicrosoftCopyright.innerHTML = SettingsMicrosoftCopyright_Text;
	SettingsAllRightsReserved.innerText = SettingsAllRightsReserved_Text;
	TosLink.href = Tos_Link;
	TosLink.innerText = Tos_Text;
	CocLink.href = Coc_Link;
	CocLink.innerText = Coc_Text;
	PrivacyLink.href = Privacy_Link;
	PrivacyLink.innerText = Privacy_Text;
}

function readBuildVersionFromMetaTags() {
	var metaArray = document.getElementsByTagName("meta"); // nice array of meta tags
	for (var i = 0; metaArray[i]; i++) {
		if (metaArray[i].getAttribute("name") == "Build") {
			SettingsWindowsLive_Text = SettingsWindowsLive_Text.replace("1.0.0.0", metaArray[i].getAttribute("content"));
			//SettingsWindowsLive_Text = SettingsWindowsLive_Text.replace("Online Services Gadget_", "");
			break;
		}
	}
}