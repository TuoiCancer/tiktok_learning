import { useEffect, useState } from "react";
//DOM event : scroll ,resize

const tabs = ["posts", "comments", "albums"];

function Content() {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("posts");
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, [type]);
  //add event 1 lần thì mối khi event được kích hoạt callback sẽ được gọi lại cho nên sẽ sử dụng trường hợp thứ 2 của useEffect.
  useEffect(() => {
    const handleScroll = (e) => {
      window.scrollY >= 200 ? setShowToTop(true) : setShowToTop(false);
    };

    window.addEventListener("scroll", handleScroll);

    //cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      {showToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
        >
          Up
        </button>
      )}
    </div>
  );
}

export default Content;
