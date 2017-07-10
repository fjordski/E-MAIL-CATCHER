$(document).ready(function () {

	// process the form
	$('form').submit(function (event) {
		event.preventDefault();
		var form = event.target;
		var email = form.elements.email.value;
		var valid = email.length > 0 && email.indexOf('@') > 0;
		
		if (!valid) {
			$('.input-error-helper').show();
			$('.input-email').addClass("input-error");
			$('.input-email').focus();
		} else {
			$.ajax({
				url: form.action,
				method: form.method,
				data: {
					email: email
				},
				success: function (data) {
					// On success then show confirm message
					$('#email-address').text(data.email);
					$('.join-list-confirm').show();
					$('.join-list-inputs').hide();
				}
			});
		}

	});

});
