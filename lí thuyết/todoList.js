// 3. Todo List
function App() {
  const [name, setName] = useState(""); //tên của 1 công việc
  const [jobs, setJobs] = useState(() => {
    const storeJobs = localStorage.getItem("jobs");
    return JSON.parse(storeJobs) ?? [];
  }); // mảng chứa danh sách các công việc cần làm

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, name];
      // lưu dữ liệu vào Local Storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setName("");
  };

  return (
    <div style={{ padding: 32 }}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
