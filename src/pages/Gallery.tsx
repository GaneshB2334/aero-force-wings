import { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668711/IMG-20250901-WA0038_vxcpa0.jpg",
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668713/IMG-20250901-WA0040_ukjjv1.jpg",
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668712/IMG-20250901-WA0039_puw9j7.jpg",
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668710/IMG-20250901-WA0037_xpkcju.jpg",
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668709/IMG-20250901-WA0036_qxmlss.jpg",
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668708/IMG-20250901-WA0035_nwtrqw.jpg",
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671688/IMG_2472_oy3wmi.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668707/IMG-20250901-WA0033_npqvif.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668704/IMG-20250901-WA0030_qderbb.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668703/IMG-20250901-WA0029_gatwok.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668702/IMG-20250901-WA0028_tl3zgt.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668701/IMG-20250901-WA0027_aprtfr.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668700/IMG-20250901-WA0026_xdku2d.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668699/IMG-20250901-WA0024_fbqiak.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668698/IMG-20250901-WA0022_jomt7t.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668695/IMG-20250901-WA0010_pfsgav.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668695/IMG-20250901-WA0013_bhmxlh.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668695/IMG-20250901-WA0009_x690uz.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671265/IMG_2030_y4bki4.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671279/IMG_2393_iv3god.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671277/IMG_2217_suolc5.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671275/IMG_2332_ejthfm.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671273/IMG_2330_moe3d7.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671273/IMG_2437_yghmvw.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671272/IMG_2034_avumrq.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671271/IMG_2328_xlgebs.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671269/IMG_2190_vilkx2.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671267/IMG_2165_pr0dge.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671267/IMG_2185_uqkqhj.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671265/IMG_2030_y4bki4.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671265/IMG_2114_ckjrja.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671264/IMG_2164_px2yie.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671263/IMG_2087_z55biv.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671261/IMG_2026_tioxic_wmyckc.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671261/IMG_2032_eyycgh.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671261/IMG_2081_jvhwgj.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671259/IMG_2463_lo4kkk.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671259/IMG_2047_mlw7vw.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671258/IMG_2475_vfoehg.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671258/IMG_2449_agn59c.jpg"
    },
    {
      link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756670772/IMG_2014_nmayps.jpg"
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing moments from our drone adventures, events, and innovations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="rounded-lg group cursor-pointer"
            >
              <div className="relative aspect-video group-hover:scale-105 duration-500 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden z-0">
                <img src={item.link} alt="" className='object-cover h-full w-full' />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-tech inline-block">
            <h3 className="text-xl font-semibold mb-2">Share Your Moments</h3>
            <p className="text-muted-foreground mb-4">
              Have photos or videos from our events? We'd love to feature them!
            </p>
            <p className="text-sm text-muted-foreground">
              Send your submissions to <span className="text-primary">gallery@aeroforce.club</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;