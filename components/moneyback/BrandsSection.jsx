import useMediaQuery from '@/hoc/useMediaQuery';
import BrandCardLg from './BrandCardLg';
import BrandCardSm from './BrandCardSm';

const BrandsSection = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <div className="col-md-8">
      <div className="row mx-0">
        <div className="col-md-4 col-6 mx-0">
          <div className="col-12">
            <BrandCardSm />
            <BrandCardSm />
            <BrandCardSm />
          </div>
        </div>
        {!isMobile ? ( // TOUSE append here
          <div className="col-md-4 col-6 mx-0">
            <div className="col-12">
              <BrandCardLg />
              <BrandCardLg />
            </div>
          </div>
        ) : null}

        <div className="col-md-4 col-6 mx-0">
          <div className="col-12">
            <BrandCardSm />
            <BrandCardSm />
            <BrandCardSm />
          </div>
        </div>
      </div>
      <div className="row mx-2 mx-0">
        <div className="col-12">
          <h2 className="text-primary">Terms & Conditions</h2>
          <ul>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
