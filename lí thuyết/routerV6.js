/**
 *              React Router Dom
 * - Tạo ra cơ chế định tuyến cho các trang trong 1 website. cho phép di chuyển qua lại giữa các trang
 * - install : npm install react-router-dom@6
 * - import {BrowserRouter as Router} from 'react-router-dom'
 *  <Router>
      <App />
    </Router> 
 * import {Routes , Route} from 'react-router-dom' 
 * Routes : chứa nhiều Route , mỗi Route đại diện cho 1 trang ( vd: trang Home, trang News,...)
 * Route: có 2 thuộc tính : 
 *      + path : tuyến đường dẫn đến trang đó 
 *      + element : nhận vào dưới dạng react element 
 *      vd: element= {<HomePage/>} 
 *      vd: element= {HomePage}; // cái này gọi là react Component
 * Link : nếu dùng thẻ a để định tuyến cho element mỗi khi click sẽ reload lại trang, như vậy sẽ trở thành NPM chứ k phải là SPA 
 * Cho nên trong react-router-dom , hỗ trợ 1 component là Link giúp thay thẻ a làm nhiệm vụ chuyển mà không bị reload . href thay bằng to ( đến )
 * <Link to="/">Home</Link> 
 * 
 * Note: Routing chỉ cho phép định tuyến nội bộ, tức là những link bên ngoài sẽ không thể dẫn đến trang đó. 
 * <Link to="https://www.google.com/">Home</Link> 
 * => vì vậy trong TH này thì đơn giản chỉ cần dùng thẻ a là được
 */
