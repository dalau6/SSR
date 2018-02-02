import { HomeContainer, GridContainer } from 'containers'
import { Grid } from 'components'
import { fetchPopularRepos } from 'utils/api'

const routes =  [
  {
    path: '/',
    exact: true,
    component: HomeContainer,
  },
  {
    path: '/popular/:id',
    component: Grid,
    fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())
  }
]

export default routes