module('core');

test("cycle(a)", function() {
    var c = unstdlib.cycle([1,2,3]);

    var r = [];
    for(var i=10; i--;) {
        r.push(c());
    }

    deepEqual(r, [1,2,3,1,2,3,1,2,3,1]);
    equal(c(), 2);
    equal(c(), 3);
    equal(c(), 1);
});


test("cycle(a, num_cycles, default_)", function() {
    var c = unstdlib.cycle([1,2,3], 2, true);

    var r = [];
    for(var i=10; i--;) {
        r.push(c());
    }

    deepEqual(r, [1,2,3,1,2,3,true,true,true,true]);
});
