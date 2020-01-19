import React from 'react'

import { CapsuleChart } from '@jiaminghi/data-view-react'

import './RightChart1.less'

const config = {
  data: [
    {
      name: '甲醛',
      value: 25,
    },
    {
      name: '人身安全',
      value: 66,
    },
    {
      name: '其他',
      value: 123,
    },
    {
      name: '暖气不热',
      value: 72,
    },
    {
      name: '漏电',
      value: 99,
    },
  ],
  unit: '件',
}

export default () => (
  <div className="right-chart-1">
    <div className="rc1-header">北京地区</div>

    <div className="rc1-chart-container">
      <div className="left">
        <div className="number">50</div>
        <div>异常事件总数</div>
      </div>

      <CapsuleChart className="right" config={config} />
    </div>
  </div>
)
