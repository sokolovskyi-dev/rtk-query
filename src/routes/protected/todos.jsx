import Spinner from '@/components/spinner';
import { TodoList } from '@/components/TodoList/TodoList';
import { useDeleteTodoMutation, useFetchTodosQuery } from '@/redux/todos/todoSlice';

export function Component() {
  const { data, isFetching } = useFetchTodosQuery();
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();
  return (
    <>
      {isFetching && <Spinner />}
      {data && <TodoList todos={data} onDelete={deleteTodo} deleting={isDeleting} />}
    </>
  );
}
