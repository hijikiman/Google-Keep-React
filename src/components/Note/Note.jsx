import React, { Component } from 'react';
import PropTypes from 'prop-types';

import select from './select.svg';
import strings from './strings';
import pin from './pin.svg';
import './Note.css';

const defaultProps = {
  title: '',
  note: '',
};

const propTypes = {
  title: PropTypes.string,
  note: PropTypes.string,
};

class Note extends Component {
  constructor() {
    super();
    this.state = {
      pinned: false,
      selected: false,
    };
    this.pinNote = this.pinNote.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.handlePinKeyDown = this.handlePinKeyDown.bind(this);
  }

  handlePinKeyDown(event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      // Prevent the default action to stop scrolling when space is pressed
      event.preventDefault();
      this.setState(prevState => ({
        pinned: !prevState.pinned,
      }));
    }
  }

  pinNote(event) {
    if (event.button === 0 && (event.target.tagName === 'path' || event.target.tagName === 'svg')) {
      this.setState(prevState => ({
        pinned: !prevState.pinned,
      }));
    } else {
      event.preventDefault();
    }
  }

  handleSelectKeyDown(event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      // Prevent the default action to stop scrolling when space is pressed
      event.preventDefault();
      this.setState(prevState => ({
        selected: !prevState.selected,
      }));
    }
  }

  selectNote(event) {
    if (event.button === 0 && (event.target.tagName === 'path' || event.target.tagName === 'svg')) {
      this.setState(prevState => ({
        selected: !prevState.selected,
      }));
    } else {
      event.preventDefault();
    }
  }

  render() {
    const pinClass = `note-card__pin ${this.state.pinned ? 'note-card__pin--pinned' : ''}`;
    const titleClass = `note-card__title ${this.props.title.length === 0 ? 'invisible' : ''}`;
    return (
      <div className="note-card">
        <div
          role="button"
          tabIndex="0"
          onKeyDown={this.handleSelectKeyDown}
          onMouseDown={this.selectNote}
          aria-label={strings.selectAria}
          aria-pressed={this.state.selected}
          className="note-card__select"
          dangerouslySetInnerHTML={{ __html: select }}
        />
        <div className="note-card__container">
          <div className={titleClass}>{this.props.title}</div>
          <div
            role="button"
            className={pinClass}
            onMouseDown={this.pinNote}
            onKeyDown={this.handlePinKeyDown}
            dangerouslySetInnerHTML={{ __html: pin }}
            aria-label={strings.pinAria}
            aria-pressed={this.state.pinned}
            tabIndex="0"
          />
          <div role="textbox" className="note-card__textbox">
            {this.props.note}
          </div>
          <div role="toolbar" className="note-card__toolbar">
            <div role="button" className="note-card__toolbar__remind" />
            <div role="button" className="note-card__toolbar__collaborator" />
            <div role="button" className="note-card__toolbar__color" />
            <div role="button" className="note-card__toolbar__image" />
            <div role="button" className="note-card__toolbar__archive" />
            <div role="button" className="note-card__toolbar__more" />
          </div>
        </div>
      </div>
    );
  }
}

Note.propTypes = propTypes;
Note.defaultProps = defaultProps;

export default Note;
