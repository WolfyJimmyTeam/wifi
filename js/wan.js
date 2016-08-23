
function getwandefault(type) {
	var postData =
	{
		method: 'getwandefault',
		sessionid: sessionID,
		wantype: type
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
					wantype: 0,
					mtu: 1500,
					ip: '192.168.1.1',
					netmask: '255.255.255.0',
					gateway: '192.168.1.1',
					enabledns: 0,
					dns1: '192.168.10.1',
					dns2: '192.168.10.2',
					enable8021xmd5: 1,
					username: '',
					password: '',
					encryption: 0,
					defaultroute: 0,
					vpnserver: '',
					hostname: '',
					servicename:'',
					concentratorname:'',
					mac:'',
					dhcpupdatefreq:0
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			if(data.feed.data.ip=='')
				$('#gotonetpageip').val('___.___.___.___');
			else
				$('#gotonetpageip').val(data.feed.data.ip);
			if(data.feed.data.netmask=='')
				$('#gotonetpagenetmask').val('___.___.___.___');
			else
				$('#gotonetpagenetmask').val(data.feed.data.netmask);
			if(data.feed.data.gateway=='')
				$('#gotonetpagegateway').val('___.___.___.___');
			else
				$('#gotonetpagegateway').val(data.feed.data.gateway);
			$('#gotonetpagemtu').val(data.feed.data.mtu);
			$('#gotonetpagenabledns>label[value="'+data.feed.data.enabledns+'"]').trigger('click');
			if(data.feed.data.dns1=='')
				$('#gotonetpagedns1').val('___.___.___.___');
			else
				$('#gotonetpagedns1').val(data.feed.data.dns1);
			if(data.feed.data.dns2=='')
				$('#gotonetpagedns2').val('___.___.___.___');
			else
				$('#gotonetpagedns2').val(data.feed.data.dns2);
			$('#gotonetpageenable8021xmd5>label[value="'+data.feed.data.enable8021xmd5+'"]').trigger('click');
			$('#gotonetpageusername').val(data.feed.data.username);
			$('#gotonetpagepassword').val(data.feed.data.password);
			$('#gotonetpageservicename').val(data.feed.data.servicename);
			$('#gotonetpageconcentratorname').val(data.feed.data.concentratorname);
			$('#gotonetpagemac').val(data.feed.data.mac);
			$('#gotonetpageencryption').val(data.feed.data.encryption);
			$('#gotonetpagedefaultroute>label[value="'+data.feed.data.defaultroute+'"]');
			$('#gotonetpagevpnserver').val(data.feed.data.vpnserver);
			$('#gotonetpagehostname').val(data.feed.data.hostname);
			if(data.feed.data.mac=='')
				$('#gotonetpagemac').val('__:__:__:__:__:__');
			else
				$('#gotonetpagemac').val(data.feed.data.mac);
			$('#gotonetpagedhcpupdatefreq').val(data.feed.data.dhcpupdatefreq);

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getwanset() {
	var postData =
	{
		method: 'getwanset',
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
					wantype: 0,
					mtu: 1500,
					ip: '192.168.1.1',
					netmask: '255.255.255.0',
					gateway: '192.168.1.1',
					enabledns: 0,
					dns1: '192.168.10.1',
					dns2: '192.168.10.2',
					enable8021xmd5: 1,
					username: '',
					password: '',
					encryption: 0,
					defaultroute: 0,
					vpnserver: '',
					hostname: '',
					servicename:'',
					concentratorname:'',
					mac:'',
					defaultmac:'23:32:44:65:00:21',
					dhcpupdatefreq:0
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#gotonetpagewantype').val(data.feed.data.wantype).trigger('change');
			if(data.feed.data.ip=='')
				$('#gotonetpageip').val('___.___.___.___');
			else
				$('#gotonetpageip').val(data.feed.data.ip);
			if(data.feed.data.netmask=='')
				$('#gotonetpagenetmask').val('___.___.___.___');
			else
				$('#gotonetpagenetmask').val(data.feed.data.netmask);
			if(data.feed.data.gateway=='')
				$('#gotonetpagegateway').val('___.___.___.___');
			else
				$('#gotonetpagegateway').val(data.feed.data.gateway);
			$('#gotonetpagemtu').val(data.feed.data.mtu);
			$('#gotonetpagenabledns>label[value="'+data.feed.data.enabledns+'"]').trigger('click');
			if(data.feed.data.dns1=='')
				$('#gotonetpagedns1').val('___.___.___.___');
			else
				$('#gotonetpagedns1').val(data.feed.data.dns1);
			if(data.feed.data.dns2=='')
				$('#gotonetpagedns2').val('___.___.___.___');
			else
				$('#gotonetpagedns2').val(data.feed.data.dns2);
			$('#gotonetpageenable8021xmd5>label[value="'+data.feed.data.enable8021xmd5+'"]').trigger('click');
			$('#gotonetpageusername').val(data.feed.data.username);
			$('#gotonetpagepassword').val(data.feed.data.password);
			$('#gotonetpageservicename').val(data.feed.data.servicename);
			$('#gotonetpageconcentratorname').val(data.feed.data.concentratorname);
			if(data.feed.data.mac=='')
				$('#gotonetpagemac').val('__:__:__:__:__:__');
			else
				$('#gotonetpagemac').val(data.feed.data.mac);
			$('#gotonetpageencryption').val(data.feed.data.encryption);
			$('#gotonetpagedefaultroute>label[value="'+data.feed.data.defaultroute+'"]');
			$('#gotonetpagevpnserver').val(data.feed.data.vpnserver);
			$('#gotonetpagehostname').val(data.feed.data.hostname);
			$('#gotonetpagemac').val(data.feed.data.mac).data('defaultmac',data.feed.data.defaultmac);
			$('#gotonetpagedhcpupdatefreq').val(data.feed.data.dhcpupdatefreq);

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function wanset(type) {

	var ip='',netmask='',gateway='',dns1='',dns2='',mac='';

	if($('#gotonetpageip').val()!='___.___.___.___') {
		ip=$('#gotonetpageip').val();
	}
	if($('#gotonetpagenetmask').val()!='___.___.___.___') {
		netmask=$('#gotonetpagenetmask').val();
	}
	if($('#gotonetpagegateway').val()!='___.___.___.___') {
		gateway=$('#gotonetpagegateway').val();
	}
	if($('#gotonetpagedns1').val()!='___.___.___.___') {
		dns1=$('#gotonetpagedns1').val();
	}
	if($('#gotonetpagedns2').val()!='___.___.___.___') {
		dns2=$('#gotonetpagedns2').val();
	}
	if($('#gotonetpagemac').val()!='___.___.___.___') {
		mac=$('#gotonetpagemac').val();
	}

    var postData =
    {
        method: 'wanset',
        sessionid: sessionID,
		wantype: Number($('#gotonetpagewantype').val()),
		mtu: Number($('#gotonetpagemtu').val()),
		ip: ip,
		netmask: netmask,
		gateway: gateway,
		enabledns: Number($('#gotonetpagenabledns>label.active').attr('value')),
		dns1: dns1,
		dns2: dns2,
		enable8021xmd5: Number($('#gotonetpageenable8021xmd5>label.active').attr('value')),
		username: $('#gotonetpageusername').val(),
		password: $('#gotonetpagepassword').val(),
		encryption: Number($('#gotonetpageencryption').val()),
		defaultroute: Number($('#gotonetpagedefaultroute>label.active').attr('value')),
		vpnserver: $('#gotonetpagevpnserver').val(),
		hostname: $('#gotonetpagehostname').val(),
		servicename:$('#gotonetpageservicename').val(),
		concentratorname:$('#gotonetpageconcentratorname').val(),
		mac:mac,
		dhcpupdatefreq:Number($('#gotonetpagedhcpupdatefreq').val())
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

function getddnssupport() {
	var postData =
	{
		method: 'getddnssupport',
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
					server: [
						'WWW.DYNDNS.COM','WWW.NO-IP.COM','WWW.DDNS.COM.BR'
					]
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

        	$('#ddnspageserver').empty();
            $.each(data.feed.data.server,function (index,server) {
            	$('#ddnspageserver').append('<option>'+server+'</option>');
            });

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getddnsset() {
	var postData =
	{
		method: 'getddnsset',
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
					enableddns: 0,
					server: '',
					hostname: '',
					accountemail: '',
					passwordkey: '',
					wildcard: 0,
					iphostnameverification: 0
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#ddnspageenable>label[value="'+data.feed.data.enableddns+'"]');
			if(data.feed.data.server!='')
				$('#ddnspageserver').val(data.feed.data.server);
			$('#ddnspagehostname').val(data.feed.data.hostname);
			$('#ddnspageaccountemail').val(data.feed.data.accountemail);
			$('#ddnspagepasswordkey').val(data.feed.data.passwordkey);
			$('#ddnspagewildcard>label[value="'+data.feed.data.wildcard+'"]');
			$('#ddnspageiphostnameverification>label[value="'+data.feed.data.iphostnameverification+'"]');

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function ddnsset() {

    var postData =
    {
        method: 'ddnsset',
        sessionid: sessionID,
		enableddns: Number($('#ddnspageenable>label.active').attr('value')),
		server: $('#ddnspageserver').val(),
		hostname: $('#ddnspagehostname').val(),
		accountemail: $('#ddnspageaccountemail').val(),
		passwordkey: $('#ddnspagepasswordkey').val(),
		wildcard: Number($('#ddnspagewildcard>label.active').attr('value')),
		iphostnameverification: Number($('#ddnspageiphostnameverification>label.active').attr('value'))
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

function getupnpsset() {
	var postData =
	{
		method: 'getupnpsset',
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
					enablepnp: 0,
					period: 30,
					timetolive: 3600
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#upnppageenablepnp>label[value="'+data.feed.data.enablepnp+'"]');
			$('#upnppageperiod').val(data.feed.data.period);
			$('#upnppagetimetolive').val(data.feed.data.timetolive);

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function upnpsset(type) {

    var postData =
    {
        method: 'upnpsset',
        sessionid: sessionID,
		enablepnp: Number($('#upnppageenablepnp>label.active').attr('value')),
		period: Number($('#upnppageperiod').val()),
		timetolive: Number($('#upnppagetimetolive').val())
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

function getporttriggerset_applist() {
	var postData =
	{
		method: 'getporttriggerset_applist',
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
				{ applist:[{
						desc:'Quicktime 4 Client',
						triggerport:58632,
						triggerprotocol:0,
						incomingport:'58632:58699',
						incomingprotocol:0
						},{
						desc:'Real Audio',
						triggerport:58000,
						triggerprotocol:0,
						incomingport:'4000:5000',
						incomingprotocol:0
						}]
				}
			}
		};
		if (data.stat == 'success') {
 			updatetrigger=false;

       	$('#porttriggerpageapplist').empty().append('<option>Please Select</option>');
            $.each(data.feed.data.applist,function (index,applist) {
            	$('#porttriggerpageapplist').append('<option>'+applist.desc+'</option>').children('option:last-child').data('data',applist).end();
            });

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getporttrigerset() {
	var postData =
	{
		method: 'getporttrigerset',
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
					enableporttriger: 0,
					triggerportlist: [{
						desc:'Quicktime 4 Client',
						triggerport:58632,
						triggerprotocol:0,
						incomingport:'58632:58900',
						incomingprotocol:0
					},{
						desc:'Real Audio',
						triggerport:57777,
						triggerprotocol:0,
						incomingport:'4000:5000',
						incomingprotocol:0
					}]
				}
			}
		};
		if (data.stat == 'success') {
 			updatetrigger=false;

           $('#porttriggerpageenable>label[value="'+data.feed.data.enableporttriger+'"]').trigger('click');
            $('.triggerportlist tbody').empty();
            $.each(data.feed.data.triggerportlist,function (index,triggerportlists) {
                $('.triggerportlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                    '<td>'+triggerportlists.desc+'</td>'+
                    '<td>'+triggerportlists.triggerport+'</td>'+
                    '<td>'+$('#porttriggerpagetriggerprotocol option[value="'+triggerportlists.triggerprotocol+'"]').text()+'</td>'+
                    '<td>'+triggerportlists.incomingport+'</td>'+
                    '<td>'+$('#porttriggerpageincomingprotocol option[value="'+triggerportlists.incomingprotocol+'"]').text()+'</td>'+
                    '</tr>').children('tr:last-child').data('data',triggerportlists).end().find('a').popover();
            });

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function porttrigerset() {
    var triggerportlist=[];

    $('.triggerportlist tbody tr').each( function (index,value) {
        triggerportlist.push($(this).data('data'));
    });

    var postData =
    {
        method: 'porttrigerset',
        sessionid: sessionID,
		enableporttriger: Number($('#porttriggerpageenable>label.active').attr('value')),
		triggerportlist:triggerportlist
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

function getportforwardset_wellknowlist(type) {
	var postData =
	{
		method: 'getportforwardset_wellknowlist',
		sessionid: sessionID,
		type:type
	};

	// $.post(serverURL, postData, function(data, textStatus, jqXHR) {
		var data =
		{
			stat: 'success',
			feed:
			{
				msg: 'Success',
				data:
				{ wellknowlist:[{
						name:'DNS',
						portrange:'53',
						localport:53,
						protocol:0,
						},{
						name:'FTP',
						portrange:'1000:2000',
						localport:23,
						protocol:0,
						}]
				}
			}
		};
		if(type=="game") {
			data =
			{
				stat: 'success',
				feed:
				{
					msg: 'Success',
					data:
					{ wellknowlist:[{
							name:'WOW',
							portrange:'1053',
							localport:1053,
							protocol:0,
							},{
							name:'BitTorrent',
							portrange:'5000:6000',
							localport:1034,
							protocol:0,
							}]
					}
				}
			};
		}
		if (data.stat == 'success') {
			updatetrigger=false;

			if(type=='game') {
	        	$('#portforwardpagegamenamelist').empty().append('<option>Please Select</option>');
	            $.each(data.feed.data.wellknowlist,function (index,wellknowlist) {
	            	$('#portforwardpagegamenamelist').append('<option>'+wellknowlist.name+'</option>').children('option:last-child').data('data',wellknowlist).end();
	            });

			updatetrigger=true;
	        } else {
	        	$('#portforwardpageservernamelist').empty().append('<option>Please Select</option>');
	            $.each(data.feed.data.wellknowlist,function (index,wellknowlist) {
	            	$('#portforwardpageservernamelist').append('<option>'+wellknowlist.name+'</option>').children('option:last-child').data('data',wellknowlist).end();
	            });
	        }
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getportforwardset() {
	var postData =
	{
		method: 'getportforwardset',
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
					enableportforward: 0,
					portforwardlist: [{
						name:'HTTP',
						portrange:'7000:7003',
						localport:80,
						localip:'192.168.1.1',
						protocol:0
					},{
						name:'XBox',
						portrange:'12000:13000',
						localport:9000,
						localip:'192.168.1.3',
						protocol:0,
					}]
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

            $('#portforwardpageenable>label[value="'+data.feed.data.enableportforward+'"]').trigger('click');
            $('.portfowardlist tbody').empty();
            $.each(data.feed.data.portforwardlist,function (index,portforwardlists) {
                $('.portfowardlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                    '<td>'+portforwardlists.name+'</td>'+
                    '<td>'+portforwardlists.portrange+'</td>'+
                    '<td>'+portforwardlists.localip+'</td>'+
                    '<td>'+portforwardlists.localport+'</td>'+
                    '<td>'+$('#portforwardpageprotocol option[value="'+portforwardlists.protocol+'"]').text()+'</td>'+
                    '</tr>').children('tr:last-child').data('data',portforwardlists).end().find('a').popover();
            });

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function portforwardset() {
    var portforwardlist=[];

    $('.portforwardlist tbody tr').each( function (index,value) {
        portforwardlist.push($(this).data('data'));
    });

    var postData =
    {
        method: 'portforwardset',
        sessionid: sessionID,
		enableportforward: Number($('#portforwardpageenable>label.active').attr('value')),
		portforwardlist: portforwardlist
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

function getdmzset() {
	var postData =
	{
		method: 'getdmzset',
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
					enabledmz: 0,
					exposedip: ''
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#dmzpageenable>label[value="'+data.feed.data.enabledmz+'"]');
			if(data.feed.data.exposedip=='')
				$('#dmzpageexposedip').val('___.___.___.___');
			else
				$('#dmzpageexposedip').val(data.feed.data.exposedip);

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function dmzset(type) {

	var dmzpageexposedip = '';
	if($('#dmzpageexposedip').val()!='___.___.___.___')
		dmzpageexposedip=$('#dmzpageexposedip').val();
    var postData =
    {
        method: 'dmzset',
        sessionid: sessionID,
		enabledmz: Number($('#dmzpageenable>label.active').attr('value')),
		exposedip: dmzpageexposedip
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

function getnatpassthruset() {
	var postData =
	{
		method: 'getnatpassthruset',
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
					pptp: 0,
					l2tp: 0,
					ipsec: 0,
					ssl: 0,
					rtsp: 0,
					h323: 0,
					sip: 0,
					pppoerelay:0
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#natpassthrupagepptp>label[value="'+data.feed.data.pptp+'"]');
			$('#natpassthrupagel2tp>label[value="'+data.feed.data.l2tp+'"]');
			$('#natpassthrupageipsec>label[value="'+data.feed.data.ipsec+'"]');
			$('#natpassthrupagessl>label[value="'+data.feed.data.ssl+'"]');
			$('#natpassthrupagertsp>label[value="'+data.feed.data.rtsp+'"]');
			$('#natpassthrupageh323>label[value="'+data.feed.data.h323+'"]');
			$('#natpassthrupagesip>label[value="'+data.feed.data.sip+'"]');
			$('#natpassthrupagepppoerelay>label[value="'+data.feed.data.pppoerelay+'"]');

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function natpassthruset(type) {

    var postData =
    {
        method: 'natpassthruset',
        sessionid: sessionID,
		pptp: Number($('#natpassthrupagepptp>label.active').attr('value')),
		l2tp: Number($('#natpassthrupagel2tp>label.active').attr('value')),
		ipsec: Number($('#natpassthrupageipsec>label.active').attr('value')),
		ssl: Number($('#natpassthrupagessl>label.active').attr('value')),
		rtsp: Number($('#natpassthrupagertsp>label.active').attr('value')),
		h323: Number($('#natpassthrupageh323>label.active').attr('value')),
		sip: Number($('#natpassthrupagesip>label.active').attr('value')),
		pppoerelay:Number($('#natpassthrupagepppoerelay>label.active').attr('value'))
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

$(document).ready(function() {

	$("a[href='#internetconfigpage']").on('shown.bs.tab', function(e) {
		$('#gotonetindex').parent('li').siblings('li').removeClass('active');
		$('#gotonetindex').parent('li').addClass('active');
    	$('#gotonetpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#gotonetpage').attr('style','display:block;');
       	$('.dhcpuse,.pppoeuse,.staticipuse,.pptpuse,.l2ptuse').attr('style','display:none;');
       	$('.dhcpuse').attr('style','display:block;');
       	getwanset();
	});

    $(document).on('click','#gotonetindex',function (e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#gotonetpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#gotonetpage').attr('style','display:block;');
       	$('#internetnavbar.navbar-toggle:visible').click();
       	$('.dhcpuse,.pppoeuse,.staticipuse,.pptpuse,.l2ptuse').attr('style','display:none;');
       	$('.dhcpuse').attr('style','display:block;');
       	getwanset();
    });
    $(document).on('change','#gotonetpagewantype',function (e) {
       	$('.dhcpuse,.pppoeuse,.staticipuse,.pptpuse,.l2ptuse').attr('style','display:none;');
    	if($(this).val()==0) {
	       	$('.dhcpuse').attr('style','display:block;');
	       	$('#wanmtu').val('1500');
    	}
    	if($(this).val()==1) {
	       	$('.pppoeuse').attr('style','display:block;');
	       	$('#wanmtu').val('1492');
    	}
    	if($(this).val()==2) {
	       	$('.staticipuse').attr('style','display:block;');
	       	$('#wanmtu').val('1500');
    	}
    	if($(this).val()==3) {
	       	$('.pptpuse').attr('style','display:block;');
	       	$('#wanmtu').val('1444');
    	}
    	if($(this).val()==4) {
	       	$('.l2ptuse').attr('style','display:block;');
	       	$('#wanmtu').val('1460');
    	}
       	getwandefault();
    });
   $(document).on('click','#gotonetpagenabledns label',function (e) {
   		if($(this).attr('value')=='0') {
   			$('#gotonetpagedns1,#gotonetpagedns2').parent().parent().show();
   		} else {
   			$('#gotonetpagedns1,#gotonetpagedns2').parent().parent().hide();
   		}
   });
   $(document).on('click','#gotonetpageenable8021xmd5 label',function (e) {
		if($(this).attr('value')=='1' && ($('#gotonetpagewantype').val()=='0' || $('#gotonetpagewantype').val()=='2')) {
			$('#gotonetpageusername').parent('div').parent('div').attr('style','display:none;');
			$('#gotonetpagepassword').parent('div').parent('div').attr('style','display:none;');
		} else {
			$('#gotonetpageusername').parent('div').parent('div').attr('style','display:block;');
			$('#gotonetpagepassword').parent('div').parent('div').attr('style','display:block;');
		}
   });
    $(document).on('click','#gotonetpagedefaultmac',function (e) {
        $('#gotonetpagemac').val($('#gotonetpagemac').data('defaultmac'));
    });
    $(document).on('click','#gotonetpage .apply',function (e) {
        wanset();
    });

    $(document).on('click','#ddnsindex',function (e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#ddnspage').siblings('div.genconfig').attr('style','display:none;');
    	$('#ddnspage').attr('style','display:block;');
       	$('#internetnavbar.navbar-toggle:visible').click();
       	getddnssupport();
       	getddnsset();
    });
    $(document).on('click','#ddnspage .apply',function (e) {
        ddnsset();
    });

    $(document).on('click','#upnpindex',function (e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#upnppage').siblings('div.genconfig').attr('style','display:none;');
    	$('#upnppage').attr('style','display:block;');
       	$('#internetnavbar.navbar-toggle:visible').click();
       	getupnpsset();
    });
    $(document).on('click','#upnppage .apply',function (e) {
        upnpsset();
    });

    $(document).on('click','#porttriggerindex',function (e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#porttriggerpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#porttriggerpage').attr('style','display:block;');
       	$('#internetnavbar.navbar-toggle:visible').click();
       	getporttriggerset_applist();
       	getporttrigerset();
    });
    $(document).on('change','#porttriggerpageapplist',function (e) {
    	var triggerportlist=$('#porttriggerpageapplist option:contains("'+$(this).val()+'")').data('data');
    	if(triggerportlist == undefined) return;
    	$('#porttriggerpagedesc').val(triggerportlist.desc);
    	$('#porttriggerpagetriggerport').val(triggerportlist.triggerport);
    	$('#porttriggerpagetriggerprotocol').val(triggerportlist.triggerprotocol);
    	$('#porttriggerpageincomingport').val(triggerportlist.incomingport);
    	$('#porttriggerpageincomingprotocol').val(triggerportlist.incomingprotocol);
    });
    $(document).on('click','#addporttrigger',function (e) {
    	$('.triggerportadd').attr('style','display:block;');
    	$('.triggerportlist').attr('style','display:none;');
    	$(this).attr('style','display:none;');
    	$('#porttriggerpageapplist').val($('#porttriggerpageapplist option:first-child').val());
    	$('#porttriggerpagedesc').val('');
    	$('#porttriggerpageincomingport').val('');
    	$('#porttriggerpagetriggerport').val('');
    	$('#porttriggerpagetriggerprotocol').val('0');
    	$('#porttriggerpageincomingprotocol').val('0');
    });
    $(document).on('click','#addporttriggerok',function (e) {
        if($('#porttriggerpageincomingport').val()=='') {
            myalert('Please input incoming portrange');
            return;
        }
        if($('#porttriggerpagetriggerport').val()=='') {
            myalert('Please input trigger port');
            return;
        }
        incomingport = $('#porttriggerpageincomingport').val().split(':');
        if(incomingport.length>2) {
            myalert('Incoming port range format should be like 121:123 or 121');
            return;
        }
        for(var i=0;i<incomingport.length;i++) {
            if(!(/^\d+$/.test(incomingport[i]))) {
                myalert('Incoming Port range should be integer');
                return;
            }
        }
        if(incomingport.length==2) {
            if(Number(incomingport[0]>=Number(incomingport[1]))) {
                myalert('Incoming port range from should less than to');
                return;
            }
        }
        if(!(/^\d+$/.test($('#porttriggerpagetriggerport').val()))) {
            myalert('Trigger port range should be integer');
        }
        var addokbool = true;
        $('.triggerportlist tbody tr').each( function (index,value) {
            var triggerportlist = $(this).data('data');
            if(triggerportlist.triggerprotocol == Number($('#porttriggerpagetriggerprotocol').val())) {
            	if(triggerportlist.triggerport == Number($('#porttriggerpagetriggerport').val())) {
                    myalert('Trigger port are overlap');
                    addokbool=false;
                    return;
                }
            }
            if(triggerportlist.incomingprotocol == Number($('#porttriggerpageincomingprotocol').val())) {
                checkincomingports = triggerportlist.incomingport.split(':');
                if(checkincomingports.length == 2 && incomingport.length == 2) {
                    if((Number(incomingport[0]) < Number(checkincomingports[0])) && (Number(incomingport[1]) > Number(checkincomingports[0]))) {
                        myalert('Incoming port range are overlap');
	                    addokbool=false;
                        return;
                    }
                    if((Number(incomingport[0]) < Number(checkincomingports[1])) && (Number(incomingport[1]) > Number(checkincomingports[1]))) {
                        myalert('Incoming port range are overlap');
	                    addokbool=false;
                        return;
                    }
                    if((Number(incomingport[0]) == Number(checkincomingports[0])) || (Number(incomingport[1]) == Number(checkincomingports[0]))) {
                        myalert('Incoming port range are overlap');
	                    addokbool=false;
                        return;
                    }
                    if((Number(incomingport[0]) == Number(checkincomingports[1])) || (Number(incomingport[1]) == Number(checkincomingports[1]))) {
                        myalert('Incoming port range are overlap');
	                    addokbool=false;
                        return;
                    }
                    if((Number(incomingport[0]) > Number(checkincomingports[1])) && (Number(incomingport[1]) < Number(checkincomingports[1]))) {
                        myalert('Incoming port range are overlap');
	                    addokbool=false;
                        return;
                    }
                    if((Number(incomingport[0]) < Number(checkincomingports[1])) && (Number(incomingport[1]) > Number(checkincomingports[1]))) {
                        myalert('Incoming port range are overlap');
	                    addokbool=false;
                        return;
                    }
                }
                if(checkincomingports.length == 1 && incomingport.length == 2) {
                    if((Number(checkincomingports[0])<Number(incomingport[0])) && (Number(checkincomingports[1])>Number(incomingport[0]))) {
                        myalert('Incoming port range are overlap');
	                    addokbool=false;
                        return;
                    }
                    if((Number(checkincomingports[0])==Number(incomingport[0])) || (Number(checkincomingports[1])==Number(incomingport[0]))) {
                        myalert('Incoming port range are overlap');
	                    addokbool=false;
                        return;
                    }
                }
                if(checkincomingports.length == 1 && incomingport.length == 1) {
                    if(Number(checkincomingports[0])==Number(incomingport[0])) {
                        myalert('Incoming port range are overlap');
	                    addokbool=false;
                        return;
                    }
                }
            }
        });
        if(!addokbool) return;
        var triggerportlists = {
            desc:$('#porttriggerpagedesc').val(),
            triggerport:Number($('#porttriggerpagetriggerport').val()),
            triggerprotocol:Number($('#porttriggerpagetriggerprotocol').val()),
            incomingport:$('#porttriggerpageincomingport').val(),
            incomingprotocol:Number($('#porttriggerpageincomingprotocol').val())
        }
    	$('.triggerportadd').attr('style','display:none;');
    	$('.triggerportlist').attr('style','display:block;');
    	$('#addporttrigger').attr('style','display:block;');
        $('.triggerportlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
            '<td>'+triggerportlists.desc+'</td>'+
            '<td>'+triggerportlists.triggerport+'</td>'+
            '<td>'+$('#porttriggerpagetriggerprotocol option[value="'+triggerportlists.triggerprotocol+'"]').text()+'</td>'+
            '<td>'+triggerportlists.incomingport+'</td>'+
            '<td>'+$('#porttriggerpageincomingprotocol option[value="'+triggerportlists.incomingprotocol+'"]').text()+'</td>'+
            '</tr>').children('tr:last-child').data('data',triggerportlists).end().find('a').popover();
    });
    $(document).on('click','#addporttriggercancel',function (e) {
    	$('.triggerportadd').attr('style','display:none;');
    	$('.triggerportlist').attr('style','display:block;');
    	$('#addporttrigger').attr('style','display:block;');
    });
    $(document).on('click','.triggerportlist tbody .trash',function (e) {
        $(this).parents('tr').remove();
    });
    $(document).on('click','#porttriggerpage .apply',function (e) {
        porttrigerset();
    });


    $(document).on('click','#portforwardindex',function (e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#portforwardpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#portforwardpage').attr('style','display:block;');
       	$('#internetnavbar.navbar-toggle:visible').click();
       	getportforwardset();
   		getportforwardset_wellknowlist('game');
		getportforwardset_wellknowlist('server');
    });
    $(document).on('click','#addportforward',function (e) {
    	$('.portfowardadd').attr('style','display:block;');
    	$('.portfowardlist').attr('style','display:none;');
    	$(this).attr('style','display:none;');
    	$('#portforwardlisttypecheckbox>label[value="1"]').trigger('click')
    	$('#portforwardpagegamenamelist').val($('#portforwardpagegamenamelist option:first-child').val());
    	$('#portforwardpageservernamelist').val($('#portforwardpageservernamelist option:first-child').val());
    	$('#portforwardpagename').val('');
    	$('#portforwardpageportrange').val('');
    	$('#portforwardpagelocalip').val('___.___.___.___');
    	$('#portforwardpagelocalport').val('');
    	$('#portforwardpageprotocol').val('0');
    });
    $(document).on('click','#addportforwardok',function (e) {
    	var portforwardpagelocalip = '';
        if($('#portforwardpagename').val()=='') {
            myalert('Please input Name');
            return;
        }
        if($('#portforwardpageportrange').val()=='') {
            myalert('Please input port range');
            return;
        }
        if($('#portforwardpagelocalip').val()=='___.___.___.___') {
            myalert('Please input local ip');
            return;
        } else {
        	portforwardpagelocalip = $('#portforwardpagelocalip').val();
        }
        if($('#portforwardpagelocalport').val()=='') {
            myalert('Please input local port');
            return;
        }
        portrange = $('#portforwardpageportrange').val().split(':');
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
        $('.portfowardlist tbody tr').each( function (index,value) {
            var portforwardlists = $(this).data('data');
            if(portforwardlists.protocol == Number($('#portforwardpageprotocol').val())) {
            	if(portforwardlists.portrange == Number($('#portforwardpageportrange').val())) {
                    myalert('Port range are overlap');
                    addokbool=false;
                    return;
                }
            }
            if(portforwardlists.protocol == Number($('#porttriggerpagePotocol').val())) {
                checkportranges = portforwardlists.portrange.split(':');
                if(checkportranges.length == 2 && portrange.length == 2) {
                    if((Number(portrange[0]) < Number(checkportranges[0])) && (Number(portrange[1]) > Number(checkportranges[0]))) {
                        myalert('Port range are overlap');
	                    addokbool=false;
                        return;
                    }
                    if((Number(portrange[0]) < Number(checkportranges[1])) && (Number(portrange[1]) > Number(checkportranges[1]))) {
                        myalert('Port range are overlap');
	                    addokbool=false;
                        return;
                    }
                    if((Number(portrange[0]) == Number(checkportranges[0])) || (Number(portrange[1]) == Number(checkportranges[0]))) {
                        myalert('Port range are overlap');
	                    addokbool=false;
                        return;
                    }
                    if((Number(portrange[0]) == Number(checkportranges[1])) || (Number(portrange[1]) == Number(checkportranges[1]))) {
                        myalert('Port range are overlap');
	                    addokbool=false;
                        return;
                    }
                    if((Number(portrange[0]) > Number(checkportranges[1])) && (Number(portrange[1]) < Number(checkportranges[1]))) {
                        myalert('Port range are overlap');
	                    addokbool=false;
                        return;
                    }
                    if((Number(portrange[0]) < Number(checkportranges[1])) && (Number(portrange[1]) > Number(checkportranges[1]))) {
                        myalert('Port range are overlap');
	                    addokbool=false;
                        return;
                    }
                }
                if(checkportranges.length == 1 && portrange.length == 2) {
                    if((Number(checkportranges[0])<Number(portrange[0])) && (Number(checkportranges[1])>Number(portrange[0]))) {
                        myalert('Port range are overlap');
	                    addokbool=false;
                        return;
                    }
                    if((Number(checkportranges[0])==Number(portrange[0])) || (Number(checkportranges[1])==Number(portrange[0]))) {
                        myalert('Port range are overlap');
	                    addokbool=false;
                        return;
                    }
                }
                if(checkportranges.length == 1 && portrange.length == 1) {
                    if(Number(checkportranges[0])==Number(portrange[0])) {
                        myalert('Port range are overlap');
	                    addokbool=false;
                        return;
                    }
                }
            }
        });
        if(!addokbool) return;
        var portforwardlists = {
            name:$('#portforwardpagename').val(),
            portrange:Number($('#portforwardpageportrange').val()),
            localport:Number($('#portforwardpagelocalport').val()),
            localip:portforwardpagelocalip,
            protocol:Number($('#portforwardpageprotocol').val())
        }
        $('.portfowardlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
            '<td>'+portforwardlists.name+'</td>'+
            '<td>'+portforwardlists.portrange+'</td>'+
            '<td>'+portforwardlists.localip+'</td>'+
            '<td>'+portforwardlists.localport+'</td>'+
            '<td>'+$('#portforwardpageprotocol option[value="'+portforwardlists.protocol+'"]').text()+'</td>'+
            '</tr>').children('tr:last-child').data('data',portforwardlists).end().find('a').popover();
    	$('.portfowardadd').attr('style','display:none;');
    	$('.portfowardlist').attr('style','display:block;');
    	$('#addportforward').attr('style','display:block;');
    });
    $(document).on('click','#addportforwardcancel',function (e) {
    	$('.portfowardadd').attr('style','display:none;');
    	$('.portfowardlist').attr('style','display:block;');
    	$('#addportforward').attr('style','display:block;');
    });
    $(document).on('click','#portforwardlisttypecheckbox label',function (e) {
		$('.portforwardgamelisttype,.portforwardserverlisttype').hide();
 		if($(this).attr('value')=='1') {
 			$('.portforwardgamelisttype').show();
		} else {
 			$('.portforwardserverlisttype').show();
		}
    });
    $(document).on('change','#portforwardpagegamenamelist,#portforwardpageservernamelist',function (e) {
    	var portforwardlist =$(this).find('option:contains("'+$(this).val()+'")').data('data');
    	if(portforwardlist == undefined) return;
    	$('#portforwardpagename').val(portforwardlist.name);
    	$('#portforwardpageportrange').val(portforwardlist.portrange);
    	$('#portforwardpagelocalport').val(portforwardlist.localport);
    	$('#portforwardpageprotocol').val(portforwardlist.protocol);
    });
    $(document).on('click','.portfowardlist tbody .trash',function (e) {
        $(this).parents('tr').remove();
    });
    $(document).on('click','#portforwardpage .apply',function (e) {
        portforwardset();
    });

    $(document).on('click','#dmzindex',function (e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#dmzpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#dmzpage').attr('style','display:block;');
       	$('#internetnavbar.navbar-toggle:visible').click();
       	getdmzset();
    });
    $(document).on('click','#dmzpage .apply',function (e) {
        dmzset();
    });

    $(document).on('click','#natpassthruindex',function (e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#natpassthrupage').siblings('div.genconfig').attr('style','display:none;');
    	$('#natpassthrupage').attr('style','display:block;');
       	$('#internetnavbar.navbar-toggle:visible').click();
       	getnatpassthruset();
    });
    $(document).on('click','#natpassthrupage .apply',function (e) {
        natpassthruset();
    });

});
