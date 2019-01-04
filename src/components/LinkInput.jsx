// @flow
import * as React from 'react';

type Props = {
  formSubmit: (name: string, link: string, description: string) => Any<void>
};

class LinkInput extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.setLinkValue = this.setLinkValue.bind(this);

    this.state = {
      link: ''
    }
  }

  setLinkValue = (event) => {
    this.setState({
      link: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { link } = this.state;

    this.props.formSubmit(link, link, link);
  } 


  render() {
    const { link } = this.state;
    const { formSubmit } = this.props;

    return (
    <form onSubmit={this.handleSubmit}>
      <h3>Create Link</h3>
      <input value={link} onChange={this.setLinkValue} />
    </form>
    )
  }
}

export default LinkInput;