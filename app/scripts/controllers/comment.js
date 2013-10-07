/**
 * Controller handling author.comments
 */
(function(angular, _) {

    'use strict';

    angular.module('quantennaAssignmentApp')
        .controller('CommentCtrl', function ($scope) {
            _.extend($scope, {
                /**
                 * Model holding form comment data
                 */
                comment: {},

                /**
                 * Add a comment to the comments list and reset the form inputs
                 *
                 * @param e
                 */
                addComment: function() {
                    if(!this.author.comments) {
                        this.author.comments = [];
                    }
                    this.author.comments.push(this.comment);
                    this.CommentForm.$setPristine();
                    this.comment = {};
                },

                /**
                 * Delete comment from the list
                 *
                 * @param index comment index in the comments array
                 */
                deleteComment: function(index) {
                    this.author.comments.splice(index, 1);
                },

                /**
                 * Get url for Gravatar image
                 *
                 * @link http://en.gravatar.com/site/implement/images/
                 * @param email
                 * @returns {string}
                 */
                getGravatarSrc: function(email) {
                    var path = 'http://www.gravatar.com/avatar/';
                    return path + CryptoJS.MD5(email).toString();
                }
            });
            // Bind this reference to the scope for js events handlers
            _.bindAll($scope, 'addComment', 'deleteComment');
        });
})(angular, _);
