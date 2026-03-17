// import { useState } from 'react';

import { useSearchParams } from 'react-router';

import Spinner from '@/components/spinner';
import { useGetPokemonByNameQuery } from '@/redux/pokemon';

export function Component() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pokemonName = searchParams.get('name') || '';
  // const [pokemonName, setPokemonName] = useState('');
  const { data, error, isFetching, isError } = useGetPokemonByNameQuery(pokemonName, {
    skip: pokemonName === '',
    // pollingInterval: 3000,
    // refetchOnFocus: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.currentTarget.elements.pokemonName.value.trim();
    if (!value) return;
    setSearchParams({ name: value });
    e.currentTarget.reset();
  };

  const showNotFoundError = isError && error.originalStatus === 404;
  const showPokemonData = data && !isFetching && !isError;

  return (
    <>
      <form autoComplete="off" className="mt-5" onSubmit={handleSubmit}>
        <input type="text" name="pokemonName" />
        <button type="submit">Search</button>
      </form>
      {isFetching && <Spinner />}
      {showNotFoundError && <p>UPS!!! Pokemon with name {pokemonName} not found </p>}
      {showPokemonData && <h1 className="mt-5">{data.name}</h1>}
      {showPokemonData && (
        <img
          src={data.sprites.front_shiny}
          className="w-50 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
        />
      )}
    </>
  );
}

Component.displayName = 'Home';
