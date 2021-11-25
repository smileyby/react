import Login from '../page/Login';
import Index from '../page/Index';
import List from '../page/List';
import Setting from '../page/Setting';
import UserInfo from '../page/UserInfo';
import NotFound from '../page/NotFound'

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/index',
    component: Index,
    needAuth: true
  },
  {
    path: '/login',
    component: Login,
    needAuth: true
  },
  {
    path: '/list',
    component: List,
    needAuth: true
  },
  {
    path: '/setting',
    component: Setting,
    needAuth: true
  },
  {
    path: '/userinfo',
    component: UserInfo,
    needAuth: true
  },
  {
    path: '/404',
    component: NotFound,
    needAuth: false
  }
]

export default routes;
