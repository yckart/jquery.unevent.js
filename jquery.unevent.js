/*!
 * jquery.unevent.js 0.1
 * https://github.com/yckart/jquery.unevent.js
 *
 *
 * Copyright (c) 2012 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/02/08
**/
;(function ($) {
    var methods = { on: $.fn.on, bind: $.fn.bind };
    $.each(methods, function(k){
        $.fn[k] = function () {
            var args = [].slice.call(arguments),
                delay = args.pop(),
                fn = args.pop(),
                timer;

            args.push(function () {
                var self = this,
                    arg = arguments;
                clearTimeout(timer);
                timer = setTimeout(function(){
                    fn.apply(self, [].slice.call(arg));
                }, delay);
            });

            return methods[k].apply(this, isNaN(delay) ? arguments : args);
        };
    });
}(jQuery));