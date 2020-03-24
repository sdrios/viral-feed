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


class PieChart extends Component {
    componentDidMount() {
        let chart = am4core.create("chart2", am4charts.PieChart);
        chart.data =
            [{
  "country": "Lithuania",
  "litres": 501.9
}, {
  "country": "Czechia",
  "litres": 301.9
}, {
  "country": "Ireland",
  "litres": 201.1
}];

        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
        pieSeries.slices.template.tooltipPosition = "pointer";

        this.chart = chart;

    }

    render() {
        return (
            <div>
                <Panel>
                    <PanelText>
                    Pie Chart 
                    </PanelText>
                    <div id="chart2"></div>
                </Panel>
            </div>
        );
    }
}

export default PieChart;