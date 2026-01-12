import reactSvg from "./assets/react.svg";

function Header() {
  return (
    <header className="header">
      <img src={reactSvg} alt="Logo" className="img" />
      <h1 className="h1">ReactFacts</h1>
    </header>
  );
}
export default Header;
