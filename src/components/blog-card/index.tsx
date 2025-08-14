import React from 'react';

type MediaItem = {
  title: string;
  description?: string;
  imageUrl?: string;
  link?: string;
};

type BlogSection = {
  header: string;
  items: MediaItem[];
};

type Props = {
  loading?: boolean;
  blog?: BlogSection;
  googleAnalyticsId?: string;
};

const BlogCard: React.FC<Props> = ({ blog }) => {
  const header: string | undefined = blog?.header;
  const items: MediaItem[] = Array.isArray(blog?.items) ? blog!.items : [];

  // ถ้าไม่มีรายการ ก็ซ่อนทั้งส่วน
  if (!items.length) return null;

  return (
    <div className="w-full">
      {header ? (
        <h2 className="text-2xl font-bold mb-4">{header}</h2>
      ) : null}

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
    </div>
  );
};

export default BlogCard;
