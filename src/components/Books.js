import React from 'react';
import Form from './Form';
import Book from './Book';

class Books extends React.Component {
  constructor() {
    super();
    this.state = {
      Books: [
        { id: 1, name: 'In Search of Lost Time', author: 'Marcel Proust' },
        { id: 2, name: 'One Hundred Years of Solitude', author: ' Gabriel Garcia Marquez' }],
    };
  }

  render() {
    const { Books } = this.state;
    return (
      <>
        {Books.map((m) => <Book key={m.id} name={m.name} author={m.author} />)}
        <Form />
      </>

    );
  }
}

export default Books;
