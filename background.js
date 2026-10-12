try{lucide.createIcons()}catch(e){}
(function(){
var c=document.getElementById("bg"),x=c.getContext("2d"),S=14,G=2,W,H,cols,rows,ph=[],mx=-999,my=-999,rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
function col(){var t=document.documentElement.getAttribute("data-theme");var l=t==="light"||(t!=="dark"&&matchMedia("(prefers-color-scheme:light)").matches);return l?"20,20,24":"230,225,255"}
function size(){var d=devicePixelRatio||1;W=innerWidth;H=innerHeight;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0);cols=Math.ceil(W/S);rows=Math.ceil(H/S);ph=[];for(var i=0;i<cols*rows;i++)ph.push([Math.random()*6.28,.4+Math.random()*1.2]);if(rm)draw(0)}
function draw(t){x.clearRect(0,0,W,H);var rgb=col(),s=S-G;t/=1000;
for(var j=0;j<rows;j++)for(var i=0;i<cols;i++){var p=ph[j*cols+i],a=.04+.1*(.5+.5*Math.sin(t*p[1]+p[0]));
var dx=i*S+S/2-mx,dy=j*S+S/2-my,d=Math.sqrt(dx*dx+dy*dy);if(d<160){var k=1-d/160;a+=.8*k*k}
x.fillStyle="rgba("+rgb+","+Math.min(a,1)+")";x.fillRect(i*S,j*S,s,s)}
if(!rm)requestAnimationFrame(draw)}
size();addEventListener("resize",size);
addEventListener("pointermove",function(e){mx=e.clientX;my=e.clientY});
if(!rm)requestAnimationFrame(draw);
})();
