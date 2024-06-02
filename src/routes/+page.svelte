<script>
  import { onMount } from "svelte";
  // import firebase from "firebase/compat/app";
  import "firebase/compat/analytics";
  // import "firebase/compat/firestore";
  import mapboxgl from "mapbox-gl";
  import "mapbox-gl/dist/mapbox-gl.css";
  import { firestore } from "../lib/config";

  // let analytics;
  let db;

  const initializeMap = async () => {
    try {
      db = firestore;
      // TO MAKE THE MAP APPEAR YOU MUST ADD YOUR ACCESS TOKEN FROM https://account.mapbox.com
      mapboxgl.accessToken =;
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        center: [-118, 34], // starting position [lng, lat]
        zoom: 11, // starting zoom
      });

      const querySnapshot = await db.collection("locations").get();
      // Retrieve drivers from database, and make a map marker for each driver's location
      querySnapshot.forEach((doc) => {
        let data = doc.data(); // driver object
        console.log(doc.id, " => ", doc.data());
        new mapboxgl.Marker({
          color: "#FF00FF",
          draggable: false,
        })
          .setLngLat([data.location.longitude, data.location.latitude]) // Use the drivers coordinates
          .addTo(map);
      });
    } catch (error) {
      console.error("Error initializing map or fetching data:", error);
    }
  };

  onMount(() => {
    // analytics = firebase.analytics();
    initializeMap();
  });
</script>

<!-- Add the HTML elements for FirebaseUI and Mapbox -->
<div id="firebaseui-auth-container"></div>
<div id="map" style="width: 100%; height: 400px;"></div>

<main>
  <h1>We Deliver</h1>
  <div id="map"></div>
</main>

<style>
  #map {
    height: 500px; /* Adjust the height as needed */
    width: 800px; /* Adjust the width as needed */
  }
</style>
