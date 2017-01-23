(function () {
    'use strict';

    angular.module('BucketApp').config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.

                when('/Exp/image', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Exp/views/img-test.html',
                    controller: 'ExperimentCtrl',
                    controllerAs: 'ctrl'
                }).

                // Login
                when('/Login', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/User/views/login.html',
                    controller: 'UserLoginCtrl',
                    controllerAs: 'vm'
                }).

                // User
                when('/User/Create', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/User/views/signup.html',
                    controller: 'UserSignupCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['UserCreateInit', function (init) {
                            return init();
                        }]
                    }
                }).
                when('/User/AcceptInvite', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/User/views/AcceptInvite.html',
                    controller: 'UserAcceptInviteCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['UserAcceptInviteInit', function (init) {
                            return init();
                        }]
                    }
                }).
                when('/User/CreateProfile', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/User/views/CreateProfile.html',
                    controller: 'UserCtrl',
                    controllerAs: 'ctrl'
                }).
                when('/User/Update', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/User/views/UpdateProfile.html',
                    controller: 'UserUpdateProfileCtrl',
                    controllerAs: 'ctrl',
                    resolve: {
                        initialData: ['UserUpdateProfileInit', function (init) {
                            return init();
                        }]
                    }
                }).
                when('/User/ConfirmEmail', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/User/views/ConfirmEmail.html',
                    controller: 'UserCtrl',
                    controllerAs: 'ctrl'
                }).


                // Opt-Out
                when('/YouDontKnowWhatYoureMissing', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/OptOut/views/opt-out.html',
                    controller: 'OptOutCtrl',
                    controllerAs: 'ctrl'
                }).

                // Home / User Feed
                when('/Home', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Home/views/list.html',
                    controller: 'HomeMemListCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['HomeInit', function (init) {
                            return init();
                        }]
                    }
                }).
                when('/HomeSweetHome', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Home/views/list.html',
                    controller: 'HomeMemListCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['HomeInit', function (init) {
                            return init();
                        }]
                    }
                }).

                // :route screws up other routes. Must be at the end of parent controller route
                when('/FeedMe/:userId', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Memory/views/public-list.html',
                    controller: 'MemoryFeedCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['PublicListInit', function (init) {
                            return init();
                        }]
                    }
                }).

                // Welcome
                when('/Welcome', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Welcome/views/index.html',
                    controller: 'WelcomeCtrl',
                    controllerAs: 'ctrl',
                    resolve: {
                        initialData: ['WelcomeInit', function (init) {
                            return init();
                        }]
                    }
                }).
                when('/Welcome/Wagon', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Welcome/views/index.html',
                    controller: 'WelcomeCtrl',
                    controllerAs: 'ctrl',
                    resolve: {
                        initialData: ['WelcomeInit', function (init) {
                            return init();
                        }]
                    }
                }).

                // Timecapsule
                when('/Timecapsule', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Timecapsule/views/list.html',
                    controller: 'TimecapsuleListCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['TimecapsuleListInit', function (init) {
                            return init();
                        }]
                    }
                }).
                when('/Timecapsule/List', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Timecapsule/views/list.html',
                    controller: 'TimecapsuleListCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['TimecapsuleListInit', function (init) {
                            return init();
                        }]
                    }
                }).
                when('/Timecapsule/Add', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Timecapsule/views/add.html',
                    controller: 'TimecapsuleAddCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['TimecapsuleInit', function (init) {
                            return init();
                        }]
                    }
                }).          
                when('/Timecapsule/GetShared', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Memory/views/shared-memory-list.html',
                    controller: 'MemorySharedCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['GetSharedInit', function (init) {
                            return init();
                        }]
                    }
                }).
                when('/Timecapsule/GetSharedSample', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Memory/views/shared-memory-list.html',
                    controller: 'MemorySharedCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['GetSharedSampleInit', function (init) {
                            return init();
                        }]
                    }
                }).
                // :route screws up other routes. Must be at the end of parent controller route                
                when('/Timecapsule/:tcId', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Timecapsule/views/detail.html',
                    controller: 'TimecapsuleDetailCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['TimecapsuleInit', function (init) {
                            return init();
                        }]
                    }
                }).  
                // Memory
                when('/Memory/List', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Memory/views/list.html',
                    controller: 'MemoryListCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['MemoryListInit', function (init) {
                            return init();
                        }]
                    }
                }).
                when('/Memory/Add', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Memory/views/detail.html',
                    controller: 'MemoryAddCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['MemoryAddInit', function (init) {
                            return init();
                        }]
                    }
                }).
                // :route screws up other routes. Must be at the end of parent controller route                
                when('/Memory/:mssgId', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Memory/views/detail.html',
                    controller: 'MemoryDetailCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['MemoryInit', function (init) {
                            return init();
                        }]
                    }
                }).

                // Executor
                when('/Executor/Faq', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Executor/views/ExecutorFaq.html',
                    controller: 'UserCtrl',
                    controllerAs: 'ctrl'
                }).
                when('/Executor/TC', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Executor/views/tc.detail.html',
                    controller: 'ExecutorDetailCtrl',
                    controllerAs: 'ctrl',
                    resolve: {
                        initialData: ['ExecutorTcDetailInit', function (init) {
                            return init();
                        }]
                    }
                }).
                when('/Executor/Undo', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Executor/views/ExecutorUndoConfirm.html',
                    controller: 'ExecutorUndoCtrl',
                    controllerAs: 'ctrl',
                    resolve: {
                        initialData: ['ExecutorUndoInit', function (init) {
                            return init();
                        }]
                    }
                }).
                // :route screws up other routes. Must be at the end of parent controller route                
                when('/Executor/:targetId', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Executor/views/index.html',
                    controller: 'ExecutorCtrl',
                    controllerAs: 'ctrl',
                    resolve: {
                        initialData: ['ExecutorInit', function (init) {
                            return init();
                        }]
                    }
                }).

                // Relationship
                when('/Relationship', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Relationship/views/list.html',
                    controller: 'RelationshipListCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['RelationshipListInit', function (init) {
                            return init();
                        }]
                    }
                }).
                when('/Relationship/List', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Relationship/views/list.html',
                    controller: 'RelationshipListCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['RelationshipListInit', function (init) {
                            return init();
                        }]
                    }
                }).
                when('/Relationship/Add', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Relationship/views/Add.html',
                    controller: 'RelationshipAddCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['RelationshipAddInit', function (init) {
                            return init();
                        }]
                    }
                }).
                when('/Relationship/Confirm', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Relationship/views/Confirm.html',
                    controller: 'RelationshipConfirmCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['RelationshipConfirmInit', function (init) {
                            return init();
                        }]
                    }
                }).
                when('/Relationship/Reject', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/Relationship/views/Confirm.html',
                    controller: 'RelationshipConfirmCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['RelationshipRejectInit', function (init) {
                            return init();
                        }]
                    }
                }).

                // Personal QA
                when('/QA/Add', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/PersonalQA/views/Add.html',
                    controller: 'PersonalQACtrl',
                    controllerAs: 'ctrl',
                    resolve: {
                        initialData: ['PersonalQAInit', function (init) {
                            return init();
                        }]
                    }
                }).
                when('/QA/List', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/PersonalQA/views/List.html',
                    controller: 'PersonalQACtrl',
                    controllerAs: 'ctrl',
                    resolve: {
                        initialData: ['PersonalQAInit', function (init) {
                            return init();
                        }]
                    }
                }).
                when('/QA/Edit', {
                    caseInsensitiveMatch: true,
                    templateUrl: '/Ang/PersonalQA/views/Edit.html',
                    controller: 'PersonalQAEditCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        initialData: ['PersonalQAEditInit', function (init) {
                            return init();
                        }]
                    }
                }).
                otherwise({
                    templateUrl: '/Ang/User/views/login.html',
                    controller: 'UserLoginCtrl',
                    controllerAs: 'vm'
                })
                ;
            // END routes
        }
    ]); // END config
})(); // END function