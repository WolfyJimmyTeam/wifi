function init_storagestaticchart() {
	if (storagestaticpie != null) return;
	var postData =
	{
		method: 'storageinfo',
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
					avail: 1000000000000,
					pic: 1000000000000,
					vid: 1000000000000,
					mus: 1000000000000,
					doc: 1000000000000,
					ipc: 1000000000000,
					oth: 1000000000000,
					status: 'Normal',
					sleepmode: 'enable',
					sambastatus: 'enable',
					sambaguest: 'enable',
					ftpstatus: 'enable',
					ftpguest: 'enable',
					webdav: 'enable',
					webdavguest: 'enable',
					wanwebdav: 'enable',
					nfsstatus: 'enable',
					nfsguest: 'enable',
					afpstatus: 'enable',
					dlnastatus: 'enable',
					smart: 'enable',
					filesystemcheck: 'enable',
					format: 'enable',
					userauth: 'enable',
					supportprinter: 'enable'
				}
			}
		};
		if (data.stat == 'success') {
			var d = data.feed.data;
			// status
			$('#storagesharepage-2 [status]').html(d.status);
			if (d.sleepmode=='unsupported') {
				$('#storagesharepage-2 [sleepmode]').parents('tr').hide();
			} else {
				$('#storagesharepage-2 [sleepmode]').html(d.sleepmode).parents('tr').show();
			}

			function hideTr(type) {
				if (d[type]=='unsupported') {
					$('#storagesharepage-2 .'+type).parents('tr').hide();
				} else {
					$('#storagesharepage-2 .'+type)
						.children('label[value="'+d[type]+'"]')
						.addClass('active').siblings().removeClass('active')
						.parents('tr').show();
				}
			}
			hideTr('sambastatus');
			$('#storagesharepage-2 .sambaguest>[value="'+d.sambaguest+'"]').addClass('active').siblings().removeClass('active');
			hideTr('ftpstatus');
			$('#storagesharepage-2 .ftpguest>[value="'+d.ftpguest+'"]').addClass('active').siblings().removeClass('active');
			hideTr('webdav');
			$('#storagesharepage-2 .webdavguest>[value="'+d.webdavguest+'"]').addClass('active').siblings().removeClass('active');
			$('#storagesharepage-2 .wanwebdav>[value="'+d.wanwebdav+'"]').addClass('active').siblings().removeClass('active');
			hideTr('nfsstatus');
			$('#storagesharepage-2 .nfsguest>[value="'+d.nfsguest+'"]').addClass('active').siblings().removeClass('active');
			hideTr('afpstatus');
			hideTr('dlnastatus');

			if (d.supportprinter=='unsupported') {
				$('#printerconfigbtn').parents('tr').hide();
			} else {
				$('#printerconfigbtn').parents('tr').show();
			}

			function hideBtn(type) {
				if (d[type]=='unsupported') {
					$('#storagesharepage-2 .'+type).hide();
				} else {
					$('#storagesharepage-2 .'+type).show();
				}
			}
			hideBtn('smart');
			hideBtn('filesystemcheck');
			hideBtn('format');

			// chart
			var totalStorage = 0,
				pieData = [];
			totalStorage = d.avail+d.pic+d.vid+d.mus+d.doc+d.ipc+d.oth;
			var shiftvalue=
				{
					val: 1024*1024,
					unit: 'MB'
				};
			if(totalStorage>1024*1024*1024) {
				shiftvalue=
					{
						val: 1024*1024*1024,
						unit: 'GB'
					};
			}
			$('#storagesharepage-1 .total').html((totalStorage/shiftvalue.val).toFixed(2)+' '+shiftvalue.unit);
			$('#storagesharepage-1 .available').html((d.avail/shiftvalue.val).toFixed(2)+' '+shiftvalue.unit);
			var pieData =
			[
				{
					label: "Available",
					data: (d.avail/totalStorage)*100
				},
				{
					label: "Picture",
					data: (d.pic/totalStorage)*100
				},
				{
					label: "Video",
					data: (d.vid/totalStorage)*100
				},
				{
					label: "Music",
					data: (d.mus/totalStorage)*100
				},
				{
					label: "Document",
					data: (d.doc/totalStorage)*100
				},
				{
					label: "IPCam",
					data: (d.ipc/totalStorage)*100
				},
				{
					label: "Others",
					data: (d.oth/totalStorage)*100
				}
			];

			var plotObj = $.plot($("#storage-flot-pie-chart"), pieData, {
				series:
				{
					pie:
					{
						show: true
					}
				},
				grid:
				{
					hoverable: true
				},
				tooltip: true,
				tooltipOpts: {
					content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
					shifts:
					{
						x: 20,
						y: 0
					},
					defaultTheme: false
				},
				legend:
				{
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
function serviceenable(editData) {
	var postData =
	{
		method: 'serviceenable',
		sessionid: sessionID,
		service: editData.service,
		action: editData.action
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
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function guestenable(editData) {
	var postData =
	{
		method: 'guestenable',
		sessionid: sessionID,
		service: editData.service,
		action: editData.action
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
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function wanwebdav(editData) {
	var postData =
	{
		method: 'wanwebdav',
		sessionid: sessionID,
		action: editData
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
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function getprinters() {
	var postData =
	{
		method: 'getprinters',
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
					printers:
					[
						{
							uname: 'EPSON1',
							alias: 'EPSON_WF-2630_Series',
							description: 'EPSON_WF-2630_Series',
							status: 'Idle'
						},
						{
							uname: 'EPSON2',
							alias: 'EPSON_WF-3000_Series',
							description: 'EPSON_WF-3000_Series',
							status: 'Idle'
						},
						{
							uname: 'EPSON3',
							alias: 'EPSON_WF-3000_Series',
							description: 'EPSON_WF-3000_Series',
							status: 'Idle'
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			$('#printerconfigview .printerlist tbody').empty();
			$.each(data.feed.data.printers, function(index, val) {
				$('#printerconfigview .printerlist tbody').append(
					'<tr>'+
						'<td>'+
							'<div class="btn-group">'+
								'<button type="button" class="btn btn-default btn-sm btn-edit"><span class="glyphicon glyphicon-pencil"></span></button>'+
								'<button type="button" class="btn btn-default btn-sm btn-del"><span class="glyphicon glyphicon-trash"></span></button>'+
							'</div>'+
						'</td>'+
						'<td>'+val.alias+'</td>'+
						'<td>'+val.description+'</td>'+
						'<td>'+val.status+'</td>'+
					'</tr>'
				).children('tr:last-child').data('data', val);
			});
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function getavalibleprinter() {
	var postData =
	{
		method: 'getavalibleprinter',
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
					printers:
					[
						{
							uname: 'EPSON1',
							alias: 'EPSON_WF-2630_Series',
							description: 'EPSON_WF-2630_Series',
							status: 'Idle'
						},
						{
							uname: 'EPSON2',
							alias: 'EPSON_WF-3000_Series',
							description: 'EPSON_WF-3000_Series',
							status: 'Idle'
						},
						{
							uname: 'EPSON3',
							alias: 'EPSON_WF-3000_Series',
							description: 'EPSON_WF-3000_Series',
							status: 'Idle'
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			$('#printerconfigview .printerlist tbody').empty();
			$.each(data.feed.data.printers, function(index, val) {
				$('#printerconfigview .printerlist tbody').append(
					'<tr>'+
						'<td>'+
							'<div class="btn-group">'+
								'<button type="button" class="btn btn-default btn-sm btn-edit"><span class="glyphicon glyphicon-pencil"></span></button>'+
								'<button type="button" class="btn btn-default btn-sm btn-del"><span class="glyphicon glyphicon-trash"></span></button>'+
							'</div>'+
						'</td>'+
						'<td>'+val.name+'</td>'+
						'<td>'+val.description+'</td>'+
						'<td>'+val.status+'</td>'+
					'</tr>'
				);
			});
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function getavailableprinter() {
	var postData =
	{
		method: 'getavailableprinter',
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
					printers:
					[
						{
							uname: 'EPSON1',
							alias: 'EPSON_WF-2630_Series'
						},
						{
							uname: 'EPSON2',
							alias: 'EPSON_WF-3000_Series'
						},
						{
							uname: 'EPSON3',
							alias: 'EPSON_WF-3000_Series'
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			$('#printerconfigview .available').empty();
			$.each(data.feed.data.printers, function(index, val) {
				$('#printerconfigview .available').append(
					'<option value="'+val.uname+'">'+val.alias+'</option>'
				);
			});
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function getprintermanufactory() {
	var postData =
	{
		method: 'getprintermanufactory',
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
					printers:
					[
						{
							uname: 'EPSON1',
							alias: 'EPSON'
						},
						{
							uname: 'HP1',
							alias: 'HP'
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			$('#printermanufactory').empty();
			$.each(data.feed.data.printers, function(index, val) {
				$('#printermanufactory').append(
					'<option value="'+val.uname+'">'+val.alias+'</option>'
				);
			});
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function getprintermodel() {
	var postData =
	{
		method: 'getprintermodel',
		sessionid: sessionID,
		uname: $('#printermodel').val()
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
					printers:
					[
						{
							uname: 'EPSON1',
							alias: 'EPSON_WF-2630_Series'
						},
						{
							uname: 'EPSON2',
							alias: 'EPSON_WF-3000_Series'
						}
					]
				}
			}
		};
		if ($('#printermanufactory').val()=='HP1') {
			data.feed.data =
			{
				printers:
				[
					{
						uname: 'HP1',
						alias: 'HP_WF-2630_Series'
					},
					{
						uname: 'HP2',
						alias: 'HP_WF-3000_Series'
					}
				]
			};
		}
		if (data.stat == 'success') {
			$('#printermodel').empty();
			$.each(data.feed.data.printers, function(index, val) {
				$('#printermodel').append(
					'<option value="'+val.uname+'">'+val.alias+'</option>'
				);
			});
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function editPrinter(method) {
	var postData =
	{
		url: serverURL,
		method: method,
		sessionid: sessionID,
		uname: $('#printerconfigview .available').val(),
		desc: $('#printerconfigview .desc').val(),
		type:$('#printerconfigview .type').val()
	};
	if (postData.type=='manual') {
		postData['manufactory'] = $('#printermanufactory').val();
		postData['model'] = $('#printermodel').val();
	}
	if (postData.type=='upload') {
		upload(postData);
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
			getprinters();
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function deleteprinter(tr) {
	var postData =
	{
		method: 'deleteprinter',
		sessionid: sessionID,
		uname: tr.data('data').uname
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
			tr.remove();
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function getprinterjobs() {
	var postData =
	{
		method: 'getprinterjobs',
		sessionid: sessionID,
		jobstatus: $('#printerjobview .status').val()
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
					printerjobs:
					[
						{
							uname: 'EPSON1',
							alias: 'EPSON_WF-2630_Series',
							size: '1000Kb',
							filename: 'c:\wolfytest.pdf',
							status: 'Idle'
						},
						{
							uname: 'EPSON2',
							alias: 'EPSON_WF-2631_Series',
							size: '1000Kb',
							filename: 'c:\wolfytest.pdf',
							status: 'Idle'
						},
						{
							uname: 'EPSON3',
							alias: 'EPSON_WF-2632_Series',
							size: '1000Kb',
							filename: 'c:\wolfytest.pdf',
							status: 'Idle'
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			$('#printerjobview .printerjoblist tbody').empty();
			$.each(data.feed.data.printerjobs, function(index, val) {
				$('#printerjobview .printerjoblist tbody').append(
					'<tr>'+
						'<td>'+
							'<div class="btn-group">'+
								'<button type="button" class="btn btn-default btn-sm btn-del"><span class="glyphicon glyphicon-trash"></span></button>'+
							'</div>'+
						'</td>'+
						'<td>'+val.alias+'</td>'+
						'<td>'+val.size+'</td>'+
						'<td>'+val.filename+'</td>'+
						'<td>'+val.status+'</td>'+
					'</tr>'
				).children('tr:last-child').data('data', val);
			});
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function deleteprinterjob(tr) {
	var postData =
	{
		method: 'deleteprinterjob',
		sessionid: sessionID,
		uname: tr.data('data').uname
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
			tr.remove();
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function smartstatus() {
	$('#storagesharepage-2 .smart').addClass('active');
	var postData =
	{
		method: 'smartstatus',
		sessionid: sessionID
	};
	setTimeout(function() {
	// $.post(serverURL, postData, function(data, textStatus, jqXHR) {
		var data =
		{
			stat: 'success',
			feed:
			{
				msg: 'Success',
				data:
				{
					statuslist:
					[
						{
							attr: 'Write errors corrected without substantial delay',
							val: '0'
						},
						{
							attr: 'Total bytes written',
							val: '25,183,480,221,696'
						},
						{
							attr: 'Read errors corrected with possible delays',
							val: '20'
						},
						{
							attr: 'Total bytes read',
							val: '58,043,244,984,832'
						},
						{
							attr: 'Total uncorrected read errors',
							val: '0'
						},
						{
							attr: 'Reference temperature',
							val: '65'
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			$('#storagesharepage-2 .smart').removeClass('active');
			$('#modal-smartstatus table>tbody').empty();
			$.each(data.feed.data.statuslist, function(index, val) {
				$('#modal-smartstatus table>tbody').append(
					'<tr>'+
						'<td>'+val.attr+'</td>'+
						'<td>'+val.val+'</td>'+
					'</tr>'
				);
			});
			$('#modal-smartstatus').modal('show');
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
	}, 2000);
}
var filesystemcheckInterval;
var demodData =
{
	stat: 'success',
	feed:
	{
		msg: 'Success',
		data:
		{
			percentage: 0,
			filename: 'images'
		}
	}
};
function filesystemcheck() {
	var postData =
	{
		method: 'filesystemcheck',
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
					needcheck: true
				}
			}
		};
		if (data.stat == 'success') {
			if (data.feed.data.needcheck) {
				$('#modal-filesystemcheck').modal('show');
				demodData.feed.data.percentage = 0;
				filesystemcheckInterval = setInterval(function() {
					getfilesystemcheckstatus();
				}, 2000);
			} else {
				myalert('nothing checked');
			}
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function getfilesystemcheckstatus() {
	var postData =
	{
		method: 'getfilesystemcheckstatus',
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
					percentage: 0,
					filename: 'images'
				}
			}
		};
		if (data.stat == 'success') {
			// if (data.feed.data==null) {
			if (demodData.feed.data.percentage>100) {
				clearInterval(filesystemcheckInterval);
				$('#modal-filesystemcheck').modal('hide');
			} else {
				demodData.feed.data.percentage += 30;
				$('#modal-filesystemcheck .filename').html(data.feed.data.filename);
				$('#modal-filesystemcheck .progress-bar').css('width', demodData.feed.data.percentage+'%');
			}
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
var formatInterval;
function format() {
	var postData =
	{
		method: 'format',
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
					needformat: true
				}
			}
		};
		if (data.stat == 'success') {
			if (data.feed.data.needformat) {
				$('#modal-format').modal('show');
				demodData.feed.data.percentage = 0;
				formatInterval = setInterval(function() {
					getformatstatus();
				}, 2000);
			} else {
				myalert('nothing formated');
			}
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function getformatstatus() {
	var postData =
	{
		method: 'getformatstatus',
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
					percentage: 0
				}
			}
		};
		if (data.stat == 'success') {
			// if (data.feed.data==null) {
			if (demodData.feed.data.percentage>100) {
				clearInterval(formatInterval);
				$('#modal-format').modal('hide');
			} else {
				demodData.feed.data.percentage += 30;
				$('#modal-format .progress-bar').css('width', demodData.feed.data.percentage+'%');
			}
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function usbsaferemove() {
	var postData =
	{
		method: 'usbsaferemove',
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
					needremove: true
				}
			}
		};
		if (data.stat == 'success') {
			if (data.feed.data.needremove) {
				usbsaferemovecheck();
			} else {
				myalert('nothing removed');
			}
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function usbsaferemovecheck() {
	$('#storagesharepage-2 .usbremove').addClass('active');
	var postData =
	{
		method: 'usbsaferemovecheck',
		sessionid: sessionID
	};
	setTimeout(function() {
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
			$('#storagesharepage-2 .usbremove').removeClass('active');
			myalert('USB safe remove done');
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
	}, 2000);
}


function appendUser(data) {
	return '<td>'+
				'<div class="btn-group">'+
					'<button type="button" class="btn btn-default btn-sm btn-edit"><span class="glyphicon glyphicon-pencil"></span></button>'+
					'<button type="button" class="btn btn-default btn-sm btn-del"><span class="glyphicon glyphicon-trash"></span></button>'+
				'</div>'+
			'</td>'+
			'<td name>'+data.username+'</td>'+
			'<td>'+data.nickname+'</td>'+
			'<td>'+data.desc+'</td>';
}
function getusers() {
	var postData =
	{
		method: 'getusers',
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
					users:
					[
						{
							username: 'wolfy',
							nickname: '蘇建益',
							desc: '爸爸'
						},
						{
							username: 'likky',
							nickname: '林太太',
							desc: '我的老婆'
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			$('#storagesharepage-3 .list>tbody').empty();
			$.each(data.feed.data.users, function(index, val) {
				$('#storagesharepage-3 .list>tbody').append(
					'<tr>'+
						appendUser(val)+
					'</tr>'
				).children('tr:last-child').data('data', val);
			});
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function adduser(addData) {
	var isExisted = false;
	$('#storagesharepage-3 .list>tbody [name]').each(function(index, el) {
		if ($(el).html() == addData.username) {
			enterFail_shake('#modal-edit-storagesharepage-3', '.btn-ok', 'btn-default', 'btn-danger', 'ok', 'username existed, try something else!!');
			isExisted = true;
			return false;
		}
	});
	if (isExisted) return;
	var postData =
	{
		method: 'adduser',
		sessionid: sessionID,
		username: addData.username,
		nickname: addData.nickname,
		desc: addData.desc
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
			$('#storagesharepage-3 .list>tbody').append(
				'<tr>'+
					appendUser(addData)+
				'</tr>'
			).children('tr:last-child').data('data', addData);
			$('#modal-edit-storagesharepage-3').modal('hide');
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function updateuser(editData) {
	var postData =
	{
		method: 'updateuser',
		sessionid: sessionID,
		nickname: editData.nickname,
		desc: editData.desc
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
			$('#storagesharepage-3 .list>tbody td[name]').each(function(index, el) {
				if ($(el).html()==editData.username) {
					$(el).parent().html(appendUser(editData));
					return false;
				}
			});
			$('#modal-edit-storagesharepage-3').modal('hide');
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function deleteuser(delData) {
	var postData =
	{
		method: 'deleteuser',
		sessionid: sessionID,
		username: delData
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
			$('#storagesharepage-3 .list>tbody td[name]').each(function(index, el) {
				if ($(el).html()==delData) {
					$(el).parent().remove();
					return false;
				}
			});
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function getdirectory() {
	var postData =
	{
		method: 'getdirectory',
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
					folders:
					['wife', 'son', 'kitchen', 'bedroom']
				}
			}
		};
		if (data.stat == 'success') {
			$('.folderGroup').empty();
			var contain = '';
			$.each(data.feed.data.folders, function(index, val) {
				if (index<1) {
					contain +=
						'<div class="main">Home</div>'+
						'<div class="sub">'+val+'</div>';
				} else {
					contain += '<div class="sub">'+val+'</div>';
				}
			});
			$('.folderGroup').append(contain);
			$('.folderGroup-remove>.sub').append('<span class="glyphicon glyphicon-remove btn-remove"></span>');
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function makedirectory(directory) {
	if (directory=='') {
		$('#modal-folder-storagesharepage-4 input').focus();
		return;
	}
	var isExisted = false;
	$('#modal-folder-storagesharepage-4 .folderGroup>div').each(function(index, el) {
		if ($(el).text()==$('#modal-folder-storagesharepage-4 input').val()) {
			myalert('Directory existed, please try something else!!');
			isExisted = true;
			return false;
		}
	});
	if (isExisted) return;
	var postData =
	{
		method: 'makedirectory',
		sessionid: sessionID,
		directory: directory
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
			$('#modal-folder-storagesharepage-4 .formGroup').remove();
			$('#modal-folder-storagesharepage-4 .btn-ok').hide();
			$('#modal-folder-storagesharepage-4 .btn-add').show();
			$('.folderGroup').append(
				'<div class="sub">'+directory+'</div>'
			);
			$('.folderGroup-remove>.sub:last-child').append('<span class="glyphicon glyphicon-remove btn-remove"></span>');
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function removedirectory(sub) {
	var postData =
	{
		method: 'removedirectory',
		sessionid: sessionID,
		directory: sub.text()
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
					shared: true
				}
			}
		};
		if (data.stat == 'success') {
			if (data.feed.data.shared) {
				$('#modal-forcedelet .messagetext').data('data',sub.text()).text('"'+sub.text()+'" has been shared, do you still force to delete it?');
				$('#modal-forcedelet').modal('show');
			} else {
				sub.remove();
			}
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function forceremovedirectory(dir) {
	var postData =
	{
		method: 'forceremovedirectory',
		sessionid: sessionID,
		directory: dir
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
		if (data.stat == "success") {
			getshares();
			$('.folderGroup>.sub').each(function(index, el) {
				if ($(el).text()==dir) {
					$(el).remove();
				}
			});
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});

}

function appendShare(data) {
	return '<tr>'+
				'<td>'+
					'<div class="btn-group">'+
						'<button type="button" class="btn btn-default btn-sm btn-edit"><span class="glyphicon glyphicon-pencil"></span></button>'+
						'<button type="button" class="btn btn-default btn-sm btn-remove"><span class="glyphicon glyphicon-trash"></span></button>'+
					'</div>'+
				'</td>'+
				'<td>'+data.sharename+'</td>'+
				'<td>'+data.directory+'</td>'+
				'<td>'+data.type+'</td>'+
				'<td desc>'+data.desc+'</td>'+
			'</tr>';
}
function appendShareUsers(data, permission) {
	return '<tr>'+
				'<td name>'+data.username+'</td>'+
				'<td alias>'+data.nickname+'</td>'+
				'<td desc>'+data.desc+'</td>'+
				'<td>'+
					'<div class="btn-group" data-toggle="buttons">'+
						'<label class="btn btn-checkbox'+((permission=='RW')?' active':'')+'" value="RW">'+
							'<input type="radio">RW'+
						'</label>'+
						'<label class="btn btn-checkbox'+((permission=='R')?' active':'')+'" value="R">'+
							'<input type="radio">R'+
						'</label>'+
					'</div>'+
				'</td>'+
			'</tr>';
}
function getshares() {
	var postData =
	{
		method: 'getshares',
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
					shares:
					[
						{
							directory: 'Home',
							sharename: '家裡',
							type: 'FTP',
							desc: '分享給家人',
							users:
							[
								{
									username: 'wolfy',
									nickname: '蘇建益',
									desc: '爸爸',
									permission: 'RW'
								}
							]
						},
						{
							directory: 'wife',
							sharename: '老婆',
							type: 'SAMBA',
							desc: '給老婆',
							users:
							[
								{
									username: 'wolfy',
									nickname: '蘇建益',
									desc: '爸爸',
									permission: 'RW'
								},
								{
									username: 'likky',
									nickname: '林太太',
									desc: '我的老婆',
									permission: 'R'
								}
							]
						}
					]
				}
			}
		};
		if (data.stat == 'success') {
			$('#storagesharepage-4 .list>tbody').empty();
			$.each(data.feed.data.shares, function(index, val) {
				$('#storagesharepage-4 .list>tbody')
					.append(appendShare(val))
					.children('tr:last-child')
					.data('data', val);
			});
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function addshare() {
	var isExisted = false;
	$('#storagesharepage-4 .list>tbody>tr').each(function(index, el) {
		if ($(el).data('data').sharename==$('#modal-add-storagesharepage-4 .name').val() && $(el).data('data').type==$('#modal-add-storagesharepage-4 .type').val()) {
			myalert('Service existed, try something else!!!');
			isExisted = true;
			return false;
		}
	});
	if (isExisted) return;
	var postData =
	{
		method: 'addshare',
		sessionid: sessionID,
		data:
		{
			shares: []
		}
	};
	$('#modal-add-storagesharepage-4 .folderGroup>.active').each(function(index, el) {
		var usersArr = [];
		$('#modal-add-storagesharepage-4 .table-select>tbody>tr.active').each(function(index1, el1) {
			usersArr.push(
				{
					username: $(el1).children('td[name]').html(),
					nickname: $(el1).children('td[alias]').html(),
					desc: $(el1).children('td[desc]').html(),
					permission: $(el1).find('.btn-group>label.active').attr('value')
				}
			);
		});
		postData.data.shares.push(
			{
				directory: $(el).html(),
				sharename: $('#modal-add-storagesharepage-4 .name').val(),
				type: $('#modal-add-storagesharepage-4 .type').val(),
				desc: $('#modal-add-storagesharepage-4 .desc').val(),
				users: usersArr
			}
		);
	});
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
			$.each(postData.data.shares, function(index, val) {
				$('#storagesharepage-4 .list>tbody')
					.append(appendShare(val))
					.children('tr:last-child')
					.data('data', val);
			});
			$('#modal-add-storagesharepage-4').modal('hide');
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function updateshare() {
	var postData =
	{
		method: 'updateshare',
		sessionid: sessionID,
		data:
		{
			shares: []
		}
	};
	var usersArr = [];
	$('#modal-edit-storagesharepage-4 table>tbody>tr').each(function(index, el) {
		usersArr.push(
			{
				username: $(el).children('td[name]').html(),
				nickname: $(el).children('td[alias]').html(),
				desc: $(el).children('td[desc]').html(),
				permission: $(el).find('.btn-group>label.active').attr('value')
			}
		);
	});
	postData.data.shares.push(
		{
			directory: $('#modal-edit-storagesharepage-4 .dir').html(),
			sharename: $('#modal-edit-storagesharepage-4 span.name').html(),
			type: $('#modal-edit-storagesharepage-4 .type').html(),
			desc: $('#modal-edit-storagesharepage-4 .desc').val(),
			users: usersArr
		}
	);
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
			console.log(postData);
			$('#storagesharepage-4 .list>tbody>tr').each(function(index, el) {
				if ($('#modal-edit-storagesharepage-4 span.name').html()==$(el).data('data').sharename && $('#modal-edit-storagesharepage-4 .type').html()==$(el).data('data').type) {
					$(el).children('td[desc]').html(postData.data.shares[0].desc);
					$(el).data('data').desc = postData.data.shares[0].desc;
					$(el).data('data').users = postData.data.shares[0].users;
				}
			});
			$('#modal-edit-storagesharepage-4').modal('hide');
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function removeshare(tr) {
	var postData =
	{
		method: 'removeshare',
		sessionid: sessionID,
		sharename: tr.data('data').name,
		type: tr.data('data').type
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
			console.log(postData);
			tr.remove();
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

$(document).ready(function() {
	// service status
	$('#storagesharepage-2 .sambastatus>label').click(function() {
		serviceenable(
			{
				service: 'sambastatus',
				action: $(this).attr('value')
			}
		);
	});
	$('#storagesharepage-2 .sambaguest>label').click(function() {
		guestenable(
			{
				service: 'sambaguest',
				action: $(this).attr('value')
			}
		);
	});
	$('#storagesharepage-2 .ftpstatus>label').click(function() {
		serviceenable(
			{
				service: 'ftpstatus',
				action: $(this).attr('value')
			}
		);
	});
	$('#storagesharepage-2 .ftpguest>label').click(function() {
		guestenable(
			{
				service: 'ftpguest',
				action: $(this).attr('value')
			}
		);
	});
	$('#storagesharepage-2 .webdav>label').click(function() {
		serviceenable(
			{
				service: 'webdav',
				action: $(this).attr('value')
			}
		);
	});
	$('#storagesharepage-2 .webdavguest>label').click(function() {
		guestenable(
			{
				service: 'webdavguest',
				action: $(this).attr('value')
			}
		);
	});
	$('#storagesharepage-2 .wanwebdav>label').click(function() {
		wanwebdav($(this).attr('value'));
	});
	$('#storagesharepage-2 .nfsstatus>label').click(function() {
		serviceenable(
			{
				service: 'nfsstatus',
				action: $(this).attr('value')
			}
		);
	});
	$('#storagesharepage-2 .nfsguest>label').click(function() {
		guestenable(
			{
				service: 'nfsguest',
				action: $(this).attr('value')
			}
		);
	});
	$('#storagesharepage-2 .afpstatus>label').click(function() {
		serviceenable(
			{
				service: 'afpstatus',
				action: $(this).attr('value')
			}
		);
	});
	$('#storagesharepage-2 .dlnastatus>label').click(function() {
		serviceenable(
			{
				service: 'dlnastatus',
				action: $(this).attr('value')
			}
		);
	});

	// printer
	$('#printerconfigbtn').click(function() {
		getprinters();
		$('#printerconfigview').modal('show');
	});

	$(document).on('click', '#addprinter', function(e) {
		getavailableprinter();
		$('.printeradd').attr('style', 'display:block;');
		$('.printerlist').attr('style', 'display:none;');
		$(this).parent().attr('style', 'display:none;');
		$('#addprinterok').data('isAdd', true);
	});
	$('#printerconfigview .printerlist').on('click', '.btn-edit, .btn-del', function(event) {
		event.preventDefault();
		switch (true) {
			case $(this).hasClass('btn-edit'):
				getavailableprinter();
				$('.printeradd').attr('style', 'display:block;');
				$('.printerlist').attr('style', 'display:none;');
				$('#addprinter').parent().attr('style', 'display:none;');
				$('#addprinterok').data('isAdd', false);

				var trData = $(this).parents('tr').data('data');
				$('#printerconfigview .available').val(trData.uname);
				$('#printerconfigview .desc').val(trData.alias);
				break;
			case $(this).hasClass('btn-del'):
				deleteprinter($(this).parents('tr'));
				break;
		}
	});
	$(document).on('click', '#addprinterok', function(e) {
		$('.printeradd').attr('style', 'display:none;');
		$('.printerlist').attr('style', 'display:block;');
		$('#addprinter').parent().removeAttr('style');
		if ($(this).data('isAdd')) {
			editPrinter('addprinter');
		} else {
			editPrinter('updateprinter');
		}
	});
	$(document).on('click', '#addprintercancel', function(e) {
		$('.printeradd').attr('style', 'display:none;');
		$('.printerlist').attr('style', 'display:block;');
		$('#addprinter').parent().removeAttr('style');
	});

	$(document).on('change', '#printerdriverselect', function(e) {
		$('.printermanual').attr('style', 'display:none');
		$('.printerupload').attr('style', 'display:none');
		if ($(this).val() == 'manual') {
			getprintermanufactory();
			$('.printermanual').attr('style', 'display:block');
		}
		if ($(this).val() == 'upload') {
			$('.printerupload').attr('style', 'display:block');
		}
	});
	$('#printermanufactory').change(function() {
		getprintermodel();
	});

	$('#printerjobbtn').click(function() {
		getprinterjobs();
		$('#printerjobview').modal('show');
	});
	$('#printerjobview .status').change(function() {
		getprinterjobs($(this).val());
	});
	$('#printerjobview .printerjoblist').on('click', '.btn-del', function(event) {
		event.preventDefault();
		deleteprinterjob($(this).parents('tr'));
	});

	$('#storagesharepage-2 .smart').click(function() {
		smartstatus();
	});
	$('#storagesharepage-2 .filesystemcheck').click(function() {
		filesystemcheck();
	});
	$('#storagesharepage-2 .format').click(function() {
		format();
	});
	$('#storagesharepage-2 .usbremove').click(function() {
		usbsaferemove();
	});


	// 分享使用者
	$('#storagesharepage-3').on('click', '.btn-add, .btn-edit, .btn-del', function(event) {
		event.preventDefault();
		switch (true) {
			case $(this).hasClass('btn-add'):
				$('#modal-edit-storagesharepage-3')
					.data('isAdd', true)
					.find('.modal-title').html('<span class="glyphicon glyphicon-plus"></span> Add')
					.end().find('input').val('')
					.end().find('input.name').parent().parent().show();
				$('#modal-edit-storagesharepage-3').data('isAdd', true).modal('show');
				break;
			case $(this).hasClass('btn-edit'):
				var trData = $(this).parents('tr').data('data');
				$('#modal-edit-storagesharepage-3')
					.data('isAdd', false)
					.find('.modal-title').html('<span class="glyphicon glyphicon-pencil"></span> Edit <span class="name">'+trData.username+'</span>')
					.end().find('.alias').val(trData.nickname)
					.end().find('.desc').val(trData.desc)
					.end().find('input.name').parent().parent().hide();
				$('#modal-edit-storagesharepage-3').data('isAdd', false).modal('show');
				break;
			case $(this).hasClass('btn-del'):
				var trData = $(this).parents('tr').data('data');
				$.confirm({
					title: '<span class="glyphicon glyphicon-warning-sign"></span> Delete user confirm',
					text: 'Delete user "'+trData.username+'"?',
					confirmButton: '<span class="glyphicon glyphicon-trash"></span> delete',
					confirmButtonClass: 'btn-danger',
					cancelButton: 'cancel',
					post: true,
					confirm: function(button) {
						deleteuser(trData.username);
					}
				});
				break;
		}
	});
	$('#modal-edit-storagesharepage-3 .btn-ok').click(function() {
		var modal = $(this).parents('.modal');
		if (modal.data('isAdd')) {
			adduser(
				{
					username: modal.find('.name').val(),
					nickname: modal.find('.alias').val(),
					desc: modal.find('.desc').val()
				}
			);
		} else {
			updateuser(
				{
					username: modal.find('.name').html(),
					nickname: modal.find('.alias').val(),
					desc: modal.find('.desc').val()
				}
			);
		}
	});

	// 分享目錄
		// 新增分享
	$('#storagesharepage-4').on('click', '.btn-add', function(event) {
		event.preventDefault();
		$('#modal-add-storagesharepage-4 .table-select>tbody').empty();
		var obj = {};
		// 重抓原本的user list
		$('#storagesharepage-3 .list>tbody>tr').each(function(index, el) {
			obj = $(el).data('data');
			$('#modal-add-storagesharepage-4 .table-select>tbody').append(appendShareUsers(obj, 'RW'));
		});
		$('#modal-add-storagesharepage-4 .main').addClass('active').siblings().removeClass('active');
		$('#modal-add-storagesharepage-4 .table-select tr:first-child').addClass('active').siblings().removeClass('active');
		$('#modal-add-storagesharepage-4')
			.find('input').val('')
			.end().modal('show');
	});
	$('#modal-add-storagesharepage-4 .btn-ok').click(function() {
		addshare();
	});
		// 編輯分享
	$('#storagesharepage-4').on('click', '.btn-edit, .btn-remove', function(event) {
		event.preventDefault();
		var tr = $(this).parents('tr'),
			trData = tr.data('data');
		switch (true) {
			case $(this).hasClass('btn-edit'):
				$('#modal-edit-storagesharepage-4 table>tbody').empty();
				$.each(trData.users, function(index, val) {
					$('#modal-edit-storagesharepage-4 table>tbody').append(appendShareUsers(val, val.permission));
				});
				$('#modal-edit-storagesharepage-4')
					.find('.dir').html(trData.directory)
					.end().find('.type').html(trData.type)
					.end().find('.desc').val(trData.desc)
					.end().find('.modal-title').html('<span class="glyphicon glyphicon-pencil"></span> Share Edit <span class="name">'+trData.sharename+'</span>')
					.end().modal('show');
				break;
			case $(this).hasClass('btn-remove'):
				$.confirm({
					title: '<span class="glyphicon glyphicon-warning-sign"></span> Unshare confirm',
					text: 'Unshare "'+tr.data('data').sharename+'"?',
					confirmButton: '<span class="glyphicon glyphicon-trash"></span> unshare',
					confirmButtonClass: 'btn-danger',
					cancelButton: 'cancel',
					post: true,
					confirm: function(button) {
						removeshare(tr);
					}
				});
				break;
		}
	});
	$('#modal-edit-storagesharepage-4 .btn-ok').click(function() {
		updateshare();
	});
		// 新增目錄
	$('#storagesharepage-4').on('click', '.btn-folder', function(event) {
		event.preventDefault();
		$('#modal-folder-storagesharepage-4').modal('show');
	});
	$('#modal-folder-storagesharepage-4 .btn-add').click(function() {
		$(this).hide();
		$(this).siblings('.btn-ok').show();
		$('#modal-folder-storagesharepage-4 .folderGroup').append(
			'<div class="sub formGroup">'+
				'<input type="text" class="input-all" placeholder="請輸入子目錄名稱">'+
			'</div>'
		).find('input').focus();
	});
	$('#modal-folder-storagesharepage-4 .btn-ok').click(function() {
		event.preventDefault();
		makedirectory($('#modal-folder-storagesharepage-4 .formGroup>input').val());
	});
	$('#modal-folder-storagesharepage-4').on('click', '.btn-remove', function(event) {
		event.preventDefault();
		var tr = $(this).parent();
		$.confirm({
			title: '<span class="glyphicon glyphicon-warning-sign"></span> Delete folder confirm',
			text: 'Delete folder "'+tr.text()+'"?',
			confirmButton: '<span class="glyphicon glyphicon-trash"></span> delete',
			confirmButtonClass: 'btn-danger',
			cancelButton: 'cancel',
			confirm: function(button) {
				removedirectory(tr);
			}
		});
	});
	$('#modal-forcedelet').on('click','.ok',function(event){
		forceremovedirectory($('#modal-forcedelet .messagetext').data('data'));
	});
});