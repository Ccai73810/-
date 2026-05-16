import React from 'react'
import { ChevronRight, Shield, Star, AlertTriangle, Lightbulb, Calendar, Target, Home, Heart } from 'lucide-react'
import type { PageType } from '../App'

interface Props {
  navigateTo: (page: PageType) => void
  goBack: () => void
}

export default function DiagnosisReportPage({ navigateTo, goBack }: Props) {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-5 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <button onClick={goBack} className="text-zb-text">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <span className="text-lg font-semibold text-zb-text">初诊报告</span>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Score Card */}
      <div className="px-5 mb-6">
        <div className="bg-white rounded-3xl p-6 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-zb-text-secondary mb-1">家庭画像</p>
              <h2 className="text-lg font-bold text-zb-text">小学投入型家庭</h2>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center">
              <Home size={28} className="text-zb-red" />
            </div>
          </div>
          
          <div className="border-t border-zb-border pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zb-text-secondary mb-1">财务健康分</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-zb-text">86</span>
                  <span className="text-sm text-zb-text-secondary">/ 100</span>
                </div>
              </div>
              <div className="flex gap-1">
                {[1,2,3,4].map(i => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
                <Star size={20} className="text-yellow-400" />
              </div>
            </div>
            <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[86%] bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
            </div>
            <p className="text-xs text-zb-text-tertiary mt-2">超过了 86% 的同龄家庭</p>
          </div>
        </div>
      </div>

      {/* Main Issue */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-5 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle size={20} className="text-zb-orange" />
            <h3 className="text-base font-semibold text-zb-text">最大问题</h3>
          </div>
          <p className="text-lg font-medium text-zb-text">兴趣班支出偏高</p>
          <p className="text-sm text-zb-text-secondary mt-2">本月兴趣班支出占育儿总支出的 52%，高于建议比例 35%</p>
        </div>
      </div>

      {/* Monthly Suggestion */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-5 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={20} className="text-zb-blue" />
            <h3 className="text-base font-semibold text-zb-text">本月建议</h3>
          </div>
          <div className="bg-zb-blue-light rounded-xl p-4">
            <p className="text-sm text-zb-text leading-relaxed">
              先复盘现有课程，不新增长期课包。建议观察孩子当前兴趣班的出勤率和兴趣度，再决定是否续费。
            </p>
          </div>
        </div>
      </div>

      {/* Future Reminders */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-5 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <Calendar size={20} className="text-zb-purple" />
            <h3 className="text-base font-semibold text-zb-text">未来一年关键提醒</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-zb-red rounded-full"></div>
              <span className="text-sm text-zb-text">9月：新学期兴趣班续费高峰期</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-zb-orange rounded-full"></div>
              <span className="text-sm text-zb-text">11月：双11教育产品促销季</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-zb-blue rounded-full"></div>
              <span className="text-sm text-zb-text">1月：年度教育金储备检视</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-zb-green rounded-full"></div>
              <span className="text-sm text-zb-text">3月：春季班报名决策期</span>
            </div>
          </div>
        </div>
      </div>

      {/* Education Gap */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl p-5 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <Target size={20} className="text-zb-teal" />
            <h3 className="text-base font-semibold text-zb-text">教育金初步缺口</h3>
          </div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs text-zb-text-tertiary">目标金额</p>
              <p className="text-lg font-bold text-zb-text">¥400,000</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-zb-text-tertiary">已储备</p>
              <p className="text-lg font-bold text-zb-green">¥128,000</p>
            </div>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[32%] bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
          </div>
          <p className="text-sm text-zb-text-secondary mt-2">还差 ¥272,000，建议每月储备 ¥3,200</p>
        </div>
      </div>

      {/* Insurance Suggestion */}
      <div className="px-5 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <Heart size={20} className="text-zb-red" />
            <h3 className="text-base font-semibold text-zb-text">保障初步建议</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zb-text">父母重疾保障</span>
              <span className="text-sm text-zb-orange font-medium">建议补充</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zb-text">孩子教育金保险</span>
              <span className="text-sm text-zb-green font-medium">已配置</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zb-text">家庭意外险</span>
              <span className="text-sm text-zb-green font-medium">已配置</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-8">
        <button 
          onClick={() => navigateTo('home')}
          className="w-full bg-zb-red text-white py-4 rounded-full text-base font-medium flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
        >
          进入首页
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
