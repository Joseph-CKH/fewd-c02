import React from "react";

class item extends PureComponent {
  render() {
    return (
      <div className={style.item}>
        <h3>{this.props.name}</h3>
        <h3>{this.price.name}</h3>
        <h3>{this.type.name}</h3>
      </div>
    );
  }
}
