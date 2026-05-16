import React from 'react'
import { ChevronRight, Shield, Bell, Baby, MapPin, Wallet, Home, GraduationCap, HelpCircle, FileText, CheckCircle, BarChart3, Calendar, Lightbulb } from 'lucide-react'
import type { PageType } from '../App'

interface Props {
  navigateTo: (page: PageType) => void
  goBack: () => void
}

export default function DiagnosisPage({ navigateTo }: Props) {
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
            <span className="text-sm text-zb-text-secondary">3分钟家庭财务初诊</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-zb-text-tertiary">
            <Shield size={14} />
            <span>数据安全保障中</span>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-zb-red text-white flex items-center justify-center text-sm font-medium">
              <CheckCircle size={16} />
            </div>
            <span className="text-xs text-zb-text-secondary">基本信息</span>
          </div>
          <div className="flex-1 h-0.5 bg-zb-red mx-2"></div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-zb-red text-white flex items-center justify-center text-sm font-medium">2</div>
            <span className="text-xs text-zb-text-secondary">家庭情况</span>
          </div>
          <div className="flex-1 h-0.5 bg-zb-border mx-2"></div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-zb-border text-zb-text-tertiary flex items-center justify-center text-sm font-medium">3</div>
            <span className="text-xs text-zb-text-tertiary">收支与负债</span>
          </div>
          <div className="flex-1 h-0.5 bg-zb-border mx-2"></div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-zb-border text-zb-text-tertiary flex items-center justify-center text-sm font-medium">4</div>
            <span className="text-xs text-zb-text-tertiary">担忧与目标</span>
          </div>
        </div>
      </div>

      {/* AI Greeting */}
      <div className="px-5 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-card">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z"/>
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-zb-text">早安，我是<span className="text-zb-red">招小贝</span></h2>
              <p className="text-sm text-zb-text-secondary mt-1">为更准确地评估，想先了解您家的一些情况～</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Questions */}
      <div className="px-5 space-y-4 mb-6">
        {/* Question 1 */}
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <Baby size={18} className="text-zb-red" />
            <span className="text-sm font-medium text-zb-text">1. 孩子年龄</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {['0-2岁', '3-5岁', '6-12岁', '13-15岁'].map((age, i) => (
              <button key={age} className={`px-4 py-2 rounded-full text-sm border ${i === 2 ? 'bg-zb-red text-white border-zb-red' : 'bg-white text-zb-text-secondary border-zb-border'}`}>
                {age}
              </button>
            ))}
          </div>
        </div>

        {/* Question 2 */}
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={18} className="text-zb-blue" />
            <span className="text-sm font-medium text-zb-text">2. 所在城市</span>
          </div>
          <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-zb-border text-sm text-zb-text-tertiary">
            <span>请选择所在城市</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Question 3 */}
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <Wallet size={18} className="text-zb-orange" />
            <span className="text-sm font-medium text-zb-text">3. 家庭月收入区间</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {['<1万', '1-2万', '2-3万', '3-5万', '>5万'].map((income, i) => (
              <button key={income} className={`px-4 py-2 rounded-full text-sm border ${i === 2 ? 'bg-zb-red text-white border-zb-red' : 'bg-white text-zb-text-secondary border-zb-border'}`}>
                {income}
              </button>
            ))}
          </div>
        </div>

        {/* Question 4 */}
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <Wallet size={18} className="text-zb-green" />
            <span className="text-sm font-medium text-zb-text">4. 每月育儿支出</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {['<1000元', '1000-3000元', '3000-6000元', '>6000元'].map((expense, i) => (
              <button key={expense} className={`px-4 py-2 rounded-full text-sm border ${i === 2 ? 'bg-zb-red text-white border-zb-red' : 'bg-white text-zb-text-secondary border-zb-border'}`}>
                {expense}
              </button>
            ))}
          </div>
        </div>

        {/* Question 5 */}
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <Home size={18} className="text-zb-purple" />
            <span className="text-sm font-medium text-zb-text">5. 有无房贷</span>
          </div>
          <div className="flex gap-2">
            {['有房贷', '无房贷'].map((hasLoan, i) => (
              <button key={hasLoan} className={`px-4 py-2 rounded-full text-sm border ${i === 0 ? 'bg-zb-red text-white border-zb-red' : 'bg-white text-zb-text-secondary border-zb-border'}`}>
                {hasLoan}
              </button>
            ))}
          </div>
        </div>

        {/* Question 6 */}
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap size={18} className="text-zb-teal" />
            <span className="text-sm font-medium text-zb-text">6. 是否已准备教育金</span>
          </div>
          <div className="flex gap-2">
            {['已准备', '还未准备'].map((prepared, i) => (
              <button key={prepared} className={`px-4 py-2 rounded-full text-sm border ${i === 1 ? 'bg-zb-red text-white border-zb-red' : 'bg-white text-zb-text-secondary border-zb-border'}`}>
                {prepared}
              </button>
            ))}
          </div>
        </div>

        {/* Question 7 */}
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle size={18} className="text-zb-orange" />
            <span className="text-sm font-medium text-zb-text">7. 目前最担心的问题</span>
          </div>
          <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-zb-border text-sm text-zb-text-tertiary">
            <span>请选择最担心的问题</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Report Preview */}
      <div className="px-5 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-card">
          <h3 className="text-base font-semibold text-zb-text mb-3">即将生成的初诊报告</h3>
          <p className="text-sm text-zb-text-secondary mb-4">为您产出一份专属的家庭财务初诊报告，包含：</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zb-red-light rounded-lg flex items-center justify-center">
                <FileText size={16} className="text-zb-red" />
              </div>
              <div>
                <p className="text-sm font-medium text-zb-text">家庭画像</p>
                <p className="text-xs text-zb-text-tertiary">全方位了解家庭财务现状</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zb-green-light rounded-lg flex items-center justify-center">
                <BarChart3 size={16} className="text-zb-green" />
              </div>
              <div>
                <p className="text-sm font-medium text-zb-text">财务健康分</p>
                <p className="text-xs text-zb-text-tertiary">综合评分与同城家庭对比</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zb-blue-light rounded-lg flex items-center justify-center">
                <Lightbulb size={16} className="text-zb-blue" />
              </div>
              <div>
                <p className="text-sm font-medium text-zb-text">本月建议</p>
                <p className="text-xs text-zb-text-tertiary">针对性优化建议与行动清单</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zb-orange-light rounded-lg flex items-center justify-center">
                <Calendar size={16} className="text-zb-orange" />
              </div>
              <div>
                <p className="text-sm font-medium text-zb-text">未来1年关键提醒</p>
                <p className="text-xs text-zb-text-tertiary">重要节点与规划提示</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="px-5 pb-8">
        <button 
          onClick={() => navigateTo('diagnosis-report')}
          className="w-full bg-zb-red text-white py-4 rounded-full text-base font-medium flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
        >
          生成初诊报告
          <ChevronRight size={20} />
        </button>
        <p className="text-center text-xs text-zb-text-tertiary mt-3 flex items-center justify-center gap-1">
          <Shield size={12} />
          您的数据仅用于初诊分析，严格保密
        </p>
      </div>
    </div>
  )
}
