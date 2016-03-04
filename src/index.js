import React, { Component } from 'react';

class Summary extends Component {
  static block = "react-summary";
  static defaultProps = {
    items: [],
    max: 3,
    text: {
      more: 'more',
      and: 'and',
      none: 'None'
    },
    onShowOthers() {},
    preventSingleRemain: false
  };

  handleShowOthers(event) {
    event.preventDefault();

    this.props.onShowOthers();
  }

  renderItems() {
    let {items, text, max,
         preventSingleRemain} = this.props;
    switch (items.length) {
      case 0:
        return text.none;

      case 1:
        return items[0];

      case 2:
      case max:
      case preventSingleRemain && max + 1:

        return (
          <div>
            {items.map((item, i) => (
              i < items.length - 1 ? (
                <span key={i}>
                  {i > 0 ? ', ' : null}
                  {item}
                </span>
              ) : null
            ))} and {items[items.length - 1]}
          </div>
        );

      default: 
        return (
          <div>
            {items.map((item, i) => (
              <span key={i}>
                 {i > 0 && i < max ? ', ': null}
                 {i < max ? item : null}
                 {i === max && (
                    <span>
                      {' '} {text.and} {' '}
                      <a href='#' onClick={this.handleShowOthers.bind(this)}>
                        {items.length - max} {text.more}
                      </a>
                    </span>
                 )}
              </span>
            ))}
          </div>
        );
    }
  }

  render() {
    return (
      <div className={this.block}>
        {this.renderItems()}
      </div>
    );
  }
}

export default Summary;