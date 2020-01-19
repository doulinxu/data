import React from 'react'

import { CapsuleChart } from '@jiaminghi/data-view-react'

import './LeftChart3.less'

const config = {
  data: [
    {
      name: '甲醛',
      value: 78,
    },
    {
      name: '人身安全',
      value: 54,
    },
    {
      name: '取暖',
      value: 123,
    },
    {
      name: '漏电',
      value: 167,
    },
    {
      name: '漏水',
      value: 77,
    },
  ],
  colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
  unit: '件',
}

export default () => (
  <div className="left-chart-3">
    <div className="lc3-header">上海地区</div>
    <div className="lc3-details">
      异常事件总数<span>11</span>
    </div>
    <CapsuleChart className="lc3-chart" config={config} />
  </div>
)
