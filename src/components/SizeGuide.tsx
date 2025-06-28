
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Ruler } from "lucide-react";
import { SizeFinder } from "@/components/SizeFinder";

const sizeChart = [
  { size: "S", chest: "34-36", length: "28", sleeve: "8" },
  { size: "M", chest: "38-40", length: "29", sleeve: "8.25" },
  { size: "L", chest: "42-44", length: "30", sleeve: "8.5" },
  { size: "XL", chest: "46-48", length: "31", sleeve: "8.75" },
  { size: "XXL", chest: "50-52", length: "32", sleeve: "9" },
  { size: "3XL", chest: "54-56", length: "33", sleeve: "9.25" },
];

export const SizeGuide = () => {
  return (
    <div className="flex gap-2">
      <SizeFinder />
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <Ruler className="h-4 w-4" />
            Size Chart
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Size Guide</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-foreground/70">
              All measurements are in inches. For the best fit, measure yourself and compare to the chart below.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-2 text-left">Size</th>
                    <th className="border border-border p-2 text-left">Chest Width</th>
                    <th className="border border-border p-2 text-left">Length</th>
                    <th className="border border-border p-2 text-left">Sleeve Length</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeChart.map((row) => (
                    <tr key={row.size}>
                      <td className="border border-border p-2 font-medium">{row.size}</td>
                      <td className="border border-border p-2">{row.chest}"</td>
                      <td className="border border-border p-2">{row.length}"</td>
                      <td className="border border-border p-2">{row.sleeve}"</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">How to Measure:</h4>
              <ul className="text-sm space-y-1 text-foreground/70">
                <li><strong>Chest:</strong> Measure around the fullest part of your chest</li>
                <li><strong>Length:</strong> Measure from the shoulder seam to the bottom hem</li>
                <li><strong>Sleeve:</strong> Measure from the shoulder seam to the sleeve opening</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
