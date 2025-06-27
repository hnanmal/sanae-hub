import React from 'react';
import AppCard from './AppCard';
import { apps } from './apps';

export default function AppListView() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {apps.map((app) => (
        <AppCard key={app.id} {...app} />
      ))}
    </div>
  );
}
