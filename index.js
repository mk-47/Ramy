var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.companies = [{
            'name': 'Infosys Technologies',
            'employees': 125000,
            'headoffice': 'Bangalore'
        },
        {
            'name': 'Cognizant Technologies',
            'employees': 100000,
            'headoffice': 'Bangalore'
        },
        {
            'name': 'Wipro',
            'employees': 115000,
            'headoffice': 'Bangalore'
        },
        {
            'name': 'Tata Consultancy Services (TCS)',
            'employees': 150000,
            'headoffice': 'Bangalore'
        },
        {
            'name': 'HCL Technologies',
            'employees': 90000,
            'headoffice': 'Noida'
        },
    ];
    $scope.addRow = function (company, name, headoffice) {
        $scope.companies.push({
            'name': company,
            'employees': name,
            'headoffice': headoffice
        });
        $scope.name = '';
        $scope.employees = '';
        $scope.headoffice = '';
    };
    $scope.removeRow = function (name) {
        var index = -1;
        var comArr = eval($scope.companies);
        for (var i = 0; i < comArr.length; i++) {
            if (comArr[i].name === name) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            alert("Something gone wrong");
        }
        $scope.companies.splice(index, 1);
    };

    $scope.editing = false;
    $scope.firstName = [];
    $scope.lastName = [];
    $scope.email = [];

    $scope.makeFalse = function(){
        for( i = 1; i < $scope.companies.length ; i++){
            $scope.firstName[i] = false;
            $scope.lastName[i] = false;
            $scope.email[i] = false;
        }
    }
    $scope.makeFalse();

    $scope.editFname = function (name) {
     
        var comArr = eval($scope.companies);
        for (var i = 0; i < comArr.length; i++) {
            if (comArr[i].name === name) {
                $scope.firstName[i] = true;              
                break;
            }
        }
       
    };

    $scope.doneEditingFname = function (name) {
        
        var comArr = eval($scope.companies);
        for (var i = 0; i < comArr.length; i++) {
            if (comArr[i].name === name) {
                $scope.firstName[i] = false;
                break;
            }
        }
        
    };

    $scope.editLname = function (index) {
        $scope.lastName[index] = true;  
    };

    $scope.doneEditingLname = function (index) {
        $scope.lastName[index] = false;          
    };

    $scope.editEmail = function (index) {
        $scope.email[index] = true;  
    };

    $scope.doneEditingEmail = function (index) {
        $scope.email[index] = false;          
    };
   



});