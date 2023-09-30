const CardDetailSection = () => {
  return (
    <div className="col-md-4 card-features d-md-block d-none">
      <div className="col card-features px-4 ">
        <div className="row justify-content-center">
          <img className="mt-3 w-100" src="/moneyback-card.png" />
        </div>
        <div className="row justify-content-center card-features--desc">
          <h3 className="fs-28">The most rewarding card for everyday spends</h3>
          <ul className="fs-14">
            <li className="my-3">10X CashPoints on Amazon, Big Basket, Flipkart, Reliance Smart Super Store & Swiggy</li>
            <li className="my-3">5X CashPoints on EMI spends at merchant locations</li>
            <li className="my-3">2 CashPoints per Rs.150 spent on other spends (Excluding fuel, wallets loads/prepaid card loads & voucher purchases)</li>
            <li className="my-3">₹500 worth Gift Voucher on spends of ₹50,000 and above per calendar quarter</li>
          </ul>
        </div>
        <div className="row justify-content-center">
          <div>
            <img className="text-center card-features--girl" src="/moneyback-girl.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailSection;
