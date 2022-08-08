/**
 * - MỤC ĐÍCH SỬ DỤNG : Tránh tạo ra những hàm mới một cách không cần thiết trong function Component.
 * ============================
 * - ĐẶT VẤN ĐỀ :
 * Khi sử dụng memo với mục đích để tránh Component con bị re-render nếu Component cha re-render ,
 * thì khi truyền 1 reference types vào làm props cho Component con phải sử dụng useCallback .
 * bản chất của reference type là nó tạo biến trả ra địa chỉ vùng nhớ và gán vùng nhớ đó cho biến , vậy nên mỗi lần re-render giao diện
 * thì sẽ có 1 vùng nhớ mới được tạo ra. Nên memo so sánh === thấy địa chỉ của chúng khác nhau nên re-render lại component con.
 * - CƠ CHẾ HOẠT ĐỘNG: useCallback trả lại địa chỉ vùng nhớ của tham chiếu trước đó nếu truyền vào [], còn nếu truyền [deps] mà deps thay đổi ,
 * thì sẽ tạo ra 1 tham chiếu mới và gán lại tham chiếu mới đó cho biến gán.
 * ============================
 * - SYNTAX: useCallback(callbackFunction , [deps]) _ [deps] có cơ chế hoạt động tương tự useEffect
 * ===========================
 * LƯU Ý: nếu không sử dụng memo thì không cần sử dụng useCallback
 */
