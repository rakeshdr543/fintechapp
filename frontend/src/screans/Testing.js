import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { useHistory } from "react-router";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const Testing = ({ google, setLocation }) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }
  }, []);
  const handleClick = () => {
    setLocation("Tumkur");
    history.push("/subjective/second");
  };
  return (
    <div>
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: latitude || 12.9794048,
          lng: longitude || 77.59790079999999,
        }}
      >
        <Marker name={"This is test name"} onClick={handleClick} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBszC49yrgqSwi52Ca7jIxUdaSM1Kr_gNo",
})(Testing);
