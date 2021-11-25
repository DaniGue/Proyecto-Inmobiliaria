var ngApp = angular.module('AppInmobiliaria', []);


//#region Autenticacion
ngApp.controller('autenticacion', function ($scope, $http) {

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

  $scope.autenticarUsuario = function () {
    $http
      .post("http://localhost:5000/consultarUsuario", $scope.formData)
      .then(function successCallback(response) {
        // $scope.formData = {};
        $scope.resultado = response.data;
        console.log(response);
        if (response.data.resultado) {
          swal({
            title: "Bienvenido " + response.data.datos.nombre + " " + response.data.datos.apellido,
            text: "Serás redireccionado a la pantalla principal!",
            icon: "success",
            closeOnClickOutside: false
          }).then(() => {
            window.location.href = '../';
          });
        } else {
          swal({
            title: "Login Fallido",
            text: "Usuario o contraseña incorrecta, por favor vuelve a intentarlo!",
            icon: "warning",
            closeOnClickOutside: false
          }).then(() => {
            window.location.href = '../';
          });
        }
      })

    //   alert($scope.tel+" "+$scope.cedula)
  };

})
//#endregion Autenticacion
//#region  Inmueble
ngApp.controller('inmueble', function ($scope, $http) {
  $scope.crearInmueble = function () {
    $http
      .post("http://localhost:5000/insertarInmueble", $scope.formData)
      .then(function successCallback(response) {
        // $scope.formData = {};
        $scope.todos = response.data;
        console.log(response);
      })
  };
});
//#endregion Inmueble
//#region  Ubicacion
ngApp.controller('ubicacion', function ($scope, $http) {
  $scope.crearUbicacion = function () {
    $http
      .post("http://localhost:5000/insertarUbicacion", $scope.formData)
      .then(function successCallback(response) {
        // $scope.formData = {};
        $scope.todos = response.data;
        console.log(response);
      })
  };
  $scope.consultarUbicaciones = function (elemento) {
    $http
      .get("http://localhost:5000/consultarUbicaciones")
      .then(function successCallback(response) {
        // $scope.formData = {};
        $scope.resultado = response.data;
        console.log(response);
        if (response.data.resultado) {
          newSelect=document.getElementById(elemento);
          newSelect.innerHTML="";
          var opt = document.createElement("option");
            opt.value = "";
            opt.innerHTML = "(Seleccione)"; // whatever property it has

            // then append it to the select element
            newSelect.appendChild(opt);
          for (i=0;i<response.data.datos.length;i++) {
            var opt = document.createElement("option");
            opt.value = response.data.datos[i]._id;
            opt.innerHTML = response.data.datos[i].ubicacion; // whatever property it has

            // then append it to the select element
            newSelect.appendChild(opt);
          }
        } else {
          var opt = document.createElement("option");
          opt.value = "";
          opt.innerHTML = "(Seleccione)"; // whatever property it has

          // then append it to the select element
          newSelect.appendChild(opt);
        }
      })

    //   alert($scope.tel+" "+$scope.cedula)
  };
});
//#endregion Ubicacion