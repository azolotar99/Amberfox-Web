import { asset, srcSet } from '../assets';

interface Props {
  /** Image basename in /public/images, e.g. `hero-curtains`. */
  name: string;
  /** Available widths; the largest is the fallback `src`. */
  widths: number[];
  sizes: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
}

/** WebP `<source>` with a JPEG fallback, matching the exported image set. */
export default function ResponsivePicture({ name, widths, sizes, width, height, alt, priority }: Props) {
  const variants = (ext: string) => srcSet(widths.map((w) => [`images/${name}-${w}.${ext}`, `${w}w`]));
  const largest = Math.max(...widths);
  return (
    <picture>
      <source type="image/webp" srcSet={variants('webp')} sizes={sizes} />
      <img
        src={asset(`images/${name}-${largest}.jpg`)}
        srcSet={variants('jpg')}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        decoding="async"
        {...(priority ? { fetchPriority: 'high' as const } : { loading: 'lazy' as const })}
      />
    </picture>
  );
}
