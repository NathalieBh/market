import classes from "./MainNavigation.module.css";
import Link from "next/link";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Market</div>
      <nav>
        <ul>
          <li>
            <Link
              href="/products/homepage/cart/cart
            "
            >
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
