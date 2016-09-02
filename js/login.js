function defaultTrigger() {
	getlanguages();
	systeminfo();
	setIntervalSystemtime();
	setIntervalNattrafficandCpu('lan');
	eventmsg();
	getselectlist();
}
function login() {
	var postData =
	{
		method: 'login',
		username: 'Admin',
		password: $.md5('Admin'+":"+$('#passwd').val())
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
					sessionid: 'admin'
				}
			}
		};
		if (data.stat == 'success') {
			var data = data.feed.data;
			$.cookie('sessionID', data.sessionid,{path: '/'});
			sessionID = $.cookie('sessionID');
			$('#login').hide();
			$("section#admin, #help-btn").show();
			$('[href="#wifirouterpage"]').trigger('click');
			defaultTrigger();
			setTimeout(function(){
				updatetrigger=true;
			},0)
			if ($.cookie('isFirstUser')==undefined) {
				$.cookie('isFirstUser', true,{path: '/'});
				$('#help-btn').addClass('welcomeTip').trigger('click');
			}
		} else {
			enterFail_shake('#login', '#loginOK', 'btn-default', 'btn-danger', '登入', '密碼錯誤');
			$('#passwd')
				.val('')
				.attr('placeholder','密碼遺忘請重置')
				.focus();
		};
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function logout() {
	var postData =
	{
		method: 'logout',
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
					xxxxx: ''
				}
			}
		};
		if (data.stat == 'success') {
			$.removeCookie('sessionID', {path: "/"});
			location.reload();
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function changepassword() {
	var postData =
	{
		method: 'changepassword',
		sessionid: sessionID,
		oldpass: $('#opass').val(),
		newpass: $('#cpass').val()
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
			$('#changepassdialog').modal('hide');
			myalert('ok');
		}
	// }, 'json').error(function(jqXHR, textStatus, errorThrown) {});
}
function reboot() {
	var postData =
	{
		method: 'reboot',
		sessionid: sessionID
	};
	startCountDown(allwaittime.reboottime);
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
$(document).ready(function() {

	if($.cookie('sessionID')==undefined) {
		$('#help-btn').hide();
		$('#login').show();
		$('#passwd').val('').focus().select();
	} else {
		sessionID = $.cookie('sessionID');
		$('#login').hide();
		$("section#admin, #admin ul li:eq(1), #help-btn").show();
		$('[href="#wifirouterpage"]').trigger('click');
		defaultTrigger();
	}

	$('#passwd').keypress(function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			if ($('#passwd').val() == '') {
				$('#passwd').focus();
				return;
			}
			$('#loginOK').click();
		}
	});

	$("#loginOK").click(function() {
		if ($('#passwd').val() == '') {
			$('#passwd').focus();
			return;
		}
		login();
	});

	$('#logout').click(function() { //logout
		logout();
	});

	$('.popup').on('hidden.bs.modal', function() {
		var i = 0;
		$('body').children('div.popup').each(function() {
			if ($(this).hasClass('in')) {
				i += 1;
			}
		});
		if (i>0) {
			$('body').addClass('modal-open');
		}
	})

	$('#changepasswd').on('click', function() {
		$('#changepassdialog .passwdmsg').hide();
		$('#changepassdialog').modal('show');
		$('#opass').val('');
		$('#cpass').val('');
		$('#cverify').val('');
	});


    $('#opass, #cverify, #cpass').on('keyup', function(e){
    	$('.passwdmsg').text('');
    });

    $('#changepasswdbtn').on('click',function(e){
    	if($('#opass').val()==''||$('#cpass').val()==''||$('#cverify').val()=='') {
    		if($('#opass').val() == '') { $('#opass').focus(); return; }
    		if($('#cpass').val() == '') { $('#cpass').focus(); return; }
    		if($('#cverify').val() == '') { $('#cverify').focus(); return; }
    		$('.passwdmsg').text('Password can\'t include space');
	     	$('#changepassdialog .passwdmsg').show();
   			return;
    	}
    	if($('#cpass').val()!=$('#cverify').val()) {
    		$('.passwdmsg').text('Verify password and new password is different.');
  	     	$('#changepassdialog .passwdmsg').show();
  		$('#cverify').focus();
    		return;
    	}
    	changepassword();

    });
    $('#reboot').on('click', function(e){
		$.confirm({
			text: 'Do you want to reboot device? Yes/No',
			title: '<span class="glyphicon glyphicon-alert"></span> Message Content',
			post: true,
			confirmButton: '<span class="glyphicon glyphicon-ok"></span> Yes',
			confirmButtonClass: 'btn-danger',
			cancelButton: 'No',
			confirm: function(button) {
				reboot();
			},
			cancel: function(button) {

			}
		});
    });
	getwaittingtime();
});
