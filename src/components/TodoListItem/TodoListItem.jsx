import { useDeleteTodoMutation } from '@/redux/todos/todoSlice';

import Spinner from '../spinner';

export const TodoListItem = ({ id, text }) => {
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();
  return (
    <li className="list-disc pr-5">
      {text}
      <button
        className="ml-4 bg-red-500/70! p-1!"
        onClick={() => deleteTodo(id)}
        disabled={isDeleting}
      >
        {isDeleting && <Spinner size={12} />}
        Delete
      </button>
    </li>
  );
};
