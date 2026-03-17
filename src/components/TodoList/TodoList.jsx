import { Link } from 'react-router';

import { TodoListItem } from '../TodoListItem/TodoListItem';

export const TodoList = ({ todos }) => {
  return (
    <>
      <Link to="/todos/create" className="ml-10">
        Create todo
      </Link>
      <ul className="p-8">
        {todos.map((todo) => (
          <TodoListItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};
