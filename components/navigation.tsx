'use client';

import { Home, Search, MessageCircle, User, Plus } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Top Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Shoolini Connect</h1>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <span className="text-2xl">🔔</span>
          </button>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-between h-16">
          <Link
            href="/"
            className={`flex flex-col items-center justify-center h-full px-4 transition-colors ${
              isActive('/') 
                ? 'text-[#5e1104] border-b-2 border-[#5e1104]' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </Link>

          <Link
            href="/explore"
            className={`flex flex-col items-center justify-center h-full px-4 transition-colors ${
              isActive('/explore') 
                ? 'text-[#5e1104] border-b-2 border-[#5e1104]' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Search size={24} />
            <span className="text-xs mt-1">Explore</span>
          </Link>

          <button
            className="flex flex-col items-center justify-center text-white bg-[#5e1104] rounded-full w-12 h-12 -mt-6 hover:bg-[#7a1a0d] transition-colors shadow-lg"
          >
            <Plus size={24} />
          </button>

          <Link
            href="/messages"
            className={`flex flex-col items-center justify-center h-full px-4 transition-colors ${
              isActive('/messages') 
                ? 'text-[#5e1104] border-b-2 border-[#5e1104]' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <MessageCircle size={24} />
            <span className="text-xs mt-1">Messages</span>
          </Link>

          <Link
            href="/profile"
            className={`flex flex-col items-center justify-center h-full px-4 transition-colors ${
              isActive('/profile') 
                ? 'text-[#5e1104] border-b-2 border-[#5e1104]' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <User size={24} />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
