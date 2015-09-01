angular
	.module('heroProgramApp', []);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm9Qcm9ncmFtQXBwLmpzIiwiZmFjdG9yaWVzL2Zvb3RlckZhY3RvcnkuanMiLCJjb250cm9sbGVycy9mb290ZXJDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBTyxrQkFBa0IsSUFBSTtBQ0QvQixDQUFDLFdBQVc7QUFDWjtLQUNLLE9BQU87S0FDUCxRQUFRLGlCQUFpQjs7SUFFMUIsU0FBUyxjQUFjLE9BQU87O1FBRTFCLElBQUksU0FBUztZQUNULGlCQUFpQjs7O1FBR3JCLE9BQU87O1FBRVAsU0FBUyxlQUFlLE1BQU07WUFDMUIsSUFBSSxnQkFBZ0I7WUFDcEIsT0FBTyxNQUFNLEtBQUssZUFBZTs7Ozs7S0FJeEM7QUNuQkwsQ0FBQyxXQUFXOztBQUVaO0VBQ0UsT0FBTztFQUNQLFdBQVcsb0JBQW9COztDQUVoQyxTQUFTLGlCQUFpQixlQUFlO0VBQ3hDLElBQUksS0FBSztHQUNSLFFBQVE7R0FDUixVQUFVO0VBQ1gsR0FBRyxZQUFZO0VBQ2YsR0FBRyxlQUFlO0VBQ2xCLEdBQUcsZ0JBQWdCO0VBQ25CLEdBQUcsYUFBYTtFQUNoQixHQUFHLGVBQWU7OztFQUdsQixTQUFTLGFBQWEsU0FBUzs7R0FFOUIsUUFBUSxTQUFTLEdBQUcsVUFBVTs7R0FFOUIsR0FBRyxTQUFTO0lBQ1gsVUFBVTtJQUNWO01BQ0UsZUFBZSxDQUFDLFVBQVU7SUFDNUIsR0FBRyxZQUFZO0lBQ2YsR0FBRyxhQUFhO0lBQ2hCLEdBQUcsZUFBZTtJQUNsQixHQUFHLGdCQUFnQjtVQUNiO0lBQ04sR0FBRyxlQUFlOzs7Ozs7Ozs7S0FRakIiLCJmaWxlIjoiYWxsLWhlcm80LWFuZ3VsYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXHJcblx0Lm1vZHVsZSgnaGVyb1Byb2dyYW1BcHAnLCBbXSk7IiwiKGZ1bmN0aW9uKCkge1xyXG5hbmd1bGFyXHJcbiAgICAubW9kdWxlKCdoZXJvUHJvZ3JhbUFwcCcpXHJcbiAgICAuZmFjdG9yeSgnZm9vdGVyRmFjdG9yeScsIGZvb3RlckZhY3RvcnkpO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBmb290ZXJGYWN0b3J5KCRodHRwKSB7XHJcblxyXG4gICAgICAgIHZhciBmb290ZXIgPSB7XHJcbiAgICAgICAgICAgIHNlbmRGb290ZXJMZWFkIDogc2VuZEZvb3RlckxlYWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBmb290ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc2VuZEZvb3RlckxlYWQoZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgZm9vdGVyTGVhZFVSTCA9IFwiL1NhbGVzRm9yY2UvQUpBWC9DcmVhdGVMZWFkXCI7XHJcbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KGZvb3RlckxlYWRVUkwsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XHJcblxyXG5hbmd1bGFyXHJcblx0Lm1vZHVsZSgnaGVyb1Byb2dyYW1BcHAnKVxyXG5cdC5jb250cm9sbGVyKCdmb290ZXJDb250cm9sbGVyJywgZm9vdGVyQ29udHJvbGxlcik7XHJcblxyXG5cdGZ1bmN0aW9uIGZvb3RlckNvbnRyb2xsZXIoZm9vdGVyRmFjdG9yeSkge1xyXG5cdFx0dmFyIHZtID0gdGhpcyxcclxuXHRcdFx0ZW1haWwgPSBcIlwiLFxyXG5cdFx0XHRzdHJQb3N0ID0gXCJcIjtcclxuXHRcdHZtLmVtYWlsTGVhZCA9IFwiXCI7XHJcblx0XHR2bS5lcnJvck1lc3NhZ2UgPSBcIlwiO1xyXG5cdFx0dm0uZGlzYWJsZUJ1dHRvbiA9IGZhbHNlO1xyXG5cdFx0dm0ubGVhZEJ1dHRvbiA9IFwiU2lnbiBVcFwiO1xyXG5cdFx0dm0uc2VuZExlYWRGb3JtID0gc2VuZExlYWRGb3JtO1xyXG5cclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gc2VuZExlYWRGb3JtKGlzVmFsaWQpIHtcclxuXHJcblx0XHRcdGVtYWlsID0gJ2VtYWlsPScrdm0uZW1haWxMZWFkKycmMDBORTAwMDAwMDRIbld0PUhFUk8rSW50ZXJlc3QrbGlzdCYwME5FMDAwMDAwMGFoYkk9JztcclxuXHRcdFx0XHJcblx0XHRcdGlmKGlzVmFsaWQpIHtcclxuXHRcdFx0XHRzdHJQb3N0ID0gZW1haWw7XHJcblx0XHRcdFx0Zm9vdGVyRmFjdG9yeVxyXG5cdFx0XHRcdFx0LnNlbmRGb290ZXJMZWFkKHtzdHJQb3N0IDogc3RyUG9zdH0pO1xyXG5cdFx0XHRcdHZtLmVtYWlsTGVhZCA9IFwiVGhhbmsgWW91IEZvciBTaWduaW5nIFVwIVwiO1xyXG5cdFx0XHRcdHZtLmxlYWRCdXR0b24gPSBcIlNlbnQhXCI7XHJcblx0XHRcdFx0dm0uZXJyb3JNZXNzYWdlID0gXCJcIjtcclxuXHRcdFx0XHR2bS5kaXNhYmxlQnV0dG9uID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR2bS5lcnJvck1lc3NhZ2UgPSBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblxyXG5cdFx0XHJcblx0fVxyXG5cclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=