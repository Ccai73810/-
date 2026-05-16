import React from 'react'
import { ChevronRight, Shield, Bell, Heart, GraduationCap, MessageSquare, PiggyBank, Target, TrendingUp, TrendingDown } from 'lucide-react'
import type { PageType } from '../App'

interface Props {
  navigateTo: (page: PageType) => void
  goBack: () => void
}

export default function HomePage({ navigateTo }: Props) {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-5 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18ZM6 12C6 10.9 5.1 10 4 10C2.9 10 2 10.9 2 12C2 13.1 2.9 14 4 14C5.1 14 6 13.1 6 12ZM20 10C18.9 10 18 10.9 18 12C18 13.1 18.9 14 20 14C21.1 14 22 13.1 22 12C22 10.9 21.1 10 20 10ZM16.24 17.24L14.83 15.83C14.09 16.57 13.11 17 12 17C9.79 17 8 15.21 8 13C8 11.89 8.43 10.91 9.17 10.17L7.76 8.76C6.67 9.85 6 11.35 6 13C6 16.31 8.69 19 12 19C13.65 19 15.15 18.33 16.24 17.24ZM15.72 7.3L15.89 7.47C16.09 7.67 16.09 8 15.89 8.2L14.83 9.26C14.63 9.46 14.3 9.46 14.1 9.26L13.93 9.09C13.73 8.89 13.73 8.56 13.93 8.36L14.99 7.3C15.19 7.1 15.52 7.1 15.72 7.3Z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-zb-red">招贝</span>
            <span className="text-sm text-zb-text-secondary">先安心，再生财</span>
          </div>
          <button className="relative">
            <Bell size={22} className="text-zb-text" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-zb-red rounded-full"></div>
          </button>
        </div>
      </div>

      {/* Greeting */}
      <div className="px-5 mb-6">
        <h1 className="text-2xl font-bold text-zb-text">早安，</h1>
        <p className="text-base text-zb-text-secondary mt-1">今天也一起守护<span className="text-zb-red font-medium">小宇</span>的成长</p>
      </div>

      {/* Health Score Card */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-3xl p-5 shadow-card">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Heart size={18} className="text-zb-red" />
              <span className="text-sm font-medium text-zb-text">家庭财务健康分</span>
            </div>
            <ChevronRight size={18} className="text-zb-text-tertiary" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-zb-text">86</span>
                <span className="text-sm text-zb-text-secondary">分 / 优秀</span>
              </div>
              <p className="text-xs text-zb-text-tertiary mt-1">超过了 86% 的同龄家庭</p>
            </div>
            <div className="w-20 h-20 relative">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E8F5E9" strokeWidth="3" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4CAF50" strokeWidth="3" strokeDasharray="86, 100" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield size={20} className="text-zb-green" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Cards */}
      <div className="px-5 grid grid-cols-2 gap-3 mb-4">
        {/* Monthly Expense */}
        <button onClick={() => navigateTo('expense-detail')} className="bg-white rounded-2xl p-4 shadow-card text-left active:scale-95 transition-transform">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              <PiggyBank size={16} className="text-zb-orange" />
              <span className="text-xs text-zb-text-secondary">本月育儿支出</span>
            </div>
            <ChevronRight size={14} className="text-zb-text-tertiary" />
          </div>
          <p className="text-xl font-bold text-zb-text">¥5,260</p>
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="text-[10px] px-2 py-0.5 bg-zb-green-light text-zb-green rounded-full">必要 42%</span>
            <span className="text-[10px] px-2 py-0.5 bg-zb-blue-light text-zb-blue rounded-full">成长 37%</span>
          </div>
        </button>

        {/* Education Progress */}
        <button onClick={() => navigateTo('education')} className="bg-white rounded-2xl p-4 shadow-card text-left active:scale-95 transition-transform">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              <GraduationCap size={16} className="text-zb-blue" />
              <span className="text-xs text-zb-text-secondary">教育金完成率</span>
            </div>
            <ChevronRight size={14} className="text-zb-text-tertiary" />
          </div>
          <p className="text-xl font-bold text-zb-text">32%</p>
          <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[32%] bg-zb-blue rounded-full"></div>
          </div>
          <p className="text-[10px] text-zb-text-tertiary mt-1">已储备 ¥128,000</p>
        </button>

        {/* Insurance */}
        <button onClick={() => navigateTo('insurance')} className="bg-white rounded-2xl p-4 shadow-card text-left active:scale-95 transition-transform">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              <Shield size={16} className="text-zb-teal" />
              <span className="text-xs text-zb-text-secondary">保障完整度</span>
            </div>
            <ChevronRight size={14} className="text-zb-text-tertiary" />
          </div>
          <p className="text-xl font-bold text-zb-text">78%</p>
          <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[78%] bg-zb-teal rounded-full"></div>
          </div>
          <p className="text-[10px] text-zb-text-tertiary mt-1">已配置 4 项保障</p>
        </button>

        {/* AI Suggestion */}
        <button onClick={() => navigateTo('advisor')} className="bg-white rounded-2xl p-4 shadow-card text-left active:scale-95 transition-transform">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              <MessageSquare size={16} className="text-zb-purple" />
              <span className="text-xs text-zb-text-secondary">AI 今日建议</span>
            </div>
            <ChevronRight size={14} className="text-zb-text-tertiary" />
          </div>
          <p className="text-sm text-zb-text leading-snug">兴趣班支出接近预算上限，建议先观望 2 周</p>
          <p className="text-xs text-zb-blue mt-2">查看详情</p>
        </button>

        {/* Allowance */}
        <button onClick={() => navigateTo('allowance')} className="bg-white rounded-2xl p-4 shadow-card text-left active:scale-95 transition-transform">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              <PiggyBank size={16} className="text-zb-red" />
              <span className="text-xs text-zb-text-secondary">孩子零花钱 · 小宇</span>
            </div>
            <ChevronRight size={14} className="text-zb-text-tertiary" />
          </div>
          <p className="text-xl font-bold text-zb-text">¥420</p>
          <p className="text-xs text-zb-text-tertiary mt-1">本月可用</p>
          <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[70%] bg-zb-red rounded-full"></div>
          </div>
          <p className="text-[10px] text-zb-text-tertiary mt-1">本月已用 ¥180 / 预算 ¥600</p>
        </button>

        {/* Growth Goals */}
        <button onClick={() => navigateTo('planning')} className="bg-white rounded-2xl p-4 shadow-card text-left active:scale-95 transition-transform">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              <Target size={16} className="text-zb-orange" />
              <span className="text-xs text-zb-text-secondary">成长目标</span>
            </div>
            <ChevronRight size={14} className="text-zb-text-tertiary" />
          </div>
          <p className="text-sm text-zb-text-secondary">为小宇准备的 3 个目标</p>
          <div className="flex gap-2 mt-2">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-zb-blue-light rounded-full flex items-center justify-center">
                <GraduationCap size={14} className="text-zb-blue" />
              </div>
              <span className="text-[10px] text-zb-text-secondary mt-1">教育金</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-zb-green-light rounded-full flex items-center justify-center">
                <TrendingUp size={14} className="text-zb-green" />
              </div>
              <span className="text-[10px] text-zb-text-secondary mt-1">留学基金</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-zb-orange-light rounded-full flex items-center justify-center">
                <Heart size={14} className="text-zb-orange" />
              </div>
              <span className="text-[10px] text-zb-text-secondary mt-1">兴趣发展</span>
            </div>
          </div>
        </button>
      </div>

      {/* CTA Button */}
      <div className="px-5 pb-6">
        <button 
          onClick={() => navigateTo('diagnosis')}
          className="w-full bg-zb-red text-white py-4 rounded-full text-base font-medium flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
        >
          查看完整初诊
          <ChevronRight size={20} />
        </button>
        <p className="text-center text-xs text-zb-text-tertiary mt-3 flex items-center justify-center gap-1">
          <Shield size={12} />
          数据安全保障中，招贝守护您的隐私
        </p>
      </div>
    </div>
  )
}
