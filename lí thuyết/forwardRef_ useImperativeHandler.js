/**
 * Như các bài trước, để lấy ra 1 đối tượng trong DOM, ta có thể sử dụng useRef và truyền attri ref vào element mà ta muốn lấy
 * nó sẽ trả ra giá trị nằm trong current. 
 * Tuy nhiên, bài toán đặt ra : làm sao để lấy được 1 element nằm tỏng Component con khác để sử dụng nó trong Component cha.
 * vì function Component mặc định là không có attri ref, nên ta không thể truyền ref làm props .
 * VD :           const videoRef = useRef();
 * Comp cha:      <Video ref={videoRef} />
 * Comp con:      function Video(props) {
                     return <video ref={props.ref} src={video1} 
                }
 * vì vậy , props kia sẽ có giá trị là undefined
 * Để giải quyết vấn đề này, react hỗ trợ 1 Higher Order Component là forwardRef
 * -syntax: forwardRef(Component) 
 * -> Lúc này Component được truyền vào trong forwardRef sẽ nhận 2 tham số là props và ref. 
 * Ở Component cha lúc này truyền ref xuống , forwardRef sẽ đọc component đc truyền vào bên trong ,giá trị ref lúc này sẽ là giá trị ref 
 * được truyền ở bên Component cha. và vì vậy ta mới có thể nhận được giá trị của element cần lấy
 */

/**
 * Vấn đề tiềm ẩn: Nếu dùng forwradRef sẽ phá vỡ tính đóng gói, vì nó trả ra cả 1 element và mk lấy element tương tác , vậy nếu có 1 vấn đề về bảo mật họ phá cả Component dựa vào element được trích xuất ra bên ngoài đó.
 * nên mk sẽ phải cần tới 1 hook trong react là useImperativeHandle
 * syntax: useImperativeHandle (ref , callbackFn)
 * - sau khi gọi hook useImperativeHandle  giá trị return ở callbackFn sẽ được gán cho ref được truyền làm đối số ở Comp cha , vì vậy nó sẽ đảm bảo tính đóng gói, toàn vẹn dữ liệu
 */

// component cha :
function App() {
  const videoRef = useRef();
  useEffect(() => {
    console.log(videoRef.current);
  });
  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <Video ref={videoRef} />
      {/* nhận giá trị từ callback function bên trong useImperativeHandle trả ra  */}
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

// Component Con :
function Video(props, ref) {
  // ref này chính là ref  ở dòng 42
  const videoRef = useRef(); // lấy ra element video
  useImperativeHandle(ref, () => ({
    // truyền ref ở dòng 42 và xử lí trong cb return về 1 object chứa 2 method là play() và pause().
    play() {
      videoRef.current.play();
    },

    pause() {
      videoRef.current.pause();
    },
  }));

  return <video ref={videoRef} src={video1} width="600px" height="600px" />;
}
export default forwardRef(Video);
