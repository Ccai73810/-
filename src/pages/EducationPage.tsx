import React from 'react'
import { ChevronRight, ArrowLeft, GraduationCap, Globe, Plane, Lightbulb } from 'lucide-react'
import type { PageType } from '../App'

interface Props {
  navigateTo: (page: PageType) => void
  goBack: () => void
}

export default function EducationPage({ navigateTo, goBack }: Props) {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-5 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <button onClick={goBack} className="text-zb-text">
            <ArrowLeft size={24} />
          </button>
          <span className="text-lg font-semibold text-zb-text">教育金规划</span>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Goal Card */}
      <div className="px-5 mb-4">
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-5 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm opacity-90 mb-1">为小宇规划美好未来</p>
              <h2 className="text-2xl font-bold">教育金目标</h2>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <GraduationCap size={24} className="text-white" />
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-sm opacity-90">目标金额</p>
            <p className="text-4xl font-bold">¥400,000</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-xs opacity-80">已储备</p>
              <p className="text-lg font-semibold">¥128,000</p>
            </div>
            <div>
              <p className="text-xs opacity-80">还差</p>
              <p className="text-lg font-semibold">¥272,000</p>
            </div>
            <div>
              <p className="text-xs opacity-80">建议每月储备</p>
              <p className="text-lg font-semibold">¥3,200</p>
            </div>
          </div>
        </div>
      </div>

      {/* Route Selection */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-zb-text">升学路线规划</h3>
            <button className="text-sm text-zb-blue flex items-center gap-1">
              了解更多路线
              <ChevronRight size={14} />
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <button className="bg-zb-blue-light rounded-xl p-3 text-center border-2 border-zb-blue">
              <GraduationCap size={20} className="text-zb-blue mx-auto mb-2" />
              <p className="text-xs font-medium text-zb-text">国内本科</p>
              <p className="text-xs text-zb-text-secondary mt-1">预计总费用</p>
              <p className="text-sm font-bold text-zb-text">¥400,000</p>
              <div className="w-4 h-4 bg-zb-blue rounded-full mx-auto mt-2 flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </button>
            
            <button className="bg-gray-50 rounded-xl p-3 text-center border-2 border-transparent">
              <GraduationCap size={20} className="text-zb-text-tertiary mx-auto mb-2" />
              <p className="text-xs font-medium text-zb-text">民办本科</p>
              <p className="text-xs text-zb-text-secondary mt-1">预计总费用</p>
              <p className="text-sm font-bold text-zb-text">¥680,000</p>
              <div className="w-4 h-4 bg-gray-200 rounded-full mx-auto mt-2"></div>
            </button>
            
            <button className="bg-gray-50 rounded-xl p-3 text-center border-2 border-transparent">
              <Globe size={20} className="text-zb-text-tertiary mx-auto mb-2" />
              <p className="text-xs font-medium text-zb-text">国际路线</p>
              <p className="text-xs text-zb-text-secondary mt-1">预计总费用</p>
              <p className="text-sm font-bold text-zb-text">¥1,200,000</p>
              <div className="w-4 h-4 bg-gray-200 rounded-full mx-auto mt-2"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <h3 className="text-base font-semibold text-zb-text mb-4">教育阶段规划</h3>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-zb-green rounded-full flex items-center justify-center mb-2">
                <GraduationCap size={18} className="text-white" />
              </div>
              <p className="text-xs font-medium text-zb-text">小学</p>
              <p className="text-xs text-zb-text-secondary">6-12岁</p>
              <p className="text-xs text-zb-green mt-1">已完成</p>
            </div>
            <div className="flex-1 h-0.5 bg-zb-green mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-zb-blue rounded-full flex items-center justify-center mb-2">
                <GraduationCap size={18} className="text-white" />
              </div>
              <p className="text-xs font-medium text-zb-text">初中</p>
              <p className="text-xs text-zb-text-secondary">12-15岁</p>
              <p className="text-xs text-zb-blue mt-1">进行中</p>
            </div>
            <div className="flex-1 h-0.5 bg-zb-border mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-zb-border rounded-full flex items-center justify-center mb-2">
                <GraduationCap size={18} className="text-zb-text-tertiary" />
              </div>
              <p className="text-xs font-medium text-zb-text">高中</p>
              <p className="text-xs text-zb-text-secondary">15-18岁</p>
              <p className="text-xs text-zb-text-tertiary mt-1">未来规划</p>
            </div>
            <div className="flex-1 h-0.5 bg-zb-border mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-zb-border rounded-full flex items-center justify-center mb-2">
                <GraduationCap size={18} className="text-zb-text-tertiary" />
              </div>
              <p className="text-xs font-medium text-zb-text">大学</p>
              <p className="text-xs text-zb-text-secondary">18-22岁</p>
              <p className="text-xs text-zb-text-tertiary mt-1">未来规划</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Comparison */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <h3 className="text-base font-semibold text-zb-text mb-4">费用对比（预计总费用）</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs text-zb-text-secondary w-16">国内本科</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[33%] bg-zb-blue rounded-full"></div>
              </div>
              <span className="text-xs font-medium text-zb-text">¥400,000</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-zb-text-secondary w-16">民办本科</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[57%] bg-zb-purple rounded-full"></div>
              </div>
              <span className="text-xs font-medium text-zb-text">¥680,000</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-zb-text-secondary w-16">国际路线</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-full bg-zb-orange rounded-full"></div>
              </div>
              <span className="text-xs font-medium text-zb-text">¥1,200,000</span>
            </div>
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
            <h3 className="text-base font-semibold text-zb-text">AI 规划建议</h3>
          </div>
          <p className="text-sm text-zb-text-secondary leading-relaxed">
            当前更适合先建立稳健型教育金账户，再逐步增加长期储备。建议每月定投 ¥3,200，选择稳健型理财产品。
          </p>
          <button className="text-sm text-zb-blue flex items-center gap-1 mt-3">
            查看详情
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-8">
        <button 
          onClick={() => navigateTo('planning')}
          className="w-full bg-zb-red text-white py-4 rounded-full text-base font-medium flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
        >
          开始目标计划
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
