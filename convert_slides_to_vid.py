# record_slides.py
from playwright.sync_api import sync_playwright
import os
from pathlib import Path
import time

class SlideRecorder:
    def __init__(self, base_url="http://localhost:3000", output_dir="./video"):
        self.base_url = base_url
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(exist_ok=True)
        
        # Define your slides and their recording durations (in seconds)
        self.slides = [
            {"path": "/slide0", "duration": 15},  # Adjust duration based on your animations
            # Add more slides as needed
        ]

    def record_slides(self):
        with sync_playwright() as p:
            # Launch browser with video recording enabled
            browser = p.chromium.launch()
            context = browser.new_context(
                record_video_dir=str(self.output_dir),
                viewport={'width': 1920, 'height': 1080}
            )

            for index, slide in enumerate(self.slides):
                print(f"Recording slide {index}: {slide['path']}")
                page = context.new_page()
                
                # Navigate to the slide
                url = f"{self.base_url}{slide['path']}"
                page.goto(url)
                
                # Wait for animations to complete
                time.sleep(slide['duration'])
                
                # Close the page to ensure video is saved
                page.close()
                
                # Rename the video file
                video_files = list(self.output_dir.glob("*.webm"))
                if video_files:
                    latest_video = max(video_files, key=os.path.getctime)
                    new_name = self.output_dir / f"slide{index}.webm"
                    latest_video.rename(new_name)
                
                print(f"Completed recording slide {index}")

            context.close()
            browser.close()

    def convert_to_mp4(self):
        """Convert WebM files to MP4 using ffmpeg"""
        for video_file in self.output_dir.glob("*.webm"):
            output_file = video_file.with_suffix(".mp4")
            os.system(f'ffmpeg -i "{video_file}" -c:v libx264 -c:a aac "{output_file}"')
            video_file.unlink()  # Remove the original WebM file

def main():
    # Make sure your Next.js app is running on this port
    recorder = SlideRecorder(base_url="http://localhost:3000")
    
    print("Starting slide recording...")
    recorder.record_slides()
    
    print("Converting videos to MP4...")
    recorder.convert_to_mp4()
    
    print("Recording complete! Videos saved in ./video directory")

if __name__ == "__main__":
    main()