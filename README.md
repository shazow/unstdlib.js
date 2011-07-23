# Unstandard Library for JavaScript

Have you ever written code that you used in more than one project? Me too.

This is a compilation of highly-reusable code for JavaScript.

See also: [unstdlib.py](https://github.com/shazow/unstdlib.py) for Python.


## Highlights

Some cool noteworthy code in this library:

* ``iter_line(A, B, fn)`` in [src/geometry.js](https://github.com/shazow/unstdlib.js/blob/master/src/geometry.js) implements [Bresenham's line algorithm](http://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm).
* ``Cycle(a)`` in [src/core.js](https://github.com/shazow/unstdlib.js/blob/master/src/core.js) implements Python's ``itertools.cycle(iterable)``.
* ``CounterCallback(count, callback)`` in [src/core.js](https://github.com/shazow/unstdlib.js/blob/master/src/core.js) implements a really handy for executing a function on completion of a bunch of asynchronous calls.
* [src/binarysearch.js](https://github.com/shazow/unstdlib.js/blob/master/src/binarysearch.js) contains optimized implementations of various binary search related functions.


## Organization & Philosophy

At the time of writing this, there is no organization or philosophy for this library. It's a bunch of code I wrote on various projects like [LineRage](http://bit.ly/linerage-chrome) (a fast-paced canvas-based game that required a lot of fun optimizations). Some of the code is optimized excessively in interesting ways, whereas other parts are just convenience helpers.

The spirit of the code within is to ignore error checking in favour of elegance and performance. Unexpected input will result in unexpected behaviour.


## TODO

* Enclose functions in an ``unstdlib`` namespace.
* Write docstrings for all functions.
* Write unit tests.


## Contributors

Forks are highly encouraged. Everyone should have a collection of code they
commonly reuse. If you feel your code will be useful to others, make sure that
it is conforming to the spirit of the library outlined in the *Organization &
Philosophy* section and send over a pull request.

* [Full list of contributors](https://github.com/shazow/unstdlib.py/contributors)


## License

(The MIT License)

    Copyright 2011 Andrey Petrov <andrey.petrov@shazow.net>

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the 'Software'), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
