export const TodoList = ({ todos }) => {
  return (
    <ul className="p-8">
      {todos.map((todo) => (
        <li key={todo.id} className="list-disc pr-5">
          {todo.text}
          <button className="bg-red-500/70! p-1!">Delete</button>
        </li>
      ))}
    </ul>
  );
};
