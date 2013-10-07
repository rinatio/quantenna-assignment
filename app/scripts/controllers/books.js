/**
 * Controller handling author.books
 */
(function(angular, _) {

    'use strict';

    angular.module('quantennaAssignmentApp')
        .controller('BooksCtrl', function ($scope) {
            _.extend($scope, {
                /**
                 * Model holding form book data
                 */
                book: {},

                /**
                 * Add a book to the author's book list
                 *
                 * @param e
                 */
                addBook: function() {
                    this.author.books.push(this.book);
                    this.BookForm.$setPristine();
                    this.book = {};
                }
            });
            // Bind this reference to the scope for js events handlers
            _.bindAll($scope, 'addBook');
        });
})(angular, _);
