
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, ThumbsUp, Flag } from "lucide-react";
import { Review } from "@/data/enhancedProducts";

interface ReviewsSectionProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

export const ReviewsSection = ({ reviews, averageRating, totalReviews }: ReviewsSectionProps) => {
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "rating">("newest");

  const renderStars = (rating: number, interactive = false) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`} 
      />
    ));
  };

  const getRatingDistribution = () => {
    const distribution = [0, 0, 0, 0, 0];
    reviews.forEach(review => {
      distribution[review.rating - 1]++;
    });
    return distribution.reverse(); // 5 stars first
  };

  const sortedReviews = [...reviews].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const ratingDistribution = getRatingDistribution();

  return (
    <div className="space-y-6">
      {/* Overall Rating Summary */}
      <Card>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Average Rating */}
            <div className="text-center">
              <div className="text-4xl font-bold text-holy-blue dark:text-holy-gold mb-2">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex items-center justify-center mb-2">
                {renderStars(averageRating)}
              </div>
              <p className="text-sm text-foreground/60">
                Based on {totalReviews} reviews
              </p>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2">
              {ratingDistribution.map((count, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <span className="w-8">{5 - index}★</span>
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${totalReviews > 0 ? (count / totalReviews) * 100 : 0}%` }}
                    />
                  </div>
                  <span className="w-8 text-right">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions and Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Button 
          onClick={() => setShowWriteReview(!showWriteReview)}
          className="bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900"
        >
          Write a Review
        </Button>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-foreground/60">Sort by:</span>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value as any)}
            className="text-sm border border-border rounded px-2 py-1 bg-background"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>
      </div>

      {/* Write Review Form */}
      {showWriteReview && (
        <Card>
          <CardHeader>
            <CardTitle>Write a Review</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Your Rating</label>
              <div className="flex gap-1">
                {renderStars(0, true)}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Your Review</label>
              <Textarea 
                placeholder="Share your thoughts about this product..."
                className="min-h-[120px]"
              />
            </div>
            <div className="flex gap-2">
              <Button className="bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900">
                Submit Review
              </Button>
              <Button variant="outline" onClick={() => setShowWriteReview(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {sortedReviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-holy-blue/20 to-holy-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">
                      {review.customerName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{review.customerName}</span>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">Verified Purchase</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-xs text-foreground/50">{review.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <ThumbsUp className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Flag className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              <p className="text-foreground/80 leading-relaxed">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {reviews.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-lg font-semibold mb-2">No reviews yet</h3>
            <p className="text-foreground/60 mb-4">
              Be the first to share your experience with this product!
            </p>
            <Button 
              onClick={() => setShowWriteReview(true)}
              className="bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900"
            >
              Write the First Review
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
