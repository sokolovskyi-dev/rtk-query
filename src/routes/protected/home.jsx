import { useGetPokemonByNameQuery } from '@/redux/pokemon';

export function Component() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  return <div>Home</div>;
}

Component.displayName = 'Home';
