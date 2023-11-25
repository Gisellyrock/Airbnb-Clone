export default async function Page() {
  const res = await fetch('http://localhost:3000/api/search');
  const data = await res.json();

  return (
    <>
      {data.map((listing) => (
        <p key={listing.id}>{listing.id}</p>
      ))}
    </>
  );
}
