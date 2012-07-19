/* Author:
Calvin Metcalf
*/

var q,dd;

function bb(b){
    var a = [];
    b.visit(c);
function c(quad, x1, y1, x2, y2) {
    var poly = new L.Polygon([makel([x1,y1]),makel([x2,y1]),makel([x2,y2]),makel([x1,y2])],{fillOpacity:0,weight:1,color:"#000"});
        a.push(poly);
      }
return a;
}
function makel(ll){
    var lol=new L.LatLng(ll[1], ll[0]);
    return lol;
    
}
var m = new L.Map('map');
 var t = new L.TileLayer("http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png", 
{subdomains:["otile1","otile2","otile3","otile4"],
attribution:"Tiles from Mapquest, Tile data from Open Street Map"});
m.addLayer(t).setView(new L.LatLng(42.04113400940814,-71.795654296875), 8);
$(function() {
d3.json("js/oa.json", function(oa) {
var p = oa.features.map(function(v){
    
    var r = {x:v.geometry.coordinates[0],y:v.geometry.coordinates[1],properties:v.properties};
    var latlng =new L.LatLng(r.y,r.x);
    var circ = new L.CircleMarker(latlng,{stroke:false,fillOpacity:1})
    m.addLayer(circ.setRadius(3));
    return r;
    }
    
    );
q = d3.geom.quadtree(p);
dd=bb(q);
var len = dd.length;
var i = 0;
while(i<len){
   m.addLayer(dd[i]); 
 i++;  
}

});

});