import InfoCard from '../components/InfoCard';

export const ResultsList = ({ data }) => {
  return (
    <div>
      {data.map((listing) => (
        <InfoCard listing={listing} key={listing.id} />
      ))}
    </div>
  );
};
