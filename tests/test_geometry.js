module('geometry');

test("in_boundary", function() {
    ok(unstdlib.in_boundary({x: 0, y: 0}, {x: 0, y: 0, width: 0, height: 0}));
    ok(!unstdlib.in_boundary({x: 1, y: 1}, {x: 0, y: 0, width: 0, height: 0}));
    ok(unstdlib.in_boundary({x: 1, y: 1}, {x: 0, y: 0, width: 1, height: 1}));
    ok(!unstdlib.in_boundary({x: -1, y: 1}, {x: 0, y: 0, width: 1, height: 1}));
});

test("in_radius", function() {
    ok(unstdlib.in_radius({x: 0, y: 0}, {x: 0, y: 0, radius: 0}));
    ok(!unstdlib.in_radius({x: 1, y: 1}, {x: 0, y: 0, radius: 0}));
    ok(unstdlib.in_radius({x: 1, y: 0}, {x: 0, y: 0, radius: 1}));
    ok(unstdlib.in_radius({x: -1, y: 0}, {x: 0, y: 0, radius: 1}));
});

test("make_grid", function() {
    var counter = 0;
    var grid = unstdlib.make_grid({width: 4, height: 4}, function(pos) {
        return counter++;
    });

    deepEqual(grid, [
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15]
    ]);
});

test("make_grid_fast", function() {
    var grid = unstdlib.make_grid_fast({width: 4, height: 4}, 0);

    deepEqual(grid, [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ]);
});

test("iter_box", function() {
    var counter = 0;
    var grid = unstdlib.make_grid({width: 4, height: 4}, function(pos) {
        return counter++;
    });

    var cells = [];
    unstdlib.iter_box({x: 1, y: 1, width: 1, height: 1}, function(pos) {
        cells.push(grid[pos.x][pos.y]);
    });

    deepEqual([5,6,9,10], cells);
});

test("iter_line", function() {
    var counter = 0;
    var grid = unstdlib.make_grid({width: 4, height: 4}, function(pos) {
        return counter++;
    });

    var cells = [];
    unstdlib.iter_line({x: 0, y: 0}, {x: 3, y: 3}, function(pos) {
        cells.push(grid[pos.y][pos.x]);
    });

    deepEqual([0,5,10,15], cells);

    var cells = [];
    unstdlib.iter_line({x: 0, y: 0}, {x: 3, y: 2}, function(pos) {
        cells.push(grid[pos.y][pos.x]);
    });

    deepEqual([0,5,6,11], cells);
});

