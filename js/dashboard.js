function getlanguages() {
	var postData =
	{
		method: 'getlanguages',
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
					langs:
					[
						{
							langid: '0',
							langstr: 'Englich'
						},
						{
							langid: '1',
							langstr: '繁體中文'
						},
						{
							langid: '2',
							langstr: '简体中文'
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			$('#menu-lang>.dropdown-menu').empty();
			$.each(data.feed.data.langs, function(index, val) {
				$('#menu-lang>.dropdown-menu').append(
					'<li>'+
						'<a langid="'+val.langid+'">'+val.langstr+'</a>'+
					'</li>'
				);
			});
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function setlanguages() {
	var postData =
	{
		method: 'setlanguages',
		sessionid: sessionID,
		langid: ''
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
					xxxxx: ''
				}
			}
		};
		if (data.stat == 'success') {
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
var uptimeVal = 0;
function systeminfo() {
	var postData =
	{
		method: 'systeminfo',
		sessionid: sessionID,
		langid: ''
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
					time: 7867612312,
					fever: '1.0.0 (2016-06-05 05:11 +0800)',
					newfever: '1.0.1 (2016-06-06 05:11 +0800)',
					hwver: 'V1.0REV1',
					uptime: 77627300000,
					'24gssid': 'wolfy-2g',
					'24gkey': '1234',
					authmethod: 'WPA2 Personal',
					'5gssid': 'wolfy-5g',
					'5gkey': '1234',
					mac: '00:xx:xx:xx…',
					defaultmac: 'xxxxx',
					serialno: '7a98s87sjhxxha…'
				}
			}
		};
		if (data.stat == 'success') {
			var data = data.feed.data;
			uptimeVal = data.uptime;
			$('.sysinfo').empty();
			$('.sysinfo').append(
				'<tr>'+
					'<td>System Time</td>'+
					'<td id="systemtimestr">'+moment(data.time).utc().format()+'</td>'+
				'</tr>'+
				'<tr>'+
					'<td>Firmware Version</td>'+
					'<td>'+data.fever+((data.newfever>data.fever)?' <button type="button" class="btn btn-default updatefever"><span class="glyphicon glyphicon-download-alt"></span> Update</button>':'')+'</td>'+
				'</tr>'+
				'<tr>'+
					'<td>Hardware Version</td>'+
					'<td>'+data.hwver+'</td>'+
				'</tr>'+
				'<tr>'+
					'<td>System UPTime</td>'+
					'<td id="uptimestr"	 >'+moment(uptimeVal).date()+' day '+moment(uptimeVal).hour()+' hour '+moment(uptimeVal).minute()+' min '+moment(uptimeVal).second()+' sec'+'</td>'+
				'</tr>'+
				'<tr>'+
					'<td>'+
						'<div class="dropdown">Wireless 2.4G '+
							'<button type="button" class="btn btn-default btn-sm" data-toggle="popover" title="2.4G key" data-placement="top" data-trigger="hover" data-content="Type: '+data['24gssid']+'<br>Key:'+data['24gkey']+'">'+
								'<span class="glyphicon glyphicon-eye-open"></span>'+
							'</button>'+
						'</div>'+
					'</td>'+
					'<td>'+data['24gssid']+'</td>'+
				'</tr>'+
				'<tr>'+
					'<td>'+
						'<div class="dropdown">Wireless 5G '+
							'<button type="button" class="btn btn-default btn-sm" data-toggle="popover" title="5G key" data-placement="top" data-trigger="hover" data-content="Type: '+data['5gssid']+'<br>Key:'+data['5gkey']+'">'+
								'<span class="glyphicon glyphicon-eye-open"></span>'+
							'</button>'+
						'</div>'+
					'</td>'+
					'<td>'+data['5gssid']+'</td>'+
				'</tr>'+
				'<tr>'+
					'<td>MAC Address</td>'+
					'<td>'+data.mac+'</td>'+
				'</tr>'+
				'<tr>'+
					'<td>Serial Number</td>'+
					'<td>'+data.serialno+'</td>'+
				'</tr>'
			);

			$('[data-toggle="popover"]').popover({html:true,container: 'body'});
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function eventmsg() {
	var postData =
	{
		method: 'eventmsg',
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
					message:
					[
						{
							messagecontent: 'WAN disconnected!!!',
							time: '2017/08/24 10:30:35'
						},
						{
							messagecontent: 'WAN disconnected!!',
							time: '2017/08/24 10:30:35'
						},
						{
							messagecontent: 'WAN disconnected!',
							time: '2017/08/24 10:30:35'
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			if (data.feed.data.message.length<1) {
				$('#eventmsg').hide();
			} else {
				$('#eventmsg .count').html(data.feed.data.message.length);
				$('#eventmsg>.dropdown-menu').empty();
				$.each(data.feed.data.message, function(index, val) {
					$('#eventmsg>.dropdown-menu').append(
						'<li>'+
							'<a>'+
								'<i class="fa fa-comment fa-fw"></i> '+val.messagecontent+
								'<small class="pull-right text-muted">'+val.time+'</small>'+
							'</a>'+
						'</li>'
					);
				});
			}
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function seteventread() {
	var postData =
	{
		method: 'seteventread',
		sessionid: sessionID,
		isread: 1
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
			$('#eventmsg').animate(
				{
					width: '0px',
					opacity: 0
				},
				300,
				function() {
					$('#eventmsg').removeAttr('style').hide();
				}
			);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wanstatus() {
	var postData =
	{
		method: 'wanstatus',
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
					type: 'WAN 19119',
					wanip: '192.168.1.1',
					wandns: '255.255.255.0',
					gateway: '123.456.789',
					wanupmax: '10Mbps',
					wandownmax: '20Mbps',
					wanupordown: false,
					downreason: 'WAN disconnected'
				}
			}
		};
		if (data.stat == 'success') {
			var d = data.feed.data;
			if (d.wanupordown==false) {
				$('#internetpage-1 .wanupordown').show().html(d.downreason);
			}

			$('#internetpage-1 .waninfo [type]').html(d.type);
			$('#internetpage-1 .waninfo [ip]').html(d.wanip);
			$('#internetpage-1 .waninfo [dns]').html(d.wandns);
			$('#internetpage-1 .waninfo [gateway]').html(d.gateway);

			$('#internetpage-2 .list [up]').html(d.wanupmax);
			$('#internetpage-2 .list [down]').html(d.wandownmax);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wanspeedset() {
	var upVal = $('#internetpage-2 .list [up]>input').val(),
		downVal = $('#internetpage-2 .list [down]>input').val();
	if (upVal=='' || downVal=='') return;

	var postData =
	{
		method: 'wanspeedset',
		sessionid: sessionID,
		maxupload: upVal,
		maxdownload: downVal
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
					wanip: '192.168.1.1',
					wandns: '255.255.255.0',
					gateway: '123.456.789',
					wanupmax: upVal+'Mbps',
					wandownmax: downVal+'Mbps',
					wanupordown: ''
				}
			}
		};
		if (data.stat == 'success') {
			$('#internetpage-2 .ok').hide();
			$('#internetpage-2 .set, #internetpage-2 .test').show();
			$('#internetpage-2 .list [up]').html(upVal+'Mbps');
			$('#internetpage-2 .list [down]').html(downVal+'Mbps');

			var d = data.feed.data;
			$('#internetpage-1 .waninfo [ip]').html(d.wanip);
			$('#internetpage-1 .waninfo [dns]').html(d.wandns);
			$('#internetpage-1 .waninfo [gateway]').html(d.gateway);
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wanspeedtest() {
	var postData =
	{
		method: 'wanspeedtest',
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
					maxdownload: '34Mbps',
					maxupload: '10Mbps'
				}
			}
		};
		if (data.stat == 'success') {
			$('#internetpage-2 .list [up]').html(data.feed.data.maxupload);
			$('#internetpage-2 .list [down]').html(data.feed.data.maxdownload);
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
// function wirelessstatuslist(d) {
// 	$('#mobiledevicepage-1 .clientlist').append(
// 		'<tr>' +
// 			'<td>'+
// 				'<div class="btn-group">'+
// 					'<button type="button" class="btn btn-default btn-sm wanaccess" value="'+((d.wanaccess) ? true : false)+'">WAN('+((d.wanaccess) ? 'Permit' : 'Deny')+')</button>' +
// 					'<button type="button" class="btn btn-default btn-sm parentfilter">Parental Control</button>'+
// 					'<button type="button" class="btn btn-default btn-sm storageaccess" value="'+((d.storageaccess) ? true : false)+'">StorageShare('+((d.storageaccess) ? 'ON' : 'OFF')+')</button>'+
// 					'<button type="button" class="btn btn-default btn-sm bandwidthlimit" value="'+((d.bandwidthlimit.up==0 && d.bandwidthlimit.down==0) ? false : true)+'">BandwidthLimit</button>'+
// 				'</div>'+
// 			'</td>'+
// 			'<td><i class="fa fa-apple"></i> ' + d.device + ' (' + d.type + ')</td>' +
// 			'<td>'+d.time+'</td>' +
// 			'<td>' + d.ip + '</td>' +
// 			'<td>' + d.mac.toUpperCase() + '</td>' +
// 		'</tr>'
// 	).children('tr:last-child').data('data', d);
// }
function wirelessstatuslist(d) {
	$('#mobiledevicepage-1 .clientlist').append(
		'<tr>' +
			'<td>'+
				'<div class="btn-group wanaccess" data-toggle="buttons">'+
					'<label class="btn btn-sm btn-checkbox'+((d.wanaccess)?' active':'')+'" value="1">'+
						'<input type="radio">Permit'+
					'</label>'+
					'<label class="btn btn-sm btn-checkbox'+((!d.wanaccess)?' active':'')+'" value="0">'+
						'<input type="radio">Deny'+
					'</label>'+
				'</div>'+
			'</td>'+
			'<td>'+
				'<div class="btn-group parentfilter" data-toggle="buttons">'+
					'<label class="btn btn-sm btn-checkbox'+((d.parentfilter)?' active':'')+'" value="1">'+
						'<input type="radio">ON'+
					'</label>'+
					'<label class="btn btn-sm btn-checkbox'+((!d.parentfilter)?' active':'')+'" value="0">'+
						'<input type="radio">OFF'+
					'</label>'+
				'</div>'+
				'<i class="glyphicon glyphicon-pencil btn-icon i-parentfilter'+((d.parentfilter)?'':' hide')+'"></i>'+
			'</td>'+
			'<td>'+
				'<div class="btn-group storageaccess" data-toggle="buttons">'+
					'<label class="btn btn-sm btn-checkbox'+((d.storageaccess)?' active':'')+'" value="1">'+
						'<input type="radio">ON'+
					'</label>'+
					'<label class="btn btn-sm btn-checkbox'+((!d.storageaccess)?' active':'')+'" value="0">'+
						'<input type="radio">OFF'+
					'</label>'+
				'</div>'+
			'</td>'+
			'<td>'+
				'<div class="btn-group bandwidthlimit" data-toggle="buttons">'+
					'<label class="btn btn-sm btn-checkbox'+((d.bandwidthlimit.up && d.bandwidthlimit.down)?' active':'')+'" value="1">'+
						'<input type="radio">ON'+
					'</label>'+
					'<label class="btn btn-sm btn-checkbox'+((!d.bandwidthlimit.up && !d.bandwidthlimit.down)?' active':'')+'" value="0">'+
						'<input type="radio">OFF'+
					'</label>'+
				'</div>'+
				'<i class="glyphicon glyphicon-pencil btn-icon i-bandwidthlimit'+((d.bandwidthlimit.up && d.bandwidthlimit.down)?'':' hide')+'"></i>'+
			'</td>'+
			'<td class="device"><i class="fa fa-apple"></i> ' + d.device + ' (' + d.type + ')</td>' +
			'<td>'+d.time+'</td>' +
			'<td>' + d.ip + '</td>' +
			'<td>' + d.mac.toUpperCase() + '</td>' +
		'</tr>'
	).children('tr:last-child').data('data', d);
}
function wirelessstatus() {
	var postData =
	{
		method: 'wirelessstatus',
		sessionid: sessionID,
		type: 'online' /* online/history/dhcp lease */
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
					status:
					[
						{
							device: 'wolfy-air',
							time: 'offline',  /* online will display time, offline just give "offline" string */
							ip: '192.168.1.1',
							mac: '12:23:34:45:67:00',
							type: '5G',
							wanaccess: 1,
							storageaccess: 1,
							parentfilter: 0,
							bandwidthlimit:
							{
								up: 5234,
								down: 7894
							}
						},
						{
							device: 'jimmy-air',
							time: 'offline',  /* online will display time, offline just give "offline" string */
							ip: '192.168.1.2',
							mac: '12:23:34:45:67:01',
							type: '5G',
							wanaccess: 1,
							storageaccess: 1,
							parentfilter: 0,
							bandwidthlimit:
							{
								up: 234,
								down: 894
							}
						},
						{
							device: 'apple-air',
							time: 'offline',  /* online will display time, offline just give "offline" string */
							ip: '192.168.1.2',
							mac: '12:23:34:45:67:02',
							type: '5G',
							wanaccess: 0,
							storageaccess: 1,
							parentfilter: 0,
							bandwidthlimit:
							{
								up: 0,
								down: 0
							}
						},
						{
							device: 'client-air',
							time: 'offline',  /* online will display time, offline just give "offline" string */
							ip: '192.168.1.2',
							mac: '12:23:34:45:67:03',
							type: '5G',
							wanaccess: 1,
							storageaccess: 1,
							parentfilter: 0,
							bandwidthlimit:
							{
								up: 0,
								down: 0
							}
						},
						{
							device: 'cool-air',
							time: 'offline',  /* online will display time, offline just give "offline" string */
							ip: '192.168.1.2',
							mac: '12:23:34:45:67:04',
							type: '5G',
							wanaccess: 1,
							storageaccess: 1,
							parentfilter: 1,
							bandwidthlimit:
							{
								up: 0,
								down: 0
							}
						},
						{
							device: 'awesome-air',
							time: 'offline',  /* online will display time, offline just give "offline" string */
							ip: '192.168.1.2',
							mac: '12:23:34:45:67:05',
							type: '5G',
							wanaccess: 1,
							storageaccess: 1,
							parentfilter: 0,
							bandwidthlimit:
							{
								up: 0,
								down: 0
							}
						}
					]
				}
			}
		};
		if (data.stat=='success') {
			$('#mobiledevicepage-1 .clientlist').data('data', data.feed.data.status).empty();
			$.each(data.feed.data.status, function(index, d) {
				wirelessstatuslist(d);
			});
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function setclientaccess(label) {
	var trData = label.parents('tr').data('data');
	var postData =
	{
		method: 'setclientaccess',
		sessionid: sessionID,
		mac: trData.mac,
		set: parseInt(label.attr('value'))
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
		if (data.stat=='success') {
			$.each($('#mobiledevicepage-1 .clientlist').data('data'), function(index, val) {
				if (val.mac==trData.mac) {
					val.wanaccess = postData.set;
					return false;
				}
			});
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function setstorageaccess(label) {
	var trData = label.parents('tr').data('data');
	var postData =
	{
		method: 'setstorageaccess',
		sessionid: sessionID,
		mac: trData.mac,
		set: parseInt(label.attr('value'))
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
		if (data.stat=='success') {
			$.each($('#mobiledevicepage-1 .clientlist').data('data'), function(index, val) {
				if (val.mac==trData.mac) {
					val.storageaccess = postData.set;
					return false;
				}
			});
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function setbandwidthlimit(trData) {
	if (isNaN(Number($('#bandwidthlimit .upload').val())) || isNaN(Number($('#bandwidthlimit .download').val()))) {
		enterFail_shake('#bandwidthlimit', '.apply', 'btn-default', 'btn-danger', 'Apply', 'Input must be interger.');
		return;
	}
	if ($('#bandwidthlimit .upload').val()=='' || $('#bandwidthlimit .download').val()=='') {
		enterFail_shake('#bandwidthlimit', '.apply', 'btn-default', 'btn-danger', 'Apply', 'Input empty.');
		return;
	}
	var postData =
	{
		method: 'setbandwidthlimit',
		sessionid: sessionID,
		mac: trData.mac,
		upload: $('#bandwidthlimit .upload').val(),
		download: $('#bandwidthlimit .download').val()
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
		if (data.stat=='success') {
			$('#mobiledevicepage-1 .clientlist>tr').each(function(index, el) {
				if ($(el).data('data').mac==trData.mac) {
					$(el).data('data').bandwidthlimit.up = postData.upload;
					$(el).data('data').bandwidthlimit.down = postData.download;
					if (postData.upload==0 && postData.download==0) {
						$(el).find('.bandwidthlimit>label[value="0"]').addClass('active').siblings().removeClass('active');
						$(el).find('.i-bandwidthlimit').addClass('hide');
						$('#bandwidthlimit').data('isSet', 0);
					} else {
						$(el).find('.i-bandwidthlimit').removeClass('hide');
						$('#bandwidthlimit').data('isSet', 1);
					}
				}
			});
			$.each($('#mobiledevicepage-1 .clientlist').data('data'), function(index, val) {
				if (val.mac==trData.mac) {
					val.bandwidthlimit.up = postData.upload;
					val.bandwidthlimit.down = postData.download;
					return false;
				}
			});
			$('#bandwidthlimit').modal('hide');
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function getparentalcontrl(btn) {
	var postData =
	{
		method: 'getparentalcontrl',
		sessionid: sessionID,
		mac: btn.parents('tr').data('data').mac
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
				}
			}
		};
		if (data.stat=='success') {
			$('#parentalview .day-schedule').setdata(data.feed.data.schedule);
			$('#parentalview').data('isSet', btn.parents('tr').data('data').parentfilter).modal('show');
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function setparentalcontrl(btn) {
	var objData = {};
	if (btn.is('label')) {
		objData = btn.parents('tr').data('data');
	} else {
		objData = btn.parents('.modal').data('data');
	}
	var postData =
	{
		method: 'setparentalcontrl',
		sessionid: sessionID,
		mac: objData.mac,
		data: {}
	};
	if (btn.attr('value')=='0') {
		postData.data =
		{
			sun: '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0',
			mon: '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0',
			tus: '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0',
			wen: '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0',
			thr: '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0',
			fri: '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0',
			sat: '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0'
		}
	} else {
		postData.data = $('#parentalview .day-schedule').getdata();
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
		if (data.stat=='success') {
			if (btn.is('label') && btn.attr('value')=='0') {
				$('#parentalview').data('isSet', 0);
				$('#mobiledevicepage-1 .clientlist>tr').each(function(index, el) {
					if ($(el).data('data').mac==objData.mac) {
						$(el).data('data').parentfilter = 0;
						return false;
					}
				});
				btn.parents('tr').find('.i-parentfilter').addClass('hide');
			} else {
				$('#parentalview').data('isSet', 1);
				$('#mobiledevicepage-1 .clientlist>tr').each(function(index, el) {
					if ($(el).data('data').mac==objData.mac) {
						$(el).data('data').parentfilter = 1;
						$(el).find('.i-parentfilter').removeClass('hide');
						return false;
					}
				});
				$('#parentalview').modal('hide');
			}
			$.each($('#mobiledevicepage-1 .clientlist').data('data'), function(index, val) {
				if (val.mac==trData.mac) {
					val.parentfilter = (btn.is('label') && btn.attr('value')=='0')?0:1;
					return false;
				}
			});
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}


// chart
function statistic(type) {
	var postData =
	{
		method: 'statistic',
		sessionid: sessionID,
		type1: type, //cpu/lan/wan/wiress24G/wireless5G
		type2: 'cpu'
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
					cpu: getcpurandom()
				}
			}
		};
		var differup,differdown;
		if(prevbandwidth[0]==0)
			differup = 0;
		else
			differup =  data.feed.data[type+'up'] - prevbandwidth[0];

		prevbandwidth[0] = data.feed.data[type+'up'];
		if(prevbandwidth[0]==0)
			differdown = 0;
		else
			differdown =  data.feed.data[type+'down'] - prevbandwidth[1];

		/* for demo only */
		differup =	Number(getbandwidthrandom(0));
		differdown = Number(getbandwidthrandom(1));



		if (data.stat == 'success') {
			if (randomdatabandwidth[0].length==60) {
				randomdatabandwidth[0] = randomdatabandwidth[0].slice(1);
			}
			randomdatabandwidth[0].push(differup);
			if (randomdatabandwidth[1].length==60) {
				randomdatabandwidth[1] = randomdatabandwidth[1].slice(1);
			}
			randomdatabandwidth[1].push(differdown);

			var res = [];
			for ( var i = 0; i< randomdatabandwidth[0].length; i++) {
				res.push([i, randomdatabandwidth[0][i]]);
			}
			var netret = [];
			netret.push(res);
			res = [];
			for ( var i = 0; i< randomdatabandwidth[1].length; i++) {
				res.push([i, randomdatabandwidth[1][i]]);
			}
			netret.push(res);

			// zip the generated y values with the x values

			if (randomdatacpu.length==60) {
				randomdatacpu = randomdatacpu.slice(1);
			}
			randomdatacpu.push(data.feed.data.cpu);
			var cpuret = [];
			for ( var i = 0; i< randomdatacpu.length; i++) {
				cpuret.push([i, randomdatacpu[i]]);
			}

			init_cpuloadchart(cpuret);
			init_nettrafficchart(netret);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getbandwidthrandom(j) {
	var previous = randomdatabandwidth[j].length ? randomdatabandwidth[j][randomdatabandwidth[j].length - 1] : 50;
	var y = previous + Math.random() * 1000000 - 500000;
	return(y < 0 ? 0 : y > 100000000 ? 100000000 : y);
}

function getcpurandom() {
	var previous = randomdatacpu.length ? randomdatacpu[randomdatacpu.length - 1] : 50;
	var y = previous + Math.random() * 10 - 5;
	return(y < 0 ? 0 : y > 100 ? 100 : y);
}

function init_userstaticchart() {
	if (userstaticpie != null) return;
	var postData =
	{
		method: 'userstatic',
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
					userstatic:
					[
						{
							name: 'wolfy',
							wanusage: 1024
						},
						{
							name: 'wolfy1',
							wanusage: 2048
						},
						{
							name: 'wolfy2',
							wanusage: 3072
						},
						{
							name: 'wolfy3',
							wanusage: 4096
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			var totalWAN = 0,
				pieData = [];
			$.each(data.feed.data.userstatic, function(index, val) {
				totalWAN += val.wanusage;
			});
			$.each(data.feed.data.userstatic, function(index, val) {
				pieData.push(
					{
						label: val.name,
						data: (val.wanusage/totalWAN)*100
					}
				)
			});
			var plotObj = $.plot($("#traffic-flot-pie-chart"), pieData, {
				series:
				{
					pie:
					{
						innerRadius: 0.5,
						show: true
					}
				},
				grid:
				{
					hoverable: true
				},
				tooltip: true,
				tooltipOpts:
				{
					content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
					shifts:
					{
						x: 20,
						y: 0
					},
					defaultTheme: false
				},
				legend: {
					backgroundOpacity: 0,
					labelFormatter: function(label, series) {
						// series is the series object for the label
						return '<div class="flot-legendFont">&nbsp;' + label + '</div>';
					}
				}
			});
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function init_nettrafficchart(data) {
	var container = $("#nettraffic");
	nettrrafficseries =
	[
		{
			data: data[0],
			lines:
			{
				fill: false
			}
		},
		{
			data: data[1],
			lines:
			{
				fill: false
			}
		}
	];
	var miny=1;
	for(var i=0;i<data[0].length;i++)
	    if (data[0][i][1]>miny) miny=data[0][i][1];
	for(var i=0;i<data[1].length;i++)
	    if (data[1][i][1]>miny) miny=data[1][i][1];
	if(miny<1000) miny=1000;
	nettrafficplot = $.plot(container, nettrrafficseries,
	{
		grid:
		{
			borderWidth: 1,
			minBorderMargin: 20,
			labelMargin: 10,
			backgroundColor:
			{
				colors: ["rgba(0,0,0,0)", "rgba(0,0,0,0)"]
			},
			margin:
			{
				top: 8,
				bottom: 20,
				left: 20
			}
		},
		xaxis:
		{
			tickFormatter: function() {
				return "";
			}

		},
		yaxis:
		{
			tickFormatter:function(val, axis) {
			    if (val >= 1000000)
			        return (val / 1000000) + " MB";
			    else if (val >= 1000)
			        return (val / 1000) + " kB";
			    else
			        return val + " B";
			},
			min: 0,
			max: miny,
			font:
			{
				// color: '#00daff'
				color: '#333'
			}
		},
		legend:
		{
			show: true
		},
		series:
		{
			lines:
			{
				show: true,
				lineWidth: 1,
				fillColor:
				{
					colors:
					[
						{
							opacity: 0.4
						},
						{
							opacity: 0.1
						}
					]
				}
			}
		},
		// colors: ['rgba(0, 218, 255, 0.8)', 'rgba(255, 255, 255, 0)']
		colors: ['rgba(255, 0, 0, 1)', '#f9ff00']

	});
	nettrafficplot.setData(nettrrafficseries);
	nettrafficplot.draw();
}
function init_cpuloadchart(data) {
	var container = $("#cpuload");
	cpuloadseries =
	[
		{
			data: data,
			lines:
			{
				fill: false
			}
		}
	];

	cpuloadplot = $.plot(container, cpuloadseries,
	{
		grid:
		{
			borderWidth: 1,
			minBorderMargin: 20,
			labelMargin: 10,
			backgroundColor:
			{
				colors: ["rgba(0,0,0,0)", "rgba(0,0,0,0)"]
			},
			margin:
			{
				top: 8,
				bottom: 20,
				left: 20
			}
		},
		xaxis:
		{
			tickFormatter: function() {
				return "";
			}
		},
		yaxis:
		{
			min: 0,
			max: 100,
			font:
			{
				// color: '#00daff'
				color: '#333'
			}
		},
		legend:
		{
			show: true
		},
		series:
		{
			lines:
			{
				show: true,
				lineWidth: 1,
				fillColor:
				{
					colors:
					[
						{
							opacity: 0.4
						},
						{
							opacity: 0.1
						}
					]
				}
			}
		},
		// colors: ['rgba(0, 218, 255, 0.8)', 'rgba(255, 255, 255, 0)']
		colors: ['rgba(255, 0, 0, 1)']
	});
	cpuloadplot.setData(cpuloadseries);
	cpuloadplot.draw();
}

var intervalNattraffic = null;
function setIntervalNattrafficandCpu(type) {
	intervalNattraffic =
	setInterval(function updateRandom() {
		if ($('#dashboardpage').css('display') == 'block' && $('#wifirouterpage').hasClass('active')) {
			statistic(type);
		}
	}, 1000);
}

function setIntervalSystemtime() {
	setInterval(function drawSystemtime() {
		$('#systemtimestr').html(moment($('#systemtimestr').html()).add(1, 'seconds').utc().format());
		// $('#uptimestr').html(moment($('#uptimestr').html()).add(1, 'seconds').utc().format());
		uptimeVal = moment(uptimeVal).add(1, 'seconds');
		$('#uptimestr').html(moment(uptimeVal).date()+' day '+moment(uptimeVal).hour()+' hour '+moment(uptimeVal).minute()+' min '+moment(uptimeVal).second()+' sec');
	}, 1000);
}

$(document).ready(function() {
	$('#wifirouterpage-1 .btn-checkbox').click(function() {
		prevbandwidth[0]=0;
		prevbandwidth[1]=0;
		randomdatabandwidth[0]=[];
		randomdatabandwidth[1]=[];
		for(var i=0;i<60;i++) {
		   randomdatabandwidth[0].push(0);
		   randomdatabandwidth[1].push(0);
		}
		clearInterval(intervalNattraffic);
		setIntervalNattrafficandCpu($(this).attr('value'));
	});

	$('[href="#internetpage"]').on('shown.bs.tab', function() {
		wanstatus();
	});

	$('#eventmsg').on('hidden.bs.dropdown', function () {
		seteventread();
	})

	$('#internetpage-2 .set').click(function() {
		$(this).hide();
		$('#internetpage-2 .test').hide();
		$('#internetpage-2 .ok').show();
		$('#internetpage-2 .list [up]').html('<input type="text" value="'+parseInt($('#internetpage-2 .list [up]').html())+'">').children().focus().select();
		$('#internetpage-2 .list [down]').html('<input type="text" value="'+parseInt($('#internetpage-2 .list [down]').html())+'">');
	});
	$('#internetpage-2 .ok').click(function() {
		wanspeedset();
	});
	$('#internetpage-2 .test').click(function() {
		wanspeedtest();
	});

	// 連線設備
	$('#mobiledevicepage-1 .clientlist').on('click', '.wanaccess>label, .parentfilter>label, .i-parentfilter, .storageaccess>label, .bandwidthlimit>label, .i-bandwidthlimit', function(event) {
		event.preventDefault();
		switch (true) {
			case $(this).parent().hasClass('wanaccess'):
				setclientaccess($(this));
				break;
			case $(this).parent().hasClass('parentfilter'):
				if ($(this).attr('value')=='1') {
					$('#parentalview').data('data', $(this).parents('tr').data('data'));
					getparentalcontrl($(this));
				} else {
					setparentalcontrl($(this));
				}
				break;
			case $(this).hasClass('i-parentfilter'):
				$(this).siblings('.parentfilter').children('label[value="1"]').trigger('click');
				break;
			case $(this).parent().hasClass('storageaccess'):
				setstorageaccess($(this));
				break;
			case $(this).parent().hasClass('bandwidthlimit'):
				var data =$(this).parents('tr').data('data');
				if ($(this).attr('value')=='1') {
					$('#bandwidthlimit .limit>label[value="1"]').trigger('click');
					$('#bandwidthlimit .upload').val(data.bandwidthlimit.up);
					$('#bandwidthlimit .download').val(data.bandwidthlimit.down);
					$('#bandwidthlimit').data({
						data: data,
						isSet: (data.bandwidthlimit.up && data.bandwidthlimit.down)?1:0
					}).modal('show');
				} else {
					$('#bandwidthlimit .upload').val(0);
					$('#bandwidthlimit .download').val(0);
					setbandwidthlimit(data);
				}
				break;
			case $(this).hasClass('i-bandwidthlimit'):
				$(this).siblings('.bandwidthlimit').children('label[value="1"]').trigger('click');
				break;
		}
	});
	$('#parentalview').on('hidden.bs.modal', function() {
		$('#mobiledevicepage-1 .clientlist>tr').each(function(index, el) {
			if ($('#parentalview').data('data').mac==$(el).data('data').mac) {
				$(el).find('.parentfilter>label[value="'+$('#parentalview').data('isSet')+'"]').addClass('active').siblings().removeClass('active');
				if ($('#parentalview').data('isSet')==0) {
					$(el).find('.i-parentfilter').addClass('hide');
				}
				return false;
			}
		});
	});
	$('#bandwidthlimit').on('hidden.bs.modal', function() {
		$('#mobiledevicepage-1 .clientlist>tr').each(function(index, el) {
			if ($('#bandwidthlimit').data('data').mac==$(el).data('data').mac) {
				$(el).find('.bandwidthlimit>label[value="'+$('#bandwidthlimit').data('isSet')+'"]').addClass('active').siblings().removeClass('active');
				if ($('#bandwidthlimit').data('isSet')==0) {
					$(el).find('.i-bandwidthlimit').addClass('hide');
				}
				return false;
			}
		});
	});

	// search device
	$('#mobiledevicepage-1 .devicesearch').keyup(function() {
		var thisVal = $(this).val();
		$('#mobiledevicepage-1 .clientlist').empty();
		$.each($('#mobiledevicepage-1 .clientlist').data('data'), function(index, val) {
			wirelessstatuslist(val);
		});
		if (thisVal=='') return;
		var searchContent = [];
		$('#mobiledevicepage-1 .clientlist>tr>td.device:contains('+thisVal+')').each(function(index, el) {
			$.each($('#mobiledevicepage-1 .clientlist').data('data'), function(index1, val) {
				if ($(el).parent().data('data').device==val.device) {
					searchContent.push(val);
				}
			});
		});
		$('#mobiledevicepage-1 .clientlist').empty();
		$.each(searchContent, function(index, val) {
			wirelessstatuslist(val);
		});
	});

	// filter device
	$('#mobiledevicepage-1 th.device').click(function() {
		var deviceArr = [];
		$('#mobiledevicepage-1 .clientlist>tr').each(function(index, el) {
			deviceArr.push($(el).data('data').device);
		});
		switch ($(this).data('sort')) {
			case 1:
				deviceArr.sort();
				deviceArr.reverse();
				$(this).data('sort', 0).removeClass('sort');
				break;
			case 0:
				deviceArr.sort();
				$(this).data('sort', 1).addClass('sort');
				break;
			default:
				deviceArr.sort();
				$(this).data('sort', 1).addClass('sort');
				break;
		}
		var filterContent = [];
		$.each(deviceArr, function(index, val) {
			$('#mobiledevicepage-1 .clientlist>tr').each(function(index1, el) {
				if (val==$(el).data('data').device) {
					filterContent.push($(el).data('data'));
				}
			});
		});
		$('#mobiledevicepage-1 .clientlist').empty();
		$.each(filterContent, function(index, val) {
			wirelessstatuslist(val);
		});
	});

	$('#parentalview').on('click', '.btn-ok', function(event) {
		event.preventDefault();
		setparentalcontrl($(this));
	});
	$('#parentalview').on('shown.bs.modal', function() {
		$(this).modal('handleUpdate');
	});
	$("a[href='#mobiledevicepage']").on('shown.bs.tab', function(event) {
		event.preventDefault();
		wirelessstatus();
	});
	$('#bandwidthlimit .limit>label').click(function() {
		if ($(this).attr('value')=='1') {
			$('#bandwidthlimit .group-limit').slideDown();
		} else {
			$('#bandwidthlimit .group-limit').slideUp().find('input').val(0);
		}
	});
	$('#bandwidthlimit .apply').click(function() {
		setbandwidthlimit($('#bandwidthlimit').data('data'));
	});

	$('#wifirouterpage-2').on('click', '.updatefever', function(event) {
		event.preventDefault();
		$.ajax({
			type: 'GET',
			url: 'https://download.thinkbroadband.com/20MB.zip',
			xhrFields: {
				onprogress: function(event) {
					//Download progress
					if (event.lengthComputable) {
						$('#wifirouterpage-2 .updatefever').html(event.loaded/event.total*100+'%');
					}
				}
			},
			success: function(data, textStatus, jqXHR) {
				console.log(data);
				console.log(textStatus);
				console.log(jqXHR);
			}
		});
	});
});