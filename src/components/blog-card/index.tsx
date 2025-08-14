// src/components/blog-card/index.tsx
import React from 'react';

// เส้นทางอ้างอิงถึง config จากตำแหน่งนี้ (../.. = กลับไป src, ../../.. = กลับไป root)
import CONFIG from '../../../gitprofile.config';

type MediaItem = {
  title: string;
  description?: string;
  imageUrl?: string;
  link?: string;
};

// รองรับ signature เดิม (มี props เข้ามา) แต่จะไม่ใช้ เพื่อลดการแก้ที่อื่น
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BlogCard: React.FC<{
  loading?: boolean;
  blog?: unknown;
  googleAnalyticsId?: string;
}> = () => {
  const blog: any = (CONFIG as any).blog || {};
  const items: MediaItem[] = Array.isArray(blog.items) ? blog.items : [];

  // ถ้าไม่มีรายการ ก็ไม่แสดงอะไร (ซ่อน section นี้)
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
