<template>
  <div class="LogoContainer">
    <div id="logo">
      <svg>
          <clipPath id="disk-clipper">
              <circle class="arc"></circle>
          </clipPath>
          <g clip-path="url(#disk-clipper)" id="canvas">
              <path id="boucle" class="letterP nonStatic arc"></path>
              <line id="vertical-line" class="letterA letterP"></line>
              <line id="horizontal-line" class="letterA"></line>
              <line id="diagonal" class="letterA nonStatic"></line>
              <path id="circle" class="arc"></path>
          </g>
      </svg>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3"

/*
 * Handles the drawing and animation of the logo, and perform some geometrical computations 
 */

var drawing = (function() {

   var drawing = {
      "largeInnerWidth": 240,
      "smallInnerWidth": 80,
      "largeStroke": 4,
      "smallStroke": 2,
      "longAnimation": 1000,
      "shortAnimation": 500
   };
   var tau = 2 * Math.PI; // http://tauday.com/tau-manifesto

   drawing.initializeLogo = function(width, height, strokeWidth) {

      d3.select("svg")
         .attr("width", drawing.logoWidth())
         .attr("height", drawing.logoWidth())
         .attr("viewBox", "0 0 " + width + " " + height);

      d3.select("#disk-clipper circle")
         .attr("transform", translate(width / 2, height / 2))
         .attr("r", height / 2);

      d3.select("#canvas")
         .style("stroke-width", strokeWidth);

      /* lines */

      d3.select("#horizontal-line")
         .attr("x1", width / 2 + strokeWidth / 4)
         .attr("y1", height / 2)
         .attr("x2", width / 2 + strokeWidth / 4)
         .attr("y2", height / 2);

      d3.select("#vertical-line")
         .attr("x1", width / 2)
         .attr("y1", -strokeWidth / 2)
         .attr("x2", width / 2)
         .attr("y2", 0);

      d3.select("#diagonal")
         .attr("x1", width / 2)
         .attr("y1", 0)
         .attr("x2", width / 2)
         .attr("y2", 0);

      /* circles */

      d3.select("#circle")
         .attr("transform", translate(width / 2, height / 2))
         .datum({
            endAngle: 0
         });

      d3.select("#boucle")
         .attr("transform", translate(width / 2, height / 4 + strokeWidth / 4))
         .datum({
            endAngle: 0
         });

      /* bind listeners */

      //reorderOnHover();
   };



   drawing.firstDrawLogo = function(width, height, strokeWidth) {

      // make header full height, and prepare its shrinking animation

      // d3.select("header").style("height", window.innerHeight)
      //    .style("padding-top", (window.innerHeight - height) / 2)
      //    .style("padding-bottom", (window.innerHeight - height) / 2);

      // Now that the page is covered by the header, change the body back to its original color
      //$("body").css("background-color", "#E6EBEE");

      // unroll the logo

      // var t0 = d3.select("header").transition().ease("linear").delay(500).duration(600);
      var t0 = d3.transition().ease("linear").delay(500).duration(600);
      var t1 = t0.transition().ease("linear").duration(300);
      var t2 = t1.transition().ease("linear").duration(300);
      var t3 = t2.transition().ease("linear").duration(300);
      var t4 = t3.transition().ease("linear").duration(300);

      d3.select("#left-half rect")
         .attr("x", 0)
         .attr("y", 0)
         .attr("width", width / 2)
         .attr("height", height);

      d3.select("#right-half rect")
         .attr("x", width / 2)
         .attr("y", 0)
         .attr("width", width / 2)
         .attr("height", height);

      /* half circles */

      t0.select("#circle")
         .call(arcTween, width / 2, strokeWidth, 0.5 * tau);

      t0.select("#boucle")
         .call(arcTween, width / 4 + strokeWidth / 4, strokeWidth, 0.5 * tau);

      /* quarter-circle & half-horizontal */

      t1.select("#circle")
         .call(arcTween, width / 2, strokeWidth, 0.75 * tau);

      t1.select("#horizontal-line")
         .attr("x1", 0)
         .attr("y1", height / 2)
         .attr("x2", width / 2 + strokeWidth / 4)
         .attr("y2", height / 2);

      /* finish circle */

      t2.select("#circle")
         .call(arcTween, width / 2, strokeWidth, tau);

      /* fall from top to middle */

      t3.select("#vertical-line")
         .attr("y2", height / 2);

      t3.select("#diagonal")
         .attr("x2", width / 2 * Math.sqrt(2) / (1 + Math.sqrt(2)))
         .attr("y2", height / 2);

      /* bouquet final */

      t4.select("#vertical-line")
         .attr("y2", height - strokeWidth);

      t4.select("#diagonal")
         .attr("x2", width / 2 * (1 - 1 / Math.sqrt(2)))
         .attr("y2", height / 2 * (1 + 1 / Math.sqrt(2)));

      t4.select("#horizontal-line")
         .attr("x2", width);

      /* hide preloader */

      var t5 = t4.transition().ease("linear").duration(200);
      t5.select('#logo').attr('style','opacity: 0');

      var t6 = t5.transition().ease("linear").duration(200);
      t6.select('.LogoContainer').attr('style','opacity: 0');

      var t7 = t6.transition();
      t7.select('.LogoContainer').attr('style','display:none');

      /* depending on screen size, the last two animations are synchronous or sequenced */

      // $(".logoText").width(0).css("visibility", "visible");
      // $("#logoTextImg").width(drawing.logoTextWidth());
      // $(".hint").css("opacity", 0);

      // var t5, t6, t7;
      // if (window.innerWidth < 768) {
      //    /* one animation for the horizontal line and the text of the logo */

      //    t5 = t4.transition().ease("quad-in-out").duration(800);

      //    t5.select("#horizontal-line").attr("x2", width);
      //    t5.selectAll(".logoText").style("width", drawing.logoTextWidth());

      //    /* fade in the hints above the logo */

      //    t6 = t5.transition().ease("quad-in-out").delay(1100 + 1200 + 800 + 400).duration(300);
      //    t7 = t6.transition().ease("quad-in-out").duration(300);

      //    $(".hint").css("top", "-80px");
      //    t6.select(".left-hint").style("top", "-60px").style("opacity", 1);
      //    t7.select(".right-hint").style("top", "-60px").style("opacity", 1);
      // } else {
      //    /* animate the horizontal line, then the text of the logo */

      //    t5 = t4.transition().ease("linear").duration(200);
      //    t6 = t5.transition().ease("quad-in-out").duration(800);

      //    t5.select("#horizontal-line").attr("x2", width);
      //    t6.selectAll(".logoText").style("width", drawing.logoTextWidth());

      //    /* fade in the hints below the logo */

      //    t7 = t6.transition().ease("quad-in-out").delay(1100 + 1200 + 150 + 800 + 400).duration(300);
      //    var t8 = t7.transition().ease("quad-in-out").duration(300);

      //    $(".hint").css("bottom", "-90px");
      //    t7.selectAll(".left-hint").style("bottom", "-70px").style("opacity", 1);
      //    t8.selectAll(".right-hint").style("bottom", "-70px").style("opacity", 1);
      // }

   };




   drawing.drawLogo = function(width, height, strokeWidth, state, animate, cubic) {

      // change the body back to its original color if needed (=if skipping splash page)
      $("body").css("background-color", "#E6EBEE");
      $("footer").attr("style", "");

      var t0 = d3.select("header");
      if (animate)
         t0 = t0.transition(cubic ? "cubic-out" : "quad-in-out").duration(animate);

      // animate the dark background of the header
      t0.style("height", state > 0 ? width + 2 * 30 : window.innerHeight)
         .style("padding-top", state > 0 ? 30 : (window.innerHeight - height) / 2)
         .style("padding-bottom", state > 0 ? 30 : (window.innerHeight - height) / 2);


      // position the logo horizontally, using animatable margins
      if (state > 0) {
         $("#logo").css("margin-left", $("#logo").offset().left);
         $("#logo-container").removeClass("center-wrapper");
      } else {
         // always resize the image
         $("#logoTextImg").width(drawing.logoTextWidth());

         if (model.prevState !== 0 && animate) {
            // prepare entrance animation of the text
            $(".logoText").width(0);
         }
      }

      // animate the logo to its new horizontal position
      t0.select("#logo").style("margin-left", logoLeftMargin(state, width));

      // at the end of the animation, remove margin-left and put center class back
      if (state === 0) {
         if (animate) {
            t0.select("#logo").each("end", function() {
               $("#logo").css("margin-left", 0);
               $("#logo-container").addClass("center-wrapper");
            });
         } else {
            $("#logo").css("margin-left", 0);
            $("#logo-container").addClass("center-wrapper");
         }
      }

      // back to regular svg manipulations
      t0.select("svg")
         .attr("width", drawing.logoWidth())
         .attr("height", drawing.logoWidth())
         .attr("viewBox", "0 0 " + width + " " + height);

      // We need to increase the strokeWidth, to keep the lines visible
      t0.select("#canvas").style("stroke-width", strokeWidth);

      t0.select("#left-half rect")
         .attr("x", 0)
         .attr("y", 0)
         .attr("width", width / 2)
         .attr("height", height);

      t0.select("#right-half rect")
         .attr("x", width / 2)
         .attr("y", 0)
         .attr("width", width / 2)
         .attr("height", height);

      t0.select("#circle")
         .attr("transform", translate(width / 2, height / 2))
         .attr("d", arcGenerator(width / 2, strokeWidth).endAngle(tau));

      t0.select("#boucle")
         .attr("transform", translate(width / 2, width / 4 + strokeWidth / 4))
         .attr("d", arcGenerator(width / 4 + strokeWidth / 4, strokeWidth).endAngle(0.5 * tau));

      t0.select("#disk-clipper")
         .select("circle")
         .attr("transform", translate(width / 2, height / 2))
         .attr("r", height / 2);

      t0.select("#vertical-line")
         .attr("x1", width / 2)
         .attr("y1", -strokeWidth / 2)
         .attr("x2", width / 2)
         .attr("y2", height - strokeWidth);

      t0.select("#horizontal-line")
         .attr("x1", 0)
         .attr("y1", height / 2)
         .attr("x2", width)
         .attr("y2", height / 2);

      t0.select("#diagonal")
         .attr("x1", width / 2)
         .attr("y1", 0)
         .attr("x2", width / 2 * (1 - 1 / Math.sqrt(2)))
         .attr("y2", height / 2 * (1 + 1 / Math.sqrt(2)));

      if (animate && state !== 0) {
         d3.select("#heading").style("opacity", 0);

         d3.select("#heading")
            .transition().duration(400).delay(animate)
            .style("opacity", 1);
      }

      if (animate) {
         var t1 = t0.transition().ease("quad-in-out").duration(800);
         t1.selectAll(".logoText").style("width", drawing.logoTextWidth());

         $(".hint").css("opacity", 0);

         var t2 = t1.transition().ease("quad-in-out").duration(300);
         var t3 = t2.transition().ease("quad-in-out").duration(300);

         if (window.innerWidth < 768) {
            $(".hint").css("top", "-80px");

            t2.select(".left-hint").style("top", "-60px").style("opacity", 1);
            t3.select(".right-hint").style("top", "-60px").style("opacity", 1);
         } else {
            $(".hint").css("bottom", "-90px");

            t2.selectAll(".left-hint").style("bottom", "-70px").style("opacity", 1);
            t3.selectAll(".right-hint").style("bottom", "-70px").style("opacity", 1);
         }
      } else
         d3.selectAll(".logoText").style("width", drawing.logoTextWidth());
   };




   /////////////////////      helper functions        ////////////////////

   function reorderOnHover() {

      $("#left-half").mouseenter(function() {
         d3.select("#horizontal-line").moveToFront();
         d3.select("#diagonal").moveToFront();
         d3.select("#circle").moveToFront();
      });

      $("#right-half").mouseenter(function() {
         d3.select("#boucle").moveToFront();
         d3.select("#vertical-line").moveToFront();
      });
   }

   function logoLeftMargin(state, logoWidth) {
      switch (state) {
         /*         case -1:
                     // 10px horizontal padding 
                     return (window.innerWidth-logoWidth+2*10)/2;
                  case 0:
                     return logoLeftMargin(-1, logoWidth + logoTextWidth())*/
         case -1:
         case 0:
            if (window.innerWidth < 768)
               return (window.innerWidth - drawing.logoWidth()) / 2;
            else
               return $("#logoSplash").offset().left;
            break;
         case 1:
            return $("#logoAbout").offset().left;
         case 2:
            return $("#logoProjects").offset().left;
      }
   }

   drawing.logoTextWidth = function() {
      if (window.innerWidth > 360)
         return Math.min(drawing.largeInnerWidth * 2, 4 / 10 * window.innerWidth);
      else
         return 8 / 10 * window.innerWidth;
   };

   drawing.logoWidth = function() {
      // TODO
      if (true) {
         if (window.innerWidth > 360)
            return Math.min(drawing.largeInnerWidth, 2 / 10 * window.innerWidth);
         else
            return 4 / 10 * window.innerWidth;
      } else {
         return $("#logoProjects").width();
      }
   };

   function arcGenerator(radius, strokeWidth) {
      return d3.svg.arc()
         .innerRadius(radius - strokeWidth)
         .outerRadius(radius)
         .startAngle(0);
   }

   function translate(x, y) {
      return "translate(" + x + "," + y + ")";
   }

   // http://stackoverflow.com/questions/14167863/how-can-i-bring-a-circle-to-the-front-with-d3
   d3.selection.prototype.moveToFront = function() {
      return this.each(function() {
         this.parentNode.appendChild(this);
      });
   };

   // http://bl.ocks.org/mbostock/5100636
   // Creates a tween on the specified transition's "d" attribute, transitioning
   // any selected arcs from their current angle to the specified new angle.
   function arcTween(transition, radius, strokeWidth, newAngle) {

      var arc = arcGenerator(radius, strokeWidth);

      // The function passed to attrTween is invoked for each selected element when
      // the transition starts, and for each element returns the interpolator to use
      // over the course of transition. This function is thus responsible for
      // determining the starting angle of the transition (which is pulled from the
      // element's bound datum, d.endAngle), and the ending angle (simply the
      // newAngle argument to the enclosing function).
      transition.attrTween("d", function(d) {

         // To interpolate between the two angles, we use the default d3.interpolate.
         // (Internally, this maps to d3.interpolateNumber, since both of the
         // arguments to d3.interpolate are numbers.) The returned function takes a
         // single argument t and returns a number between the starting angle and the
         // ending angle. When t = 0, it returns d.endAngle; when t = 1, it returns
         // newAngle; and for 0 < t < 1 it returns an angle in-between.
         var interpolate = d3.interpolate(d.endAngle, newAngle);

         // The return value of the attrTween is also a function: the function that
         // we want to run for each tick of the transition. Because we used
         // attrTween("d"), the return value of this last function will be set to the
         // "d" attribute at every tick. (It's also possible to use transition.tween
         // to run arbitrary code for every tick, say if you want to set multiple
         // attributes from a single function.) The argument t ranges from 0, at the
         // start of the transition, to 1, at the end.
         return function(t) {

            // Calculate the current arc angle based on the transition time, t. Since
            // the t for the transition and the t for the interpolate both range from
            // 0 to 1, we can pass t directly to the interpolator.
            //
            // Note that the interpolated angle is written into the element's bound
            // data object! This is important: it means that if the transition were
            // interrupted, the data bound to the element would still be consistent
            // with its appearance. Whenever we start a new arc transition, the
            // correct starting angle can be inferred from the data.
            d.endAngle = interpolate(t);

            // Lastly, compute the arc path given the updated data! In effect, this
            // transition uses data-space interpolation: the data is interpolated
            // (that is, the end angle) rather than the path string itself.
            // Interpolating the angles in polar coordinates, rather than the raw path
            // string, produces valid intermediate arcs during the transition.
            return arc(d);
         };
      });
   }

   // return public methods and fields
   return drawing;
})();

let firstrun=true;

export default{
  name: 'Logo',
  mounted(){
   if(firstrun){
      drawing.initializeLogo(drawing.largeInnerWidth, drawing.largeInnerWidth, drawing.largeStroke);
      var logoWidth = drawing.largeInnerWidth;
      drawing.firstDrawLogo(logoWidth, logoWidth, drawing.largeStroke);
      firstrun=false;
   }else{
      d3.select('.LogoContainer').attr('style','display:none');
   }
  }
}

</script>

<style lang='scss'>
.LogoContainer{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  transition: opacity .2s ease-in;
}

#logo {
  padding: 0 10px;
  display: inline-block;
  position: relative;
  stroke: $logo-color;
  fill: $logo-color;
  transition: opacity .2s ease-in;
}

svg {
  margin: 0 auto;
}

.arc {
  stroke-width: 0;
}

.squashed {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.squashed * {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
