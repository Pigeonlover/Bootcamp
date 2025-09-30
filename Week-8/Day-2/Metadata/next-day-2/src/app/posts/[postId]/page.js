//
// Dynamic metadata for each post

export async function generateMetadata({ params }) {
  const postId = await params.postId;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json();

  return {
    title: `Blog post - ${postId}`,
    description: `${data.title}`,
  };
}

export default async function PostIdPage({ params }) {
  const postId = await params.postId;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json();

  return (
    <>
      <h1>Post dynamic page</h1>

      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </>
  );
}
