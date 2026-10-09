import React from "react";
import {
  BriefcaseBusiness,
  Clock3,
  BookOpen,
  Quote,
  Building2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const StoryDetailsCard = ({ story }) => {
  if (!story) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-bold text-gray-800">Story not found</h2>
        <p className="mt-2 text-gray-500">
          The story you're looking for doesn't exist.
        </p>

        <Link
          href="/stories"
          className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Back to Stories
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 sm:p-10">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
          <img
            src={story.image || "/default-avatar.png"}
            alt={story.name || "Story author"}
            className="h-28 w-28 shrink-0 rounded-full border-4 border-white/30 object-cover shadow-lg"
          />

          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              {story.name}
            </h1>

            <p className="mt-2 text-base font-medium text-blue-100">
              {story.designation}
            </p>

            <p className="mt-1 flex items-center justify-center gap-2 text-sm text-blue-200 sm:justify-start">
              <Building2 size={16} />
              {story.company}
            </p>

            {story.experience && (
              <p className="mt-3 flex items-center justify-center gap-2 text-sm text-white/90 sm:justify-start">
                <Clock3 size={16} />
                {story.experience} experience
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8 p-6 sm:p-10">
        {/* Skills */}
        {story.skills?.length > 0 && (
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-800">
              <BriefcaseBusiness className="text-indigo-600" size={22} />
              Skills & Expertise
            </h2>

            <div className="flex flex-wrap gap-2">
              {story.skills.map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Full Story */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-800">
            <BookOpen className="text-indigo-600" size={23} />
            My Story
          </h2>

          <div className="whitespace-pre-line text-base leading-8 text-gray-600">
            {story.story || "No story content available."}
          </div>
        </section>

        {/* About */}
        {story.about && (
          <section className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <h2 className="mb-3 text-lg font-bold text-indigo-700">
              About {story.name}
            </h2>

            <p className="whitespace-pre-line text-sm leading-7 text-gray-600">
              {story.about}
            </p>
          </section>
        )}

        {/* Quote */}
        <section className="rounded-xl border border-indigo-100 bg-indigo-50 p-5 sm:p-6">
          <Quote size={28} className="mb-3 text-indigo-500" />

          <blockquote className="text-base italic leading-7 text-gray-700">
            {story.quote ||
              "Every challenge is an opportunity to learn and grow."}
          </blockquote>

          <p className="mt-4 text-right text-sm font-semibold text-indigo-700">
            — {story.name}
          </p>
        </section>

        {/* Back Button */}
        <div className="border-t border-slate-200 pt-6">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700"
          >
            <ArrowLeft size={18} />
            Back to Stories
          </Link>
        </div>
      </div>
    </article>
  );
};

export default StoryDetailsCard;
