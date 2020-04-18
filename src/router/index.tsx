import React from 'react'
import { css } from '@emotion/core'
import Loadable from 'react-loadable'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from '@/components/Loading'

const Home = Loadable({
  loader: () => import('@/containers/Home'),
  loading: Loading
})

const wrap = css({
  width: '100vw',
  height: '100vh',
})

const router = (
  <div css={wrap}>
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </div>
)

export default router