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
})();