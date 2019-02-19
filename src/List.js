import React, { Component } from 'react';

class List extends React.Component {
  render() {
    const letters = this.props.value;
    const listItems = letters.map((letter) => {
        return (
            <li key={letter}>
                {letter}
            </li>
        );
      });
    return (
        <ul>{listItems}</ul>
        //<p>{letters}</p>
    );
  }
}

export default List;
