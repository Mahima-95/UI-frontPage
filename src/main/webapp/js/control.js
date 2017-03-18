scotchApp.controller('home', function($scope, $http, $window, $q, filterFilter) {
	
	 $scope.firstSliderInterval = 30000;
	    $scope.myInterval = 3000;
	    $scope.aimInterval = 2500;

	    // Initializing slide array
	    $scope.slides = [{
	        image: '/images/Slider 1/2.jpg',
	        text: 'We have to connect every Indian to good medical facility. We are working for the people  not for money.'
	    }, {
	        image: '/images/Slider 2/2.jpg',
	        text: 'We have to connect every Indian to good medical facility. We are working for the people  not for money.'
	    }, {
	        image: '/images/Slider 2/3.jpg',
	        text: 'We have to connect every Indian to good medical facility. We are working for the people  not for money.'
	    }, {
	        image: '/images/Slider 2/4.jpg',
	        text: 'We have to connect every Indian to good medical facility. We are working for the people  not for money.'
	    }];
});