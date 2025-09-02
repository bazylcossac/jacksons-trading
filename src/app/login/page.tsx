"use client";

import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{t('test:hello')}</h1>
      <p className="mb-4">{t('test:welcome')}</p>
      
    </div>
  );
};

export default LoginPage;
