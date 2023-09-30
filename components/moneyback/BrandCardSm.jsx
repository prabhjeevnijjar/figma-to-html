const BrandCardSm = () => {
  return (
    <div className="row small-card mx-0 px-0">
      <div className="row mx-0 px-0">
        <div className="fs-10 fst-italic text-primary text-end px-0 px-2 py-2">T&C</div>
      </div>
      <div className="row mx-0 px-0 text-center d-flex justify-content-center align-item-center">
        <div className="col-12">
          <img src="/brand-bookmyshow-logo.png" className="w-100" />
        </div>
      </div>
      <div className="row mx-0 px-0">
        <div className="col-6">
          <div className="col">
            <div className="row mx-0 px-0">
              <p className="fs-18 p-0 m-0 fw-bold">$500</p>
              <p className="fs-12 text-primary p-0">Online</p>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <div>
            <img src="/how-to-use.png"></img>
          </div>
        </div>
      </div>
      <div className="row small-card--cta mx-0 px-0 d-flex justify-content-center align-item-center pt-2">Redeem Now</div>
    </div>
  );
};

export default BrandCardSm;
