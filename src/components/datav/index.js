import React from 'react'

import {
  FullScreenContainer,
  BorderBox2,
  BorderBox1,
  BorderBox3,
  BorderBox4,
  BorderBox8,
} from '@jiaminghi/data-view-react'

import TopLeftCmp from './TopLeftCmp'
import LeftChart2 from './LeftChart2'
import LeftChart3 from './LeftChart3'
import LeftChart4 from './LeftChart4'

import CenterCmp from './CenterCmp'

import RightChart1 from './RightChart1'
import RightChart2 from './RightChart2'

import BottomCharts from './BottomCharts'

import './index.less'

const style = {
  width: '120px',
  height: '50px',
  lineHeight: '50px',
  textAlign: 'center',
  marginLeft: '200px',
}

export default () => {
  return (
    <div id="data-view">
      <FullScreenContainer>
        <div className="main-header">
          <div className="mh-left">

          </div>
          <div className="mh-middle">心服务平台数据监控</div>
          <div className="mh-right">
          </div>
        </div>

        <BorderBox1 className="main-container">
          <BorderBox3 className="left-chart-container">
            <TopLeftCmp />
              <LeftChart4 />
            <LeftChart3 />
          </BorderBox3>

          <div className="right-main-container">
            <div className="rmc-top-container">
              <BorderBox3 className="rmctc-left-container">
                <CenterCmp />
              </BorderBox3>

              <div className="rmctc-right-container">
                <BorderBox3 className="rmctc-chart-1">
                  <RightChart1 />
                </BorderBox3>

                <BorderBox4 className="rmctc-chart-2" reverse={true}>
                  <RightChart2 />
                </BorderBox4>
              </div>
            </div>

            <BorderBox4 className="rmc-bottom-container">
              <BottomCharts />
            </BorderBox4>
          </div>
        </BorderBox1>
      </FullScreenContainer>
    </div>
  )
}
