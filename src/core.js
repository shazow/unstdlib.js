/**
 * Given a list of values ``a``, return a function that infinitely cycles
 * over each value by returning one every time it is called.
 *
 * Example:
 *
 *     var c = Cycle([1,2,3]);
 *     c() == 1;
 *     c() == 2;
 *     c() == 3;
 *     c() == 1;
 *
 * @param   {array} a
 * @return  {function}
 */
function Cycle(a) {
    var i = 0, stop = a.length;
    return function() {
        if(i==stop) i = 0;
        return a[i++];
    }
}


/**
 * Execute ``callback`` after ``count`` calls.
 *
 * Example:
 *
 *     var cb = CounterCallback(5, function() { alert('Hello World'); });
 *     for(var i=0; i<5; i++) {
 *         some_async_func(cb); // alert pops up when i == 4
 *     }
 *
 * @param   {int} count
 * @param   {function} callback
 * @return  {function}
 */
function CounterCallback(count, callback) {
    return function() {
        if(--count == 0) callback();
    }
}


function inverse_lookup(o) {
    var r = {};
    for(var k in o) {
        r[o[k]] = k;
    }
    return r;
}
