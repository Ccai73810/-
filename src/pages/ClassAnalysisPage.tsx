import React from 'react'
import { ChevronRight, ArrowLeft, AlertTriangle, BookOpen, Calendar, TrendingUp, Heart, Lightbulb } from 'lucide-react'
import type { PageType } from '../App'

interface Props {
  navigateTo: (page: PageType) => void
  goBack: () => void
}

export default function ClassAnalysisPage({ goBack }: Props) {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-5 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <button onClick={goBack} className="text-zb-text">
            <ArrowLeft size={24} />
          </button>
          <span className="text-lg font-semibold text-zb-text">兴趣班分析</span>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Class Info */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-3xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-zb-orange-light rounded-full flex items-center justify-center">
              <BookOpen size={24} className="text-zb-orange" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-zb-text">英语课续费（秋季班）</h2>
              <p className="text-sm text-zb-text-secondary">长期课包</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs text-zb-text-tertiary">金额</p>
              <p className="text-xl font-bold text-zb-text">¥1,580</p>
            </div>
            <div>
              <p className="text-xs text-zb-text-tertiary">类型</p>
              <span className="text-sm px-3 py-1 bg-zb-orange-light text-zb-orange rounded-full">焦虑型消费</span>
            </div>
          </div>
          
          <div className="bg-zb-orange-light rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={16} className="text-zb-orange" />
              <span className="text-sm font-medium text-zb-text">消费提醒</span>
            </div>
            <p className="text-sm text-zb-text-secondary">
              14天内连续新增2个长期课包，可能属于焦虑型消费
            </p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <h3 className="text-base font-semibold text-zb-text mb-4">课程进度</h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-zb-text">已上 2 次 / 共 24 次</span>
            <span className="text-sm text-zb-text-secondary">8%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[8%] bg-zb-orange rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Interest Feedback */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <h3 className="text-base font-semibold text-zb-text mb-4">孩子兴趣反馈</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zb-text">课堂参与度</span>
              <div className="flex gap-1">
                {[1,2,3,4].map(i => (
                  <Heart key={i} size={16} className="text-zb-red fill-zb-red" />
                ))}
                <Heart size={16} className="text-zb-border" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zb-text">课后练习完成度</span>
              <div className="flex gap-1">
                {[1,2,3].map(i => (
                  <Heart key={i} size={16} className="text-zb-red fill-zb-red" />
                ))}
                {[1,2].map(i => (
                  <Heart key={i} size={16} className="text-zb-border" />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zb-text">主动提及课程频率</span>
              <div className="flex gap-1">
                {[1,2].map(i => (
                  <Heart key={i} size={16} className="text-zb-red fill-zb-red" />
                ))}
                {[1,2,3].map(i => (
                  <Heart key={i} size={16} className="text-zb-border" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <h3 className="text-base font-semibold text-zb-text mb-4">出勤情况</h3>
          <div className="grid grid-cols-7 gap-2">
            {['一', '二', '三', '四', '五', '六', '日'].map((day, i) => (
              <div key={day} className="text-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-1 ${i < 2 ? 'bg-zb-green' : 'bg-gray-100'}`}>
                  <span className={`text-xs ${i < 2 ? 'text-white' : 'text-zb-text-tertiary'}`}>{day}</span>
                </div>
                <span className="text-xs text-zb-text-tertiary">{i < 2 ? '出勤' : '未上'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Budget Ratio */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <h3 className="text-base font-semibold text-zb-text mb-4">预算占比</h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-zb-text">本月兴趣班预算</span>
            <span className="text-sm text-zb-text">¥2,000</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
            <div className="h-full w-[79%] bg-zb-orange rounded-full"></div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-zb-text">本课程占比</span>
            <span className="text-sm text-zb-orange font-medium">79%</span>
          </div>
        </div>
      </div>

      {/* AI Suggestion */}
      <div className="px-5 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-zb-blue-light rounded-full flex items-center justify-center">
              <Lightbulb size={16} className="text-zb-blue" />
            </div>
            <h3 className="text-base font-semibold text-zb-text">AI 建议</h3>
          </div>
          <div className="bg-zb-blue-light rounded-xl p-4">
            <p className="text-sm text-zb-text leading-relaxed">
              先观察 4 周，不建议立即续长期课包。当前课程进度仅 8%，孩子兴趣反馈一般，建议观察后续出勤率和课堂表现后再做决定。
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-8">
        <button 
          className="w-full bg-zb-red text-white py-4 rounded-full text-base font-medium flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
        >
          设置复盘提醒
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
