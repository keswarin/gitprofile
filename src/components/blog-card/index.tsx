// src/components/blog-card/index.tsx
import React from 'react';

type MediaItem = {
  title: string;
  description?: string;
  imageUrl?: string;
  link?: string;
};

type Props = {
  loading?: boolean;
  blog?: {
    header?: string;
    items?: MediaItem[];
  };
  googleAnalyticsId?: string;
};

const BlogCard: React.FC<Props> = ({ blog }) => {
  const items: MediaItem[] = Array.isArray(blog?.items) ? (blog!.items as MediaItem[]) : [];

  // ถ้าไม่มีรายการ ให้ซ่อนทั้งส่วน
  if (!items.length) return null;

  return (
    <div className="grid md:grid-cols-2 gap-5">
      {items.map((it, idx) => {
        const Wrapper: React.ElementType = it.link ? 'a' : 'div';
        const wrapperProps = it.link
          ? { href: it.link, target: '_blank', rel: 'noreferrer' }
          : {};

        return (
          <Wrapper
            key={idx}
            {...wrapperProps}
            className="card bg-base-200 hover:bg-base-300 transition-colors shadow-md"
          >
            <div className="card-body flex gap-4 items-center">
              {/* รูปปก */}
              {it.imageUrl ? (
                <img
                  src={it.imageUrl}
                  alt={it.title}
                  className="w-16 h-16 rounded-lg object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-16 h-16 rounded-lg bg-base-300 grid place-items-center text-xl">
                  🎧
                </div>
              )}
              {/* เนื้อหา */}
              <div>
                <h3 className="card-title text-base">{it.title}</h3>
                {it.description ? (
                  <p className="text-sm opacity-80 mt-1">{it.description}</p>
                ) : null}
              </div>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
};

export default BlogCard;
