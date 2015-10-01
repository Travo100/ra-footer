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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm9Qcm9ncmFtQXBwLmpzIiwiY29udHJvbGxlcnMvZm9vdGVyQ29udHJvbGxlci5qcyIsImZhY3Rvcmllcy9mb290ZXJGYWN0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBTyxrQkFBa0IsSUFBSTtBQ0QvQixDQUFDLFdBQVc7O0FBRVo7RUFDRSxPQUFPO0VBQ1AsV0FBVyxvQkFBb0I7O0NBRWhDLFNBQVMsaUJBQWlCLGVBQWU7RUFDeEMsSUFBSSxLQUFLO0dBQ1IsUUFBUTtHQUNSLFVBQVU7RUFDWCxHQUFHLFlBQVk7RUFDZixHQUFHLGVBQWU7RUFDbEIsR0FBRyxnQkFBZ0I7RUFDbkIsR0FBRyxhQUFhO0VBQ2hCLEdBQUcsZUFBZTs7O0VBR2xCLFNBQVMsYUFBYSxTQUFTOztHQUU5QixRQUFRLFNBQVMsR0FBRyxVQUFVOztHQUU5QixHQUFHLFNBQVM7SUFDWCxVQUFVO0lBQ1Y7TUFDRSxlQUFlLENBQUMsVUFBVTtJQUM1QixHQUFHLFlBQVk7SUFDZixHQUFHLGFBQWE7SUFDaEIsR0FBRyxlQUFlO0lBQ2xCLEdBQUcsZ0JBQWdCO1VBQ2I7SUFDTixHQUFHLGVBQWU7Ozs7Ozs7O0tBT2pCO0FDckNMLENBQUMsV0FBVztBQUNaO0tBQ0ssT0FBTztLQUNQLFFBQVEsaUJBQWlCOztJQUUxQixTQUFTLGNBQWMsT0FBTzs7UUFFMUIsSUFBSSxTQUFTO1lBQ1QsaUJBQWlCOzs7UUFHckIsT0FBTzs7UUFFUCxTQUFTLGVBQWUsTUFBTTtZQUMxQixJQUFJLGdCQUFnQjtZQUNwQixPQUFPLE1BQU0sS0FBSyxlQUFlOzs7OztLQUl4QyIsImZpbGUiOiJhbGwtaGVybzQtYW5ndWxhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcclxuXHQubW9kdWxlKCdoZXJvUHJvZ3JhbUFwcCcsIFtdKTsiLCIoZnVuY3Rpb24oKSB7XHJcblxyXG5hbmd1bGFyXHJcblx0Lm1vZHVsZSgnaGVyb1Byb2dyYW1BcHAnKVxyXG5cdC5jb250cm9sbGVyKCdmb290ZXJDb250cm9sbGVyJywgZm9vdGVyQ29udHJvbGxlcik7XHJcblxyXG5cdGZ1bmN0aW9uIGZvb3RlckNvbnRyb2xsZXIoZm9vdGVyRmFjdG9yeSkge1xyXG5cdFx0dmFyIHZtID0gdGhpcyxcclxuXHRcdFx0ZW1haWwgPSBcIlwiLFxyXG5cdFx0XHRzdHJQb3N0ID0gXCJcIjtcclxuXHRcdHZtLmVtYWlsTGVhZCA9IFwiXCI7XHJcblx0XHR2bS5lcnJvck1lc3NhZ2UgPSBcIlwiO1xyXG5cdFx0dm0uZGlzYWJsZUJ1dHRvbiA9IGZhbHNlO1xyXG5cdFx0dm0ubGVhZEJ1dHRvbiA9IFwiU2lnbiBVcFwiO1xyXG5cdFx0dm0uc2VuZExlYWRGb3JtID0gc2VuZExlYWRGb3JtO1xyXG5cclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gc2VuZExlYWRGb3JtKGlzVmFsaWQpIHtcclxuXHJcblx0XHRcdGVtYWlsID0gJ2VtYWlsPScrdm0uZW1haWxMZWFkKycmMDBORTAwMDAwMDRIbld0PUhFUk8rSW50ZXJlc3QrbGlzdCYwME5FMDAwMDAwMGFoYkk9JztcclxuXHRcdFx0XHJcblx0XHRcdGlmKGlzVmFsaWQpIHtcclxuXHRcdFx0XHRzdHJQb3N0ID0gZW1haWw7XHJcblx0XHRcdFx0Zm9vdGVyRmFjdG9yeVxyXG5cdFx0XHRcdFx0LnNlbmRGb290ZXJMZWFkKHtzdHJQb3N0IDogc3RyUG9zdH0pO1xyXG5cdFx0XHRcdHZtLmVtYWlsTGVhZCA9IFwiVGhhbmsgWW91IEZvciBTaWduaW5nIFVwIVwiO1xyXG5cdFx0XHRcdHZtLmxlYWRCdXR0b24gPSBcIlNlbnQhXCI7XHJcblx0XHRcdFx0dm0uZXJyb3JNZXNzYWdlID0gXCJcIjtcclxuXHRcdFx0XHR2bS5kaXNhYmxlQnV0dG9uID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR2bS5lcnJvck1lc3NhZ2UgPSBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbigpIHtcclxuYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnaGVyb1Byb2dyYW1BcHAnKVxyXG4gICAgLmZhY3RvcnkoJ2Zvb3RlckZhY3RvcnknLCBmb290ZXJGYWN0b3J5KTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gZm9vdGVyRmFjdG9yeSgkaHR0cCkge1xyXG5cclxuICAgICAgICB2YXIgZm9vdGVyID0ge1xyXG4gICAgICAgICAgICBzZW5kRm9vdGVyTGVhZCA6IHNlbmRGb290ZXJMZWFkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZm9vdGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHNlbmRGb290ZXJMZWFkKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIGZvb3RlckxlYWRVUkwgPSBcIi9TYWxlc0ZvcmNlL0FKQVgvQ3JlYXRlTGVhZFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdChmb290ZXJMZWFkVVJMLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9