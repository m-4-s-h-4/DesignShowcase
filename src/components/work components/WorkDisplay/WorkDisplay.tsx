import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Work, fetchWork } from "../../../utils/fetchWork/fetchWork";
import Container from "../../base components/Container/Container";
import Grid from "../../base components/LayoutComponents/Grid/Grid";

// Styled component for Video Thumbnail with a play button
const Thumbnail = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;

  video {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;

    /* Styles when the video is in fullscreen */
    &:fullscreen {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      margin: auto;
      display: block;
    }

    &:-webkit-full-screen {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      margin: auto;
      display: block;
    }

    &:-moz-full-screen {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      margin: auto;
      display: block;
    }

    &:-ms-fullscreen {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      margin: auto;
      display: block;
    }
  }

  &:hover button {
    opacity: 1;
    transform: scale(1.1);
  }
`;

// Play button styled component
const PlayButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  color: white;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const CenteredGridWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const WorkDisplay: React.FC = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<string | null>(
    null
  );

  // Store refs to all video elements
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  useEffect(() => {
    const loadWorks = async () => {
      try {
        const fetchedWorks = await fetchWork();
        console.log("Fetched works:", fetchedWorks);
        setWorks(fetchedWorks);
      } catch (error) {
        setError("Failed to fetch works");
      } finally {
        setLoading(false);
      }
    };

    loadWorks();
  }, []);

  const handlePlay = (id: string) => {
    // Pause the currently playing video if it's not the same as the new one
    if (currentlyPlayingId && currentlyPlayingId !== id) {
      const previousVideo = videoRefs.current[currentlyPlayingId];
      if (previousVideo) {
        previousVideo.pause();
      }
    }

    // Update the currently playing video ID
    setCurrentlyPlayingId(id);

    // Play the new video and handle muting for 1 second
    const currentVideo = videoRefs.current[id];
    if (currentVideo) {
      currentVideo.muted = true; // Mute the video initially
      currentVideo.play();

      // Unmute the video after 1 second
      setTimeout(() => {
        currentVideo.muted = false;
      }, 1000); // 1000 milliseconds = 1 second
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container paddingTopBottom="SpacingSpacing2">
      {works.length < 3 && <p>Only {works.length} videos available.</p>}
      <CenteredGridWrapper>
        <Grid>
          {works.map((work) => (
            <Thumbnail key={work.id}>
              {work.thumbnail && work.thumbnail.url ? (
                <video
                  ref={(el) => {
                    if (el) {
                      videoRefs.current[work.id] = el;
                    }
                  }}
                  src={work.thumbnail.url}
                  loop
                  controls={currentlyPlayingId === work.id}
                  autoPlay={currentlyPlayingId === work.id}
                  muted={true} // Set initial state to muted
                />
              ) : (
                <p>Video unavailable</p>
              )}
              {currentlyPlayingId !== work.id && (
                <PlayButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlay(work.id);
                  }}
                >
                  ▶
                </PlayButton>
              )}
            </Thumbnail>
          ))}
        </Grid>
      </CenteredGridWrapper>
    </Container>
  );
};

export default WorkDisplay;
