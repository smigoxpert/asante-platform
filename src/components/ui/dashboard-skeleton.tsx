import { LoadingSkeleton } from "./loading";

export function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-8 bg-gray-200 rounded w-48 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-32 animate-pulse" />
        </div>
        <div className="h-10 bg-gray-200 rounded w-24 animate-pulse" />
      </div>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
                <div className="h-8 bg-gray-200 rounded w-16 animate-pulse" />
              </div>
              <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* Content Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="h-6 bg-gray-200 rounded w-32 mb-4 animate-pulse" />
            <LoadingSkeleton lines={5} />
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="h-6 bg-gray-200 rounded w-40 mb-4 animate-pulse" />
            <LoadingSkeleton lines={3} />
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="h-6 bg-gray-200 rounded w-28 mb-4 animate-pulse" />
            <LoadingSkeleton lines={4} />
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="h-6 bg-gray-200 rounded w-36 mb-4 animate-pulse" />
            <LoadingSkeleton lines={3} />
          </div>
        </div>
      </div>
    </div>
  );
} 