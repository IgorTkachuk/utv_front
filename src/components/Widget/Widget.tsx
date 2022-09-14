import { Component } from "react";
import Icon from "./icon.png";
import classes from "./Widget.module.scss";

class Widget extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <div className={classes.widget}>WIDGET</div>
        <img src={Icon} alt='icon' width={40} className='widget' />
      </>
    );
  }
}

export default Widget;
