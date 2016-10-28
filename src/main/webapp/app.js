angular.module('examApp', [])
        .controller('ExamController', ['$scope','studentFactory', function ($scope, studentFactory) {
                var self = this;
                self.allCourses = studentFactory.getCourses();
                self.students = studentFactory.getStudent();
                
            }])
        .filter('ExamFilter', [function () {
                return function (grades) {
                    var sum = 0;
                    var temp = 0;
                    for (i = 0; i < grades.length; i++) {
                        if (grades[i].grade > -5) {
                            sum = sum + parseInt(grades[i].grade);
                            temp++;
                        }
                    }
                    return sum / temp;
                }
            }])
        .directive('examDir', function () {
            return {
                templateUrl: 'grades.html'

            }
        })
        .factory('studentFactory', [ function () {
            var studentsInfo = {};
            var allCourses = [
                {courseId: 1000, courseName: "Basic Programming"},
                {courseId: 1001, courseName: "Advanced Programming"},
                {courseId: 1003, courseName: "DataBase Intro"}];
            var students = [];
            students.push({studentId: 100, name: "Peter Hansen", grades: [{grade: "10"}, {grade: "12"}, {}]});
            students.push({studentId: 101, name: "Jan Olsen", grades: [{grade: "7"}, {grade: "10"}, {}]});
            students.push({studentId: 102, name: "Gitte Poulsen", grades: [{grade: "7"}, {grade: "7"}, {}]});
            students.push({studentId: 103, name: "John McDonald", grades: [{grade: "10"}, {}, {grade: "7"}]});
            var getStudent = function(){
                return students;
            };
            var getCourses = function(){
                return allCourses;
            };
            return{
                getStudent: getStudent,
                getCourses: getCourses
            };
        }]);