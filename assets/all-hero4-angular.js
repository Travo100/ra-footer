angular
	.module('heroProgramApp', []);
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
	footerController.$inject = ["footerFactory"];

})();
(function() {
angular
    .module('heroProgramApp')
    .factory('footerFactory', footerFactory);
    
    function footerFactory($http) {

        var footer = {
            sendFooterLead : sendFooterLead
        };
        
        return footer;
        
        function sendFooterLead(data) {
            var footerLeadURL = "/SalesForce/AJAX/CreateLead";
            return $http.post(footerLeadURL, data);
        }
        
    }
    footerFactory.$inject = ["$http"];
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm9Qcm9ncmFtQXBwLmpzIiwiY29udHJvbGxlcnMvZm9vdGVyQ29udHJvbGxlci5qcyIsImZhY3Rvcmllcy9mb290ZXJGYWN0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBTyxrQkFBa0IsSUFBSTtBQ0QvQixDQUFDLFdBQVc7O0FBRVo7RUFDRSxPQUFPO0VBQ1AsV0FBVyxvQkFBb0I7O0NBRWhDLFNBQVMsaUJBQWlCLGVBQWU7RUFDeEMsSUFBSSxLQUFLO0dBQ1IsUUFBUTtHQUNSLFVBQVU7RUFDWCxHQUFHLFlBQVk7RUFDZixHQUFHLGVBQWU7RUFDbEIsR0FBRyxnQkFBZ0I7RUFDbkIsR0FBRyxhQUFhO0VBQ2hCLEdBQUcsZUFBZTs7O0VBR2xCLFNBQVMsYUFBYSxTQUFTOztHQUU5QixRQUFRLFNBQVMsR0FBRyxVQUFVOztHQUU5QixHQUFHLFNBQVM7SUFDWCxVQUFVO0lBQ1Y7TUFDRSxlQUFlLENBQUMsVUFBVTtJQUM1QixHQUFHLFlBQVk7SUFDZixHQUFHLGFBQWE7SUFDaEIsR0FBRyxlQUFlO0lBQ2xCLEdBQUcsZ0JBQWdCO1VBQ2I7SUFDTixHQUFHLGVBQWU7Ozs7Ozs7OztLQVFqQjtBQ3RDTCxDQUFDLFdBQVc7QUFDWjtLQUNLLE9BQU87S0FDUCxRQUFRLGlCQUFpQjs7SUFFMUIsU0FBUyxjQUFjLE9BQU87O1FBRTFCLElBQUksU0FBUztZQUNULGlCQUFpQjs7O1FBR3JCLE9BQU87O1FBRVAsU0FBUyxlQUFlLE1BQU07WUFDMUIsSUFBSSxnQkFBZ0I7WUFDcEIsT0FBTyxNQUFNLEtBQUssZUFBZTs7Ozs7S0FJeEMiLCJmaWxlIjoiYWxsLWhlcm80LWFuZ3VsYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXHJcblx0Lm1vZHVsZSgnaGVyb1Byb2dyYW1BcHAnLCBbXSk7IiwiKGZ1bmN0aW9uKCkge1xyXG5cclxuYW5ndWxhclxyXG5cdC5tb2R1bGUoJ2hlcm9Qcm9ncmFtQXBwJylcclxuXHQuY29udHJvbGxlcignZm9vdGVyQ29udHJvbGxlcicsIGZvb3RlckNvbnRyb2xsZXIpO1xyXG5cclxuXHRmdW5jdGlvbiBmb290ZXJDb250cm9sbGVyKGZvb3RlckZhY3RvcnkpIHtcclxuXHRcdHZhciB2bSA9IHRoaXMsXHJcblx0XHRcdGVtYWlsID0gXCJcIixcclxuXHRcdFx0c3RyUG9zdCA9IFwiXCI7XHJcblx0XHR2bS5lbWFpbExlYWQgPSBcIlwiO1xyXG5cdFx0dm0uZXJyb3JNZXNzYWdlID0gXCJcIjtcclxuXHRcdHZtLmRpc2FibGVCdXR0b24gPSBmYWxzZTtcclxuXHRcdHZtLmxlYWRCdXR0b24gPSBcIlNpZ24gVXBcIjtcclxuXHRcdHZtLnNlbmRMZWFkRm9ybSA9IHNlbmRMZWFkRm9ybTtcclxuXHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIHNlbmRMZWFkRm9ybShpc1ZhbGlkKSB7XHJcblxyXG5cdFx0XHRlbWFpbCA9ICdlbWFpbD0nK3ZtLmVtYWlsTGVhZCsnJjAwTkUwMDAwMDA0SG5XdD1IRVJPK0ludGVyZXN0K2xpc3QmMDBORTAwMDAwMDBhaGJJPSc7XHJcblx0XHRcdFxyXG5cdFx0XHRpZihpc1ZhbGlkKSB7XHJcblx0XHRcdFx0c3RyUG9zdCA9IGVtYWlsO1xyXG5cdFx0XHRcdGZvb3RlckZhY3RvcnlcclxuXHRcdFx0XHRcdC5zZW5kRm9vdGVyTGVhZCh7c3RyUG9zdCA6IHN0clBvc3R9KTtcclxuXHRcdFx0XHR2bS5lbWFpbExlYWQgPSBcIlRoYW5rIFlvdSBGb3IgU2lnbmluZyBVcCFcIjtcclxuXHRcdFx0XHR2bS5sZWFkQnV0dG9uID0gXCJTZW50IVwiO1xyXG5cdFx0XHRcdHZtLmVycm9yTWVzc2FnZSA9IFwiXCI7XHJcblx0XHRcdFx0dm0uZGlzYWJsZUJ1dHRvbiA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dm0uZXJyb3JNZXNzYWdlID0gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cclxuXHRcdFxyXG5cdH1cclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xyXG5hbmd1bGFyXHJcbiAgICAubW9kdWxlKCdoZXJvUHJvZ3JhbUFwcCcpXHJcbiAgICAuZmFjdG9yeSgnZm9vdGVyRmFjdG9yeScsIGZvb3RlckZhY3RvcnkpO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBmb290ZXJGYWN0b3J5KCRodHRwKSB7XHJcblxyXG4gICAgICAgIHZhciBmb290ZXIgPSB7XHJcbiAgICAgICAgICAgIHNlbmRGb290ZXJMZWFkIDogc2VuZEZvb3RlckxlYWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBmb290ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc2VuZEZvb3RlckxlYWQoZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgZm9vdGVyTGVhZFVSTCA9IFwiL1NhbGVzRm9yY2UvQUpBWC9DcmVhdGVMZWFkXCI7XHJcbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KGZvb3RlckxlYWRVUkwsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=