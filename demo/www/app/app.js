// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('demo', [
  'ionic',
  'ngCordova',

  // modules
  'demo.barcodeScanner.ctrl',
  'demo.camera.ctrl',
  'demo.device.ctrl',
  'demo.deviceMotion.ctrl',
  'demo.deviceOrientation.ctrl',
  'demo.dialogs.ctrl',
  'demo.flashlight.ctrl',
  'demo.geolocation.ctrl',
  'demo.globalization.ctrl',
  'demo.network.ctrl',
  'demo.preferences.ctrl',
  'demo.statusbar.ctrl',
  'demo.toast.ctrl',
  'demo.vibration.ctrl'
])

  .run(function ($ionicPlatform) {

    $ionicPlatform.ready(function () {

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    })
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('menu', {
        url: "/menu",
        templateUrl: "app/menu.html"
      })

      .state('barcodeScanner', {
        url: '/barcodeScanner',
        templateUrl: 'app/barcodeScanner/barcodeScanner.html',
        controller: "BarcodeScannerCtrl"
      })

      .state('statusbar', {
        url: '/statusbar',
        templateUrl: 'app/statusbar/statusbar.html',
        controller: "StatusbarCtrl"
      })

      .state('preferences', {
        url: '/preferences',
        templateUrl: 'app/preferences/preferences.html',
        controller: "PreferencesCtrl"
      })


      .state('flashlight', {
        url: '/flashlight',
        templateUrl: 'app/flashlight/flashlight.html',
        controller: "FlashlightCtrl"
      })

      .state('deviceMotion', {
        url: '/deviceMotion',
        templateUrl: 'app/deviceMotion/deviceMotion.html',
        controller: "DeviceMotionCtrl"
      })

      .state('network', {
        url: '/network',
        templateUrl: 'app/network/network.html',
        controller: "NetworkCtrl"
      })

      .state('dialogs', {
        url: '/dialogs',
        templateUrl: 'app/dialogs/dialogs.html',
        controller: "DialogsCtrl"
      })

      .state('device', {
        url: '/device',
        templateUrl: 'app/device/device.html',
        controller: "DeviceCtrl"
      })

      .state('geolocation', {
        url: '/geolocation',
        templateUrl: 'app/geolocation/geolocation.html',
        controller: "GeolocationCtrl"
      })

      .state('globalization', {
        url: '/global',
        templateUrl: 'app/globalization/globalization.html',
        controller: "GlobalizationCtrl"
      })
      .state('camera', {
        url: '/camera',
        templateUrl: 'app/camera/camera.html',
        controller: "CameraCtrl"
      })

      .state('vibration', {
        url: '/vibration',
        templateUrl: 'app/vibration/vibration.html',
        controller: "VibrationCtrl"
      })

      .state('deviceOrientation', {
        url: '/deviceOrientation',
        templateUrl: 'app/deviceOrientation/deviceOrientation.html',
        controller: "DeviceOrientationCtrl"
      })

      .state('capture', {
        url: '/capture',
        templateUrl: 'app/capture/capture.html',
        controller: "CaptureCtrl"
      })

      .state('toast', {
        url: '/toast',
        templateUrl: 'app/toast/toast.html',
        controller: "ToastCtrl"
      })

      .state('about', {
        url: '/about',
        templateUrl: 'template/about.html',
        controller: "AboutCtrl"
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/menu');
  });

