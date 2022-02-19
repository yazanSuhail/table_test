export function Filter({ filterValue, setFilterValue }) {
  return (
    <>
      Filter:{" "}
      <input
        name="Filter"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
    </>
  );
}
