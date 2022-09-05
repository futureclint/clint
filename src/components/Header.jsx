import logo from '../images/clint-gunter.svg';

function Header() {
  return (
    <header>
      <div className="logo">
        <div className="logo-lines">
          <div className="logo-lines-shape-wrapper">
            <div className="logo-line-shape" id="line-1"></div>
            <div className="logo-line-shape" id="line-2"></div>
            <div className="logo-line-shape" id="line-3"></div>
            <div className="logo-line-shape" id="line-4"></div>
            <div className="logo-line-shape" id="line-5"></div>
            <div className="logo-line-shape" id="line-6"></div>
            <div className="logo-line-shape" id="line-7"></div>
          </div>
        </div>
        <img className="logo-text" src={logo} alt="Clint Gunter" draggable="false" />
      </div>
    </header>
  );
}

export default Header;
