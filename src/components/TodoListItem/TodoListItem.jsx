import { Link } from 'react-router';

export const TodoListItem = ({ todos, onDelete, deleting }) => {
  return (
    <>
      <Link to="/todos/create" className="ml-10">
        Create todo
      </Link>
      <ul className="p-8">
        {todos.map((todo) => (
          <li key={todo.id} className="list-disc pr-5">
            {todo.text}
            <button className="ml-4 bg-red-500/70! p-1!" onClick={() => onDelete(todo.id)}>
              {deleting ? 'Deleting...' : 'Delete'}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
