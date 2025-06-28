
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ruler, User, Check } from "lucide-react";
import { toast } from "sonner";

const sizeRecommendations = {
  S: { chest: [34, 36], waist: [28, 30], height: [64, 68] },
  M: { chest: [38, 40], waist: [32, 34], height: [66, 70] },
  L: { chest: [42, 44], waist: [36, 38], height: [68, 72] },
  XL: { chest: [46, 48], waist: [40, 42], height: [70, 74] },
  XXL: { chest: [50, 52], waist: [44, 46], height: [72, 76] },
  "3XL": { chest: [54, 56], waist: [48, 50], height: [74, 78] },
};

export const SizeFinder = () => {
  const [measurements, setMeasurements] = useState({
    chest: "",
    waist: "",
    height: "",
    weight: "",
  });
  const [recommendedSize, setRecommendedSize] = useState("");
  const [showRecommendation, setShowRecommendation] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setMeasurements(prev => ({ ...prev, [field]: value }));
  };

  const findRecommendedSize = () => {
    const chest = parseFloat(measurements.chest);
    const waist = parseFloat(measurements.waist);
    const height = parseFloat(measurements.height);

    if (!chest || !waist || !height) {
      toast.error("Please fill in all measurements");
      return;
    }

    let bestSize = "";
    let bestScore = -1;

    Object.entries(sizeRecommendations).forEach(([size, ranges]) => {
      let score = 0;
      
      // Check chest fit
      if (chest >= ranges.chest[0] && chest <= ranges.chest[1]) {
        score += 3;
      } else if (Math.abs(chest - (ranges.chest[0] + ranges.chest[1]) / 2) <= 2) {
        score += 1;
      }

      // Check waist fit
      if (waist >= ranges.waist[0] && waist <= ranges.waist[1]) {
        score += 2;
      } else if (Math.abs(waist - (ranges.waist[0] + ranges.waist[1]) / 2) <= 2) {
        score += 1;
      }

      // Check height fit
      if (height >= ranges.height[0] && height <= ranges.height[1]) {
        score += 1;
      }

      if (score > bestScore) {
        bestScore = score;
        bestSize = size;
      }
    });

    setRecommendedSize(bestSize);
    setShowRecommendation(true);
    toast.success(`Recommended size: ${bestSize}`);
  };

  const resetForm = () => {
    setMeasurements({ chest: "", waist: "", height: "", weight: "" });
    setRecommendedSize("");
    setShowRecommendation(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <User className="h-4 w-4" />
          Size Finder
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Ruler className="h-5 w-5 text-holy-blue dark:text-holy-gold" />
            Interactive Size Finder
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {!showRecommendation ? (
            <>
              <div className="bg-holy-blue/5 dark:bg-holy-gold/5 p-4 rounded-lg">
                <p className="text-sm text-foreground/70 mb-4">
                  Enter your measurements to get a personalized size recommendation. Measure yourself wearing light clothing for accuracy.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="chest" className="text-sm font-medium">
                      Chest Circumference (inches) *
                    </Label>
                    <Input
                      id="chest"
                      type="number"
                      placeholder="e.g., 38"
                      value={measurements.chest}
                      onChange={(e) => handleInputChange("chest", e.target.value)}
                      className="mt-1"
                    />
                    <p className="text-xs text-foreground/60 mt-1">
                      Measure around the fullest part of your chest
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="waist" className="text-sm font-medium">
                      Waist Circumference (inches) *
                    </Label>
                    <Input
                      id="waist"
                      type="number"
                      placeholder="e.g., 32"
                      value={measurements.waist}
                      onChange={(e) => handleInputChange("waist", e.target.value)}
                      className="mt-1"
                    />
                    <p className="text-xs text-foreground/60 mt-1">
                      Measure around your natural waistline
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="height" className="text-sm font-medium">
                      Height (inches) *
                    </Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="e.g., 70"
                      value={measurements.height}
                      onChange={(e) => handleInputChange("height", e.target.value)}
                      className="mt-1"
                    />
                    <p className="text-xs text-foreground/60 mt-1">
                      Your total height in inches
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="weight" className="text-sm font-medium">
                      Weight (lbs) - Optional
                    </Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="e.g., 160"
                      value={measurements.weight}
                      onChange={(e) => handleInputChange("weight", e.target.value)}
                      className="mt-1"
                    />
                    <p className="text-xs text-foreground/60 mt-1">
                      Helps fine-tune the recommendation
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={findRecommendedSize}
                  className="flex-1 bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900"
                >
                  Get My Size Recommendation
                </Button>
                <Button variant="outline" onClick={resetForm}>
                  Clear
                </Button>
              </div>
            </>
          ) : (
            <Card className="border-holy-blue/20 dark:border-holy-gold/20">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full">
                      <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-holy-blue dark:text-holy-gold mb-2">
                      Your Recommended Size
                    </h3>
                    <Badge className="text-2xl px-6 py-2 bg-holy-blue hover:bg-holy-blue dark:bg-holy-gold dark:hover:bg-holy-gold dark:text-gray-900">
                      {recommendedSize}
                    </Badge>
                  </div>

                  <div className="bg-muted p-4 rounded-lg text-left">
                    <h4 className="font-semibold mb-2">Size {recommendedSize} Specifications:</h4>
                    <div className="text-sm space-y-1 text-foreground/70">
                      <p>• Chest: {sizeRecommendations[recommendedSize as keyof typeof sizeRecommendations]?.chest.join('-')}"</p>
                      <p>• Waist: {sizeRecommendations[recommendedSize as keyof typeof sizeRecommendations]?.waist.join('-')}"</p>
                      <p>• Height Range: {sizeRecommendations[recommendedSize as keyof typeof sizeRecommendations]?.height.join('-')}"</p>
                    </div>
                  </div>

                  <div className="bg-holy-blue/5 dark:bg-holy-gold/5 p-4 rounded-lg">
                    <p className="text-sm text-foreground/70">
                      💡 <strong>Tip:</strong> If you're between sizes or prefer a looser fit, consider going one size up. 
                      For a more fitted look, stay with your recommended size.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button onClick={resetForm} variant="outline" className="flex-1">
                      Try Again
                    </Button>
                    <Button 
                      onClick={() => toast.success("Size recommendation saved!")}
                      className="flex-1 bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900"
                    >
                      Use This Size
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-2 text-sm">How to Measure:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-foreground/60">
              <div>
                <strong>Chest:</strong> Wrap tape measure around the fullest part of your chest, keeping it level and snug but not tight.
              </div>
              <div>
                <strong>Waist:</strong> Measure around your natural waistline, typically the narrowest part of your torso.
              </div>
              <div>
                <strong>Height:</strong> Stand straight against a wall and measure from floor to the top of your head.
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
