import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Market</div>
      <nav>
        <ul>
          <li>
            <Link to="/">ALL Product</Link>
          </li>
          <li>
            <Link to="/">Add Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
