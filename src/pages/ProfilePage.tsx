import React from 'react'
import { ChevronRight, Shield, Heart, FileText, Settings, Lock, Bell, User, Star, Clock } from 'lucide-react'
import type { PageType } from '../App'

interface Props {
  navigateTo: (page: PageType) => void
  goBack: () => void
}

export default function ProfilePage({ navigateTo }: Props) {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-5 pt-12 pb-4">
        <h1 className="text-xl font-bold text-zb-text">我的</h1>
      </div>

      {/* Family Card */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-3xl p-5 shadow-card">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">宇</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-zb-text">小宇的家</h2>
              <p className="text-sm text-zb-text-secondary">当前画像：小学投入型家庭</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zb-red-light rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Heart size={14} className="text-zb-red" />
                <span className="text-xs text-zb-text-secondary">财务健康分</span>
              </div>
              <p className="text-2xl font-bold text-zb-text">86</p>
            </div>
            <div className="bg-zb-blue-light rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Clock size={14} className="text-zb-blue" />
                <span className="text-xs text-zb-text-secondary">已陪伴成长</span>
              </div>
              <p className="text-2xl font-bold text-zb-text">126 天</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-2xl shadow-card overflow-hidden">
          <button className="w-full flex items-center justify-between p-4 border-b border-zb-border text-left active:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zb-blue-light rounded-full flex items-center justify-center">
                <FileText size={16} className="text-zb-blue" />
              </div>
              <span className="text-sm text-zb-text">家庭档案</span>
            </div>
            <ChevronRight size={16} className="text-zb-text-tertiary" />
          </button>
          
          <button className="w-full flex items-center justify-between p-4 border-b border-zb-border text-left active:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zb-green-light rounded-full flex items-center justify-center">
                <User size={16} className="text-zb-green" />
              </div>
              <span className="text-sm text-zb-text">孩子信息</span>
            </div>
            <ChevronRight size={16} className="text-zb-text-tertiary" />
          </button>
          
          <button className="w-full flex items-center justify-between p-4 border-b border-zb-border text-left active:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zb-orange-light rounded-full flex items-center justify-center">
                <FileText size={16} className="text-zb-orange" />
              </div>
              <span className="text-sm text-zb-text">我的报告</span>
            </div>
            <ChevronRight size={16} className="text-zb-text-tertiary" />
          </button>
          
          <button className="w-full flex items-center justify-between p-4 border-b border-zb-border text-left active:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zb-purple-light rounded-full flex items-center justify-center">
                <Shield size={16} className="text-zb-purple" />
              </div>
              <span className="text-sm text-zb-text">账户与数据授权</span>
            </div>
            <ChevronRight size={16} className="text-zb-text-tertiary" />
          </button>
          
          <button className="w-full flex items-center justify-between p-4 border-b border-zb-border text-left active:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zb-teal-light rounded-full flex items-center justify-center">
                <Bell size={16} className="text-zb-teal" />
              </div>
              <span className="text-sm text-zb-text">提醒设置</span>
            </div>
            <ChevronRight size={16} className="text-zb-text-tertiary" />
          </button>
          
          <button className="w-full flex items-center justify-between p-4 border-b border-zb-border text-left active:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zb-red-light rounded-full flex items-center justify-center">
                <Lock size={16} className="text-zb-red" />
              </div>
              <span className="text-sm text-zb-text">隐私安全</span>
            </div>
            <ChevronRight size={16} className="text-zb-text-tertiary" />
          </button>
          
          <button className="w-full flex items-center justify-between p-4 text-left active:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Star size={16} className="text-gray-500" />
              </div>
              <span className="text-sm text-zb-text">AI 中立性说明</span>
            </div>
            <ChevronRight size={16} className="text-zb-text-tertiary" />
          </button>
        </div>
      </div>

      {/* Premium Entry */}
      <div className="px-5 mb-6">
        <button 
          onClick={() => navigateTo('premium')}
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-4 shadow-card text-left active:scale-95 transition-transform"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Star size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">高价值家庭专区</h3>
                <p className="text-sm text-white/80">全人教育与家庭财富协同</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-white" />
          </div>
        </button>
      </div>

      {/* Footer */}
      <div className="px-5 pb-6">
        <p className="text-center text-xs text-zb-text-tertiary flex items-center justify-center gap-1">
          <Shield size={12} />
          数据安全保障中，招贝守护您的隐私
        </p>
      </div>
    </div>
  )
}
