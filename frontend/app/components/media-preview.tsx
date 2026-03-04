import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";

type LayoutVariant = "auto" | "single" | "grid";

interface MediaPreviewProps {
  images: string[];
  layout?: LayoutVariant;
  className?: string;
}

export default function MediaPreview({
  images,
  layout = "auto",
  className,
}: MediaPreviewProps) {
  if (!images?.length) return null;

  const displayImages = layout === "single" ? images.slice(0, 1) : images;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={cn(
            "relative w-full h-72 overflow-hidden rounded-xl border bg-slate-50 cursor-pointer group",
            className,
          )}
        >
          <ImageLayout images={displayImages} totalCount={images.length} />
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-3xl">
        <DialogTitle className="sr-only">Issue Gallery</DialogTitle>
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem
                key={index}
                className="flex items-center justify-center h-[60vh]"
              >
                <Image
                  src={src}
                  alt="Image Preview"
                  width={1200}
                  height={800}
                  className="max-h-[80vh] w-auto object-contain rounded-md"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}

function ImageLayout({
  images,
  totalCount,
}: {
  images: string[];
  totalCount: number;
}) {
  const count = images.length;

  if (count == 1)
    return (
      <div className="relative h-full w-full">
        <Image
          src={images[0]}
          alt="Image Preview"
          fill
          className="object-cover transition-all group-hover:brightness-90"
          priority={true}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );

  return (
    <div className="grid h-full w-full grid-cols-2 gap-1">
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={images[0]}
          alt="Media preview 1"
          fill
          className="object-cover hover:brightness-90 transition-all"
          priority={true}
          sizes="50vw"
        />
      </div>

      <div
        className={cn(
          "grid h-full w-full gap-1",
          count === 2 ? "grid-rows-1" : "grid-rows-2",
        )}
      >
        {images.slice(1, 3).map((src, index) => (
          <div key={index} className="relative h-full w-full overflow-hidden">
            <Image
              src={src}
              alt={`Media preview ${index + 2}`}
              fill
              className="object-cover"
              sizes="25vw"
            />
            {index === 1 && totalCount > 3 && (
              <div
                className="absolute inset-0 z-10 flex items-center justify-center 
              bg-black/60 text-white font-bold text-xl"
              >
                +{totalCount - 3}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
