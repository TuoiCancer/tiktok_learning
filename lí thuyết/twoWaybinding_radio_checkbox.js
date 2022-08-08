const courses = [
  {
    id: 1,
    name: "HTML,CSS",
  },
  {
    id: 2,
    name: "ReactJs",
  },
  {
    id: 3,
    name: "Nodejs",
  },
];
// 2.1 radio
function App() {
  const [checked, setChecked] = useState(1);
  console.log(checked);
  const handleSubmit = () => {
    //call API
    console.log({ id: checked });
  };

  return (
    <div style={{ padding: 32 }}>
      {courses.map((item, idx) => {
        return (
          <div key={idx}>
            <input
              checked={checked === item.id}
              type="radio"
              onChange={() => setChecked(item.id)}
            />
            {item.name}
          </div>
        );
      })}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

// 2.2 checkbox
function App() {
  const [checked, setChecked] = useState([]); // check sẽ lưu 1 mảng các id của khóa học mà user chọn nên initialState là 1 mảng
  console.log(checked);
  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);

      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    }); // bảo lưu giá trị cũ và thêm giá trị id mới vào mảng checked
  };
  const handleSubmit = () => {
    //call API
    console.log({ id: checked });
  };

  return (
    <div style={{ padding: 32 }}>
      {courses.map((item, idx) => {
        return (
          <div key={idx}>
            <input
              type="checkbox"
              checked={checked.includes(item.id)}
              onChange={() => handleCheck(item.id)}
            />
            {item.name}
          </div>
        );
      })}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
