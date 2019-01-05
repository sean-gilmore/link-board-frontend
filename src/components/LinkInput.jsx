// @flow
import * as React from 'react';

type Props = {
  formSubmit: (link: string, description: string) => Any<void>
};

class LinkInput extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.setLinkValue = this.setLinkValue.bind(this);

    this.state = {
      link: ''
    }
  }

  setLinkValue = (event: SyntheticInputEvent<T>) => {
    this.setState({
      link: event.target.value
    });
  }

  handleSubmit = (event: SyntheticEvent<T>) => {
    event.preventDefault();

    const { link } = this.state;
    this.setState({
      link: ''
    });

    this.props.formSubmit(link, '');
  } 


  render() {
    const { link } = this.state;

    return (
    <form className='link-input' onSubmit={this.handleSubmit}>
      <h3>Create Link</h3>
      <input value={link} onChange={this.setLinkValue} />
    </form>
    )
  }
}

export default LinkInput;