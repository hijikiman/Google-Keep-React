import React, { Component } from 'react';

import NoteList from '../NoteList/';
import TakeNote from '../TakeNote/';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.handleEditClose = this.handleEditClose.bind(this);
  }
  //TODO DELETE THIS
  handleEditClose() {
    return 0;
  }

  render() {
    return (
      <div className="appLayout">
        <header className="app__header" />
        <div className="left__column" />
        <div className="content">
          <NoteList />
          <br />
          <TakeNote />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Layout;