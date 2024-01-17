import axios from "axios";

const apiKey = "5b3ce3597851110001cf6248a34307a61e804677be7e7d2733901f43";
const startCoords = "77.2269348, 28.612912";

export const renderMap =  async (req, res) => {
  console.log("called")
  try{
    const {userLat, userLng} = req.body;
    const distance = await calcDistance(startCoords, userLng, userLat);
    const policeLoc = {lng: 77.2269348, lat: 28.612912};
    res.json({ distance, policeLoc });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
} 

const calcDistance = async (startCoords, userLng, userLat) => {
  try {
    const apiUrl = `https://api.openrouteservice.org/v2/directions/foot-walking?api_key=${apiKey}&start=${startCoords}&end=${userLng},${userLat}`;

    const response = await axios.get(apiUrl, {
      headers: {
        Accept:
          "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error calculating distance:", error);
    throw error;
  }
};
