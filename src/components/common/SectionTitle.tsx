import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  center = false, 
  className 
}: SectionTitleProps) => {
  return (
    <div className={cn(
      'mb-10 w-full',
      center ? 'text-center' : '',
      className
    )}>
      <h2 className={cn(
        'text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl',
        center ? 'mx-auto' : ''
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
