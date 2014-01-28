angular.module('ez.rightClick', []).directive('rightClick', ['$parse', function($parse) {
  return function(scope, element, attrs) {
    var fn = $parse(attrs.rightClick);
    element.bind('contextmenu', function(e) {
      scope.$apply(function() {
        e.preventDefault();
        e.stopPropagation();
        fn(scope, {$event: e});
      });
    });
  };
}]);
