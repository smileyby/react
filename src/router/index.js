import Login from '../page/Login';
import Index from '../page/Index';
import List from '../page/List';
import Setting from '../page/Setting';
import UserInfo from '../page/UserInfo';

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/list',
    component: List
  },
  {
    path: '/setting',
    component: Setting
  },
  {
    path: '/userinfo',
    component: UserInfo
  }
]

export default routes;
