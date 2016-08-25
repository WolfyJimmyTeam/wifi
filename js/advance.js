
function getpptpserverset() {
	var postData =
	{
		method: 'getpptpserverset',
		sessionid: sessionID

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
					pptpserverenable: 0,
					config: 1,
					broadcast: 0,
					authmode: 2,
					mppe128encrypt: 0,
					mppe40encrypt: 0,
					noencrypt: 0,
					autoconnectdns: 0,
					dns1: '192.168.10.1',
					dns2: '192.168.10.2',
					autoconnectwins: 0,
					wins1: '192.168.10.1',
					wins2: '192.168.10.2',
					mru: 1482,
					mtu: 1482,
					clientipstart: '192.168.10.10',
					clientipend: '192.168.10.20',
					users: [{
						currentstatus: 'inactive',
						username: 'wolfy',
						password:'wolfytest'
					},
					{
						currentstatus: 'inactive',
						username: 'likky',
						password:'likkytest'
					}]
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#pptpvpnserverenable>label[value="'+data.feed.data.pptpserverenable+'"]');
			$('#pptpvpnserverconfig>label[value="'+data.feed.data.config+'"]').trigger('click');
			$('#pptpvpnserverbroadcast>label[value="'+data.feed.data.broadcast+'"]');
			$('#pptpvpnserverauth').val(data.feed.data.authmode).trigger('change');
            $('#pptpvpnservermppe128>label[value="'+data.feed.data.mppe128encrypt+'"]');
            $('#pptpvpnservermppe40>label[value="'+data.feed.data.mppe40encrypt+'"]');
            $('#pptpvpnservernoencrypt>label[value="'+data.feed.data.noencrypt+'"]');
            $('#pptpvpnserverdnsauto>label[value="'+data.feed.data.autoconnectdns+'"]').trigger('click');
            $('#pptpvpnserverdns1').val(data.feed.data.dns1);
            $('#pptpvpnserverdns2').val(data.feed.data.dns2);
            $('#pptpvpnserverwinsauto>label[value="'+data.feed.data.autoconnectwins+'"]').trigger('click');
            $('#pptpvpnserverwins1').val(data.feed.data.wins1);
            $('#pptpvpnserverwins2').val(data.feed.data.wins2);
            $('#pptpvpnservermru').val(data.feed.data.mru);
            $('#pptpvpnservermtu').val(data.feed.data.mtu);
            $('#pptpvpnserveradavncestartip').val(data.feed.data.clientipstart);
            $('#pptpvpnserveradavnceendip').val(data.feed.data.clientipend);
            $('.pptpvpnserverlist tbody').empty();
            $('.pptpvpnserverlist tbody').data('data',data);
            $.each(data.feed.data.users,function (index,users) {
                $('.pptpvpnserverlist tbody').append('<tr username="'+users.username+'"><td><button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                    '<td>'+users.currentstatus+'</td>' +'<td>'+users.username+'</td>'+
                    '<td><div class="dropdown"><a class="btn btn-default" role="button" data-toggle="popover" title="Password" data-placement="right" data-trigger="hover" data-content="'+users.password+'"><i class="icon-eye-open glyphicon glyphicon-eye-open"></i></a></div></td></tr>').find('a').popover();

            });
            $('#pptpvpnadavncestartip').val(data.feed.data.clientipstart);
            $('#pptpvpnadavnceendip').val(data.feed.data.clientipend);

			setTimeout(function(){
				updatetrigger=true;
			},0)
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function pptpserverset(type) {

    var postData =
    {
        method: 'pptpserverset',
        sessionid: sessionID,
        pptpserverenable: Number($('#pptpvpnserverenable>label.active').attr('value')),
        config: Number($('#pptpvpnserverconfig>label.active').attr('value')),
        broadcast: Number($('#pptpvpnserverbroadcast>label.active').attr('value')),
        authmode: Number($('#pptpvpnserverauth').val()),
        mppe128encrypt: Number($('#pptpvpnservermppe128>label.active').attr('value')),
        mppe40encrypt: Number($('#pptpvpnservermppe40>label.active').attr('value')),
        noencrypt: Number($('#pptpvpnservernoencrypt>label.active').attr('value')),
        autoconnectdns: Number($('#pptpvpnserverdnsauto>label.active').attr('value')),
        dns1: $('#pptpvpnserverdns1').val(),
        dns2: $('#pptpvpnserverdns2').val(),
        autoconnectwins: Number($('#pptpvpnserverwinsauto>label.active').attr('value')),
        wins1: $('#pptpvpnserverwins1').val(),
        wins2: $('#pptpvpnserverwins2').val(),
        mru: Number($('#pptpvpnservermru').val()),
        mtu: Number($('#pptpvpnservermtu').val()),
        clientipstart: $('#pptpvpnserveradavncestartip').val(),
        clientipend: $('#pptpvpnserveradavnceendip').val(),
        users: $('.pptpvpnserverlist tbody').data('data').feed.data.users
    };

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
			$('body').removeData('check');
            myalert('ok');
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getopenvpnserverset() {
    var postData =
    {
        method: 'getopenvpnserverset',
        sessionid: sessionID

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
                    openvpnserverenable: 0,
                    config: 1,
                    interface: 0,
                    protocol: 0,
                    port: 1194,
                    firewall: 0,
                    authmode:0,
                    userpassauthonly: 0,
                    extrahmacauth: 0,
                    allocatefromdhcp: 0,
                    ipstart: '192.168.10.11',
                    ipend: '192.168.10.22',
                    localendip: '192.168.10.2',
                    remoteendip: '192.168.10.3',
                    subnet: '192.168.10.0',
                    netmask: '255.255.255.0',
                    pollinterval: 3,
                    pushlantoclient: 0,
                    alltrafficthroughvpn: 0,
                    responsetodns: 0,
                    encryptioncipher: 0,
                    compress: 0,
                    tlsrenegotiationtime: 2,
                    manageclientspecficoptions: 0,
                    statickey:
                    '#'+
                    '# 2048 bit OpenVPN static key'+
                    '#'+
                    '-----BEGIN OpenVPN Static key V1-----'+
                    'f1229310847aa5c3f945e56cafda6053'+
                    'd9d6dde1755522c9320f25c1e57c5721'+
                    'c6d25dc737e1bfdf70990290684c5fb8'+
                    '79ef642ce3f03769cf4000fe1a03eedb'+
                    '2fd012dba633738f1f7e3d4d038157fd'+
                    '28e9b0d66c664728bc895947e77f47ef'+
                    '0c1b404820ced12bac404d5c0f2d9d40'+
                    '95e286fb9e71384b4a65e30f352c4d02'+
                    '24b62874d23846ea0a4d323c24aa6a7e'+
                    '405709ed0e14f4d01be9f146d5fe4868'+
                    'a29fda573514e660ddebfb4788588192'+
                    '41161ccae95adbe6c6607f03e3259783'+
                    '1868696ec391c9c9a2b67d0137a59c7a'+
                    '40e19414ffb524986ba72b1a4f87e747'+
                    '539534fc4919c75b641406772523cb6e'+
                    '37b863f74793116195d2343b188d5a13'+
                    '-----END OpenVPN Static key V1-----',
                    certificateauth:
                    '-----BEGIN CERTIFICATE-----'+
                    'MIIDBTCCAq+gAwIBAgIJAJ4S0SAU3IHKMA0GCSqGSIb3DQEBBQUAMIGLMQswCQYD'+
                    'VQQGEwJDTjELMAkGA1UECBMCVFcxDzANBgNVBAcTBlRhaXBlaTEOMAwGA1UEChMF'+
                    'QXNrZXkxDjAMBgNVBAsTBUFza2V5MREwDwYDVQQDEwhBc2tleSBDQTEQMA4GA1UE'+
                    'KRMHRWFzeVJTQTEZMBcGCSqGSIb3DQEJARYKbWFpbEBBc2tleTAeFw0xNjA2MjMx'+
                    'MDI4NDJaFw0yNjA2MjExMDI4NDJaMIGLMQswCQYDVQQGEwJDTjELMAkGA1UECBMC'+
                    'VFcxDzANBgNVBAcTBlRhaXBlaTEOMAwGA1UEChMFQXNrZXkxDjAMBgNVBAsTBUFz'+
                    'a2V5MREwDwYDVQQDEwhBc2tleSBDQTEQMA4GA1UEKRMHRWFzeVJTQTEZMBcGCSqG'+
                    'SIb3DQEJARYKbWFpbEBBc2tleTBcMA0GCSqGSIb3DQEBAQUAA0sAMEgCQQC3VFlT'+
                    'WVMXhBgeZGW/JXbvupmtlN+G0JuAGHPTWIt/+jNKBYmizG7VsW23PWJGD4BoUqsD'+
                    '2aqk0uq7Jg44Zh2nAgMBAAGjgfMwgfAwHQYDVR0OBBYEFGvZmca6PCdsXC8EF17H'+
                    'e4IHA44uMIHABgNVHSMEgbgwgbWAFGvZmca6PCdsXC8EF17He4IHA44uoYGRpIGO'+
                    'MIGLMQswCQYDVQQGEwJDTjELMAkGA1UECBMCVFcxDzANBgNVBAcTBlRhaXBlaTEO'+
                    'MAwGA1UEChMFQXNrZXkxDjAMBgNVBAsTBUFza2V5MREwDwYDVQQDEwhBc2tleSBD'+
                    'QTEQMA4GA1UEKRMHRWFzeVJTQTEZMBcGCSqGSIb3DQEJARYKbWFpbEBBc2tleYIJ'+
                    'AJ4S0SAU3IHKMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADQQCYdwVyclL7'+
                    'wpVFufE1PXWZYBBwbZJzlUFijMgdjOxhXMHjAf+WGz2avYtZSoWn/6kmD/FWot84'+
                    'KPSsEUfIqKLk'+
                    '-----END CERTIFICATE-----',
                    servercertificate:
                    'Certificate:'+
                    'Data:'+
                    'Version: 3 (0x2)'+
                    'Serial Number: 1 (0x1)'+
                    'Signature Algorithm: sha1WithRSAEncryption'+
                    'Issuer: C=CN, ST=TW, L=Taipei, O=Askey, OU=Askey, CN=Askey CA/name=EasyRSA/emailAddress=mail@Askey'+
                    'Validity'+
                    'Not Before: Jun 23 10:28:43 2016 GMT'+
                    'Not After : Jun 21 10:28:43 2026 GMT'+
                    'Subject: C=CN, ST=TW, L=Taipei, O=Askey, OU=Askey, CN=server/name=EasyRSA/emailAddress=mail@Askey'+
                    'Subject Public Key Info:'+
                    'Public Key Algorithm: rsaEncryption'+
                    'Public-Key: (512 bit)'+
                    'Modulus:'+
                    '00:b9:cf:96:73:b1:a9:d7:b6:27:64:2e:ce:15:db:'+
                    '95:01:ca:ba:5f:15:47:6e:8b:b3:0d:64:57:31:04:'+
                    '60:3d:b1:f5:06:88:b9:f4:ef:82:90:11:75:f7:0b:'+
                    'fa:ec:30:73:93:a4:8f:66:28:05:b8:72:57:91:b9:'+
                    '2a:73:af:1f:8f'+
                    'Exponent: 65537 (0x10001)'+
                    'X509v3 extensions:'+
                    'X509v3 Basic Constraints:'+
                    'CA:FALSE'+
                    'Netscape Cert Type:'+
                    'SSL Server'+
                    'Netscape Comment:'+
                    'Easy-RSA Generated Server Certificate'+
                    'X509v3 Subject Key Identifier:'+
                    '7E:0B:55:23:7C:42:0E:68:EB:AC:51:BC:19:8B:A8:29:9C:22:0E:3C'+
                    'X509v3 Authority Key Identifier:'+
                    'keyid:6B:D9:99:C6:BA:3C:27:6C:5C:2F:04:17:5E:C7:7B:82:07:03:8E:2E'+
                    'DirName:/C=CN/ST=TW/L=Taipei/O=Askey/OU=Askey/CN=Askey CA/name=EasyRSA/emailAddress=mail@Askey'+
                    'serial:9E:12:D1:20:14:DC:81:CA'+
                    'X509v3 Extended Key Usage:'+
                    'TLS Web Server Authentication'+
                    'X509v3 Key Usage:'+
                    'Digital Signature, Key Encipherment'+
                    'Signature Algorithm: sha1WithRSAEncryption'+
                    'b1:7a:10:a3:f2:40:fc:1f:25:0d:92:1b:12:1e:e4:80:2c:5a:'+
                    'cc:14:fa:d8:35:bb:ec:a7:32:3f:61:f0:c2:08:25:b5:0b:45:'+
                    '3b:71:ac:7b:bf:5a:67:30:55:ee:c6:ab:f6:bb:a8:b3:16:91:'+
                    '10:3b:9a:cb:84:47:81:b8:fe:c3'+
                    '-----BEGIN CERTIFICATE-----'+
                    'MIIDZTCCAw+gAwIBAgIBATANBgkqhkiG9w0BAQUFADCBizELMAkGA1UEBhMCQ04x'+
                    'CzAJBgNVBAgTAlRXMQ8wDQYDVQQHEwZUYWlwZWkxDjAMBgNVBAoTBUFza2V5MQ4w'+
                    'DAYDVQQLEwVBc2tleTERMA8GA1UEAxMIQXNrZXkgQ0ExEDAOBgNVBCkTB0Vhc3lS'+
                    'U0ExGTAXBgkqhkiG9w0BCQEWCm1haWxAQXNrZXkwHhcNMTYwNjIzMTAyODQzWhcN'+
                    'MjYwNjIxMTAyODQzWjCBiTELMAkGA1UEBhMCQ04xCzAJBgNVBAgTAlRXMQ8wDQYD'+
                    'VQQHEwZUYWlwZWkxDjAMBgNVBAoTBUFza2V5MQ4wDAYDVQQLEwVBc2tleTEPMA0G'+
                    'A1UEAxMGc2VydmVyMRAwDgYDVQQpEwdFYXN5UlNBMRkwFwYJKoZIhvcNAQkBFgpt'+
                    'YWlsQEFza2V5MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALnPlnOxqde2J2QuzhXb'+
                    'lQHKul8VR26Lsw1kVzEEYD2x9QaIufTvgpARdfcL+uwwc5Okj2YoBbhyV5G5KnOv'+
                    'H48CAwEAAaOCAVwwggFYMAkGA1UdEwQCMAAwEQYJYIZIAYb4QgEBBAQDAgZAMDQG'+
                    'CWCGSAGG+EIBDQQnFiVFYXN5LVJTQSBHZW5lcmF0ZWQgU2VydmVyIENlcnRpZmlj'+
                    'YXRlMB0GA1UdDgQWBBR+C1UjfEIOaOusUbwZi6gpnCIOPDCBwAYDVR0jBIG4MIG1'+
                    'gBRr2ZnGujwnbFwvBBdex3uCBwOOLqGBkaSBjjCBizELMAkGA1UEBhMCQ04xCzAJ'+
                    'BgNVBAgTAlRXMQ8wDQYDVQQHEwZUYWlwZWkxDjAMBgNVBAoTBUFza2V5MQ4wDAYD'+
                    'VQQLEwVBc2tleTERMA8GA1UEAxMIQXNrZXkgQ0ExEDAOBgNVBCkTB0Vhc3lSU0Ex'+
                    'GTAXBgkqhkiG9w0BCQEWCm1haWxAQXNrZXmCCQCeEtEgFNyByjATBgNVHSUEDDAK'+
                    'BggrBgEFBQcDATALBgNVHQ8EBAMCBaAwDQYJKoZIhvcNAQEFBQADQQCxehCj8kD8'+
                    'HyUNkhsSHuSALFrMFPrYNbvspzI/YfDCCCW1C0U7cax7v1pnMFXuxqv2u6izFpEQ'+
                    'O5rLhEeBuP7D'+
                    '-----END CERTIFICATE-----',
                    serverkey:
                    '-----BEGIN PRIVATE KEY-----'+
                    'MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAuc+Wc7Gp17YnZC7O'+
                    'FduVAcq6XxVHbouzDWRXMQRgPbH1Boi59O+CkBF19wv67DBzk6SPZigFuHJXkbkq'+
                    'c68fjwIDAQABAkAKc1h87VMmJMKWaeOBazY4QZS14FaCKy1I5YnZ4esfzRfMhDbR'+
                    'jyKi5Xf5ikzAyWjxwoCJ7n7hlBURMMuP1sJBAiEA9WqWAo/dZAu6KCnOhQ/oqk+B'+
                    'cBU6wfcKzSsm14E+AdECIQDB0vQDQIrQLETE6UeUe5eJJnM/yh49xwhYuTqfk/cD'+
                    'XwIgLqPmBHCg642LAG0JkaI3Xn6jo9B1DT3M8Lb9t8EZLrECIG6JHs3H/iIwTNu7'+
                    'ai38ufPmcK19V/fFTTZEFHGzUZijAiEAuv459g43Q22XuzBthSwg2k6z8HctmEDQ'+
                    'OUVvZSU0Ey8='+
                    '-----END PRIVATE KEY-----',
                    diffiehellman:
                    '-----BEGIN DH PARAMETERS-----'+
                    'MEYCQQDxNZ8joJkgwXacRnUGorPlFIBd1gX2W/FHCV7mEoJ1eLkhfwA0q/CA3w6X'+
                    '7DAVmpSdm3c7/MiHEEsw0AuUW44bAgEC'+
                    '-----END DH PARAMETERS-----',
                    revocationlist:'',
                    users: [{
                        currentstatus: 'inactive',
                        username: 'wolfy',
                        password:'wolfytest'
                    },
                    {
                        currentstatus: 'inactive',
                        username: 'likky',
                        password:'likkytest'
                    }]
                }
            }
        };
        if (data.stat == 'success') {
			updatetrigger=false;

            $('#openvpnserverenable>label[value="'+data.feed.data.openvpnserverenable+'"]');
            $('#openvpnserverconfig>label[value="'+data.feed.data.config+'"]').trigger('click');
            $('#openvpnserverinterface>label[value="'+data.feed.data.interface+'"]').trigger('click');
            $('#openvpnserverprotocol>label[value="'+data.feed.data.protocol+'"]');
            $('#openvpnserverport').val(data.feed.data.port);
            $('#openvpnserverfirewall').val(data.feed.data.firewall);
            $('#openvpnserverauthmode').val(data.feed.data.authmode).trigger('change');
            $('#openvpnserveruserpassauthonly>label[value="'+data.feed.data.userpassauthonly+'"]');
            $('#openvpnserverextrahmacauth').val(data.feed.data.extrahmacauth);
            $('#openvpnserverallocatefromdhcp>label[value="'+data.feed.data.allocatefromdhcp+'"]').trigger('click');
            $('#openvpnserveripstart').val(data.feed.data.ipstart);
            $('#openvpnserveripend').val(data.feed.data.ipend);
            $('#openvpnserverlocalendip').val(data.feed.data.localendip);
            $('#openvpnserverremoteendip').val(data.feed.data.remoteendip);
            $('#openvpnserversubnet').val(data.feed.data.subnet);
            $('#openvpnservernetmask').val(data.feed.data.netmask);
            $('#openvpnserverpollinterval').val(data.feed.data.pollinterval);
            $('#openvpnserverpushlantoclient>label[value="'+data.feed.data.pushlantoclient+'"]');
            $('#openvpnserveralltrafficthroughvpn>label[value="'+data.feed.data.alltrafficthroughvpn+'"]');
            $('#openvpnserverresponsetodns>label[value="'+data.feed.data.responsetodns+'"]');
            $('#openvpnserverencryptioncipher').val(data.feed.data.encryptioncipher);
            $('#openvpnservercompress>label[value="'+data.feed.data.compress+'"]');
            $('#openvpnservertlsrenegotiationtime').val(data.feed.data.tlsrenegotiationtime);
            $('#openvpnservermanageclientspecficoptions>label[value="'+data.feed.data.manageclientspecficoptions+'"]');
            $('#openvpnserverstatickey').val(data.feed.data.statickey);
            $('#openvpnservercertificateauth').val(data.feed.data.certificateauth);
            $('#openvpnserverservercertificate').val(data.feed.data.servercertificate);
            $('#openvpnserverserverkey').val(data.feed.data.serverkey);
            $('#openvpnserverdiffiehellman').val(data.feed.data.diffiehellman);
            $('#openvpnserverrevocationlist').val(data.feed.data.revocationlist);
            $('.openvpnserverlist tbody').empty();
            $('.openvpnserverlist tbody').data('data',data);
            $.each(data.feed.data.users,function (index,users) {
                $('.openvpnserverlist tbody').append('<tr username="'+users.username+'"><td><button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                    '<td>'+users.currentstatus+'</td>' +'<td>'+users.username+'</td>'+
                    '<td><div class="dropdown"><a class="btn btn-default" role="button" data-toggle="popover" title="Password" data-placement="right" data-trigger="hover" data-content="'+users.password+'"><i class="icon-eye-open glyphicon glyphicon-eye-open"></i></a></div></td></tr>').find('a').popover();

            });

			setTimeout(function(){
				updatetrigger=true;
			},0)
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function openvpnserverset() {

    var postData =
    {
        method: 'openvpnserverset',
        sessionid: sessionID,
        openvpnserverenable: Number($('#openvpnserverenable>label.active').attr('value')),
        config: Number($('#openvpnserverconfig>label.active').attr('value')),
        interface: Number($('#openvpnserverinterface>label.active').attr('value')),
        protocol: Number($('#openvpnserverport>label.active').attr('value')),
        port: Number($('#openvpnserverport').val()),
        firewall: Number($('#openvpnserverfirewall').val()),
        authmode: Number($('#openvpnserverauthmode').val()),
        protocol: Number($('#openvpnserverport>label.active').attr('value')),
        userpassauthonly: Number($('#openvpnserveruserpassauthonly>label.active').attr('value')),
        extrahmacauth: Number($('#openvpnserverextrahmacauth').val()),
        allocatefromdhcp: Number($('#openvpnserverallocatefromdhcp>label.active').attr('value')),
        ipstart: $('#openvpnserveripstart').val(),
        ipend: $('#openvpnserveripend').val(),
        localendip: $('#openvpnserverlocalendip').val(),
        remoteendip: $('#openvpnserverremoteendip').val(),
        subnet: $('#openvpnserversubnet').val(),
        netmask: $('#openvpnservernetmask').val(),
        pollinterval: Number($('#openvpnserverpollinterval').val()),
        pushlantoclient: Number($('#openvpnserverpushlantoclient>label.active').attr('value')),
        alltrafficthroughvpn: Number($('#openvpnserveralltrafficthroughvpn>label.active').attr('value')),
        responsetodns: Number($('#openvpnserverresponsetodns>label.active').attr('value')),
        encryptioncipher: Number($('#openvpnserverencryptioncipher').val()),
        compress:  Number($('#openvpnservercompress>label.active').attr('value')),
        tlsrenegotiationtime: Number($('#openvpnservertlsrenegotiationtime').val()),
        manageclientspecficoptions: Number($('#openvpnservermanageclientspecficoptions>label.active').attr('value')),
        statickey:$('#openvpnserverstatickey').val(),
        certificateauth:$('#openvpnservercertificateauth').val(),
        servercertificate:$('#openvpnserverservercertificate').val(),
        serverkey:$('#openvpnserverserverkey').val(),
        diffiehellman:$('#openvpnserverdiffiehellman').val(),
        revocationlist:$('#openvpnserverrevocationlist').val(),
        users: $('.openvpnserverlist tbody').data('data').feed.data.users
    };

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
			$('body').removeData('check');
            myalert('ok');
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getvpnclientset() {
    var postData =
    {
        method: 'getvpnclientset',
        sessionid: sessionID

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
                    clients:
                    [{
                        currentstatus: 'Disconnected',
                        desc:'PPTP wolfy',
                        type:0,
                        vpnserver:'192.168.1.1',
                        defaultroute:0,
                        username:'wolfy',
                        password:'test',
                        pptpencrypt:0,
                        requestca:1,
                        certificate:'',
                        clientcertificate:'',
                        clientkey:'',
                        statickey:''
                    },
                    {
                        currentstatus: 'Disconnected',
                        desc:'OpenVPN wolfy',
                        type:2,
                        vpnserver:'192.168.1.2',
                        defaultroute:0,
                        username:'wolfy',
                        password:'test',
                        pptpencrypt:0,
                        requestca:1,
                        certificate:'',
                        clientcertificate:'',
                        clientkey:'',
                        statickey:''
                    }
                    ]
                }
            }
        };
        if (data.stat == 'success') {
            $('.vpnclientlist tbody').empty();
            $('.vpnclientlist tbody').data('data',data);
            $.each(data.feed.data.clients,function (index,clients) {
                if(clients.currentstatus == "Connected") {
                    $('.vpnclientlist tbody').append('<tr vpntype="'+clients.type+'" oldvpnserver="'+clients.vpnserver+'" oldusername="'+clients.username+'"><td><button class="btn btn-default edit"><i class="glyphicon glyphicon-edit"></i></button> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button> <button class="btn btn-default disconnect"><i class="fa fa-unlink"></i></button></td>'+
                        '<td>'+clients.currentstatus+'</td>' +'<td>'+$('#vpnclienttype').find('option[value="'+clients.type+'"]').text()+'</td>'+'<td>'+clients.vpnserver+'</td>'+'<td>'+clients.username+'</td>'+
                        '<td><div class="dropdown"><a class="btn btn-default" role="button" data-toggle="popover" title="Password" data-placement="right" data-trigger="hover" data-content="'+clients.password+'"><i class="icon-eye-open glyphicon glyphicon-eye-open"></i></a></div></td>'+
                        '<td>'+clients.desc+'</td></tr>').find('a').popover();
                } if(clients.currentstatus == "Disconnected") {
                    $('.vpnclientlist tbody').append('<tr vpntype="'+clients.type+'" oldvpnserver="'+clients.vpnserver+'" oldusername="'+clients.username+'"><td><button class="btn btn-default edit"><i class="glyphicon glyphicon-edit"></i></button> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button> <button class="btn btn-default connect"><i class="fa fa-link"></i></button></td>'+
                        '<td>'+clients.currentstatus+'</td>' +'<td>'+$('#vpnclienttype').find('option[value="'+clients.type+'"]').text()+'</td>'+'<td>'+clients.vpnserver+'</td>'+'<td>'+clients.username+'</td>'+
                        '<td><div class="dropdown"><a class="btn btn-default" role="button" data-toggle="popover" title="Password" data-placement="right" data-trigger="hover" data-content="'+clients.password+'"><i class="icon-eye-open glyphicon glyphicon-eye-open"></i></a></div></td>'+
                        '<td>'+clients.desc+'</td></tr>').find('a').popover();
                } else {
                    $('.vpnclientlist tbody').append('<tr vpntype="'+clients.type+'" oldvpnserver="'+clients.vpnserver+'" oldusername="'+clients.username+'"><td><button class="btn btn-default edit"><i class="glyphicon glyphicon-edit"></i></button> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                        '<td>'+clients.currentstatus+'</td>' +'<td>'+$('#vpnclienttype').find('option[value="'+clients.type+'"]').text()+'</td>'+'<td>'+clients.vpnserver+'</td>'+'<td>'+clients.username+'</td>'+
                        '<td><div class="dropdown"><a class="btn btn-default" role="button" data-toggle="popover" title="Password" data-placement="right" data-trigger="hover" data-content="'+clients.password+'"><i class="icon-eye-open glyphicon glyphicon-eye-open"></i></a></div></td>'+
                        '<td>'+clients.desc+'</td></tr>').find('a').popover();
                }
            });
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function vpnclientadd() {

    var postData =
    {
        method: 'vpnclientadd',
        sessionid: sessionID,
        type: Number($('#vpnclienttype').val()),
        defaultroute: Number($('#vpnclientdefaultroute>label.active').attr('value')),
        desc: $('#vpnclientdesc').val(),
        vpnserver:$('#vpnclientvpnserver').val(),
        username:$('#vpnclientusername').val(),
        password:$('#vpnclientpassword').val(),
        pptpencrypt:Number($('#vpnclientpptpencryption').val()),
        importovpn:$('#vpnclientimportovpn').val(),
        requestca:Number($('#vpnclientreqcaandkey>label.active').attr('value')),
        importca:$('#vpnclientimportca').val(),
        certificate:$('#vpnclientcertificate').val(),
        clientcertificate:$('#vpnclientclientcertificate').val(),
        clientkey:$('#vpnclientclientkey').val(),
        statickey:$('#vpnclientstatickey').val()
    };

    var formData = new FormData();
    for (var key in postData) {
        formData.append(key, postData[key]);
    }
    // $.ajax({
    //     url: serverURL,
    //     data: formData,
    //     processData: false,
    //     contentType: false,
    //     type: 'POST',
    //     dataType: "json",
    //     success: function(data) {
            var data =
            {
                stat: 'success',
                feed:
                {
                    msg: 'Success',
                }
            };
            if (data.stat == 'success') {
                $('.vpnclientlist tbody').data('data').feed.data.clients;
                var client =
                {
                    currentstatus:'Disconnected',
                    type: Number($('#vpnclienttype').val()),
                    defaultroute: Number($('#vpnclientdefaultroute>label.active').attr('value')),
                    desc: $('#vpnclientdesc').val(),
                    vpnserver:$('#vpnclientvpnserver').val(),
                    username:$('#vpnclientusername').val(),
                    password:$('#vpnclientpassword').val(),
                    pptpencrypt:Number($('#vpnclientpptpencryption').val()),
                    importovpn:$('#vpnclientimportovpn').val(),
                    requestca:Number($('#vpnclientreqcaandkey>label.active').attr('value')),
                    importca:$('#vpnclientimportca').val(),
                    certificate:$('#vpnclientcertificate').val(),
                    clientcertificate:$('#vpnclientclientcertificate').val(),
                    clientkey:$('#vpnclientclientkey').val(),
                    statickey:$('#vpnclientstatickey').val()
                }
                $('.vpnclientlist tbody').data('data').feed.data.clients.push(client);
                $('.vpnclientlist tbody').append('<tr vpntype="'+client.type+'" oldvpnserver="'+client.vpnserver+'" oldusername="'+client.username+'"><td><button class="btn btn-default edit"><i class="glyphicon glyphicon-edit"></i></button> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button> <button class="btn btn-default connect"><i class="fa fa-link"></i></button></td>'+
                    '<td>'+client.currentstatus+'</td>' +'<td>'+$('#vpnclienttype').find('option[value="'+client.type+'"]').text()+'</td>'+'<td>'+client.vpnserver+'</td>'+'<td>'+client.username+'</td>'+
                    '<td><div class="dropdown"><a class="btn btn-default" role="button" data-toggle="popover" title="Password" data-placement="right" data-trigger="hover" data-content="'+client.password+'"><i class="icon-eye-open glyphicon glyphicon-eye-open"></i></a></div></td>'+
                    '<td>'+client.desc+'</td></tr>').find('a').popover();
                 myalert('ok');
            } else {
                myalert(data.feed.msg);
            }
        // }
    // });
}

function vpnclientupdate() {

    var postData =
    {
        method: 'vpnclientupdate',
        sessionid: sessionID,
        type: Number($('#vpnclienttype').val()),
        defaultroute: Number($('#vpnclientdefaultroute>label.active').attr('value')),
        desc: $('#vpnclientdesc').val(),
        vpnserver:$('#vpnclientvpnserver').val(),
        oldvpnserver:$('vpnclientvpnserver').attr('oldvpnserver'),
        username:$('#vpnclientusername').val(),
        oldusername:$('#vpnclientusername').attr('oldusername'),
        password:$('#vpnclientpassword').val(),
        pptpencrypt:Number($('#vpnclientpptpencryption').val()),
        importovpn:$('#vpnclientimportovpn').val(),
        requestca:Number($('#vpnclientreqcaandkey>label.active').attr('value')),
        importca:$('#vpnclientimportca').val(),
        certificate:$('#vpnclientcertificate').val(),
        clientcertificate:$('#vpnclientclientcertificate').val(),
        clientkey:$('#vpnclientclientkey').val(),
        statickey:$('#vpnclientstatickey').val()
    };

    var formData = new FormData();
    for (var key in postData) {
        formData.append(key, postData[key]);
    }
    // $.ajax({
    //     url: serverURL,
    //     data: formData,
    //     processData: false,
    //     contentType: false,
    //     type: 'POST',
    //     dataType: "json",
    //     success: function(data) {
                var data =
                {
                    stat: 'success',
                    feed:
                    {
                        msg: 'Success',
                    }
                };
                if (data.stat == 'success') {
                    var client =
                    {
                        currentstatus:'Disconnected',
                        type: Number($('#vpnclienttype').val()),
                        defaultroute: Number($('#vpnclientdefaultroute>label.active').attr('value')),
                        desc: $('#vpnclientdesc').val(),
                        vpnserver:$('#vpnclientvpnserver').val(),
                        username:$('#vpnclientusername').val(),
                        password:$('#vpnclientpassword').val(),
                        pptpencrypt:Number($('#vpnclientpptpencryption').val()),
                        importovpn:$('#vpnclientimportovpn').val(),
                        requestca:Number($('#vpnclientreqcaandkey>label.active').attr('value')),
                        importca:$('#vpnclientimportca').val(),
                        certificate:$('#vpnclientcertificate').val(),
                        clientcertificate:$('#vpnclientclientcertificate').val(),
                        clientkey:$('#vpnclientclientkey').val(),
                        statickey:$('#vpnclientstatickey').val()
                    }
                    $.each($('.vpnclientlist tbody').data('data').feed.data.clients,function (index,clients) {
                        if(clients.type == Number($('#vpnclienttype').val()) && clients.vpnserver==$('#vpnclientvpnserver').attr('oldvpnserver') && clients.username == $('#vpnclientusername').attr('oldusername')) {
                            $('.vpnclientlist tbody tr:eq('+index+')').attr('vpntype',client.type);
                            $('.vpnclientlist tbody tr:eq('+index+')').attr('olduvpnserver',client.vpnserver);
                            $('.vpnclientlist tbody tr:eq('+index+')').attr('oldusername',client.vpnusername);
                            $('.vpnclientlist tbody tr:eq('+index+')').html('<td><button class="btn btn-default edit"><i class="glyphicon glyphicon-edit"></i></button> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button> <button class="btn btn-default connect"><i class="fa fa-link"></i></button></td>'+
                                    '<td>'+client.currentstatus+'</td>' +'<td>'+$('#vpnclienttype').find('option[value="'+client.type+'"]').text()+'</td>'+'<td>'+client.vpnserver+'</td>'+'<td>'+client.vpnserver+'</td>'+'<td>'+client.username+'</td>'+
                                    '<td><div class="dropdown"><a class="btn btn-default" role="button" data-toggle="popover" title="Password" data-placement="right" data-trigger="hover" data-content="'+client.password+'"><i class="icon-eye-open glyphicon glyphicon-eye-open"></i></a></div></td>'+
                                    '<td>'+client.desc+'</td>').find('a').popover();
                            $('.vpnclientlist tbody').data('data').feed.data.clients[index]=client;
                            return true;
                        }
                    });
                    myalert('ok');
                } else {
                    myalert(data.feed.msg);
                }
        // }
    // });
}

function vpnclientdelete(vpntype,vpnclientserver,vpnclientusername) {

    var postData =
    {
        method: 'vpnclientdelete',
        sessionid: sessionID,
        type: vpntype,
        vpnserver:vpnclientserver,
        username:vpnclientusername,
    };

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
            $.each($('.vpnclientlist tbody').data('data').feed.data.clients,function (index,clients) {
                if(clients.type == vpntype && clients.vpnserver==vpnclientserver && clients.username == vpnclientusername) {
                    $('.vpnclientlist tbody tr:eq('+index+')').remove();
                    $('.vpnclientlist tbody').data('data').feed.data.clients.splice(index);
                    return true;
                }
            });
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function vpnclientconnect(vpntype,vpnclientserver,vpnclientusername) {

    var postData =
    {
        method: 'vpnclientconnect',
        sessionid: sessionID,
        type: vpntype,
        vpnserver:vpnclientserver,
        username:vpnclientusername,
    };

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
            $.each($('.vpnclientlist tbody').data('data').feed.data.clients,function (index,clients) {
                if(clients.type == vpntype && clients.vpnserver==vpnclientserver && clients.username == vpnclientusername) {
                    clients.currentstatus = "Connected";
                    $('.vpnclientlist tbody tr:eq('+index+') td:eq(1)').text('Connected');
                    $('.vpnclientlist tbody tr:eq('+index+') button:eq(2)').removeClass('connect').addClass('disconnect').show();
                    $('.vpnclientlist tbody tr:eq('+index+') button:eq(2) i').removeClass('fa-link').addClass('fa-unlink');
                    return true;
                }
            });
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function vpnclientdisconnect(vpntype,vpnclientserver,vpnclientusername) {

    var postData =
    {
        method: 'vpnclientdisconnect',
        sessionid: sessionID,
        type: vpntype,
        vpnserver:vpnclientserver,
        username:vpnclientusername,
    };

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
            $.each($('.vpnclientlist tbody').data('data').feed.data.clients,function (index,clients) {
                if(clients.type == vpntype && clients.vpnserver==vpnclientserver && clients.username == vpnclientusername) {
                    clients.currentstatus = "Disconnected";
                    $('.vpnclientlist tbody tr:eq('+index+') td:eq(1)').text('Disconnected');
                    $('.vpnclientlist tbody tr:eq('+index+') button:eq(2)').removeClass('disconnect').addClass('connect').show();
                    $('.vpnclientlist tbody tr:eq('+index+') button:eq(2) i').removeClass('fa-unlink').addClass('fa-link');
                    return true;
                }
            });
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getfirewallcommonset() {

    var postData =
    {
        method: 'getfirewallcommonset',
        sessionid: sessionID,
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
                    enable: 0,
                    dosprotection:0,
                    denypingtowan:1,
                    igmpmld:1
                }
            }
        };
       if (data.stat == 'success') {
			updatetrigger=false;

            $('#firewallenable>label[value="'+data.feed.data.enable+'"]').trigger('click');
            $('#dosprotectionenable>label[value="'+data.feed.data.dosprotection+'"]').trigger('click');
            $('#denypingtowanenable>label[value="'+data.feed.data.denypingtowan+'"]').trigger('click');
            $('#igmpmldenable>label[value="'+data.feed.data.igmpmld+'"]').trigger('click');

			setTimeout(function(){
				updatetrigger=true;
			},0)
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function firewallcommonset() {

    var postData =
    {
        method: 'firewallcommonset',
        sessionid: sessionID,
        enable: Number($('#firewallenable>label.active').attr('value')),
        dosprotection:Number($('#dosprotectionenable>label.active').attr('value')),
        denypingtowan:Number($('#denypingtowanenable>label.active').attr('value')),
        igmpmld:Number($('#igmpmldenable>label.active').attr('value'))
    };

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
			$('body').removeData('check');
            myalert('ok');
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getfirewallurlset() {

    var postData =
    {
        method: 'getfirewallurlset',
        sessionid: sessionID,
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
                    enable: 0,
                    urls: [{
                        url:'www.google.com'
                    }, {
                        url:'www.yahoo.com'
                    }],
                    schedule: {
                        sun:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        mon:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        tus:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        wen:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        thr:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        fri:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        sat:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                    }
                }
            }
        };
       if (data.stat == 'success') {
			updatetrigger=false;

            $('#urlfilterenable>label[value="'+data.feed.data.enable+'"]').trigger('click');
            $('.urlfilterlist tbody').empty();
            $('.urlfilterlist tbody').data('data',data);
            $.each(data.feed.data.urls,function (index,urls) {
                $('.urlfilterlist tbody').append('<tr url="'+urls.url+'"><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                    '<td>'+urls.url+'</td></tr>').find('a').popover();
            });
            $('#urlfilterschedule').setdata(data.feed.data.schedule);

			setTimeout(function(){
				updatetrigger=true;
			},0)
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function firewallurlset() {

    var postData =
    {
        method: 'firewallurlset',
        sessionid: sessionID,
        enable: Number($('#urlfilterenable>label.active').attr('value')),
        urls:$('.urlfilterlist tbody').data('data').feed.data.urls,
        schedule:$('#urlfilterschedule').getdata(),
    };
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
            myalert('ok');
        } else {
			$('body').removeData('check');
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getfirewallkeywordset() {

    var postData =
    {
        method: 'getfirewallkeywordset',
        sessionid: sessionID,
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
                    enable: 0,
                    keywords: [{
                        keyword:'AV streaming'
                    }],
                    schedule: {
                        sun:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        mon:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        tus:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        wen:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        thr:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        fri:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        sat:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                    }
                }
            }
        };
       if (data.stat == 'success') {
			updatetrigger=false;

            $('#keywordfilterenable>label[value="'+data.feed.data.enable+'"]').trigger('click');
            $('.keywordfilterlist tbody').empty();
            $('.keywordfilterlist tbody').data('data',data);
            $.each(data.feed.data.keywords,function (index,keywords) {
                $('.keywordfilterlist tbody').append('<tr keyword="'+keywords.keyword+'"><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                    '<td>'+keywords.keyword+'</td></tr>').find('a').popover();
            });
            $('#keywordfilterschedule').setdata(data.feed.data.schedule);

			setTimeout(function(){
				updatetrigger=true;
			},0)
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function firewallkeywordset() {

    var postData =
    {
        method: 'firewallkeywordset',
        sessionid: sessionID,
        enable: Number($('#keywordfilterenable>label.active').attr('value')),
        keywords:$('.keywordfilterlist tbody').data('data').feed.data.keywords,
        schedule:$('#keywordfilterschedule').getdata(),
    };
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
			$('body').removeData('check');
            myalert('ok');
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getfirewallnetservicewellknownservice() {

    var postData =
    {
        method: 'getfirewallnetservicewellknownservice',
        sessionid: sessionID,
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
                    services: [{
                        servicename:'FTP',
                        portrange:'20:21',
                        protocol:0
                    },{
                        servicename:'TELNET',
                        portrange:'23',
                        protocol:0
                    },{
                        servicename:'WWW',
                        portrange:'80',
                        protocol:0
                    }]
                }
            }
        };
       if (data.stat == 'success') {
			updatetrigger=false;

            $('#netservicefilterwellknownservice').data('data',data.feed.data.services).empty().append('<option value="">Please select</option>');
            $.each(data.feed.data.services,function (index,services) {
                $('#netservicefilterwellknownservice').append('<option value="'+services.servicename+'">'+services.servicename+'</option>')
            });

			setTimeout(function(){
				updatetrigger=true;
			},0)
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getfirewallnetserviceset() {

    var postData =
    {
        method: 'getfirewallnetserviceset',
        sessionid: sessionID,
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
                    enable: 0,
                    blakcorwhite:0,
                    rules: [{
                        srcip:'192.168.1.1',
                        srcportrange:'20:21',
                        destip:'192.168.2.1',
                        destportrange:'2100:2101',
                        protocol:0
                    }],
                    schedule: {
                        sun:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        mon:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        tus:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        wen:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        thr:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        fri:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        sat:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                    }
                }
            }
        };
       if (data.stat == 'success') {
			updatetrigger=false;

            $('#netservicefilterenable>label[value="'+data.feed.data.enable+'"]').trigger('click');
            $('#netservicefiltermethod>label[value="'+data.feed.data.blakcorwhite+'"]').trigger('click');
            $('.netservicefilterlist tbody').empty();
            $.each(data.feed.data.rules,function (index,rules) {
                $('.netservicefilterlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                    '<td>'+rules.srcip+'</td>'+'<td>'+rules.srcportrange+'</td>'+'<td>'+rules.destip+'</td>'+'<td>'+rules.destportrange+'</td>'+'<td>'+$('#netservicefilterprotocol').find('option[value="'+rules.protocol+'"]').text()+'</td></tr>').children('tr:last-child').data('data',rules).end().find('a').popover();
            });
            $('#netservicefilterschedule').setdata(data.feed.data.schedule);

			setTimeout(function(){
				updatetrigger=true;
			},0)
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function firewallnetserviceset() {

    var rules=[];

    $('.netservicefilterlist tbody tr').each( function (index,value) {
        rules.push($(this).data('data'));
    });
    var postData =
    {
        method: 'firewallnetserviceset',
        sessionid: sessionID,
        enable: Number($('#netservicefilterenable>label.active').attr('value')),
        blakcorwhite:Number($('#netservicefiltermethod>label.active').attr('value')),
        rules:rules,
        schedule:$('#netservicefilterschedule').getdata()
    };
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
			$('body').removeData('check');
            myalert('ok');
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getfirewallipv6wellknownservice() {

    var postData =
    {
        method: 'getfirewallipv6wellknownservice',
        sessionid: sessionID,
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
                    services: [{
                        servicename:'FTP',
                        servicealias:'FTP Server',
                        portrange:'20:21',
                        protocol:0
                    },{
                        servicename:'TELNET',
                        servicealias:'Telnet Server',
                        portrange:'23',
                        protocol:0
                    },{
                        servicename:'WWW',
                        servicealias:'Web Server',
                        portrange:'80',
                        protocol:0
                    }]
                }
            }
        };
       if (data.stat == 'success') {
			updatetrigger=false;

            $('#ipv6filterwellknownservice').data('data',data.feed.data.services).empty().append('<option value="">Please select</option>');
            $.each(data.feed.data.services,function (index,services) {
                $('#ipv6filterwellknownservice').append('<option value="'+services.servicename+'">'+services.servicename+'</option>')
            });

			setTimeout(function(){
				updatetrigger=true;
			},0)
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getfirewallipv6filterset() {

    var postData =
    {
        method: 'getfirewallipv6filterset',
        sessionid: sessionID,
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
                    enable: 0,
                    rules: [{
                        servername:'askeyTest',
                        remoteipcidr:'2001:db8:85a3:8d3:1319:8a2e:370:7348',
                        localip:'2001:db8:85a3:8d3:1319:8a2e:370:7349',
                        portrange:'2100:2101',
                        protocol:0
                    }],
                    schedule: {
                        sun:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        mon:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        tus:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        wen:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        thr:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        fri:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                        sat:'0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
                    }
                }
            }
        };
       if (data.stat == 'success') {
			updatetrigger=false;

            $('#ipv6filterenable>label[value="'+data.feed.data.enable+'"]').trigger('click');
            $('.ipv6filterlist tbody').empty();
            $.each(data.feed.data.rules,function (index,rules) {
                $('.ipv6filterlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                    '<td>'+rules.servername+'</td>'+'<td>'+rules.remoteipcidr+'</td>'+'<td>'+rules.localip+'</td>'+'<td>'+rules.portrange+'</td>'+'<td>'+$('#ipv6filterprotocol').find('option[value="'+rules.protocol+'"]').text()+'</td></tr>').children('tr:last-child').data('data',rules).end().find('a').popover();
            });
            $('#ipv6filterschedule').setdata(data.feed.data.schedule);

			setTimeout(function(){
				updatetrigger=true;
			},0)
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function firewallipv6filterset() {

    var rules=[];

    $('.ipv6filterlist tbody tr').each( function (index,value) {
        rules.push($(this).data('data'));
    });
    var postData =
    {
        method: 'firewallipv6filterset',
        sessionid: sessionID,
        enable: Number($('#ipv6filterenable>label.active').attr('value')),
        rules:rules,
        schedule:$('#ipv6filterschedule').getdata()
    };
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
			$('body').removeData('check');
            myalert('ok');
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getipv6default(type) {

    var postData =
    {
        method: 'getipv6default',
        sessionid: sessionID,
        type: type
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
                    type: type,
                    dhcppd: 0,
                    dhcpoption: 0,
                    wanaddress: '2001:db8:85a3:8d3:1319:8a2e:370:7348',
                    wanprefixlength:64,
                    ipv4anycastrelay:'192.168.1.1',
                    serveripv4address:'192.168.1.1',
                    routeradvertisement:0,
                    clientipv6address:'2001:db8:85a3:8d3:1319:8a2e:370:7349',
                    wangateway:'2001:db8:85a3:8d3:1319:8a2e:370:7359',
                    ipv4borderrouter:'192.168.1.254',
                    ipv4routermasklength:24,
                    tunnelmtu:1492,
                    tunnelttl:3600,
                    wanmtu:1492,
                    simultaneous:0,
                    simulatneoustype:1,
                    lanaddress:'2001:db8:85a3:8d3:1319:8a2e:370:7777',
                    lanprefixlength:64,
                    lanprefix:'2001:db8:85a3:8d3:1319:8a2e:370:',
                    lanmtu:1492,
                    dhcppoolfrom:'2001:db8:85a3:8d3:1319:8a2e:370:',
                    dhcppoolto:'2001:db8:85a3:8d3:1319:8a2e:370:',
                    pdvalidlifetime:3600,
                    pdpreferredlifetime:30,
                    autodns:0,
                    dns1:'2001:db8:85a3:8d3:1319:8a2e:370:7777',
                    dns2:'',
                    dns3:''
                }
            }
        };
       if (data.stat == 'success') {
			updatetrigger=false;

            $('#ipv6configtype').val(data.feed.data.type);
            $('#ipv6dhcppd>label[value="'+data.feed.data.enable+'"]').trigger('click');
            $('#ipv6dhcpoption>label[value="'+data.feed.data.enable+'"]').trigger('click');
            $('#ipv6wanaddress').val(data.feed.data.wanaddress);
            $('#ipv6wanprefixlength').val(data.feed.data.wanprefixlength);
            $('#ipv6ipv4anycastrelay').val(data.feed.data.serveripv4address);
            $('#ipv6routeradvertisement>label[value="'+data.feed.data.enable+'"]').trigger('click');
            $('#ipv6clientipv6address').val(data.feed.data.clientipv6address);
            $('#ipv6wangateway').val(data.feed.data.wangateway);
            $('#ipv6ipv4borderrouter').val(data.feed.data.ipv4borderrouter);
            $('#ipv6ipv4routermasklength').val(data.feed.data.ipv4routermasklength);
            $('#ipv6tunnelmtu').val(data.feed.data.tunnelmtu);
            $('#ipv6tunnelttl').val(data.feed.data.tunnelttl);
            $('#ipv6wanmtu').val(data.feed.data.wanmtu);
            $('#ipv6simulatneous>label[value="'+data.feed.data.enable+'"]').trigger('click');
            $('#ipv6simulatneoustype').val(data.feed.data.simulatneoustype).trigger('change');
            if(data.feed.data.type==1) {
                $('#ipv6lanaddress').text(data.feed.data.lanaddress);
                $('#ipv6lanprefix').text(data.feed.data.lanprefix);
                $('#ipv6lanprefixlength').text(data.feed.data.lanprefixlength);
            }
            if(data.feed.data.type==2) {
                $('#ipv6lanaddress').text(data.feed.data.lanaddress);
                $('#ipv6lanprefix').text(data.feed.data.lanprefix);
                $('#ipv6lanprefixlength').text(data.feed.data.lanprefixlength);
            }
            if(data.feed.data.type==3) {
                $('#ipv6lanaddress').text(data.feed.data.lanaddress);
                $('#ipv6lanprefix').val(data.feed.data.lanprefix);
                $('#ipv6lanprefixlength').val(data.feed.data.lanprefixlength);
            }
            if(data.feed.data.type==4) {
                $('#ipv6lanaddress').text(data.feed.data.lanaddress);
                $('#ipv6lanprefix').text(data.feed.data.lanprefix);
                $('#ipv6lanprefixlength').text(data.feed.data.lanprefixlength);
            }
            if(data.feed.data.type==5) {
                $('#ipv6lanaddress').val(data.feed.data.lanaddress);
                $('#ipv6lanprefix').text(data.feed.data.lanprefix);
                $('#ipv6lanprefixlength').val(data.feed.data.lanprefixlength);
            }
            $('#ipv6lanmtu').text(data.feed.data.lanmtu);
            $('#ipv6dhcppoolfrom').val(data.feed.data.dhcppoolfrom);
            $('#ipv6dhcppoolto').val(data.feed.data.dhcppoolto);
            $('#ipv6pdvalidlifetime').val(data.feed.data.pdvalidlifetime);
            $('#ipv6pdpreferredlifetime').val(data.feed.data.pdpreferredlifetime);
            $('#ipv6autodns').val(data.feed.data.autodns).trigger('change');
            $('#ipv6dns1').val(data.feed.data.dns1);
            $('#ipv6dns2').val(data.feed.data.dns2);
            $('#ipv6dns3').val(data.feed.data.dns3);

			setTimeout(function(){
				updatetrigger=true;
			},0)
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}


function getipv6set() {

    var postData =
    {
        method: 'getipv6set',
        sessionid: sessionID,
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
                    type: 1,
                    dhcppd: 0,
                    dhcpoption: 0,
                    wanaddress: '2001:db8:85a3:8d3:1319:8a2e:370:7348',
                    wanprefixlength:64,
                    ipv4anycastrelay:'192.168.1.1',
                    serveripv4address:'192.168.1.1',
                    routeradvertisement:0,
                    clientipv6address:'2001:db8:85a3:8d3:1319:8a2e:370:7349',
                    wangateway:'2001:db8:85a3:8d3:1319:8a2e:370:7359',
                    ipv4borderrouter:'192.168.1.254',
                    ipv4routermasklength:24,
                    tunnelmtu:1492,
                    tunnelttl:3600,
                    wanmtu:1492,
                    simultaneous:0,
                    simulatneoustype:1,
                    lanaddress:'2001:db8:85a3:8d3:1319:8a2e:370:7777',
                    lanprefixlength:64,
                    lanprefix:'2001:db8:85a3:8d3:1319:8a2e:370:',
                    lanmtu:1492,
                    dhcppoolfrom:'2001:db8:85a3:8d3:1319:8a2e:370:',
                    dhcppoolto:'2001:db8:85a3:8d3:1319:8a2e:370:',
                    pdvalidlifetime:3600,
                    pdpreferredlifetime:30,
                    autodns:0,
                    dns1:'2001:db8:85a3:8d3:1319:8a2e:370:7777',
                    dns2:'',
                    dns3:''
                }
            }
        };
       if (data.stat == 'success') {
			updatetrigger=false;

            $('#ipv6configtype').data('data',data.feed.data.type);
            $('#ipv6configtype').val(data.feed.data.type);
            $('#ipv6dhcppd>label[value="'+data.feed.data.enable+'"]').trigger('click');
            $('#ipv6dhcpoption>label[value="'+data.feed.data.enable+'"]').trigger('click');
            $('#ipv6wanaddress').val(data.feed.data.wanaddress);
            $('#ipv6wanprefixlength').val(data.feed.data.wanprefixlength);
            $('#ipv6ipv4anycastrelay').val(data.feed.data.serveripv4address);
            $('#ipv6routeradvertisement>label[value="'+data.feed.data.enable+'"]').trigger('click');
            $('#ipv6clientipv6address').val(data.feed.data.clientipv6address);
            $('#ipv6wangateway').val(data.feed.data.wangateway);
            $('#ipv6ipv4borderrouter').val(data.feed.data.ipv4borderrouter);
            $('#ipv6ipv4routermasklength').val(data.feed.data.ipv4routermasklength);
            $('#ipv6tunnelmtu').val(data.feed.data.tunnelmtu);
            $('#ipv6tunnelttl').val(data.feed.data.tunnelttl);
            $('#ipv6wanmtu').val(data.feed.data.wanmtu);
            $('#ipv6simulatneous>label[value="'+data.feed.data.enable+'"]').trigger('click');
            $('#ipv6simulatneoustype').val(data.feed.data.simulatneoustype).trigger('change');
            if(data.feed.data.type==1) {
                $('#ipv6lanaddress').text(data.feed.data.lanaddress);
                $('#ipv6lanprefix').text(data.feed.data.lanprefix);
                $('#ipv6lanprefixlength').text(data.feed.data.lanprefixlength);
            }
            if(data.feed.data.type==2) {
                $('#ipv6lanaddress').text(data.feed.data.lanaddress);
                $('#ipv6lanprefix').text(data.feed.data.lanprefix);
                $('#ipv6lanprefixlength').text(data.feed.data.lanprefixlength);
            }
            if(data.feed.data.type==3) {
                $('#ipv6lanaddress').text(data.feed.data.lanaddress);
                $('#ipv6lanprefix').val(data.feed.data.lanprefix);
                $('#ipv6lanprefixlength').val(data.feed.data.lanprefixlength);
            }
            if(data.feed.data.type==4) {
                $('#ipv6lanaddress').text(data.feed.data.lanaddress);
                $('#ipv6lanprefix').text(data.feed.data.lanprefix);
                $('#ipv6lanprefixlength').text(data.feed.data.lanprefixlength);
            }
            if(data.feed.data.type==5) {
                $('#ipv6lanaddress').val(data.feed.data.lanaddress);
                $('#ipv6lanprefix').text(data.feed.data.lanprefix);
                $('#ipv6lanprefixlength').val(data.feed.data.lanprefixlength);
            }
            $('#ipv6lanmtu').text(data.feed.data.lanmtu);
            $('#ipv6dhcppoolfrom').val(data.feed.data.dhcppoolfrom);
            $('#ipv6dhcppoolto').val(data.feed.data.dhcppoolto);
            $('#ipv6pdvalidlifetime').val(data.feed.data.pdvalidlifetime);
            $('#ipv6pdpreferredlifetime').val(data.feed.data.pdpreferredlifetime);
            $('#ipv6autodns').val(data.feed.data.autodns).trigger('change');
            $('#ipv6dns1').val(data.feed.data.dns1);
            $('#ipv6dns2').val(data.feed.data.dns2);
            $('#ipv6dns3').val(data.feed.data.dns3);

			setTimeout(function(){
				updatetrigger=true;
			},0)
       } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function ipv6set() {

    var ipv6lanaddress="";
    var ipv6lanprefix="";
    var ipv6lanprefixlength="";
    if(Number($('#ipv6configtype').val())==1) {
        ipv6lanaddress=$('#ipv6lanaddress').text();
        ipv6lanprefixlength=$('#ipv6lanprefixlength').text();
        ipv6lanprefix=$('#ipv6lanprefix').text();
    }
    if(Number($('#ipv6configtype').val())==2) {
        ipv6lanaddress=$('#ipv6lanaddress').text();
        ipv6lanprefixlength=$('#ipv6lanprefixlength').text();
        ipv6lanprefix=$('#ipv6lanprefix').text();
    }
    if(Number($('#ipv6configtype').val())==3) {
        ipv6lanaddress=$('#ipv6lanaddress').text();
        ipv6lanprefixlength=$('#ipv6lanprefixlength').val();
        ipv6lanprefix=$('#ipv6lanprefix').val();
    }
    if(Number($('#ipv6configtype').val())==4) {
        ipv6lanaddress=$('#ipv6lanaddress').text();
        ipv6lanprefixlength=$('#ipv6lanprefixlength').text();
        ipv6lanprefix=$('#ipv6lanprefix').text();
    }
    if(Number($('#ipv6configtype').val())==5) {
        ipv6lanaddress=$('#ipv6lanaddress').val();
        ipv6lanprefixlength=$('#ipv6lanprefixlength').val();
        ipv6lanprefix=$('#ipv6lanprefix').text();
    }
    var ipv6ipv4anycastrelay='';
    if($('#ipv6ipv4anycastrelay').val()!="___.___.___.___")
        ipv6ipv4anycastrelay=$('#ipv6ipv4anycastrelay').val();
    var ipv6serveripv4address='';
    if($('#ipv6serveripv4address').val()!="___.___.___.___")
        ipv6serveripv4address=$('#ipv6serveripv4address').val();
    var ipv6clientipv6address='';
    if($('#ipv6clientipv6address').val()!="____:____:____:____:____:____:____:____")
        ipv6clientipv6address=$('#ipv6clientipv6address').val();
    var ipv6wangateway='';
    if($('#ipv6wangateway').val()!="____:____:____:____:____:____:____:____")
        ipv6wangateway=$('#ipv6wangateway').val();
    var ipv6wanaddress='';
    if($('#ipv6wanaddress').val()!="____:____:____:____:____:____:____:____")
        ipv6wanaddress=$('#ipv6wanaddress').val();
    var ipv6ipv4borderrouter='';
    if($('#ipv6ipv4borderrouter').val()!="___.___.___.___")
        ipv6ipv4borderrouter=$('#ipv6ipv4borderrouter').val();
    if($('#ipv6lanaddress').val()!="____:____:____:____:____:____:____:____")
        ipv6lanaddress=$('#ipv6lanaddress').val();
    if($('#ipv6lanprefix').val()!="____:____:____:____:____:____:____:____")
        ipv6lanprefix=$('#ipv6lanprefix').val();
    var ipv6dns1='';
    if($('#ipv6dns1').val()!="____:____:____:____:____:____:____:____")
        ipv6dns1=$('#ipv6dns1').val();
    var ipv6dns2='';
    if($('#ipv6dns2').val()!="____:____:____:____:____:____:____:____")
        ipv6dns2=$('#ipv6dns2').val();
    var ipv6dns3='';
    if($('#ipv6dns3').val()!="____:____:____:____:____:____:____:____")
        ipv6dns3=$('#ipv6dns3').val();
    var postData =
    {
        method: 'ipv6set',
        sessionid: sessionID,
        type: Number($('#ipv6configtype').val()),
        dhcppd: Number($('#ipv6dhcppd>label.active').attr('value')),
        dhcpoption: Number($('#ipv6dhcpoption>label.active').attr('value')),
        wanaddress: $('#ipv6wanaddress').val(),
        wanprefixlength:Number($('#ipv6wanprefixlength').val()),
        ipv4anycastrelay:ipv6ipv4anycastrelay,
        serveripv4address:ipv6serveripv4address,
        routeradvertisement:Number($('#ipv6routeradvertisement>label.active').attr('value')),
        clientipv6address:ipv6clientipv6address,
        wangateway:ipv6wangateway,
        ipv4borderrouter:ipv6ipv4borderrouter,
        ipv4routermasklength:Number($('#ipv6ipv4routermasklength').val()),
        tunnelmtu:Number($('#ipv6tunnelmtu').val()),
        tunnelttl:Number($('#ipv6tunnelttl').val()),
        wanmtu:Number($('#ipv6wanmtu').val()),
        simultaneous:Number($('#ipv6simulatneous>label.active').attr('value')),
        simulatneoustype:Number($('#ipv6simulatneoustype').val()),
        lanaddress:ipv6lanaddress,
        lanprefixlength:Number(ipv6lanprefixlength),
        lanprefix:ipv6lanprefix,
        lanmtu:Number($('#ipv6lanmtu').val()),
        dhcppoolfrom:$('#ipv6dhcppoolfrom').val(),
        dhcppoolto:$('#ipv6dhcppoolto').val(),
        pdvalidlifetime:Number($('#ipv6pdvalidlifetime').val()),
        pdpreferredlifetime:Number($('#ipv6pdpreferredlifetime').val()),
        autodns:Number($('#ipv6autodns>label.active').attr('value')),
        dns1:ipv6dns1,
        dns2:ipv6dns2,
        dns3:ipv6dns3
    };
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
			$('body').removeData('check');
            myalert('ok');
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getmulticastset() {

    var postData =
    {
        method: 'getmulticastset',
        sessionid: sessionID,
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
                    ipv4multicastroute:0,
                    ipv6multicastroute:0,
                    igmpmldsnooping:0,
                    mldfastleave:0
               }
            }
        };
       if (data.stat == 'success') {
			updatetrigger=false;

            $('#multicastipv4multicastroute').val(data.feed.data.ipv4multicastroute);
            $('#multicastipv6multicastroute').val(data.feed.data.ipv6multicastroute);
            $('#multicastigmpmldsnooping>label[value="'+data.feed.data.igmpmldsnooping+'"]').trigger('click');
            $('#multicastmldfastleave>label[value="'+data.feed.data.mldfastleave+'"]').trigger('click');

			setTimeout(function(){
				updatetrigger=true;
			},0)
       } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function multicastset() {

    var postData =
    {
        method: 'multicastset',
        sessionid: sessionID,
        ipv4multicastroute:Number($('#multicastipv4multicastroute').val()),
        ipv6multicastroute:Number($('#multicastipv6multicastroute').val()),
        igmpmldsnooping:Number($('#multicastigmpmldsnooping>label.active').attr('value')),
        mldfastleave:Number($('#multicastmldfastleave>label.active').attr('value')),
    };
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
			$('body').removeData('check');
            myalert('ok');
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getsmartqosset() {

    var postData =
    {
        method: 'getsmartqosset',
        sessionid: sessionID
    };

    // $.post(serverURL, postData, function(data, textStatus, jqXHR) {
        var data =
        {
            stat: 'success',
            feed:
            {
                msg: 'Success',
                data: {
                	type: 0
                }
            }
        };
       if (data.stat == 'success') {
			updatetrigger=false;

			$('#smartqospage-1 .type>label[value="'+data.feed.data.type+'"]').trigger('click');
			setTimeout(function(){
				updatetrigger=true;
			},0)
       } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function smartqosset() {
    var postData =
    {
        method: 'smartqosset',
        sessionid: sessionID,
        type:0
    };
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
			$('body').removeData('check');
            myalert('ok');
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function get80211tosset() {

    var postData =
    {
        method: 'get80211tosset',
        sessionid: sessionID,
    };

    // $.post(serverURL, postData, function(data, textStatus, jqXHR) {
        var data =
        {
            stat: 'success',
            feed:
            {
                msg: 'Success',
                data: {
                    lists: [{
                    ssid:'wolfy-5G',
                    remarkdesc:'0xe'
                    },
                    {
                    ssid:'wolfy-2.4G',
                    remarkdesc:'0xc'
                    }]
                }
            }
        };
       if (data.stat == 'success') {
			updatetrigger=false;

            $('.80211toslist tbody').empty();
            $.each(data.feed.data.lists,function (index,lists) {
                $('.80211toslist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                    '<td>'+lists.ssid+'</td>'+'<td>'+$('#80211tospageremarkdesc').find('option[value="'+lists.remarkdesc+'"]').text()+'</td></tr>').children('tr:last-child').data('data',lists).end().find('a').popover();
            });

			setTimeout(function(){
				updatetrigger=true;
			},0)
       } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function _80211tosset() {
    var lists=[];

    $('.80211toslist tbody tr').each( function (index,value) {
        lists.push($(this).data('data'));
    });

    var postData =
    {
        method: '80211tosset',
        sessionid: sessionID,
        lists:lists
    };
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
			$('body').removeData('check');
            myalert('ok');
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getiptvset() {

    var postData =
    {
        method: 'getiptvset',
        sessionid: sessionID,
    };

    // $.post(serverURL, postData, function(data, textStatus, jqXHR) {
        var data =
        {
            stat: 'success',
            feed:
            {
                msg: 'Success',
                data: {
                    lists: [{
                    sourceiptv:'192.168.1.1',
                    remarkdesc:'0xa'
                    },
                    {
                    sourceiptv:'192.168.2.2',
                    remarkdesc:'0xc'
                    }]
                }
            }
        };
       if (data.stat == 'success') {
			updatetrigger=false;

            $('.iptvlist tbody').empty();
            $.each(data.feed.data.lists,function (index,lists) {
                $('.iptvlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                    '<td>'+lists.sourceiptv+'</td>'+'<td>'+$('#iptvpageremarkdesc').find('option[value="'+lists.remarkdesc+'"]').text()+'</td></tr>').children('tr:last-child').data('data',lists).end().find('a').popover();
            });

			setTimeout(function(){
				updatetrigger=true;
			},0)
       } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function iptvset() {
    var lists=[];

    $('.iptvlist tbody tr').each( function (index,value) {
        lists.push($(this).data('data'));
    });

    var postData =
    {
        method: 'iptvset',
        sessionid: sessionID,
        lists:lists
    };
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
			$('body').removeData('check');
            myalert('ok');
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getremarkwwmset() {

    var postData =
    {
        method: 'getremarkwwmset',
        sessionid: sessionID,
    };

    // $.post(serverURL, postData, function(data, textStatus, jqXHR) {
        var data =
        {
            stat: 'success',
            feed:
            {
                msg: 'Success',
                data: {
                    lists: [{
                    ssid:'wolfy-5G',
                    remarkwwm:'0x18'
                    },
                    {
                    ssid:'wolfy-2.4G',
                    remarkwwm:'0x8'
                    }]
                }
            }
        };
       if (data.stat == 'success') {
			updatetrigger=false;

            $('.remarkwmmlist tbody').empty();
            $.each(data.feed.data.lists,function (index,lists) {
                $('.remarkwmmlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                    '<td>'+lists.ssid+'</td>'+'<td>'+$('#remarkingwmmlist').find('option[value="'+lists.remarkwwm+'"]').text()+'</td></tr>').children('tr:last-child').data('data',lists).end().find('a').popover();
            });

			setTimeout(function(){
				updatetrigger=true;
			},0)
       } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function remarkwwmset() {
    var lists=[];

    $('.remarkwmmlist tbody tr').each( function (index,value) {
        lists.push($(this).data('data'));
    });

    var postData =
    {
        method: 'remarkwwmset',
        sessionid: sessionID,
        lists:lists
    };
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
			$('body').removeData('check');
            myalert('ok');
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getprioritizationset() {

    var postData =
    {
        method: 'getprioritizationset',
        sessionid: sessionID,
    };

    // $.post(serverURL, postData, function(data, textStatus, jqXHR) {
        var data =
        {
            stat: 'success',
            feed:
            {
                msg: 'Success',
                data: {
                    lists: [{
                    type:0,
                    target:'00:05:1B:C0:38:1B',
                    mark:1
                    },
                    {
                    type:1,
                    target:'1',
                    mark:1
                    }]
                }
            }
        };
       if (data.stat == 'success') {
			updatetrigger=false;

            $('.prioritizationlist tbody').empty();
            $.each(data.feed.data.lists,function (index,lists) {
                // if(lists.type==0)
                //     $('.prioritizationlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                //         '<td>'+$('#prioritizationtype>label[value="0"]').text().trim()+'</td>'+'<td>'+lists.target+'</td>'+'<td>'+lists.mark+'</td>'+'</tr>').children('tr:last-child').data('data',lists).end().find('a').popover();
                // else
                //     $('.prioritizationlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                //         '<td>'+$('#prioritizationtype>label[value="1"]').text().trim()+'</td>'+'<td>'+$('#prioritizationapptype').find('option[value="'+lists.target+'"]').text()+'</td>'+'<td>'+lists.mark+'</td>'+'</tr>').children('tr:last-child').data('data',lists).end().find('a').popover();
                    $('.prioritizationlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                        '<td>Device</td>'+'<td>'+lists.target+'</td>'+'<td>'+lists.mark+'</td>'+'</tr>').children('tr:last-child').data('data',lists).end().find('a').popover();
            });

			setTimeout(function(){
				updatetrigger=true;
			},0)
       } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function prioritizationset() {
    var lists=[];

    $('.prioritizationlist tbody tr').each( function (index,value) {
        lists.push($(this).data('data'));
    });

    var postData =
    {
        method: 'prioritizationset',
        sessionid: sessionID,
        lists:lists
    };
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
			$('body').removeData('check');
            myalert('ok');
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getwakeonlanset() {

    var postData =
    {
        method: 'getwakeonlanset',
        sessionid: sessionID,
    };

    // $.post(serverURL, postData, function(data, textStatus, jqXHR) {
        var data =
        {
            stat: 'success',
            feed:
            {
                msg: 'Success',
                data: {
                    lists: [{
                    devicename:'wolfy-air',
                    mac:'00:05:1B:C0:38:1B',
                    },
                    {
                    devicename:'askey-air',
                    mac:'00:05:1B:C0:38:11',
                    }]
                }
            }
        };
       if (data.stat == 'success') {
			updatetrigger=false;

            $('.wakeupmaclist tbody').empty();
            $.each(data.feed.data.lists,function (index,lists) {
                $('.wakeupmaclist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                    '<td>'+lists.devicename+'</td>'+'<td>'+lists.mac+'</td>'+'</tr>').children('tr:last-child').data('data',lists).end().find('a').popover();
            });

			setTimeout(function(){
				updatetrigger=true;
			},0)
       } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function wakeonlanset() {
    var lists=[];

    $('.wakeupmaclist tbody tr').each( function (index,value) {
        lists.push($(this).data('data'));
    });

    var postData =
    {
        method: 'wakeonlanset',
        sessionid: sessionID,
        lists:lists
    };
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
			$('body').removeData('check');
            myalert('ok');
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function wakeonlannow() {
    var postData =
    {
        method: 'wakeonlannow',
        sessionid: sessionID,
        mac:$('#wakeonlanconfigpagemacnow').val()
    };
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
			$('body').removeData('check');
            myalert('ok');
            $('#wakeonlanconfigpagemacnow').val('__:__:__:__:__:__');
        } else {
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

$(document).ready(function() {

    $(document).on('click','#pptpvpnserverconfig label',function (e) {
    	$('.pptpvpnadavnce').attr('style','display:none;');
		if($(this).attr('value')=='1') {
    		$('.pptpvpnadavnce').attr('style','display:block;');
		}
	});

    $(document).on('click','#pptpvpnserverdnsauto label',function (e) {
    	$('.pptpvpnadavncednsauto').attr('style','display:none;');
		if($(this).attr('value')=='1') {
    		$('.pptpvpnadavncednsauto').attr('style','display:block;');
		}
	});

    $(document).on('click','#pptpvpnserverwinsauto label',function (e) {
    	$('.pptpvpnadavncewinsauto').attr('style','display:none;');
		if($(this).attr('value')=='1') {
    		$('.pptpvpnadavncewinsauto').attr('style','display:block;');
		}
	});

    $(document).on('blur','#pptpvpnserveradavncestartip',function (e) {
    	var $ipstr = $(this).val().replace('_','');
    	var $iparray = $ipstr.split('.');
    	$iparray[0] = parseInt($iparray[0]);
    	$iparray[1] = parseInt($iparray[1]);
    	$iparray[2] = parseInt($iparray[2]);
    	$iparray[3] = parseInt($iparray[3]);

    	if($iparray[3]>253) {
    		$(this).val($iparray[0]+'.'+$iparray[1]+'.'+$iparray[2]+'.253');
    		$('#pptpvpnserveradavnceendip').val($iparray[0]+'.'+$iparray[1]+'.'+$iparray[2]+'.253');
    		return;
    	}
    	$iparray[3]=$iparray[3]+11;
    	if($iparray[3]>253) {
    		$('#pptpvpnserveradavnceendip').val($iparray[0]+'.'+$iparray[1]+'.'+$iparray[2]+'.253');
    		return;
    	}
    	$('#pptpvpnserveradavnceendip').val($iparray[0]+'.'+$iparray[1]+'.'+$iparray[2]+'.'+$iparray[3]);
	});

    $(document).on('blur','#pptpvpnserveradavnceendip',function (e) {
    	var $ipstr = $(this).val().replace('_','');
    	var $iparray = $ipstr.split('.');
    	$iparray[0] = parseInt($iparray[0]);
    	$iparray[1] = parseInt($iparray[1]);
    	$iparray[2] = parseInt($iparray[2]);
    	$iparray[3] = parseInt($iparray[3]);

    	if($iparray[3]<2) {
    		$(this).val($iparray[0]+'.'+$iparray[1]+'.'+$iparray[2]+'.2');
    		$('#pptpvpnserveradavncestartip').val($iparray[0]+'.'+$iparray[1]+'.'+$iparray[2]+'.2');
    		return;
    	}
    	$iparray[3]=$iparray[3]-11;
    	if($iparray[3]<2) {
    		$('#pptpvpnserveradavncestartip').val($iparray[0]+'.'+$iparray[1]+'.'+$iparray[2]+'.2');
    		return;
    	}
    	$('#pptpvpnserveradavncestartip').val($iparray[0]+'.'+$iparray[1]+'.'+$iparray[2]+'.'+$iparray[3]);
	});

    $(document).on('click','#addpptpvpnserver',function (e) {
    	$('.pptpvpnserveradd').attr('style','display:block;');
    	$('.pptpvpnserverlist').attr('style','display:none;');
    	$(this).attr('style','display:none;');
        $('#pptpvpnserverusername').val('');
        $('#pptpvpnserverpassword').val('');
    });
    $(document).on('click','#addpptpvpnserverok',function (e) {
        var returnbool=false;
        $.each($('.pptpvpnserverlist tbody').data('data').feed.data.users,function (index,users) {
            if($('#pptpvpnserverusername').val()=='') {
                myalert('Please input username');
                returnbool=true;
                return false;
            }
            if($('#pptpvpnserverpassword').val()=='') {
                myalert('Please input password');
                returnbool=true;
                return false;
            }
            if(users.username==$('#pptpvpnserverusername').val()) {
                myalert('user had existed, try another name');
                returnbool=true;
                return false;
            }
        });
        if(returnbool) return;
        $('.pptpvpnserveradd').attr('style','display:none;');
        $('.pptpvpnserverlist').attr('style','display:block;');
        $('#addpptpvpnserver').attr('style','display:block;');
        var user = {
                 username: $('#pptpvpnserverusername').val(),
                 password: $('#pptpvpnserverpassword').val(),
                 currentstatus: ''
            };
        $('.pptpvpnserverlist tbody').data('data').feed.data.users.push(user);
         $('.pptpvpnserverlist tbody').append('<tr username="'+$('#pptpvpnserverusername').val()+'"><td><button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
            '<td></td>' +'<td>'+$('#pptpvpnserverusername').val()+'</td>'+
            '<td><div class="dropdown"><a class="btn btn-default" role="button" data-toggle="popover" title="Password" data-placement="right" data-trigger="hover" data-content="'+$('#pptpvpnserverpassword').val()+'"><i class="icon-eye-open glyphicon glyphicon-eye-open"></i></a></div></td></tr>').find('a').popover();
    });
    $(document).on('click','.pptpvpnserverlist tbody .trash',function (e) {
        var thetr = $(this).parents('tr');
        $.each($('.pptpvpnserverlist tbody').data('data').feed.data.users,function (index,users) {
            if(users.username==thetr.attr('username')) {
                $('.pptpvpnserverlist tbody').data('data').feed.data.users.splice(index);
                thetr.remove();
            }
        });
    });
    $(document).on('click','#addpptpvpnservercancel',function (e) {
    	$('.pptpvpnserveradd').attr('style','display:none;');
    	$('.pptpvpnserverlist').attr('style','display:block;');
    	$('#addpptpvpnserver').attr('style','display:block;');
    });

    $(document).on('click','#pptpvpnserverpage .apply',function (e) {
        pptpserverset();
    });


	$("a[href='#ipv6configpage']").on('shown.bs.tab', function(e) {
        getipv6set();
			updatetrigger=false;

        $('#ipv6configtype').trigger('change');

			setTimeout(function(){
				updatetrigger=true;
			},0)
	});





   $(document).on('change','#ipv6configtype',function (e) {
       	$('.ipv6native,.ipv6static,.tunnel6to4,.tunnel6in4,.tunnel6rd').attr('style','display:none;');
        if($('#ipv6configtype').data('data')!=$(this).val())
            getipv6default($(this).val());
        else
            getipv6set();
   		switch($(this).val()) {
   			case '1':
   				$('.ipv6native').attr('style','display:block;');
   				if($('#ipv6simulatneous>label.active').attr('value')=='0') {
   					$('#ipv6simulatneoustype').parent('div').parent('div').attr('style','display:none;');
   				} else {
   					$('#ipv6simulatneoustype').parent('div').parent('div').attr('style','display:block;');
	   				if($('#ipv6simulatneoustype').val()=='0'||$('#ipv6simulatneoustype').val()=='1') {
	   					$('.assigntypedhcpv6').attr('style','display:none;');
	   				} else {
	   					$('.assigntypedhcpv6').attr('style','display:block;');
	   				}
   				}
				if($('#ipv6autodns>label.active').attr('value')=='1') {
					$('.ipv6dns').attr('style','display:none;');
				} else {
					$('.ipv6dns').attr('style','display:block;');
				}
                $('#ipv6lanaddress').parent().html('<span class="label-title">LAN Address</span><span id="ipv6lanaddress" class="display-all"></span>');
                $('#ipv6lanprefix').parent().html('<span class="label-title">LAN Prefix</span><span id="ipv6lanprefix" class="display-all"></span>');
                $('#ipv6lanprefixlength').parent().html('<span class="label-title">LAN Prefix Length</span><span id="ipv6lanprefixlength" class="display-all"></span>');
   				break;
   			case '2':
   				$('.tunnel6to4').attr('style','display:block;');
				$('.ipv6dns').attr('style','display:block;');
                $('#ipv6lanaddress').parent().html('<span class="label-title">LAN Address</span><span id="ipv6lanaddress" class="display-all"></span>');
   				$('#ipv6lanaddress').ipAddress({v:6});
                $('#ipv6lanprefix').parent().html('<span class="label-title">LAN Prefix</span><span id="ipv6lanprefix" class="display-all">2002:c0a8:42d2::</span>');
                $('#ipv6lanprefixlength').parent().html('<span class="label-title">LAN Prefix Length</span><span id="ipv6lanprefixlength" class="display-all">48</span>');
                break;
   			case '3':
   				$('.tunnel6in4').attr('style','display:block;');
				$('.ipv6dns').attr('style','display:block;');
                $('#ipv6lanaddress').parent().html('<span class="label-title">LAN Address</span><span id="ipv6lanaddress" class="display-all"></span>');
                $('#ipv6lanprefix').parent().html('<span class="label-title">LAN Prefix</span><input id="ipv6lanprefix" type="text" class="input-all" placeholder="String" value="">');
                $('#ipv6lanprefixlength').parent().html('<span class="label-title">LAN Prefix Length</span><input id="ipv6lanprefixlength" type="text" class="input-all" placeholder="Integer" value="">');
   				break;
   			case '4':
   				$('.tunnel6rd').attr('style','display:block;');
				$('.ipv6dns').attr('style','display:block;');
                $('#ipv6lanaddress').parent().html('<span class="label-title">LAN Address</span><span id="ipv6lanaddress" class="display-all"></span>');
                $('#ipv6lanprefix').parent().html('<span class="label-title">LAN Prefix</span><span id="ipv6lanprefix" class="display-all"></span>');
                $('#ipv6lanprefixlength').parent().html('<span class="label-title">LAN Prefix Length</span><span id="ipv6lanprefixlength" class="display-all"></span>');
   				break;
   			case '5':
   				$('.ipv6static').attr('style','display:block;');
				$('.ipv6dns').attr('style','display:block;');
                $('#ipv6lanaddress').parent().html('<span class="label-title">LAN Address</span><input id="ipv6lanaddress" type="text" class="input-all ipv6input" placeholder="Integer" value="">');
                $('#ipv6lanaddress').ipAddress({v:6});
                $('#ipv6lanprefix').parent().html('<span class="label-title">LAN Prefix</span><span id="ipv6lanprefix" class="display-all"></span>');
                $('#ipv6lanprefixlength').parent().html('<span class="label-title">LAN Prefix Length</span><input id="ipv6lanprefixlength" type="text" class="input-all" placeholder="Integer" value="">');
  				break;
   			default:
   				break;
   		}
   });
   $(document).on('click','#ipv6simulatneous label',function (e) {
		if($(this).attr('value')=='0') {
			$('#ipv6simulatneoustype').parent('div').parent('div').attr('style','display:none;');
		} else {
			$('#ipv6simulatneoustype').parent('div').parent('div').attr('style','display:block;');
		}
   });
   $(document).on('change','#ipv6simulatneoustype',function (e) {
		if($('#ipv6simulatneoustype').val()=='0'||$('#ipv6simulatneoustype').val()=='1') {
			$('.assigntypedhcpv6').attr('style','display:none;');
		} else {
			$('.assigntypedhcpv6').attr('style','display:block;');
		}
   });
   $(document).on('click','#ipv6autodns label',function (e) {
		if($(this).attr('value')=='1') {
			$('.ipv6dns').attr('style','display:none;');
		} else {
			$('.ipv6dns').attr('style','display:block;');
		}
   });
    $(document).on('click','#ipv6configpage .apply',function (e) {
        ipv6set();
    });




	$("a[href='#vpnconfigpage']").on('shown.bs.tab', function(e) {
		$('#pptpvpnserverindex').parent('li').siblings('li').removeClass('active');
		$('#pptpvpnserverindex').parent('li').addClass('active');
    	$('#pptpvpnserverpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#pptpvpnserverpage').attr('style','display:block;');
    	getpptpserverset();
	});

	$("a[href='#firewallconfigpage']").on('shown.bs.tab', function(e) {
		$('#commonfilterindex').parent('li').siblings('li').removeClass('active');
		$('#commonfilterindex').parent('li').addClass('active');
    	$('#commonfilterpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#commonfilterpage').attr('style','display:block;');
        getfirewallcommonset();
	});

    $("a[href='#qosconfigpage']").on('shown.bs.tab', function(e) {
        $('#smartqosindex').parent('li').siblings('li').removeClass('active');
        $('#smartqosindex').parent('li').addClass('active');
        $('#smartqospage').siblings('div.genconfig').attr('style','display:none;');
        $('#smartqospage').attr('style','display:block;');
        getsmartqosset();
    });

	$("a[href='#multicast']").on('shown.bs.tab', function(e) {
        getmulticastset();
	});
    $(document).on('click','#multicast .apply',function (e) {
        multicastset();
    });

    $("a[href='#wakeonlanconfigpage']").on('shown.bs.tab', function(e) {
        getwakeonlanset();
    });




    $(document).on('click','#commonfilterindex',function (e) {
        try {
            if ($('body').data('check').change == true) return;
        } catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#commonfilterpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#commonfilterpage').attr('style','display:block;');
       	$('#firewallnavbar.navbar-toggle:visible').click();
        getfirewallcommonset();
    });
    $(document).on('click','#commonfilterpage .apply',function (e) {
        firewallcommonset();
    });

    $(document).on('click','#urlfilterindex',function (e) {
        try {
            if ($('body').data('check').change == true) return;
        } catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#urlfilterpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#urlfilterpage').attr('style','display:block;');
       	$('#firewallnavbar.navbar-toggle:visible').click();
        getfirewallurlset();
    });
    $(document).on('click','#addurlfilter',function (e) {
    	$('.urlfilteradd').attr('style','display:block;');
    	$('.urlfilterlist').attr('style','display:none;');
    	$(this).attr('style','display:none;');
        $('#urlfilterurl').val('');
    });
    $(document).on('click','#addurlfilterok',function (e) {
        var found=false;
        if($('#urlfilterurl').val()=='') {
            myalert('Please input the url');
            return;
        }
        $('.urlfilterlist td:eq(1)').each(function (index,tds){
            if($(this).text()==$('#urlfilterurl').val()) {
                found=true;
                return true;
            }
        });
        if(!found) {
            $('.urlfilteradd').attr('style','display:none;');
            $('.urlfilterlist').attr('style','display:block;');
            $('#addurlfilter').attr('style','display:block;');
            var url = {url:$('#urlfilterurl').val()}
            $('.urlfilterlist tbody').data('data').feed.data.urls.push(url);
            $('.urlfilterlist tbody').append('<tr url="'+url.url+'"><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                '<td>'+url.url+'</td></tr>').find('a').popover();
        } else {
            myalert('filter is existed!');
        }
    });
    $(document).on('click','.urlfilterlist tbody .trash',function (e) {
        var thetr = $(this).parents('tr');
        $.each($('.urlfilterlist tbody').data('data').feed.data.urls,function (index,urls) {
            if(urls.url==thetr.attr('url')) {
                $('.urlfilterlist tbody').data('data').feed.data.urls.splice(index);
                thetr.remove();
            }
        });
    });
    $(document).on('click','#addurlfiltercancel',function (e) {
    	$('.urlfilteradd').attr('style','display:none;');
    	$('.urlfilterlist').attr('style','display:block;');
    	$('#addurlfilter').attr('style','display:block;');
    });

    $(document).on('click','#urlfilterpage .apply',function (e) {
        firewallurlset();
    });

    $(document).on('click','#keywordfilterindex',function (e) {
        try {
            if ($('body').data('check').change == true) return;
        } catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#keywordfilterpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#keywordfilterpage').attr('style','display:block;');
       	$('#firewallnavbar.navbar-toggle:visible').click();
        getfirewallkeywordset();
   });
    $(document).on('click','#addkeywordfilter',function (e) {
    	$('.keywordfilteradd').attr('style','display:block;');
    	$('.keywordfilterlist').attr('style','display:none;');
    	$(this).attr('style','display:none;');
        $('#keywordfilterkeyword').val('');
    });
    $(document).on('click','#addkeywordfilterok',function (e) {
        var found=false;
        if($('#keywordfilterkeyword').val()=='') {
            myalert('Please input the keyword');
            return;
        }
        $('.keywordfilterlist td:eq(1)').each(function (index,tds){
            if($(this).text()==$('#keywordfilterkeyword').val()) {
                found=true;
                return true;
            }
        });
        if(!found) {
            $('.keywordfilteradd').attr('style','display:none;');
            $('.keywordfilterlist').attr('style','display:block;');
            $('#addkeywordfilter').attr('style','display:block;');
            var keyword = {keyword:$('#keywordfilterkeyword').val()}
            $('.keywordfilterlist tbody').data('data').feed.data.keywords.push(keyword);
            $('.keywordfilterlist tbody').append('<tr keyword="'+keyword.keyword+'"><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                '<td>'+keyword.keyword+'</td></tr>').find('a').popover();
        } else {
            myalert('filter is existed!');
        }
    });
    $(document).on('click','.keywordfilterlist tbody .trash',function (e) {
        var thetr = $(this).parents('tr');
        $.each($('.keywordfilterlist tbody').data('data').feed.data.keywords,function (index,keywords) {
            if(keywords.keyword==thetr.attr('keyword')) {
                $('.keywordfilterlist tbody').data('data').feed.data.keywords.splice(index);
                thetr.remove();
            }
        });
    });
    $(document).on('click','#addkeywordfiltercancel',function (e) {
    	$('.keywordfilteradd').attr('style','display:none;');
    	$('.keywordfilterlist').attr('style','display:block;');
    	$('#addkeywordfilter').attr('style','display:block;');
    });
    $(document).on('click','#keywordfilterpage .apply',function (e) {
        firewallkeywordset();
    });



    $(document).on('click','#netservicefilterindex',function (e) {
        try {
            if ($('body').data('check').change == true) return;
        } catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#netservicefilterpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#netservicefilterpage').attr('style','display:block;');
       	$('#firewallnavbar.navbar-toggle:visible').click();
        getfirewallnetservicewellknownservice();
        getfirewallnetserviceset();
    });
    $(document).on('change','#netservicefilterwellknownservice',function (e) {
        var theindex = $(this).val();
        $.each($('#netservicefilterwellknownservice').data('data'),function (index,services) {
            if(services.servicename == theindex) {
                $('#netservicefilterdestportrange').val(services.portrange);
                $('#netservicefilterprotocol').val(services.protocol);
                return true;
            }
        });
    });
    $(document).on('click','#addnetservicefilter',function (e) {
    	$('.netservicefilteradd').attr('style','display:block;');
    	$('.netservicefilterlist').attr('style','display:none;');
    	$(this).attr('style','display:none;');
        $('#netservicefilterwellknownservice').val('');
        $('#netservicefiltersrcip').val('').trigger('blur');
        $('#netservicefiltersrcportrange').val('');
        $('#netservicefilterdestip').val('').trigger('blur');
        $('#netservicefilterdestportrange').val('');
        $('#netservicefilterprotocol').val('0');
    });
    $(document).on('click','#addnetservicefilterok',function (e) {
        if($('#netservicefiltersrcip').val()=='___.___.___.___' || $('#netservicefiltersrcip').val()=='') {
            myalert('Please input source ip');
            return;
        }
        if($('#netservicefiltersrcportrange').val()=='') {
            myalert('Please input source portrange');
            return;
        }
        if($('#netservicefilterdestip').val()=='___.___.___.___' || $('#netservicefilterdestip').val()=='') {
            myalert('Please input destination ip');
            return;
        }
        if($('#netservicefilterdestportrange').val()=='') {
            myalert('Please input destination portrange');
            return;
        }
        srcportrange = $('#netservicefiltersrcportrange').val().split(':');
        if(srcportrange.length>2) {
            myalert('Source port range format should be like 121:123 or 121');
            return;
        }
        for(var i=0;i<srcportrange.length;i++) {
            if(!(/^\d+$/.test(srcportrange[i]))) {
                myalert('Source Port range should be integer');
                return;
            }
        }
        if(srcportrange.length==2) {
            if(Number(srcportrange[0]>=Number(srcportrange[1]))) {
                myalert('Source port range from should less than to');
                return;
            }
        }
        destportrange = $('#netservicefilterdestportrange').val().split(':');
        if(destportrange.length>2) {
            myalert('Destionation port range format should be like 121:123 or 121');
            return;
        }
        for(var i=0;i<destportrange.length;i++) {
            if(!(/^\d+$/.test(destportrange[i]))) {
                myalert('Destionation port range should be integer');
                return;
            }
        }
        if(destportrange.length==2) {
            if(Number(destportrange[0]>=Number(destportrange[1]))) {
                myalert('Source port range from should less than to');
                return;
            }
        }
        var addokbool = true;
        $('.netservicefilterlist tbody tr').each( function (index,value) {
            var therule = $(this).data('data');
            if(therule.protocol == Number($('#netservicefilterprotocol').val())) {
                if(therule.srcip == $('#netservicefiltersrcip').val()) {
                    checksrcportranges = therule.srcportrange.split(':');
                    if(checksrcportranges.length == 2 && srcportrange.length == 2) {
                        if((Number(srcportrange[0]) < Number(checksrcportranges[0])) && (Number(srcportrange[1]) > Number(checksrcportranges[0]))) {
                            myalert('Source portrange are overlap');
                            addokbool = false;
                            return true;
                        }
                        if((Number(srcportrange[0]) < Number(checksrcportranges[1])) && (Number(srcportrange[1]) > Number(checksrcportranges[1]))) {
                            myalert('Source portrange are overlap');
                            addokbool = false;
                            return true;
                        }
                        if((Number(srcportrange[0]) == Number(checksrcportranges[0])) || (Number(srcportrange[1]) == Number(checksrcportranges[0]))) {
                            myalert('Source portrange are overlap');
                            addokbool = false;
                            return true;
                        }
                        if((Number(srcportrange[0]) == Number(checksrcportranges[1])) || (Number(srcportrange[1]) == Number(checksrcportranges[1]))) {
                            myalert('Source portrange are overlap');
                            addokbool = false;
                            return true;
                        }
                        if((Number(srcportrange[0]) > Number(checksrcportranges[1])) && (Number(srcportrange[1]) < Number(checksrcportranges[1]))) {
                            myalert('Source portrange are overlap');
                            addokbool = false;
                            return true;
                        }
                        if((Number(srcportrange[0]) < Number(checksrcportranges[1])) && (Number(srcportrange[1]) > Number(checksrcportranges[1]))) {
                            myalert('Source portrange are overlap');
                            addokbool = false;
                            return true;
                        }
                    }
                    if(checksrcportranges.length == 1 && srcportrange.length == 2) {
                        if((Number(checksrcportranges[0])<Number(srcportrange[0])) && (Number(checksrcportranges[1])>Number(srcportrange[0]))) {
                            myalert('Source portrange are overlap');
                            addokbool = false;
                            return true;
                        }
                        if((Number(checksrcportranges[0])==Number(srcportrange[0])) || (Number(checksrcportranges[1])==Number(srcportrange[0]))) {
                            myalert('Source portrange are overlap');
                            addokbool = false;
                            return true;
                        }
                    }
                    if(checksrcportranges.length == 1 && srcportrange.length == 1) {
                        if(Number(checksrcportranges[0])==Number(srcportrange[0])) {
                            myalert('Source portrange are overlap');
                            addokbool = false;
                            return true;
                        }
                    }
                }
                if(therule.destip == $('#netservicefilterdestip').val()) {
                    checkdestportranges = therule.destportrange.split(':');
                    if(checkdestportranges.length == 2 && destportrange.length == 2) {
                        if((Number(destportrange[0]) < Number(checkdestportranges[0])) && (Number(destportrange[1]) > Number(checkdestportranges[0]))) {
                            myalert('Destion portrange are overlap');
                            addokbool = false;
                            return true;
                        }
                        if((Number(destportrange[0]) < Number(checkdestportranges[1])) && (Number(destportrange[1]) > Number(checkdestportranges[1]))) {
                            myalert('Destion portrange are overlap');
                            addokbool = false;
                            return true;
                        }
                        if((Number(destportrange[0]) == Number(checkdestportranges[0])) || (Number(destportrange[1]) == Number(checkdestportranges[0]))) {
                            myalert('Destion portrange are overlap');
                            addokbool = false;
                            return true;
                        }
                        if((Number(destportrange[0]) == Number(checkdestportranges[1])) || (Number(destportrange[1]) == Number(checkdestportranges[1]))) {
                            myalert('Destion portrange are overlap');
                            addokbool = false;
                            return true;
                        }
                        if((Number(destportrange[0]) > Number(checkdestportranges[1])) && (Number(destportrange[1]) < Number(checkdestportranges[1]))) {
                            myalert('Destion portrange are overlap');
                            addokbool = false;
                            return true;
                        }
                        if((Number(destportrange[0]) < Number(checkdestportranges[1])) && (Number(destportrange[1]) > Number(checkdestportranges[1]))) {
                            myalert('Destion portrange are overlap');
                            addokbool = false;
                            return true;
                        }
                    }
                    if(checkdestportranges.length == 1 && destportrange.length == 2) {
                        if((Number(checkdestportranges[0])<Number(destportrange[0])) && (Number(checkdestportranges[1])>Number(destportrange[0]))) {
                            myalert('Destion portrange are overlap');
                            addokbool = false;
                            return true;
                        }
                        if((Number(checkdestportranges[0])==Number(destportrange[0])) || (Number(checkdestportranges[1])==Number(destportrange[0]))) {
                            myalert('Destion portrange are overlap');
                            addokbool = false;
                            return true;
                        }
                    }
                    if(checkdestportranges.length == 1 && destportrange.length == 1) {
                        if(Number(checkdestportranges[0])==Number(destportrange[0])) {
                            myalert('Destion portrange are overlap');
                            addokbool = false;
                            return true;
                        }
                    }
                }
            }
        });
        if(!addokbool) return;
        var rule = {
            srcip:$('#netservicefiltersrcip').val(),
            srcportrange:$('#netservicefiltersrcportrange').val(),
            destip:$('#netservicefilterdestip').val(),
            destportrange:$('#netservicefilterdestportrange').val(),
            protocol:Number($('#netservicefilterprotocol').val())
        }
        $('.netservicefilteradd').attr('style','display:none;');
        $('.netservicefilterlist').attr('style','display:block;');
        $('#addnetservicefilter').attr('style','display:block;');
        $('.netservicefilterlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
            '<td>'+rule.srcip+'</td>'+'<td>'+rule.srcportrange+'</td>'+'<td>'+rule.destip+'</td>'+'<td>'+rule.destportrange+'</td>'+'<td>'+$('#netservicefilterprotocol').find('option[value="'+rule.protocol+'"]').text()+'</td></tr>').children('tr:last-child').data('data',rule).end().find('a').popover();
    });
    $(document).on('click','.netservicefilterlist tbody .trash',function (e) {
        $(this).parents('tr').remove();
    });
    $(document).on('click','#addnetservicefiltercancel',function (e) {
    	$('.netservicefilteradd').attr('style','display:none;');
    	$('.netservicefilterlist').attr('style','display:block;');
    	$('#addnetservicefilter').attr('style','display:block;');
    });
    $(document).on('click','#netservicefilterpage .apply',function (e) {
        firewallnetserviceset();
    });


    $(document).on('click','#ipv6filterindex',function (e) {
        try {
            if ($('body').data('check').change == true) return;
        } catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#ipv6filterpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#ipv6filterpage').attr('style','display:block;');
       	$('#firewallnavbar.navbar-toggle:visible').click();
        getfirewallipv6wellknownservice();
        getfirewallipv6filterset();
    });
    $(document).on('change','#ipv6filterwellknownservice',function (e) {
        var theindex = $(this).val();
        $.each($('#ipv6filterwellknownservice').data('data'),function (index,services) {
            if(services.servicename == theindex) {
                $('#ipv6filterservicename').val(services.servicealias);
                $('#ipv6filterportrange').val(services.portrange);
                $('#ipv6filterprotocol').val(services.protocol);
                return true;
            }
        });
    });
    $(document).on('click','#addipv6filter',function (e) {
    	$('.ipv6filteradd').attr('style','display:block;');
    	$('.ipv6filterlist').attr('style','display:none;');
    	$(this).attr('style','display:none;');
        $('#ipv6filterwellknownservice').val('');
        $('#ipv6filterservicename').val('');
        $('#ipv6filterremoteipcidr').val('').trigger('blur');
        $('#ipv6filterlocalip').val('').trigger('blur');
        $('#ipv6filterportrange').val('');
        $('#ipv6filterprotocol').val('0');
    });
    $(document).on('click','#addipv6filterok',function (e) {
        if($('#ipv6filterservicename').val()=='') {
            myalert('Please input servicename');
            return;
        }
        if($('#ipv6filterremoteipcidr').val()=='____:____:____:____:____:____:____:____' || $('#ipv6filterremoteipcidr').val()=='') {
            myalert('Please input remote ip or cidr');
            return;
        }
        if($('#ipv6filterlocalip').val()=='____:____:____:____:____:____:____:____' || $('#netservicefilterdestip').val()=='') {
            myalert('Please input local ip');
            return;
        }
        portrange = $('#ipv6filterportrange').val().split(':');
        if(portrange.length>2) {
            myalert('Port range format should be like 121:123 or 121');
            return;
        }
        for(var i=0;i<portrange.length;i++) {
            if(!(/^\d+$/.test(portrange[i]))) {
                myalert('Port range should be integer');
                return;
            }
        }
        if(portrange.length==2) {
            if(Number(portrange[0]>=Number(portrange[1]))) {
                myalert('Port range from should less than to');
                return;
            }
        }
        var addokbool = true;
        $('.ipv6filterlist tbody tr').each( function (index,value) {
            var therule = $(this).data('data');
            if(therule.protocol == Number($('#ipv6filterprotocol').val())) {
                if(therule.remoteipcidr == $('#ipv6filterremoteipcidr').val() || therule.localip == $('#ipv6filterlocalip').val()) {
                    checkportranges = therule.portrange.split(':');
                    if(checkportranges.length == 2 && portrange.length == 2) {
                        if((Number(portrange[0]) < Number(checkportranges[0])) && (Number(portrange[1]) > Number(checkportranges[0]))) {
                            myalert('Portrange are overlap');
                            addokbool = false;
                            return;
                        }
                        if((Number(portrange[0]) < Number(checkportranges[1])) && (Number(portrange[1]) > Number(checkportranges[1]))) {
                            myalert('Portrange are overlap');
                            addokbool = false;
                            return;
                        }
                        if((Number(portrange[0]) == Number(checkportranges[0])) || (Number(portrange[1]) == Number(checkportranges[0]))) {
                            myalert('Portrange are overlap');
                            addokbool = false;
                            return;
                        }
                        if((Number(portrange[0]) == Number(checkportranges[1])) || (Number(portrange[1]) == Number(checkportranges[1]))) {
                            myalert('Portrange are overlap');
                            addokbool = false;
                            return;
                        }
                        if((Number(portrange[0]) > Number(checkportranges[1])) && (Number(portrange[1]) < Number(checkportranges[1]))) {
                            myalert('Portrange are overlap');
                            addokbool = false;
                            return;
                        }
                        if((Number(portrange[0]) < Number(checkportranges[1])) && (Number(portrange[1]) > Number(checkportranges[1]))) {
                            myalert('Portrange are overlap');
                            addokbool = false;
                            return;
                        }
                    }
                    if(checkportranges.length == 1 && portrange.length == 2) {
                        if((Number(checkportranges[0])<Number(portrange[0])) && (Number(checkportranges[1])>Number(portrange[0]))) {
                            myalert('Portrange are overlap');
                            addokbool = false;
                            return;
                        }
                        if((Number(checkportranges[0])==Number(portrange[0])) || (Number(checkportranges[1])==Number(portrange[0]))) {
                            myalert('Portrange are overlap');
                            addokbool = false;
                            return;
                        }
                    }
                    if(checkportranges.length == 1 && portrange.length == 1) {
                        if(Number(checkportranges[0])==Number(portrange[0])) {
                            myalert('Portrange are overlap');
                            addokbool = false;
                            return;
                        }
                    }
                }
            }
        });
        if(!addokbool) return;
        var rule = {
            servicename:$('#ipv6filterservicename').val(),
            remoteipcidr:$('#ipv6filterremoteipcidr').val(),
            localip:$('#ipv6filterlocalip').val(),
            portrange:$('#ipv6filterportrange').val(),
            protocol:Number($('#ipv6filterprotocol').val())
        }
        $('.ipv6filteradd').attr('style','display:none;');
        $('.ipv6filterlist').attr('style','display:block;');
        $('#addipv6filter').attr('style','display:block;');
        $('.ipv6filterlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
            '<td>'+rule.servicename+'</td>'+'<td>'+rule.remoteipcidr+'</td>'+'<td>'+rule.localip+'</td>'+'<td>'+rule.portrange+'</td>'+'<td>'+$('#ipv6filterprotocol').find('option[value="'+rule.protocol+'"]').text()+'</td></tr>').children('tr:last-child').data('data',rule).end().find('a').popover();
    });
    $(document).on('click','.ipv6filterlist tbody .trash',function (e) {
        $(this).parents('tr').remove();
    });
    $(document).on('click','#addipv6filtercancel',function (e) {
    	$('.ipv6filteradd').attr('style','display:none;');
    	$('.ipv6filterlist').attr('style','display:block;');
    	$('#addipv6filter').attr('style','display:block;');
    });
    $(document).on('click','#ipv6filterpage .apply',function (e) {
        firewallipv6filterset();
    });


    $(document).on('click','#addwakeupmac',function (e) {
    	$('.wakeupmacadd').attr('style','display:block;');
    	$('.wakeupmaclist').attr('style','display:none;');
    	$(this).attr('style','display:none;');
        var maclists = getmaclists();
        $('#wakeonlanconfigpagemaclist').empty();
        for(var i=0;i<maclists.length;i++) {
            $('#wakeonlanconfigpagemaclist').append('<option>'+maclists[i]+'</option>');
        }
        $('#wakeonlanconfigpagemanualinput>label[value="0"]').trigger('click')
        $('#wakeonlanconfigpagedevicename').val('');
        $('#wakeonlanconfigpagemac').val('__:__:__:__:__:__');
    });
    $(document).on('click','#addwakeupmacok',function (e) {
        var founditem=false;
        var mac="";
        $('.wakeupmaclist tbody tr').each( function (index,lists) {
            var lists = $(this).data('data');
            if($('#wakeonlanconfigpagemanualinput>label.active').attr('value')=='1') {
                mac = $('#wakeonlanconfigpagemac').val();
            } else {
                mac = $('#wakeonlanconfigpagemaclist').val();
            }
            if(mac=="__:__:__:__:__:__") mac = "";
            if(lists.mac == $('#wakeonlanconfigpagemac').val()) {
                myalert('Item had existed.');
                founditem=true;
                return;
            }
        });
        if(mac == "") {
            myalert('MAC need to input.');
            return;
        }
        if(founditem) return;
        var list = {
            devicename:$('#wakeonlanconfigpagedevicename').val(),
            mac:mac,
        }
        $('.wakeupmaclist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
            '<td>'+list.devicename+'</td>'+'<td>'+list.mac+'</td>'+'</tr>').children('tr:last-child').data('data',list).end().find('a').popover();
        $('.wakeupmacadd').attr('style','display:none;');
        $('.wakeupmaclist').attr('style','display:block;');
        $('#addwakeupmac').attr('style','display:block;');
    });
    $(document).on('click','#addwakeupmaccancel',function (e) {
    	$('.wakeupmacadd').attr('style','display:none;');
    	$('.wakeupmaclist').attr('style','display:block;');
    	$('#addwakeupmac').attr('style','display:block;');
    });
    $(document).on('click','.wakeupmaclist tbody .trash',function (e) {
        $(this).parents('tr').remove();
    });
    $(document).on('click','#wakeonlanconfigpage .apply',function (e) {
        wakeonlanset();
    });
    $(document).on('click','#wakeonlanconfigpagewakenow',function (e) {
        if($('#wakeonlanconfigpagemacnow').val()=='' || $('#wakeonlanconfigpagemacnow').val()=='__:__:__:__:__:__') {
            myalert('Machine MAC need to input.');
            return;
        }
        wakeonlannow();
    });
    $(document).on('click','#wakeonlanconfigpagemanualinput label',function (e) {
        $('.wakeonlanconfigpagemaclistoption').attr('style','display:none;');
        $('.wakeonlanconfigpagemacoption').attr('style','display:none;');
        if($(this).attr('value')=='1') {
            $('.wakeonlanconfigpagemacoption').attr('style','display:block;');
        } else {
            $('.wakeonlanconfigpagemaclistoption').attr('style','display:block;');
        }
    });


    $(document).on('click','#pptpvpnserverindex',function (e) {
        try {
            if ($('body').data('check').change == true) return;
        } catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#pptpvpnserverpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#pptpvpnserverpage').attr('style','display:block;');
       	$('#vpnnavbar.navbar-toggle:visible').click();
        getpptpserverset();
    });


    $(document).on('click','#openvpnserverindex',function (e) {
        try {
            if ($('body').data('check').change == true) return;
        } catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#openvpnserverpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#openvpnserverpage').attr('style','display:block;');
       	$('#vpnnavbar.navbar-toggle:visible').click();
        getopenvpnserverset();
    });

    $(document).on('click','#openvpnserverconfig label',function (e) {
    	$('.openvpnadvance').attr('style','display:none;');
    	$('.vpnservertun').attr('style','display:none;');
    	$('.vpnservertap').attr('style','display:none;');
    	$('.vpnservertls').attr('style','display:none;');
    	$('.vpnserverstatic').attr('style','display:none;');
    	$('.vpnservertuntls').attr('style','display:none;');
    	$('.vpnservertunstatic').attr('style','display:none;');
    	$('.vpnservertaptls').attr('style','display:none;');
    	$('.vpnserverdhcpon').attr('style','display:none;');

		if($(this).attr('value')=='1') {
    		$('.openvpnadvance').attr('style','display:block;');
			if($('#openvpnserverinterface>label.active').attr('value')=='1') {
				$('.vpnservertun').attr('style','display:block;');
				if($('#openvpnserverauthmode').val()=='0') {
			    	$('.vpnservertls').attr('style','display:block;');
			    	$('.vpnservertuntls').attr('style','display:block;');
				} else {
			    	$('.vpnservertunstatic').attr('style','display:block;');
			    	$('.vpnserverstatic').attr('style','display:block;');
				}
			} else {
				$('.vpnservertap').attr('style','display:block;');
				if($('#openvpnserverauthmode').val()=='0') {
			    	$('.vpnservertls').attr('style','display:block;');
			    	$('.vpnservertaptls').attr('style','display:block;');
				} else {
			    	$('.vpnserverstatic').attr('style','display:block;');
				}
			}
		}
	});

    $(document).on('click','#openvpnserverallocatefromdhcp label',function (e) {
    	$('.vpnserverdhcpon').attr('style','display:none;');

		if($(this).attr('value')=='0') {
			$('.vpnserverdhcpon').attr('style','display:block;');
		}
    });

    $(document).on('click','#openvpnserverinterface label',function (e) {
    	$('.vpnservertun').attr('style','display:none;');
    	$('.vpnservertap').attr('style','display:none;');
    	$('.vpnservertls').attr('style','display:none;');
    	$('.vpnserverstatic').attr('style','display:none;');
    	$('.vpnservertuntls').attr('style','display:none;');
    	$('.vpnservertunstatic').attr('style','display:none;');
    	$('.vpnservertaptls').attr('style','display:none;');
    	$('.vpnserverdhcpon').attr('style','display:none;');

		if($(this).attr('value')=='1') {
			$('.vpnservertun').attr('style','display:block;');
			if($('#openvpnserverauthmode').val()=='0') {
		    	$('.vpnservertls').attr('style','display:block;');
		    	$('.vpnservertuntls').attr('style','display:block;');
			} else {
		    	$('.vpnservertunstatic').attr('style','display:block;');
		    	$('.vpnserverstatic').attr('style','display:block;');
			}
		} else {
			$('.vpnservertap').attr('style','display:block;');
			if($('#openvpnserverauthmode').val()=='0') {
		    	$('.vpnservertls').attr('style','display:block;');
		    	$('.vpnservertaptls').attr('style','display:block;');
			} else {
		    	$('.vpnserverstatic').attr('style','display:block;');
			}
		}
	});

    $(document).on('change','#openvpnserverauthmode',function (e) {
    	$('.vpnservertun').attr('style','display:none;');
    	$('.vpnservertap').attr('style','display:none;');
    	$('.vpnservertls').attr('style','display:none;');
    	$('.vpnserverstatic').attr('style','display:none;');
    	$('.vpnservertuntls').attr('style','display:none;');
    	$('.vpnservertunstatic').attr('style','display:none;');
    	$('.vpnservertaptls').attr('style','display:none;');
    	$('.vpnserverdhcpon').attr('style','display:none;');

		if($(this).val()=='0') {
	    	$('.vpnservertls').attr('style','display:block;');
			if($('#openvpnserverinterface>label.active').attr('value')=='1') {
		    	$('.vpnservertun').attr('style','display:block;');
		    	$('.vpnservertuntls').attr('style','display:block;');
			} else {
				$('.vpnservertap').attr('style','display:block;');
		    	$('.vpnservertaptls').attr('style','display:block;');
			}
		} else {
			if($('#openvpnserverinterface>label.active').attr('value')=='1') {
		    	$('.vpnservertun').attr('style','display:block;');
		    	$('.vpnservertunstatic').attr('style','display:block;');
			} else {
				$('.vpnservertap').attr('style','display:block;');
			}
	    	$('.vpnserverstatic').attr('style','display:block;');
		}
	});

    $(document).on('click','#addopenvpnserver',function (e) {
    	$('.openvpnserveradd').attr('style','display:block;');
    	$('.openvpnserverlist').attr('style','display:none;');
    	$(this).attr('style','display:none;');
        $('#openvpnserverusername').val('');
        $('#openvpnserverpassword').val('');
    });
    $(document).on('click','#addopenvpnserverok',function (e) {
        var returnbool=false;
        $.each($('.openvpnserverlist tbody').data('data').feed.data.users,function (index,users) {
            if($('#openvpnserverusername').val()=='') {
                myalert('Please input username');
                returnbool=true;
                return false;
            }
            if($('#openvpnserverpassword').val()=='') {
                myalert('Please input password');
                returnbool=true;
                return false;
            }
            if(users.username==$('#openvpnserverusername').val()) {
                myalert('user had existed, try another name');
                returnbool=true;
                return false;
            }
        });
        if(returnbool) return;
        $('.openvpnserveradd').attr('style','display:none;');
        $('.openvpnserverlist').attr('style','display:block;');
        $('#addopenvpnserver').attr('style','display:block;');
        var user = {
                 username: $('#openvpnserverusername').val(),
                 password: $('#openvpnserverpassword').val(),
                 currentstatus: ''
            };
        $('.openvpnserverlist tbody').data('data').feed.data.users.push(user);
         $('.openvpnserverlist tbody').append('<tr username="'+$('#openvpnserverusername').val()+'"><td><button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
            '<td></td>' +'<td>'+$('#openvpnserverusername').val()+'</td>'+
            '<td><div class="dropdown"><a class="btn btn-default" role="button" data-toggle="popover" title="Password" data-placement="right" data-trigger="hover" data-content="'+$('#openvpnserverpassword').val()+'"><i class="icon-eye-open glyphicon glyphicon-eye-open"></i></a></div></td></tr>').find('a').popover();
    });
    $(document).on('click','#addopenvpnservercancel',function (e) {
    	$('.openvpnserveradd').attr('style','display:none;');
    	$('.openvpnserverlist').attr('style','display:block;');
    	$('#addopenvpnserver').attr('style','display:block;');
    });
    $(document).on('click','.openvpnserverlist tbody .trash',function (e) {
        var thetr = $(this).parents('tr');
        $.each($('.openvpnserverlist tbody').data('data').feed.data.users,function (index,users) {
            if(users.username==thetr.attr('username')) {
                $('.openvpnserverlist tbody').data('data').feed.data.users.splice(index);
                thetr.remove();
            }
        });
    });

    $(document).on('click','#openvpnserverpage .apply',function (e) {
        openvpnserverset();
    });





    $(document).on('click','#vpnclientindex',function (e) {
        try {
            if ($('body').data('check').change == true) return;
        } catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#vpnclientpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#vpnclientpage').attr('style','display:block;');
       	$('#vpnnavbar.navbar-toggle:visible').click();
        getvpnclientset();
    });

    $(document).on('click','#addvpnclient',function (e) {
    	$('.vpnclientadd').attr('style','display:block;');
    	$('.vpnclientlist').attr('style','display:none;');
    	$(this).attr('style','display:none;');
        $('#vpnclienttype').removeAttr('disabled');
        $('#vpnclienttype').val(0).trigger('change');
        $('#vpnclientdefaultroute>label[value="1"]').trigger('click');
        $('#vpnclientdesc').val('');
        $('#vpnclientvpnserver').val('');
        $('#vpnclientusername').val('');
        $('#vpnclientvpnserver').removeAttr('oldvpnserver');
        $('#vpnclientusername').removeAttr('oldusername');
        $('#vpnclientpassword').val('');
        $('#vpnclientpptpencryption').val(0).trigger('change');
        $('#vpnclientimportovpn').val('');
        $('#vpnclientreqcaandkey>label[value="0"]').trigger('click');
        $('#vpnclientimportca').val('');
        $('#vpnclientcertificate').val('');
        $('#vpnclientclientcertificate').val();
        $('#vpnclientclientkey').val();
        $('#vpnclientstatickey').val();
    	$('.openvpnclientonly, .openvpnclientreqcert').hide();
    	$('.pptpvpnclientonly').show();
    });
    $(document).on('click','#addvpnclientok',function (e) {
        if($('#vpnclientvpnserver').val()=='') {
            myalert('Please input vpn server');
            return;
        }
        if($('#vpnclientusername').val()=='') {
            myalert('Please input username');
            return;
        }
        if($('#vpnclientpassword').val()=='') {
            myalert('Please input password');
            return;
        }
        var addboolok=false;
        $.each($('.vpnclientlist tbody').data('data').feed.data.clients,function (index,clients) {
            if(Number($('#vpnclienttype').val()) == clients.type && $('#vpnclientvpnserver').val()==clients.vpnserver && $('#vpnclientusername').val()==clients.username) {
                myalert('VPN server ('+$('#vpnclientvpnserver').val()+') had exist the username ('+$('#vpnclientusername').val()+')');
                addboolok=true;
                return true;
            }
        });
        if(addboolok==true) return;
    	$('.vpnclientadd').attr('style','display:none;');
    	$('.vpnclientlist').attr('style','display:block;');
    	$('#addvpnclient').attr('style','display:block;');
        if($('#vpnclientvpnserver').attr('oldvpnserver')==undefined&&$('#vpnclientusername').attr('oldusername')==undefined)
            vpnclientadd();
        else
            vpnclientupdate();
    });
    $(document).on('click','#addvpnclientcancel',function (e) {
    	$('.vpnclientadd').attr('style','display:none;');
    	$('.vpnclientlist').attr('style','display:block;');
    	$('#addvpnclient').attr('style','display:block;');
    });
    $(document).on('click','.vpnclientlist tbody .trash',function (e) {
        var thetr = $(this).parents('tr');
        vpnclientdelete(Number(thetr.attr('vpntype')),thetr.attr('oldvpnserver'),thetr.attr('oldusername'));
    });
    $(document).on('click','.vpnclientlist tbody .edit',function (e) {
        var thetr = $(this).parents('tr');
        $('.vpnclientadd').attr('style','display:block;');
        $('.vpnclientlist').attr('style','display:none;');
        $('#addvpnclient').attr('style','display:none;');
        $('.openvpnclientonly, .openvpnclientreqcert').hide();
        $('.pptpvpnclientonly').show();
        var client=null;
        $.each($('.vpnclientlist tbody').data('data').feed.data.clients,function (index,clients) {
            if(thetr.attr('vpntype') == clients.type && thetr.attr('oldvpnserver')==clients.vpnserver && thetr.attr('oldusername')==clients.username) {
                client = clients;
                return true;
            }
        });
        if(!client) {
            myalert('no client select');
        }
        $('#vpnclienttype').attr('disabled','disabled');
        $('#vpnclienttype').val(client.type).trigger('change');
        $('#vpnclientdefaultroute>label[value="'+client.defaultroute+'"]').trigger('click');
        $('#vpnclientdesc').val(client.desc);
        $('#vpnclientvpnserver').attr('oldvpnserver',client.vpnserver);
        $('#vpnclientvpnserver').val(client.vpnserver);
        $('#vpnclientusername').attr('oldusername',client.username);
        $('#vpnclientusername').val(client.username);
        $('#vpnclientpassword').val(client.password);
        $('#vpnclientpptpencryption').val(client.pptpencrypt).trigger('change');
        $('#vpnclientimportovpn').val('');
        $('#vpnclientreqcaandkey>label[value="'+client.requestca+'"]').trigger('click');
        $('#vpnclientimportca').val('');
        $('#vpnclientcertificate').val(client.certificate);
        $('#vpnclientclientcertificate').val(client.clientcertificate);
        $('#vpnclientclientkey').val(client.clientkey);
        $('#vpnclientstatickey').val(client.statickey);
    });
    $(document).on('click','.vpnclientlist tbody .connect',function (e) {
        var thetr = $(this).parents('tr');
        $(this).hide();
        vpnclientconnect(Number(thetr.attr('vpntype')),thetr.attr('oldvpnserver'),thetr.attr('oldusername'));
    });
    $(document).on('click','.vpnclientlist tbody .disconnect',function (e) {
        var thetr = $(this).parents('tr');
        $(this).hide();
        vpnclientdisconnect(Number(thetr.attr('vpntype')),thetr.attr('oldvpnserver'),thetr.attr('oldusername'));
    });

	$(document).on('change', '#vpnclienttype', function() {
		$('.openvpnclientonly, .openvpnclientreqcert, .pptpvpnclientonly').hide();
		switch ($(this).val()) {
			case '0':
				$('.openvpnclientonly, .openvpnclientreqcert').hide();
				$('.pptpvpnclientonly').show();
				break;
			case '1':
				$('.openvpnclientonly, .openvpnclientreqcert, .pptpvpnclientonly').hide();
				break;
			case '2':
				$('.openvpnclientonly, .openvpnclientreqcert, .pptpvpnclientonly').hide();
				$('.openvpnclientonly').show();
				if ($('#vpnclientreqcaandkey>label.active').attr('value') == '1') {
					$('.openvpnclientreqcert').show();
				}
				break;
		}
	});

   $(document).on('click','#vpnclientreqcaandkey  label',function (e) {
    	$('.openvpnclientreqcert').attr('style','display:none;');
	   	if($(this).attr('value')=='1') {
	    	$('.openvpnclientreqcert').attr('style','display:block;');
	    }
   });



    $(document).on('click','#80211tosindex',function (e) {
        try {
            if ($('body').data('check').change == true) return;
        } catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#80211tospage').siblings('div.genconfig').attr('style','display:none;');
    	$('#80211tospage').attr('style','display:block;');
       	$('#qosnavbar.navbar-toggle:visible').click();
        get80211tosset();
    });


    $(document).on('click','#add80211tos',function (e) {
    	$('.80211tosadd').attr('style','display:block;');
    	$('.80211toslist').attr('style','display:none;');
    	$(this).attr('style','display:none;');
        $('#80211tospagessid').val($('#80211tospagessid option:eq(0)').val());
        $('#80211tospageremarkdesc').val($('#80211tospageremarkdesc option:eq(0)').val());
    });
    $(document).on('click','#add80211tosok',function (e) {
        var founditem=false;
        $('.80211toslist tbody tr').each( function (index,lists) {
            var lists = $(this).data('data');
            if(lists.ssid == $('#80211tospagessid').val() && lists.remarkdesc == $('#80211tospageremarkdesc').val()) {
                myalert('Item had existed.');
                founditem=true;
                return;
            }
        });
        if(founditem) return;
        var list = {
            ssid:$('#80211tospagessid').val(),
            remarkdesc:$('#80211tospageremarkdesc').val()
        }
        $('.80211toslist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
            '<td>'+list.ssid+'</td>'+'<td>'+$('#80211tospageremarkdesc').find('option[value="'+list.remarkdesc+'"]').text()+'</td></tr>').children('tr:last-child').data('data',list).end().find('a').popover();
        $('.80211tosadd').attr('style','display:none;');
        $('.80211toslist').attr('style','display:block;');
        $('#add80211tos').attr('style','display:block;');
    });
    $(document).on('click','#add80211toscancel',function (e) {
    	$('.80211tosadd').attr('style','display:none;');
    	$('.80211toslist').attr('style','display:block;');
    	$('#add80211tos').attr('style','display:block;');
    });
    $(document).on('click','.80211toslist tbody .trash',function (e) {
        $(this).parents('tr').remove();
    });
    $(document).on('click','#80211tospage .apply',function (e) {
        _80211tosset();
    });




    $(document).on('click','#iptvindex',function (e) {
        try {
            if ($('body').data('check').change == true) return;
        } catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#iptvpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#iptvpage').attr('style','display:block;');
       	$('#qosnavbar.navbar-toggle:visible').click();
        getiptvset();
    });

    $(document).on('click','#addiptv',function (e) {
    	$('.iptvadd').attr('style','display:block;');
    	$('.iptvlist').attr('style','display:none;');
    	$(this).attr('style','display:none;');
        $('#iptvpagesourceiptv').val('___.___.___.___');
        $('#iptvpageremarkdesc').val($('#iptvpageremarkdesc option:eq(0)').val());
    });
    $(document).on('click','#addiptvok',function (e) {
        if($('#iptvpagesourceiptv').val()=="___.___.___.___") {
            myalert('Source ip can not be empty.');
            return;
        }
        var founditem=false;
        $('.iptvlist tbody tr').each( function (index,lists) {
            var lists = $(this).data('data');
            if(lists.sourceiptv == $('#iptvpagesourceiptv').val() && lists.remarkdesc == $('#iptvpageremarkdesc').val()) {
                myalert('Item had existed.');
                founditem=true;
                return;
            }
        });
        if(founditem) return;
        var list = {
            sourceiptv:$('#iptvpagesourceiptv').val(),
            remarkdesc:$('#iptvpageremarkdesc').val()
        }
        $('.iptvlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
            '<td>'+list.sourceiptv+'</td>'+'<td>'+$('#iptvpageremarkdesc').find('option[value="'+list.remarkdesc+'"]').text()+'</td></tr>').children('tr:last-child').data('data',list).end().find('a').popover();
        $('.iptvadd').attr('style','display:none;');
        $('.iptvlist').attr('style','display:block;');
        $('#addiptv').attr('style','display:block;');
    });
    $(document).on('click','#addiptvcancel',function (e) {
    	$('.iptvadd').attr('style','display:none;');
    	$('.iptvlist').attr('style','display:block;');
    	$('#addiptv').attr('style','display:block;');
    });
    $(document).on('click','.iptvlist tbody .trash',function (e) {
        $(this).parents('tr').remove();
    });
    $(document).on('click','#iptvpage .apply',function (e) {
        iptvset();
    });




    $(document).on('click','#remarkingwmmindex',function (e) {
        try {
            if ($('body').data('check').change == true) return;
        } catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#remarkingwmmpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#remarkingwmmpage').attr('style','display:block;');
       	$('#qosnavbar.navbar-toggle:visible').click();
        getremarkwwmset();
    });

    $(document).on('click','#addremarkwmm',function (e) {
    	$('.remarkwmmadd').attr('style','display:block;');
    	$('.remarkwmmlist').attr('style','display:none;');
    	$(this).attr('style','display:none;');
        $('#remarkingwmmpagessid').val($('#remarkingwmmpagessid option:eq(0)').val());
        $('#remarkingwmmlist').val($('#remarkingwmmlist option:eq(0)').val());
    });
    $(document).on('click','#addremarkwmmok',function (e) {
        var founditem=false;
        $('.remarkwmmlist tbody tr').each( function (index,lists) {
            var lists = $(this).data('data');
            if(lists.ssid == $('#remarkingwmmpagessid').val() && lists.remarkwwm == $('#remarkingwmmlist').val()) {
                myalert('Item had existed.');
                founditem=true;
                return;
            }
        });
        if(founditem) return;
        var list = {
            ssid:$('#remarkingwmmpagessid').val(),
            remarkwwm:$('#remarkingwmmlist').val()
        }
        $('.remarkwmmlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
            '<td>'+list.ssid+'</td>'+'<td>'+$('#remarkingwmmlist').find('option[value="'+list.remarkwwm+'"]').text()+'</td></tr>').children('tr:last-child').data('data',list).end().find('a').popover();
        $('.remarkwmmadd').attr('style','display:none;');
        $('.remarkwmmlist').attr('style','display:block;');
        $('#addremarkwmm').attr('style','display:block;');
    });
    $(document).on('click','#addremarkwmmcancel',function (e) {
    	$('.remarkwmmadd').attr('style','display:none;');
    	$('.remarkwmmlist').attr('style','display:block;');
    	$('#addremarkwmm').attr('style','display:block;');
    });
    $(document).on('click','.remarkwmmlist tbody .trash',function (e) {
        $(this).parents('tr').remove();
    });
    $(document).on('click','#remarkingwmmpage .apply',function (e) {
        remarkwwmset();
    });




    $(document).on('click','#prioritizationindex',function (e) {
        try {
            if ($('body').data('check').change == true) return;
        } catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#prioritizationpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#prioritizationpage').attr('style','display:block;');
       	$('#qosnavbar.navbar-toggle:visible').click();
        getprioritizationset();
    });

    $(document).on('click','#addprioritization',function (e) {
    	$('.prioritizationadd').attr('style','display:block;');
    	$('.prioritizationlist').attr('style','display:none;');
    	$('.prioritizationmac').attr('style','display:none;');
        $('.prioritizationmanualmac').attr('style','display:none;');
        $('.prioritizationmanual').attr('style','display:none;');
    	$('.prioritizationapp').attr('style','display:none;');
        var macs=getmaclists();
        $('#prioritizationmaclist').empty();
        for(var i=0; i<macs.length;i++)
            $('#prioritizationmaclist').append('<option>'+macs[i]+'</option>');
        // $('#prioritizationtype>label[value="1"]').trigger('click')
        $('#prioritizationmanualinput>label[value="1"]').trigger('click')
    	// if($('#prioritizationtype>label.active').attr('value')=="1") {
     //        $('.prioritizationmanual').attr('style','display:block;');
     //        if($('#prioritizationmanualinput>label.active').attr('value')=="1") {
     //            $('.prioritizationmanualmac').attr('style','display:block;');
     //        } else {
     //            $('.prioritizationmac').attr('style','display:block;');
     //        }
    	// } else {
    	// 	$('.prioritizationapp').attr('style','display:block;');
    	// }
        $('#prioritizationapptype').val($('#prioritizationapptype option:eq(0)').val());
        $('#prioritizationmark').val('');
        $('#prioritizationmacinput').val('__:__:__:__:__:__');
    	$(this).attr('style','display:none;');
    });
    $(document).on('click','#addprioritizationok',function (e) {
        var founditem=false;
        var target = "";
        $('.prioritizationlist tbody tr').each( function (index,lists) {
            var lists = $(this).data('data');
            // if(Number($('#prioritizationtype>label.active').attr('value'))==1) {
                if($('#prioritizationmanualinput>label.active').attr('value')=="1")
                    target = $('#prioritizationmacinput').val();
                else
                    target = $('#prioritizationmaclist').val();
                if(target == '__:__:__:__:__:__') target = "";
            // } else {
            //      target = $('#prioritizationapptype').val();
            // }
            // if(lists.type == Number($('#prioritizationtype').val()) && lists.target == target) {
            //     myalert('Item had existed.');
            //     founditem=true;
            //     return;
            // }
        });
        if(target == "") {
            myalert('Target need to input.');
            return;
        }
        if($('#prioritizationmark').val() == "") {
            myalert('Mark need to input.');
            return;
        }
        if(founditem) return;
        var list = {
            // type:Number($('#prioritizationtype>label.active').attr('value')),
            type:0,
            target:target,
            mark:Number($('#prioritizationmark').val())
        }
        // if(list.type==0)
        //     $('.prioritizationlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
        //         '<td>'+$('#prioritizationtype>label[value="0"]').text().trim()+'</td>'+'<td>'+list.target+'</td>'+'<td>'+list.mark+'</td>'+'</tr>').children('tr:last-child').data('data',list).end().find('a').popover();
        // else
        //     $('.prioritizationlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
        //         '<td>'+$('#prioritizationtype>label[value="1"]').text().trim()+'</td>'+'<td>'+$('#prioritizationapptype').find('option[value="'+list.target+'"]').text()+'</td>'+'<td>'+list.mark+'</td>'+'</tr>').children('tr:last-child').data('data',list).end().find('a').popover();
            $('.prioritizationlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                '<td>Device</td>'+'<td>'+list.target+'</td>'+'<td>'+list.mark+'</td>'+'</tr>').children('tr:last-child').data('data',list).end().find('a').popover();
    	$('.prioritizationadd').attr('style','display:none;');
    	$('.prioritizationlist').attr('style','display:block;');
    	$('#addprioritization').attr('style','display:block;');
    });
    $(document).on('click','#addprioritizationcancel',function (e) {
    	$('.prioritizationadd').attr('style','display:none;');
    	$('.prioritizationlist').attr('style','display:block;');
    	$('#addprioritization').attr('style','display:block;');
    });

    // $(document).on('click','#prioritizationtype label',function (e) {
    // 	$('.prioritizationmac').attr('style','display:none;');
    // 	$('.prioritizationapp').attr('style','display:none;');
    //     $('.prioritizationmanual').attr('style','display:none;');
    //     $('.prioritizationmanualmac').attr('style','display:none;');
    // 	if($(this).attr('value')=="1") {
    //         $('.prioritizationmanual').attr('style','display:block;');
    //         if($('#prioritizationmanualinput>label.active').attr('value')=="1") {
    //             $('.prioritizationmanualmac').attr('style','display:block;');
    //         } else {
    //             $('.prioritizationmac').attr('style','display:block;');
    //         }
    // 	} else {
    // 		$('.prioritizationapp').attr('style','display:block;');
    // 	}
    // });
    $(document).on('click','#prioritizationmanualinput label',function (e) {
        $('.prioritizationmac').attr('style','display:none;');
        $('.prioritizationmanualmac').attr('style','display:none;');
        if($(this).attr('value')=="1") {
            $('.prioritizationmanualmac').attr('style','display:block;');
        } else {
            $('.prioritizationmac').attr('style','display:block;');
        }
    });
    $(document).on('click','.prioritizationlist tbody .trash',function (e) {
        $(this).parents('tr').remove();
    });
    $(document).on('click','#prioritizationpage .apply',function (e) {
        prioritizationset();
    });

    $(document).on('click','#smartqosindex',function (e) {
        try {
            if ($('body').data('check').change == true) return;
        } catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#smartqospage').siblings('div.genconfig').attr('style','display:none;');
    	$('#smartqospage').attr('style','display:block;');
       	$('#qosnavbar.navbar-toggle:visible').click();
        getsmartqosset();
    });

    $(document).on('click','#smartqospage .apply',function (e) {
        smartqosset();
    });
	$('#smartqospage-1 .type>label').click(function() {
		if ($(this).hasClass('active')) return;
		switch ($(this).attr('value')) {
			case '0':
				$('#smartqospage-1 .smartqosView .line')
					.attr('typeDegree', 'Mid')
					.animate({
						height: '70px',
						top: '115px'
					}, 300);
				$('#smartqospage-1 .smartqosView i')
					.animate({top: '60px'}, 300);
				break;
			case '1':
				$('#smartqospage-1 .bar:nth-child(1)>.line')
					.attr('typeDegree', 'High')
					.animate({
						height: '130px',
						top: '55px'
					}, 300);
				$('#smartqospage-1 .bar:nth-child(1)>i')
					.animate({top: 0}, 300);
				$('#smartqospage-1 .bar:nth-child(2)>.line, #smartqospage-1 .bar:nth-child(3)>.line')
					.attr('typeDegree', 'Mid')
					.animate({
						height: '70px',
						top: '115px'
					}, 300);
				$('#smartqospage-1 .bar:nth-child(2)>i, #smartqospage-1 .bar:nth-child(3)>i')
					.animate({top: '60px'}, 300);
				$('#smartqospage-1 .bar:nth-child(4)>.line')
					.attr('typeDegree', 'Low')
					.animate({
						height: 0,
						top: '185px'
					}, 300);
				$('#smartqospage-1 .bar:nth-child(4)>i')
					.animate({top: '130px'}, 300);
				break;
			case '2':
				$('#smartqospage-1 .bar:nth-child(2)>.line')
					.attr('typeDegree', 'High')
					.animate({
						height: '130px',
						top: '55px'
					}, 300);
				$('#smartqospage-1 .bar:nth-child(2)>i')
					.animate({top: 0}, 300);
				$('#smartqospage-1 .bar:nth-child(1)>.line, #smartqospage-1 .bar:nth-child(3)>.line')
					.attr('typeDegree', 'Mid')
					.animate({
						height: '70px',
						top: '115px'
					}, 300);
				$('#smartqospage-1 .bar:nth-child(1)>i, #smartqospage-1 .bar:nth-child(3)>i')
					.animate({top: '60px'}, 300);
				$('#smartqospage-1 .bar:nth-child(4)>.line')
					.attr('typeDegree', 'Low')
					.animate({
						height: 0,
						top: '185px'
					}, 300);
				$('#smartqospage-1 .bar:nth-child(4)>i')
					.animate({top: '130px'}, 300);
				break;
			case '3':
				$('#smartqospage-1 .bar:nth-child(3)>.line')
					.attr('typeDegree', 'High')
					.animate({
						height: '130px',
						top: '55px'
					}, 300);
				$('#smartqospage-1 .bar:nth-child(3)>i')
					.animate({top: 0}, 300);
				$('#smartqospage-1 .bar:nth-child(1)>.line, #smartqospage-1 .bar:nth-child(2)>.line')
					.attr('typeDegree', 'Mid')
					.animate({
						height: '70px',
						top: '115px'
					}, 300);
				$('#smartqospage-1 .bar:nth-child(1)>i, #smartqospage-1 .bar:nth-child(2)>i')
					.animate({top: '60px'}, 300);
				$('#smartqospage-1 .bar:nth-child(4)>.line')
					.attr('typeDegree', 'Low')
					.animate({
						height: 0,
						top: '185px'
					}, 300);
				$('#smartqospage-1 .bar:nth-child(4)>i')
					.animate({top: '130px'}, 300);
				break;
		}
	});


});
