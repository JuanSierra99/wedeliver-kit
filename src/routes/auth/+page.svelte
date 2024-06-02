<script>
  import firebase from "firebase/compat/app";
  import { onMount } from "svelte";
  import { auth } from "../../lib/config";
  // import "firebase/compat/auth";
  import "firebaseui/dist/firebaseui.css"; // css file for firbaseui

  onMount(async () => {
    if (typeof window !== "undefined") {
      try {
        const firebaseui = await import("firebaseui");

        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui.auth.AuthUI(auth);

        // The start method will wait until the DOM is loaded.
        ui.start("#firebaseui-auth-container", {
          signInSuccessUrl: "/",
          signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          ],
          // Other config options...
        });

        // Listen for authentication state changes
        const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
          user = user ? user : null;
        });
      } catch (error) {
        console.error("Failed to initialize FirebaseUI:", error);
      }
    }
  });
</script>

<h1 class="wedeliver-header">We Deliver</h1>
<div id="firebaseui-auth-container"></div>

<style>
  .wedeliver-header {
    text-align: center;
  }
</style>
