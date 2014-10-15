angular.module('app',[]);

angular.module('app').controller('testCtrl', function($scope) {
    $scope.jobs = [ {title: 'Software Engineer',
        description: 'You will make things creative with fast learning'
    },{title: 'Software Architect',
        description: 'You will fight the dragon with bare hands.'
    }];
});