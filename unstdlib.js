unstdlib=window.unstdlib={};(function(){unstdlib.Cycle=function(a){var b=0,d=a.length;return function(){b==d&&(b=0);return a[b++]}};unstdlib.CounterCallback=function(a,b){return function(){--a==0&&b()}};unstdlib.inverse_lookup=function(a){var b={},d;for(d in a)b[a[d]]=d;return b}})();(function(){var a=unstdlib.binary_search=function(a,d,c){var e=0,f=a.length;if(c){for(;e<f;){var g=e+f>>1;c(a[g],d)<0?e=g+1:f=g}return c(a[e],d)==0?e:~e}else{for(;e<f;)g=e+f>>1,a[g]<d?e=g+1:f=g;return a[e]==d?e:~e}};unstdlib.binary_insert=function(b,d,c){c=a(b,d,c);c<0&&(c=~c);b.splice(c,0,d);return c};unstdlib.binary_remove=function(b,d,c){d=a(b,d,c);return d>=0?b.splice(d,1)[0]:!1}})();(function(){unstdlib.draw_grid_to_ctx=function(a,b,d){b.fillStyle="rgb(255,255,255)";iter_box(d,function(c){a[c[0]][c[1]]&&b.fillRect(c[0],c[1],1,1)})};unstdlib.ctx_xy_to_rgb=function(a,b){var d=a.getImageData(b[0],b[1],1,1);return[d.data[0],d.data[1],d.data[2]]}})();(function(){unstdlib.in_boundary=function(a,b){return a[0]>=b[0]&&a[1]>=b[1]&&a[0]<=b[2]&&a[1]<=b[3]};unstdlib.in_radius=function(a,b,d){var c=a[0]-b[0],a=a[1]-b[1];return d*d>=c*c+a*a};unstdlib.boundary_center=function(a){return[a[0]-(a[0]-a[2])/2,a[1]-(a[1]-a[3])/2]};unstdlib.bounding_square=function(a,b){return[a[0],a[1]+b,a[1],a[1]+b]};unstdlib.rotate=function(a,b){var d=a[0],c=a[1],e=Math.sin(b),f=Math.cos(b);return[d*f-c*e,d*e+c*f]};unstdlib.make_grid=function(a,b){for(var d=[],c=0,e=a[0];c<
e;c++){for(var f=[],g=0,h=a[1];g<h;g++)f.push(b([c,g]));d.push(f)}return d};unstdlib.make_grid_fast=function(a,b){for(var d=[],c=a[1]-1,e=a[0]-1;e>=0;e--){for(var f=[],g=c;g>=0;g--)f.push(b);d.push(f)}return d};unstdlib.iter_box=function(a,b){for(var d=a[1],c=a[2],e=a[3],f=a[0];f<c;f++)for(var g=d;g<e;g++)b([f,g])};unstdlib.iter_line=function(a,b,d){var c=a[0],e=b[0],f=a[1],g=b[1],h=Math.abs(g-f)>Math.abs(e-c);h&&(c=a[1],f=a[0],e=b[1],g=b[0]);c>e&&(a=c,c=e,e=a,a=f,f=g,g=a);var a=e-c,b=Math.abs(g-
f),i=a/2,j=-1;f<g&&(j=1);for(g=e;c<=g;c++){e=h?d([f,c]):d([c,f]);if(e==!1)return!1;i-=b;i<0&&(f+=j,i+=a)}};unstdlib.flat_3d_idx=function(a,b){return b[0]*a[0]*a[2]+b[1]*a[2]+b[2]}})();
