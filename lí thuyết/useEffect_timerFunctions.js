// các timer function : setInterval, setTimeout , ...
useEffect(() => {
  setInterval(() => {
    setCountdown(countdown - 1);
    console.log(countdown);
  }, 1000);
}, []);
// luôn in ra là 179, vì hàm useEffect nó chỉ đc gọi 1 lần, hàm setInterval thì cứ sau 1 giây callback bên trong sẽ được gọi. biến countdown trong function nó sẽ closure ra bên ngoài , nhưng tại hàm useEffect giá trị của countdown luôn là 180 cho nên giá trị countdown trong hàm setInterval luôn là 180
//Cách giải quyết:
// C1 : với setTimeout : sau 1s cb sẽ được gọi, lúc này dependency là countdown ,cb trong setTimeout chỉ chạy duy nhất 1 lần , hàm setCountdown được gọi và làm giá trị của countdown thay đổi, lúc này dependency so sánh thấy thay đổi thì cb sẽ được gọi lại
useEffect(() => {
  const id = setTimeout(() => {
    setCountdown(countdown - 1);
  }, 1000);
  console.log("re-render");
  return () => clearTimeout(id);
}, [countdown]);
// C2: với setInterval : cứ sau 2s cb sẽ được gọi , tức là cb sẽ được gọi liên tục
useEffect(() => {
  const id = setInterval(() => {
    setCountdown((prev) => prev - 1);
  }, 1000);
  console.log(countdown);
  return () => clearInterval(id);
}, []);
