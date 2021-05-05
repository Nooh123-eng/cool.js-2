   var red = 'rgb(255, 0, 0)';
            var blue = 'rgb(0, 21, 255)';
            var green =  "rgb(0, 161, 11)";
            var lightblue =  "rgb(0, 204, 255)";
            var brown = "rgb(189, 105, 2)";
   
   
   var RECT = function(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    };
       var ARC = function(x,y,start,stop){
         ctx.beginPath();
        ctx.arc(x, y, start,stop, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    };
      var CIR = function(x,y,w,h){
        ctx.beginPath();
        ctx.ellipse(x,y,w,h, 0, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    };
       var TRYANGLE = function(x1,y1,x2,y2,x3,y3){
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.lineTo(x3,y3);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        };
        var TXT= function(txt,x,y){
        for (var txtLoop = 0;txtLoop < txt.length;txtLoop++){
            ctx.beginPath();
            ctx.fillText(txt[txtLoop],x,y+30*txtLoop+40);
            ctx.fill();
        }
        };
         var TEXT_ALIGN = function(align){
            ctx.textAlign = align;
        };
        var BC = function(color){
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.fillRect(0,0,600,600);
            ctx.fill();
        };
          var C_COLOR = function(r,g,b,a){
        return "rgba("+r+","+g+","+b+","+a+")";
    };

         var STROKE = function(color){
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.stroke();
        };
    var QUAD = function(x1,y1,x2,y2,x3,y3,x4,y4){
            ctx.beginPath();
            ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.lineTo(x3,y3);
        ctx.lineTo(x4,y4);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        };
    var HEX = function(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6){
            ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.lineTo(x3,y3);
        ctx.lineTo(x4,y4);
        ctx.lineTo(x5,y5);
        ctx.lineTo(x6,y6);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
            
        };
    var OCT = function(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8){
            ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.lineTo(x3,y3);
        ctx.lineTo(x4,y4);
        ctx.lineTo(x5,y5);
        ctx.lineTo(x6,y6);
        ctx.lineTo(x7,y7);
        ctx.lineTo(x8,y8);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
            
        };
    var LINE = function(x1,y1,x2,y2){
            ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.closePath();
        ctx.stroke();
        };
    var ROUND_RECT = function(x,y,w,h,r){
			ctx.beginPath();
			ctx.moveTo(x + r, y);
			ctx.lineTo(x + w - r, y);
			ctx.quadraticCurveTo(x + w, y, x + w, y + r);
			ctx.lineTo(x + w, y + h - r);
			ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
			ctx.lineTo(x + r, y + h);
			ctx.quadraticCurveTo(x, y + h, x, y + h - r);
			ctx.lineTo(x, y + r);
			ctx.quadraticCurveTo(x, y, x + r, y);
			ctx.closePath();
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
        };
    var QUAD_Curve = function(x1,y1,x2,y2,x3,y3,x4,y4){
        
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.quadraticCurveTo(x2,y2,x3,y3,x4,y4)
        ctx.closePath();
        ctx.fill();
    };
    var BEZIER= function(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8){
        
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.bezierCurveTo(x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8);

        ctx.closePath();
        ctx.fill();
    };
    var CLEAR = function(){
            ctx.clearRect(0,0,600,600);
        };
    var STROKE_WEIGHT = function(weight){
        ctx.lineWidth = weight;
        };
    var NO_FILL = function(){
            ctx.fillStyle = "rgba(255, 255, 255,0.0)";
            ctx.fill();
        };
    var NOSTROKE = function(){
        ctx.strokeStyle = "rgba(255, 255, 255,0.0)"
    };
    var TEXT_SIZE = function(size){
        ctx.font = ctx.font.replace(/\d+px/,size+"px");

    };
        var ARC = function(x,y,start,stop){
         ctx.beginPath();
        ctx.arc(x, y, start,stop, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    };
    var ANIMATION = function(theVariable){
        window.requestAnimationFrame(theVariable);
    };
    var FLOOR = function(num1){
        return Math.floor(num1);
    };
    var CEIL = function(num1){
        return Math.ceil(num1);
    };
         
