var unstdlib=function(c){var a=c.binary_search=function(a,e,b){var g=0,h=a.length,f=h;if(h==0)return-1;if(b){for(;g<f;){var c=g+f>>1;b(a[c],e)<0?g=c+1:f=c}return g<h&&b(a[g],e)==0?g:~g}else{for(;g<f;)c=g+f>>1,a[c]<e?g=c+1:f=c;return a[g]==e?g:~g}};c.binary_insert=function(d,e,b){b=a(d,e,b);b<0&&(b=~b);d.splice(b,0,e);return b};c.binary_remove=function(d,e,b){e=a(d,e,b);return e>=0?d.splice(e,1)[0]:!1};return c}(unstdlib||{});unstdlib=function(c){c.cycle=function(a,d,e){var b=0,g=a.length;return d-- >=0?function(){if(b==g){if(d<=0)return e;b=0;d--}return a[b++]}:function(){b==g&&(b=0);return a[b++]}};c.counter_callback=function(a,d){return function(){--a==0&&d()}};c.inverse_lookup=function(a){var d={},e;for(e in a)d[a[e]]=e;return d};return c}(unstdlib||{});unstdlib=function(c){c.in_boundary=function(a,d){return a.x>=d.x&&a.y>=d.y&&a.x<=d.x+d.width&&a.y<=d.y+d.height};c.in_radius=function(a,d){var e=a.x-d.x,b=a.y-d.y;return d.radius*d.radius>=e*e+b*b};c.boundary_center=function(a){return{x:a.x-a.width/2,y:a.y-a.height/2}};c.rotate=function(a,d){var e=Math.sin(d),b=Math.cos(d);return{x:a.x*b-a.y*e,y:a.x*e+a.y*b}};c.make_grid=function(a,d){for(var e=[],b=0,g=a.width;b<g;b++){for(var c=[],f=0,i=a.height;f<i;f++)c.push(d(b,f));e.push(c)}return e};c.make_grid_fast=
function(a,d){for(var e=[],b=a.height,g=a.width;g>0;g--){for(var c=[],f=b;f>0;f--)c.push(d);e.push(c)}return e};c.iter_box=function(a,d){for(var e=a.x,b=a.y,c=e+a.width,h=b+a.height;e<=c;e++)for(var f=b;f<=h;f++)d(e,f)};c.iter_line=function(a,d,e){var b=a.x,c=d.x,h=a.y,f=d.y,i=Math.abs(f-h)>Math.abs(c-b);if(i)b=a.y,h=a.x,c=d.y,f=d.x;b>c&&(a=b,b=c,c=a,a=h,h=f,f=a);var a=c-b,d=Math.abs(f-h),j=a/2,k=-1;h<f&&(k=1);for(f=c;b<=f;b++){c=i?e(h,b):e(b,h);if(c===!1)return!1;j-=d;j<0&&(h+=k,j+=a)}};return c}(unstdlib||
{});
