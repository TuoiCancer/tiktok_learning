/**
 * Mục đích sử dụng : Đơn giản hóa việc truyền dữ liệu từ Component cha xuống các Component con mà không cần qua props
 * Cách dùng :
 * - ở Component cha:
 *  + B1: tạo context thông qua hàm createContext()
 *        vd: const context = createContext(); => ( trả ra 1 đối tượng context có 2 react Component là Provider và Consumer ,
 *            có props là value, khi truyền value thì tất cả các Component con sẽ nhận được value này )
 *  + B2: tạo JSX Provider bao bên ngoài children con
 *        <context.Provider value= {theme}>
 *             <Component Con >
 *        </context.Provider>
 * - ở Component con :
 *  + B1: nhận context mà Component cha đã tạo ra bằng việc sử dụng method useContext
 *       vd: const theme = useContext(context);
 *  + B2: sử dụng biến đó tùy vào logic của bài toán
 */
// Ví dụ : tạo ra 1 Provider Theme, hàm toggleTheme để chuyển đổi từ 'light' thành 'dark'

import { useState, createContext } from "react";

const themeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const context = {
    theme,
    toggleTheme,
  };

  return (
    <themeContext.Provider value={context}>{children}</themeContext.Provider>
  );
}

export { themeContext, ThemeProvider };
