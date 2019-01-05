// @flow
import * as React from 'react';

type Props = {
  link: string
};

class LinkItem extends React.Component<Props> {
  render() {
    const { link } = this.props;
    return (
      <li className='link-item'>
        {link}
      </li>
    )
  }
}

export default LinkItem;
