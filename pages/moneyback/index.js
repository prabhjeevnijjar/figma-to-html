import { Fragment } from 'react';
import Footer from '@/components/moneyback/Footer';
import Header from '@/components/moneyback/Header';
import BrandsSection from '@/components/moneyback/BrandsSection';
import CardDetailSection from '@/components/moneyback/CardDetailSection';

const Homepage = () => {
  return (
    <Fragment>
      <main className="">
        <Header />
        <section className="main-body mt-md-4">
          <div className="d-md-none card-features--desc-sm">
            <img className="w-100" src="/mobile-screen.png" />
          </div>
          <div className="row mx-md-4">
            <CardDetailSection />
            <BrandsSection />{' '}
          </div>
        </section>
        <Footer />
      </main>
    </Fragment>
  );
};

export default Homepage;
