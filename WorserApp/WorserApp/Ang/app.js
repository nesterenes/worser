'use strict';


// Declare app level module which depends on filters, and services
angular.module('BucketApp', [
        'ngRoute',
        'ngCookies',
        'ui.bootstrap',
        'ui.bootstrap.modal',
        'ui.mask',
        'ngAnimate',
        'flow',
        'ngImgCrop',
        'images-resizer',
        'images-resizer-c',
        'angulartics',
        'angulartics.google.analytics',
        'toastr',
        'App',
        'Common',
        'Bucket.Common',
        'facebook',
        'angularMoment'
    ])
    .config(function (toastrConfig) {
        angular.extend(toastrConfig, {
            allowHtml: false,
            autoDismiss: false,
            closeButton: true,
            closeHtml: '<button>&times;</button>',
            containerId: 'toast-container',
            extendedTimeOut: 1500,
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            maxOpened: 0,
            messageClass: 'toast-message',
            newestOnTop: true,
            onHidden: null,
            onShown: null,
            positionClass: 'toast-top-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            progressBar: false,
            tapToDismiss: true,
            target: 'body',
            templates: {
                toast: 'directives/toast/toast.html',
                progressbar: 'directives/progressbar/progressbar.html'
            },
            timeOut: 4000,
            titleClass: 'toast-title',
            toastClass: 'toast'
        });
    })
    .config(function ($httpProvider, FacebookProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        //FacebookProvider.init('850454568355364');  // http
        FacebookProvider.init('921845257882961');  // local
    })
    .config(['flowFactoryProvider', function (flowFactoryProvider) {
        flowFactoryProvider.defaults = {
            singleFile: true
        };
    }]);
