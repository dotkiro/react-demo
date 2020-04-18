import React, { memo, FC } from 'react'
import { css } from '@emotion/core'

const home = css({
  fontSize: 20,
  textAlign: 'center',
  padding: '100px 0'
})

const Home: FC = () => {
  return (
    <div css={home}>Home Page</div>
  )
}

export default memo(Home)