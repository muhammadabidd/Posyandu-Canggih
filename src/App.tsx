/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendance';
import Directory from './components/Directory';
import Registration from './components/Registration';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isAdding, setIsAdding] = useState(false);

  const renderView = () => {
    if (isAdding) {
      return (
        <motion.div
          key="registration"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <Registration onBack={() => setIsAdding(false)} />
        </motion.div>
      );
    }

    switch (currentView) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <Dashboard />
          </motion.div>
        );
      case 'absensi':
        return (
          <motion.div
            key="absensi"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <Attendance />
          </motion.div>
        );
      case 'daftar':
        return (
          <motion.div
            key="daftar"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <Directory onAdd={() => setIsAdding(true)} />
          </motion.div>
        );
      case 'pengaturan':
        return (
          <div className="p-8 text-center text-on-surface-variant italic py-20">
            Halaman pengaturan sedang dalam pengembangan.
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faf8] font-sans">
      <Sidebar 
        currentView={currentView} 
        setView={(view) => {
          setCurrentView(view);
          setIsAdding(false);
        }} 
      />
      
      <div className="ml-64 min-h-screen flex flex-col">
        <Topbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            {renderView()}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
