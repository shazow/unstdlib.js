module('binarysearch');

test("no compare_fn", function() {
    var a = [1,2,3,4,5,6,7,8,9,10];

    equal(unstdlib.binary_search(a, 1), 0);
    equal(unstdlib.binary_search(a, 10), 9);
    equal(unstdlib.binary_search(a, 11), ~10);
    equal(unstdlib.binary_search(a, 0), ~0);
    equal(unstdlib.binary_search(a, 5), 4);
});

test("simple compare_fn", function() {
    var compare_fn = function(a,b) { return a-b; }

    var a = [1,2,3,4,5,6,7,8,9,10];

    equal(unstdlib.binary_search(a, 1, compare_fn), 0);
    equal(unstdlib.binary_search(a, 10, compare_fn), 9);
    equal(unstdlib.binary_search(a, 11, compare_fn), ~10);
    equal(unstdlib.binary_search(a, 0, compare_fn), ~0);
    equal(unstdlib.binary_search(a, 5, compare_fn), 4);
});
