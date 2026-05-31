export default function BackgroundVideoPage() {
    return (
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cloudinary-marketing-res.cloudinary.com/video/upload/e_preview:duration_15:max_seg_9:min_seg_dur_1/q_auto/f_auto/surfing_travel.mp4"
            type="video/mp4"
          />
        </video>
  
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />
      </div>
    );
  }