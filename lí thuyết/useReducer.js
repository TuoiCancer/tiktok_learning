/* Cung cấp thêm 1 sự lựa chọn để sử dụng state trong function Component.
 useState : thường sử dụng trong những trường hợp logic đơn giản, state là các dữ liệu nguyên thủy, nếu là object hoặc array thì nó chỉ có 1 cấp, không có các cấp con lồng vào bên trong.
 useReducer : sử dụng khi có nhiều state, giá trị state phức tạp , có nhiều phần con lồng vào nhau , trong array lại có nhiều array con ,...
 để làm việc được với useReducer , phải trải qua 4 bước
 1. xác định giá trị initState ,
 2. Xác định Actions    ,
 3. Tạo reducer : thực chất là function nhận vào 2 tham số (state, actions). Dựa trên actions sẽ quyết định return state mới
 4. Dispatch 
 */
// synax : useReducer(reducer, initState)

//1. Phân tích bài toán với useReducer để giải quyết việc tăng/ giảm số (Bài toán đơn giản )
//- initState
const initState = 0;
//- actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";
//- Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div style={{ padding: 32 }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(UP_ACTION);
        }}
      >
        Up
      </button>
      <button
        onClick={() => {
          dispatch(DOWN_ACTION);
        }}
      >
        Down
      </button>
    </div>
  );
}
