import { Carousel, IconButton } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

export default function CarouselComponent({ carouselItems }) {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-black w-8" : "bg-black/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          size="lg"
          onClick={handlePrev}
          className="hidden lg:block !absolute top-2/4 -translate-y-2/4 left-4"
        >
          <ChevronLeftIcon strokeWidth={2} className="w-8 h-8 text-black" />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          size="lg"
          onClick={handleNext}
          className="hidden lg:block !absolute top-2/4 -translate-y-2/4 !right-4"
        >
          <ChevronRightIcon strokeWidth={2} className="w-8 h-8 text-black" />
        </IconButton>
      )}

      autoplay={true}
      loop={true}
    >
      {carouselItems()}
    </Carousel>
  );
}