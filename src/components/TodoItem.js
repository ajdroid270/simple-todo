const TodoItem = ({
  description,
  onDelete = () => {},
  onUpdate = () => {},
}) => {
  return (
    <div>
      <input type="checkbox" />
      <input
        type="text"
        value={description}
        onInput={(e) => {
          onUpdate(e.target.value);
        }}
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "inherit",
        }}
      />
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};
export default TodoItem;
