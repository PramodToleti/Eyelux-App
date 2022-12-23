import "./index.css";

const HeaderItem = (props) => {
  const { linkDetails, CollapseNavDetails, updateActiveNav, isActive } = props;
  const { id, displayText } = linkDetails;

  const onClickNavItem = () => {
    CollapseNavDetails();
    updateActiveNav(id);
  };

  const activeStyles = isActive ? "active-nav-btn" : "";

  return (
    <button
      className={`nav-link-button ${activeStyles}`}
      onClick={onClickNavItem}
    >
      <li className="nav-item">{displayText}</li>
    </button>
  );
};

export default HeaderItem;
