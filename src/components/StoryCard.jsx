import React from "react";
import Link from "next/link";

const StoryCard = ({ story }) => {
  // Handle missing story data safely
  if (!story) return null;

  // Short story description
  const fullStory = story.story || "";

  const shortStory =
    fullStory.length > 150 ? fullStory.slice(0, 150).trim() + "..." : fullStory;

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Header */}
      <div className="flex items-center gap-4">
        {/* Profile Image */}
        <img
          src={story.image || "/default-avatar.png"}
          alt={story.name || "Story author"}
          className="h-16 w-16 shrink-0 rounded-full border border-slate-200 object-cover"
        />

        {/* User Information */}
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-xl font-bold text-gray-800">
            {story.name}
          </h2>

          <p className="mt-1 text-sm leading-5 text-gray-700">
            {story.designation}
          </p>

          <p className="mt-1 text-sm leading-5 text-blue-600">
            {story.company}
          </p>
        </div>
      </div>

      {/* Short Story */}
      <p className="mt-5 text-sm leading-6 text-gray-600">{shortStory}</p>

      {/* Read Full Story Button */}
      <Link
        href={`/stories/${story.id}`}
        className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Read Full Story
      </Link>
    </div>
  );
};

export default StoryCard;
