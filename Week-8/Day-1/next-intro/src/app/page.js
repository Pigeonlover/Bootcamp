//
// This page is always "/"

// @ symbol corralates to "./src/"
// You can see it in loadJsConfig.json, where you can create your own symbol-paths

import loadJsConfig from "next/dist/build/load-jsconfig";

export default function Home() {
  return (
    <>
      <h1>Welcome to Next.js!</h1>
    </>
  );
}
