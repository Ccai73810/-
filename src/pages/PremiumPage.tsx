import React from 'react'
import { ChevronRight, ArrowLeft, Star, Globe, Plane, Heart, Briefcase, Calendar } from 'lucide-react'
import type { PageType } from '../App'

interface Props {
  navigateTo: (page: PageType) => void
  goBack: () => void
}

export default function PremiumPage({ goBack }: Props) {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-5 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <button onClick={goBack} className="text-zb-text">
            <ArrowLeft size={24} />
          </button>
          <span className="text-lg font-semibold text-zb-text">高价值家庭专区</span>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Hero Card */}
      <div className="px-5 mb-4">
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-5 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Star size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold">全人教育与家庭财富协同</h2>
              <p className="text-sm opacity-90">为高净值家庭定制</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed opacity-90">
            整合国际教育资源、跨境资金规划、高端医疗保障与家庭财富传承，为您的家庭提供全方位的成长支持。
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="px-5 space-y-3 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zb-blue-light rounded-full flex items-center justify-center">
              <Globe size={20} className="text-zb-blue" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-zb-text">国际教育金规划</h3>
              <p className="text-xs text-zb-text-secondary">覆盖海外留学全阶段费用规划</p>
            </div>
            <ChevronRight size={16} className="text-zb-text-tertiary" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zb-green-light rounded-full flex items-center justify-center">
              <Plane size={20} className="text-zb-green" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-zb-text">跨境资金准备</h3>
              <p className="text-xs text-zb-text-secondary">外汇规划与跨境资产配置</p>
            </div>
            <ChevronRight size={16} className="text-zb-text-tertiary" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zb-red-light rounded-full flex items-center justify-center">
              <Heart size={20} className="text-zb-red" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-zb-text">高端医疗保障</h3>
              <p className="text-xs text-zb-text-secondary">全球医疗资源与高端医疗保险</p>
            </div>
            <ChevronRight size={16} className="text-zb-text-tertiary" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zb-purple-light rounded-full flex items-center justify-center">
              <Briefcase size={20} className="text-zb-purple" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-zb-text">家庭财富传承</h3>
              <p className="text-xs text-zb-text-secondary">信托规划与代际财富传递</p>
            </div>
            <ChevronRight size={16} className="text-zb-text-tertiary" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zb-orange-light rounded-full flex items-center justify-center">
              <Calendar size={20} className="text-zb-orange" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-zb-text">顾问预约</h3>
              <p className="text-xs text-zb-text-secondary">一对一专属财富顾问服务</p>
            </div>
            <ChevronRight size={16} className="text-zb-text-tertiary" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-8">
        <button 
          className="w-full bg-zb-red text-white py-4 rounded-full text-base font-medium flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
        >
          预约财富顾问
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
