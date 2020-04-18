import React, { FC } from 'react'
import { css } from '@emotion/core'
import Loadable from 'react-loadable'
import { Switch, Route, HashRouter } from 'react-router-dom'

const Loading: FC = () => <div>loading</div>

const Home = Loadable({
  loader: () => import('../containers/Home'),
  loading: Loading
})

const wrap = css({
  width: '100vw',
  height: '100vh',
})

const router = (
  <div css={wrap}>
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </HashRouter>
  </div>
)

export default router