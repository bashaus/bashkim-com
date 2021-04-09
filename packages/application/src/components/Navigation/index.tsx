import classNames from "classnames";
import { useContext } from "react";

import NavigationPrimary from "%components/NavigationPrimary";
import NavigationSocial from "%components/NavigationSocial";
import { NavigationContext } from "%contexts/Navigation/context";

import styles from "./styles.module.scss";

type NavigationProps = {
  theme: string;
};

const Navigation = ({ theme }: NavigationProps): JSX.Element => {
  const { state: navigationState } = useContext(NavigationContext);

  return (
    <div
      className={classNames({
        [styles.Navigation]: true,
        [styles.scrollAtTop]: navigationState.scrollAtTop,
      })}
    >
      <NavigationPrimary theme={theme} />
      <NavigationSocial />
    </div>
  );
};

export default Navigation;
