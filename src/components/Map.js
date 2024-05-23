import { useEffect,useState } from "react";
import Map, { NavigationControl , Marker} from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

function ContactMap() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 77.2090, // Longitude for Delhi, India
          latitude: 28.6139,  // Latitude for Delhi, India
          zoom: 11,            // Zoom level
        }}
        style={{ width: "100%",
        height: isMobile ? "calc(50vh)" : "calc(110vh)",
        borderRadius: "24px", // Adding border radius to the map container
        border: "2px solid black", // Adding border to the map container
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
         }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=MpuwlHBgS2vYorjOXbNc"
      >
        <NavigationControl position="top-left" />
        <Marker longitude={77.2090}
        latitude={28.6139}
        color={'black'}
        />
      </Map>
    </div>
  );
}

export default ContactMap;
