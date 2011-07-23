/** Binary Search **/

var binary_search = function(a, val, compare_fn) {
    // Returns (positive) index of element if found (not necessarily the first),
    // otherwise (negative) negated index of insertion point.

    var left = 0, right = a.length;

    // Tight loop optimization
    if(compare_fn) {
        while(left < right) {
            var middle = (left + right) >> 1;
            compare_fn(a[middle], val) ? left = middle + 1 : right = middle;
        }
        return compare_fn(a[left], val) ? left : ~left;
    } else {
        while(left < right) {
            var middle = (left + right) >> 1;
            a[middle] < val ? left = middle + 1 : right = middle;
        }
        return a[left] == val ? left : ~left;
    }
}

var binary_insert = function(a, val, compare_fn) {
    // Returns position of insertion

    var i = binary_search(a, val, compare_fn);
    if(i < 0) i = ~i;
    a.splice(i, 0, val);
    return i;
}

var binary_remove = function(a, val, compare_fn) {
    // Returns removed element

    var i= binary_search(a, val, compare_fn);
    return (i >= 0) ? a.splice(i, 1)[0] : false;
}
