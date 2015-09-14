var app = angular.module("app", []);

app.controller("PostCtrl", ['$scope', function($scope){
    var posts = [
      {
        id: '1',
        title: 'Primeiro post',
        content: 'Esse éh o primeiro post...',
        tags: ['App', 'Mobile'],
        likes: 10,
        options: ['Excluir', 'Editar']
      },
      {
        id: '2',
        title: 'Segundo post',
        content: 'Já esse éh o segundo post...',
        tags: ['AngularJS', 'Mobile', '2015'],
        likes: 14,
        options: ['Excluir', 'Editar']
      },
      {
        id: '3',
        title: 'Terceiro post',
        content: 'Aqui éh o terceiro post...',
        tags: ['Mobile'],
        likes: 17,
        options: ['Excluir', 'Editar']
      }
    ];
    $scope.posts = posts;

    //Functions
    $scope.addLike = function(post){
        post.likes += 1;
    };
    $scope.removeLike = function(post){
        post.likes -= 1;
    };
}]);
