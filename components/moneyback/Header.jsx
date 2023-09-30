const Header = () => {
  return (
    <header className="row align-items-center header">
      <div className="col-6">
        <img className="header-bank-logo" src="/bank-logo.png" />
      </div>
      <div className="col-6 d-flex justify-content-end">
        <img className="header-hamburger-logo" src="/side-drawer-logo.png" />
      </div>
    </header>
  );
};

export default Header;
