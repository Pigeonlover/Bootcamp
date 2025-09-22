//
import { useParams, useSearchParams } from "react-router";
import { pigeons } from "../lib/pigeons";
import SortPigeonOrder from "./SortPigeonOrder";

export default function PigeonCollection() {
  const { username } = useParams();

  const [queryString] = useSearchParams();

  const sort = queryString.get("sort");

  if (sort === "asc") {
    pigeons.sort();
  } else if (sort === "desc") {
    pigeons.sort().reverse();
  } else if (sort === "low") {
    //
  }
  return (
    <>
      <h3>{username}'s pigeon collection.</h3>

      <SortPigeonOrder />
      {pigeons.map((pigeon) => {
        return <h4>{pigeon}</h4>;
      })}
    </>
  );
}
