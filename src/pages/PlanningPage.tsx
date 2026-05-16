import React from 'react'
import { ChevronRight, ArrowLeft, Calendar, Target, GraduationCap, Shield, Heart, BookOpen, Bell } from 'lucide-react'
import type { PageType } from '../App'

interface Props {
  navigateTo: (page: PageType) => void
  goBack: () => void
}

export default function PlanningPage({ navigateTo }: Props) {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-5 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-zb-text">家庭未来目标地图</h1>
          <button className="relative">
            <Bell size={22} className="text-zb-text" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-zb-red rounded-full"></div>
          </button>
        </div>
      </div>

      {/* Family Profile */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-3xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">宇</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-zb-text">小宇 · 8岁</h2>
              <p className="text-sm text-zb-text-secondary">小学投入型家庭</p>
            </div>
          </div>
          
          <div className="bg-zb-blue-light rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={16} className="text-zb-blue" />
              <span className="text-sm font-medium text-zb-text">未来12个月提醒</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-zb-red rounded-full"></div>
                <span className="text-xs text-zb-text">9月：新学期兴趣班续费高峰期</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-zb-orange rounded-full"></div>
                <span className="text-xs text-zb-text">11月：双11教育产品促销季</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-zb-blue rounded-full"></div>
                <span className="text-xs text-zb-text">1月：年度教育金储备检视</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="px-5 grid grid-cols-2 gap-3 mb-4">
        {/* Education Plan */}
        <button onClick={() => navigateTo('education')} className="bg-white rounded-2xl p-4 shadow-card text-left active:scale-95 transition-transform">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 bg-zb-blue-light rounded-full flex items-center justify-center">
              <GraduationCap size={20} className="text-zb-blue" />
            </div>
          </div>
          <h3 className="text-sm font-semibold text-zb-text mb-1">教育金计划</h3>
          <p className="text-xs text-zb-text-secondary">目标 ¥400,000</p>
          <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[32%] bg-zb-blue rounded-full"></div>
          </div>
          <p className="text-xs text-zb-text-tertiary mt-1">已完成 32%</p>
        </button>

        {/* Insurance Plan */}
        <button onClick={() => navigateTo('insurance')} className="bg-white rounded-2xl p-4 shadow-card text-left active:scale-95 transition-transform">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 bg-zb-green-light rounded-full flex items-center justify-center">
              <Shield size={20} className="text-zb-green" />
            </div>
          </div>
          <h3 className="text-sm font-semibold text-zb-text mb-1">家庭保障计划</h3>
          <p className="text-xs text-zb-text-secondary">完整度 78%</p>
          <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[78%] bg-zb-green rounded-full"></div>
          </div>
          <p className="text-xs text-zb-text-tertiary mt-1">已配置 4 项</p>
        </button>

        {/* Interest Class Budget */}
        <button className="bg-white rounded-2xl p-4 shadow-card text-left active:scale-95 transition-transform">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 bg-zb-orange-light rounded-full flex items-center justify-center">
              <BookOpen size={20} className="text-zb-orange" />
            </div>
          </div>
          <h3 className="text-sm font-semibold text-zb-text mb-1">兴趣班预算计划</h3>
          <p className="text-xs text-zb-text-secondary">月预算 ¥2,000</p>
          <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[85%] bg-zb-orange rounded-full"></div>
          </div>
          <p className="text-xs text-zb-text-tertiary mt-1">已用 85%</p>
        </button>

        {/* Growth Goals */}
        <button className="bg-white rounded-2xl p-4 shadow-card text-left active:scale-95 transition-transform">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 bg-zb-red-light rounded-full flex items-center justify-center">
              <Target size={20} className="text-zb-red" />
            </div>
          </div>
          <h3 className="text-sm font-semibold text-zb-text mb-1">成长目标</h3>
          <p className="text-xs text-zb-text-secondary">3个进行中</p>
          <div className="flex gap-1 mt-2">
            <div className="w-6 h-6 bg-zb-blue-light rounded-full flex items-center justify-center">
              <GraduationCap size={12} className="text-zb-blue" />
            </div>
            <div className="w-6 h-6 bg-zb-green-light rounded-full flex items-center justify-center">
              <Heart size={12} className="text-zb-green" />
            </div>
            <div className="w-6 h-6 bg-zb-orange-light rounded-full flex items-center justify-center">
              <BookOpen size={12} className="text-zb-orange" />
            </div>
          </div>
        </button>
      </div>

      {/* Current Tasks */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <h3 className="text-base font-semibold text-zb-text mb-4">本阶段规划任务</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-zb-green rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span className="text-sm text-zb-text">完成教育金缺口评估</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-zb-green rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span className="text-sm text-zb-text">检视家庭保障配置</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-zb-border rounded-full flex items-center justify-center">
                <span className="text-xs text-zb-text-tertiary">3</span>
              </div>
              <span className="text-sm text-zb-text-secondary">优化兴趣班组合</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-zb-border rounded-full flex items-center justify-center">
                <span className="text-xs text-zb-text-tertiary">4</span>
              </div>
              <span className="text-sm text-zb-text-secondary">设置月度储蓄计划</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="px-5 pb-6">
        <p className="text-center text-sm text-zb-text-secondary italic">
          "把孩子的未来，拆成今天能做的计划"
        </p>
      </div>
    </div>
  )
}
