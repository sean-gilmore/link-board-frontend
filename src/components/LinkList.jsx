// @flow
import * as React from 'react';
import LinkInput from './LinkInput';

type Props = {
};

type State = {
  linkItems?: Array<{
    name: string,
    link: string,
    description: string
  }>
};

class LinkList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      linkItems: []
    }
  }

  addLinkItem = (name: string, link: string, description: string) => {
    const newItems = [
      ...this.state.linkItems,
      {name: name, link: link, description: description}
    ];
    this.setState({
      linkItems: newItems
    });
  }

  render() {
    const { linkItems } = this.props;
    return (
      <section>
        <LinkInput formSubmit={this.addLinkItem} />
        <ul>
          {linkItems.length > 0 && linkItems.map((item, key: number) => (
            <LinkItem key={key} />
          ))}
        </ul>
      </section>
    )
  }
}

export default LinkList;