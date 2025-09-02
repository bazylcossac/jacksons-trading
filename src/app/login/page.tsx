"use client";

import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  const { t, i18n } = useTranslation('common');

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'pl' : 'en');
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{t('hello')}</h1>
      <p className="mb-4">{t('welcome')}</p>
      <button 
        onClick={toggleLanguage}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {t('login')} - {i18n.language.toUpperCase()}
      </button>
    </div>
  );
};

export default LoginPage;
