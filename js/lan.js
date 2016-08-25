function getlanipset() {
	var postData =
	{
		method: 'getlanipset',
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
					ip: '192.168.1.1',
					netmask: '255.255.255.0'
				}
			}
		};
		if (data.stat == 'success') {
            updatetrigger=false;
			if(data.feed.data.ip=='')
				$('#lanippageip').val('___.___.___.___');
			else
				$('#lanippageip').val(data.feed.data.ip);
			if(data.feed.data.netmask=='')
				$('#lanippagenetmask').val('___.___.___.___');
			else
				$('#lanippagenetmask').val(data.feed.data.netmask);
            setTimeout(function(){
				updatetrigger=true;
			},0)
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function lanipset(type) {

	var ip = '',netmask='';
	if($('#lanippageip').val()!='___.___.___.___')
		ip=$('#lanippageip').val();
	if($('#lanippagenetmask').val()!='___.___.___.___')
		netmask=$('#lanippagenetmask').val();
    var postData =
    {
        method: 'lanipset',
        sessionid: sessionID,
		ip: $('#lanippageip').val(),
		netmask: $('#lanippagenetmask').val(),
        force: false
    };

    // $.post(serverURL, postData, function(data, textStatus, jqXHR) {
        var data =
        {
            stat: 'fail',
            feed:
            {
                msg: 'Success',
                data: {
                    conflictdhcp: true
                }
            }
        };
        if (data.stat == 'success') {
			$('body').removeData('check');
            myalert('ok');
        } else {
            if(data.feed.conflictdhcp)
                myalert(data.feed.msg);
            else {
                $.confirm({
                    text: "Do you change DHCP server ip range and gateway ip too?",
                    title: 'Message Content',
                    post: true,
                    confirmButton: "OK",
                    cancelButton: 'Cancel',
                    confirm: function(button) {
                        var postData =
                        {
                            method: 'lanipset',
                            sessionid: sessionID,
                            ip: $('#lanippageip').val(),
                            netmask: $('#lanippagenetmask').val(),
                            force: true
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
                    },
                });
            }
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function getdhcpserverset() {
	var postData =
	{
		method: 'getdhcpserverset',
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
					addressfrom:'192.168.1.10',
					addressto:'192.168.1.128',
					gatewayip: '192.168.1.1',
					dnsserver: '192.168.1.1',
					winsserver: '192.168.1.1',
					domainname: '',
					staticiplist: [{
						mac: '00:05:1B:C0:38:1B',
						ip: '192.168.2.129'
					}]
				}
			}
		};
		if (data.stat == 'success') {
            updatetrigger=false;
            $('#dhcpserverpageenable>label[value="'+data.feed.data.enable+'"]').trigger('click');
			if(data.feed.data.addressfrom=='')
				$('#dhcpserverpageaddressfrom').val('___.___.___.___');
			else
				$('#dhcpserverpageaddressfrom').val(data.feed.data.addressfrom);
			if(data.feed.data.addressto=='')
				$('#dhcpserverpageaddressto').val('___.___.___.___');
			else
				$('#dhcpserverpageaddressto').val(data.feed.data.addressto);
			if(data.feed.data.gatewayip=='')
				$('#dhcpserverpagegateway').val('___.___.___.___');
			else
				$('#dhcpserverpagegateway').val(data.feed.data.gatewayip);
			if(data.feed.data.dnsserver=='')
				$('#dhcpserverpagednsserver').val('___.___.___.___');
			else
				$('#dhcpserverpagednsserver').val(data.feed.data.dnsserver);
			if(data.feed.data.winsserver=='')
				$('#dhcpserverpagewinsserver').val('___.___.___.___');
			else
				$('#dhcpserverpagewinsserver').val(data.feed.data.winsserver);
			$('#dhcpserverpagedomainname').val(data.feed.data.domainname);
			$('.dhcpstaticiplist tbody').empty();
            $.each(data.feed.data.staticiplist,function (index,staticiplist) {
                $('.dhcpstaticiplist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
                    '<td>'+staticiplist.mac+'</td>'+
                    '<td>'+staticiplist.ip+'</td>'+
                    '</tr>').children('tr:last-child').data('data',staticiplist).end().find('a').popover();
            });
            setTimeout(function(){
				updatetrigger=true;
			},0)
		} else {
			myalert(data.feed.msg);
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}

function dhcpserverset(type) {
    var staticiplist=[];

    $('.dhcpstaticiplist tbody tr').each( function (index,value) {
        staticiplist.push($(this).data('data'));
    });

	var addressfrom = '',addressto='',gatewayip='',dnsserver='',winsserver='';
	if($('#dhcpserverpageaddressfrom').val()!='___.___.___.___')
		addressfrom=$('#dhcpserverpageaddressfrom').val();
	if($('#dhcpserverpageaddressto').val()!='___.___.___.___')
		addressto=$('#dhcpserverpageaddressto').val();
	if($('#dhcpserverpagegateway').val()!='___.___.___.___')
		gatewayip=$('#dhcpserverpagegateway').val();
	if($('#dhcpserverpagednsserver').val()!='___.___.___.___')
		dnsserver=$('#dhcpserverpagednsserver').val();
	if($('#dhcpserverpagewinsserver').val()!='___.___.___.___')
		winsserver=$('#dhcpserverpagewinsserver').val();
	if($('#dhcpserverpagewinsserver').val()!='___.___.___.___')
		winsserver=$('#dhcpserverpagewinsserver').val();
    var postData =
    {
        method: 'dhcpserverset',
        sessionid: sessionID,
		enable: Number($('#dhcpserverpageenable>label.active').attr('value')),
		addressfrom: addressfrom,
		addressto: addressto,
		gatewayip: gatewayip,
		dnsserver: dnsserver,
		winsserver: winsserver,
		domainname: $('#dhcpserverpagedomainname').val(),
		staticiplist: staticiplist
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
	$("a[href='#lanconfigpage']").on('shown.bs.tab', function(e) {
		$('#lanipindex').parent('li').siblings('li').removeClass('active');
		$('#lanipindex').parent('li').addClass('active');
    	$('#lanippage').siblings('div.genconfig').attr('style','display:none;');
    	$('#lanippage').attr('style','display:block;');
    	getlanipset();
	});

    $(document).on('click','#lanipindex',function (e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#lanippage').siblings('div.genconfig').attr('style','display:none;');
    	$('#lanippage').attr('style','display:block;');
       	$('#lannavbar.navbar-toggle:visible').click();
    	getlanipset();
    });
    $(document).on('click','#lanippage .apply',function (e) {
        lanipset();
    });

    $(document).on('click','#dhcpserverindex',function (e) {
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
    	$(this).parents('ul').children('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	$('#dhcpserverpage').siblings('div.genconfig').attr('style','display:none;');
    	$('#dhcpserverpage').attr('style','display:block;');
       	$('#lannavbar.navbar-toggle:visible').click();
       	getdhcpserverset();
        var maclists = getmaclists();
        $('#dhcpserverpagemaclist').empty();
        for(var i=0;i<maclists.length;i++) {
            $('#dhcpserverpagemaclist').append('<option>'+maclists[i]+'</option>');
        }
    });
    $(document).on('click','#dhcpserverpagemanualinput label',function (e) {
   		$('#dhcpserverpagemaclist,#dhcpserverpagemac').parent('div').parent('div').hide();
       	if($('#dhcpserverpagemanualinput>label.active').attr('value')=='1') {
       		$('#dhcpserverpagemaclist').parent('div').parent('div').show();
       	} else {
       		$('#dhcpserverpagemac').parent('div').parent('div').show();
       	}
    });
    $(document).on('click','#adddhcpstaticip',function (e) {
    	$('.dhcpstaticipadd').attr('style','display:block;');
    	$('.dhcpstaticiplist').attr('style','display:none;');
    	$(this).attr('style','display:none;');
    	$('#dhcpserverpagemac').val('__:__:__:__:__:__');
    	$('#dhcpserverpagemaclist').val($('#dhcpserverpagemaclist option:eq(0)').val());
    	$('#dhcpserverpageip').val('___.___.___.___');
   		$('#dhcpserverpagemanualinput>label[value="1"]').trigger('click');
   		$('#dhcpserverpagemaclist,#dhcpserverpagemac').parent('div').parent('div').hide();
       	if($('#dhcpserverpagemanualinput>label.active').attr('value')=='0') {
       		$('#dhcpserverpagemaclist').parent('div').parent('div').show();
       	} else {
       		$('#dhcpserverpagemac').parent('div').parent('div').show();
       	}
        var gatewayip = $('#dhcpserverpagegateway').val();
        if(gatewayip=='___.___.___.___')
        	gatewayip = '';
        if(gatewayip!='') {
        	var gatewayiparray = gatewayip.split('.');
        	$('#dhcpserverpageip').val(gatewayiparray[0]+'.'+gatewayiparray[1]+'.'+gatewayiparray[2]+'.___');
        }
   });
    $(document).on('click','#adddhcpstaticipok',function (e) {
    	var mac='', ip='';
    	if($('#dhcpserverpagemanualinput>label.active').attr('value')=='0') {
    		mac = $('#dhcpserverpagemaclist').val();
    	} else {
	        if($('#dhcpserverpagemac').val()=='___.___.___.___') {
	            myalert('Please input the mac');
	            return;
	        } else {
	        	mac = $('#dhcpserverpagemac').val();
	        }
        }
        if($('#dhcpserverpageip').val()=='___.___.___.___') {
            myalert('Please input the ip');
            return;
        } else {
        	ip = $('#dhcpserverpageip').val();
        }
        var addokbool=true;
        $('.dhcpstaticiplist tbody tr').each( function (index,value) {
            var staticiplist = $(this).data('data');
            if(staticiplist.mac == mac) {
            	myalert('This machine was already in assigned list');
            	addokbool=false;
            	return;
            }
            if(staticiplist.ip == ip) {
            	myalert('This IP was already in assigned list');
            	addokbool=false;
            	return;
            }
        });
        if(!addokbool) return;
        var staticiplists = {
            mac:mac,
            ip:ip
        }
        $('.dhcpstaticiplist tbody').append('<tr><td> <button class="btn btn-default trash"><i class="glyphicon glyphicon-trash"></i></button></td>'+
            '<td>'+staticiplists.mac+'</td>'+
            '<td>'+staticiplists.ip+'</td>'+
            '</tr>').children('tr:last-child').data('data',staticiplists).end().find('a').popover();
    	$('.dhcpstaticipadd').attr('style','display:none;');
    	$('.dhcpstaticiplist').attr('style','display:block;');
    	$('#adddhcpstaticip').attr('style','display:block;');
    });
    $(document).on('click','#adddhcpstaticipcancel',function (e) {
    	$('.dhcpstaticipadd').attr('style','display:none;');
    	$('.dhcpstaticiplist').attr('style','display:block;');
    	$('#adddhcpstaticip').attr('style','display:block;');
    });
    $(document).on('click','.dhcpstaticiplist tbody .trash',function (e) {
        $(this).parents('tr').remove();
    });
    $(document).on('click','#dhcpserverpage .apply',function (e) {
        dhcpserverset();
    });

    $(document).on('keyup','#dhcpserverpage input',function (e) {
        if(updatetrigger==false) return;
        if((e.which >= 37 && e.which<=40) || e.which === 91 || e.which === 9){
            return;
        } else {
            console.log('test');
        }
    });
});