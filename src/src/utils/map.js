import { loadModules } from "esri-loader";

export function loadMap(element, mapOptions) {
  return loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer', 'esri/widgets/Legend', 'esri/widgets/Expand'], {
    css: true
  }).then(([Map, MapView, FeatureLayer, Legend, Expand]) => {
    if (!element) {
      // component or app was likely destroyed
      return;
    }
    const map = new Map({
      basemap: 'dark-gray'
    })

    // create map view
    const view = new MapView({
      container: element,
      map: map,
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
        "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/ArcGIS/rest/services/ncov_cases/FeatureServer",
      layerId: 1,
      title: "Confirmed COVID-19 Cases",
      opacity: 0.5,
      outFields: ["Province_State", "Country_Region", "Last_Update", "Confirmed", "Recovered"],
      popupTemplate: template,
    });

    map.add(featureLayer);

    // Add new point feature layer
    var featureLayerPoint = new FeatureLayer({
      url:
        "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer",
      layerId: 0,
      title: "Deaths",
      popupTemplate: null,
    });

    // render firefly symbol for point layer
    var symbol = {
      type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
      url: 'data:image/png;base64,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', width: '20px',
      height: '20px'
    };
    featureLayerPoint.renderer = {
      type: "simple",
      symbol
    }
    map.add(featureLayerPoint);

    // create legend
    const legend = new Expand({
      content: new Legend({
        view: view,
        container: "legendDiv",
        style: "classic"
      }),
      view: view,
      expanded: false
    });

    view.ui.add(legend, "top-left");


    // wait for the view to load TODO: may not need this?
    return view.when(() => {
      // return a reference to the view
      return view;
    });
  });
}