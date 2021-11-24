var ngApp = angular.module('App', []);

ngApp.controller('controlador', function ($scope, $http) {

  //$scope.msg = '¡Bienvenido! ';
  //$scope.msg2 = '¡Registre su inmueble! ';
  $scope.msg3 = '¡Registre su Ubicación en Colombia! ';


  $scope.crearUsuario = function () {
    $http
      .post("http://localhost:5000/insertarUsuario", $scope.formData)
      .then(function successCallback(response) {
        // $scope.formData = {};
        $scope.todos = response.data;
        console.log(response);
      })

    //   alert($scope.tel+" "+$scope.cedula)
  };

  $scope.crearInmueble = function () {
    $http
      .post("http://localhost:5000/insertarInmueble", $scope.formData)
      .then(function successCallback(response) {
        // $scope.formData = {};
        $scope.todos = response.data;
        console.log(response);
      })
  };

  $scope.crearUbicacion = function () {
    $http
      .post("http://localhost:5000/insertarUbicacion", $scope.formData)
      .then(function successCallback(response) {
        // $scope.formData = {};
        $scope.todos = response.data;
        console.log(response);
      })
  };




})