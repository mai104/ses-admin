import { useState, useEffect } from 'react';

const StatCard = ({ title, value, change, icon }) => {
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLang(localStorage.getItem('language') || 'en');
    };

    window.addEventListener('languageChange', handleLanguageChange);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6">
      <div className="flex items-start">
        {icon && (
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
            <img src={`/icons/${icon}.png`} alt="" className="w-6 h-6" />
          </div>
        )}
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
          <p className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{value}</p>
          {change && (
            <p className="text-xs mt-1 text-green-600 dark:text-green-400">
              <span className="font-bold">↑ {change}%</span> vs last month
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Overview = () => {
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('language') || 'en');
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'enabled'
  );

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLang(localStorage.getItem('language') || 'en');
    };

    const handleDarkModeChange = () => {
      setIsDarkMode(localStorage.getItem('darkMode') === 'enabled');
    };

    window.addEventListener('languageChange', handleLanguageChange);
    window.addEventListener('darkModeChange', handleDarkModeChange);
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
      window.removeEventListener('darkModeChange', handleDarkModeChange);
    };
  }, []);

  const translations = {
    en: {
      title: 'Dashboard Overview',
      subtitle: "Welcome back, Abdelrahman! Here's what's happening with your education platform.",
      stats: {
        students: 'Total Students',
        teachers: 'Active Teachers',
        courses: 'Total Courses',
        revenue: 'Monthly Revenue',
        completion: 'Completion Rate',
        satisfaction: 'Satisfaction'
      },
      sections: {
        activity: 'Recent Activity',
        performance: 'Student Performance'
      }
    },
    ar: {
      title: 'نظرة عامة على لوحة المعلومات',
      subtitle: 'مرحبًا بعودتك، عبدالرحمن! إليك ما يحدث على منصة التعليم الخاصة بك.',
      stats: {
        students: 'إجمالي الطلاب',
        teachers: 'المعلمون النشطون',
        courses: 'إجمالي الدورات',
        revenue: 'الإيرادات الشهرية',
        completion: 'معدل الإكمال',
        satisfaction: 'مستوى الرضا'
      },
      sections: {
        activity: 'النشاط الحديث',
        performance: 'أداء الطلاب'
      }
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    return keys.reduce((obj, k) => obj[k], translations[currentLang]);
  };

  const stats = [
    { title: t('stats.students'), value: '1,234', change: '12', icon: 'student' },
    { title: t('stats.teachers'), value: '56', change: '8', icon: 'teacher' },
    { title: t('stats.courses'), value: '89', change: '15', icon: 'course' },
    { title: t('stats.revenue'), value: '$12,456', change: '7', icon: 'money' },
    { title: t('stats.completion'), value: '78%', change: '5', icon: 'check' },
    { title: t('stats.satisfaction'), value: '4.8/5', change: '4', icon: 'star' }
  ];

  const isRTL = currentLang === 'ar';

  return (
    <div 
      className="py-6" 
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="px-4 sm:px-0">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('title')}</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('subtitle')}</p>
      </div>

      {/* Stats Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {stats.map((stat, i) => (
          <StatCard
            key={i}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Additional Content */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            {t('sections.activity')}
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div 
                key={i} 
                className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">{i+1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white font-medium">
                    {isRTL ? 'تم إضافة طالب جديد' : 'New student added'}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {isRTL ? 'منذ 20 دقيقة' : '20 minutes ago'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Performance */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            {t('sections.performance')}
          </h2>
          <div className="space-y-4">
            {['Math', 'Science', 'Language'].map((subject, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">
                    {isRTL ? 
                      ['الرياضيات', 'العلوم', 'اللغة'][i] : 
                      subject
                    }
                  </span>
                  <span className="text-gray-900 dark:text-white font-medium">
                    {[78, 65, 82][i]}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${[78, 65, 82][i]}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;