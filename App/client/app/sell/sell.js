'use strict';

angular.module('bitVendrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sell', {
        url: '/sell',
        templateUrl: 'app/sell/sell.html',
        controller: 'SellCtrl'
      });
  });