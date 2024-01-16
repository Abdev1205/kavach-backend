import axios from "axios";
import User from "../../models/user";

const apiKey = "5b3ce3597851110001cf6248a34307a61e804677be7e7d2733901f43";

const renderMap = async (req, res) => {
    const {userLat, userLng} = req.body;
    
}

const calcDistance = async (startCoords, endCoords) => {
  try {
    const apiUrl = `https://api.openrouteservice.org/v2/directions/foot-walking?api_key=${apiKey}&start=${startCoords}&end=${endCoords}`;

    const response = await axios.get(apiUrl, {
      headers: {
        Accept:
          "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error calculating distance:", error);
    throw error;
  }
};
