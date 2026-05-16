import React, { useState } from 'react'
import { Home, BookOpen, Calendar, MessageCircle, User } from 'lucide-react'
import HomePage from './pages/HomePage'
import LedgerPage from './pages/LedgerPage'
import PlanningPage from './pages/PlanningPage'
import AdvisorPage from './pages/AdvisorPage'
import ProfilePage from './pages/ProfilePage'
import DiagnosisPage from './pages/DiagnosisPage'
import DiagnosisReportPage from './pages/DiagnosisReportPage'
import ExpenseDetailPage from './pages/ExpenseDetailPage'
import EducationPage from './pages/EducationPage'
import InsurancePage from './pages/InsurancePage'
import ClassAnalysisPage from './pages/ClassAnalysisPage'
import AllowancePage from './pages/AllowancePage'
import PremiumPage from './pages/PremiumPage'

export type PageType = 
  | 'home' | 'ledger' | 'planning' | 'advisor' | 'profile'
  | 'diagnosis' | 'diagnosis-report' | 'expense-detail' | 'education'
  | 'insurance' | 'class-analysis' | 'allowance' | 'premium'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('diagnosis')
  const [pageHistory, setPageHistory] = useState<PageType[]>(['diagnosis'])

  const navigateTo = (page: PageType) => {
    setCurrentPage(page)
    setPageHistory(prev => [...prev, page])
  }

  const goBack = () => {
    if (pageHistory.length > 1) {
      const newHistory = [...pageHistory]
      newHistory.pop()
      const previousPage = newHistory[newHistory.length - 1]
      setCurrentPage(previousPage)
      setPageHistory(newHistory)
    }
  }

  const renderPage = () => {
    const props = { navigateTo, goBack }
    switch (currentPage) {
      case 'home': return <HomePage {...props} />
      case 'ledger': return <LedgerPage {...props} />
      case 'planning': return <PlanningPage {...props} />
      case 'advisor': return <AdvisorPage {...props} />
      case 'profile': return <ProfilePage {...props} />
      case 'diagnosis': return <DiagnosisPage {...props} />
      case 'diagnosis-report': return <DiagnosisReportPage {...props} />
      case 'expense-detail': return <ExpenseDetailPage {...props} />
      case 'education': return <EducationPage {...props} />
      case 'insurance': return <InsurancePage {...props} />
      case 'class-analysis': return <ClassAnalysisPage {...props} />
      case 'allowance': return <AllowancePage {...props} />
      case 'premium': return <PremiumPage {...props} />
      default: return <HomePage {...props} />
    }
  }

  const showBottomNav = ['home', 'ledger', 'planning', 'advisor', 'profile'].includes(currentPage)

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-[430px] bg-zb-bg min-h-screen relative shadow-2xl">
        <div className="pb-20">
          {renderPage()}
        </div>
        
        {showBottomNav && (
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-zb-border px-6 py-2 z-50">
            <div className="flex justify-between items-center">
              <button onClick={() => navigateTo('home')} className={`flex flex-col items-center gap-1 ${currentPage === 'home' ? 'text-zb-red' : 'text-zb-text-tertiary'}`}>
                <Home size={22} strokeWidth={currentPage === 'home' ? 2.5 : 2} />
                <span className="text-[10px]">首页</span>
              </button>
              <button onClick={() => navigateTo('ledger')} className={`flex flex-col items-center gap-1 ${currentPage === 'ledger' ? 'text-zb-red' : 'text-zb-text-tertiary'}`}>
                <BookOpen size={22} strokeWidth={currentPage === 'ledger' ? 2.5 : 2} />
                <span className="text-[10px]">账本</span>
              </button>
              <button onClick={() => navigateTo('planning')} className={`flex flex-col items-center gap-1 ${currentPage === 'planning' ? 'text-zb-red' : 'text-zb-text-tertiary'}`}>
                <Calendar size={22} strokeWidth={currentPage === 'planning' ? 2.5 : 2} />
                <span className="text-[10px]">规划</span>
              </button>
              <button onClick={() => navigateTo('advisor')} className={`flex flex-col items-center gap-1 ${currentPage === 'advisor' ? 'text-zb-red' : 'text-zb-text-tertiary'}`}>
                <MessageCircle size={22} strokeWidth={currentPage === 'advisor' ? 2.5 : 2} />
                <span className="text-[10px]">顾问</span>
              </button>
              <button onClick={() => navigateTo('profile')} className={`flex flex-col items-center gap-1 ${currentPage === 'profile' ? 'text-zb-red' : 'text-zb-text-tertiary'}`}>
                <User size={22} strokeWidth={currentPage === 'profile' ? 2.5 : 2} />
                <span className="text-[10px]">我的</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
