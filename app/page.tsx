'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { PostCard } from '@/components/post-card';
import { posts, users } from '@/lib/sample-data';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Requests', 'Offers', 'Questions'];

  // Map post types to filter
  const filteredPosts = activeFilter === 'All' 
    ? posts 
    : posts.filter(post => {
        const typeMap = {
          'Requests': 'request',
          'Offers': 'offer',
          'Questions': 'question',
        };
        return post.type === typeMap[activeFilter as keyof typeof typeMap];
      });

  return (
    <>
      <Navigation />
      
      <main className="max-w-3xl mx-auto px-4 py-6 pb-24">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Campus Connect</h2>
          <p className="text-gray-600">Share, request, and explore opportunities at Shoolini University</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search posts, tags, or people..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e1104] focus:border-transparent"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-[#5e1104] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Posts Feed */}
        <div className="space-y-4">
          {filteredPosts.map((post) => {
            const user = users.find(u => u.id === post.userId);
            return (
              <PostCard
                key={post.id}
                name={user?.name || 'Unknown'}
                username={user?.username || '@unknown'}
                avatar={user?.avatar || ''}
                timeAgo={post.timeAgo}
                type={post.type}
                title={post.title}
                description={post.description}
                tags={post.tags}
                likes={post.likes}
                comments={post.comments}
                shares={post.shares}
                color={post.color as any}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
