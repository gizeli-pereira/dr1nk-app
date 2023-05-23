import SearchItem from "./SearchItem";

export default function SearchResults({ data }) {
  if (!data.length) {
    return <h2>No Drinks Found</h2>;
  }

  return (
    <div className="gallery">
      {data.map((drink) => (
        <SearchItem drink={drink} key={drink.id} />
      ))}
    </div>
  );
}