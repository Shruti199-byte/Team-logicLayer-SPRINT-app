'use client';

import { Search, TrendingUp, Users } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { categories, trendingTags, topContributors } from '@/lib/sample-data';

const categoryIcons = {
  'Freelancers': '👤',
  'Study Groups': '📚',
  'Social Events': '🎉',
  'Lost & Found': '🔍',
};

const colorMap = {
  'champagne-pink': 'bg-[#f3d8ce] text-[#2d2d2d] hover:shadow-lg',
  'blood-red': 'bg-[#5e1104] text-white hover:shadow-lg',
  'moss-green': 'bg-[#7f8330] text-white hover:shadow-lg',
  'tan': 'bg-[#dlc791] text-[#2d2d2d] hover:shadow-lg',
};

export default function Explore() {
  return (
    <>
      <Navigation />

      <main className="max-w-3xl mx-auto px-4 py-6 pb-24">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore Campus</h2>
          <p className="text-gray-600">Discover opportunities, events, and connect with your community</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for help, people, or events..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e1104] focus:border-transparent"
            />
          </div>
        </div>

        {/* Trending Now Section */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-[#5e1104]" size={24} />
            <h3 className="text-2xl font-bold text-gray-900">Trending Now</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingTags.map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 bg-[#7f8330] text-white rounded-full text-sm font-medium hover:bg-[#6b7029] transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* Browse Categories Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Browse Categories</h3>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`p-6 rounded-xl transition-all transform hover:scale-105 ${
                  colorMap[category.color as keyof typeof colorMap]
                }`}
              >
                <div className="text-4xl mb-3">
                  {categoryIcons[category.title as keyof typeof categoryIcons]}
                </div>
                <h4 className="text-lg font-bold text-left">{category.title}</h4>
              </button>
            ))}
          </div>
        </section>

        {/* Top Contributors Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Users className="text-[#5e1104]" size={24} />
            <h3 className="text-2xl font-bold text-gray-900">Top Contributors</h3>
          </div>
          <div className="space-y-3">
            {topContributors.map((contributor) => (
              <div
                key={contributor.id}
                className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={contributor.avatar}
                    alt={contributor.name}
                    className="w-12 h-12 rounded-full border-2 border-gray-200"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{contributor.name}</p>
                    <p className="text-gray-500 text-sm">{contributor.username}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-[#f3d8ce] text-[#5e1104] rounded-full font-medium hover:bg-[#e8c9b8] transition-colors">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
