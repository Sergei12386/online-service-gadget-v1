var iChars = "_?=~!#^+*|\":<>[]{}`\';()@&$%";

/***** check for invalid characters *****/
function IllegalCharsInString(s) {
	var retValue = false;
	for (var i = 0; i < s.length; i++) {
		if (iChars.indexOf(s.charAt(i)) != -1) {
			retValue = true;
			break;
		}
	}
	return retValue;
}

Type.createNamespace('Microsoft.Live.WhatsNew');

Microsoft.Live.WhatsNew._Strings = {
	$0: variable_0,
	$1: variable_1,
	$2: variable_2,
	$3: variable_3,
	$4: variable_4,
	$5: variable_5,
	$6: variable_6,
	$7: variable_7,
	$8: variable_8,
	$9: variable_9,
	$A: variable_A,
	$B: variable_B,
	$C: "Scroll Delay:",
	$D: "Seconds",
	$E: variable_E,
	$F: variable_F,
	$10: variable_10,
	$11: variable_11,
	$12: variable_12,
	$13: variable_13
};

Microsoft.Live.WhatsNew._PassportAuth = function (uid, password, environment) {
	if (IllegalCharsInString(password) == true) {
		password = Microsoft.Live.WhatsNew.Util.StringTools.htmlEncode(password);
	}
	this.$7 = environment;
	this.$D = String.Empty;
	this.$B = null;
	this.$C = null;
	this.$8 = uid;
	this.$9 = password;
	this.$A = 'MBI_KEY_OLD';
	userId = uid;
}
var userId = "";

Microsoft.Live.WhatsNew._PassportAuth.$10 = function ($p0) {
	switch ($p0.toUpperCase()) {
		case 'INT':
			if (userId.toLowerCase().indexOf('@msn.com') > -1) {
				return 'https://msnia.login.live.com/pp700/RST.srf';
			} else if (userId.toLowerCase().indexOf('@msn-int.com') > -1) {
				return 'https://msnia.login.live-int.com/pp700/RST.srf';
			} else if ((userId.toLowerCase().indexOf('@live-int.com') > -1) || (userId.toLowerCase().indexOf('@hotmail-int.com') > -1)) {
				return 'https://login.live-int.com/rst.srf';
			} else {
				return 'https://login.live.com/rst.srf';
			}
			case 'PRODUCTION':
				if (userId.toLowerCase().indexOf('@msn.com') > -1) {
					return 'https://msnia.login.live.com/RST.srf';
				} else if (userId.toLowerCase().indexOf('@msn-int.com') > -1) {
					return 'https://msnia.login.live-int.com/pp700/RST.srf';
				} else if ((userId.toLowerCase().indexOf('@live-int.com') > -1) || (userId.toLowerCase().indexOf('@hotmail-int.com') > -1)) {
					return 'https://login.live-int.com/rst.srf';
				} else {
					return 'https://login.live.com/rst.srf';
				}
	}
	throw new Error(Microsoft.Live.WhatsNew._Strings.$5);
}
Microsoft.Live.WhatsNew._PassportAuth.$11 = function ($p0) {
	switch ($p0.toUpperCase()) {
		case 'INT':
			return '730';
		case 'PRODUCTION':
			return '507';
	}
	throw new Error(Microsoft.Live.WhatsNew._Strings.$5);
}
Microsoft.Live.WhatsNew._PassportAuth.$12 = function ($p0) {
	switch ($p0.toUpperCase()) {
		case 'PRODUCTION':
			return 'sup.live.com';
		case 'INT':
			return 'sup.live-int.com';
	}
	throw new Error(Microsoft.Live.WhatsNew._Strings.$5);
}
Microsoft.Live.WhatsNew._PassportAuth.$13 = function ($p0) {
	var $0 = String.Empty;
	var $1 = String.Empty;
	var $2 = String.Empty;
	var $3 = String.Empty;
	$p0.setProperty('SelectionLanguage', 'XPath');
	$p0.setProperty('SelectionNamespaces', 'xmlns:S=\"http://schemas.xmlsoap.org/soap/envelope/\" \r\n            xmlns:wst=\"http://schemas.xmlsoap.org/ws/2004/04/trust\" \r\n            xmlns:wsse=\"http://schemas.xmlsoap.org/ws/2003/06/secext\" \r\n            xmlns:psf=\"http://schemas.microsoft.com/Passport/SoapServices/SOAPFault\"');
	var $4 = $p0.selectSingleNode('/S:Envelope/S:Header/psf:pp/psf:credProperties/psf:credProperty[@Name=\'CID\']');
	if ($4) {
		$0 = $4.text;
	}
	var $5 = $p0.selectSingleNode('/S:Envelope/S:Header/psf:pp/psf:credProperties/psf:credProperty[@Name=\'AuthMembername\']');
	if ($5) {
		$1 = $5.text;
	}
	var $6 = $p0.selectSingleNode('/S:Envelope/S:Body/wst:RequestSecurityTokenResponseCollection/wst:RequestSecurityTokenResponse\r\n            /wst:RequestedSecurityToken/wsse:BinarySecurityToken');
	if ($6) {
		$2 = $6.text;
	}
	var $7 = $p0.selectSingleNode('/S:Envelope/S:Fault/faultstring');
	if ($7) {
		$3 = $7.text;
	}
	return new Microsoft.Live.WhatsNew._PassportUser($0, $1, $2, $3);
}
Microsoft.Live.WhatsNew._PassportAuth.prototype = {
	$7: null,
	$8: null,
	$9: null,
	$A: null,
	$B: null,
	$C: null,
	$D: null,
	get_$E: function () {
		return this.$D;
	},
	set_$E: function ($p0) {
		this.$D = $p0;
		return $p0;
	},
	$F: function ($p0) {
		var $0 = Microsoft.Live.WhatsNew._PassportAuth.$10(this.$7);
		this.$B = null;
		this.$C = $p0;
		this.$14($0, this.$7);
	},
	$14: function ($p0, $p1) {
		var $0;
		var $1;
		var $2;
		var $3 = ScriptFX.Net.HTTPRequest.createRequest($1, 1);
		$0 = String.format('<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n            <Envelope xmlns=\"http://schemas.xmlsoap.org/soap/envelope/\" \r\n                    xmlns:wsse=\"http://schemas.xmlsoap.org/ws/2003/06/secext\" \r\n                    xmlns:saml=\"urn:oasis:names:tc:SAML:1.0:assertion\" \r\n                    xmlns:wsp=\"http://schemas.xmlsoap.org/ws/2002/12/policy\" \r\n                    xmlns:wsu=\"http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd\" \r\n                    xmlns:wsa=\"http://schemas.xmlsoap.org/ws/2004/03/addressing\" \r\n                    xmlns:wssc=\"http://schemas.xmlsoap.org/ws/2004/04/sc\" \r\n                    xmlns:wst=\"http://schemas.xmlsoap.org/ws/2004/04/trust\">\r\n                <Header>\r\n                    <ps:AuthInfo xmlns:ps=\"http://schemas.microsoft.com/Passport/SoapServices/PPCRL\" \r\n                            Id=\"PPAuthInfo\">\r\n                        <ps:HostingApp>{{DF60E2DF-88AD-4526-AE21-83D130EF0F68}}</ps:HostingApp>\r\n                        <ps:BinaryVersion>3</ps:BinaryVersion>\r\n                        <ps:UIVersion>1</ps:UIVersion>\r\n                        <ps:Cookies></ps:Cookies>\r\n                        <ps:RequestParams>AQAAAAIAAABsYwQAAAAxMDMz</ps:RequestParams>\r\n                    </ps:AuthInfo>\r\n                    <wsse:Security>\r\n                        <wsse:UsernameToken Id=\"user\">\r\n                            <wsse:Username>{0}</wsse:Username>\r\n                            <wsse:Password>{1}</wsse:Password>\r\n                        </wsse:UsernameToken>\r\n                    </wsse:Security>\r\n                </Header>\r\n                <Body>\r\n                    <ps:RequestMultipleSecurityTokens \r\n                            xmlns:ps=\"http://schemas.microsoft.com/Passport/SoapServices/PPCRL\"\r\n                            Id=\"RSTS\">\r\n                        <wst:RequestSecurityToken Id=\"RST0\">\r\n                            <wst:RequestType>\r\n                                http://schemas.xmlsoap.org/ws/2004/04/security/trust/Issue\r\n                            </wst:RequestType>\r\n                            <wsp:AppliesTo>\r\n                                <wsa:EndpointReference>\r\n                                    <wsa:Address>http://Passport.NET/tb</wsa:Address>\r\n                                </wsa:EndpointReference>\r\n                            </wsp:AppliesTo>\r\n                        </wst:RequestSecurityToken>\r\n                        <wst:RequestSecurityToken Id=\"RST1\">\r\n                            <wst:RequestType>\r\n                                http://schemas.xmlsoap.org/ws/2004/04/security/trust/Issue\r\n                            </wst:RequestType>\r\n                            <wsp:AppliesTo>\r\n                                <wsa:EndpointReference>\r\n                                    <wsa:Address>{2}</wsa:Address>\r\n                                </wsa:EndpointReference>\r\n                            </wsp:AppliesTo>\r\n                            <wsse:PolicyReference URI=\"{3}\"></wsse:PolicyReference>\r\n                        </wst:RequestSecurityToken>\r\n                    </ps:RequestMultipleSecurityTokens>\r\n                </Body>\r\n            </Envelope>', this.$8, this.$9, $2, this.$A);
		$1 = $p0;
		$2 = Microsoft.Live.WhatsNew._PassportAuth.$12($p1);
		$3.set_content($0);
		$3.invoke(Delegate.create(this, this.$15));
	},
	$15: function ($p0, $p1) {
		switch ($p0.get_state()) {
			case 2:
				var $0 = $p0.get_response();
				var $1 = $0.getXML();
				if ($1) {
					this.$B = Microsoft.Live.WhatsNew._PassportAuth.$13($1);
				} else {
					this.$B = new Microsoft.Live.WhatsNew._PassportUser(String.Empty, String.Empty, String.Empty, Microsoft.Live.WhatsNew._Strings.$E);
				}
				if (this.$C) {
					this.$C.invoke(this.$B);
				}
				break;
			case 0:
				break;
			case 4:
				break;
		}
	}
}
Microsoft.Live.WhatsNew._PassportUser = function (cid, uid, ticket, error) {
	this.$0 = cid;
	this.$1 = uid;
	this.$2 = ticket;
	this.$3 = error;
}
Microsoft.Live.WhatsNew._PassportUser.prototype = {
	$0: null,
	$1: null,
	$2: null,
	$3: null,
	get_$4: function () {
		return this.$0;
	},
	get_$5: function () {
		return this.$1;
	},
	get_$6: function () {
		return this.$2;
	},
	get_$7: function () {
		return this.$3;
	}
}
Microsoft.Live.WhatsNew.GadgetScriptlet = function () {
	this.$0 = new Microsoft.Live.WhatsNew._WhatsNewFeed();
	this.$1 = new Microsoft.Live.WhatsNew.UI._GadgetPage(this.$0);
	Gadget.settingsUI = 'Settings.html';
	Gadget.onSettingsClosed = Delegate.create(this, this.$3);
	Gadget.onDock = Delegate.create(this, this.$2);
	Gadget.onUndock = Delegate.create(this, this.$4);
	this.$1.$7();
	this.$6();
	window.setInterval(Delegate.create(this, this.$6), 1200000);
}
Microsoft.Live.WhatsNew.GadgetScriptlet.main = function (arguments) {
	var $0 = new Microsoft.Live.WhatsNew.GadgetScriptlet();
}
Microsoft.Live.WhatsNew.GadgetScriptlet.prototype = {
	$0: null,
	$1: null,
	$2: function () {
		this.$1.$7();
		Microsoft.Live.WhatsNew._WhatsNewSettings.$12('Docked');
	},
	$3: function () {
		if (Microsoft.Live.WhatsNew._WhatsNewSettings.$11()) {
			this.$6();
			Microsoft.Live.WhatsNew._WhatsNewSettings.$12('Settings Closed');
		}
	},
	$4: function () {
		this.$1.$7();
		Microsoft.Live.WhatsNew._WhatsNewSettings.$12('Undocked');
	},
	$5: function ($p0, $p1) {
		var $0 = $p0.get_response();
		switch ($p0.get_state()) {
			case 2:
				if ($0) {
					this.$0.$8($0.getXML());
					this.$1.$8();
				}
				break;
			case 0:
				break;
			case 4:
				break;
		}
	},
	$6: function () {
		if (!String.isNullOrEmpty(Microsoft.Live.WhatsNew._WhatsNewSettings.get_$C())) {
			Microsoft.Live.WhatsNew._Strings.$F = Microsoft.Live.WhatsNew._Strings.$A;
			this.$1.get_$6().removeMessage('feedSettings');
			var $0 = ScriptFX.Net.HTTPRequest.createRequest(Microsoft.Live.WhatsNew._WhatsNewSettings.get_$C(), 0);
			$0.invoke(Delegate.create(this, this.$5));
		} else {
			this.$1.get_$6().addMessage('feedSettings', Microsoft.Live.WhatsNew._Strings.$F);
		}
	}
}
Microsoft.Live.WhatsNew.FlyoutScriptlet = function () {}
Microsoft.Live.WhatsNew.FlyoutScriptlet.main = function (arguments) {
	var $0 = new Microsoft.Live.WhatsNew.FlyoutScriptlet();
}
Microsoft.Live.WhatsNew.SettingsScriptlet = function () {
	Gadget.onSettingsClosing = Delegate.create(this, this.$3);
	this.$0 = new Microsoft.Live.WhatsNew.UI.SettingsPage();
	$('getWhatsNewURL').attachEvent('onclick', Delegate.create(this, this.$4));
	this.$0.set_scrollDelayTime(Microsoft.Live.WhatsNew._WhatsNewSettings.get_$E().toString());
	this.$0.set_detailEnabled(Microsoft.Live.WhatsNew._WhatsNewSettings.get_$F());
	this.$2 = Microsoft.Live.WhatsNew._WhatsNewSettings.get_$C();
	this.$1 = Microsoft.Live.WhatsNew._WhatsNewSettings.get_$D();
	if (!String.isNullOrEmpty(this.$1) && !String.isNullOrEmpty(this.$2)) {
		this.$0.set_memberName(this.$1);
		this.$0.hideLoginForm();
	} else {
		this.$0.set_memberName(String.Empty);
		this.$0.showLoginForm();
	}
}
Microsoft.Live.WhatsNew.SettingsScriptlet.main = function (arguments) {
	var $0 = new Microsoft.Live.WhatsNew.SettingsScriptlet();
}
Microsoft.Live.WhatsNew.SettingsScriptlet.prototype = {
	$0: null,
	$1: null,
	$2: null,
	$3: function ($p0) {
		if (!$p0.closeAction) {
			if (!String.isNullOrEmpty(($('uid')).value)) {
				if (Microsoft.Live.WhatsNew._WhatsNewSettings.get_$D() !== ($('uid')).value) {
					Microsoft.Live.WhatsNew._WhatsNewSettings.$12('User logged in');
					this.$4();
					$p0.cancel = true;
					return;
				}
			}
			Microsoft.Live.WhatsNew._WhatsNewSettings.set_$C(this.$2);
			Microsoft.Live.WhatsNew._WhatsNewSettings.set_$D(this.$1);
			Microsoft.Live.WhatsNew._WhatsNewSettings.set_$E(parseInt(this.$0.get_scrollDelayTime()));
			Microsoft.Live.WhatsNew._WhatsNewSettings.set_$10(true);
			Microsoft.Live.WhatsNew._WhatsNewSettings.set_$F(this.$0.get_detailEnabled());
			$p0.cancel = false;
		}
	},
	$4: function () {
		var $0 = ($('uid')).value;
		var $1 = ($('password')).value;
		$('errors').innerHTML = Microsoft.Live.WhatsNew._Strings.$8;
		var $2 = new Microsoft.Live.WhatsNew._PassportAuth($0, $1, 'PRODUCTION');
		$2.$F(Delegate.create(this, this.$5));
	},
	$5: function ($p0) {
		if (String.isNullOrEmpty($p0.get_$7())) {
			this.$1 = $p0.get_$5();
			var $0 = Microsoft.Live.WhatsNew.Util.BigInt.parseHexIntToDecRadixBigInt($p0.get_$4());
			var $1 = new Microsoft.Live.WhatsNew.WhatsNewService($0.toString(), $p0.get_$6(), 'PRODUCTION');
			$1.getFeedUrl(Delegate.create(this, this.$6));
		} else {
			$('errors').innerHTML = $p0.get_$7();
		}
	},
	$6: function ($p0, $p1) {
		if (!String.isNullOrEmpty($p0)) {
			this.$2 = $p0;
			this.$0.set_memberName(this.$1);
			this.$0.hideLoginForm();
			$('errors').innerHTML = '';
		}
	}
}
Microsoft.Live.WhatsNew._WhatsNewEntry = function (entryNode) {
	this.id = entryNode.selectSingleNode('descendant::atom:id').text;
	this.$0 = entryNode.selectSingleNode('descendant::atom:title').text;
	this.$1 = entryNode.selectSingleNode('descendant::atom:summary').text;
	this.$3 = entryNode.selectSingleNode('descendant::atom:content').text;
	this.$2 = entryNode.selectSingleNode('descendant::atom:link').text;
	this.$4 = Microsoft.Live.WhatsNew.Util._AtomFeedTools.$0(entryNode.selectSingleNode('descendant::atom:updated').text);
	this.$5 = entryNode.selectSingleNode('descendant::live:id').text;
}
Microsoft.Live.WhatsNew._WhatsNewEntry.prototype = {
	id: null,
	$0: null,
	$1: null,
	$2: null,
	$3: null,
	$4: null,
	$5: null,
	get_id: function () {
		return this.id;
	},
	get_$6: function () {
		return this.$1;
	},
	get_$7: function () {
		return this.$3;
	}
}
Microsoft.Live.WhatsNew._WhatsNewFeed = function () {
	this.$6 = [];
}
Microsoft.Live.WhatsNew._WhatsNewFeed.prototype = {
	$1: null,
	id: null,
	$2: null,
	$3: null,
	$4: null,
	$5: null,
	$6: null,
	get_id: function () {
		return this.id;
	},
	get_$7: function () {
		return this.$6;
	},
	$8: function ($p0) {
		if ($p0) {
			$p0.setProperty('SelectionLanguage', 'XPath');
			$p0.setProperty('SelectionNamespaces', 'xmlns:atom=\"http://www.w3.org/2005/Atom\" xmlns:live=\"http://schemas.microsoft.com/live/spaces/2006/rss\"');
			var $0 = $p0.selectSingleNode('/atom:feed/atom:id').text;
			var $1 = Microsoft.Live.WhatsNew.Util._AtomFeedTools.$0($p0.selectSingleNode('/atom:feed/atom:updated').text);
			if (this.id !== $0 || $1 > this.$5) {
				this.id = $0;
				this.$1 = $p0.selectSingleNode('/atom:feed/atom:title').text;
				this.$2 = $p0.selectSingleNode('/atom:feed/atom:link[@rel=\'self\']').attributes.getNamedItem('href').text;
				this.$3 = $p0.selectSingleNode('/atom:feed/atom:link[@rel=\'alternate\']').attributes.getNamedItem('href').text;
				this.$4 = $p0.selectSingleNode('/atom:feed/atom:author/atom:name').text;
				this.$5 = $1;
				var $2 = $p0.selectNodes('/atom:feed/atom:entry');
				this.$6.clear();
				for (var $3 = 0; $3 < $2.length; $3++) {
					var $4 = new Microsoft.Live.WhatsNew._WhatsNewEntry($2[$3]);
					this.$6.add($4);
				}
				return true;
			}
		}
		return false;
	}
}
Microsoft.Live.WhatsNew.WhatsNewService = function (cid, ticket, environment) {
	this.$5 = cid;
	this.$4 = ticket;
	this.$6 = environment;
	this.$7 = null;
}
Microsoft.Live.WhatsNew.WhatsNewService.$8 = function ($p0) {
	switch ($p0.toUpperCase()) {
		case 'INT':
			return 'http://sup.live-int.com/whatsnew/whatsnewservice.asmx';
		case 'PRODUCTION':
			return 'http://sup.live.com/whatsnew/whatsnewservice.asmx';
	}
	throw new Error(Microsoft.Live.WhatsNew._Strings.$6);
}
Microsoft.Live.WhatsNew.WhatsNewService.prototype = {
	$4: null,
	$5: null,
	$6: null,
	$7: null,
	getFeedUrl: function (callback) {
		var $0;
		var $1 = ScriptFX.Net.HTTPRequest.createRequest($0, 1);
		var $2 = this.$4;
		$0 = Microsoft.Live.WhatsNew.WhatsNewService.$8(this.$6);
		$1.get_headers()['Content-Type'] = 'text/xml; charset=utf-8';
		$1.set_content(String.format('<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n            <soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" \r\n                    xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" \r\n                    xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\r\n                <soap:Header>\r\n                    <WNApplicationHeader xmlns=\"http://www.msn.com/webservices/AddressBook\">\r\n                        <ApplicationId>3B119D87-1D76-4474-91AD-0D7267E86D04</ApplicationId>\r\n                    </WNApplicationHeader>\r\n                    <WNAuthHeader xmlns=\"http://www.msn.com/webservices/AddressBook\">\r\n                        <TicketToken>{0}</TicketToken>\r\n                    </WNAuthHeader>\r\n                </soap:Header>\r\n                <soap:Body>\r\n                    <GetContactsRecentActivity xmlns=\"http://www.msn.com/webservices/AddressBook\">\r\n                        <entityHandle>\r\n                            <Cid>{1}</Cid>\r\n                        </entityHandle>\r\n                        <locales>\r\n                            <string>{2}</string>\r\n                        </locales>\r\n                        <count>1</count>\r\n                    </GetContactsRecentActivity>\r\n                </soap:Body>\r\n            </soap:Envelope>', $2, this.$5, Microsoft.Live.WhatsNew._Strings.$7));
		$1.invoke(Delegate.create(this, this.onFeedUrlRequestComplete));
		$2 = Microsoft.Live.WhatsNew.Util.StringTools.htmlEncode($2);
		this.$7 = callback;
	},
	onFeedUrlRequestComplete: function (request, context) {
		if (request.get_state() === 2) {
			var $0 = request.get_response();
			var $1 = $0.getXML();
			var $2 = $1.selectSingleNode('/soap:Envelope/soap:Body/ab:GetContactsRecentActivityResponse\r\n            /ab:GetContactsRecentActivityResult/ab:FeedUrl');
			var $3 = String.Empty;
			var $4 = $1.selectSingleNode('/soap:Envelope/soap:Body/soap:Fault/faultstring');
			var $5 = String.Empty;
			$1.setProperty('SelectionLanguage', 'XPath');
			$1.setProperty('SelectionNamespaces', 'xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" \r\n            xmlns:ab=\"http://www.msn.com/webservices/AddressBook\"');
			if ($2) {
				$3 = $2.text;
			}
			if ($4) {
				$5 = $4.text;
			}
			if (this.$7) {
				this.$7.invoke($3, $5);
			}
		}
	}
}
Microsoft.Live.WhatsNew._WhatsNewSettings = function () {}
Microsoft.Live.WhatsNew._WhatsNewSettings.get_$C = function () {
	if (!Microsoft.Live.WhatsNew._WhatsNewSettings.$6) {
		Microsoft.Live.WhatsNew._WhatsNewSettings.$11();
	}
	return Microsoft.Live.WhatsNew._WhatsNewSettings.$7;
}
Microsoft.Live.WhatsNew._WhatsNewSettings.set_$C = function ($p0) {
	Microsoft.Live.WhatsNew._WhatsNewSettings.$7 = $p0;
	Gadget.Settings.writeString('urlSetting', Microsoft.Live.WhatsNew._WhatsNewSettings.$7);
	return $p0;
}
Microsoft.Live.WhatsNew._WhatsNewSettings.get_$D = function () {
	if (!Microsoft.Live.WhatsNew._WhatsNewSettings.$6) {
		Microsoft.Live.WhatsNew._WhatsNewSettings.$11();
	}
	return Microsoft.Live.WhatsNew._WhatsNewSettings.$8;
}
Microsoft.Live.WhatsNew._WhatsNewSettings.set_$D = function ($p0) {
	Microsoft.Live.WhatsNew._WhatsNewSettings.$8 = $p0;
	Gadget.Settings.writeString('memberName', Microsoft.Live.WhatsNew._WhatsNewSettings.$8);
	return $p0;
}
Microsoft.Live.WhatsNew._WhatsNewSettings.get_$E = function () {
	if (!Microsoft.Live.WhatsNew._WhatsNewSettings.$6) {
		Microsoft.Live.WhatsNew._WhatsNewSettings.$11();
	}
	return Microsoft.Live.WhatsNew._WhatsNewSettings.$9;
}
Microsoft.Live.WhatsNew._WhatsNewSettings.set_$E = function ($p0) {
	Microsoft.Live.WhatsNew._WhatsNewSettings.$9 = $p0;
	Gadget.Settings.write('scrollDelayTime', Microsoft.Live.WhatsNew._WhatsNewSettings.$9);
	return $p0;
}
Microsoft.Live.WhatsNew._WhatsNewSettings.get_$F = function () {
	if (!Microsoft.Live.WhatsNew._WhatsNewSettings.$6) {
		Microsoft.Live.WhatsNew._WhatsNewSettings.$11();
	}
	return Microsoft.Live.WhatsNew._WhatsNewSettings.$A;
}
Microsoft.Live.WhatsNew._WhatsNewSettings.set_$F = function ($p0) {
	Microsoft.Live.WhatsNew._WhatsNewSettings.$A = $p0;
	Gadget.Settings.write('detailEnabled', Microsoft.Live.WhatsNew._WhatsNewSettings.$A);
	return $p0;
}
Microsoft.Live.WhatsNew._WhatsNewSettings.get_$10 = function () {
	if (!Microsoft.Live.WhatsNew._WhatsNewSettings.$6) {
		Microsoft.Live.WhatsNew._WhatsNewSettings.$11();
	}
	return Microsoft.Live.WhatsNew._WhatsNewSettings.$B;
}
Microsoft.Live.WhatsNew._WhatsNewSettings.set_$10 = function ($p0) {
	Microsoft.Live.WhatsNew._WhatsNewSettings.$B = $p0;
	Gadget.Settings.write('autoScrollEnabled', Microsoft.Live.WhatsNew._WhatsNewSettings.$B);
	return $p0;
}
Microsoft.Live.WhatsNew._WhatsNewSettings.$11 = function () {
	Microsoft.Live.WhatsNew._WhatsNewSettings.$6 = true;
	var $0 = false;
	var $1 = Gadget.Settings.readString('urlSetting');
	if (!$1) {
		$1 = String.Empty;
	}
	if ($1 !== Microsoft.Live.WhatsNew._WhatsNewSettings.$7) {
		Microsoft.Live.WhatsNew._WhatsNewSettings.$7 = $1;
		$0 = true;
	}
	var $2 = Gadget.Settings.readString('memberName');
	if (!$2) {
		$2 = String.Empty;
	}
	if ($2 !== Microsoft.Live.WhatsNew._WhatsNewSettings.$8) {
		Microsoft.Live.WhatsNew._WhatsNewSettings.$8 = $2;
		$0 = true;
	}
	var $3 = Gadget.Settings.read('scrollDelayTime');
	if (Type.getInstanceType($3) !== Number) {
		$3 = 10000;
	}
	if ($3 !== Microsoft.Live.WhatsNew._WhatsNewSettings.$9) {
		Microsoft.Live.WhatsNew._WhatsNewSettings.$9 = $3;
		$0 = true;
	}
	var $4 = Gadget.Settings.read('detailEnabled');
	if (Type.getInstanceType($4) !== Boolean) {
		$4 = true;
	}
	if ($4 !== Microsoft.Live.WhatsNew._WhatsNewSettings.$A) {
		Microsoft.Live.WhatsNew._WhatsNewSettings.$A = $4;
		$0 = true;
	}
	// var $5 = Gadget.Settings.read('autoScrollEnabled');      <--- This one is crap. DO NOT UNCOMMENTING THIS!!!!
	var $5 = Gadget.Settings.read('NoAutoAcroll');
	if (Type.getInstanceType($5) !== Boolean) {
		$5 = false;
	}
	if ($5 !== Microsoft.Live.WhatsNew._WhatsNewSettings.$B) {
		Microsoft.Live.WhatsNew._WhatsNewSettings.$B = $5;
		$0 = true;
	}
	return $0;
}
Microsoft.Live.WhatsNew._WhatsNewSettings.$12 = function ($p0) {}
Type.createNamespace('Microsoft.Live.WhatsNew.UI');
Microsoft.Live.WhatsNew.UI._FadeAnimation = function (domElement, duration, opacity) {
	Microsoft.Live.WhatsNew.UI._FadeAnimation.constructBase(this, [domElement, duration]);
	this.$2_0 = opacity;
}
Microsoft.Live.WhatsNew.UI._FadeAnimation.prototype = {
	$2_0: 0,
	$2_1: false,
	get_$2_2: function () {
		return this.$2_1;
	},
	$2_3: function () {
		if (this.get_isPlaying()) {
			this.stop(0);
		}
		this.$2_1 = true;
		this.play();
	},
	$2_4: function () {
		if (this.get_isPlaying()) {
			this.stop(0);
		}
		this.$2_1 = false;
		this.play();
	},
	$2_5: function () {
		if (this.get_isPlaying()) {
			this.stop(0);
		}
	},
	performCleanup: function () {
		Microsoft.Live.WhatsNew.UI._FadeAnimation.callBase(this, 'performCleanup');
		if (!this.$2_1) {
			this.$2_6(0);
		} else {
			this.$2_6(this.$2_0);
		}
	},
	performSetup: function () {
		Microsoft.Live.WhatsNew.UI._FadeAnimation.callBase(this, 'performSetup');
		if (this.$2_1) {
			this.$2_6(0);
		} else {
			this.$2_6(this.$2_0);
		}
	},
	performTweening: function ($p0) {
		if (this.$2_1) {
			this.$2_6(1);
		} else {
			this.$2_6(1);
		}
	},
	$2_6: function ($p0) {
		if (ScriptFX.Application.current.get_isIE()) {} else {}
	}
}
Microsoft.Live.WhatsNew.UI._GadgetPage = function (whatsNewFeed) {
	var $0 = $('navUp');
	var $1 = $('navDown');
	this.$0 = whatsNewFeed;
	this.$1 = $('gadgetBody');
	this.$3 = new Microsoft.Live.WhatsNew.UI.MessageArea($('messages'));
	this.$5 = new Microsoft.Live.WhatsNew.UI._FadeAnimation(this.$1, 1500, 1);
	this.$4 = new Microsoft.Live.WhatsNew.UI._ScrollAnimation(this.$1, 4);
	this.$4.add_repeating(Delegate.create(this, this.$10));
	$0.attachEvent('onclick', Delegate.create(this, this.$C));
	$1.attachEvent('onclick', Delegate.create(this, this.$D));
	this.$2 = $('navPause');
	this.$2.attachEvent('onclick', Delegate.create(this, this.$B));
	if (Microsoft.Live.WhatsNew._WhatsNewSettings.get_$10()) {
		ScriptFX.UI.Element.removeCSSClass(this.$2, 'navPlay');
		ScriptFX.UI.Element.addCSSClass(this.$2, 'navPause');
	} else {
		ScriptFX.UI.Element.removeCSSClass(this.$2, 'navPause');
		ScriptFX.UI.Element.addCSSClass(this.$2, 'navPlay');
	}
}
Microsoft.Live.WhatsNew.UI._GadgetPage.prototype = {
	$0: null,
	$1: null,
	$2: null,
	$3: null,
	$4: null,
	$5: null,
	get_$6: function () {
		return this.$3;
	},
	$7: function () {
		if (this.$4.get_isPlaying()) {
			this.$4.stop(0);
		}
		this.$5.$2_5();
		this.$9(this.$5, null);
		if (Gadget.docked) {
			ScriptFX.UI.Element.removeCSSClass(document.body, 'undocked');
			ScriptFX.UI.Element.addCSSClass(document.body, 'docked');
			dockStateChanged();
		} else {
			ScriptFX.UI.Element.removeCSSClass(document.body, 'docked');
			ScriptFX.UI.Element.addCSSClass(document.body, 'undocked');
			dockStateChanged();
		}
		this.$F();
	},
	$8: function () {
		if (this.$4.get_isPlaying()) {
			this.$4.stop(0);
		}
		this.$5.$2_5();
		this.$5.add_stopped(Delegate.create(this, this.$9));
		this.$5.$2_4();
	},
	$9: function ($p0, $p1) {
		($p0).remove_stopped(Delegate.create(this, this.$9));
		var $0 = $('whatsNewFeed');
		$0.innerHTML = String.Empty;
		var $1 = this.$0.get_$7();
		for (var $2 = 0; $2 < $1.length; $2++) {
			var $3 = document.createElement('li');
			var $4 = document.createElement('div');
			ScriptFX.UI.Element.addCSSClass($4, 'whatsNewEntryTitle');
			$3.appendChild($4);
			$4.innerHTML = ($1[$2]).get_$6();
			var $5 = ($1[$2]).get_$7();
			if (Microsoft.Live.WhatsNew._WhatsNewSettings.get_$F() && !String.isNullOrEmpty($5) && !Gadget.docked) {
				var $7 = document.createElement('div');
				ScriptFX.UI.Element.addCSSClass($7, 'whatsNewEntryContent');
				$3.appendChild($7);
				$7.innerHTML = $5;
			}
			var $6 = document.createElement('span');
			ScriptFX.UI.Element.addCSSClass($6, 'whatsNewEntryClear');
			$3.appendChild($6);
			$0.appendChild($3);
		}
		if ($1.length < 1) {
			this.get_$6().addMessage('feedSettings', Microsoft.Live.WhatsNew._Strings.$F);
		}
		this.$1.scrollTop = 0;
		this.$5.$2_5();
		this.$5.add_stopped(Delegate.create(this, this.$A));
		this.$5.$2_3();
	},
	$A: function ($p0, $p1) {
		($p0).remove_stopped(Delegate.create(this, this.$A));
		this.$F();
	},
	$B: function () {
		if (!this.$5.get_isPlaying()) {
			if (Microsoft.Live.WhatsNew._WhatsNewSettings.get_$10()) {
				Microsoft.Live.WhatsNew._WhatsNewSettings.set_$10(false);
				if (this.$4.get_isPlaying()) {
					this.$4.stop(0);
				}
				ScriptFX.UI.Element.removeCSSClass(this.$2, 'navPause');
				ScriptFX.UI.Element.addCSSClass(this.$2, 'navPlay');
			} else {
				Microsoft.Live.WhatsNew._WhatsNewSettings.set_$10(true);
				this.$F();
				ScriptFX.UI.Element.removeCSSClass(this.$2, 'navPlay');
				ScriptFX.UI.Element.addCSSClass(this.$2, 'navPause');
			}
		}
	},
	$C: function () {
		if (!this.$5.get_isPlaying()) {
			this.$4.remove_stopped(Delegate.create(this, this.$E));
			this.$4.$1_A();
			this.$4.add_stopped(Delegate.create(this, this.$E));
			this.$4.$1_9((this.$1.offsetHeight * 0.75), 1, 0);
		}
		Microsoft.Live.WhatsNew._WhatsNewSettings.$12('Back button clicked');
	},
	$D: function () {
		if (!this.$5.get_isPlaying()) {
			this.$4.remove_stopped(Delegate.create(this, this.$E));
			this.$4.$1_A();
			this.$4.add_stopped(Delegate.create(this, this.$E));
			this.$4.$1_8((this.$1.offsetHeight * 0.75), 1, 0);
		}
		Microsoft.Live.WhatsNew._WhatsNewSettings.$12('Next button clicked');
	},
	$E: function ($p0, $p1) {
		($p0).remove_stopped(Delegate.create(this, this.$E));
		this.$F();
	},
	$F: function () {
		if (Microsoft.Live.WhatsNew._WhatsNewSettings.get_$10()) {
			this.$4.$1_8((this.$1.offsetHeight * 0.75), 0, Microsoft.Live.WhatsNew._WhatsNewSettings.get_$E());
		}
	},
	$10: function ($p0, $p1) {
		var $0 = $p0;
		if ($0.get_$1_7()) {
			$p1.set_canceled(true);
			window.setTimeout(Delegate.create(this, this.$8), Microsoft.Live.WhatsNew._WhatsNewSettings.get_$E());
		}
	}
}
Microsoft.Live.WhatsNew.UI.MessageArea = function (messageArea) {
	this.$0 = messageArea;
	this.$1 = {};
}
Microsoft.Live.WhatsNew.UI.MessageArea.prototype = {
	$0: null,
	$1: null,
	addMessage: function (key, message) {
		this.$1[key] = message;
		this.$2();
	},
	removeMessage: function (key) {
		if (Object.keyExists(this.$1, key)) {
			delete this.$1[key];
		}
		this.$2();
	},
	$2: function () {
		if (Object.getKeyCount(this.$1) > 0) {
			ScriptFX.UI.Element.removeCSSClass(this.$0, 'hidden');
			var $0 = true;
			var $dict1 = this.$1;
			for (var $key2 in $dict1) {
				var $1 = {
					key: $key2,
					value: $dict1[$key2]
				};
				if ($0) {
					this.$0.innerHTML = $1.value.toString();
				} else {
					this.$0.innerHTML += '<br />' + $1.value.toString();
				}
			}
		} else {
			ScriptFX.UI.Element.addCSSClass(this.$0, 'hidden');
			this.$0.innerHTML = String.Empty;
		}
	}
}
Microsoft.Live.WhatsNew.UI._ScrollAnimation = function (domElement, scrollStepSize) {
	Microsoft.Live.WhatsNew.UI._ScrollAnimation.constructBase(this, [domElement]);
	this.$1_0 = scrollStepSize;
}
Microsoft.Live.WhatsNew.UI._ScrollAnimation.prototype = {
	$1_0: 0,
	$1_1: 0,
	$1_2: false,
	$1_3: 0,
	$1_4: 0,
	$1_5: 0,
	$1_6: false,
	get_$1_7: function () {
		return this.$1_6;
	},
	$1_8: function ($p0, $p1, $p2) {
		try {
			if (this.get_isPlaying()) {
				this.stop(0);
			}
			this.$1_5 = $p2;
			this.set_repeatCount($p1);
			this.$1_1 = $p0;
			this.$1_2 = true;
			this.play();
		} catch ($0) {}
	},
	$1_9: function ($p0, $p1, $p2) {
		if (this.get_isPlaying()) {
			this.stop(0);
		}
		this.$1_5 = $p2;
		this.set_repeatCount($p1);
		this.$1_1 = $p0;
		this.$1_2 = false;
		this.play();
	},
	$1_A: function () {
		if (this.get_isPlaying()) {
			this.stop(0);
		}
	},
	playCore: function () {
		this.$1_3 = this.get_domElement().scrollTop;
		this.$1_4 = new Date().getTime();
	},
	progressCore: function ($p0, $p1) {
		if ($p0) {
			this.$1_3 = this.get_domElement().scrollTop;
			this.$1_4 = $p1;
		}
		if (this.$1_5 && (this.$1_4 + this.$1_5) > $p1) {
			return false;
		}
		this.$1_6 = false;
		var $0 = this.$1_3 + this.$1_1 - this.get_domElement().scrollTop;
		if ($0 > this.$1_0) {
			$0 = this.$1_0;
		}
		if (this.$1_2) {
			this.$1_6 = this.$1_B($0);
		} else {
			this.$1_6 = this.$1_B(-1 * $0);
		}
		if (this.get_domElement().scrollTop >= this.$1_3 + this.$1_1 || this.get_domElement().scrollTop <= this.$1_3 - this.$1_1 || this.$1_6) {
			return true;
		}
		return false;
	},
	stopCore: function ($p0, $p1) {},
	$1_B: function ($p0) {
		var $0 = this.get_domElement().scrollTop;
		this.get_domElement().scrollTop += $p0;
		if (this.get_domElement().scrollTop <= 0 || this.get_domElement().scrollTop + this.get_domElement().offsetHeight >= this.get_domElement().scrollHeight) {
			return true;
		}
		return false;
	}
}
Microsoft.Live.WhatsNew.UI.SettingsPage = function () {
	this.$1 = $('uid');
	this.$2 = $('password');
	this.$4 = $('detailCheckbox');
	this.$5 = $('userInfo');
	this.$6 = $('memberName');
	this.$7 = $('loginForm');
	this.$8 = $('settingsForm');
	$('userInfoHeader').innerText = Microsoft.Live.WhatsNew._Strings.$10;
	$('userLabel').innerText = Microsoft.Live.WhatsNew._Strings.$11;
	$('changeUser').innerText = Microsoft.Live.WhatsNew._Strings.$0;
	$('enterUserInfoHeader').innerText = Microsoft.Live.WhatsNew._Strings.$3;
	$('usernameLabel').innerText = Microsoft.Live.WhatsNew._Strings.$12;
	$('uidExplanation').innerText = Microsoft.Live.WhatsNew._Strings.$4;
	$('passwordLabel').innerText = Microsoft.Live.WhatsNew._Strings.$B;
	$('getWhatsNewURL').innerText = Microsoft.Live.WhatsNew._Strings.$9;
	$('detailCheckboxLabel').innerText = Microsoft.Live.WhatsNew._Strings.$1;
	$('detailCheckBoxNote').innerText = Microsoft.Live.WhatsNew._Strings.$2;
	$('whatsnewLink').innerHTML = Microsoft.Live.WhatsNew._Strings.$13;
	var $enum1 = Microsoft.Live.WhatsNew.UI.SettingsPage.$0.getEnumerator();
	while ($enum1.moveNext()) {
		var $0 = $enum1.get_current();
		var $1 = document.createElement('option');
		$1.innerText = String.format('{0} {1}', $0.toString(), Microsoft.Live.WhatsNew._Strings.$D);
		var $2 = $0 * 1000;
		$1.value = $2.toString();
	}
	$('changeUser').attachEvent('onclick', Delegate.create(this, this.showLoginForm));
}
Microsoft.Live.WhatsNew.UI.SettingsPage.prototype = {
	$1: null,
	$2: null,
	$3: null,
	$4: null,
	$5: null,
	$6: null,
	$7: null,
	$8: null,
	get_scrollDelayTime: function () {},
	set_scrollDelayTime: function (value) {
		return value;
	},
	get_detailEnabled: function () {
		return this.$4.checked;
	},
	set_detailEnabled: function (value) {
		this.$4.checked = value;
		return value;
	},
	get_memberName: function () {
		return this.$6.innerText;
	},
	set_memberName: function (value) {
		this.$6.innerText = value;
		return value;
	},
	showLoginForm: function () {
		ScriptFX.UI.Element.removeCSSClass(this.$7, 'hidden');
		ScriptFX.UI.Element.addCSSClass(this.$5, 'hidden');
		ScriptFX.UI.Element.addCSSClass(this.$8, 'hidden');
		document.getElementById('uid').focus();
	},
	hideLoginForm: function () {
		ScriptFX.UI.Element.addCSSClass(this.$7, 'hidden');
		ScriptFX.UI.Element.removeCSSClass(this.$5, 'hidden');
		ScriptFX.UI.Element.removeCSSClass(this.$8, 'hidden');
		this.clearLoginForm();
	},
	clearLoginForm: function () {
		this.$1.value = String.Empty;
		this.$2.value = String.Empty;
	}
}
Type.createNamespace('Microsoft.Live.WhatsNew.Util');
Microsoft.Live.WhatsNew.Util._AtomFeedTools = function () {}
Microsoft.Live.WhatsNew.Util._AtomFeedTools.$0 = function ($p0) {
	var $0 = new RegExp('([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})');
	var $1 = $0.exec($p0);
	return new Date(parseInt($1[1]), parseInt($1[2]) - 1, parseInt($1[3]), parseInt($1[4]), parseInt($1[5]), parseInt($1[6]));
}
Microsoft.Live.WhatsNew.Util.BigInt = function (radix, v) {
	this.$4 = [];
	Debug.assert(radix === 16 || radix === 1000, 'The radix value provided is invalid.');
	this.$3 = radix;
	this.$4.insert(0, v);
	this.$6 = 1;
	this.$D();
}
Microsoft.Live.WhatsNew.Util.BigInt.isDecimalInteger = function (v) {
	if (String.isNullOrEmpty(v)) {
		return false;
	}
	v = v.trim();
	for (var $0 = 0; $0 < v.length; $0++) {
		var $1 = v.charAt($0);
		if ($1 < '0' || $1 > '9') {
			if ($0 > 0) {
				return false;
			} else if ($1 !== '+' && $1 !== '-') {
				return false;
			}
		}
	}
	return true;
}
Microsoft.Live.WhatsNew.Util.BigInt.parseDecInt = function (radix, value) {
	switch (radix) {
		case 1000:
			return Microsoft.Live.WhatsNew.Util.BigInt.$8(value);
		case 16:
			return Microsoft.Live.WhatsNew.Util.BigInt.$7(value);
		default:
			return null;
	}
}
Microsoft.Live.WhatsNew.Util.BigInt.parseHexIntToDecRadixBigInt = function (numStr) {
	if (String.isNullOrEmpty(numStr) || numStr.length > 16) {
		return null;
	}
	numStr = numStr.trim().toLowerCase();
	var $0 = Microsoft.Live.WhatsNew.Util.BigInt.$A(numStr);
	if (!$0) {
		return null;
	}
	var $1 = ($0.length === 16) && ($0[0] >= 8);
	if ($1) {
		$0 = Microsoft.Live.WhatsNew.Util.BigInt.$C($0);
	}
	var $2 = new Microsoft.Live.WhatsNew.Util._DecBigInt(0);
	var $3 = new Microsoft.Live.WhatsNew.Util._DecBigInt(1);
	for (var $4 = $0.length - 1; $4 >= 0; $4--) {
		var $5 = new Microsoft.Live.WhatsNew.Util._DecBigInt($0[$4]);
		$5.multiply($3);
		$2.add($5);
		$3.multiply(new Microsoft.Live.WhatsNew.Util._DecBigInt(16));
	}
	$2.$5 = $1;
	return $2;
}
Microsoft.Live.WhatsNew.Util.BigInt.$7 = function ($p0) {
	if (String.isNullOrEmpty($p0)) {
		return null;
	}
	var $0 = $p0.charAt(0) === '-';
	if ($0) {
		$p0 = $p0.substr(1);
	}
	var $1 = new Microsoft.Live.WhatsNew.Util._HexBigInt(0);
	var $2 = 9;
	var $3 = Math.ceil($p0.length / $2);
	var $4 = new Microsoft.Live.WhatsNew.Util._HexBigInt(1);
	var $5 = new Array($3);
	var $6 = $p0.length;
	for (var $7 = 0; $7 < $3; $7++) {
		var $8 = (($6 - $2) < 0) ? 0 : $6 - $2;
		var $9 = parseInt($p0.substr($8, $6 - $8), 10);
		var $A = new Microsoft.Live.WhatsNew.Util._HexBigInt($9);
		$A.multiply($4);
		$1.add($A);
		$4.multiply(new Microsoft.Live.WhatsNew.Util._HexBigInt(1000000000));
		$6 -= $2;
	}
	$1.$5 = $0;
	return $1;
}
Microsoft.Live.WhatsNew.Util.BigInt.$8 = function ($p0) {
	if (!$p0.length) {
		return new Microsoft.Live.WhatsNew.Util._DecBigInt(0);
	} else {
		var $0 = false;
		var $1 = [];
		if ($p0.charAt(0) === '-') {
			$0 = true;
			$p0 = $p0.substring(1, $p0.length);
		}
		var $2;
		for ($2 = 0; 3 * ($2 + 1) <= $p0.length; $2++) {
			$1.insert($2, parseInt($p0.substring($p0.length - (3 * ($2 + 1)), $p0.length - (3 * $2)), 10));
		}
		if (0 !== ($p0.length % 3)) {
			$1.insert($2++, parseInt($p0.substring(0, ($p0.length % 3)), 10));
		}
		var $3 = new Microsoft.Live.WhatsNew.Util._DecBigInt(0);
		$3.$4 = $1;
		$3.$6 = $2;
		$3.$5 = $0;
		return $3;
	}
}
Microsoft.Live.WhatsNew.Util.BigInt.$9 = function ($p0, $p1) {
	var $0 = [];
	for (var $1 = 0; $1 < $p1; $1++) {
		$0.insert($1, $p0[$1]);
	}
	for (var $2 = 0; $2 < $0.length; $2++) {
		if ($0[$2] > 0) {
			$0[$2] = 16 - $0[$2];
			if (($2 + 1) < $0.length) {
				$0[$2 + 1] = $0[$2 + 1] + 1;
			} else if ($0.length < 16) {
				$0.insert($2 + 1, 1);
			}
		}
	}
	return $0;
}
Microsoft.Live.WhatsNew.Util.BigInt.$A = function ($p0) {
	var $0 = new Array($p0.length);
	for (var $1 = 0; $1 < $p0.length; $1++) {
		$0[$1] = Microsoft.Live.WhatsNew.Util.BigInt.$B($p0.charAt($1));
		if ($0[$1] < 0) {
			return null;
		}
	}
	return $0;
}
Microsoft.Live.WhatsNew.Util.BigInt.$B = function ($p0) {
	if ($p0 >= '0' && $p0 <= '9') {
		return ($p0 - '0');
	}
	switch ($p0) {
		case 'a':
			return 10;
		case 'b':
			return 11;
		case 'c':
			return 12;
		case 'd':
			return 13;
		case 'e':
			return 14;
		case 'f':
			return 15;
		default:
			return -1;
	}
}
Microsoft.Live.WhatsNew.Util.BigInt.$C = function ($p0) {
	for (var $0 = $p0.length - 1; $0 >= 0; $0--) {
		if ($p0[$0] > 0) {
			$p0[$0] = 16 - $p0[$0];
			if ($0 > 0) {
				$p0[$0 - 1] += 1;
			}
		}
	}
	return $p0;
}
Microsoft.Live.WhatsNew.Util.BigInt.prototype = {
	$3: 0,
	$5: false,
	$6: 0,
	add: function (n) {
		for (var $0 = 0; $0 < this.$6 - n.$6; $0++) {
			n.$4.insert(n.$6 + $0, 0);
		}
		for (var $1 = 0; $1 < n.$6 - this.$6; $1++) {
			this.$4.insert(this.$6 + $1, 0);
		}
		this.$6 = Math.max(n.$6, this.$6);
		if (this.$5 === n.$5) {
			for (var $2 = 0; $2 < this.$6; $2++) {
				this.$4[$2] = this.$4[$2] + n.$4[$2];
			}
		} else {
			for (var $3 = 0; $3 < this.$6; $3++) {
				this.$4[$3] = this.$4[$3] - n.$4[$3];
			}
		}
		this.$D();
	},
	multiply: function (n) {
		var $0 = new Microsoft.Live.WhatsNew.Util.BigInt(this.$3, 0);
		for (var $1 = 0; $1 < n.$6 + this.$6; $1++) {
			if ($1 < $0.$4.length) {
				$0.$4[$1] = 0;
			} else {
				$0.$4.insert($1, 0);
			}
		}
		for (var $2 = 0; $2 < n.$6; $2++) {
			for (var $3 = 0; $3 < this.$6; $3++) {
				$0.$4[$2 + $3] = $0.$4[$2 + $3] + (n.$4[$2] * this.$4[$3]);
				if ($0.$4[$2 + $3]) {
					$0.$6 = Math.max($0.$6, $2 + $3 + 1);
				}
			}
			$0.$D();
		}
		$0.$5 = n.$5 !== this.$5;
		this.$4 = $0.$4;
		this.$5 = $0.$5;
		this.$6 = $0.$6;
	},
	modulus: function (n) {
		while (true) {
			if (!n.$6 || !this.$6) {
				break;
			}
			var $0 = this.$6 - n.$6;
			if ($0 < 0) {
				break;
			}
			var $1 = this.$4[this.$6 - 1];
			var $2 = n.$4[n.$6 - 1];
			if ($1 >= $2) {
				var $3 = Math.floor($1 / $2);
				for (var $4 = 0; $4 < n.$6; $4++) {
					this.$4[$4 + $0] = this.$4[$4 + $0] - ($3 * n.$4[$4]);
				}
				this.$D();
				continue;
			}
			if (!$0) {
				break;
			}
			this.$4[this.$6 - 2] = this.$4[this.$6 - 2] + (this.$3 * this.$4[this.$6 - 1]);
			this.$6--;
		}
		if (this.$5) {
			if (n.$5) {
				n.$5 = false;
				this.add(n);
				n.$5 = true;
			} else {
				this.add(n);
			}
		}
		this.$D();
	},
	toString: function () {
		switch (this.$3) {
			case 16:
				return this.$F();
			case 1000:
				return this.$10();
			default:
				Debug.fail('Not supported radix value.');
				return String.Empty;
		}
	},
	$D: function () {
		for (var $0 = this.$6 - 1; $0 >= 0; $0--) {
			if (!this.$4[$0]) {
				this.$6--;
			} else {
				break;
			}
		}
		for (var $1 = 0; $1 < 2; $1++) {
			if (!this.$6) {
				this.$5 = false;
			} else {
				if (this.$4[this.$6 - 1] < 0) {
					for (var $2 = 0; $2 < this.$6; $2++) {
						this.$4[$2] = -this.$4[$2];
					}
					this.$5 = !this.$5;
				}
				for (var $3 = 0; $3 < this.$6 - 1; $3++) {
					if (this.$4[$3] < 0) {
						var $4 = Math.ceil(-this.$4[$3] / this.$3);
						this.$4[$3] = this.$4[$3] + (this.$3 * $4);
						this.$4[$3 + 1] = this.$4[$3 + 1] - $4;
					}
					if (this.$4[$3] >= this.$3) {
						var $5 = Math.floor(this.$4[$3] / this.$3);
						this.$4[$3] = this.$4[$3] % this.$3;
						this.$4[$3 + 1] = this.$4[$3 + 1] + $5;
					}
				}
				while (this.$4[this.$6 - 1] >= this.$3) {
					this.$E();
					this.$4[this.$6] = Math.floor(this.$4[this.$6 - 1] / this.$3);
					this.$4[this.$6 - 1] = this.$4[this.$6 - 1] % this.$3;
					this.$6++;
				}
				if (this.$4[this.$6 - 1] < 0) {
					for (var $6 = 0; $6 < this.$6; $6++) {
						this.$4[$6] = -this.$4[$6];
					}
					this.$5 = !this.$5;
				} else {
					break;
				}
			}
		}
	},
	$E: function () {
		if (this.$6 === this.$4.length) {
			this.$4[this.$6] = 0;
		}
	},
	$F: function () {
		if (!this.$4.length) {
			return '0';
		}
		var $0 = this.$4;
		if (this.$5) {
			$0 = Microsoft.Live.WhatsNew.Util.BigInt.$9($0, this.$6);
		}
		var $1 = new StringBuilder();
		var $2 = false;
		for (var $3 = $0.length - 1; $3 >= 0; $3--) {
			if (!$2) {
				if ($0[$3]) {
					$2 = true;
				}
			}
			if ($2) {
				$1.append('0123456789abcdef'.charAt($0[$3]));
			}
		}
		return $1.toString();
	},
	$10: function () {
		if (!this.$6) {
			return '0';
		}
		var $0 = String.Empty;
		for (var $1 = 0; $1 < this.$6; $1++) {
			$0 = this.$4[$1] + $0;
			if ($1 < this.$6 - 1) {
				for (var $2 = 10; $2 < this.$3; $2 *= 10) {
					if (this.$4[$1] < $2) {
						$0 = 0 + $0;
					}
				}
			}
		}
		if (this.$5) {
			$0 = '-' + $0;
		}
		return $0;
	}
}
Microsoft.Live.WhatsNew.Util._DecBigInt = function (v) {
	Microsoft.Live.WhatsNew.Util._DecBigInt.constructBase(this, [1000, v]);
}
Microsoft.Live.WhatsNew.Util._DecBigInt.prototype = {
	toString: function () {
		return Microsoft.Live.WhatsNew.Util._DecBigInt.callBase(this, 'toString');
	}
}
Microsoft.Live.WhatsNew.Util._HexBigInt = function (v) {
	Microsoft.Live.WhatsNew.Util._HexBigInt.constructBase(this, [16, v]);
}
Microsoft.Live.WhatsNew.Util._HexBigInt.prototype = {
	toString: function () {
		return Microsoft.Live.WhatsNew.Util._HexBigInt.callBase(this, 'toString');
	}
}
Microsoft.Live.WhatsNew.Util.StringTools = function () {}
Microsoft.Live.WhatsNew.Util.StringTools.htmlEncode = function (str) {
	var $0 = new RegExp('([&<>\"])', 'g');
	var $1 = {};
	$1['&'] = '&amp;';
	$1['<'] = '&lt;';
	$1['>'] = '&gt;';
	$1['\"'] = '&quot;';
	if ($0.test(str)) {
		str = str.replace($0, Delegate.create(null, function ($p1_0) {
			return $1[$p1_0].toString();
		}));
	}
	return str;
}
Microsoft.Live.WhatsNew._PassportAuth.createClass('Microsoft.Live.WhatsNew._PassportAuth');
Microsoft.Live.WhatsNew._PassportUser.createClass('Microsoft.Live.WhatsNew._PassportUser');
Microsoft.Live.WhatsNew.GadgetScriptlet.createClass('Microsoft.Live.WhatsNew.GadgetScriptlet');
Microsoft.Live.WhatsNew.FlyoutScriptlet.createClass('Microsoft.Live.WhatsNew.FlyoutScriptlet');
Microsoft.Live.WhatsNew.SettingsScriptlet.createClass('Microsoft.Live.WhatsNew.SettingsScriptlet');
Microsoft.Live.WhatsNew._WhatsNewEntry.createClass('Microsoft.Live.WhatsNew._WhatsNewEntry');
Microsoft.Live.WhatsNew._WhatsNewFeed.createClass('Microsoft.Live.WhatsNew._WhatsNewFeed');
Microsoft.Live.WhatsNew.WhatsNewService.createClass('Microsoft.Live.WhatsNew.WhatsNewService');
Microsoft.Live.WhatsNew._WhatsNewSettings.createClass('Microsoft.Live.WhatsNew._WhatsNewSettings');
Microsoft.Live.WhatsNew.UI._FadeAnimation.createClass('Microsoft.Live.WhatsNew.UI._FadeAnimation', ScriptFX.UI.TimedAnimation);
Microsoft.Live.WhatsNew.UI._GadgetPage.createClass('Microsoft.Live.WhatsNew.UI._GadgetPage');
Microsoft.Live.WhatsNew.UI.MessageArea.createClass('Microsoft.Live.WhatsNew.UI.MessageArea');
Microsoft.Live.WhatsNew.UI._ScrollAnimation.createClass('Microsoft.Live.WhatsNew.UI._ScrollAnimation', ScriptFX.UI.Animation);
Microsoft.Live.WhatsNew.UI.SettingsPage.createClass('Microsoft.Live.WhatsNew.UI.SettingsPage');
Microsoft.Live.WhatsNew.Util._AtomFeedTools.createClass('Microsoft.Live.WhatsNew.Util._AtomFeedTools');
Microsoft.Live.WhatsNew.Util.BigInt.createClass('Microsoft.Live.WhatsNew.Util.BigInt');
Microsoft.Live.WhatsNew.Util._DecBigInt.createClass('Microsoft.Live.WhatsNew.Util._DecBigInt', Microsoft.Live.WhatsNew.Util.BigInt);
Microsoft.Live.WhatsNew.Util._HexBigInt.createClass('Microsoft.Live.WhatsNew.Util._HexBigInt', Microsoft.Live.WhatsNew.Util.BigInt);
Microsoft.Live.WhatsNew.Util.StringTools.createClass('Microsoft.Live.WhatsNew.Util.StringTools');
if (document.body.id === 'gadget') {
	ScriptFX.Application.current.run(Microsoft.Live.WhatsNew.GadgetScriptlet, null);
}
if (document.body.id === 'gadgetFlyout') {
	ScriptFX.Application.current.run(Microsoft.Live.WhatsNew.FlyoutScriptlet, null);
}
if (document.body.id === 'gadgetSettings') {
	ScriptFX.Application.current.run(Microsoft.Live.WhatsNew.SettingsScriptlet, null);
}
Microsoft.Live.WhatsNew._WhatsNewSettings.$0 = 'PRODUCTION';
Microsoft.Live.WhatsNew._WhatsNewSettings.$1 = 1200000;
Microsoft.Live.WhatsNew._WhatsNewSettings.$2 = 10000;
Microsoft.Live.WhatsNew._WhatsNewSettings.$3 = true;
Microsoft.Live.WhatsNew._WhatsNewSettings.$4 = false;
Microsoft.Live.WhatsNew._WhatsNewSettings.$5 = 4;
Microsoft.Live.WhatsNew._WhatsNewSettings.$6 = false;
Microsoft.Live.WhatsNew._WhatsNewSettings.$7 = null;
Microsoft.Live.WhatsNew._WhatsNewSettings.$8 = null;
Microsoft.Live.WhatsNew._WhatsNewSettings.$9 = 0;
Microsoft.Live.WhatsNew._WhatsNewSettings.$A = false;
Microsoft.Live.WhatsNew._WhatsNewSettings.$B = false;
Microsoft.Live.WhatsNew.UI.SettingsPage.$0 = [10, 30, 60];
Microsoft.Live.WhatsNew.Util.BigInt.hexRadix = 16;
Microsoft.Live.WhatsNew.Util.BigInt.decRadix = 1000;
// ---- Do not remove this footer ----
// Generated using Script# v0.5.1.0 (http://projects.nikhilk.net)
// -----------------------------------