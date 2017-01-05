// app.js

// �umyApp�Ƃ���AngularJS�̃A�v���P�[�V���������܂��v�錾���Ǝv���Ă�������

angular.module('myApp', []).controller('AppController', function($scope){
	
	// ���͂��ꂽ���[�U�[����ێ�
	$scope.username = '';

	// ���[�U�[�ꗗ�i��̔z��ŏ�����)
	$scope.users = [];

	// �o�^�������ꂽ�Ƃ��̊֐�
	$scope.submit = function(){

		if(!$scope.username){
			return;
		}

		// �V�������[�U�[�����[�U�[�ꗗ�ɓo�^����B
		$scope.users.push({
			
			username: $scope.username,
			url: 'https://twitter.com/' + $scope.username

		});

		$scope.username = '';

	};

	$scope.deleteUser = function(index) {
      $scope.users.splice(index, 1);
    };

});
