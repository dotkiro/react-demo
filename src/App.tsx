import React, { StrictMode, memo, FC, useEffect } from 'react'
import { css } from '@emotion/core'
import router  from '@/router'
import { setTitle } from '@/utils'

const wrap = css({
  background: 'pink'
})

const App: FC = () => {
  useEffect(() => {
    setTitle('React Demo')
  }, [])

  return (
    <StrictMode>
      <div css={wrap}>
        {router}
      </div>
    </StrictMode>
  )
}

export default memo(App)
