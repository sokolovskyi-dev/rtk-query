export const TodoList = ({ todos }) => {
  return (
    <ul className="p-8">
      {todos.map((todo) => (
        <li key={todo.id} className="list-disc">
          {todo.text}
        </li>
      ))}
    </ul>
  );
};
