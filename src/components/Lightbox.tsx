import { useEffect, useRef } from 'react';
import type { ProductPhoto } from '../content';
import ResponsivePicture from './ResponsivePicture';

interface Props {
  photos: ProductPhoto[];
  index: number;
  title: string;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

/** Full-screen photo viewer built on <dialog>, so Escape and focus trapping come for free. */
export default function Lightbox({ photos, index, title, onIndexChange, onClose }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const photo = photos[index];
  const step = (delta: number) => onIndexChange((index + delta + photos.length) % photos.length);

  useEffect(() => {
    dialog.current?.showModal();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <dialog
      ref={dialog}
      className="lightbox"
      aria-label={`${title} photos`}
      onClose={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}
    >
      <ResponsivePicture
        key={photo.image}
        name={photo.image}
        widths={[600, 1200]}
        sizes="90vw"
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        priority
      />
      <div className="lightbox-bar">
        <span>{title} · {index + 1} / {photos.length}</span>
        {photos.length > 1 && (
          <>
            <button type="button" onClick={() => step(-1)} aria-label="Previous photo">←</button>
            <button type="button" onClick={() => step(1)} aria-label="Next photo">→</button>
          </>
        )}
        <button type="button" onClick={() => dialog.current?.close()} aria-label="Close">✕</button>
      </div>
    </dialog>
  );
}
