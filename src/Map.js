import React from 'react';
import { loadModules } from 'esri-loader';

export class WebMapView extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer', 'esri/widgets/Legend', 'esri/widgets/Expand'], { css: true })
      .then(([Map, MapView, FeatureLayer, Legend, Expand]) => {
        const map = new Map({
          basemap: 'dark-gray'
        })

        this.view = new MapView({
          container: this.mapRef.current,
          map: map,
          // center: [-118, 32],
          zoom: 2,
          popup: {
            dockEnabled: true,
            dockOptions: {
              position: "bottom",
              breakpoint: false
            }
          }
        });

        var template = {
          // autocasts as new PopupTemplate()
          title: "Cases",
          content: [
            {
              type: "fields",
              fieldInfos: [
                {
                  fieldName: "Province_State",
                  label: "Province/State"
                },
                {
                  fieldName: "Country_Region",
                  label: "Country/Region	",
                },
                {
                  //date type config
                  fieldName: "Last_Update",
                  label: "Last Update",
                  format: {
                    digitSeparator: true,
                    places: 0
                  }
                },
                {
                  //esriFieldTypeDouble
                  fieldName: "Lat",
                  label: "Lat",
                  format: {
                    digitSeparator: false,
                    places: 2
                  }
                },
                {
                  //esriFieldTypeDouble
                  fieldName: "Long_",
                  label: "Long",
                  format: {
                    digitSeparator: false,
                    places: 2
                  }
                },
                {
                  //esriFieldTypeDouble
                  fieldName: "Confirmed",
                  label: "Confirmed",
                  format: {
                    digitSeparator: true,
                    places: 0
                  }
                },
                {
                  //esriFieldTypeDouble
                  fieldName: "Deaths",
                  label: "Deaths",
                  format: {
                    digitSeparator: true,
                    places: 0
                  }
                },
                {
                  //esriFieldTypeDouble
                  fieldName: "Recovered",
                  label: "Recovered",
                  format: {
                    digitSeparator: true,
                    places: 0
                  }
                }
              ]
            }
          ]
        };

        // Reference the popupTemplate instance in the
        // popupTemplate property of FeatureLayer
        var featureLayer = new FeatureLayer({
          url:
            "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/ArcGIS/rest/services/ncov_cases/FeatureServer/1",
          outFields: ["Province_State", "Country_Region", "Last_Update", "Confirmed", "Deaths", "Recovered"],
          popupTemplate: template
        });
        map.add(featureLayer);

        const legend = new Expand({
          content: new Legend({
            view: this.view,
            // style: "card" // other styles include 'classic'
            style: "classic"
          }),
          view: this.view,
          expanded: true
        });

        this.view.ui.add(legend, "top-right");

      });
  }

  componentWillUnmount() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  }

  render() {
    return (
      <div className="webmap" ref={this.mapRef} />
    );
  }

}

export default WebMapView