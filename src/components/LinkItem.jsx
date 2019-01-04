// @flow
import * as React from 'react';

type Props = {
  title: string,
  link: string
};

class LinkItem extends React.Component<Props> {
  render() {
    const { title, link } = this.props;
    return (
      <li className='link-item'>
        {title}
        {link}
      </li>
    )
  }
}

export default LinkItem;
