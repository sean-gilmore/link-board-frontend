// @flow
import * as React from 'react';
import LinkList from '../components/LinkList';

type Props = {

};

class Root extends React.Component<Props> {
  render () {
    return ( 
      <div className='root'>
        <LinkList />
      </div>
    );
  }
}

export default Root;
