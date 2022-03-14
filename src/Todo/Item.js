function TodoItem(props) {
  return (
    <div>
      <input type={"checkbox"} checked={props.item.bought} />
      <input
        value={props.item.title}
        style={{
          backgroundColor: "transparent",
          color: "white",
          border: "none",
          textDecoration: props.item.bought ? "line-through" : "none",
        }}
        onChange={function () {}}
      />
      <button>Delete</button>
    </div>
  );
}
export default TodoItem;
