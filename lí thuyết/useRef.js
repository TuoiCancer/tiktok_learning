// useRef lưu giá trị qua 1 tham chiếu bên ngoài function Component
//syntax: useRef(initialValue) initialValue_giá trị khởi tạo chỉ trong lần đầu tiên .
// React hỗ trợ lấy ra các thẻ trong DOM bằng cách truyền property "ref"
// lưu ý : function Component không có attr là ref
const [count, setCount] = useState(60);
const timerID = useRef();
const preCount = useRef();
const h1Ref = useRef();

useEffect(() => {
  console.log(h1Ref.current); // lấy ra thẻ h1
});

useEffect(() => {
  preCount.current = count;
}, [count]);

const handleStart = () => {
  timerID.current = setInterval(() => {
    setCount((prev) => prev - 1);
  }, 1000);
};

const handleStop = () => {
  clearInterval(timerID.current);
};

return (
  <div style={{ padding: 32 }}>
    <h1 ref={h1Ref}>{count}</h1>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
  </div>
);
