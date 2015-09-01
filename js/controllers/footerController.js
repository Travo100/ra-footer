(function() {

angular
	.module('heroProgramApp')
	.controller('footerController', footerController);

	function footerController(footerFactory) {
		var vm = this,
			email = "",
			strPost = "";
		vm.emailLead = "";
		vm.errorMessage = "";
		vm.disableButton = false;
		vm.leadButton = "Sign Up";
		vm.sendLeadForm = sendLeadForm;

		
		function sendLeadForm(isValid) {

			email = 'email='+vm.emailLead+'&00NE0000004HnWt=HERO+Interest+list&00NE0000000ahbI=';
			
			if(isValid) {
				strPost = email;
				footerFactory
					.sendFooterLead({strPost : strPost});
				vm.emailLead = "Thank You For Signing Up!";
				vm.leadButton = "Sent!";
				vm.errorMessage = "";
				vm.disableButton = true;
			} else {
				vm.errorMessage = "Please enter a valid email address.";
			}
			
		}

		
	}

})();