import Layout from './Layout.js'

export default {
  name: 'UsagePage',
  components: { Layout },
  template: `
    <Layout>
      <table id="gaugeRow">
        <tr>    
          <th><svg id="fillgauge1" width="97%" height="250"></svg></th>
          <th><svg id="fillgauge2" width="97%" height="250"></svg></th>
          <th><svg id="fillgauge3" width="97%" height="250"></svg></th>
          <th><svg id="fillgauge4" width="97%" height="250"></svg></th>
          <th><svg id="fillgauge5" width="97%" height="250"></svg></th>
        </tr>
        <tr>
          <th><h2>Shower</h2></th>
          <th><h2>Toilet</h2></th>
          <th><h2>Faucet</h2></th>
          <th><h2>Dishwasher</h2></th>
          <th><h2>Other</h2></th>
        </tr>
      </table>
            
      <h1 class='headerText' id='totalUseText'>Total Use: 981 G this month</h1>
      
      
    </Layout>
  `,
  mounted(){
      
        var left = 100;
        var gauges = [0,0,0,0,0];
        gauges[0] = Math.floor(Math.random() * 30 + 30);
        left -= gauges[0];
        for(var i = 1;i<4;i++){
            gauges[i] = Math.floor(Math.random() * left * .80);
            left -= gauges[i];
        }
        gauges[4] = left;
        
        var gauge1 = loadLiquidFillGauge("fillgauge1", 62);
        var gauge2 = loadLiquidFillGauge("fillgauge2", 12);
        var gauge3 = loadLiquidFillGauge("fillgauge3", 21);
        var gauge4 = loadLiquidFillGauge("fillgauge4", 3);
        var gauge5 = loadLiquidFillGauge("fillgauge5", 12);
        
        var randTotal = Math.floor(Math.random() * 1000);
        document.getElementById("totalUseText").innerHTML = "Total Use: " + String(randTotal) + " G used this Month";
        
        /*var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12];
        var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        
        var w = 500;
            var h = 100;
            var barPadding = 1;

            //Create SVG element
            var svg = d3.select("#barChart")
            svg.attr("width", w)
              .attr("height", h);

            //Add bars to the generated svg element
            svg.selectAll("rect")
              .data(dataset)
              .enter()
              .append("rect")
              .attr("x", function(d, i) {
                return i * (w / dataset.length);
              })
              .attr("y", function(d) {
                return h - (d * 4);
              })

            //setting dynamic width for each bar with bar padding acting as the space between bars
            .attr("width", w / dataset.length - barPadding)

            //multiplying data value with 4 to increase the height of the bars 
            .attr("height", function(d) {
              return d * 4;
            })

            //apply dynamic colors
            .attr("fill", function(d) {
              return "rgb(5, 2, " + (d * 10) + ")";
            });

            //set the label
            svg.selectAll("text")
              .data(dataset)
              .enter()
              .append("text")
              .text(function(d) {
                return d;
              })
              .attr("text-anchor", "middle")
              .attr("x", function(d, i) {
                return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
              })
              .attr("y", function(d) {
                return h - (d * 4) + 14;
              })
              .attr("font-family", "sans-serif")
              .attr("font-size", "11px")
              .attr("fill", "white");*/
    }
}