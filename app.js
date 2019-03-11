(function(){
  'use strict';

  angular.module('NameCalculator',[])

  .controller('NameCalculatorController', function($scope){

    //$scope.name="";
    $scope.totalValue=0;

    $scope.displayNum=function(){

    $scope.totalValue=calculateNum($scope.name)
    }

    function calculateNum(string){
      //alert("The value of name is:"+string)
      var totalStringVal=0;
      for(var i=0;i<string.length ; i++){

        totalStringVal+=string.charCodeAt(i);
        
      }
      return totalStringVal;
    }

  });


})();
