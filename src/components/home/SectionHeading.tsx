interface SectionHeadingProps {
    badge?: string;
    title: string;
    description?: string;
  }
  
  export default function SectionHeading({
    badge,
    title,
    description,
  }: SectionHeadingProps) {
    return (
      <div className="mx-auto mb-14 max-w-3xl text-center">
        {badge && (
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            {badge}
          </span>
        )}
  
        <h2 className="text-4xl font-bold text-foreground">
          {title}
        </h2>
  
        {description && (
          <p className="mt-5 text-lg text-muted">
            {description}
          </p>
        )}
      </div>
    );
  }