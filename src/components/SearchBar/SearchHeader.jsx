export default function SearchHeader({ lastSearch }) {
  return (
    <>
      <h1>Drinks Searcher</h1>
      <p className="muted">
        Showing results for <strong>{lastSearch}</strong>
      </p>
    </>
  );
}