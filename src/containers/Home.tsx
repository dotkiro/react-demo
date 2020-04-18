import React, { memo, FC } from 'react'
import { css } from '@emotion/core'
import { AppContainers } from '@/constants'

const data: Types.Hello = {
  world: 'WORLD'
}

const home = css({
  fontSize: 20,
  textAlign: 'center',
  padding: '100px 0'
})

const Home: FC = () => {
  return (
    <div css={home}>
      {AppContainers.HOME} {data.world}
    </div>
  )
}

export default memo(Home)