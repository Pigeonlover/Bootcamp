import "./App.css";
import MyImageComponent from "./GalleryImage";
import Button from "./components/Button";
import Image from "./components/Image";

export default function App() {
  return (
    <>
      <div>
        <h1 className="heading">Hello, world!</h1>
      </div>

      ImageTrackList.forEach({item} => {
        return (
          <Image imgUrl={item.imgUrl} title={item.title} author={item.author} />
        )
      })

      <MyImageComponent />

      <Button />
    </>
  );
}

// We cannot use a classic for loop inside the App return. I can only use methods.


async function getData() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}`);
  const data = await response.json();
  console.log(data);
}
getData();
