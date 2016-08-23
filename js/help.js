$(document).ready(function(){
	// help button
	$('#help-btn').click(function() {
		$(this).slideUp();
		var target = '';
		switch (true) {
			case $(this).hasClass('welcomeTip'):
				target = '.welcomeTip';
				break;
				return;
			case $('#navbarCollapse .dashboard').hasClass('active') && $('#dashboardpage [href="#internetpage"]').parent().hasClass('active'):
				target = '.internetpage';
				break;
			case $('#navbarCollapse .dashboard').hasClass('active') && $('#dashboardpage [href="#wifirouterpage"]').parent().hasClass('active'):
				target = '.wifirouterpage';
				break;
			case $('#navbarCollapse .storagesharepage').hasClass('active'):
				target = '.storagesharepage';
				break;
			default:
				target = '.wifirouterpage';
				break;
		}
		$('#help-box>.load').load('help.html '+target, function(){
			$('#help-box').slideToggle();
		});
	});

	// help button close
	function hideHelpBox() {
		if ($('#help-box').is(':visible')) {
			$('#help-btn').slideDown();
			$('#help-box').slideUp();
			$('#help-btn').removeClass('welcomeTip');
		}
	}
	$('#help-box>.close').click(function() {
		hideHelpBox();
	});
	$('.navbar-nav li').click(function() {
		hideHelpBox();
	});
	$('[data-toggle="tab"]').on('show.bs.tab', function() {
		hideHelpBox();
	});

});
