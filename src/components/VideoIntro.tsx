
import { useState, useEffect } from 'react';

interface VideoIntroProps {
  onComplete: () => void;
}

export const VideoIntro = ({ onComplete }: VideoIntroProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500); // Allow fade out animation to complete
    }, 6000); // 6 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <video
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        onLoadedData={() => console.log('Video loaded')}
        onError={(e) => {
          console.error('Video failed to load:', e);
          // If video fails to load, skip intro after 1 second
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 1000);
        }}
      >
        <source 
          src="https://cdn.pixabay.com/video/2025/02/25/260895_large.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
