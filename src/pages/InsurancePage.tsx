import React from 'react'
import { ChevronRight, ArrowLeft, Shield, Heart, AlertTriangle, Lightbulb } from 'lucide-react'
import type { PageType } from '../App'

interface Props {
  navigateTo: (page: PageType) => void
  goBack: () => void
}

export default function InsurancePage({ goBack }: Props) {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-5 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <button onClick={goBack} className="text-zb-text">
            <ArrowLeft size={24} />
          </button>
          <span className="text-lg font-semibold text-zb-text">家庭保障</span>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Score Card */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-3xl p-5 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-zb-text-secondary mb-1">家庭保障完整度</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-zb-text">78</span>
                <span className="text-sm text-zb-text-secondary">%</span>
              </div>
            </div>
            <div className="w-20 h-20 relative">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E8F5E9" strokeWidth="3" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4CAF50" strokeWidth="3" strokeDasharray="78, 100" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield size={20} className="text-zb-green" />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zb-text">父母保障</span>
              <span className="text-sm text-zb-orange font-medium">偏弱</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[60%] bg-zb-orange rounded-full"></div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-sm text-zb-text">孩子保障</span>
              <span className="text-sm text-zb-green font-medium">较完整</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[90%] bg-zb-green rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance Types */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <h3 className="text-base font-semibold text-zb-text mb-4">保障配置详情</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zb-green-light rounded-full flex items-center justify-center">
                  <Heart size={18} className="text-zb-green" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zb-text">医疗保障</p>
                  <p className="text-xs text-zb-text-secondary">已配置</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-zb-text">¥200万</p>
                <span className="text-xs px-2 py-0.5 bg-zb-green-light text-zb-green rounded-full">充足</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zb-orange-light rounded-full flex items-center justify-center">
                  <AlertTriangle size={18} className="text-zb-orange" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zb-text">重疾保障</p>
                  <p className="text-xs text-zb-text-secondary">父母待补充</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-zb-text">¥50万</p>
                <span className="text-xs px-2 py-0.5 bg-zb-orange-light text-zb-orange rounded-full">不足</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zb-green-light rounded-full flex items-center justify-center">
                  <Shield size={18} className="text-zb-green" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zb-text">意外保障</p>
                  <p className="text-xs text-zb-text-secondary">已配置</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-zb-text">¥100万</p>
                <span className="text-xs px-2 py-0.5 bg-zb-green-light text-zb-green rounded-full">充足</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zb-red-light rounded-full flex items-center justify-center">
                  <Heart size={18} className="text-zb-red" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zb-text">教育金中断风险</p>
                  <p className="text-xs text-zb-text-secondary">需关注</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-zb-text">中风险</p>
                <span className="text-xs px-2 py-0.5 bg-zb-red-light text-zb-red rounded-full">需关注</span>
              </div>
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
            <h3 className="text-base font-semibold text-zb-text">AI 建议</h3>
          </div>
          <div className="bg-zb-blue-light rounded-xl p-4">
            <p className="text-sm text-zb-text leading-relaxed">
              优先补充父母保障，避免孩子教育金计划中断。建议父母配置重疾险和寿险，确保家庭收入稳定性。
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-8">
        <button 
          className="w-full bg-zb-red text-white py-4 rounded-full text-base font-medium flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
        >
          查看保障缺口
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
