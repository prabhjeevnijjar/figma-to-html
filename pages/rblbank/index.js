const RblPage = () => {
  return (
    <div className="rbl-root">
      <div className="rbl-left">
        <div className="rbl-left-logo-container">
          <div className="rbl-logo rbl-logo-sm">
            <img src="/rblbank/rbl-logo.png"></img>
          </div>
        </div>
        <div className="rbl-left-form mt-5">
          <label className="input-label" htmlFor="">
            Enter Mobile Number
          </label>
          <input className="input-field mt-2" type="text"></input>
          <button className="red-button mt-5">Proceed</button>
        </div>
      </div>
      <div className="rbl-right d-md-flex d-none">
        <div className="rbl-logo mr-3 mt-5">
          <img src="/rblbank/rbl-logo.png"></img>
        </div>
      </div>
    </div>
  );
};

export default RblPage;
