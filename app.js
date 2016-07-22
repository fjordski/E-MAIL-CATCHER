$(document).ready(function () {

	// process the form
	$('form').submit(function (event) {

		// Stop form submitting
		event.preventDefault();

		// Get form tag
		var form = event.target;

		// Get email address
		var email = form.elements.email.value;

		// Email valid if has length and has @ in it
		var valid = email.length > 0 && email.indexOf('@') > 0;

		// If not valid then show errors
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