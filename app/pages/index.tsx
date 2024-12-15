import Header from '../components/Header';
import PricingCard from '../components/PricingCard';

const Home: React.FC = () => {
  return (
    <div className="bg-veryPaleBlue min-h-screen flex flex-col items-center">
      <Header />
      <main className="mt-10">
        <PricingCard />
      </main>
    </div>
  );
};

export default Home;
