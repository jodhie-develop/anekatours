import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import { galleryImages } from '../data/gallery';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex === null ? null : galleryImages[selectedIndex];

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowRight') setSelectedIndex((index) => (index === null ? null : (index + 1) % galleryImages.length));
      if (event.key === 'ArrowLeft') setSelectedIndex((index) => (index === null ? null : (index - 1 + galleryImages.length) % galleryImages.length));
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedIndex]);

  const move = (direction: -1 | 1) => {
    setSelectedIndex((index) => (index === null ? null : (index + direction + galleryImages.length) % galleryImages.length));
  };

  return (
    <Reveal as="section" className="section container gallery">
      <div className="gallery__heading">
        <p className="eyebrow">Photo collection</p>
        <h2 className="h2">A closer look at Sumatra.</h2>
        <p>{galleryImages.length} photos · Select any image to view it full size.</p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <button
            className="gallery-tile"
            type="button"
            key={`${image.collection}-${image.source}`}
            onClick={() => setSelectedIndex(index)}
            aria-label={`View full size: ${image.title}`}
          >
            <span className="gallery-tile__image">
              <img src={image.thumbnail} alt="" loading="lazy" decoding="async" />
            </span>
            <span className="gallery-tile__caption">
              <strong>{image.title}</strong>
              <small>{image.collection}</small>
            </span>
          </button>
        ))}
      </div>

      {selected && selectedIndex !== null && (
        <div className="gallery-viewer" role="presentation" onClick={() => setSelectedIndex(null)}>
          <section
            className="gallery-viewer__panel"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="gallery-viewer__toolbar">
              <div>
                <strong>{selected.title}</strong>
                <span>{selected.collection} · {selectedIndex + 1} / {galleryImages.length}</span>
              </div>
              <button className="gallery-viewer__close" type="button" onClick={() => setSelectedIndex(null)} aria-label="Close image viewer">
                ×
              </button>
            </div>
            <div className="gallery-viewer__image-wrap">
              <button className="gallery-viewer__nav gallery-viewer__nav--previous" type="button" onClick={() => move(-1)} aria-label="Previous image">
                ‹
              </button>
              <img className="gallery-viewer__image" src={selected.source} alt={selected.title} />
              <button className="gallery-viewer__nav gallery-viewer__nav--next" type="button" onClick={() => move(1)} aria-label="Next image">
                ›
              </button>
            </div>
          </section>
        </div>
      )}
    </Reveal>
  );
}
