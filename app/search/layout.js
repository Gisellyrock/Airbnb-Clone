import Header from './header';

export default function SearchLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
