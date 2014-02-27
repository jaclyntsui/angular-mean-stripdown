window.angular.module('ngff.controllers.players', [])
  .controller('PlayersController', ['$scope', 'Global', 'NFL',
    function ($scope, Global, NFL) {
      $scope.global = Global;

      $scope.positions = NFL.positions;
      $scope.nflteams = NFL.teams;
      $scope.limitct = 10;

      $scope.find = function (query) {
        Players.query(query, function (players) {
          $scope.players = players;
        })
      }
    }]);