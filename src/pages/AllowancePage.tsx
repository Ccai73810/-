import React from 'react'
import { ChevronRight, ArrowLeft, PiggyBank, Target, Gift, BookOpen, Lightbulb } from 'lucide-react'
import type { PageType } from '../App'

interface Props {
  navigateTo: (page: PageType) => void
  goBack: () => void
}

export default function AllowancePage({ goBack }: Props) {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-5 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <button onClick={goBack} className="text-zb-text">
            <ArrowLeft size={24} />
          </button>
          <span className="text-lg font-semibold text-zb-text">零花钱与财商</span>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Allowance Card */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-3xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-zb-red-light rounded-full flex items-center justify-center">
              <PiggyBank size={24} className="text-zb-red" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-zb-text">小宇本月可用零花钱</h2>
              <p className="text-sm text-zb-text-secondary">培养财商从小开始</p>
            </div>
          </div>
          
          <div className="text-center mb-4">
            <p className="text-4xl font-bold text-zb-text">¥420</p>
            <p className="text-sm text-zb-text-secondary mt-1">本月可用</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zb-red-light rounded-xl p-3 text-center">
              <p className="text-xs text-zb-text-secondary mb-1">本月已用</p>
              <p className="text-lg font-bold text-zb-red">¥180</p>
            </div>
            <div className="bg-zb-green-light rounded-xl p-3 text-center">
              <p className="text-xs text-zb-text-secondary mb-1">预算</p>
              <p className="text-lg font-bold text-zb-green">¥600</p>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-zb-text">使用进度</span>
              <span className="text-sm text-zb-text">30%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[30%] bg-zb-red rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Savings Goal */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <Target size={18} className="text-zb-blue" />
            <h3 className="text-base font-semibold text-zb-text">储蓄目标</h3>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-zb-text">想买的新自行车</span>
            <span className="text-sm text-zb-text">¥800</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
            <div className="h-full w-[35%] bg-zb-blue rounded-full"></div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-zb-text-secondary">已存 ¥280</span>
            <span className="text-xs text-zb-text-secondary">还差 ¥520</span>
          </div>
        </div>
      </div>

      {/* Wish List */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <Gift size={18} className="text-zb-purple" />
            <h3 className="text-base font-semibold text-zb-text">愿望清单</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-zb-red rounded-full"></div>
                <span className="text-sm text-zb-text">乐高积木套装</span>
              </div>
              <span className="text-sm text-zb-text">¥299</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-zb-orange rounded-full"></div>
                <span className="text-sm text-zb-text">科学实验盒</span>
              </div>
              <span className="text-sm text-zb-text">¥159</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-zb-blue rounded-full"></div>
                <span className="text-sm text-zb-text">绘本（3本）</span>
              </div>
              <span className="text-sm text-zb-text">¥89</span>
            </div>
          </div>
        </div>
      </div>

      {/* Red Packet Allocation */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <Gift size={18} className="text-zb-red" />
            <h3 className="text-base font-semibold text-zb-text">压岁钱分配</h3>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="w-10 h-10 bg-zb-blue-light rounded-full flex items-center justify-center mx-auto mb-2">
                <PiggyBank size={18} className="text-zb-blue" />
              </div>
              <p className="text-xs text-zb-text-secondary">储蓄</p>
              <p className="text-sm font-bold text-zb-text">50%</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-zb-green-light rounded-full flex items-center justify-center mx-auto mb-2">
                <Target size={18} className="text-zb-green" />
              </div>
              <p className="text-xs text-zb-text-secondary">目标</p>
              <p className="text-sm font-bold text-zb-text">30%</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-zb-orange-light rounded-full flex items-center justify-center mx-auto mb-2">
                <Gift size={18} className="text-zb-orange" />
              </div>
              <p className="text-xs text-zb-text-secondary">零花</p>
              <p className="text-sm font-bold text-zb-text">20%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Tasks */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={18} className="text-zb-teal" />
            <h3 className="text-base font-semibold text-zb-text">财商小任务</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-zb-green rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span className="text-sm text-zb-text">记录本周支出</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-zb-border rounded-full flex items-center justify-center">
                <span className="text-xs text-zb-text-tertiary">2</span>
              </div>
              <span className="text-sm text-zb-text-secondary">区分需要和想要</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-zb-border rounded-full flex items-center justify-center">
                <span className="text-xs text-zb-text-tertiary">3</span>
              </div>
              <span className="text-sm text-zb-text-secondary">计算储蓄进度</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Explanation */}
      <div className="px-5 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-zb-blue-light rounded-full flex items-center justify-center">
              <Lightbulb size={16} className="text-zb-blue" />
            </div>
            <h3 className="text-base font-semibold text-zb-text">AI 用孩子的话解释</h3>
          </div>
          <div className="bg-zb-blue-light rounded-xl p-4">
            <p className="text-sm text-zb-text leading-relaxed">
              "小宇，预算就像你游戏里的能量条，用完了这周就不能买新东西了。储蓄就像存经验值，攒够了就能换大奖品！"
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-8">
        <button 
          className="w-full bg-zb-red text-white py-4 rounded-full text-base font-medium flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
        >
          设置本月零花钱规则
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
