function Date() {
  const date = new globalThis.Date();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1rem",
      }}
    >
      <p>
        {" "}
        {date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}{" "}
      </p>
      <p>
        {date.getHours()} / {date.getMinutes()}{" "}
      </p>
    </div>
  );
}

export default Date;
