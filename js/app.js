// app.js

// 「myAppというAngularJSのアプリケーションを作ります」宣言だと思ってください

angular.module('myApp', []).controller('AppController', function($scope){
	
	// 入力されたユーザー名を保持
	$scope.username = '';

	// ユーザー一覧（空の配列で初期化)
	$scope.users = [];

	// 登録を押されたときの関数
	$scope.submit = function(){

		if(!$scope.username){
			return;
		}

		// 新しいユーザーをユーザー一覧に登録する。
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
