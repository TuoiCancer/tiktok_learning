// Lí thuyết chung đối với cả 3 trường hợp :
// - Callback luôn được gọi sau khi Component mounted
// - Cleanup function luôn được gọi trước khi component unmount
// - Cleanup function luôn được gọi trước khi callback được gọi

// Syntax : có 3 TH sử dụng:
// TH1: useEffect(callback)
// - callback được gọi mỗi khi Component re-render
// - callback luôn gọi sau khi element được đưa vào DOM

// TH2: useEffect(callback,[])
// - callback chỉ được gọi 1 lần sau khi Component mount (call API)

// TH3: useEffect(callback, [deps])
// - callback sẽ được gọi lại mỗi khi deps thay đổi.
