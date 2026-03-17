import { Outlet } from 'react-router';

import Spinner from '@/components/spinner';
import { TodoList } from '@/components/TodoList/TodoList';
import { useFetchTodosQuery } from '@/redux/todos/todoSlice';

export function Component() {
  const { data, isFetching } = useFetchTodosQuery();

  return (
    <div className="flex gap-16">
      <div>
        {isFetching && <Spinner />}
        {data && <TodoList todos={data} />}
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
