//TODO: Retrieve data from an API and render it on the page.
//- To retrieve the data --> fetch / useEffect.
//- To render the data on the page --> state / image element.

//TODO: set up a system for the page to get refreshed at intervals --> setInterval
// Timers are also effects!

// ================================================================================

import { useState, useEffect } from "react";

export default function FoxImage() {
  // Data storage
  const [foxImage, setFoxImage] = useState(null); // Image appeared broken earlier because the initial value was "" .

  useEffect(() => {
    // Retrieve
    async function getFoxData() {
      // We can use try and catch in the client, especially when we are using an external API / server.
      try {
        const response = await fetch("https://randomfox.ca/floof/");
        const data = await response.json();
        const wrangledData = data.image; // 'Image' is the name of the property in the API.
        setFoxImage(wrangledData);
      } catch (error) {
        console.error("API failed to fetch", error);
      }
    }
    getFoxData(); // In the dev environment, this triggers twice; in production, it doesn't trigger twice.

    // Set an interval that fetches the data every x amount of seconds (in this case, every 3s).
    const foxesInterval = setInterval(getFoxData, 3000);

    // To avoid intervals stacking every 3 seconds due to the component update lifecycle, we need to clear it, so when the component updates, a fresh new interval is created.
    return () => clearInterval(foxesInterval);
  }, []);

  return (
    <>
      <h1>Fox Image</h1>
      <img src={foxImage} alt="A random image of a fox!" />
    </>
  );
}
