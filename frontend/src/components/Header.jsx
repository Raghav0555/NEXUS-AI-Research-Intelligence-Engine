function Header({ title }) {
  return (
    <header className="header">
      <div>
        <div className="breadcrumb">
          NEXUS / {title.toUpperCase()}
        </div>

        <h1>{title}</h1>
      </div>

      <div className="header-right">
        <div className="engine-status">
          <span></span>
          Engine Online
        </div>

        <div className="avatar">RS</div>
      </div>
    </header>
  );
}

export default Header;