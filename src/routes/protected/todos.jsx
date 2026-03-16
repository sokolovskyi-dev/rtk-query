import Spinner from '@/components/spinner';
import { TodoList } from '@/components/TodoList/TodoList';
import { useFetchTodosQuery } from '@/redux/todos/todoSlice';

export function Component() {
  const { data, isFetching } = useFetchTodosQuery();
  return (
    <>
      {isFetching && <Spinner />}
      {data && <TodoList todos={data} />}
    </>
  );
}
