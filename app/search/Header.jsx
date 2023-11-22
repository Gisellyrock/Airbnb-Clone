'use client';

export default function Header() {
  return (
    <header className="container flex justify-between h-10">
      <div className="text-red-500">airbnb</div>
      <div className="search-container rounded-lg">
        <div className="input">
          <p>Anywhere</p>
        </div>
        <div className="input">
          <p>Any Date</p>
        </div>
        <div className="input">
          <p>Any Guests</p>
        </div>
      </div>
      <div>user</div>
    </header>
  );
}
