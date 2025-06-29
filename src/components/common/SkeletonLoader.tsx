import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  animate?: boolean;
}

const Skeleton = ({
  className,
  width,
  height,
  borderRadius = '0.5rem',
  animate = true,
}: SkeletonProps) => {
  return (
    <div
      className={cn(
        'bg-gray-200 dark:bg-gray-700',
        animate && 'animate-pulse',
        className
      )}
      style={{
        width,
        height,
        borderRadius,
      }}
    />
  );
};

export const ProjectCardSkeleton = () => {
  return (
    <div className="border rounded-lg p-4 bg-white dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <Skeleton height="180px" className="w-full mb-4" />
      <Skeleton height="24px" width="70%" className="mb-2" />
      <Skeleton height="16px" width="100%" className="mb-1" />
      <Skeleton height="16px" width="90%" className="mb-4" />
      <div className="flex gap-2">
        <Skeleton height="24px" width="60px" borderRadius="9999px" />
        <Skeleton height="24px" width="60px" borderRadius="9999px" />
      </div>
    </div>
  );
};

export const ProjectsSectionSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <ProjectCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default Skeleton;
