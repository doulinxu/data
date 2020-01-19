import React from 'react'

import { BorderBox5, Decoration3 } from '@jiaminghi/data-view-react'

import './TopLeftCmp.less'

const style = { width: '200px', height: '20px' }

export default () => (
  <div className="top-left-cmp">
    <div className="dc-left">
      <BorderBox5>
        <div className="main-value">
          <span>10</span>个
        </div>
        <div className="compare-value">
          <span>同比</span>21%↑
        </div>
        <div className="compare-value">
          <span>环比</span>15%↑
        </div>
      </BorderBox5>
      <div className="dc-text">
        挽回经济损失

        <Decoration3 style={style} />
      </div>
    </div>
    <div className="dc-right">
      <div className="dc-text">
      挽回用户数

        <Decoration3 style={style} />
      </div>
      <BorderBox5 reverse={true} style={{
        textAlign: 'center', padding: '40px 0'
      }}  >
        <div className="main-value">
          <span>57</span>万
        </div>
        <div className="compare-value">
          <span>同比</span>6%↑
        </div>
        <div className="compare-value">
          <span>环比</span>9%↑
        </div>
      </BorderBox5>
    </div>
  </div>
)
