import { useState } from 'react';

import Spinner from '@/components/spinner';
import { useGetPokemonByNameQuery } from '@/redux/pokemon';

export function Component() {
  const [pokemonName, setPokemonName] = useState('');
  const { data, error, isFetching, isError } = useGetPokemonByNameQuery(pokemonName, {
    skip: pokemonName === '',
    // pollingInterval: 3000,
    // refetchOnFocus: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(e.currentTarget.elements.pokemonName.value);
    e.currentTarget.reset();
  };

  const showNotFoundError = isError && error.originalStatus === 404;
  const shoePokemonData = data && !isFetching && !isError;

  return (
    <>
      <form autoComplete="off" className="mt-5" onSubmit={handleSubmit}>
        <input type="text" name="pokemonName" />
        <button type="submit">Search</button>
      </form>
      {isFetching && <Spinner />}
      {showNotFoundError && <p>UPS!!! Pokemon with name {pokemonName} not found </p>}
      {shoePokemonData && <h1>{data.name}</h1>}
    </>
  );
}

Component.displayName = 'Home';
