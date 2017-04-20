import React from 'react';
import Item from '../items/item';
import LoadingIcon from './loading_icon';

class CampaignShowPage extends React.Component {
  componentDidMount() {
    this.props.fetchCampaign(this.props.params.campaignId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.pokemonId !== nextProps.params.pokemonId) {
      this.props.requestSinglePokemon(nextProps.params.pokemonId);
    }
  }

  routeIsCorrect() {
    return parseInt(this.props.params.pokemonId) === this.props.pokemonDetail.id;
  }

  render() {
    const { pokemonDetail, loading, children } = this.props;
    if (loading) {
      return <section className="pokemon-detail"><LoadingIcon /></section>;
    }
    return (
      <section className="pokemon-detail">
        <figure>
          <img src={pokemonDetail.image_url} alt={pokemonDetail.name} />
        </figure>
        <ul>
          <li>
            <h2>{pokemonDetail.name}</h2>
          </li>
          <li>Type: {pokemonDetail.poke_type}</li>
          <li>Attack: {pokemonDetail.attack}</li>
          <li>Defense: {pokemonDetail.defense}</li>
          <li>Moves: {pokemonDetail.moves.join(', ')}</li>
        </ul>
        <section className="toys">
          <h3>Items</h3>
          <ul className="toy-list">
            {pokemonDetail.items.map(item => <Item key={item.name} item={item} />)}
          </ul>
          {children}
        </section>
      </section>
    );
  }
}
export default PokemonDetail;
