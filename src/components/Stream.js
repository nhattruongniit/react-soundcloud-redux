// @flow 
import * as React from 'react';

export default class Stream extends React.Component {

  state = {};

  handlerLike = (key, title) => {
    console.log(key, title);
  }

  render() {
    const { 
      props: { tracks },
      handlerLike,
    } = this;

    return (
      <div>
        { 
          tracks.map((track, key) => (
            <div key={key}>
              {track.title}
              <button
                type="button"
                onClick={(key) => handlerLike(key, track.title)}
              >
                Like
              </button>
            </div>
          ))
        }
      </div>
    );
  }
};
