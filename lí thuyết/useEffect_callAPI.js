const tabs = ["posts", "comments", "albums"];

function Content() {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, [type]);
  return (
    <div>
      {tabs.map((tab) => (
        <button
          onClick={() => setType(tab)}
          key={tab}
          style={
            type === tab
              ? {
                  color: " #fff",
                  backgroundColor: "#333",
                }
              : {}
          }
        >
          {tab}
        </button>
      ))}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name || item.title}</li>
        ))}
      </ul>
    </div>
  );
}
