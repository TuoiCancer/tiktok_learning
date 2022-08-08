//cleanup luôn được gọi trước khi Component unMount
// cleanup luôn được gọi trước khi callback được gọi (trừ lần đầu tiên Component được Mounted )

const [count, setCount] = useState(1);

useEffect(() => {
  console.log("Mounted or Re-render");
  return () => {
    console.log("cleanup function ");
  };
}, [count]);

return (
  <div>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Click me</button>
  </div>
);
