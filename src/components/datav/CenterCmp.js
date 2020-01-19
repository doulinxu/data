import React from 'react'

import { Decoration1, ActiveRingChart } from '@jiaminghi/data-view-react'

import LabelTag from './LabelTag'

import './CenterCmp.less'

const config = {
  data: [
    {
      name: '甲醛',
      value: 29,
    },
    {
      name: '暖气不热',
      value: 3,
    },
    {
      name: '人身安全',
      value: 11,
    },
    {
      name: '漏电',
      value: 7,
    },
    {
      name: '漏水',
      value: 7,
    },
    {
      name: '其他',
      value: 12,
    },
  ],
  color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
  lineWidth: 30,
  radius: '55%',
  activeRadius: '60%',
}

const labelConfig = { data: ['甲醛', '暖气不热', '人身安全', '漏电', '漏水', '其他'] }

const style = { width: '200px', height: '50px' }

export default () => {
  return (
    <div className="center-cmp">
      <div className="cc-header">
        <Decoration1 style={style} />
        <div>一级异常事件</div>
        <Decoration1 style={style} />
      </div>

      <div className="cc-details">
        <div>总数</div>
        <div className="card">7</div>
        <div className="card">3</div>
      </div>

      <div className="cc-main-container">
        <div className="ccmc-left">
          <div className="station-info">
            甲醛<span>29</span>
          </div>
          <div className="station-info">
            暖气不热<span>3</span>
          </div>
          <div className="station-info">
            人身安全<span>11</span>
          </div>
        </div>

        <ActiveRingChart className="ccmc-middle" config={config} />

        <div className="ccmc-right">
          <div className="station-info">
            <span>7</span>漏电
          </div>
          <div className="station-info">
            <span>11</span>漏水
          </div>
          <div className="station-info">
            <span>12</span>其他
          </div>
        </div>

        <LabelTag config={labelConfig} />
      </div>
    </div>
  )
}
