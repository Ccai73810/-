import React from 'react'
import { ChevronRight, Send, User, Bot, Lightbulb } from 'lucide-react'
import type { PageType } from '../App'

interface Props {
  navigateTo: (page: PageType) => void
  goBack: () => void
}

export default function AdvisorPage({ navigateTo }: Props) {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-5 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-zb-text">AI顾问</h1>
            <p className="text-sm text-zb-text-secondary">专属家庭财务顾问，随时为你出谋划策</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
            <Bot size={20} className="text-white" />
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="px-5 mb-4">
        {/* User Question */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 bg-zb-orange-light rounded-full flex items-center justify-center flex-shrink-0">
            <User size={16} className="text-zb-orange" />
          </div>
          <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-card flex-1">
            <p className="text-sm text-zb-text leading-relaxed">
              我家孩子 8 岁，每年兴趣班花 3 万，算多吗？
            </p>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Bot size={16} className="text-white" />
          </div>
          <div className="bg-zb-blue-light rounded-2xl rounded-tl-none p-4 flex-1">
            <p className="text-sm text-zb-text leading-relaxed mb-3">
              根据同收入段、同年龄孩子的家庭数据对比，你家当前教育支出占比略高于相似家庭中位水平，属于<span className="text-zb-orange font-medium">中等偏上</span>。
            </p>
            <p className="text-sm text-zb-text leading-relaxed">
              建议先优化兴趣班组合，保留孩子真正喜欢且长期受益的课程，再考虑新增项目，让每一分钱都花在成长的关键处。
            </p>
          </div>
        </div>
      </div>

      {/* Family Profile Card */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={16} className="text-zb-blue" />
            <h3 className="text-sm font-semibold text-zb-text">基于你的家庭画像</h3>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <p className="text-xs text-zb-text-secondary mb-1">孩子年龄</p>
              <p className="text-lg font-bold text-zb-text">8 岁</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-zb-text-secondary mb-1">家庭年收入</p>
              <p className="text-lg font-bold text-zb-text">40 万</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-zb-text-secondary mb-1">教育支出占比</p>
              <p className="text-lg font-bold text-zb-text">18%</p>
              <span className="text-xs px-2 py-0.5 bg-zb-orange-light text-zb-orange rounded-full">偏高</span>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Questions */}
      <div className="px-5 mb-6">
        <h3 className="text-sm font-semibold text-zb-text mb-3">你可能还想问</h3>
        <div className="space-y-2">
          <button className="w-full bg-white rounded-xl p-3 shadow-card text-left flex items-center justify-between active:scale-95 transition-transform">
            <span className="text-sm text-zb-text">先买保险还是先存教育金？</span>
            <ChevronRight size={16} className="text-zb-text-tertiary" />
          </button>
          <button className="w-full bg-white rounded-xl p-3 shadow-card text-left flex items-center justify-between active:scale-95 transition-transform">
            <span className="text-sm text-zb-text">压岁钱怎么分配？</span>
            <ChevronRight size={16} className="text-zb-text-tertiary" />
          </button>
          <button className="w-full bg-white rounded-xl p-3 shadow-card text-left flex items-center justify-between active:scale-95 transition-transform">
            <span className="text-sm text-zb-text">这个课值不值得续费？</span>
            <ChevronRight size={16} className="text-zb-text-tertiary" />
          </button>
        </div>
      </div>

      {/* Input Area */}
      <div className="px-5 pb-6">
        <div className="bg-white rounded-full p-2 shadow-card flex items-center gap-2">
          <input 
            type="text" 
            placeholder="继续提问..." 
            className="flex-1 px-4 py-2 text-sm text-zb-text outline-none bg-transparent"
          />
          <button className="w-10 h-10 bg-zb-red rounded-full flex items-center justify-center">
            <Send size={18} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
