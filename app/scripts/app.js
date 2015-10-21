'use strict';

/**
 * @ngdoc overview
 * @name fec3App
 * @description
 * # fec3App
 *
 * Main module of the application.
 */
angular
    .module('fec3App', [
        'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/selectshop.html',
                controller: 'selectshopCtrl',
                controllerAs: 'selectshop'
            })
            // .when('/aftersale', {
            //     templateUrl: 'views/aftersale.html',
            //     controller: 'aftersaleCtrl',
            //     controllerAs: 'aftersale'
            // })
            // .when('/landingpage', {
            //     templateUrl: 'views/landingpage.html',
            //     controller: 'landingpageCtrl',
            //     controllerAs: 'landingpage'
            // })
            // .when('/allproducts', {
            //     templateUrl: 'views/allproducts.html',
            //     controller: 'allproductsCtrl',
            //     controllerAs: 'allproducts'
            // })
            // .when('/products', {
            //     templateUrl: 'views/products.html',
            //     controller: 'productsCtrl',
            //     controllerAs: 'products'
            // })
            // .when('/saleiphone', {
            //     templateUrl: 'views/saleiphone.html',
            //     controller: 'saleiphoneCtrl',
            //     controllerAs: 'saleiphone'
            // })
            // .when('/orderDevice', {
            //     templateUrl: 'views/orderDevice.html',
            //     controller: 'orderDeviceCtrl',
            //     controllerAs: 'orderDevice'
            // })
            // .when('/promotion', {
            //     templateUrl: 'views/promotion.html',
            //     controller: 'promotionCtrl',
            //     controllerAs: 'promotion'
            // })

            // .when('/promotionDevice', {
            //     templateUrl: 'views/promotionDevice.html',
            //     controller: 'promotiondeviceCtrl',
            //     controllerAs: 'promotiondevice'
            // })
            // .when('/existingcustomer', {
            //     templateUrl: 'views/existingcustomer.html',
            //     controller: 'existingcustomerCtrl',
            //     controllerAs: 'existingcustomer'
            // })
            // .when('/selectshop', {
            //     templateUrl: 'views/selectshop.html',
            //     controller: 'selectshopCtrl',
            //     controllerAs: 'selectshop'
            // })

            // .when('/listpayment', {
            //     templateUrl: 'views/listpayment.html',
            //     controller: 'listpaymentCtrl',
            //     controllerAs: 'listpayment'
            // })
            // .when('/listpayment2', {
            //     templateUrl: 'views/listpayment2.html',
            //     controller: 'listpayment2Ctrl',
            //     controllerAs: 'listpayment2'
            // })
            // .when('/pricePlan', {
            //     templateUrl: 'views/pricePlan.html',
            //     controller: 'pricePlanCtrl',
            //     controllerAs: 'pricePlan'
            // })
            // .when('/payment', {
            //     templateUrl: 'views/payment.html',
            //     controller: 'paymentCtrl',
            //     controllerAs: 'payment'
            // })
            // .when('/payment2', {
            //     templateUrl: 'views/payment2.html',
            //     controller: 'payment2Ctrl',
            //     controllerAs: 'payment2'
            // })
            // .when('/payment3', {
            //     templateUrl: 'views/payment3.html',
            //     controller: 'payment3Ctrl',
            //     controllerAs: 'payment3'
            // })
            // .when('/payment4', {
            //     templateUrl: 'views/payment4.html',
            //     controller: 'payment4Ctrl',
            //     controllerAs: 'payment4'
            // })
            // .when('/payment5', {
            //     templateUrl: 'views/payment5.html',
            //     controller: 'payment5Ctrl',
            //     controllerAs: 'payment5'
            // })
            // .when('/payment6', {
            //     templateUrl: 'views/payment6.html',
            //     controller: 'payment6Ctrl',
            //     controllerAs: 'payment6'
            // })
            // .when('/about', {
            //     templateUrl: 'views/about.html',
            //     controller: 'AboutCtrl',
            //     controllerAs: 'about'
            // })
            // .when('/stockissue', {
            //     templateUrl: 'views/stockissue.html',
            //     controller: 'stockissueCtrl',
            //     controllerAs: 'stockissue'
            // })
            // .when('/orderCapture', {
            //     templateUrl: 'views/orderCapture.html',
            //     controller: 'orderCaptureCtrl',
            //     controllerAs: 'orderCapture'
            // })
            // .when('/orderCapture2', {
            //     templateUrl: 'views/orderCapture2.html',
            //     controller: 'orderCapture2Ctrl',
            //     controllerAs: 'orderCapture2'
            // })
            // .when('/appleCare', {
            //     templateUrl: 'views/appleCare.html',
            //     controller: 'appleCareCtrl',
            //     controllerAs: 'appleCare'
            // })
            // .when('/golive', {
            //     templateUrl: 'views/golive.html',
            //     controller: 'goliveCtrl',
            //     controllerAs: 'golive'
            // })
            // .when('/ordercaptureexisting', {
            //     templateUrl: 'views/ordercaptureexisting.html',
            //     controller: 'ordercaptureexistingCtrl',
            //     controllerAs: 'ordercaptureexisting'
            // })
            // .when('/priceplanexisting', {
            //     templateUrl: 'views/priceplanexisting.html',
            //     controller: 'priceplanexistingCtrl',
            //     controllerAs: 'priceplanexisting'
            // })
            // .when('/printpreview', {
            //     templateUrl: 'views/printpreview.html',
            //     // controller: 'printpreviewCtrl',
            //     // controllerAs: 'printpreview'
            // })
            // .when('/privilege', {
            //     templateUrl: 'views/privilege.html',
            //     // controller: 'printpreviewCtrl',
            //     // controllerAs: 'printpreview'
            // })
            // .when('/complete', {
            //     templateUrl: 'views/complete.html',
            //     // controller: 'printpreviewCtrl',
            //     // controllerAs: 'printpreview'
            // })
            // .when('/ordermonitor', {
            //     templateUrl: 'views/ordermonitor.html',
            //     controller: 'ordermonitorCtrl',
            //     controllerAs: 'ordermonitor'
            // })
            // .when('/dataorder', {
            //     templateUrl: 'views/dataorder.html',
            //     // controller: 'printpreviewCtrl',
            //     // controllerAs: 'printpreview'
            // })
            .otherwise({
                redirectTo: '/'
            });
    });


