//

// metadata for my page

export const metadata = {
    title: "Blog - Posts Page",
    description: "All the posts available."
}

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return (
    <>
      <h1>Posts page</h1>

      {data.map(post) => {
        <h1></h1>

      }}
    </>
  );
}
