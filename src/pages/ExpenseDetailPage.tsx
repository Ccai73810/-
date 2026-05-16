import React from 'react'
import { ChevronRight, ArrowLeft, AlertTriangle, BookOpen, Heart, TrendingUp, TrendingDown } from 'lucide-react'
import type { PageType } from '../App'

interface Props {
  navigateTo: (page: PageType) => void
  goBack: () => void
}

export default function ExpenseDetailPage({ navigateTo, goBack }: Props) {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-5 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <button onClick={goBack} className="text-zb-text">
            <ArrowLeft size={24} />
          </button>
          <span className="text-lg font-semibold text-zb-text">育儿支出</span>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Month Tabs */}
      <div className="px-5 mb-4">
        <div className="flex bg-white rounded-full p-1 shadow-card">
          <button className="flex-1 py-2 text-sm font-medium text-white bg-zb-red rounded-full">本月</button>
          <button className="flex-1 py-2 text-sm font-medium text-zb-text-secondary">本学期</button>
          <button className="flex-1 py-2 text-sm font-medium text-zb-text-secondary">全年</button>
        </div>
      </div>

      {/* Total Expense */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-3xl p-5 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-zb-text-secondary mb-1">本月育儿支出（元）</p>
              <p className="text-4xl font-bold text-zb-text">¥5,260</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs text-zb-text-secondary">预算 ¥6,000</span>
                <span className="text-xs text-zb-green">剩余 ¥740</span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp size={12} className="text-zb-red" />
                <span className="text-xs text-zb-red">较上月 +8% (+¥380)</span>
              </div>
            </div>
            <div className="w-24 h-24 relative">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E8F5E9" strokeWidth="3" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4CAF50" strokeWidth="3" strokeDasharray="42, 100" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#2196F3" strokeWidth="3" strokeDasharray="37, 100" strokeDashoffset="-42" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#FF9800" strokeWidth="3" strokeDasharray="13, 100" strokeDashoffset="-79" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E53935" strokeWidth="3" strokeDasharray="8, 100" strokeDashoffset="-92" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-zb-text-secondary">支出占比</span>
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-zb-green rounded-full"></div>
              <span className="text-xs text-zb-text-secondary">必要支出 42%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-zb-blue rounded-full"></div>
              <span className="text-xs text-zb-text-secondary">成长型 37%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-zb-orange rounded-full"></div>
              <span className="text-xs text-zb-text-secondary">焦虑型 13%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-zb-red rounded-full"></div>
              <span className="text-xs text-zb-text-secondary">风险型 8%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Anxiety Alert */}
      <div className="px-5 mb-4">
        <button onClick={() => navigateTo('class-analysis')} className="w-full bg-white rounded-2xl p-4 shadow-card text-left active:scale-95 transition-transform">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <AlertTriangle size={18} className="text-zb-orange" />
              <span className="text-sm font-medium text-zb-text">焦虑消费提醒</span>
              <span className="text-xs px-2 py-0.5 bg-zb-orange-light text-zb-orange rounded-full">需关注</span>
            </div>
            <ChevronRight size={16} className="text-zb-text-tertiary" />
          </div>
          <p className="text-sm text-zb-text leading-relaxed">
            14天内连续新增2个长期课包，可能属于焦虑型消费
          </p>
          <p className="text-xs text-zb-text-tertiary mt-2">建议先观察4周出勤和兴趣反馈</p>
        </button>
      </div>

      {/* Category Summary */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="grid grid-cols-4 gap-3">
            <div className="text-center">
              <div className="w-8 h-8 bg-zb-green-light rounded-full flex items-center justify-center mx-auto mb-1">
                <Heart size={14} className="text-zb-green" />
              </div>
              <p className="text-xs text-zb-text-secondary">必要支出</p>
              <p className="text-sm font-bold text-zb-text">¥2,230</p>
              <div className="h-1 bg-gray-100 rounded-full mt-1">
                <div className="h-full w-[42%] bg-zb-green rounded-full"></div>
              </div>
              <p className="text-xs text-zb-green">42%</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-zb-blue-light rounded-full flex items-center justify-center mx-auto mb-1">
                <TrendingUp size={14} className="text-zb-blue" />
              </div>
              <p className="text-xs text-zb-text-secondary">成长型</p>
              <p className="text-sm font-bold text-zb-text">¥1,960</p>
              <div className="h-1 bg-gray-100 rounded-full mt-1">
                <div className="h-full w-[37%] bg-zb-blue rounded-full"></div>
              </div>
              <p className="text-xs text-zb-blue">37%</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-zb-orange-light rounded-full flex items-center justify-center mx-auto mb-1">
                <AlertTriangle size={14} className="text-zb-orange" />
              </div>
              <p className="text-xs text-zb-text-secondary">焦虑型</p>
              <p className="text-sm font-bold text-zb-text">¥680</p>
              <div className="h-1 bg-gray-100 rounded-full mt-1">
                <div className="h-full w-[13%] bg-zb-orange rounded-full"></div>
              </div>
              <p className="text-xs text-zb-orange">13%</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-zb-red-light rounded-full flex items-center justify-center mx-auto mb-1">
                <TrendingDown size={14} className="text-zb-red" />
              </div>
              <p className="text-xs text-zb-text-secondary">风险型</p>
              <p className="text-sm font-bold text-zb-text">¥390</p>
              <div className="h-1 bg-gray-100 rounded-full mt-1">
                <div className="h-full w-[8%] bg-zb-red rounded-full"></div>
              </div>
              <p className="text-xs text-zb-red">8%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Expense List */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-zb-text">本月支出明细</h3>
            <button className="text-sm text-zb-blue flex items-center gap-1">
              全部明细
              <ChevronRight size={14} />
            </button>
          </div>
          
          <div className="space-y-3">
            <button onClick={() => navigateTo('class-analysis')} className="w-full flex items-center justify-between py-2 border-b border-zb-border text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zb-orange-light rounded-full flex items-center justify-center">
                  <BookOpen size={18} className="text-zb-orange" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zb-text">英语课续费（秋季班）</p>
                  <p className="text-xs text-zb-text-tertiary">长期课包 · 已上2次/共24次</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-zb-text">¥1,580</p>
                <span className="text-xs px-2 py-0.5 bg-zb-orange-light text-zb-orange rounded-full">焦虑型</span>
              </div>
            </button>
            
            <div className="flex items-center justify-between py-2 border-b border-zb-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zb-green-light rounded-full flex items-center justify-center">
                  <Heart size={18} className="text-zb-green" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zb-text">儿童医院（感冒就诊）</p>
                  <p className="text-xs text-zb-text-tertiary">医疗健康</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-zb-text">¥320</p>
                <span className="text-xs px-2 py-0.5 bg-zb-green-light text-zb-green rounded-full">必要</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zb-blue-light rounded-full flex items-center justify-center">
                  <TrendingUp size={18} className="text-zb-blue" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zb-text">篮球课（周末班）</p>
                  <p className="text-xs text-zb-text-tertiary">兴趣培养 · 第3次课</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-zb-text">¥680</p>
                <span className="text-xs px-2 py-0.5 bg-zb-blue-light text-zb-blue rounded-full">成长型</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-8">
        <button 
          className="w-full bg-zb-red text-white py-4 rounded-full text-base font-medium flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
        >
          查看预算建议
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
