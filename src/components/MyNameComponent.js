function MyNameComponent({ name }) {
  return (
    <div
      id={name}
      style={{
        fontStyle: "italic",
      }}
    >
      {name}
    </div>
  );
}

export default MyNameComponent;
