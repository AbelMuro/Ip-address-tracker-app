import React, {useState, useEffect, useContext, useRef} from 'react';
import './styles.css';
import { Context } from '../../Context';
import icon from './icons'

var blackIcon = L.icon({
    iconUrl: icon['blackIcon'],
    iconSize:     [46, 56], // size of the icon
    iconAnchor:   [22, 64], // point of the icon which will correspond to marker's location
});

function Map() {
    const {latLong} = useContext(Context);
    const [map, setMap] = useState();
    const currentMarker = useRef(null);
    
    useEffect(() => {
        setMap(L.map('map', {                                               //must be an ID of an element
            center: [latLong[0], latLong[1]],
            zoom: 13
        }));
    },[])

    useEffect(() => {
        if(!map) return;

        L.tileLayer(                                                          //adding a tile layer to the map to give it a specific look
            'https://tile.openstreetmap.org/{z}/{x}/{y}.png', 
          {maxZoom: 13}
        ).addTo(map);

        map.trackResize = true;                                              //track size will update the map everytime the viewport is resized

        return () => {                                                        //clean up
            map.off();
            map.remove();
        }
    }, [map])

    useEffect(() => {
        if(!map) return;

        map.panTo(latLong);
        if(currentMarker.current)
            map.removeLayer(currentMarker.current);
        const marker = L.marker([latLong[0], latLong[1]], {icon: blackIcon}).addTo(map); 
        currentMarker.current = marker;

    }, [latLong])


    return (
        <div id='map'>

        </div>
    )
}

export default Map;