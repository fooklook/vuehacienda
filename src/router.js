import Page from './components/page'
import ListPage from './components/list'
import DetailPage from './components/detail'

var routers = [
  { path: '/', component: Page },
  { path: '/list/:id', component: ListPage },
  { path: '/detail/:id/:name', component: DetailPage }
]

export default {
  routers
}
