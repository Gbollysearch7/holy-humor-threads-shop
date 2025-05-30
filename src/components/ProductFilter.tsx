
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const categories = [
  { id: "all", label: "All Products", icon: "🛍️" },
  { id: "humor", label: "Humor", icon: "😄" },
  { id: "inspirational", label: "Inspirational", icon: "✝️" },
];

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "name", label: "Name A-Z" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
];

export const ProductFilter = ({ selectedCategory, onCategoryChange, sortBy, onSortChange }: ProductFilterProps) => {
  return (
    <div className="space-y-6">
      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="text-holy-blue dark:text-holy-gold">
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "ghost"}
              className={`w-full justify-start transition-all duration-300 ${
                selectedCategory === category.id 
                  ? "bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900" 
                  : "hover:bg-accent"
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="text-holy-blue dark:text-holy-gold">
            Sort By
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {sortOptions.map((option) => (
            <Button
              key={option.id}
              variant={sortBy === option.id ? "default" : "ghost"}
              className={`w-full justify-start transition-all duration-300 ${
                sortBy === option.id 
                  ? "bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900" 
                  : "hover:bg-accent"
              }`}
              onClick={() => onSortChange(option.id)}
            >
              {option.label}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
