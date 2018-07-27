import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Post from './Post';

import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Angelo Queiroz',
          photo: 'angelo.jpg',
        },
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum nunc quis turpis euismod laoreet.
          Maecenas auctor, enim et varius dapibus, erat purus aliquam lorem, vel convallis libero ipsum eu justo.
          Aenean congue pretium eros nec egestas. Sed laoreet nunc porttitor sapien laoreet rhoncus. Mauris nec elit
          vel augue rhoncus interdum. Vestibulum sit amet enim sit amet nunc porttitor posuere in vitae dui.
          Aliquam convallis est ac leo malesuada varius. Vestibulum eget neque ut sapien venenatis tempus.
          Etiam non purus nec velit rutrum vulputate at a quam. Fusce luctus ultricies lorem in elementum.
          Nam viverra est a commodo blandit. Quisque et congue mi, nec egestas ipsum. Nulla facilisi.
          Etiam lobortis pellentesque ipsum at malesuada.`,
        posted_at: '7:30 PM Today',
      },
      {
        id: 2,
        author: {
          name: 'Deborah Stirling',
          photo: 'deborah.jpg',
        },
        body: `Pellentesque accumsan cursus quam, eget mattis dui tincidunt non. Donec sed convallis turpis, at vestibulum risus.
          Phasellus dictum neque non enim pulvinar, eu faucibus lacus tristique. Ut mollis quis velit a congue.
          Cras pulvinar lacinia lacus, eu finibus augue egestas nec. Praesent tristique sed magna sed accumsan.
          Praesent blandit ac justo vitae commodo. Nulla facilisi. Donec aliquet, sapien vitae vehicula hendrerit,
          lacus neque gravida libero, tempus pretium mauris elit non urna.`,
        posted_at: '8:12 PM Today',
      },
      {
        id: 3,
        author: {
          name: 'Priscila Stirling Queiroz',
          photo: 'priscila.jpg',
        },
        body: `Aenean consequat tempor tellus, vel gravida ex blandit vel. Suspendisse tempus condimentum neque, ac commodo
          orci tristique a. Sed porttitor finibus tortor, id posuere ipsum consequat eu. Aliquam imperdiet turpis augue,
          eu gravida urna aliquam vel. Vestibulum non commodo ipsum, porta blandit dui. Donec bibendum nisi libero,
          blandit malesuada erat ultrices sed. In tempor sapien non nibh condimentum tincidunt. Quisque sed erat vitae
          justo venenatis accumsan. Phasellus vel ligula mollis, varius odio non, dapibus dui. Proin vehicula vestibulum
          elementum. Vivamus porta mi a leo vestibulum sodales. Sed tristique scelerisque orci, sed pharetra ligula
          dictum eget. Proin non euismod tellus. Orci varius natoque penatibus et magnis dis parturient montes.`,
        posted_at: '8:44 PM Today',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="content">
          <h1>GoReact - Desafio 01 - Post List</h1>
          {posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
