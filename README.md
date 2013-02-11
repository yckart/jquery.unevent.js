#Something about

Attach an event handler function for one or more events to the selected elements if the event was <b>not</b> triggered for a given interval.
This is useful if you want to fire a callback only after a delay, like the resize event, or else.

#How to use

It is quite simple!

**1st** Include jQuery and the plugin:

    <script src='jquery.js'></script>
    <script src='jquery.unevent.js'></script>

**2nd** Initialize <a href="https://github.com/yckart/jquery.unevent.js">unevent</a> like any other <code>on</code> or <code>bind</code>-event handler, except that you pass an extra parameter as a last:

    $(window).on('resize', function(e) {
        // alert(e.type + '-event was 250ms not triggered');
    }, 250);

**3rd** Trigger your <i>event</i>!

#Example

Take a look at [http://yckart.github.com/jquery.unevent.js/][1]


#Support

[@yckart][2] #unevent

[http://yckart.com][3]

##License
Copyright (c) 2013 Yannick Albert ([http://yckart.com/][3])

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


  [1]: http://yckart.github.com/jquery.unevent.js/
  [2]: http://twitter.com/yckart/
  [3]: http://yckart.com/
