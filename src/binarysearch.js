(function() {
    /** Binary Search **/

    /**
     * @param {Array} a  Array to search.
     * @param {*} val    Element to find within ``a``.
     * @param {function} compare_fn  Function that takes (a, b) and returns 0 if
     *                               a == b, a negative value if a < b, or a
     *                               positive value if b > a.
     *
     * @returns {int} (Positive) index of the element if found (not necessarily
     *                the first), otherwise (negative) negated index of
     *                insertion point.
     */
    var binary_search = unstdlib.binary_search = function(a, val, compare_fn) {
        var left = 0, max = a.length, right = max;

        // Empty array
        if(max==0) return -1;

        // Tight loop optimization
        if(compare_fn) {

            while(left < right) {
                var middle = (left + right) >> 1;
                compare_fn(a[middle], val) < 0 ? left = middle + 1 : right = middle;
            }
            return left < max && compare_fn(a[left], val) == 0 ? left : ~left;

        } else {

            while(left < right) {
                var middle = (left + right) >> 1;
                a[middle] < val ? left = middle + 1 : right = middle;
            }
            return a[left] == val ? left : ~left;

        }
    }

    var binary_insert = unstdlib.binary_insert = function(a, val, compare_fn) {
        // Returns position of insertion

        var i = binary_search(a, val, compare_fn);
        if(i < 0) i = ~i;
        a.splice(i, 0, val);
        return i;
    }

    var binary_remove = unstdlib.binary_remove = function(a, val, compare_fn) {
        // Returns removed element

        var i= binary_search(a, val, compare_fn);
        return (i >= 0) ? a.splice(i, 1)[0] : false;
    }

})();
