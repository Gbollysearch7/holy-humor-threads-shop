
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export const ProductDetailSkeleton = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Skeleton */}
        <div className="flex items-center gap-2 mb-6">
          <Skeleton className="h-4 w-20" />
          <span>/</span>
          <Skeleton className="h-4 w-16" />
          <span>/</span>
          <Skeleton className="h-4 w-32" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images Skeleton */}
          <div className="space-y-4">
            <Skeleton className="aspect-square w-full rounded-lg" />
            <div className="grid grid-cols-3 gap-2">
              <Skeleton className="aspect-square rounded-lg" />
              <Skeleton className="aspect-square rounded-lg" />
              <Skeleton className="aspect-square rounded-lg" />
            </div>
          </div>

          {/* Product Info Skeleton */}
          <div className="space-y-6">
            <div>
              <Skeleton className="h-6 w-20 mb-2" />
              <Skeleton className="h-10 w-3/4 mb-2" />
              <div className="flex items-center gap-2 mb-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-8 w-24 mb-4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-2/3" />
            </div>

            {/* Size Selection Skeleton */}
            <div>
              <Skeleton className="h-6 w-16 mb-3" />
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="h-10 w-10" />
                ))}
              </div>
            </div>

            {/* Quantity Skeleton */}
            <div>
              <Skeleton className="h-6 w-20 mb-3" />
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-6 w-8" />
                <Skeleton className="h-10 w-10" />
              </div>
            </div>

            {/* Actions Skeleton */}
            <div className="flex gap-3">
              <Skeleton className="h-10 flex-1" />
              <Skeleton className="h-10 w-10" />
            </div>

            {/* Tabs Skeleton */}
            <Card>
              <CardContent className="p-0">
                <div className="border-b flex">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-12 w-24 m-2" />
                  ))}
                </div>
                <div className="p-6">
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
