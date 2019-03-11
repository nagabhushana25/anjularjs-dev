(function(){
  'use strict';

angular.module('Lunch',[])

.controller('LunchController', function($scope) {

$scope.numbers="";

$scope.outputMes="";

$scope.messages= function(){

$scope.outputMes=calculateNum($scope.numbers)

};

function calculateNum(string){

  var numlist=string.split;
  var mess="";

  if (string=="") {
    mess="Please enter data first"
  } else if (numlist.length<=3) {
    mess="Enjoy!"

  }
  else {
    mess="Too much!"
  }

  return mess;


};

});

})();
