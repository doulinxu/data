import React from 'react'

import { ActiveRingChart, Decoration2 } from '@jiaminghi/data-view-react'

import LabelTag from './LabelTag'

import './BottomCharts.less'

const config1 = {
  data: [
    {
      name: '甲醛',
      value: 356,
    },
    {
      name: '人身安全',
      value: 215,
    },
    {
      name: '取暖',
      value: 90,
    },
    {
      name: '漏电',
      value: 317,
    },
  ],
  color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
  radius: '65%',
  activeRadius: '70%',
}

const labelConfig = {
  data: ['收费站', '监控中心', '道路外场', '其他'],
}

const style = { width: '5px' }

export default () => {
  return (
    <div className="bottom-charts">
      <div className="bc-chart-item">
        <div className="bcci-header">郑州地区</div>
        <ActiveRingChart config={config1} />
        <LabelTag config={labelConfig} />
      </div>
      <Decoration2 className="decoration-1" reverse={true} style={style} />

      <div className="bc-chart-item">
        <div className="bcci-header">深圳地区</div>
        <ActiveRingChart config={config1} />
        <LabelTag config={labelConfig} />
      </div>

      <Decoration2 className="decoration-2" reverse={true} style={style} />

      <div className="bc-chart-item">
        <div className="bcci-header">广州地区</div>
        <ActiveRingChart config={config1} />
        <LabelTag config={labelConfig} />
      </div>

      <Decoration2 className="decoration-3" reverse={true} style={style} />

      <div className="bc-chart-item">
        <div className="bcci-header">济南</div>
        <ActiveRingChart config={config1} />
        <LabelTag config={labelConfig} />
      </div>
    </div>
  )
}
