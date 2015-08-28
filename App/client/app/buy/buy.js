'use strict';

angular.module('bitVendrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('buy', {
        url: '/buy',
        templateUrl: 'app/buy/buy.html',
        controller: 'BuyCtrl'
      });
  });