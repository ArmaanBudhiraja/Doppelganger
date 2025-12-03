import { Outlet } from 'react-router-dom';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Navbar } from '@/components/Navbar';

export const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto p-6 bg-dots-pattern">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
