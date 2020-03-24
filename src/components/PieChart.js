// React imports
import React, { Component } from 'react';
import Panel, {
    PanelText
} from 'calcite-react/Panel';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


class PieChart extends Component {
    componentDidMount() {
        let chart = am4core.create("chart2", am4charts.PieChart);
        chart.data =
            [{
                "category": "Cases",
                "number": 43112
            },{
                "category": "Deaths",
                "number": 557
            },  {
                "category": "Recoveries",
                "number": 178
            }];

        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "number";
        pieSeries.dataFields.category = "category";
        pieSeries.slices.template.tooltipPosition = "pointer";

        this.chart = chart;

    }

    render() {
        return (
            <div id="chart2" ></div>
        );
    }
}

export default PieChart;