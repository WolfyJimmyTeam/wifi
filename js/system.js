function getfirmwareset() {
	var postData =
	{
		method: 'getfirmwareset',
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
					productid: '0000000001120',
					hardwarever: 'V1.0 REV:1',
					firmwarever: '0.04.005.1786 (2016-03-29 23:07 +0800)'
				}
			}
		};
		if (data.stat == 'success') {
			$('#firmwarepageproductid').text(data.feed.data.productid);
			$('#firmwarepagehardwarever').text(data.feed.data.hardwarever);
			$('#firmwarepagefirmwarever').text(data.feed.data.firmwarever);
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function firmwareset(type) {

    var postData =
    {
    	url: serverURL,
        method: 'firmwareset',
        sessionid: sessionID,
        filename: $('#firmwarepageuploadfile').val()
    };

	startCountDown(allwaittime.firmwareupload);
	// upload(postData); // Do upload without following code that is for demo
	// return;
    var data =
    {
        stat: 'success',
        feed:
        {
            msg: 'Success',
        }
    };
    if (data.stat == 'success') {
    } else {
    	stopCountDown();
        myalert(data.feed.msg);
    }
}

function downloadconfig() {
	var postData =
	{
		url: serverURL,
		method: 'downloadconfig',
		sessionid: sessionID

	};
	// download_by_post(postData); // Do download without following code that is for demo
	// return;
	var data =
	{
		stat: 'success',
		feed:
		{
			msg: 'Success',
		}
	};
	if (data.stat == 'success') {
		myalert('download success!');
	} else {
		myalert(data.feed.msg);
	}
}

function restoredefault(type) {

    var postData =
    {
        method: 'restoredefault',
        sessionid: sessionID,
    };

 	startCountDown(allwaittime.configupload);
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
        } else {
        	stopCountDown();
            myalert(data.feed.msg);
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function uploadconfig(type) {

    var postData =
    {
        method: 'uploadconfig',
        sessionid: sessionID,
    };

 	startCountDown(allwaittime.configrestore);
	// upload(postData); // Do upload without following code that is for demo
	// return;
    var data =
    {
        stat: 'success',
        feed:
        {
            msg: 'Success',
        }
    };
    if (data.stat == 'success') {
    } else {
    	stopCountDown();
        myalert(data.feed.msg);
    }
}

function gettimeset() {
	var postData =
	{
		method: 'gettimeset',
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
					auto: 0,
					time: '',
					timezone: 'CKT10',
					timeserver:[{
						server: '0.openwrt.pool.ntp.org'
					},{
						server: '1.openwrt.pool.ntp.org'
					}]
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#timepageauto>label[value="'+data.feed.data.auto+'"]').trigger('click');
			$('#timepagetime').val(data.feed.data.time);
			$('#timepagetimezone').val(data.feed.data.timezone);
			$('.ntpserverlist tbody').empty();
            $.each(data.feed.data.timeserver,function (index,timeservers) {
                $('.ntpserverlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                    '<td>'+timeservers.server+'</td>'+
                    '</tr>').children('tr:last-child').data('data',timeservers).end().find('a').popover();
            });

			setTimeout(function(){
				updatetrigger=true;
			},0)
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function timeset(type) {

    var timeserver=[];

    $('.ntpserverlist tbody tr').each( function (index,value) {
        timeserver.push($(this).data('data'));
    });

    var postData =
    {
        method: 'timeset',
        sessionid: sessionID,
		auto: Number($('#timepageauto>label.active').attr('value')),
		time: $('#timepagetime').val(),
		timezone: $('#timepagetimezone').val(),
        timeserver: timeserver
    };
     // $.post(serverURL, postData, function(data, textStatus, jqXHR) { /* upload ajax called */
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

function getserviceset() {
	var postData =
	{
		method: 'getserviceset',
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
					ssh: 0,
					https: 0,
					httpport: 80,
					httpsport: 443,
					webaccessfromwan: 0
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#servicepagessh>label[value="'+data.feed.data.ssh+'"]').trigger('click')
			$('#servicepagehttps>label[value="'+data.feed.data.https+'"]').trigger('click')
			$('#servicepagewebaccessfromwan>label[value="'+data.feed.data.webaccessfromwan+'"]').trigger('click')
			$('#servicepagehttpport').val(data.feed.data.httpport);
			$('#servicepagehttpsport').val(data.feed.data.httpsport);

			setTimeout(function(){
				updatetrigger=true;
			},0)
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function serviceset(type) {

    var postData =
    {
        method: 'serviceset',
        sessionid: sessionID,
		ssh: Number($('#servicepagessh>label.active').attr('value')),
		https: Number($('#servicepagehttps>label.active').attr('value')),
		httpport: Number($('#servicepagehttpport').val()),
		httpsport: Number($('#servicepagehttpsport').val()),
		webaccessfromwan: Number($('#servicepagewebaccessfromwan>label.active').attr('value'))
    };

    // $.post(serverURL, postData, function(data, textStatus, jqXHR) { /* upload ajax called */
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

function getnotificationset() {
	var postData =
	{
		method: 'getnotificationset',
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
					enable: 0,
					smtpserver: '',
					sender: '',
					username:'',
					password:'',
					notifytype:[{
						type: 'Login',
						onoff: 0
					},{
						type: 'Channel Changes',
						onoff: 1
					},{
						type: 'WAN down notification',
						onoff: 1
					}],
					subject:'Event From Askey WIFIAP',
					emails:[{
						recv:'wolfy_su@askey.com.tw'
					}]
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#notificationpageenable>label[value="'+data.feed.data.enable+'"]').trigger('click')
			$('#notificationpagesmtpserver').val(data.feed.data.smtpserver);
			$('#notificationpagesender').val(data.feed.data.sender);
			$('#notificationpageusername').val(data.feed.data.username);
			$('#notificationpagepassword').val(data.feed.data.password);
			$('#notificationpagesubject').val(data.feed.data.subject);
			$('#notificationpageeventselectlist').empty();
			$.each(data.feed.data.notifytype, function (index,notifytype){
				$('#notificationpageeventselectlist').append('<li><a href="#" class="small" data-value="'+notifytype.type+'" tabIndex="-1"><input type="checkbox"/>&nbsp;'+notifytype.type+'</a></li>');
			});
			$('.emailrecvlist tbody').empty();
            $.each(data.feed.data.emails,function (index,emails) {
                $('.emailrecvlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                    '<td>'+emails.recv+'</td>'+
                    '</tr>').children('tr:last-child').data('data',emails).end().find('a').popover();
            });

			setTimeout(function(){
				updatetrigger=true;
			},0)
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function notificationset(type) {

	var notifytype=[];

    var emails=[];

    $('#notificationpageeventselectlist li').each( function (index,value) {
    	var notify=null;
    	var inputdatavalue = $(this).find('a').attr('data-value');
    	if($(this).find('a input').prop('checked')) {
    		notify={type:inputdatavalue,onoff:1};
    	} else {
    		notify={type:inputdatavalue,onoff:0};
    	}
    	notifytype.push(notify);
	});

    $('.emailrecvlist tbody tr').each( function (index,value) {
        emails.push($(this).data('data'));
    });

    var postData =
    {
        method: 'notificationset',
        sessionid: sessionID,
		enable: Number($('#notificationpageenable>label.active').attr('value')),
		smtpserver: $('#notificationpagesmtpserver').val(),
		sender: $('#notificationpagesender').val(),
		username:$('#notificationpageusername').val(),
		password:$('#notificationpagepassword').val(),
		notifytype:notifytype,
		subject:$('#notificationpagesubject').val(),
		emails:emails
    };
    console.log(postData);
     // $.post(serverURL, postData, function(data, textStatus, jqXHR) { /* upload ajax called */
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

function getlogset() {
	var postData =
	{
		method: 'getlogset',
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
					logserver: '',
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#logstatuspagelogserver').val(data.feed.data.logserver);

			setTimeout(function(){
				updatetrigger=true;
			},0)
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function logset(type) {

    var postData =
    {
        method: 'logset',
        sessionid: sessionID,
		logserver: $('#logstatuspagelogserver').val()
    };

    // $.post(serverURL, postData, function(data, textStatus, jqXHR) { /* upload ajax called */
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

function getstatusset() {
	var postData =
	{
		method: 'getstatusset',
		sessionid: sessionID,
		type: $('#logstatuspagestatustype').val()
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
					statustext: $('#logstatuspagestatustype').val()+'\n'+
					'Dec 31 19:00:58 kernel: [   58.937144] siwfreq\n'+
					'Dec 31 19:00:58 kernel: [   58.938238] Set freq vap 0 stop send + d8210000\n'+
					'Dec 31 19:00:58 kernel: [   58.942830] Set freq vap 0 stop send -d8210000\n'+
					'Dec 31 19:00:58 kernel: [   58.977507] Set wait done --d8210000\n'
				}
			}
		};
		if (data.stat == 'success') {
			$('#logstatuspagestatustext').text(data.feed.data.statustext);
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getmiscset() {
	var postData =
	{
		method: 'getmiscset',
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
					autologout: 0,
					timeout: 0,
					rebootschedule: 0,
					rebootscheduleweek: [1, 3, 5],
					rebootscheduletime: '16:22:30'
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#miscpageautologout>label[value="'+data.feed.data.autologout+'"]').trigger('click');
			$('#miscpagetimeout').val(data.feed.data.timeout);
			$('#rebootschedule>label[value="'+data.feed.data.rebootschedule+'"]').trigger('click');
			if (data.feed.data.rebootschedule==0) {
				$('#rebootscheduleweek>label').removeClass('active');
				$.each(data.feed.data.rebootscheduleweek, function(index, val) {
					$('#rebootscheduleweek>label[value="'+val+'"]').addClass('active');
				});
				$('#rebootscheduletime').val(data.feed.data.rebootscheduletime);
			}

			setTimeout(function(){
				updatetrigger=true;
			},0)
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function miscset(type) {

    var postData =
    {
        method: 'miscset',
        sessionid: sessionID,
		autologout: Number($('#timepageauto>label.active').attr('value')),
		timeout:Number($('#miscpagetimeout').val())
    };

    // $.post(serverURL, postData, function(data, textStatus, jqXHR) { /* upload ajax called */
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

function switchmoderouteset() {
	var postData =
	{
		method: 'switchmoderouteset',
		sessionid: sessionID,
		ssid: '',
		type: $('#connectiontype option:selected').text(),
		hostname: $('#hostname').val(),
		mac: ($('#netmask').val().indexOf("_") >= 0) ? 'None' : $('#netmask').val(),
		manualdns: '',
		dns1: ($('#dns1').val().indexOf("_") >= 0) ? 'None' : $('#dns1').val(),
		dns2: ($('#dns2').val().indexOf("_") >= 0) ? 'None' : $('#dns2').val(),
		vpnusername: $('#vpnusername').val(),
		vpnpassword: $('#vpnpassword').val(),
		ip: ($('#ipaddress').val().indexOf("_") >= 0) ? 'None' : $('#ipaddress').val(),
		netmask: ($('#netmask').val().indexOf("_") >= 0) ? 'None' : $('#netmask').val(),
		gateway: ($('#gateway').val().indexOf("_") >= 0) ? 'None' : $('#gateway').val(),
		ipautoassign: '',
		vpnserver: ($('#vpnserver').val().indexOf("_") >= 0) ? 'None' : $('#vpnserver').val(),
		'24gssid': $('#24gssid').val(),
		'24gkey': '',
		'5gssid': $('#5gssid').val(),
		'5gkey': '',
		lanip: $('#lanip').val()
	};
	startCountDown(allwaittime.switchmoderoute);
	// $.post(serverURL, postData, function(data, textStatus, jqXHR) {
		var data =
		{
			stat: 'success',
			feed:
			{
				msg: 'Success'
			}
		};
		if (data.stat == 'success') {
			console.log(postData);
			$('#modal-wirelessrouter').modal('hide');
		} else {
			stopCountDown();
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function switchmodeset() {
	var postData = {};
	switch ($('#modeselect>label.active').attr('id')) {
		case 'wirelessbridge':
			postData =
			{
				method: 'switchmodeset',
				sessionid: sessionID,
				mode: $('#modeselect>label.active').attr('id'),
				ip: ($('#modal-wirelessbridge .ip').val().indexOf("_") >= 0) ? 'None' : $('#modal-wirelessbridge .ip').val(),
				netmask: ($('#modal-wirelessbridge .netmask').val().indexOf("_") >= 0) ? 'None' : $('#modal-wirelessbridge .netmask').val(),
				gateway: ($('#modal-wirelessbridge .gateway').val().indexOf("_") >= 0) ? 'None' : $('#modal-wirelessbridge .gateway').val(),
				autodns: $('#modal-wirelessbridge .autodns>label.active').attr('value'),
				dns1: ($('#modal-wirelessbridge .dns1').val().indexOf("_") >= 0) ? 'None' : $('#modal-wirelessbridge .dns1').val(),
				dns2: ($('#modal-wirelessbridge .dns2').val().indexOf("_") >= 0) ? 'None' : $('#modal-wirelessbridge .dns2').val()
			};
			break;
		case 'mediabridge':
			postData =
			{
				method: 'switchmodeset',
				sessionid: sessionID,
				mode: $('#modeselect>label.active').attr('id'),
				ip: 'None',
				netmask: 'None',
				gateway: 'None',
				autodns: '',
				dns1: 'None',
				dns2: 'None'
			};
			break;
		case 'accesspoint':
			postData =
			{
				method: 'switchmodeset',
				sessionid: sessionID,
				mode: $('#modeselect>label.active').attr('id'),
				ip: ($('#modal-accesspoint .ip').val().indexOf("_") >= 0) ? 'None' : $('#modal-accesspoint .ip').val(),
				netmask: ($('#modal-accesspoint .netmask').val().indexOf("_") >= 0) ? 'None' : $('#modal-accesspoint .netmask').val(),
				gateway: ($('#modal-accesspoint .gateway').val().indexOf("_") >= 0) ? 'None' : $('#modal-accesspoint .gateway').val(),
				autodns: $('#modal-accesspoint .autodns>label.active').attr('value'),
				dns1: ($('#modal-accesspoint .dns1').val().indexOf("_") >= 0) ? 'None' : $('#modal-accesspoint .dns1').val(),
				dns2: ($('#modal-accesspoint .dns2').val().indexOf("_") >= 0) ? 'None' : $('#modal-accesspoint .dns2').val()
			};
			break;
	}
	startCountDown(allwaittime.switchmoderoute);
	// $.post(serverURL, postData, function(data, textStatus, jqXHR) {
		var data =
		{
			stat: 'success',
			feed:
			{
				msg: 'Success'
			}
		};
		if (data.stat == 'success') {
			console.log(postData);
			$('#modal-'+$('#modeselect>label.active').attr('id')).modal('hide');
		} else {
			stopCountDown();
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function getwirelesslist() {
	var postData =
	{
		method: 'getwirelesslist',
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
					wirelesslist:
					[
						{
							name: 'wifi1',
							mac: '12:23:34:45:67:01',
							security: 'WAP2',
							bandwidth: '5G',
							radiopercent: 36
						},
						{
							name: 'wifi2',
							mac: '12:23:34:45:67:02',
							security: 'WAP2',
							bandwidth: '2.4G',
							radiopercent: 50
						},
						{
							name: 'wifi3',
							mac: '12:23:34:45:67:03',
							security: 'WAP2',
							bandwidth: '5G',
							radiopercent: 80
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			var target = $('#modeselect>label.active').attr('id');
			$('#modal-'+target+' .list>tbody').empty();
			$.each(data.feed.data.wirelesslist, function(index, val) {
				$('#modal-'+target+' .list>tbody').append(
					'<tr>'+
						'<td>'+
							'<div class="btn-group">'+
								'<button type="button" class="btn btn-default btn-sm connect" title="connect"><span class="fa fa-plug"></span></button>'+
							'</div>'+
						'</td>'+
						'<td>'+val.name+'</td>'+
						'<td>'+val.mac+'</td>'+
						'<td>'+val.security+'</td>'+
						'<td>'+val.bandwidth+'</td>'+
						'<td>'+
							'<div class="progress">'+
								'<div class="progress-bar progress-bar-danger" style="width: '+val.radiopercent+'%">'+
									val.radiopercent+'%'+
								'</div>'+
							'</div>'+
						'</td>'+
					'</tr>'
				).children('tr:last-child').data('data', val);
			});
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function connecttowireless() {
	var postData = {};
	var target = $('#modeselect>label.active').attr('id');
	if ($('#modal-'+target+' .wirelessConnect').is(':visible')) {
		if ($('#modal-'+target+' .pw').val()=='') {
			enterFail_shake('#modal-'+target+'', '.pwok', 'btn-dagner', 'btn-warning', 'Connect', 'Please input password.');
			return;
		}
		var domData = $('#modal-'+target+' .pw').data('data');
		postData =
		{
			method: 'connecttowireless',
			sessionid: sessionID,
			name: domData.name,
			securitymode: '',
			security: '',
			keyindex: '',
			key1: '',
			key2: '',
			key3: '',
			key4: ''
		}
	}
	if ($('#modal-'+target+' .wirelessManually').is(':visible')) {
		postData =
		{
			method: 'connecttowireless',
			sessionid: sessionID,
			name: $('#modal-'+target+' .wirelessManually .name').val(),
			securitymode: $('#modal-'+target+' .wirelessManually .securitymode').val(),
			security: $('#modal-'+target+' .wirelessManually .security').val(),
			keyindex: $('#modal-'+target+' .wirelessManually .keyindex').val(),
			key1: $('#modal-'+target+' .wirelessManually .key1').val(),
			key2: $('#modal-'+target+' .wirelessManually .key2').val(),
			key3: $('#modal-'+target+' .wirelessManually .key3').val(),
			key4: $('#modal-'+target+' .wirelessManually .key4').val()
		}
	}
	// $.post(serverURL, postData, function(data, textStatus, jqXHR) {
		var data =
		{
			stat: 'success',
			feed:
			{
				msg: 'Success'
			}
		};
		if (data.stat == 'success') {
			console.log(postData);
			if ($('#modal-wirelessbridge').is(':visible')) {
				$('#modal-wirelessbridge .wirelessConnect, #modal-wirelessbridge .wirelessManually').slideUp();
				$('#modal-wirelessbridge .wirelessAP').slideDown();
			}
			if ($('#modal-mediabridge').is(':visible')) {
				switchmodeset();
			}
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}


$(document).ready(function() {
	$("a[href='#systemconfigpage']").on('shown.bs.tab', function(e) {
		$('#firmwareindex').parent('li').siblings('li').removeClass('active');
		$('#firmwareindex').parent('li').addClass('active');
    	$('#firmwarepage').siblings('div.genconfig').attr('style','display:none;');
    	$('#firmwarepage').attr('style','display:block;');
    	$('#firmwarepageuploadfile').filestyle('clear');
    	getfirmwareset();
	});

   $(document).on('click','#firmwareindex',function (e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#firmwarepage').siblings('div.genconfig').attr('style','display:none;');
    	$('#firmwarepage').attr('style','display:block;');
       	$('#systemnavbar.navbar-toggle:visible').click();
    	$('#firmwarepageuploadfile').filestyle('clear');
       	getfirmwareset();
    });
    $(document).on('change','#firmwarepageuploadfile',function (e) {
    	if($(this).val()!='') {
			$.confirm({
				text: 'Do you want to upgrade firmware? Yes/No',
				title: '<span class="glyphicon glyphicon-alert"></span> Message Content',
				post: true,
				confirmButton: '<span class="glyphicon glyphicon-ok"></span> Yes',
				confirmButtonClass: 'btn-danger',
				cancelButton: 'No',
				confirm: function(button) {
					firmwareset();
				},
				cancel: function(button) {
					$('#firmwarepageuploadfile').filestyle('clear');
				}
			});
    	}
	});

    $(document).on('click','#configurationindex',function (e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#configurationpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#configurationpage').attr('style','display:block;');
       	$('#systemnavbar.navbar-toggle:visible').click();
    	$('#configurationpageupload').filestyle('clear');
    });
    $(document).on('click','#configurationpagedownload',function (e) {
    	downloadconfig();
    });
    $(document).on('click','#configurationpagerestore',function (e) {
		$.confirm({
			text: 'Do you want to reset system default? Yes/No',
			title: '<span class="glyphicon glyphicon-alert"></span> Message Content',
			post: true,
			confirmButton: '<span class="glyphicon glyphicon-ok"></span> Yes',
			confirmButtonClass: 'btn-danger',
			cancelButton: 'No',
			confirm: function(button) {
		    	restoredefault();
			},
			cancel: function(button) {
				$('#configurationpageupload').filestyle('clear');
			}
		});
    });
    $(document).on('change','#configurationpageupload',function (e) {
    	if($(this).val()!='') {
			$.confirm({
				text: 'Do you want to upload config file? Yes/No',
				title: '<span class="glyphicon glyphicon-alert"></span> Message Content',
				post: true,
				confirmButton: '<span class="glyphicon glyphicon-ok"></span> Yes',
				confirmButtonClass: 'btn-danger',
				cancelButton: 'No',
				confirm: function(button) {
					uploadconfig();
				},
				cancel: function(button) {
					$('#configurationpageupload').filestyle('clear');
				}
			});
    	}
	});

    $(document).on('click','#operationmodeindex',function (e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#operationmodepage').siblings('div.genconfig').attr('style','display:none;');
    	$('#operationmodepage').attr('style','display:block;');
			updatetrigger=false;

    	$('#modeselect #wirelessrouter').click();
       	$('#systemnavbar.navbar-toggle:visible').click();

			setTimeout(function(){
				updatetrigger=true;
			},0)
    });
    $(document).on('click','#modeselect label',function (e) {
    	if($(this).attr('id') == "wirelessrouter")
    		$('#selectmodedesc').text('In Wireless Router mode, the router connects to the Internet via PPPoE, DHCP, PPTP, L2TP or Static IP and shares the wireless network to LAN clients or devices. In this mode, NAT, firewall, and DHCP server are enabled by default. UPnP and Dynamic DNS are supported for SOHO and home users. Select this mode if you are a first-time user or you are not currently using any wired/wireless routers.');
    	if($(this).attr('id') == "wirelessbridge")
    		$('#selectmodedesc').text('Bridge (or named WDS - Wireless Distribution System) function allows your device to connect to an access point wirelessly. WDS may also be considered a repeater mode. But with this method, the devices connected to the access point will only be able to use half of the access point\'s original wireless speed. To enable WDS to extend the wireless signal, please follow these steps: The function only support [Open System/NONE, Open System/WEP] security authentication method. Select [WDS Only] or [Hybrid] mode and add MAC address of APs in Remote AP List. Ensure that this wireless router and the AP you want to connect to use the same channel. Key in the remote AP mac in the remote AP list and open the remote AP\'s WDS management interface, key in the this router\'s MAC address');
    	if($(this).attr('id') == "accesspoint")
    		$('#selectmodedesc').text('In Access Point (AP) mode, your device connects to a Wireless Router through an Ethernet cable to extend the wireless signal coverage to other network clients. In this mode, the firewall, IP sharing, and NAT functions are disabled by default.');
    	if($(this).attr('id') == "mediabridge")
    		$('#selectmodedesc').text('Media Bridge mode provides a fast 802.11ac Wi-Fi connection for multiple media devices such as computer, Smart TV, game console, DVR, or media player simultaneously, via Ethernet cable. To set up the Media Bridge mode, you need two devices: one configured as a Media Bridge and the other as a router. In Media Bridge mode, only wireless devices connect to the AP. Client devices need to be connected to the Media Bridge with a network cable.');

    });

	// operation mode
	$('#operationmodepage .apply').click(function() {
		if ($('#modeselect>label').is('#wirelessbridge')) {
			getwirelesslist();
		}
		$('#modal-wirelessbridge .wirelessAP, #modal-wirelessbridge .wirelessConnect, #modal-wirelessbridge .wirelessManually, #modal-wirelessbridge .shift-security, #modal-mediabridge .wirelessConnect, #modal-mediabridge .wirelessManually, #modal-mediabridge .shift-security').hide();

		$('#modal-wirelessbridge .shift-dns, #modal-accesspoint .shift-dns').hide();
		$('#modal-wirelessbridge .shift-dns input, #modal-accesspoint .shift-dns input').val('___.___.___.___');
		$('#modal-wirelessbridge .autodns>label[value="1"], #modal-accesspoint .autodns>label[value="1"]').addClass('active').siblings().removeClass('active');

		$('#modal-wirelessbridge .wirelessList, #modal-mediabridge .wirelessList').show();
		$('#modal-'+$('#modeselect>label.active').attr('id')).modal('show');
	});
	$('#modal-wirelessrouter .apply, #modal-accesspoint .apply, #modal-wirelessbridge .apply, #modal-mediabridge .pwok, #modal-mediabridge .manuallyok').click(function() {
		var mode = $('#modeselect>label.active').attr('id');
		if (mode!='mediabridge') {
			var title = '';
			function shake() {
				enterFail_shake('#modal-'+mode, '#modal-'+mode+' .apply', 'btn-default', 'btn-danger', 'Apply', 'Please input '+title+'.');
			}
			if ($('#modal-'+mode).find('.ip').val()=='___.___.___.___') {
				$('#modal-'+mode).find('.ip').select();
				title = 'IP';
				shake();
				return;
			}
			if ($('#modal-'+mode).find('.netmask').val()=='___.___.___.___') {
				$('#modal-'+mode).find('.netmask').select();
				title = 'Mask';
				shake();
				return;
			}
			if ($('#modal-'+mode).find('.gateway').val()=='___.___.___.___') {
				$('#modal-'+mode).find('.gateway').select();
				title = 'Gateway';
				shake();
				return;
			}
			if ($('#modal-'+mode).find('.autodns>label.active').attr('value')=='0' && $('#modal-'+mode).find('.dns1').val()=='___.___.___.___') {
				$('#modal-'+mode).find('.dns1').select();
				title = 'DNS1';
				shake();
				return;
			}
			if ($('#modal-'+mode).find('.autodns>label.active').attr('value')=='0' && $('#modal-'+mode).find('.dns2').val()=='___.___.___.___') {
				$('#modal-'+mode).find('.dns2').select();
				title = 'DNS2';
				shake();
				return;
			}
		}
		var title = $(this).parents('.modal').find('.modal-title').text();
		$.confirm({
			text: 'Do you want to reset <b>'+title+'</b>? Yes/No',
			title: '<span class="glyphicon glyphicon-alert"></span> Message Content',
			post: true,
			confirmButton: '<span class="glyphicon glyphicon-ok"></span> Yes',
			confirmButtonClass: 'btn-danger',
			cancelButton: 'No',
			confirm: function(button) {
				if ($('#modal-wirelessrouter').is(':visible')) {
					switchmoderouteset();
				} else {
					switchmodeset();
				}
			}
		});
	});

	$('#modal-wirelessbridge .list, #modal-mediabridge .list').on('click', '.connect', function(event) {
		event.preventDefault();
		$('#modal-wirelessbridge .wirelessList, #modal-mediabridge .wirelessList').slideUp();
		$('#modal-wirelessbridge .wirelessConnect, #modal-mediabridge .wirelessConnect')
			.slideDown()
			.find('.pw')
			.data('data', $(this).parents('tr').data('data'))
			.focus();
	});
	$('#modal-wirelessbridge .pwok, #modal-wirelessbridge .manuallyok').click(function() {
		connecttowireless();
	});
	$('#modal-wirelessbridge .setcancel, #modal-mediabridge .setcancel').click(function() {
		$('#modal-wirelessbridge .wirelessConnect, #modal-wirelessbridge .wirelessManually, #modal-mediabridge .wirelessConnect, #modal-mediabridge .wirelessManually').slideUp();
		$('#modal-wirelessbridge .wirelessList, #modal-mediabridge .wirelessList').slideDown();
	});
	$('#modal-wirelessbridge .manually, #modal-mediabridge .manually').click(function() {
		$('#modal-wirelessbridge .wirelessList, #modal-mediabridge .wirelessList').slideUp();
		$('#modal-wirelessbridge .wirelessManually, #modal-mediabridge .wirelessManually').slideDown();
	});

	$('#modal-accesspoint .autodns>label, #modal-wirelessbridge .autodns>label').click(function() {
		switch ($(this).attr('value')) {
			case '1':
				$('#modal-accesspoint .shift-dns, #modal-wirelessbridge .shift-dns').slideUp();
				break;
			case '0':
				$('#modal-accesspoint .shift-dns, #modal-wirelessbridge .shift-dns').slideDown();
				break;
		}
	});

	$('#modal-wirelessbridge .securitymode, #modal-mediabridge .securitymode').change(function() {
		switch ($(this).val()) {
			case '0':
				$('#modal-wirelessbridge .shift-key, #modal-mediabridge .shift-key').slideUp();
				$('#modal-wirelessbridge .shift-security, #modal-mediabridge .shift-security').slideDown();
				$('#modal-wirelessbridge .security, #modal-mediabridge .security').empty();
				$('#modal-wirelessbridge .security, #modal-mediabridge .security').append(
					'<option value="0" selected>None</option>' +
					'<option value="1">WEP-64bits</option>' +
					'<option value="2">WEP-128bits</option>'
				);
				$('#modal-wirelessbridge .shift-key, #modal-mediabridge .shift-key').slideUp();
				break;
			case '1':
				$('#modal-wirelessbridge .shift-security, #modal-wirelessbridge .shift-key, #modal-mediabridge .shift-security, #modal-mediabridge .shift-key').slideDown();
				$('#modal-wirelessbridge .security, #modal-mediabridge .security').empty();
				$('#modal-wirelessbridge .security, #modal-mediabridge .security').append(
					'<option value="1" selected>WEP-64bits</option>' +
					'<option value="2">WEP-128bits</option>'
				);
				$('#modal-wirelessbridge .shift-key, #modal-mediabridge .shift-key').slideDown();
				break;
			default:
				$('#modal-wirelessbridge .shift-security, #modal-wirelessbridge .shift-key, #modal-mediabridge .shift-security, #modal-mediabridge .shift-key').slideUp();
				break;
		}
	});
	$('#modal-wirelessbridge .keyindex, #modal-mediabridge .keyindex').change(function() {
		$('#modal-wirelessbridge .shift-key input, #modal-mediabridge .shift-key input').prop('disabled', true);
		$('#modal-wirelessbridge .key'+$(this).val()).prop('disabled', false);
		$('#modal-mediabridge .key'+$(this).val()).prop('disabled', false);
	});
	$('#modal-wirelessbridge .security, #modal-mediabridge .security').change(function() {
		if ($(this).val() == '0') {
			$('#modal-wirelessbridge .shift-key, #modal-mediabridge .shift-key').slideUp();
		} else {
			$('#modal-wirelessbridge .shift-key, #modal-mediabridge .shift-key').slideDown();
		}
	});

    $(document).on('click','#timeindex',function (e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#timepage').siblings('div.genconfig').attr('style','display:none;');
    	$('#timepage').attr('style','display:block;');
       	$('#systemnavbar.navbar-toggle:visible').click();
       	if($('#timepageauto>label.active').attr('value')=='1') {
       		$('#timepagetime').data("DateTimePicker").disable();
       	} else {
       		$('#timepagetime').data("DateTimePicker").enable();
       	}
       	gettimeset();
    });

    $(document).on('click','#timepageauto label',function (e) {
		if($(this).attr('value')=='1') {
			$('#timepagetime').data("DateTimePicker").disable();
		} else {
			$('#timepagetime').data("DateTimePicker").enable();
		}

    });
    $(document).on('click','#addntpserver',function (e) {
    	$('.ntpserveradd').attr('style','display:block;');
    	$('.ntpserverlist').attr('style','display:none;');
    	$(this).attr('style','display:none;');
    	$('#timepageserver').val('');
    });
    $(document).on('click','#addntpserverok',function (e) {
        var addokbool = true;
        if($('#timepageserver').val()=='') {
        	myalert('Please input time server');
        	return;
        }
        $('.ntpserverlist tbody tr').each( function (index,value) {
            var timeserver = $(this).data('data');
            if(timeserver.server == $('#timepageserver').val()) {
                myalert('The time server was existed!');
                addokbool=false;
                return;
            }
        });
        if(!addokbool) return;
        var timeserver = {
            server:$('#timepageserver').val()
        }
        $('.ntpserverlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
            '<td>'+timeserver.server+'</td>'+
            '</tr>').children('tr:last-child').data('data',timeserver).end().find('a').popover();
    	$('.ntpserveradd').attr('style','display:none;');
    	$('.ntpserverlist').attr('style','display:block;');
    	$('#addntpserver').attr('style','display:block;');
    });
    $(document).on('click','#addntpservercancel',function (e) {
    	$('.ntpserveradd').attr('style','display:none;');
    	$('.ntpserverlist').attr('style','display:block;');
    	$('#addntpserver').attr('style','display:block;');
    });
    $(document).on('click','.ntpserverlist tbody .trash',function (e) {
        $(this).parents('tr').remove();
    });
    $(document).on('click','#timepage .apply',function (e) {
    	if($('#timepageauto>label.active').attr('value')=='0' && $('#timepagetime').val()=='') {
    		myalert('Please select and set the datetime');
    		return;
    	}
        timeset();
    });

   $(document).on('click','#serviceindex',function (e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#servicepage').siblings('div.genconfig').attr('style','display:none;');
    	$('#servicepage').attr('style','display:block;');
       	$('#systemnavbar.navbar-toggle:visible').click();
       	getserviceset();
    });
    $(document).on('click','#servicepage .apply',function (e) {
        serviceset();
    });

   $(document).on('click','#notificationindex',function (e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#notificationpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#notificationpage').attr('style','display:block;');
       	$('#systemnavbar.navbar-toggle:visible').click();
       	getnotificationset();
    });
	$( '#eventselectlist a' ).on( 'click', function( event ) {
//		var options = [];
	   	var $target = $( event.currentTarget ),
	       val = $target.attr( 'data-value' ),
	       $inp = $target.find( 'input' ),
	       idx;
//	   if ( ( idx = options.indexOf( val ) ) > -1 ) {
//	      options.splice( idx, 1 );
	      setTimeout( function() { $inp.prop( 'checked', !$inp.prop('checked') ) }, 0);
//	   } else {
//	      options.push( val );
//	      setTimeout( function() { $inp.prop( 'checked', !$inp.prop('checked') ) }, 0);
//	   }
	   $( event.target ).blur();
	   return false;
	});
    $(document).on('click','#addemailrecv',function (e) {
    	$('.emailrecvadd').attr('style','display:block;');
    	$('.emailrecvlist').attr('style','display:none;');
    	$(this).attr('style','display:none;');
    	$('#notificationpageemail').val('');
    });
    $(document).on('click','#addemailrecvok',function (e) {
        var addokbool = true;
        if($('#notificationpageemail').val()=='') {
        	myalert('Please input receiver email');
        	return;
        }
        if(emailCheck($('#notificationpageemail').val())==false) {
        	myalert('Email format is illegal');
        	return;
        }
        $('.emailrecvlist tbody tr').each( function (index,value) {
            var email = $(this).data('data');
            if(email.recv == $('#notificationpageemail').val()) {
                myalert('The email was existed!');
                addokbool=false;
                return;
            }
        });
        if(!addokbool) return;
        var emails = {
            recv:$('#notificationpageemail').val()
        }
        $('.emailrecvlist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
            '<td>'+emails.recv+'</td>'+
            '</tr>').children('tr:last-child').data('data',emails).end().find('a').popover();
    	$('.emailrecvadd').attr('style','display:none;');
    	$('.emailrecvlist').attr('style','display:block;');
    	$('#addemailrecv').attr('style','display:block;');
    });
    $(document).on('click','#addemailrecvcancel',function (e) {
    	$('.emailrecvadd').attr('style','display:none;');
    	$('.emailrecvlist').attr('style','display:block;');
    	$('#addemailrecv').attr('style','display:block;');
    });
    $(document).on('click','.emailrecvlist tbody .trash',function (e) {
        $(this).parents('tr').remove();
    });
    $(document).on('click','#notificationpage .apply',function (e) {
    	if($('#notificationpageenable>label.active').attr('value')=='1') {
    		if($('#notificationpagesmtpserver').val()=='') {
	    		myalert('Please input smtp server');
	    		return;
	    	}
    		if($('#notificationpagesender').val()=='') {
	    		myalert('Please input sender address');
	    		return;
	    	}
	        if(emailCheck($('#notificationpagesender').val())==false) {
	        	myalert('Email format is illegal');
	        	return;
	        }
    	}
        notificationset();
    });

   $(document).on('click','#logstatusindex',function (e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#logstatuspage').siblings('div.genconfig').attr('style','display:none;');
    	$('#logstatuspage').attr('style','display:block;');
       	$('#systemnavbar.navbar-toggle:visible').click();
       	getlogset();
    });
    $(document).on('click','#logstatuspage .apply',function (e) {
        logset();
    });
    $(document).on('change','#logstatuspagestatustype',function (e) {
    	if($('#logstatuspagestatustype').val()!='')
        	getstatusset();
    	else
    		$('#logstatuspagestatustext').text('');
    });

   $(document).on('click','#miscindex',function (e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#miscpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#miscpage').attr('style','display:block;');
       	$('#systemnavbar.navbar-toggle:visible').click();
       	$('#logstatuspagestatustype').val('');
       	getmiscset();
    });
  	$(document).on('click','#miscpageautologout label',function (e) {
		if($(this).attr('value')=='0') {
	  		$('#miscpagetimeout').attr('disabled','disabled');
	  	} else {
	  		$('#miscpagetimeout').removeAttr('disabled');
	  	}
  	});
  	$('#rebootschedule>label').click(function() {
		if($(this).attr('value')=='0') {
	  		$('#rebootscheduleweek>label').removeClass('active').addClass('disabled');
	  		$('#rebootscheduletime').val('').prop('disabled', true);
	  	} else {
	  		$('#rebootscheduleweek>label').removeClass('disabled');
	  		$('#rebootscheduletime').val('').prop('disabled', false);
	  	}
  	});
    $(document).on('click','#miscpage .apply',function (e) {
        miscset();
    });
});
