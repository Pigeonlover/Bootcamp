//
// route --> "/staff/:staffName"
// We use [] in folder name to create a dynamic route
// In React we used the hook useParams() to get the value of the dynamic params
// By default, Next cannot use hooks however because hooks are client side, but Next is server side by default
// Thankfully, we can use param props to access those values

export default async function StaffNamePage({ params }) {
  // params is asynchronous, so we need to use async and await
  // In our server components, we can make our component functions asynchronous
  const staffNameParams = await params.staffName;
  return (
    <>
      <h1>Staff Name: {staffNameParams}</h1>
    </>
  );
}

// params: {
//   staffName: "value";
// }
// staffName because it is the name of the current folder.
