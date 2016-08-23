var sessionID = '';
var serverurl = '';
var userstaticpie;
var storagestaticpie;
var nettrafficplot;
var cpuloadplot;
var nettrrafficseries;
var randomdatacpu=[];
var randomdatabandwidth=[];
var uptimesec;
var systemsec = null;
var systemzone;
var updatetrigger=false;


function getmaclists() {

    var postData =
    {
        method: 'getmaclists',
        sessionid: sessionID,
    };
    var macs = [];

    // $.post(serverURL, postData, function(data, textStatus, jqXHR) {
        var data =
        {
            stat: 'success',
            feed:
            {
                msg: 'Success',
                data: {
                    macs: [
                   	'12:23:34:45:67:00',
                    '45:12:66:77:01:11'
                    ]
                }
            }
        };
       if (data.stat == 'success')
       		macs=data.feed.data.macs;
       	return macs
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {return macs;});
}

function getselectlist() {

    var postData =
    {
        method: 'getselectlist',
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
                    alllist: [ {
                    	name: 'authmode',
                    	selectlist: [
                    		{
                    			value:'0',
                    			text:'Open System',
                    			defaultoption:0
                    		},
                    		{
                    			value:'1',
                    			text:'Share Key',
                    			defaultoption:0
                    		},
                    		{
                    			value:'2',
                    			text:'WPA1-Personal',
                    			defaultoption:1
                    		},
                    		{
                    			value:'3',
                    			text:'WPA2-Personal',
                    			defaultoption:0
                    		},
                    		{
                    			value:'4',
                    			text:'WPA Mix Mode Personal',
                    			defaultoption:0
                    		},
                    		{
                    			value:'5',
                    			text:'WPA Enterprise',
                    			defaultoption:0
                    		},
                    		{
                    			value:'6',
                    			text:'WPA2 Enterprise',
                    			defaultoption:0
                    		},
                    		{
                    			value:'7',
                    			text:'WPA Mix Mode Enterprise',
                    			defaultoption:0
                    		}]
                    },{
                    	name: '24Gwirelessmode',
                    	selectlist: [
                    		{
                    			value:'0',
                    			text:'b',
                    			defaultoption:0
                    		},
                    		{
                    			value:'1',
                    			text:'g',
                    			defaultoption:0
                    		},
                    		{
                    			value:'2',
                    			text:'b/g',
                    			defaultoption:0
                    		},
                    		{
                    			value:'3',
                    			text:'n/g',
                    			defaultoption:1
                    		},
                    		{
                    			value:'4',
                    			text:'n',
                    			defaultoption:0
                    		}]
                    },{
                    	name: '5Gwirelessmode',
                    	selectlist: [
                    		{
                    			value:'0',
                    			text:'b',
                    			defaultoption:0
                    		},
                    		{
                    			value:'1',
                    			text:'g',
                    			defaultoption:0
                    		},
                    		{
                    			value:'2',
                    			text:'b/g',
                    			defaultoption:0
                    		},
                    		{
                    			value:'3',
                    			text:'n/g',
                    			defaultoption:1
                    		},
                    		{
                    			value:'4',
                    			text:'n',
                    			defaultoption:0
                    		}]
                    },{
                    	name: '24Gchannelbandwidth',
                    	selectlist: [
                    		{
                    			value:'0',
                    			text:'20/40MHz',
                    			defaultoption:1
                    		},
                    		{
                    			value:'1',
                    			text:'20MHz',
                    			defaultoption:0
                    		},
                    		{
                    			value:'2',
                    			text:'40MHz',
                    			defaultoption:0
                    		}]
                    },{
                    	name: '5Gchannelbandwidth',
                    	selectlist: [
                    		{
                    			value:'0',
                    			text:'20/40MHz',
                    			defaultoption:1
                    		},
                    		{
                    			value:'1',
                    			text:'20MHz',
                    			defaultoption:0
                    		},
                    		{
                    			value:'2',
                    			text:'40MHz',
                    			defaultoption:0
                    		}]
                    },{
                     	name: '24Gcontrolchannel',
                    	selectlist: [
                    		{
                    			value:'0',
                    			text:'Auto',
                    			defaultoption:1
                    		},
                    		{
                    			value:'1',
                    			text:'1',
                    			defaultoption:0
                    		},
                    		{
                    			value:'2',
                    			text:'2',
                    			defaultoption:0
                    		},
                    		{
                    			value:'3',
                    			text:'3',
                    			defaultoption:0
                    		},
                    		{
                    			value:'4',
                    			text:'4',
                    			defaultoption:0
                    		},
                    		{
                    			value:'5',
                    			text:'5',
                    			defaultoption:0
                    		},
                    		{
                    			value:'6',
                    			text:'6',
                    			defaultoption:0
                    		},
                    		{
                    			value:'7',
                    			text:'7',
                    			defaultoption:0
                    		},
                    		{
                    			value:'8',
                    			text:'8',
                    			defaultoption:0
                    		},
                    		{
                    			value:'9',
                    			text:'9',
                    			defaultoption:0
                    		},
                    		{
                    			value:'10',
                    			text:'10',
                    			defaultoption:0
                    		},
                    		{
                    			value:'11',
                    			text:'11',
                    			defaultoption:0
                    		},
                    		{
                    			value:'12',
                    			text:'12',
                    			defaultoption:0
                    		},
                    		{
                    			value:'13',
                    			text:'13',
                    			defaultoption:0
                    		}]
                    },{
                    	name: '5Gcontrolchannel',
                    	selectlist: [
                    		{
                    			value:'0',
                    			text:'Auto',
                    			defaultoption:1
                    		},
                    		{
                    			value:'1',
                    			text:'1',
                    			defaultoption:0
                    		},
                    		{
                    			value:'2',
                    			text:'2',
                    			defaultoption:0
                    		},
                    		{
                    			value:'3',
                    			text:'3',
                    			defaultoption:0
                    		},
                    		{
                    			value:'4',
                    			text:'4',
                    			defaultoption:0
                    		},
                    		{
                    			value:'5',
                    			text:'5',
                    			defaultoption:0
                    		},
                    		{
                    			value:'6',
                    			text:'6',
                    			defaultoption:0
                    		},
                    		{
                    			value:'7',
                    			text:'7',
                    			defaultoption:0
                    		},
                    		{
                    			value:'8',
                    			text:'8',
                    			defaultoption:0
                    		},
                    		{
                    			value:'9',
                    			text:'9',
                    			defaultoption:0
                    		},
                    		{
                    			value:'10',
                    			text:'10',
                    			defaultoption:0
                    		},
                    		{
                    			value:'11',
                    			text:'11',
                    			defaultoption:0
                    		},
                    		{
                    			value:'12',
                    			text:'12',
                    			defaultoption:0
                    		},
                    		{
                    			value:'13',
                    			text:'13',
                    			defaultoption:0
 	                  		}]
             		},{
                    	name: '24Gtxpoweradj',
                    	selectlist: [
                    		{
                    			value:'0',
                    			text:'100%',
                    			defaultoption:1
                    		},
                    		{
                    			value:'1',
                    			text:'75%',
                    			defaultoption:0
                    		},
                    		{
                    			value:'2',
                    			text:'50%',
                    			defaultoption:0
                    		},
                    		{
                    			value:'3',
                    			text:'25%',
                    			defaultoption:0
 	                  		}]
             		},{
                    	name: '5Gtxpoweradj',
                    	selectlist: [
                    		{
                    			value:'0',
                    			text:'100%',
                    			defaultoption:1
                    		},
                    		{
                    			value:'1',
                    			text:'75%',
                    			defaultoption:0
                    		},
                    		{
                    			value:'2',
                    			text:'50%',
                    			defaultoption:0
                    		},
                    		{
                    			value:'3',
                    			text:'25%',
                    			defaultoption:0
 	                  		}]
             		},{
                    	name: '24Gmulticastrate',
                    	selectlist: [
                    		{
                    			value:'0',
                    			text:'Auto',
                    			defaultoption:1
                    		},
                    		{
                    			value:'1',
                    			text:'OFDM 6',
                    			defaultoption:0
                    		},
                    		{
                    			value:'2',
                    			text:'OFDM 9',
                    			defaultoption:0
                    		},
                    		{
                    			value:'3',
                    			text:'OFDM 12',
                    			defaultoption:0
                    		},
                    		{
                    			value:'4',
                    			text:'OFDM 18',
                    			defaultoption:0
                    		},
                    		{
                    			value:'5',
                    			text:'OFDM 24',
                    			defaultoption:0
                    		},
                    		{
                    			value:'6',
                    			text:'OFDM 36',
                    			defaultoption:0
                    		},
                    		{
                    			value:'7',
                    			text:'OFDM 48',
                    			defaultoption:0
                    		},
                    		{
                    			value:'8',
                    			text:'OFDM 54',
                    			defaultoption:0
                    		},
                    		{
                    			value:'9',
                    			text:'CCK 1',
                    			defaultoption:0
                    		},
                    		{
                    			value:'10',
                    			text:'CCK 2',
                    			defaultoption:0
                    		},
                    		{
                    			value:'11',
                    			text:'CCK 5.5',
                    			defaultoption:0
                    		},
                    		{
                    			value:'12',
                    			text:'CCK 11',
                    			defaultoption:0
 	                  		}]
                    },{
                    	name: '5Gmulticastrate',
                    	selectlist: [
                    		{
                    			value:'0',
                    			text:'Auto',
                    			defaultoption:1
                    		},
                    		{
                    			value:'1',
                    			text:'OFDM 6',
                    			defaultoption:0
                    		},
                    		{
                    			value:'2',
                    			text:'OFDM 9',
                    			defaultoption:0
                    		},
                    		{
                    			value:'3',
                    			text:'OFDM 12',
                    			defaultoption:0
                    		},
                    		{
                    			value:'4',
                    			text:'OFDM 18',
                    			defaultoption:0
                    		},
                    		{
                    			value:'5',
                    			text:'OFDM 24',
                    			defaultoption:0
                    		},
                    		{
                    			value:'6',
                    			text:'OFDM 36',
                    			defaultoption:0
                    		},
                    		{
                    			value:'7',
                    			text:'OFDM 48',
                    			defaultoption:0
                    		},
                    		{
                    			value:'8',
                    			text:'OFDM 54',
                    			defaultoption:0
                    		},
                    		{
                    			value:'9',
                    			text:'CCK 1',
                    			defaultoption:0
                    		},
                    		{
                    			value:'10',
                    			text:'CCK 2',
                    			defaultoption:0
                    		},
                    		{
                    			value:'11',
                    			text:'CCK 5.5',
                    			defaultoption:0
                    		},
                    		{
                    			value:'12',
                    			text:'CCK 11',
                    			defaultoption:0
 	                  		}]
                    },{
                    	name: '24Gmeshchannel',
                    	selectlist: [
                    		{
                    			value:'1',
                    			text:'1',
                    			defaultoption:1
                    		},
                    		{
                    			value:'2',
                    			text:'2',
                    			defaultoption:0
 	                  		},
                    		{
                    			value:'3',
                    			text:'3',
                    			defaultoption:0
 	                  		},
                    		{
                    			value:'4',
                    			text:'4',
                    			defaultoption:0
 	                  		},
                    		{
                    			value:'5',
                    			text:'5',
                    			defaultoption:0
 	                  		},
                    		{
                    			value:'6',
                    			text:'6',
                    			defaultoption:0
 	                  		},
                    		{
                    			value:'7',
                    			text:'7',
                    			defaultoption:0
 	                  		},
                    		{
                    			value:'8',
                    			text:'8',
                    			defaultoption:0
 	                  		},
                    		{
                    			value:'9',
                    			text:'9',
                    			defaultoption:0
 	                  		},
                    		{
                    			value:'10',
                    			text:'10',
                    			defaultoption:0
 	                  		},
                    		{
                    			value:'11',
                    			text:'11',
                    			defaultoption:0
 	                  		}]
                    },{
                    	name: '5Gmeshchannel',
                    	selectlist: [
                    		{
                    			value:'1',
                    			text:'1',
                    			defaultoption:1
                    		},
                    		{
                    			value:'2',
                    			text:'2',
                    			defaultoption:0
 	                  		},
                    		{
                    			value:'3',
                    			text:'3',
                    			defaultoption:0
 	                  		},
                    		{
                    			value:'4',
                    			text:'4',
                    			defaultoption:0
 	                  		},
                    		{
                    			value:'5',
                    			text:'5',
                    			defaultoption:0
 	                  		},
                    		{
                    			value:'6',
                    			text:'6',
                    			defaultoption:0
 	                  		},
                    		{
                    			value:'7',
                    			text:'7',
                    			defaultoption:0
 	                  		},
                    		{
                    			value:'8',
                    			text:'8',
                    			defaultoption:0
 	                  		},
                    		{
                    			value:'9',
                    			text:'9',
                    			defaultoption:0
 	                  		},
                    		{
                    			value:'10',
                    			text:'10',
                    			defaultoption:0
 	                  		},
                    		{
                    			value:'11',
                    			text:'11',
                    			defaultoption:0
 	                  		}]
                    }]
                 }
            }
        };
        if (data.stat == 'success') {
			$.each(data.feed.data.alllist, function (index,alllist) {
	       		if(alllist.name=='authmode') {
	       			$('#wirelesswpamode, #modal-wirelessbridge .securitymode, #modal-mediabridge .securitymode').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#wirelesswpamode, #modal-wirelessbridge .securitymode, #modal-mediabridge .securitymode').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#wirelesswpamode, #modal-wirelessbridge .securitymode, #modal-mediabridge .securitymode').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='24Gwirelessmode') {
		       		$('#simplegeneralpage .mode').data('24G',alllist);
	       		}
	       		if(alllist.name=='5Gwirelessmode') {
	       			$('#simplegeneralpage .mode').data('5G',alllist);
	       		}
	       		if(alllist.name=='24Gchannelbandwidth') {
		       		$('#simplegeneralpage .bandwidth').data('24G',alllist);
	       		}
	       		if(alllist.name=='24Gchannelbandwidth') {
		       		$('#simplegeneralpage .bandwidth').data('5G',alllist);
	       		}
	       		if(alllist.name=='24Gcontrolchannel') {
		       		$('#simplegeneralpage .channel').data('24G',alllist);
	       		}
	       		if(alllist.name=='5Gcontrolchannel') {
		       		$('#simplegeneralpage .channel').data('5G',alllist);
	       		}
	       		if(alllist.name=='wpaencrypt') {
	       			$('#wpaencryption').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#wpaencryption').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#wpaencryption').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='protectedmanagementframes') {
	       			$('#simplegeneralpage .protectedmanageframe').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#simplegeneralpage .protectedmanageframe').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#simplegeneralpage .protectedmanageframe').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='24Gtxpoweradj') {
		       		$('#professionalpage .txpower').data('24G',alllist);
	       		}
	       		if(alllist.name=='5Gtxpoweradj') {
		       		$('#professionalpage .txpower').data('5G',alllist);
	       		}
	       		if(alllist.name=='24Gmulticastrate') {
		       		$('#professionalpage .multicastrate').data('24G',alllist);
	       		}
	       		if(alllist.name=='5Gmulticastrate') {
		       		$('#professionalpage .multicastrate').data('5G',alllist);
	       		}
	       		if(alllist.name=='24Gmeshchannel') {
		       		$('#meshpage .channel').data('24G',alllist);
	       		}
	       		if(alllist.name=='5Gmeshchannel') {
		       		$('#meshpage .channel').data('5G',alllist);
	       		}
	       		if(alllist.name=='wantype') {
	       			$('#gotonetpagewantype').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#gotonetpagewantype').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#gotonetpagewantype').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='dhcpupdatefreq') {
	       			$('#gotonetpagedhcpupdatefreq').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#gotonetpagedhcpupdatefreq').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#gotonetpagedhcpupdatefreq').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='porttriggerprotocol') {
	       			$('#porttriggerpageincomingprotocol').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#porttriggerpageincomingprotocol').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#porttriggerpageincomingprotocol').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='portforwardprotocol') {
	       			$('#portforwardpageprotocol').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#portforwardpageprotocol').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#portforwardpageprotocol').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='timezone') {
	       			$('#timepagetimezone').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#timepagetimezone').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#timepagetimezone').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='logstatuspagestatustype') {
	       			$('#logstatuspagestatustype').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#logstatuspagestatustype').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#logstatuspagestatustype').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='pptpvpnserverauth') {
	       			$('#pptpvpnserverauth').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#pptpvpnserverauth').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#pptpvpnserverauth').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='openvpnserverfirewall') {
	       			$('#openvpnserverfirewall').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#openvpnserverfirewall').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#openvpnserverfirewall').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='openvpnserverauthmode') {
	       			$('#openvpnserverauthmode').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#openvpnserverauthmode').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#openvpnserverauthmode').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='openvpnserverextrahmacauth') {
	       			$('#openvpnserverextrahmacauth').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#openvpnserverextrahmacauth').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#openvpnserverextrahmacauth').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='openvpnserverencryptioncipher') {
	       			$('#openvpnserverencryptioncipher').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#openvpnserverencryptioncipher').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#openvpnserverencryptioncipher').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='vpnclienttype') {
	       			$('#vpnclienttype').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#vpnclienttype').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#vpnclienttype').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='vpnclientpptpencryption') {
	       			$('#vpnclientpptpencryption').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#vpnclientpptpencryption').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#vpnclientpptpencryption').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='netservicefilterprotocol') {
	       			$('#netservicefilterprotocol').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#netservicefilterprotocol').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#netservicefilterprotocol').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='ipv6filterprotocol') {
	       			$('#ipv6filterprotocol').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#ipv6filterprotocol').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#ipv6filterprotocol').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='ipv6configtype') {
	       			$('#ipv6configtype').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#ipv6configtype').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#ipv6configtype').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='multicastipv4multicastroute') {
	       			$('#multicastipv4multicastroute').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#multicastipv4multicastroute').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#multicastipv4multicastroute').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='multicastipv6multicastroute') {
	       			$('#multicastipv6multicastroute').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#multicastipv6multicastroute').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#multicastipv6multicastroute').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='multicastipv6multicastroute') {
	       			$('#multicastipv6multicastroute').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#multicastipv6multicastroute').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#multicastipv6multicastroute').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='tospagessid') {
	       			$('#80211tospagessid').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#80211tospagessid').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#80211tospagessid').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       			$('#remarkingwmmpagessid').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#remarkingwmmpagessid').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#remarkingwmmpagessid').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='80211tospageremarkdesc') {
	       			$('#80211tospageremarkdesc').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#80211tospageremarkdesc').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#80211tospageremarkdesc').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='iptvpageremarkdesc') {
	       			$('#iptvpageremarkdesc').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#iptvpageremarkdesc').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#iptvpageremarkdesc').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='remarkingwmmlist') {
	       			$('#remarkingwmmlist').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#remarkingwmmlist').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#remarkingwmmlist').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='remarkingwmmlist') {
	       			$('#remarkingwmmlist').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#remarkingwmmlist').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#remarkingwmmlist').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
	       		if(alllist.name=='prioritizationapptype') {
	       			$('#prioritizationapptype').empty();
					$.each(alllist.selectlist, function (index,selectlist) {
						if(selectlist.defaultoption==0)
							$('#prioritizationapptype').append('<option value="'+selectlist.value+'">'+selectlist.text+'</option>')
						else
							$('#prioritizationapptype').append('<option value="'+selectlist.value+'" selected>'+selectlist.text+'</option>')
					});
	       		}
			});
        }
    // }, 'json').error(function(jqXHR, textStatus, errorThrown) {return macs;});
}

// function denyuser(denyornot,UserName,IP,MAC) {
// 	var postData = {
// 		UserName: UserName,
// 		IP: IP,
// 		MAC: MAC,
// 		sessionID: $.cookie('sessionID')
// 	};
// 	var url = "DelUser";
// 	if(denyornot == 'y')
// 		url = "RecUser";
// 	$.post(serverurl+"/cgi-bin/"+url, postData,
// 		function(data, textStatus, jqXHR) {
// 			if (data.Success == true) {
// 			} else {
// 				myalert('');
// 			};
// 	}, "json").fail(function(jqXHR, textStatus, errorThrown) {});

// }

// function userlogout()
// {
// 	var postData = {
// 	};
// 	$.get(serverurl+"/cgi-bin/Logout?sessionID="+$.cookie('sessionID'), postData,
// 		function(data, textStatus, jqXHR) {
// 				$.removeCookie('sessionID', {path: "/"});
// 				// $('#passwd').val('');
// 				// $('#login').show();
// 				// $('#login input:first').focus();
// 				// $("section#admin").hide();
// 				location.reload();
// 		}, "json").fail(function(jqXHR, textStatus, errorThrown) {
// 		});
// }

$(document).ready(function() {

	// bootstarp有BUG!! 檢查關閉modal時 其他的modal如果開著 就要把body加上modal-open
	// $("a[href='#mobiledevicepage']").on('shown.bs.tab', function(e) {
	// 	getclientlist();
	// });

	$("a[href='#wifirouterpage']").on('shown.bs.tab', function(e) {
	    	if(userstaticpie==null) {
			try {
				init_userstaticchart();
			} catch(e) {
				userstaticpie = null;
			}
		}
	});




	// $(document).on('click','#parentfilter',function(e){
	// 	$('#parentalview').modal('show');

	// });








    $('.mycollapse-link').on('click',function (e) {
    	if($(this).children('i').hasClass('fa-angle-up')) {
    		$(this).children('i').attr('class','fa fa fa-angle-down')
	    	$(this).parent().parent().parent().find('.panel-body').attr('style','display:none;');
    	} else {
    		$(this).children('i').attr('class','fa fa-angle-up')
	    	$(this).parent().parent().parent().find('.panel-body').attr('style','display:block;');
    	}
    });

  //   $(document).on('click','#macfilterbtn', function(e){
		// denyuser($(this).attr('filter')=='y',$(this).parent().siblings('td:eq(0)').attr('Name'),$(this).parent().siblings('td:eq(2)').attr('Ip'),$(this).parent().siblings('td:eq(3)').attr('Mac'))
  //   });

    $(document).on('click','#navbarCollapse a',function (e){
		try {
			if ($('body').data('check').change == true) return;
		} catch (e) {}
	$(this).parent().addClass('active').siblings().removeClass('active');
    	if($(this).children('span').attr('data-title') == 'Dashboard') {
			$('#storagesharepage').parent().children('div .col-md-12').attr('style','display:none;');
    		$('#dashboardpage').attr('style','display:block;');
	       	$('#mainnavbar.navbar-toggle:visible').click();
    	}
    	if($(this).children('span').attr('data-title') == 'Shares') {
			$('#storagesharepage').parent().children('div .col-md-12').attr('style','display:none;');
    		$('#storagesharepage').attr('style','display:block;');
	    	if(storagestaticpie==null) {
				try {
	    			init_storagestaticchart();
				} catch(e) {
					storagestaticpie = null;
				}
	    	}
	       	$('#mainnavbar.navbar-toggle:visible').click();
		getusers();
		getdirectory();
		getshares();
    	}
    	if($(this).children('span').attr('data-title') == 'Parental Control') {
			$('#storagesharepage').parent().children('div .col-md-12').attr('style','display:none;');
    		$('#dashboardpage').attr('style','display:block;');
    		$('[href="#mobiledevicepage"]').trigger('click');
	       	$('#mainnavbar.navbar-toggle:visible').click();
    	}
    	if($(this).children('span').attr('data-title') == 'General') {
			$('#storagesharepage').parent().children('div .col-md-12').attr('style','display:none;');
    		$('#generalconfigpage').attr('style','display:block;');
	       	$('#mainnavbar.navbar-toggle:visible').click();
    		$('[href="#wificonfigpage"]').trigger('click');
    	}
    	if($(this).children('span').attr('data-title') == 'Advance') {
			$('#storagesharepage').parent().children('div .col-md-12').attr('style','display:none;');
    		$('#advconfigpage').attr('style','display:block;');
	       	$('#mainnavbar.navbar-toggle:visible').click();
	       	$('[href="#vpnconfigpage"]').trigger('click');
    	}
    });





    $(document).on('change','#wpspincodeenable',function (e) {
    	if($(this).val()=='1')
	    	$('#wpspincode').removeAttr('disabled');
   		else
	    	$('#wpspincode').attr('disabled','disabled');
    });






	// apply check
	$(document).on('change', '#generalconfigpage select, #generalconfigpage input, #advconfigpage select, #advconfigpage input', function(e) {
		if (updatetrigger == false) return;
		if ($(this).is('input') && $(this).parent('label').hasClass('active')) return;
		if (
			($('#firmwarepage').is(':visible') && $('#systemconfigpage').is(':visible') && $('#generalconfigpage').is(':visible')) ||
			($('#configurationpage').is(':visible') && $('#vpnconfigpage').is(':visible') && $('#advconfigpage').is(':visible')) ||
			$('#vpnclientpage').is(':visible') ||
			$(this).is('#wakeonlanconfigpagemacnow') ||
			$(this).is('#logstatuspagestatustype')
		) return;
		console.log($(this).parents('.genconfig').attr('id'));
		$('body').data('check', {
			change: true,
			target: $('#'+$(this).parents('.genconfig').attr('id'))
		})
	});
	$(document).on('DOMSubtreeModified', '#generalconfigpage table, #advconfigpage table', function(e) {
		if (updatetrigger == false) return;
		if (
			($('#firmwarepage').is(':visible') && $('#systemconfigpage').is(':visible') && $('#generalconfigpage').is(':visible')) ||
			($('#configurationpage').is(':visible') && $('#vpnconfigpage').is(':visible') && $('#advconfigpage').is(':visible')) ||
			$('#vpnclientpage').is(':visible')
		) return;
		console.log($(this).parents('.genconfig').attr('id'));
		$('body').data('check', {
			change: true,
			target: $('#'+$(this).parents('.genconfig').attr('id'))
		})
	});
	$(document).on('keyup', '#generalconfigpage input, #advconfigpage input', function(e) {
		if (updatetrigger == false) return;
		if (($('#firmwarepage').is(':visible') && $('#systemconfigpage').is(':visible') && $('#generalconfigpage').is(':visible')) ||
			($('#configurationpage').is(':visible') && $('#vpnconfigpage').is(':visible') && $('#advconfigpage').is(':visible')) ||
			$(this).is('#wakeonlanconfigpagemacnow') ||
			$('#vpnclientpage').is(':visible')
		) return;
		if ((e.which >= 37 && e.which <= 40) || e.which === 91 || e.which === 9) {
			return;
		} else {
			console.log($(this).parents('.genconfig').attr('id'));
			$('body').data('check', {
				change: true,
				target: $('#'+$(this).parents('.genconfig').attr('id'))
			})
		}
	});
	$('.nav>li').click(function(event) {
		var check = $('body').data('check');
		if (check==undefined) return;
		if (check.change==true) {
			$.confirm({
				text: 'Configuration changed detected, do you want to apply it?',
				title: 'Message Content',
				post: true,
				confirmButton: 'OK',
				confirmButtonClass: 'btn-danger',
				cancelButton: 'Cancel',
				confirm: function(button) {
					check.target.find('.apply').trigger('click');
					$('body').removeData('check');
				},
				cancel: function(button) {
					$('body').removeData('check');
				}
			});
		}
	});
	$('[data-toggle="tab"]').on('hide.bs.tab', function(e) {
		try {
			if ($('body').data('check').change == true) e.preventDefault();
		} catch (e) {}
	});

	// resize
	$(window).resize(function() {
		if ($(this).width()<768) {
			$('[role="tablist"]').addClass('nav-pills nav-stacked');
		} else {
			$('[role="tablist"]').removeClass('nav-pills nav-stacked');
		}
	});
});

