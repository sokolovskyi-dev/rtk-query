import Spinner from '@/components/spinner';
import { useCreateTodoMutation } from '@/redux/todos/todoSlice';

export function Component() {
  const [createTodo, { isLoading }] = useCreateTodoMutation();

  function handleSubmit(e) {
    e.preventDefault();
    if (e.currentTarget.elements.text.value === '') return;

    createTodo(e.currentTarget.elements.text.value);
    e.currentTarget.reset();
  }
  return (
    <div className="mt-10">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="w-c w-fit rounded-xl bg-blue-200/40 p-10"
      >
        <input type="text" name="text" />
        <button disabled={isLoading} type="submit">
          Create
          {isLoading && <Spinner size={16} />}
        </button>
      </form>
    </div>
  );
}

Component.displayName = 'Create';
