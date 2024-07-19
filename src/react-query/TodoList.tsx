import useTodo from "../hooks/useTodo";

const TodoList = () => {
  const { data: Todos, error, isLoading } = useTodo();

  if (isLoading) return <div>Loading ...</div>;

  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {Todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
