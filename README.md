#Something about

Pressing a key on your keyboard fires the event in most browsers with a short delay. FastKey is the approach for exactly this inconvenience.

It is based upon jQuery and written to be small and nevertheless useful.


#How to use

It is quite simple!

**1st** Include jQuery and the plugin:

    <script src='jQuery.js'></script>
    <script src='jQuery.fastKey.js'></script>

**2nd** Initialize the plugin with your key and function:

    $.fastKey('your key', function() {
        // your function
    });

**3rd** Fire your key-event fast!

##Options
There're some options available:

- `interval` Sets the iteration interval (default: 10)
- `preventDefault` - Prevents the default browser behavior (default: 10)

#Example

Take a look at [http://yckart.github.com/jQuery.fastKey.js/][1]


#Support

[@yckart][2] #fastkey

[http://yckart.com][3]

##License
Copyright (c) 2012 Yannick Albert ([http://yckart.com/][3])

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


  [1]: http://yckart.github.com/jQuery.fastKey.js/
  [2]: http://twitter.com/yckart/
  [3]: http://yckart.com/