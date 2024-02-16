import { Component } from 'react';

export class CharCard extends Component {
  render() {
    const { data } = this.props;

    return (
      <section id="character-cards">
        {data.map((character, index) => {
          return (
            <div key={index} className="card">
              <div className="card-titles">
                <h3>{character.name}</h3>
                <h4>{character.nickName}</h4>
              </div>
              <img src={character.imageUrl} alt="" />
              <p>{character.background}</p>
            </div>
          );
        })}
      </section>
    );
  }
}
