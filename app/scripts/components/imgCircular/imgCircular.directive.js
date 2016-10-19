(function(){
    'use strict';

    angular.module('ngUtils-josmorsoft')
        .directive('imgCircular',imgCircular);

    function imgCircular($window){
        return {
            restrict:'E',
            replace:true,
            template:`
                <div style="
                    display: block;
                    height: {{height}};
                    min-width:{{minWidth}};
                    width:100%;
                    max-width:{{defaultHeight}};
                    border-radius: {{borderRadius}}px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.9);
                    background: url('{{image}}') no-repeat 50%;
                    background-size: 100% auto;
                    ">
                </div>
            `,
            link: function(scope,element,attrs){
                //scope.width = $window.innerWidth;
                scope.defaultHeight = attrs.defaultHeight !== null ? attrs.defaultHeight : '400px';
                scope.height = scope.defaultHeight;
                scope.minWidth = '100px';
                scope.borderRadius = parseInt(scope.defaultHeight,10)/2;
                scope.image = attrs.src;
                angular.element($window).bind('resize',function(){
                    scope.borderRadius = element[0].clientWidth/2;
                    scope.height = element[0].clientWidth+"px";
                    scope.$digest();
                });
                
            }
        }
    }

})();