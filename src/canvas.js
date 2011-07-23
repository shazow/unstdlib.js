/** Canvas context */

function draw_grid_to_ctx(grid, ctx, box) {
    ctx.fillStyle = 'rgb(255,255,255)';
    iter_box(box, function(pos) {
        if(!grid[pos[0]][pos[1]]) return;
        ctx.fillRect(pos[0], pos[1], 1, 1);
    });
}

function ctx_xy_to_rgb(ctx, xy) {
    var img=ctx.getImageData(xy[0],xy[1],1,1);
    return [img.data[0], img.data[1], img.data[2]];
}


