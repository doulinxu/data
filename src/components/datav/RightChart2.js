import React from 'react'

import { Charts } from '@jiaminghi/data-view-react'

import './RightChart2.less'

const option = {
  series: [
    {
      type: 'pie',
      data: [
        { name: '甲醛', value: 93 },
        { name: '取暖', value: 66 },
        { name: '人身安全', value: 52 },
        { name: '漏电', value: 34 },
        { name: '漏水', value: 22 },
      ],
      radius: ['45%', '65%'],
      insideLabel: {
        show: false,
      },
      outsideLabel: {
        labelLineEndLength: 10,
        formatter: '{percent}%\n{name}',
        style: {
          fontSize: 14,
          fill: '#fff',
        },
      },
    },
  ],
  color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
}

export default () => (
  <div className="right-chart-2">
    <div className="rc1-header">杭州地区</div>

    <div className="rc1-chart-container">
      <div className="left">
        <div className="number">267</div>
        <div>异常事件总数</div>
      </div>

      <Charts className="right" option={option} />
    </div>
  </div>
)
