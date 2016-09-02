var serverURL = '/cgi-bin/index.cgi';
var allwaittime = {
	init: 90,
	firmwareupload: 360,
	configupload: 200,
	configrestore: 190,
	connecttowireless: 20,
	switchmoderoute:150,
	switchmodeap:150,
	switchmodebridge:150,
	switchmodemedia:150,
	reboottime: 120
};

function getwaittingtime() {
	var postData =
	{
		method: 'getwaittingtime'
	};
	// $.post(serverURL, postData, function(data, textStatus, jqXHR) {
		var data =
		{
			stat: 'success',
			feed:
			{
				msg: 'Success',
				data:
				{
					init: 90,
					firmwareupload: 360,
					configupload: 200,
					configrestore: 190,
					connecttowireless: 20,
					switchmoderoute:150,
					switchmodeap:150,
					switchmodebridge:150,
					switchmodemedia:150,
					reboottime: 120
				}
			}
		};
		if (data.stat == 'success') {
			allwaittime = data.feed.data;
		}else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function isinit() {
	var postData =
	{
		method: 'isinit'
	};
	// $.post(serverURL, postData, function(data, textStatus, jqXHR) {
		var data =
		{
			stat: 'success',
			feed:
			{
				msg: 'Success',
				data:
				{
					isinit: 1
				}
			}
		};
		if (data.stat == 'success') {
			if (data.feed.data.isinit == 0) {
				window.open('./init.html', '_self');
			}
		}
		if (data.stat == 'error') {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function detechwan() {
	var postData =
	{
		method: 'detechwan'
	};
	// $.post(serverURL, postData, function(data, textStatus, jqXHR) {
		var data =
		{
			stat: 'success',
			feed:
			{
				msg: 'Success',
				data:
				{
					ifwanconnect: true,
					dhcpip: '192.168.1.1',
					dhcpgatewawy: '192.168.1.1',
					dhcpnetmask: '255.255.255.0',
					dhcpdns1: '',
					dhcpdns2: '',
					'24gssid':'UX24G',
					'5gssid':'UX5G'
				}
			}
		};

		if (data.stat == 'success') {
			if(data.feed.data.ifwanconnect==false)  {
				myalert('WAN disconnected');
			}
			$('#dns1').val(data.feed.data.dhcpdns1);
			$('#dns2').val(data.feed.data.dhcpdns2);
			$('#24gssid').val(data.feed.data['24gssid']);
			$('#5gssid').val(data.feed.data['5gssid']);
			$('.summary table').children('tbody').data('data', data);
		}
		if (data.stat == 'error') {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wizard() {
	var postData =
	{
		method: 'wizard',
		password: $('#password').val(),
		type: Number($('#connectiontype').val()),
		hostname: $('#hostname').val(),
		manualdns: Number($('#selectwandns>label.active').attr('value')),
		dns1: ($('#dns1').val().indexOf("_") >= 0) ? 'None' : $('#dns1').val(),
		dns2: ($('#dns2').val().indexOf("_") >= 0) ? 'None' : $('#dns2').val(),
		vpnusername: $('#vpnusername').val(),
		vpnpassword: $('#vpnpassword').val(),
		ip: ($('#ipaddress').val().indexOf("_") >= 0) ? 'None' : $('#ipaddress').val(),
		netmask: ($('#netmask').val().indexOf("_") >= 0) ? 'None' : $('#netmask').val(),
		gateway: ($('#gateway').val().indexOf("_") >= 0) ? 'None' : $('#gateway').val(),
		ipautoassign: Number($('#samessidandkey>label.active').attr('value')),
		vpnserver: ($('#vpnserver').val().indexOf("_") >= 0) ? 'None' : $('#vpnserver').val(),
		'24gssid': $('#24gssid').val(),
		'24gkey': $('#24gkey').val(),
		'5gssid': $('#5gssid').val(),
		'5gkey': $('#5gkey').val(),
		lanip: ($('#lanip').val().indexOf("_") >= 0) ? 'None' : $('#lanip').val()
	};
	console.log(postData);
	startCountDown(allwaittime.init);
	// $.post(serverURL, postData, function(data, textStatus, jqXHR) {
		var data =
		{
			stat: 'success',
			feed:
			{
				msg: 'Success',
			}
		};
		if (data.stat == 'success') {
			window.open('./index.html', '_self');
		} else {
			stopCountDown();
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

// check init
var pathnameArr = location.pathname.split('/'),
	htmlFile = pathnameArr[pathnameArr.length-1],
	isIndex = htmlFile == 'index.html' || htmlFile == '';
if (isIndex) {
	isinit();
}

$(document).ready(function() {
	$('#password').focus();
	$('#connectiontypedesc').text('DHCP allows your PC to obtain an IP address automaticlly. This connection type is often used by cable modem service providers.');
	$('.dhcpuse').attr('style', 'display:block;');
	if ($('#selectwandns>[value="0"]').hasClass('active')) {
		$('.dhcpwandnsuse').attr('style', 'display:none;');
	} else {
		$('.dhcpwandnsuse').attr('style', 'display:block;');
	}
	$(document).on('change', '#connectiontype', function(e) {
		$('.dhcpuse').attr('style', 'display:none;');
		$('.dhcpwandnsuse').attr('style', 'display:none;');
		$('.pppoeuse').attr('style', 'display:none;')
		$('.staticipuse').attr('style', 'display:none;')
		$('.pptpuse').attr('style', 'display:none;')
		$('.pptpstaticipuse').attr('style', 'display:none;');
		switch ($(this).val()) {
			case '0':
				$('.dhcpuse').attr('style', 'display:block;');
				$('#connectiontypedesc').text('DHCP allows your PC to obtain an IP address automaticlly. This connection type is often used by cable modem service providers.');
				if ($('#selectwandns>[value="0"]').hasClass('active')) {
					$('.dhcpwandnsuse').attr('style', 'display:none;');
				} else {
					$('.dhcpwandnsuse').attr('style', 'display:block;');
				}
				break;
			case '1':
				$('#connectiontypedesc').text('ADSL or other connections that require a username and password are known as PPPoE.');
				$('.pppoeuse').attr('style', 'display:block;')
				break;
			case '2':
				$('#connectiontypedesc').text('Static IP allows your PC to use a fixed IP address provided by your ISP. This connection type is often used by ADSL service providers.');
				$('.dhcpwandnsuse').attr('style', 'display:block;');
				$('.staticipuse').attr('style', 'display:block;');
				break;
			case '3':
				$('#connectiontypedesc').text('ADSL or other connections that require a username, password and IP address are known as PPTP.');
				$('.pptpuse').attr('style', 'display:block;')
				if ($('#selectwandns>[value="0"]').hasClass('active')) {
					$('.dhcpwandnsuse').attr('style', 'display:none;');
				} else {
					$('.dhcpwandnsuse').attr('style', 'display:block;');
				}
				if ($('#selectpptpipstatic>[value="1"]').hasClass('active')) {
					$('.pptpstaticipuse').attr('style', 'display:none;');
				} else {
					$('.pptpstaticipuse').attr('style', 'display:block;');
				}
				break;
			case '4':
				$('#connectiontypedesc').text('L2TP requires a username,password and IP address provided by your ISP.');
				$('.pptpuse').attr('style', 'display:block;')
				if ($('#selectwandns>[value="0"]').hasClass('active')) {
					$('.dhcpwandnsuse').attr('style', 'display:none;');
				} else {
					$('.dhcpwandnsuse').attr('style', 'display:block;');
				}
				if ($('#selectpptpipstatic>[value="1"]').hasClass('active')) {
					$('.pptpstaticipuse').attr('style', 'display:none;');
				} else {
					$('.pptpstaticipuse').attr('style', 'display:block;');
				}
				break;
		}
	});
	$(document).on('click', '#selectwandns', function(e) {
		if ($('#selectwandns>[value="0"]').hasClass('active')) {
			$('.dhcpwandnsuse').attr('style', 'display:none;');
		} else {
			$('.dhcpwandnsuse').attr('style', 'display:block;');
		}
	});
	$(document).on('click', '#selectpptpipstatic', function(e) {
		if ($('#selectpptpipstatic>[value="1"]').hasClass('active')) {
			$('.pptpstaticipuse').attr('style', 'display:none;');
		} else {
			$('.pptpstaticipuse').attr('style', 'display:block;');
		}
	});
	$(document).on('click', '#samessidandkey', function(e) {
		if ($('#samessidandkey>[value="1"]').hasClass('active')) {
			$('#5gkey').val($('#24gkey').val());
			$('.24Gsame').hide();
		} else {
			$('.24Gsame').show();
		}
	});

	$(document).on('click', '#firststep button', function(e) {
		if ($('#password').val().length <= 3) {
			myalert('Password must have more than 3 characters');
			return;
		}
		if ($('#password').val() != $('#firststep .verify').val()) {
			myalert('Verify should be same as password');
			return;
		}
		$(this).parents().find('fieldset:eq(0)').removeAttr('style');
		$('.f1-step:eq(0)').removeClass('active').addClass('activated');
		$('.f1-step:eq(1)').addClass('active');
		$('.f1-progress-line').attr('style', "width: 49.99333333333334%;");
		// $('.f1-step:eq(0) i').attr('style', 'margin-left:13px;');
		// $('.f1-step:eq(1) i').attr('style', 'margin-left:11px;');
		$(this).parents().find('fieldset:eq(1)').attr('style', 'display:block;');
		detechwan();
	});
	$(document).on('click', '#secstep button:eq(0)', function(e) {
		$(this).parents().find('fieldset:eq(1)').removeAttr('style');
		$('.f1-step:eq(0)').removeClass('activated').addClass('active');
		$('.f1-step:eq(1)').removeClass('active');
		$('.f1-progress-line').attr('style', "width: 16.66%;");
		$('.f1-step:eq(0) i').removeAttr('style');
		$('.f1-step:eq(1) i').removeAttr('style');
		$(this).parents().find('fieldset:eq(0)').attr('style', 'display:block;');
	});
	$(document).on('click', '#secstep button:eq(1)', function(e) {
		switch ($('#connectiontype').val()) {
			case '0':
				if ($('#selectwandns>[value="1"]').hasClass('active') && ($('#dns1').val()=='' || $('#dns1').val()=='___.___.___.___')) {
					myalert('DNS1 required');
					return;
				}
				break;
			case '1':
				if ($('#vpnusername').val()=='') {
					myalert('Username required');
					return;
				}
				if ($('#vpnpassword').val()=='') {
					myalert('Password required');
					return;
				}
				break;
			case '2':
				if ($('#ipaddress').val()=='' || $('#ipaddress').val()=='___.___.___.___') {
					myalert('IP required');
					return;
				}
				if ($('#netmask').val()=='' || $('#netmask').val()=='___.___.___.___') {
					myalert('Netmask required');
					return;
				}
				if ($('#gateway').val()=='' || $('#gateway').val()=='___.___.___.___') {
					myalert('Gateway required');
					return;
				}
				if ($('#dns1').val()=='' || $('#dns1').val()=='___.___.___.___') {
					myalert('DNS1 required');
					return;
				}
				break;
		}
		$(this).parents().find('fieldset:eq(1)').removeAttr('style');
		$('.f1-step:eq(1)').removeClass('active').addClass('activated');
		$('.f1-step:eq(2)').addClass('active');
		$('.f1-progress-line').attr('style', "width: 83.32666666666668%;");
		// $('.f1-step:eq(1) i').attr('style', 'margin-left:11px;');
		// $('.f1-step:eq(2) i').attr('style', 'margin-left:13px;');
		$(this).parents().find('fieldset:eq(2)').attr('style', 'display:block;');
	});
	$(document).on('click', '#thirdstep button:eq(0)', function(e) {
		$(this).parents().find('fieldset:eq(2)').removeAttr('style');
		$('.f1-step:eq(1)').removeClass('activated').addClass('active');
		$('.f1-step:eq(2)').removeClass('active');
		$('.f1-progress-line').attr('style', "width: 49.99333333333334%;");
		// $('.f1-step:eq(0) i').attr('style', 'margin-left:13px;');
		// $('.f1-step:eq(1) i').attr('style', 'margin-left:11px;');
		$(this).parents().find('fieldset:eq(1)').attr('style', 'display:block;');
	});
	$(document).on('click', '#thirdstep button:eq(1)', function(e) {
		if ($('#24gssid').val()=='' || $('#5gssid').val()=='') {
			myalert('SSID required');
			return;
		}
		if ($('#24gkey').val()=='' || $('#5gkey').val()=='') {
			myalert('Key required');
			return;
		}
		if ($('#24gkey').val().length<=7 || $('#5gkey').val().length<=7) {
			myalert('Key must have more than 7 characters');
			return;
		}
		$('.f1-steps').attr('style', 'display:none;');
		$('.config').attr('style', 'display:none;');
		$('.summary').attr('style', 'display:block;');
		var thetable = $('.summary table').children('tbody');
		thetable.empty();
		thetable.append('<tr><td>Conect Type</td><td>' + $('#connectiontype option:selected').text() + '</td></tr>');
		if ($('#connectiontype option:selected').val() == '0') {
			thetable.append('<tr><td>Hostname</td><td>' + $('#hostname').val() + '</td></tr>');
			thetable.append('<tr><td>IP</td><td>' + thetable.data('data').feed.data.dhcpip + '</td></tr>');
			thetable.append('<tr><td>Gateway</td><td>' + thetable.data('data').feed.data.dhcpgatewawy + '</td></tr>');
			thetable.append('<tr><td>Netmask</td><td>' + thetable.data('data').feed.data.dhcpnetmask + '</td></tr>');
			// thetable.append('<tr><td>MAC</td><td>'+(($('#macaddress').val().indexOf("_")>=0)?'None':$('#macaddress').val())+'</td></tr>');
			if ($('#selectwandns>[value="1"]').hasClass('active')) {
				thetable.append('<tr><td>DNS1</td><td>' + (($('#dns1').val().indexOf("_") >= 0) ? 'None' : $('#dns1').val()) + '</td></tr>');
				thetable.append('<tr><td>DNS2</td><td>' + (($('#dns2').val().indexOf("_") >= 0) ? 'None' : $('#dns2').val()) + '</td></tr>');
			}
		}
		if ($('#connectiontype option:selected').val() == '1') {
			thetable.append('<tr><td>Username</td><td>' + $('#vpnusername').val() + '</td></tr>');
			thetable.append('<tr><td>Password</td><td>' + $('#vpnpassword').val() + '</td></tr>');
		}
		if ($('#connectiontype option:selected').val() == '2') {
			thetable.append('<tr><td>IP</td><td>' + $('#ipaddress').val() + '</td></tr>');
			thetable.append('<tr><td>Netmask</td><td>' + $('#netmask').val() + '</td></tr>');
			thetable.append('<tr><td>Gateway</td><td>' + $('#gateway').val() + '</td></tr>');
			// thetable.append('<tr><td>MAC</td><td>'+(($('#macaddress').val().indexOf("_")>=0)?'None':$('#macaddress').val())+'</td></tr>');
			thetable.append('<tr><td>DNS1</td><td>' + (($('#dns1').val().indexOf("_") >= 0) ? 'None' : $('#dns1').val()) + '</td></tr>');
			thetable.append('<tr><td>DNS2</td><td>' + (($('#dns2').val().indexOf("_") >= 0) ? 'None' : $('#dns2').val()) + '</td></tr>');
		}
		if ($('#connectiontype option:selected').val() == '3' || $('#connectiontype option:selected').val() == '4') {
			thetable.append('<tr><td>Username</td><td>' + $('#vpnusername').val() + '</td></tr>');
			thetable.append('<tr><td>Password</td><td>' + $('#vpnpassword').val() + '</td></tr>');
			if ($('#selectpptpipstatic>[value="0"]').hasClass('active')) {
				thetable.append('<tr><td>IP</td><td>' + (($('#ipaddress').val().indexOf("_") >= 0) ? 'None' : $('#ipaddress').val()) + '</td></tr>');
				thetable.append('<tr><td>Netmask</td><td>' + (($('#netmask').val().indexOf("_") >= 0) ? 'None' : $('#netmask').val()) + '</td></tr>');
				thetable.append('<tr><td>Gateway</td><td>' + (($('#gateway').val().indexOf("_") >= 0) ? 'None' : $('#gateway').val()) + '</td></tr>');
			} else {
				thetable.append('<tr><td>IP</td><td>Auto Assignment</td></tr>');
			}
			if ($('#selectwandns>[value="1"]').hasClass('active')) {
				thetable.append('<tr><td>DNS1</td><td>' + (($('#dns1').val().indexOf("_") >= 0) ? 'None' : $('#dns1').val()) + '</td></tr>');
				thetable.append('<tr><td>DNS2</td><td>' + (($('#dns2').val().indexOf("_") >= 0) ? 'None' : $('#dns2').val()) + '</td></tr>');
			}
			thetable.append('<tr><td>VPN Server</td><td>' + (($('#vpnserver').val().indexOf("_") >= 0) ? 'None' : $('#vpnserver').val()) + '</td></tr>');
		}
		if ($('#samessidandkey>[value="0"]').hasClass('active')) {
			thetable.append('<tr><td>2.4G SSID</td><td>' + $('#24gssid').val() + '</td></tr>');
			// thetable.append('<tr><td>2.4G Key</td><td>'+$('#24gkey').val()+'</td></tr>');
			thetable.append('<tr><td>5G SSID</td><td>' + $('#5gssid').val() + '</td></tr>');
			// thetable.append('<tr><td>5G Key</td><td>'+$('#5gkey').val()+'</td></tr>');
		} else {
			thetable.append('<tr><td>2.4G/5G SSID</td><td>Same SSID and Key</td></tr>');
			thetable.append('<tr><td>SSID</td><td>' + $('#24gssid').val() + '</td></tr>');
			// thetable.append('<tr><td>Key</td><td>'+$('#24gkey').val()+'</td></tr>');
		}
		thetable.append('<tr><td>LAN IP</td><td>' + $('#lanip').val() + '</td></tr>');
	});
	$(document).on('blur', '#firststep .verify', function(e) {
		// if ($('#useadminpassaskey>[value="1"]').hasClass('active')) {
		// 	$('#24gkey, #5gkey').val($('#firststep .verify').val());
		// 	$('#24gkey, #5gkey').prop('disabled', true);
		// }
		if ($('#password').val().length >= 8) {
			$('#useadminpassaskey>label[value="1"]').trigger('click');
			$('#useadminpassaskey').parent().parent().show();
		} else {
			$('#useadminpassaskey').parent().parent().hide();
		}
	});
	$(document).on('blur', '#24gkey', function() {
		if ($('#samessidandkey>label[value="1"]').hasClass('active')) {
			$('#5gkey').val($(this).val());
		}
	});
	$(document).on('click', '#useadminpassaskey>label', function(e) {
		if ($(this).attr('value')=='1') {
			$('#24gkey, #5gkey').val($('#firststep .verify').val());
			$('#24gkey, #5gkey').prop('disabled', true);
		} else {
			$('#24gkey, #5gkey').prop('disabled', false);
		}
	});
	$(document).on('click', '.summary button:eq(0)', function(e) {
		$('.f1-steps').attr('style', 'display:block;');
		$('.config').attr('style', 'display:block;');
		$('.summary').attr('style', 'display:none;');
	});
	$(document).on('click', '.summary button:eq(1)', function(e) { // Do config now
		if ($('#modal-wirelessrouter').hasClass('in')) return;
		wizard();
	});
	getwaittingtime();
});
