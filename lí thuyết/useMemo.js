/**
 * useMemo : là 1 hook được sử dụng trong function Component.
 * - useMemo giúp tránh thực hiện lại các logic không cần thiết
 */
// bài toán : Chỉ khi nào người dùng bấm thêm sản phẩm thì mới tính lại giá trị total, còn không thì sẽ không tính lại
const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [products, setProducts] = useState([]);

const handleSubmit = () => {
  setProducts([
    ...products,
    {
      name,
      price: +price,
    },
  ]);
  setName("");
  setPrice("");
};
// const total = products.reduce((res, pro) => {
//   console.log("Tinh toan lai");
//   return res + pro.price;
// }, 0); // mỗi khi re-render thì sẽ bị tính toán lại

//Cách khắc phục
const total = useMemo(() => {
  return products.reduce((prev, item) => prev + item.price, 0);
}, [products]); //Nếu product thay đổi giá trị thì mới tính toán lại còn nếu nhập input khiến Component re-render thì sẽ không khiến tính toán lại

return (
  <div style={{ padding: "10px 32px" }}>
    <input
      value={name}
      placeholder="Enter name"
      onChange={(e) => setName(e.target.value)}
    />
    <br />
    <input
      value={price}
      placeholder="Enter price"
      onChange={(e) => setPrice(e.target.value)}
    />
    <br />
    <button onClick={handleSubmit}>Add</button>
    <br />
    Total: {total}
    <ul>
      {products.map((item, index) => (
        <li key={index}>
          {item.name} - {item.price}
        </li>
      ))}
    </ul>
  </div>
);
