'use strict';

/**
 * @ngdoc overview
 * @name josmorsoftApp
 * @description
 * # josmorsoftApp
 *
 * Main module of the application.
 */
angular
  .module('josmorsoftApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngUtils-josmorsoft'
  ])
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('mainTheme')
      .primaryPalette('amber');
    $mdThemingProvider.theme('altTheme')
      .primaryPalette('blue');
    
    $mdThemingProvider.setDefaultTheme('mainTheme');
  });
