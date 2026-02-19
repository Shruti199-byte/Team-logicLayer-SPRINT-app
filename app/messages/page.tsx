'use client';

import { Search, MessageCircle } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { users } from '@/lib/sample-data';

export default function Messages() {
  return (
    <>
      <Navigation />

      <main className="max-w-3xl mx-auto px-4 py-6 pb-24">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Messages</h2>
          <p className="text-gray-600">Stay connected with your campus community</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e1104] focus:border-transparent"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="space-y-2">
          {users.slice(1).map((user) => (
            <button
              key={user.id}
              className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-200"
                />
                <div>
                  <p className="font-semibold text-gray-900">{user.name}</p>
                  <p className="text-gray-600 text-sm">{user.username}</p>
                </div>
              </div>
              <MessageCircle size={20} className="text-gray-400" />
            </button>
          ))}
        </div>

        {/* Empty state hint */}
        {users.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-600">No conversations yet</p>
          </div>
        )}
      </main>
    </>
  );
}
