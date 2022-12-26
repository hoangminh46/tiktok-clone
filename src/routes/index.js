// Layouts
import { HeaderOnly } from '../components/Layout';
//Pages
import Home from '../components/pages/Home/Home';
import Following from '../components/pages/Following/Following';
import Upload from '../components/pages/Upload/Upload';
import Search from '../components/pages/Search/Search';
import Profile from '../components/pages/Profile/Profile';
// Dùng cho những Router không cần đăng nhập vẫn xem được
const publicRoutes = [
  { path: '/', components: Home },
  { path: '/following', components: Following },
  // khi url có @ sẽ match vào path này, còn nickname sẽ thay đổi dựa theo dữ liệu search
  { path: '/@:nickname', components: Profile },
  { path: '/upload', components: Upload, layout: HeaderOnly },
  { path: '/search', components: Search, layout: 'null' },
];
// Dùng cho những Router phải đăng nhập mới xem được
// Không đăng nhập sẽ chuyển về trang Login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
