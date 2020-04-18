import React, { FC } from 'react'
import { memo } from 'react'
import { css } from '@emotion/core'
import router  from './router'

const wrap = css({
  background: 'pink'
})

const App: FC = () => {
  return (
    <div css={wrap}>
      {router}
    </div>
  )
}

export default memo(App)
