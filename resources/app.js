'use strict';

angular.module('bigBankApp', [])

.controller('navController', ['$scope', function($scope) {
    
    $scope.tab = 1;
    
    $scope.filtText = 'Bank';
    
    var sections=[
                {
                    name1: 'National Bank',
                    description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    name2: 'Local Bank',
                    description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    image: 'resources/images/bank-min.jpg'
                },
                {
                    name1: 'Savings Account 1',
                    description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    name2: 'Savings Account 2',
                    description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    image: 'resources/images/saving-min.jpg'
                },
                {
                    name1: 'Checking Account 1',
                    description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    name2: 'Checking Account 2',
                    description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    image: 'resources/images/checkbook-min.jpg'
                },
                {
                    name1: 'Credit Card 1',
                    description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    name2: 'Credit Card 2',
                    description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    image: 'resources/images/credit-card-min.jpg'
                },
                {
                    name1: 'Loan 1',
                    description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    name2: 'Loan 2',
                    description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    image: 'resources/images/loan-approved-min.jpg'
                },
                {
                    name1: 'Sign in',
                    name2: 'Register',
                    image: 'resources/images/sign-in-min.jpg'
                }
                ]; 
    
     $scope.sections = sections;
    
     $scope.select = function(setTab) {
        $scope.tab = setTab;
        if (setTab === 2) {
            $scope.filtText = 'Savings';
        }
        else if (setTab === 3) {
            $scope.filtText = 'Checking';
        }
        else if (setTab === 4) {
            $scope.filtText = 'Credit';
        }
        else if (setTab === 5) {
            $scope.filtText = 'Loan';
        }
        else if (setTab === 6) {
            $scope.filtText = 'Sign';
        }
        else {
            $scope.filtText = 'Bank';
        }
    };
    
    $scope.isSelected = function (checkTab) {
        return ($scope.tab === checkTab);
    };

    $scope.myVar = true;
    $scope.toggle = function() {
        $scope.myVar = false;
    };
    $scope.toggleOthers = function() {
        $scope.myVar = true;
    };
    
    $scope.login = {username:"", password:"", newUsername:"", newPassword:"", email:"example@email.com" };
    
    console.log($scope.login.email.$valid);
    
}]);