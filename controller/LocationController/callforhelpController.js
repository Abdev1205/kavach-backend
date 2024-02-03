import axios from "axios";

const apiKey = "5b3ce3597851110001cf6248a34307a61e804677be7e7d2733901f43";

const findMinimum = async (userLat, userLng) => {
  const policeStations = [
    [75.7618162, 26.9119757],
    [75.7618162, 26.9119757],
    [75.7618162, 26.9119757],
    [75.7984233, 26.8573225],
    [userLng, userLat],
  ];

  try {
    const response = await axios.post(
      "https://api.openrouteservice.org/v2/matrix/driving-car",
      {
        locations: policeStations,
        destinations: [4] // Assuming you want to get the matrix for the last location (index 4) as the destination
      },
      {
        headers: {
          Accept: 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
          Authorization: apiKey,
          'Content-Type': 'application/json; charset=utf-8',
        },
      }
    );

    // Handle the response as needed
    console.log(response.data);
  } catch (error) {
    console.error("Error calculating minimum duration:", error);
    throw error;
  }
};


// Rest of the code remains the same

export const renderMap = async (req, res) => {
  console.log("called");
  try {
    const { userLat, userLng } = req.body;

    const policeLoc = { lng: 75.8030103 , lat: 26.8670134};
    const distance = await calcDistance(policeLoc, userLng, userLat);
    res.json({ distance, policeLoc });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const calcDistance = async (policeLoc, userLng, userLat) => {
  try {
    const apiUrl = `https://api.openrouteservice.org/v2/directions/foot-walking?api_key=${apiKey}&start=${policeLoc.lng},${policeLoc.lat}&end=${userLng},${userLat}`;

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
