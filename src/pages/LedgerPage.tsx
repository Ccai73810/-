import React from 'react'
import { ChevronRight, Plus, Camera, TrendingUp, TrendingDown, AlertTriangle, BookOpen, Heart } from 'lucide-react'
import type { PageType } from '../App'

interface Props {
  navigateTo: (page: PageType) => void
  goBack: () => void
}

export default function LedgerPage({ navigateTo }: Props) {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-5 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-zb-text">亲子成长账本</h1>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-card">
              <Camera size={20} className="text-zb-text" />
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-card">
              <Plus size={20} className="text-zb-text" />
            </button>
          </div>
        </div>
      </div>

      {/* Monthly Overview */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-3xl p-5 shadow-card">
          <p className="text-sm text-zb-text-secondary mb-2">本月育儿支出总览</p>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-4xl font-bold text-zb-text">¥5,260</span>
            <span className="text-sm text-zb-text-secondary">/ 预算 ¥6,000</span>
          </div>
          
          {/* Category Breakdown */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-zb-green-light rounded-xl p-3">
              <div className="flex items-center gap-1 mb-1">
                <div className="w-2 h-2 bg-zb-green rounded-full"></div>
                <span className="text-xs text-zb-text-secondary">必要支出</span>
              </div>
              <p className="text-lg font-bold text-zb-text">¥2,230</p>
              <p className="text-xs text-zb-green">42%</p>
            </div>
            <div className="bg-zb-blue-light rounded-xl p-3">
              <div className="flex items-center gap-1 mb-1">
                <div className="w-2 h-2 bg-zb-blue rounded-full"></div>
                <span className="text-xs text-zb-text-secondary">成长型支出</span>
              </div>
              <p className="text-lg font-bold text-zb-text">¥1,960</p>
              <p className="text-xs text-zb-blue">37%</p>
            </div>
            <div className="bg-zb-orange-light rounded-xl p-3">
              <div className="flex items-center gap-1 mb-1">
                <div className="w-2 h-2 bg-zb-orange rounded-full"></div>
                <span className="text-xs text-zb-text-secondary">焦虑型支出</span>
              </div>
              <p className="text-lg font-bold text-zb-text">¥680</p>
              <p className="text-xs text-zb-orange">13%</p>
            </div>
            <div className="bg-zb-red-light rounded-xl p-3">
              <div className="flex items-center gap-1 mb-1">
                <div className="w-2 h-2 bg-zb-red rounded-full"></div>
                <span className="text-xs text-zb-text-secondary">风险型支出</span>
              </div>
              <p className="text-lg font-bold text-zb-text">¥390</p>
              <p className="text-xs text-zb-red">8%</p>
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

      {/* Expense List */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-zb-text">支出明细</h3>
            <button className="text-sm text-zb-blue flex items-center gap-1">
              全部明细
              <ChevronRight size={14} />
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-zb-border">
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
            </div>
            
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

      {/* Growth Ledger Entry */}
      <div className="px-5 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={18} className="text-zb-green" />
            <h3 className="text-base font-semibold text-zb-text">成长账本</h3>
            <span className="text-xs text-zb-text-tertiary">与成长里程碑关联的支出</span>
          </div>
          <div className="bg-zb-green-light rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <TrendingUp size={24} className="text-zb-green" />
              </div>
              <div>
                <p className="text-sm font-medium text-zb-text">第一次完成10次篮球训练</p>
                <p className="text-xs text-zb-text-secondary">篮球课（周末班）</p>
                <p className="text-xs text-zb-text-tertiary">记录于 06-05</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-lg font-bold text-zb-green">¥680</p>
                <p className="text-xs text-zb-text-tertiary">为成长时刻</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="px-5 pb-6">
        <p className="text-center text-sm text-zb-text-secondary italic">
          "每一笔支出，都可以成为成长记录"
        </p>
      </div>
    </div>
  )
}
