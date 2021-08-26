import React from "react";

export class From extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      butItem: "",
      price: 0,
    };
  }

  conponentDidMount() {
    console, log("Mount");
  }

  conponentDidUnMount() {
    console, log("UnMount");
  }

  render() {
    return (
      <form action="">
        <div className="itemInput">
          <label htmlFor="item">item</label>
            <input type="item" id="item" value={this.state.buyItem}={(event)=> this.setState({buyItem:event.target.value})}
            />
        </div>
        <div className="priceInput">
            <label htmlFor="price" >price </label>
            <input 
            type="item" 
            id="item" 
            value={this.state.}
            />
        </div>
      </form>
    );
  }
}
