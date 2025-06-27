import React from 'react';
import AppListView from './features/AppList/AppListView';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">🚀 플랜트 건축설계팀 사내앱 포탈</h1>
        <p className="text-gray-500 mt-2">자주 사용하는 사내 도구들을 한 곳에서</p>
      </header>

      <main>
        <AppListView />
      </main>
    </div>
  );
}
