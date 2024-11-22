function Date() {
  const date = new globalThis.Date();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1rem",
        backgroundColor: '#1A1A1A',
        padding: '14px 20px',
        borderRadius: '12px',
        color: '#fff'
      }}
    >
      <p>
        {" "}
        {date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}{" "}
      </p>
      <p>
        {date.getHours()} / {date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes() }
      </p>
    </div>
  );
}

export default Date;
