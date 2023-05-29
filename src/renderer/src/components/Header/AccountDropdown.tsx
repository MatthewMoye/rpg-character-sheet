import { useState } from "react";
import classes from "./AccountDropdown.module.css";

const AccountDropdown = () => {
  const [accountDropdown, setaccountDropdown] = useState(false);

  const accountDropdownOpenHandler = () => {
    setaccountDropdown(!accountDropdown);
  };

  return (
    <div className={classes.box}>
      <div
        className={classes.menuContainer}
        onMouseEnter={accountDropdownOpenHandler}
        onMouseLeave={accountDropdownOpenHandler}
      >
        <div className={accountDropdown ? classes.menuOpen : classes.menu}>
          Account<span className={classes.arrow}>➤</span>
        </div>
        {accountDropdown && (
          <nav className={classes.nav}>
            <ul>
              <li>option-1</li>
              <li>option-2</li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default AccountDropdown;
