'use client';

import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { useState } from 'react';

interface PostCardProps {
  name: string;
  username: string;
  avatar: string;
  timeAgo: string;
  type: 'request' | 'offer' | 'question' | 'social';
  title: string;
  description: string;
  tags: string[];
  likes: number;
  comments: number;
  shares: number;
  color: 'tan' | 'champagne-pink' | 'blood-red' | 'moss-green';
}

const colorMap = {
  tan: 'bg-[#dlc791]',
  'champagne-pink': 'bg-[#f3d8ce]',
  'blood-red': 'bg-[#5e1104]',
  'moss-green': 'bg-[#7f8330]',
};

const textColorMap = {
  tan: 'text-[#2d2d2d]',
  'champagne-pink': 'text-[#2d2d2d]',
  'blood-red': 'text-white',
  'moss-green': 'text-white',
};

const badgeMap = {
  request: { label: 'Request', color: '#5e1104', bgColor: '#ffe6e6' },
  offer: { label: 'Offer', color: '#7f8330', bgColor: '#f0f5e6' },
  question: { label: 'Question', color: '#d4503a', bgColor: '#fff0ed' },
  social: { label: 'Social', color: '#f3a37a', bgColor: '#fff9f5' },
};

export function PostCard({
  name,
  username,
  avatar,
  timeAgo,
  type,
  title,
  description,
  tags,
  likes,
  comments,
  shares,
  color,
}: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const badge = badgeMap[type];

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Color header */}
      <div className={`h-16 ${colorMap[color]}`} />

      {/* Content */}
      <div className="p-6">
        {/* User info */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src={avatar}
              alt={name}
              className="w-10 h-10 rounded-full border-2 border-gray-200"
            />
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-gray-900">{name}</p>
                <span className="text-gray-500 text-sm">{username}</span>
              </div>
              <p className="text-gray-500 text-xs">{timeAgo}</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <span className="text-2xl">•••</span>
          </button>
        </div>

        {/* Type badge */}
        <div className="mb-3">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-medium"
            style={{ color: badge.color, backgroundColor: badge.bgColor }}
          >
            {badge.label}
          </span>
        </div>

        {/* Post content */}
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs text-gray-600 hover:text-gray-900 cursor-pointer">
              {tag}
            </span>
          ))}
        </div>

        {/* Interactions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-gray-600 text-sm">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="flex items-center gap-1 hover:text-gray-900 transition-colors"
            >
              <Heart
                size={18}
                className={isLiked ? 'fill-red-500 text-red-500' : ''}
              />
              <span>{isLiked ? likes + 1 : likes}</span>
            </button>
            <button className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <MessageCircle size={18} />
              <span>{comments}</span>
            </button>
            <button className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Share2 size={18} />
              <span>{shares}</span>
            </button>
          </div>
          <button className="hover:text-gray-900 transition-colors">
            <Bookmark size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
