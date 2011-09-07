var unstdlib = (function(unstdlib) {

    /**
     * All types are two-dimensional here.
     */

    /** @typedef {{x: number, y: number}} */
    unstdlib.Position;

    /** @typedef {{x: number, y: number, width: number, height: number}} */
    unstdlib.Box;

    /** @typedef {{x: number, y: number, radius: number}} */
    unstdlib.Circle;

    /** @typedef {{width: number, height: number}} */
    unstdlib.Size;


    /**
     * Determine if Position falls within Box.
     *
     * @param {unstdlib.Position} pos  Position to check.
     * @param {unstdlib.Box} box       Bounding container for pos.
     *
     * @return {boolean}
     */
    var in_boundary = unstdlib.in_boundary = function(pos, box) {
        return pos.x >= box.x &&
               pos.y >= box.y &&
               pos.x <= box.x + box.width &&
               pos.y <= box.y + box.height;
    }

    /**
     * Determine if Position falls within Circle.
     *
     * @param {unstdlib.Position} pos  Position to check.
     * @param {unstdlib.Circle} circle Bounding circular container for pos.
     *
     * @return {boolean}
     */
    var in_radius = unstdlib.in_radius = function(pos, circle) {
        var dx = pos.x - circle.x, dy = pos.y - circle.y;
        return circle.radius*circle.radius >= dx*dx + dy*dy;
    }

    /**
     * Get the center Position of Box.
     *
     * @param {unstdlib.Box} box  Bounding container to get center of.
     *
     * @return {unstdlib.Position}
     */
    var boundary_center = unstdlib.boundary_center = function(box) {
        return {
            x: box.x - box.width / 2,
            y: box.y - box.height / 2
        };
    }

    /**
     * Rotate a two-dimensional Vector by a given angle.
     *
     * @param {unstdlib.Vector} vector  Vector to rotate.
     * @param {number} angle            Angle to rotate Vector by (in Radians).
     *
     * @return {unstdlib.Vector}
     */
    var rotate = unstdlib.rotate = function(vector, angle) {
        var sin = Math.sin(angle), cos = Math.cos(angle);
        return {
            x: vector.x * cos - vector.y * sin,
            y: vector.x * sin + vector.y * cos
        };
    }


    /**
     * Grid tools.
     */

    /**
     * Make a two-dimensional grid of a given Size such that each cell's value
     * is determined by a callback for each position.
     *
     * @param {unstdlib.Size} size  Size of the 2D grid.
     * @param {function(number, number)} fn  Callback called for each x and y
     *     position in the grid, return value is used for the grid in the
     *     respective position.
     *
     * @return {Array.<Array>}
     */
    var make_grid = unstdlib.make_grid = function(size, fn) {
        var grid = [];
        for (var x=0, w=size.width; x<w; x++) {

            var row = [];
            for(var y=0, h=size.height; y<h; y++) row.push(fn(x, y));

            grid.push(row);
        }
        return grid;
    }

    /**
     * Make a two-dimensional grid of a given Size such that each cell has the
     * same value.
     *
     * (A faster and simpler implementation of unstdlib.make_grid)
     *
     * @param {unstdlib.Size} size  Size of the 2D grid.
     * @param {*} value             Value to use for each cell in the grid.
     *
     * @return {Array.<Array>}
     */
    var make_grid_fast = unstdlib.make_grid_fast = function(size, value) {
        var grid = [];
        var w = size.width, h = size.height;
        for (var x=w; x>0; x--) {

            var row = [];
            for(var y=h; y>0; y--) row.push(value);

            grid.push(row);
        }
        return grid;
    }

    /**
     * Iterate over the Positions of a given Box by making a Callback to fn with
     * each x and y posititon (inclusive).
     *
     * @param {unstdlib.Box} box  Bounding container of the box to iterate over.
     * @param {function(number, number)} fn  Callback called for each x and y
     *     position in the bounding Box.
     */
    var iter_box = unstdlib.iter_box = function(box, fn) {
        // Given a box, call fn with the position of each element.
        var x1 = box.x, y1 = box.y, x2 = x1 + box.width, y2 = y1 + box.height;

        for(var x=x1; x<=x2; x++) {
            for(var y=y1; y<=y2; y++) {
                fn(x, y);
            }
        }
    }

    /**
     * Iterate over the Positions in a straight line between Position A and
     * Position B (inclusive) by making a Callback to fn with
     * each x and y along the path.
     *
     * Implemented using Bresenham's line algorithm as described here:
     * http://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm
     *
     * @param {unstdlib.Position} A  Position to start the line from.
     * @param {unstdlib.Position} B  Position to stop the line at.
     * @param {function(number, number)} fn  Callback called for each x and y
     *     position along the line. If the callback returns {@code false}, the
     *     iteration is aborted.
     */
    var iter_line = unstdlib.iter_line = function(A, B, fn) {
        var x0 = A.x, x1 = B.x, y0 = A.y, y1 = B.y;

        var steep = Math.abs(y1 - y0) > Math.abs(x1 - x0);
        if(steep) {
            x0 = A.y; y0 = A.x; // Swap x0 <-> y0
            x1 = B.y; y1 = B.x; // Swap x1 <-> y1
        }

        if(x0 > x1) {
            var t = x0; x0 = x1, x1 = t; // Swap x0 <-> x1
            var t = y0; y0 = y1; y1 = t; // Swap y0 <-> y1
        }

        var dx = x1 - x0, dy = Math.abs(y1 - y0);
        var error = dx / 2, ystep = -1;
        if(y0 < y1) ystep = 1;

        var r;
        for(var x=x0, y=y0, stop=x1; x<=stop; x++) {
            if(steep) r = fn(y, x)
            else r = fn(x, y);

            if(r===false) return false;

            error -= dy;
            if(error < 0) {
                y += ystep;
                error += dx;
            }
        }
    }

    return unstdlib;
})(unstdlib || {});
