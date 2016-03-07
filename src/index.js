import React, { Component } from 'react';

class Summary extends Component {
  static defaultProps = {
    block: 'react-summary',
    items: [],
    max: 3,
    text: {
      more: 'more',
      and: 'and',
      none: 'None',
      comma: ', '
    },
    onShowOthers: () => {},
    itemRenderer: (item) => item,
    preventSingleRemaining: false,
  };

  handleShowOthers(event) {
    event.preventDefault();

    this.props.onShowOthers();
  }

  renderItems() {
    let {items, text, max,
         itemRenderer,
         preventSingleRemaining} = this.props;
    switch (items.length) {
      case 0:
        return text.none;

      case 1:
        return itemRenderer(items[0]);

      case 2:
      case max:
      case preventSingleRemaining && max + 1:

        return (
          <div>
            {items.map((item, i) => (
              i < items.length - 1 ? (
                <span key={i}>
                  {i > 0 ? text.comma : null}
                  {itemRenderer(item)}
                </span>
              ) : null
            ))} and {itemRenderer(items[items.length - 1])}
          </div>
        );

      default: 
        return (
          <div>
            {items.map((item, i) => (
              <span key={i}>
                 {i > 0 && i < max ? text.comma: null}
                 {i < max ? itemRenderer(item) : null}
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
    let {block} = this.props;
    return (
      <div className={block}>
        {this.renderItems()}
      </div>
    );
  }
}

export default Summary;