import { Outlet, Link } from "react-router";

export default function About() {
  return (
    <>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatem,
        doloremque excepturi corrupti voluptates tempore rem at asperiores qui!
        Laborum, odio non. Temporibus repellendus aliquam reprehenderit. Placeat
        soluta quidem culpa.
      </p>
      <Outlet />
      <Link to={"/about/company-info"}>Company Info</Link>
    </>
  );
}
