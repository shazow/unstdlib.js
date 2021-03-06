var unstdlib = (function(unstdlib) {

    /**
     * Given a list of values {@code a}, return a function that infinitely cycles
     * over each value by returning one every time it is called.
     *
     * Example:
     *
     *     var c = cycle([1,2,3]);
     *     c() == 1;
     *     c() == 2;
     *     c() == 3;
     *     c() == 1;
     *
     * @param {array}  a  Array to cycle over.
     * @param {number} num_cycles  Number of cycles to perform before stopping.
     * @param {object} default     Default value to return when num_cycles elapsed.
     *
     * @return {function}
     */
    var cycle = unstdlib.cycle = function(a, num_cycles, default_) {
        var i = 0, stop = a.length;

        if(num_cycles-- >= 0) {
            return function() {
                if(i==stop) {
                    if(num_cycles <= 0) return default_;

                    i = 0;
                    num_cycles--;
                }
                return a[i++];
            }
        }

        return function() {
            if(i==stop) i = 0;
            return a[i++];
        }
    }


    /**
     * Execute {@code callback} after {@code count} calls.
     *
     * Example:
     *
     *     var cb = counter_callback(5, function() { alert('Hello World'); });
     *     for(var i=0; i<5; i++) {
     *         some_async_func(cb); // alert pops up when i == 4
     *     }
     *
     * @param {int} count
     * @param {function} callback
     *
     * @return {function}
     */
    var counter_callback = unstdlib.counter_callback = function(count, callback) {
        return function() {
            if(--count == 0) callback();
        }
    }


    /**
     * Generate a reverse lookup object such that the values of the keys of the
     * given object are the keys of the values of the returned object.
     *
     * @param {object} o
     *
     * @return {object}
     */
    var inverse_lookup = unstdlib.inverse_lookup = function(o) {
        var r = {};
        for(var k in o) {
            r[o[k]] = k;
        }
        return r;
    }

    return unstdlib;
})(unstdlib || {});
