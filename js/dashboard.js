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
					hwver: 'V1.0REV1',
					uptime: 776273,
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
			$('.sysinfo').empty();
			$('.sysinfo').append(
				'<tr>'+
					'<td>System Time</td>'+
					'<td id="systemtimestr">'+moment(data.time).utc().format()+'</td>'+
				'</tr>'+
				'<tr>'+
					'<td>Firmware Version</td>'+
					'<td>'+data.fever+'</td>'+
				'</tr>'+
				'<tr>'+
					'<td>Hardware Version</td>'+
					'<td>'+data.hwver+'</td>'+
				'</tr>'+
				'<tr>'+
					'<td>System UPTime</td>'+
					'<td id="uptimestr"	 >'+moment(data.uptime).utc().format()+'</td>'+
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
							id: '0',
							messagecontent: 'WAN disconnected!!!',
							isread: 0,
							time: '2017/08/24 10:30:35'
						},
						{
							id: '1',
							messagecontent: 'WAN disconnected!!',
							isread: 0,
							time: '2017/08/24 10:30:35'
						},
						{
							id: '2',
							messagecontent: 'WAN disconnected!',
							isread: 0,
							time: '2017/08/24 10:30:35'
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			$('#eventmsg .count').html(data.feed.data.message.length);
			$('#eventmsg>.dropdown-menu').empty();
			$.each(data.feed.data.message, function(index, val) {
				$('#eventmsg>.dropdown-menu').append(
					'<li msgid="'+val.id+'" isread="'+val.isread+'">'+
						'<a>'+
							'<i class="fa fa-comment fa-fw"></i> '+val.messagecontent+
							'<small class="pull-right text-muted">'+val.time+'</small>'+
						'</a>'+
					'</li>'
				);
			});
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function seteventread() {
	var postData =
	{
		method: 'seteventread',
		sessionid: sessionID
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
							wanaccess: true,
							storageaccess: true,
							bandwidthlimit:
							{
								up: 5234,
								down: 7894
							}
						},
						{
							device: 'wolfy-air',
							time: 'offline',  /* online will display time, offline just give "offline" string */
							ip: '192.168.1.2',
							mac: '12:23:34:45:67:01',
							type: '5G',
							wanaccess: true,
							storageaccess: true,
							bandwidthlimit:
							{
								up: 234,
								down: 894
							}
						},
						{
							device: 'wolfy-air',
							time: 'offline',  /* online will display time, offline just give "offline" string */
							ip: '192.168.1.2',
							mac: '12:23:34:45:67:02',
							type: '5G',
							wanaccess: true,
							storageaccess: true,
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
			$('#mobiledevicepage-1 .clientlist').empty();
			var limit = {};
			$.each(data.feed.data.status, function(index, d) {
				limit = true;
				if (d.bandwidthlimit.up==0 && d.bandwidthlimit.down==0) {
					limit = false;
				}
				$('#mobiledevicepage-1 .clientlist').append(
					'<tr>' +
						'<td>'+
							'<div class="btn-group">'+
								'<button type="button" class="btn btn-default btn-sm wanaccess" value="'+((d.wanaccess) ? true : false)+'">WAN('+((d.wanaccess) ? 'Permit' : 'Deny')+')</button>' +
								'<button type="button" class="btn btn-default btn-sm parentfilter">Parental Control</button>'+
								'<button type="button" class="btn btn-default btn-sm permitshare" value="'+((d.storageaccess) ? true : false)+'">StorageShare('+((d.storageaccess) ? 'ON' : 'OFF')+')</button>'+
								'<button type="button" class="btn btn-default btn-sm bandwidthlimit" value="'+((limit) ? true : false)+'">BandwidthLimit</button>'+
							'</div>'+
						'</td>'+
						'<td><i class="fa fa-apple"></i> ' + d.device + ' (' + d.type + ')</td>' +
						'<td>'+d.time+'</td>' +
						'<td>' + d.ip + '</td>' +
						'<td>' + d.mac.toUpperCase() + '</td>' +
					'</tr>'
				).children('tr:last-child').data('data', d);
			});
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function setclientaccess(tr) {
	var trData = tr.data('data');
	var postData =
	{
		method: 'setclientaccess',
		sessionid: sessionID,
		mac: trData.mac,
		set: (tr.find('.wanaccess').attr('value')=='true')?true:false
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
			tr.find('.wanaccess')
				.attr('value', (postData.set)?'false':'true')
				.html('WAN('+((postData.set)?'Deny':'Permit')+')');
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function setstorageaccess(tr) {
	var trData = tr.data('data');
	var postData =
	{
		method: 'setstorageaccess',
		sessionid: sessionID,
		mac: trData.mac,
		set: (tr.find('.permitshare').attr('value')=='true')?true:false
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
			tr.find('.permitshare')
				.attr('value', (postData.set)?'false':'true')
				.html('StorageShare('+((postData.set)?'OFF':'ON')+')');
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
						$(el).find('.bandwidthlimit').attr('value', false);
					} else {
						$(el).find('.bandwidthlimit').attr('value', true);
					}
				}
			});
			$('#bandwidthlimit').modal('hide');
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function getparentalcontrl(tr) {
	var postData =
	{
		method: 'getparentalcontrl',
		sessionid: sessionID,
		mac: tr.data('data').mac
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
			$('#parentalview').modal('show');
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function setparentalcontrl(modalData) {
	var postData =
	{
		method: 'setparentalcontrl',
		sessionid: sessionID,
		mac: modalData.mac,
		data: $('#parentalview .day-schedule').getdata()
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
			$('#parentalview').modal('hide');
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
		type2: ''
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
					cpu: getRandomDatacpu(),
					lan: getRandomDatabandwidth(),
					wan: getRandomDatabandwidth(),
					wireless24g: getRandomDatabandwidth(),
					wireless5g: getRandomDatabandwidth()
				}
			}
		};
		if (data.stat == 'success') {
			switch (type) {
				case 'cpu':
					init_cpuloadchart(data.feed.data[type]);
					break;
				default:
					init_nettrafficchart(data.feed.data[type]);
					break;
			}
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function getRandomDatacpu() {
	var container = $('#cpuload');
	var maximum = container.outerWidth() / 4 || 300;

	if (randomdatacpu.length) {
		randomdatacpu = randomdatacpu.slice(1);
	}

	while (randomdatacpu.length < maximum) {
		var previous = randomdatacpu.length ? randomdatacpu[randomdatacpu.length - 1] : 50;
		var y = previous + Math.random() * 10 - 5;
		randomdatacpu.push(y < 0 ? 0 : y > 100 ? 100 : y);
	}

	// zip the generated y values with the x values

	var res = [];
	for (var i = 0; i < randomdatacpu.length; ++i) {
		res.push([i, randomdatacpu[i]])
	}

	return res;
}

function getRandomDatabandwidth() {
	var container = $('#nettraffic');
	var ret = [];
	var maximum = container.outerWidth() / 4 || 300;
	if(randomdatabandwidth[0]==null) {
		randomdatabandwidth[0] = [];
	}
	if(randomdatabandwidth[1]==null) {
		randomdatabandwidth[1] = [];
	}
	for(var j = 0; j < 2; j++ ) {
		if (randomdatabandwidth[j].length) {
			randomdatabandwidth[j] = randomdatabandwidth[j].slice(1);
		}

		while (randomdatabandwidth[j].length < maximum) {
			var previous = randomdatabandwidth[j].length ? randomdatabandwidth[j][randomdatabandwidth[j].length - 1] : 50;
			var y = previous + Math.random() * 1000000 - 500000;
			randomdatabandwidth[j].push(y < 0 ? 0 : y > 100000000 ? 100000000 : y);
		}

		// zip the generated y values with the x values

		var res = [];
		for (var i = 0; i < randomdatabandwidth[j].length; ++i) {
			res.push([i, randomdatabandwidth[j][i]])
		}
		ret.push(res);
	}

	return ret;
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
			    if (val > 1000000)
			        return (val / 1000000).toFixed(axis.tickDecimals) + " MB";
			    else if (val > 1000)
			        return (val / 1000).toFixed(axis.tickDecimals) + " kB";
			    else
			        return val.toFixed(axis.tickDecimals) + " B";
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
				fill: true
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
function setIntervalNattraffic(type) {
	intervalNattraffic =
	setInterval(function updateRandom() {
		if ($('#dashboardpage').css('display') == 'block' && $('#wifirouterpage').hasClass('active')) {
			statistic(type);
		}
	}, 1000);
}

function setIntervalCpuload() {
	setInterval(function updateRandom() {
		if ($('#dashboardpage').css('display') == 'block' && $('#wifirouterpage').hasClass('active')) {
			statistic('cpu');
		}
	}, 1000);
}

function setIntervalSystemtime() {
	setInterval(function drawSystemtime() {
		$('#systemtimestr').html(moment($('#systemtimestr').html()).add(1, 'seconds').utc().format());
		$('#uptimestr').html(moment($('#uptimestr').html()).add(1, 'seconds').utc().format());
	}, 1000);
}

$(document).ready(function() {
	$('#wifirouterpage-1 .btn-checkbox').click(function() {
		clearInterval(intervalNattraffic);
		setIntervalNattraffic($(this).attr('value'));
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
	$('#mobiledevicepage-1 .clientlist').on('click', '.wanaccess, .parentfilter, .permitshare, .bandwidthlimit', function(event) {
		event.preventDefault();
		switch (true) {
			case $(this).hasClass('wanaccess'):
				setclientaccess($(this).parents('tr'));
				break;
			case $(this).hasClass('parentfilter'):
				$('#parentalview').data('data', $(this).parents('tr').data('data'));
				getparentalcontrl($(this).parents('tr'));
				break;
			case $(this).hasClass('permitshare'):
				setstorageaccess($(this).parents('tr'));
				break;
			case $(this).hasClass('bandwidthlimit'):
				var data =$(this).parents('tr').data('data');
				if ($(this).attr('value')=='true') {
					$('#bandwidthlimit .limit>label[value="1"]').trigger('click');
					$('#bandwidthlimit .upload').val(data.bandwidthlimit.up);
					$('#bandwidthlimit .download').val(data.bandwidthlimit.down);
				} else {
					$('#bandwidthlimit .limit>label[value="0"]').trigger('click');
				}
				$('#bandwidthlimit').data('data', data).modal('show');
				break;
		}
	});
	$('#parentalview').on('click', '.btn-ok', function(event) {
		event.preventDefault();
		setparentalcontrl($('#parentalview').data('data'));
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
});