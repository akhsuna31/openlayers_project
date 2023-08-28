window.onload = init;

function init(){
    const map= new ol.Map({
        view : new ol.View({
            center: [8762551.458706215, 2427160.5478852633],
            zoom: 4,
            rotation: -0.2
        }),
        // layers: [
        //     new ol.layer.Tile({
        //         source: new ol.source.OSM()
        //     })
        // ],
        target: 'js-map'
    })

    map.on('click',function(e) {
        console.log(e.coordinate);
    })
    
    // Basemaps
    const openStreetMapStandard = new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible: false,
        title: 'OSMStandard'
    })
    const openStreetMapHumanitarian = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        }),
        visible: true,
        title: 'OSMHumanitarian'
    })
    const cyclosm= new ol.layer.Tile({
        source: new ol.source.OSM({
            url: 'https://{a-c}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png'
        }),
        visible: false,
        title: 'OSMCycle'
    })
    // const OpenSeaMap= new ol.layer.Tile({
    //     source: new ol.source.OSM({
    //         url: 'https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png',
    //         attribution: 'Map data: &copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors'
    //     }),
    //     visible: true,
    //     title: 'OSMSea'
    // })
    //layer group
    const baseLayerGroup = new ol.layer.Group({
        layers: [
            openStreetMapStandard, openStreetMapHumanitarian, cyclosm
        ]
    })

    map.addLayer(baseLayerGroup);
}