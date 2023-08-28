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
        document.getElementById("statusbar").innerHTML = `<a href='#'>X and Y COORDINATES : ${e.coordinate}`      
    })
    
    // Basemaps
    const openStreetMapStandard = new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible: true,
        title: 'OSMStandard'
    })
    const openStreetMapHumanitarian = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        }),
        visible: false,
        title: 'OSMHumanitarian'
    })
    const cyclosm= new ol.layer.Tile({
        source: new ol.source.OSM({
            url: 'https://{a-c}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png'
        }),
        visible: false,
        title: 'OSMCycle'
    })

    //layer group
    const baseLayerGroup = new ol.layer.Group({
        layers: [
            openStreetMapStandard, openStreetMapHumanitarian, cyclosm
        ]
    })

    map.addLayer(baseLayerGroup);

    // Layer Switcher Logic for Baselayers
    const baseLayersElements= document.querySelectorAll('.grid-container > input[type=radio]');
    // console.log(baseLayersElements);
    for(let baseLayersElement of baseLayersElements){
        baseLayersElement.addEventListener('change',function(){
            let baseLayerElementValue= this.value;
            baseLayerGroup.getLayers().forEach(function(element,index,array){
               // console.log(element.get('title'));
               let baseLayerTitle= element.get('title');
               element.setVisible(baseLayerTitle===baseLayerElementValue);
            })
        })
    }
    




    
}