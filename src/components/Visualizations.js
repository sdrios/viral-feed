// React imports
import React, { Component } from 'react';
import Panel, {
  PanelTitle,
  PanelText
} from 'calcite-react/Panel';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


class Visualizations extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      chartDataUS: [],
      error: null,
    }
  }

  componentDidMount() {
    let chart = am4core.create("chart", am4charts.XYChart);
    //add chart data 
    chart.data =
      [
        { date: "2020-2-10", confirmed: 11, deaths: 0, recovered: 3 },
        { date: "2020-2-11", confirmed: 12, deaths: 0, recovered: 3 },
        { date: "2020-2-12", confirmed: 12, deaths: 0, recovered: 3 },
        { date: "2020-2-13", confirmed: 13, deaths: 0, recovered: 3 },
        { date: "2020-2-14", confirmed: 13, deaths: 0, recovered: 3 },
        { date: "2020-2-15", confirmed: 13, deaths: 0, recovered: 3 },
        { date: "2020-2-16", confirmed: 13, deaths: 0, recovered: 3 },
        { date: "2020-2-17", confirmed: 13, deaths: 0, recovered: 3 },
        { date: "2020-2-18", confirmed: 13, deaths: 0, recovered: 3 },
        { date: "2020-2-19", confirmed: 13, deaths: 0, recovered: 3 },
        { date: "2020-2-20", confirmed: 13, deaths: 0, recovered: 3 },
        { date: "2020-2-21", confirmed: 15, deaths: 0, recovered: 5 },
        { date: "2020-2-22", confirmed: 15, deaths: 0, recovered: 5 },
        { date: "2020-2-23", confirmed: 15, deaths: 0, recovered: 5 },
        { date: "2020-2-24", confirmed: 51, deaths: 0, recovered: 5 },
        { date: "2020-2-25", confirmed: 51, deaths: 0, recovered: 6 },
        { date: "2020-2-26", confirmed: 57, deaths: 0, recovered: 6 },
        { date: "2020-2-27", confirmed: 58, deaths: 0, recovered: 6 },
        { date: "2020-2-28", confirmed: 60, deaths: 0, recovered: 7 },
        { date: "2020-2-29", confirmed: 68, deaths: 1, recovered: 7 },
        { date: "2020-3-1", confirmed: 74, deaths: 1, recovered: 7 },
        { date: "2020-3-2", confirmed: 98, deaths: 6, recovered: 7 },
        { date: "2020-3-3", confirmed: 118, deaths: 7, recovered: 7 },
        { date: "2020-3-4", confirmed: 149, deaths: 11, recovered: 7 },
        { date: "2020-3-5", confirmed: 217, deaths: 12, recovered: 7 },
        { date: "2020-3-6", confirmed: 262, deaths: 14, recovered: 7 },
        { date: "2020-3-7", confirmed: 402, deaths: 17, recovered: 7 },
        { date: "2020-3-8", confirmed: 518, deaths: 21, recovered: 7 },
        { date: "2020-3-9", confirmed: 583, deaths: 22, recovered: 7 },
        { date: "2020-3-10", confirmed: 959, deaths: 28, recovered: 8 },
        { date: "2020-3-11", confirmed: 1281, deaths: 36, recovered: 8 },
        { date: "2020-3-12", confirmed: 1663, deaths: 40, recovered: 12 },
        { date: "2020-3-13", confirmed: 2179, deaths: 47, recovered: 12 },
        { date: "2020-3-14", confirmed: 2727, deaths: 54, recovered: 12 },
        { date: "2020-3-15", confirmed: 3499, deaths: 63, recovered: 12 },
        { date: "2020-3-16", confirmed: 4632, deaths: 85, recovered: 17 },
        { date: "2020-3-17", confirmed: 6421, deaths: 108, recovered: 17 },
        { date: "2020-3-18", confirmed: 7783, deaths: 118, recovered: 0 },
        { date: "2020-3-19", confirmed: 13677, deaths: 200, recovered: 0 },
        { date: "2020-3-20", confirmed: 19100, deaths: 244, recovered: 0 },
        { date: "2020-3-21", confirmed: 25489, deaths: 307, recovered: 0 },
        { date: "2020-3-22", confirmed: 33272, deaths: 417, recovered: 0 }]

    //create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 50;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
      return text;
    });

    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "confirmed";
    series.dataFields.dateX = "date";
    series.tooltipText = "{dateX}";
    series.strokeWidth = 2;

    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.stroke = am4core.color("#fff");
    bullet.circle.strokeWidth = 2;

    // Finish up setting chart up
    chart.cursor = new am4charts.XYCursor();
    this.chart = chart;

  }

  render() {
    return (
      <div>
        <PanelTitle>Stats</PanelTitle>
        <Panel>
          <PanelText>
            Number of Reported Cases in US since February
      </PanelText>
          <div id="chart"></div>
        </Panel>
      </div>
    );
  }
}

export default Visualizations;