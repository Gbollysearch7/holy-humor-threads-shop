
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductImageZoomProps {
  image: string;
  productName: string;
}

export const ProductImageZoom = ({ image, productName }: ProductImageZoomProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <div className="flex items-center justify-center p-4">
          <div className="text-8xl">{image}</div>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-lg">{productName}</h3>
        </div>
      </DialogContent>
    </Dialog>
  );
};
