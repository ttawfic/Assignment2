angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    console.log(Listings);
    $scope.detailedInfo = undefined;
     $scope.selectedindex=null;
     $scope.selectedperson=undefined;


    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
        $scope.listings.push($scope.inData);
        $scope.inData="";
    };
    $scope.deleteListing = function(i) {
      
      $scope.listings.splice(i, 1 );    
     

    };
 

     $scope.selectedPerson = function(entry, index) {
      $scope.selectedindex=index;
      $scope.selectedperson=entry;
    };




$scope.addNew = function(){
              $scope.listings.push({ 
                  'code': $scope.code, 
                  'name': $scope.name,                
                  'latitude':$scope.latitude, 
                  'longitude':$scope.longitude,
                  'address':$scope.address,
              });
              $scope.code='';
              $scope.name='';
              $scope.latitude='';
              $scope.longitude='';
              $scope.address='';
              
          };
      

  } 
]);
