function wirelesssetVal(data) {
	var selectlist;
	$('#simplegeneralpage .ssid').val(data.ssid);
	$('#simplegeneralpage .ssidonoff>label[value="'+data.ssidonoff+'"]').addClass('active').siblings().removeClass('active');
	if(data.type==0) {
		selectlist=$('#simplegeneralpage .channel').data('24G');
	} else {
		selectlist=$('#simplegeneralpage .channel').data('5G');
	}
	$('#simplegeneralpage .channel').empty();
	$.each(selectlist.selectlist, function (index,selectlist) {
		if(selectlist.defaultoption==0)
			$('#simplegeneralpage .channel').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>');
		else
			$('#simplegeneralpage .channel').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>');
	});
	$('#simplegeneralpage .channel').val(data.channel);
	$('#simplegeneralpage .ssidhide>label[value="'+data.ssidhide+'"]').addClass('active').siblings().removeClass('active');
	$('#wirelesswpamode').val(data.authmode).trigger('change');
	$('#simplegeneralpage .wpa-pskkey').val(data['wpa-pskkey']);
	$('#wepencryption').val(data['wpe-encrypt']).trigger('change');
	$('#wepkeyindex').val(data['wpe-keyindex']);
	$('#webkey1').val(data['wpe-key1']);
	$('#webkey2').val(data['wpe-key2']);
	$('#webkey3').val(data['wpe-key3']);
	$('#webkey4').val(data['wpe-key4']);
	$('#simplegeneralpage .bgprotect>label[value="'+data.bgprotect+'"]').addClass('active').siblings().removeClass('active');
	if(data.type==0) {
		selectlist=$('#simplegeneralpage .mode').data('24G');
	} else {
		selectlist=$('#simplegeneralpage .mode').data('5G');
	}
	$('#simplegeneralpage .mode').empty();
	$.each(selectlist.selectlist, function (index,selectlist) {
		if(selectlist.defaultoption==0)
			$('#simplegeneralpage .mode').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>');
		else
			$('#simplegeneralpage .mode').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>');
	});
	$('#simplegeneralpage .bandwidth').val(data.bandwidth);
	if(data.type==0) {
		selectlist=$('#simplegeneralpage .bandwidth').data('24G');
	} else {
		selectlist=$('#simplegeneralpage .bandwidth').data('5G');
	}
	$('#simplegeneralpage .bandwidth').empty();
	$.each(selectlist.selectlist, function (index,selectlist) {
		if(selectlist.defaultoption==0)
			$('#simplegeneralpage .bandwidth').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>');
		else
			$('#simplegeneralpage .bandwidth').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>');
	});
	$('#simplegeneralpage .bandwidth').val(data.bandwidth);
	$('#wpaencryption').val(data.wpaencrypt);
	$('#wpaencryption').val(data.protectedmanageframe);
	$('#simplegeneralpage .maxconnect').val(data.maxconnect);
	$('#simplegeneralpage .keyturninterval').val(data.keyturninterval);
}
function getwirelessset() {
	var postData =
	{
		method: 'getwirelessset',
		sessionid: sessionID,
		type: ''
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
					set:
					[
						{
							type: 0,
							ssid: 'jimmy2.4',
							ssidonoff: 1,
							channel: 0,
							ssidhide: 0,
							authmode: 2,
							'wpa-pskkey': '2.4key',
							'wpe-encrypt': 1,
							'wpe-keyindex': 1,
							'wpe-key1': '2.4key',
							'wpe-key2': '2.4key',
							'wpe-key3': '2.4key',
							'wpe-key4': '2.4key',
							bgprotect: 0,
							mode: 3,
							bandwidth: 0,
							extendchannel: '',
							wpaencrypt: 0,
							protectedmanageframe: 0,
							maxconnect: 100,
							keyturninterval: 3600
						},
						{
							type: 1,
							ssid: 'jimmy5',
							ssidonoff: 1,
							channel: 0,
							ssidhide: 0,
							authmode: 2,
							'wpa-pskkey': '5key',
							'wpe-encrypt': 1,
							'wpe-keyindex': 1,
							'wpe-key1': '5key',
							'wpe-key2': '5key',
							'wpe-key3': '5key',
							'wpe-key4': '5key',
							bgprotect: 0,
							mode: 3,
							bandwidth: 0,
							extendchannel: '',
							wpaencrypt: 0,
							protectedmanageframe: 0,
							maxconnect: 100,
							keyturninterval: 3600
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#wirelessmodeswitch').data('data', data.feed.data.set);
			$.each(data.feed.data.set, function(index, val) {
				if (val.type==$('#wirelessmodeswitch').val()) {
					$('#wirelessmodeswitch').val(val.type).trigger('change');
					return false;
				}
			});

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wirelessset() {
	var postData =
	{
		method: 'wirelessset',
		sessionid: sessionID,
		type: parseInt($('#wirelessmodeswitch').val()),
		ssid: $('#simplegeneralpage .ssid').val(),
		ssidonoff: parseInt($('#simplegeneralpage .ssidonoff>label.active').attr('value')),
		channel: parseInt($('#simplegeneralpage .channel').val()),
		ssidhide: parseInt($('#simplegeneralpage .ssidhide>label.active').attr('value')),
		authmode: parseInt($('#wirelesswpamode').val()),
		'wpa-pskkey': $('#simplegeneralpage .wpa-pskkey').val(),
		'wpe-encrypt': $('#wepencryption').val(),
		'wpe-keyindex': $('#wepkeyindex').val(),
		'wpe-key1': $('#webkey1').val(),
		'wpe-key2': $('#webkey2').val(),
		'wpe-key3': $('#webkey3').val(),
		'wpe-key4': $('#webkey4').val(),
		bgprotect: parseInt($('#simplegeneralpage .bgprotect>label.active').attr('value')),
		mode: parseInt($('#simplegeneralpage .mode').val()),
		bandwidth: parseInt($('#simplegeneralpage .bandwidth').val()),
		wpaencrypt: parseInt($('#wpaencryption').val()),
		protectedmanageframe: parseInt($('#simplegeneralpage .protectedmanageframe').val()),
		maxconnect: $('#simplegeneralpage .maxconnect').val(),
		keyturninterval: $('#simplegeneralpage .keyturninterval').val()
	};
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
			$('body').removeData('check');
			myalert('ok');
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wirelessguestsetVal(data) {
	$('#wifiguestpage .guestenable>label[value="'+data.guestenable+'"]').addClass('active').siblings().removeClass('active');
	$('#wifiguestpage .guestssid').val(data.guestssid);
	$('#wifiguestpage .networkkey').val(data.networkkey);
}
function getwirelessguestset() {
	var postData =
	{
		method: 'getwirelessguestset',
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
					set:
					[
						{
							type: 0,
							guestenable: 1,
							guestssid: 'jimmy2.4',
							networkkey: 'askey2.4'
						},
						{
							type: 1,
							guestenable: 1,
							guestssid: 'jimmy5',
							networkkey: 'askey5'
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#wifiguestpage .type').data('data', data.feed.data.set);
			$.each(data.feed.data.set, function(index, val) {
				if (val.type==$('#wifiguestpage .type').val()) {
					$('#wifiguestpage .type').val(val.type).trigger('change');
					return false;
				}
			});

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wirelessguestset() {
	var postData =
	{
		method: 'wirelessguestset',
		sessionid: sessionID,
		type: parseInt($('#wifiguestpage .type').val()),
		guestenable: parseInt($('#wifiguestpage .guestenable>label.active').attr('value')),
		guestssid: $('#wifiguestpage .guestssid').val(),
		networkkey: $('#wifiguestpage .networkkey').val()
	};
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
			$('body').removeData('check');
			myalert('ok');
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wirelesswpssetVal(data) {
	$('#wpspage .wpsenable>label[value="'+data.wpsenable+'"]').addClass('active').siblings().removeClass('active');
	$('#wpspage .connectionstatus').html(data.connectionstatus);
	$('#wpspage .configured').html(data.configured);
	$('#wpspincodeenable').val(data.wpsmethod).trigger('change');
	$('#wpspage .pincode').html(data.pincode);
	$('#wpspincode').val(data.clientpincode);
}
function getwirelesswpsset() {
	var postData =
	{
		method: 'getwirelesswpsset',
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
					set:
					[
						{
							type: 0,
							wpsenable: 0,
							connectionstatus: 'ENROLLEE-SEEN',
							configured: 'YES',
							wpsmethod: 0,
							pincode: '64780214',
							clientpincode: '76452569'
						},
						{
							type: 1,
							wpsenable: 1,
							connectionstatus: 'ENROLLEE-SEEN1',
							configured: 'NO',
							wpsmethod: 1,
							pincode: '12450214',
							clientpincode: '99992569'
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#wpspage .type').data('data', data.feed.data.set);
			$.each(data.feed.data.set, function(index, val) {
				if (val.type==$('#wpspage .type').val()) {
					$('#wpspage .type').val(val.type).trigger('change');
					return false;
				}
			});

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wirelesswpsset() {
	var postData =
	{
		method: 'wirelesswpsset',
		sessionid: sessionID,
		type: parseInt($('#wpspage .type').val()),
		wpsenable: parseInt($('#wpspage .wpsenable>label.active').attr('value')),
		connectionstatus: $('#wpspage .connectionstatus').html(),
		configured: $('#wpspage .configured').html(),
		wpspincodeenable: parseInt($('#wpspincodeenable').val()),
		pincode: $('#wpspage .pincode').html(),
		clientpincode: $('#wpspincode').val()
	};
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
			$('body').removeData('check');
			myalert('ok');
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wirelessaclsetVal(data) {
	$('#aclpage .macfilterenable>label[value="'+data.macfilterenable+'"]').addClass('active').siblings().removeClass('active');
	$('#aclpage .mode').val(data.mode);
	$('#aclpage .multiSelect-from, #aclpage .acls').empty();
	var total = getmaclists();
	$.each(total, function(index, val) {
		if ($.inArray(val, data.acls)<0) {
			$('#aclpage .multiSelect-from').append('<li>'+val+'</li>');
		}
		if ($.inArray(val, data.acls)>-1) {
			$('#aclpage .acls').append('<li>'+val+'</li>');
		}
	});
}
function getwirelessaclset() {
	var postData =
	{
		method: 'getwirelessaclset',
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
					set:
					[
						{
							type: 0,
							macfilterenable: 0,
							mode: 0,
							acls:
							[
								'45:12:66:77:01:11'
							]
						},
						{
							type: 1,
							macfilterenable: 1,
							mode: 1,
							acls:
							[
								'12:23:34:45:67:00',
								'45:12:66:77:01:11'
							]
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#aclpage .type').data('data', data.feed.data.set);
			$.each(data.feed.data.set, function(index, val) {
				if (val.type==$('#aclpage .type').val()) {
					$('#aclpage .type').val(val.type).trigger('change');
					return false;
				}
			});

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wirelessaclset() {
	var postData =
	{
		method: 'wirelessaclset',
		sessionid: sessionID,
		type: parseInt($('#aclpage .type').val()),
		macfilterenable: parseInt($('#aclpage .macfilterenable>label.active').attr('value')),
		mode: parseInt($('#aclpage .mode').val()),
		acls: []
	};
	$('#aclpage .acls>li').each(function(index, el) {
		postData.acls.push($(el).html());
	});
	if (postData.acls.length<1) {
		myalert('Please select MAC.');
		return;
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
			$('body').removeData('check');
			getwirelessaclset(); //重抓mac list
			myalert('ok');
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wirelessschedulesetVal(data) {
	$('#schedulepage .scheduleenable>label[value="'+data.scheduleenable+'"]').addClass('active').siblings().removeClass('active');
	$('#schedulepage .day-schedule').setdata(data.schedule);
}
function getwirelessscheduleset() {
	var postData =
	{
		method: 'getwirelessscheduleset',
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
					set:
					[
						{
							type: 0,
							scheduleenable: 0,
							schedule:
							{
								sun: '0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
								mon: '0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
								tus: '0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
								wen: '0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
								thr: '0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
								fri: '0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
								sat: '0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0'
							}
						},
						{
							type: 1,
							scheduleenable: 1,
							schedule:
							{
								sun: '0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
								mon: '0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
								tus: '0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
								wen: '0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
								thr: '0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
								fri: '0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0',
								sat: '0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0'
							}
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#schedulepage .type').data('data', data.feed.data.set);
			$.each(data.feed.data.set, function(index, val) {
				if (val.type==$('#schedulepage .type').val()) {
					$('#schedulepage .type').val(val.type).trigger('change');
					return false;
				}
			});

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wirelessscheduleset() {
	var postData =
	{
		method: 'wirelessscheduleset',
		sessionid: sessionID,
		type: parseInt($('#schedulepage .type').val()),
		scheduleenable: parseInt($('#schedulepage .scheduleenable>label.active').attr('value')),
		schedule: $('#schedulepage .day-schedule').getdata()
	};
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
			$('body').removeData('check');
			myalert('ok');
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wirelessradiussetVal(data) {
	$('#radiuspage .radiusenable>label[value="'+data.radiusenable+'"]').addClass('active').siblings().removeClass('active');
	$('#radiuspage .server').val(data.server);
	$('#radiuspage .port').val(data.port);
	$('#radiuspage .secret').val(data.secret);
}
function getwirelessradiusset() {
	var postData =
	{
		method: 'getwirelessradiusset',
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
					set:
					[
						{
							type: 0,
							radiusenable: 0,
							server: '192.168.1.1',
							port: '200',
							secret: 'fdsa'
						},
						{
							type: 1,
							radiusenable: 1,
							server: '192.168.2.1',
							port: '201',
							secret: 'fdsa1'
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#radiuspage .type').data('data', data.feed.data.set);
			$.each(data.feed.data.set, function(index, val) {
				if (val.type==$('#radiuspage .type').val()) {
					$('#radiuspage .type').val(val.type).trigger('change');
					return false;
				}
			});

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wirelessradiusset() {
	var postData =
	{
		method: 'wirelessradiusset',
		sessionid: sessionID,
		type: parseInt($('#radiuspage .type').val()),
		radiusenable: parseInt($('#radiuspage .radiusenable>label.active').attr('value')),
		server: $('#radiuspage .server').val(),
		port: $('#radiuspage .port').val(),
		secret: $('#radiuspage .secret').val()
	};
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
			$('body').removeData('check');
			myalert('ok');
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wirelessprofessionsetVal(data) {
	var seleclist;
	$('#professionalpage .radioenable>label[value="'+data.radioenable+'"]').addClass('active').siblings().removeClass('active');
	$('#professionalpage .txbursting>label[value="'+data.txbursting+'"]').addClass('active').siblings().removeClass('active');
	if(data.type==0) {
		selectlist=$('#professionalpage .txpower').data('24G');
	} else {
		selectlist=$('#professionalpage .txpower').data('5G');
	}
	$('#professionalpage .txpower').empty();
	$.each(selectlist.selectlist, function (index,selectlist) {
		if(selectlist.defaultoption==0)
			$('#professionalpage .txpower').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>');
		else
			$('#professionalpage .txpower').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>');
	});
	$('#professionalpage .txpower').val(data.txpower);
	$('#professionalpage .obssrssi').val(data.obssrssi);
	$('#professionalpage .rtslimit').val(data.rtslimit);
	$('#professionalpage .fragmentation').val(data.fragmentation);
	$('#professionalpage .signalinterval').val(data.signalinterval);
	$('#professionalpage .ampdu').val(data.ampdu);
	$('#professionalpage .dcsenable>label[value="'+data.dcsenable+'"]').addClass('active').siblings().removeClass('active');
	$('#professionalpage .enabletxstbc>label[value="'+data.enabletxstbc+'"]').addClass('active').siblings().removeClass('active');
	$('#professionalpage .enablerxstbc>label[value="'+data.enablerxstbc+'"]').addClass('active').siblings().removeClass('active');
	$('#professionalpage .apisolated>label[value="'+data.apisolated+'"]').addClass('active').siblings().removeClass('active');
	if(data.type==0) {
		selectlist=$('#professionalpage .multicastrate').data('24G');
	} else {
		selectlist=$('#professionalpage .multicastrate').data('5G');
	}
	$('#professionalpage .multicastrate').empty();
	$.each(selectlist.selectlist, function (index,selectlist) {
		if(selectlist.defaultoption==0)
			$('#professionalpage .multicastrate').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>');
		else
			$('#professionalpage .multicastrate').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>');
	});
	$('#professionalpage .multicastrate').val(data.multicastrate);
	$('#professionalpage .shortguardinterval>label[value="'+data.shortguardinterval+'"]').addClass('active').siblings().removeClass('active');
	$('#professionalpage .dtiminterval').val(data.dtiminterval);
	$('#professionalpage .enablewwm>label[value="'+data.enablewwm+'"]').addClass('active').siblings().removeClass('active');
	$('#professionalpage .enablewwmapsd>label[value="'+data.enablewwmapsd+'"]').addClass('active').siblings().removeClass('active');
	$('#professionalpage .turboqam>label[value="'+data.turboqam+'"]').addClass('active').siblings().removeClass('active');
	$('#professionalpage .universalbeamforming>label[value="'+data.universalbeamforming+'"]').addClass('active').siblings().removeClass('active');
	$('#professionalpage .radioresourcemanagment>label[value="'+data.radioresourcemanagment+'"]').addClass('active').siblings().removeClass('active');
	$('#professionalpage .wmmadmissioncontrol>label[value="'+data.wmmadmissioncontrol+'"]').addClass('active').siblings().removeClass('active');
	$('#professionalpage .spectralanalysisenable>label[value="'+data.spectralanalysisenable+'"]').addClass('active').siblings().removeClass('active');
}
function getwirelessprofessionset() {
	var postData =
	{
		method: 'getwirelessprofessionset',
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
					set:
					[
						{
							type: 0,
							radioenable: 0,
							txbursting: 0,
							txpower: 0,
							obssrssi: 0,
							rtslimit: 0,
							fragmentation: 0,
							signalinterval: 0,
							ampdu: 0,
							dcsenable: 0,
							enabletxstbc: 0,
							enablerxstbc: 0,
							apisolated: 0,
							multicastrate: 0,
							shortguardinterval: 0,
							dtiminterval: 0,
							enablewwm: 0,
							enablewwmapsd: 0,
							turboqam: 0,
							universalbeamforming: 0,
							radioresourcemanagment: 0,
							wmmadmissioncontrol: 0,
							spectralanalysisenable: 0
						},
						{
							type: 1,
							radioenable: 1,
							txbursting: 1,
							txpower: 1,
							obssrssi: 1,
							rtslimit: 1,
							fragmentation: 1,
							signalinterval: 1,
							ampdu: 1,
							dcsenable: 1,
							enabletxstbc: 1,
							enablerxstbc: 1,
							apisolated: 1,
							multicastrate: 1,
							shortguardinterval: 1,
							dtiminterval: 1,
							enablewwm: 1,
							enablewwmapsd: 1,
							turboqam: 1,
							universalbeamforming: 1,
							radioresourcemanagment: 1,
							wmmadmissioncontrol: 1,
							spectralanalysisenable: 1
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#professionalpage .type').data('data', data.feed.data.set);
			$.each(data.feed.data.set, function(index, val) {
				if (val.type==$('#professionalpage .type').val()) {
					$('#professionalpage .type').val(val.type).trigger('change');
					return false;
				}
			});

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wirelessprofessionset() {
	var postData =
	{
		method: 'wirelessprofessionset',
		sessionid: sessionID,
		type: parseInt($('#professionalpage .type').val()),
		radioenable: parseInt($('#professionalpage .radioenable>label.active').attr('value')),
		txbursting: parseInt($('#professionalpage .txbursting>label.active').attr('value')),
		txpower: parseInt($('#professionalpage .txpower').val()),
		obssrssi: parseInt($('#professionalpage .obssrssi').val()),
		rtslimit: parseInt($('#professionalpage .rtslimit').val()),
		fragmentation: parseInt($('#professionalpage .fragmentation').val()),
		signalinterval: parseInt($('#professionalpage .signalinterval').val()),
		ampdu: parseInt($('#professionalpage .ampdu').val()),
		dcsenable: parseInt($('#professionalpage .dcsenable>label.active').attr('value')),
		enabletxstbc: parseInt($('#professionalpage .enabletxstbc>label.active').attr('value')),
		enablerxstbc: parseInt($('#professionalpage .enablerxstbc>label.active').attr('value')),
		apisolated: parseInt($('#professionalpage .apisolated>label.active').attr('value')),
		multicastrate: parseInt($('#professionalpage .multicastrate').val()),
		shortguardinterval: parseInt($('#professionalpage .shortguardinterval>label.active').attr('value')),
		dtiminterval: parseInt($('#professionalpage .dtiminterval').val()),
		enablewwm: parseInt($('#professionalpage .enablewwm>label.active').attr('value')),
		enablewwmapsd: parseInt($('#professionalpage .enablewwmapsd>label.active').attr('value')),
		turboqam: parseInt($('#professionalpage .turboqam>label.active').attr('value')),
		universalbeamforming: parseInt($('#professionalpage .universalbeamforming>label.active').attr('value')),
		radioresourcemanagment: parseInt($('#professionalpage .radioresourcemanagment>label.active').attr('value')),
		wmmadmissioncontrol: parseInt($('#professionalpage .wmmadmissioncontrol>label.active').attr('value')),
		spectralanalysisenable: parseInt($('#professionalpage .spectralanalysisenable>label.active').attr('value'))
	};
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
			$('body').removeData('check');
			myalert('ok');
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wirelessatfsetVal(data) {
	$('#atfpage .atfenable>label[value="'+data.atfenable+'"]').addClass('active').siblings().removeClass('active');
	$('#atfpage .ssid').val(data.ssid);
	$("#atfbar").slider('value', data.percentage);
	$("#atfpercent").val(data.percentage+'%');
	$('#atfpage .multiSelect-from, #atfpage .acls').empty();
	var total = getmaclists();
	$.each(total, function(index, val) {
		if ($.inArray(val, data.acls)<0) {
			$('#atfpage .multiSelect-from').append('<li>'+val+'</li>');
		}
		if ($.inArray(val, data.acls)>-1) {
			$('#atfpage .acls').append('<li>'+val+'</li>');
		}
	});
}
function getwirelessatfset() {
	var postData =
	{
		method: 'getwirelessatfset',
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
					set:
					[
						{
							type: 0,
							atfenable: 0,
							ssid: 'MySpectrumWiFiA1',
							percentage: 20,
							acls:
							[
								'45:12:66:77:01:11'
							]
						},
						{
							type: 1,
							atfenable: 1,
							ssid: 'MySpectrumWiFiA2',
							percentage: 80,
							acls:
							[
								'12:23:34:45:67:00',
								'45:12:66:77:01:11'
							]
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#atfpage .type').data('data', data.feed.data.set);
			$.each(data.feed.data.set, function(index, val) {
				if (val.type==$('#atfpage .type').val()) {
					$('#atfpage .type').val(val.type).trigger('change');
					return false;
				}
			});

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wirelessatfset() {
	var postData =
	{
		method: 'wirelessatfset',
		sessionid: sessionID,
		type: parseInt($('#atfpage .type').val()),
		atfenable: parseInt($('#atfpage .atfenable>label.active').attr('value')),
		ssid: $('#atfpage .ssid').val(),
		percentage: parseInt($("#atfpercent").val()),
		acls: []
	};
	$('#atfpage .acls>li').each(function(index, el) {
		postData.acls.push($(el).html());
	});
	if (postData.acls.length<1) {
		myalert('Please select MAC.');
		return;
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
			$('body').removeData('check');
			getwirelessatfset(); //重抓mac list
			myalert('ok');
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wirelessmeshsetVal(data) {
	var seleclist;
	$('#meshpage .meshenable>label[value="'+data.meshenable+'"]').addClass('active').siblings().removeClass('active');
	$('#meshpage .ssid').val(data.ssid);
	if(data.type==0) {
		selectlist=$('#meshpage .channel').data('24G');
	} else {
		selectlist=$('#meshpage .channel').data('5G');
	}
	$('#meshpage .channel').empty();
	$.each(selectlist.selectlist, function (index,selectlist) {
		if(selectlist.defaultoption==0)
			$('#meshpage .channel').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>');
		else
			$('#meshpage .channel').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>');
	});
	$('#meshpage .channel').val(data.channel);
	$('#meshpage .key').val(data.key);
}
function getwirelessmeshset() {
	var postData =
	{
		method: 'getwirelessmeshset',
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
					set:
					[
						{
							type: 0,
							meshenable: 0,
							ssid: 'jimmy1',
							channel: 1,
							key: 'asdf1'
						},
						{
							type: 1,
							meshenable: 1,
							ssid: 'jimmy2',
							channel: 2,
							key: 'asdf2'
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			updatetrigger=false;

			$('#meshpage .type').data('data', data.feed.data.set);
			$.each(data.feed.data.set, function(index, val) {
				if (val.type==$('#meshpage .type').val()) {
					$('#meshpage .type').val(val.type).trigger('change');
					return false;
				}
			});

			updatetrigger=true;
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wirelessmeshset() {
	var postData =
	{
		method: 'wirelessmeshset',
		sessionid: sessionID,
		type: parseInt($('#meshpage .type').val()),
		meshenable: parseInt($('#meshpage .meshenable>label.active').attr('value')),
		ssid: $('#meshpage .ssid').val(),
		channel: $('#meshpage .channel').val(),
		key: $('#meshpage .key').val()
	};
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
			$('body').removeData('check');
			myalert('ok');
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

$(document).ready(function() {
	// general
	$("a[href='#wificonfigpage']").on('shown.bs.tab', function(e) {
		$('#simplegeneralindex').parent('li').siblings('li').removeClass('active');
		$('#simplegeneralindex').parent('li').addClass('active');
		$('#simplegeneralpage').siblings('div.genconfig').attr('style', 'display:none;');
		$('#simplegeneralpage').attr('style', 'display:block;');
		getwirelessset();
	});
	$(document).on('click', '#simplegeneralindex', function(e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
		$(this).parents('ul').children('li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('#simplegeneralpage').siblings('div.genconfig').attr('style', 'display:none;');
		$('#simplegeneralpage').attr('style', 'display:block;');
		$('#wifinavbar.navbar-toggle:visible').click();
		getwirelessset();
	});
	$(document).on('change', '#wirelessmodeswitch', function(e) {
		switch ($(this).val()) {
			case '0':
				$('.wirelessonly24g').attr('style', 'display:block;');
				$.each($('#wirelessmodeswitch').data('data'), function(index, val) {
					if (val.type==0) {
						wirelesssetVal(val);
						return false;
					}
				});
				break;
			case '1':
				$('.wirelessonly24g').attr('style', 'display:none;');
				$.each($('#wirelessmodeswitch').data('data'), function(index, val) {
					if (val.type==1) {
						wirelesssetVal(val);
						return false;
					}
				});
				break;
		}
	});
	$(document).on('change', '#wirelesswpamode', function(e) {
		$('.opensystem,.sharekey,.wpapersonal,.wpaenterprise,.wpaenterprise2').attr('style', 'display:none;');

		switch ($(this).val()) {
			case '0':
				$('.opensystem').attr('style', 'display:block;');
				$('#wepencryption').empty().append('<option value="0">None</option>' +
					'<option value="1">WEP-64bits</option>' +
					'<option value="2">WEP-128bits</option>');
				if ($('#wepencryption').val() == '0') {
					$('#wepkeyindex,#webkey1,#webkey2,#webkey3,#webkey4').parent().parent().attr('style', 'display:none;')
				} else {
					$('#wepkeyindex,#webkey1,#webkey2,#webkey3,#webkey4').parent().parent().attr('style', 'display:block;')
				}
				break;
			case '1':
				$('.sharekey').attr('style', 'display:block;');
				$('#wepencryption').empty().append('<option value="1" selected>WEP-64bits</option>' +
					'<option value="2">WEP-128bits</option>');
				$('#webkey1,#webkey2,#webkey3,#webkey4').parent().parent().attr('style', 'display:block;')
				break;
			case '2':
				$('.wpapersonal').attr('style', 'display:block;');
				$('#wpaencryption').empty().append('<option value="0">TKIP</option>');
				break;
			case '3':
				$('.wpapersonal').attr('style', 'display:block;');
				$('#wpaencryption').empty().append('<option value="1">AES</option>');
				break;
			case '4':
				$('.wpapersonal').attr('style', 'display:block;');
				$('#wpaencryption').empty().append('<option value="1">AES</option>' +
					'<option value="2">TKIP+AES</option>');
				break;
			case '5':
				$('.wpaenterprise').attr('style', 'display:block;');
				$('#wpaencryption').empty().append('<option value="0">TKIP</option>');
				break;
			case '6':
				$('.wpaenterprise,.wpaenterprise2').attr('style', 'display:block;');
				$('#wpaencryption').empty().append('<option value="1">AES</option>');
				break;
			case '7':
				$('.wpaenterprise').attr('style', 'display:block;');
				$('#wpaencryption').empty().append('<option value="1">AES</option>' +
					'<option value="2">TKIP+AES</option>');
				break;
		}
	});
	$(document).on('change', '#wepkeyindex', function(e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
		$('#webkey1,#webkey2,#webkey3,#webkey4').attr('readonly', '');
		$('#webkey' + $(this).val()).removeAttr('readonly');
	});
	$(document).on('change', '#wepencryption', function(e) {
		if ($(this).val() == '0') {
			$('#wepkeyindex,#webkey1,#webkey2,#webkey3,#webkey4').parent().parent().attr('style', 'display:none;')
		} else {
			$('#wepkeyindex,#webkey1,#webkey2,#webkey3,#webkey4').parent().parent().attr('style', 'display:block;')
		}
	});
	$('#simplegeneralpage .apply').click(function() {
		wirelessset();
	});

	// guest
	$(document).on('click', '#wifiguestindex', function(e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
		$(this).parents('ul').children('li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('#wifiguestpage').siblings('div.genconfig').attr('style', 'display:none;');
		$('#wifiguestpage').attr('style', 'display:block;');
		$('#wifinavbar.navbar-toggle:visible').click();
		getwirelessguestset();
	});
	$('#wifiguestpage .type').change(function() {
		switch ($(this).val()) {
			case '0':
				$.each($('#wifiguestpage .type').data('data'), function(index, val) {
					if (val.type==0) {
						wirelessguestsetVal(val);
						return false;
					}
				});
				break;
			case '1':
				$.each($('#wifiguestpage .type').data('data'), function(index, val) {
					if (val.type==1) {
						wirelessguestsetVal(val);
						return false;
					}
				});
				break;
		}
	});
	$('#wifiguestpage .apply').click(function() {
		wirelessguestset();
	});

	// WPS
	$(document).on('click', '#wpsindex', function(e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
		$(this).parents('ul').children('li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('#wpspage').siblings('div.genconfig').attr('style', 'display:none;');
		$('#wpspage').attr('style', 'display:block;');
		$('#wifinavbar.navbar-toggle:visible').click();
		getwirelesswpsset();
	});
	$('#wpspage .type').change(function() {
		switch ($(this).val()) {
			case '0':
				$.each($('#wpspage .type').data('data'), function(index, val) {
					if (val.type==0) {
						wirelesswpssetVal(val);
						return false;
					}
				});
				break;
			case '1':
				$.each($('#wpspage .type').data('data'), function(index, val) {
					if (val.type==1) {
						wirelesswpssetVal(val);
						return false;
					}
				});
				break;
		}
	});
	$('#wpspage .apply').click(function() {
		wirelesswpsset();
	});

	// MAC filter
	$(document).on('click', '#aclindex', function(e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
		$(this).parents('ul').children('li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('#aclpage').siblings('div.genconfig').attr('style', 'display:none;');
		$('#aclpage').attr('style', 'display:block;');
		$('#wifinavbar.navbar-toggle:visible').click();
		getwirelessaclset();
	});
	$('#aclpage .type').change(function() {
		switch ($(this).val()) {
			case '0':
				$.each($('#aclpage .type').data('data'), function(index, val) {
					if (val.type==0) {
						wirelessaclsetVal(val);
						return false;
					}
				});
				break;
			case '1':
				$.each($('#aclpage .type').data('data'), function(index, val) {
					if (val.type==1) {
						wirelessaclsetVal(val);
						return false;
					}
				});
				break;
		}
	});
	$('#aclpage .apply').click(function() {
		wirelessaclset();
	});

	// schedule
	$(document).on('click', '#scheduleindex', function(e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
		$(this).parents('ul').children('li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('#schedulepage').siblings('div.genconfig').attr('style', 'display:none;');
		$('#schedulepage').attr('style', 'display:block;');
		$('#wifinavbar.navbar-toggle:visible').click();
		getwirelessscheduleset();
	});
	$('#schedulepage .type').change(function() {
		switch ($(this).val()) {
			case '0':
				$.each($('#schedulepage .type').data('data'), function(index, val) {
					if (val.type==0) {
						wirelessschedulesetVal(val);
						return false;
					}
				});
				break;
			case '1':
				$.each($('#schedulepage .type').data('data'), function(index, val) {
					if (val.type==1) {
						wirelessschedulesetVal(val);
						return false;
					}
				});
				break;
		}
	});
	$('#schedulepage .apply').click(function() {
		wirelessscheduleset();
	});

	// radius
	$(document).on('click', '#radiusindex', function(e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
		$(this).parents('ul').children('li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('#radiuspage').siblings('div.genconfig').attr('style', 'display:none;');
		$('#radiuspage').attr('style', 'display:block;');
		$('#wifinavbar.navbar-toggle:visible').click();
		getwirelessradiusset();
	});
	$('#radiuspage .type').change(function() {
		switch ($(this).val()) {
			case '0':
				$.each($('#radiuspage .type').data('data'), function(index, val) {
					if (val.type==0) {
						wirelessradiussetVal(val);
						return false;
					}
				});
				break;
			case '1':
				$.each($('#radiuspage .type').data('data'), function(index, val) {
					if (val.type==1) {
						wirelessradiussetVal(val);
						return false;
					}
				});
				break;
		}
	});
	$('#radiuspage .apply').click(function() {
		wirelessradiusset();
	});

	// professional
	$(document).on('click', '#professionalindex', function(e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
		$(this).parents('ul').children('li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('#professionalpage').siblings('div.genconfig').attr('style', 'display:none;');
		$('#professionalpage').attr('style', 'display:block;');
		$('#wifinavbar.navbar-toggle:visible').click();
		getwirelessprofessionset();
	});
	$('#professionalpage .type').change(function() {
		switch ($(this).val()) {
			case '0':
				$.each($('#professionalpage .type').data('data'), function(index, val) {
					if (val.type==0) {
						wirelessprofessionsetVal(val);
						return false;
					}
				});
				break;
			case '1':
				$.each($('#professionalpage .type').data('data'), function(index, val) {
					if (val.type==1) {
						wirelessprofessionsetVal(val);
						return false;
					}
				});
				break;
		}
	});
	$('#professionalpage .apply').click(function() {
		wirelessprofessionset();
	});

	// ATF
	$(document).on('click', '#atfindex', function(e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
		$(this).parents('ul').children('li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('#atfpage').siblings('div.genconfig').attr('style', 'display:none;');
		$('#atfpage').attr('style', 'display:block;');
		$('#wifinavbar.navbar-toggle:visible').click();
		getwirelessatfset();
	});
	$('#atfpage .type').change(function() {
		switch ($(this).val()) {
			case '0':
				$.each($('#atfpage .type').data('data'), function(index, val) {
					if (val.type==0) {
						wirelessatfsetVal(val);
						return false;
					}
				});
				break;
			case '1':
				$.each($('#atfpage .type').data('data'), function(index, val) {
					if (val.type==1) {
						wirelessatfsetVal(val);
						return false;
					}
				});
				break;
		}
	});
	$('#atfpage .apply').click(function() {
		wirelessatfset();
	});

	// mesh
	$(document).on('click', '#meshindex', function(e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
		$(this).parents('ul').children('li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('#meshpage').siblings('div.genconfig').attr('style', 'display:none;');
		$('#meshpage').attr('style', 'display:block;');
		$('#wifinavbar.navbar-toggle:visible').click();
		getwirelessmeshset();
	});
	$('#meshpage .type').change(function() {
		switch ($(this).val()) {
			case '0':
				$.each($('#meshpage .type').data('data'), function(index, val) {
					if (val.type==0) {
						wirelessmeshsetVal(val);
						return false;
					}
				});
				break;
			case '1':
				$.each($('#meshpage .type').data('data'), function(index, val) {
					if (val.type==1) {
						wirelessmeshsetVal(val);
						return false;
					}
				});
				break;
		}
	});
	$('#meshpage .apply').click(function() {
		wirelessmeshset();
	});

})