// @flow
import * as React from 'react';
import LinkInput from './LinkInput';
import LinkItem from './LinkItem';

type Props = {
};

type LinkItemType = {
  link: string,
  description: string
};

type State = {
  linkItems?: Array<LinkItemType>
};

class LinkList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      linkItems: []
    }
  }

  addLinkItem = ( link: string, description: string ) => {
    const newItems = [
      ...this.state.linkItems,
      { link: link, description: description }
    ];
    this.setState({
      linkItems: newItems
    });
  }

  render() {
    const { linkItems } = this.state;
    return (
      <section className='link-list'>
        <LinkInput formSubmit={this.addLinkItem} />
        <ul className='link-list__link-wrapper'>
          {
            linkItems.length > 0 &&
            linkItems.map((item: LinkItemType, key: number) => (
              <LinkItem key={key} link={item.link} />
            ))
          }
        </ul>
      </section>
    )
  }
}

export default LinkList;