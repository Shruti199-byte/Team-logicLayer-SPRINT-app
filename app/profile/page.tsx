'use client';

import { Settings, MapPin, Link as LinkIcon, Calendar, Share2, MessageCircle } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { PostCard } from '@/components/post-card';
import { users, posts } from '@/lib/sample-data';
import { useState } from 'react';

export default function Profile() {
  const currentUser = users[0]; // Rajesh Kumar as the current profile
  const userPosts = posts.filter(post => post.userId === currentUser.id);
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <>
      <Navigation />

      <main className="max-w-3xl mx-auto pb-24">
        {/* Profile Header Background */}
        <div
          className="h-32 bg-gradient-to-r from-[#5e1104] to-[#7f8330]"
          style={{
            backgroundImage:
              'linear-gradient(135deg, #5e1104 0%, #7f8330 100%)',
          }}
        />

        {/* Profile Section */}
        <div className="px-4 pb-6">
          {/* Avatar */}
          <div className="flex items-start justify-between -mt-16 mb-4">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors mt-4">
              <Settings size={24} className="text-gray-700" />
            </button>
          </div>

          {/* User Info */}
          <h1 className="text-3xl font-bold text-gray-900 mb-1">{currentUser.name}</h1>
          <p className="text-gray-600 mb-4">{currentUser.username}</p>

          {/* Bio */}
          <p className="text-gray-700 mb-4">{currentUser.bio}</p>

          {/* Details */}
          <div className="grid grid-cols-2 gap-3 mb-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#5e1104]" />
              <span>{currentUser.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <LinkIcon size={16} className="text-[#5e1104]" />
              <span className="text-[#5e1104] cursor-pointer hover:underline">rajesh.dev</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#5e1104]" />
              <span>Joined {currentUser.joined}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50 rounded-lg p-4">
            <div>
              <p className="text-2xl font-bold text-gray-900">{currentUser.following}</p>
              <p className="text-gray-600 text-sm">Following</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{currentUser.followers}</p>
              <p className="text-gray-600 text-sm">Followers</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 bg-[#5e1104] text-white py-2 rounded-lg font-medium hover:bg-[#7a1a0d] transition-colors flex items-center justify-center gap-2">
              <MessageCircle size={18} />
              Message
            </button>
            <button className="flex-1 bg-[#f3d8ce] text-[#5e1104] py-2 rounded-lg font-medium hover:bg-[#e8c9b8] transition-colors flex items-center justify-center gap-2">
              <Share2 size={18} />
              Share
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 px-4 mb-6">
          <div className="flex gap-8">
            {['posts', 'saved', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 font-medium transition-colors capitalize ${
                  activeTab === tab
                    ? 'text-[#5e1104] border-b-2 border-[#5e1104]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Section */}
        <div className="px-4 space-y-4">
          {activeTab === 'posts' && userPosts.length > 0 ? (
            userPosts.map((post) => {
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
            })
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No posts yet. Start sharing with the community!</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
