"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, Globe, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmallSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="inset"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Collection",
          id: "products",
        },
        {
          name: "Story",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Aura Fragrance"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="Aura: The Essence of Elegance"
      description="Discover a collection of curated fragrances designed to evoke memories and create new ones. Every bottle is a work of art."
      testimonials={[
        {
          name: "Elena R.",
          handle: "@elena_perfume",
          testimonial: "The scents are absolutely ethereal. Aura has become my signature.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/black-woman-s-portrait-dramma-look_633478-1621.jpg",
        },
        {
          name: "Marcus T.",
          handle: "@mt_fragrance",
          testimonial: "Sophisticated, long-lasting, and truly unique. Simply incredible.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/model-man_158595-3785.jpg",
        },
        {
          name: "Sophia L.",
          handle: "@sophia.luxury",
          testimonial: "Beautifully crafted bottles and exquisite aromas. Highly recommend.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-fashionable-model-with-natural-blond-hair-posing-red-background-close-up-studio-shot-silk-cocktail-dress_639032-817.jpg",
        },
        {
          name: "Julian W.",
          handle: "@jwill_scent",
          testimonial: "A luxury experience from packaging to the last note.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-blond-woman-black-hat-ink-dress-posing-studio-studio-with-pampas-grass-decor_273443-5095.jpg",
        },
        {
          name: "Claire B.",
          handle: "@claireb_scent",
          testimonial: "Everything about this brand is pure class. I love Aura.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-girl-studio-fashion-portrait_1328-2194.jpg",
        },
      ]}
      buttons={[
        {
          text: "Shop Collection",
          href: "#products",
        },
        {
          text: "Our Story",
          href: "#about",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/perfume-bottle-beauty-product_53876-134416.jpg"
      imageAlt="Luxurious fragrance display"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-photo-fragrance-bottle-with-flowers_114579-51645.jpg",
          alt: "Portrait 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/top-view-cosmetic-bottle-plain-background_23-2148306718.jpg",
          alt: "Portrait 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-glass-container-pink-background_23-2148366115.jpg",
          alt: "Portrait 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beauty-cosmetics-product-with-soft-pink-tones_23-2151005593.jpg",
          alt: "Portrait 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/crystalline-pink-bubbles-droplets_23-2148227260.jpg",
          alt: "Portrait 5",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Artisanal",
        },
        {
          type: "text",
          text: "Sustainable",
        },
        {
          type: "text",
          text: "Handcrafted",
        },
        {
          type: "text",
          text: "Premium",
        },
        {
          type: "text",
          text: "Rare",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Crafted with Intent"
      description="We source the finest ingredients from around the world, blending tradition with modern sensibilities to create fragrances that speak to the soul."
      bulletPoints={[
        {
          title: "Artisanal Blending",
          description: "Small batches to ensure quality and depth.",
        },
        {
          title: "Rare Botanicals",
          description: "Ethically sourced rare extracts from global origins.",
        },
        {
          title: "Timeless Design",
          description: "Bottles crafted to be displayed as art.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/therapy-suction-cup-process_23-2148824055.jpg"
      imageAlt="Fragrance crafting process"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Midnight Rose",
          price: "$120",
          imageSrc: "http://img.b2bpic.net/free-photo/cosmetic-bottle-with-luxurious-art-nouveau-inspired-sun-relief-background_23-2151420736.jpg",
        },
        {
          id: "p2",
          name: "Golden Oud",
          price: "$150",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-compostable-beauty-product-flowers_23-2149353143.jpg",
        },
        {
          id: "p3",
          name: "Velvet Musk",
          price: "$135",
          imageSrc: "http://img.b2bpic.net/free-photo/perfume-bottle-nature_23-2151890510.jpg",
        },
        {
          id: "p4",
          name: "Oceanic Salt",
          price: "$110",
          imageSrc: "http://img.b2bpic.net/free-photo/compostable-care-products-assortment_23-2149353133.jpg",
        },
        {
          id: "p5",
          name: "Amber Sunset",
          price: "$140",
          imageSrc: "http://img.b2bpic.net/free-photo/bote-de-perfume_1048-1864.jpg",
        },
        {
          id: "p6",
          name: "Blossom Breeze",
          price: "$125",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-perfume-bottle_23-2149234335.jpg",
        },
      ]}
      title="Exquisite Collection"
      description="Explore our signature perfumes and limited edition scents."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Long-Lasting Intensity",
          description: "Formulated for all-day wear.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-still-life-arrangement-with-water_23-2149176153.jpg",
        },
        {
          title: "Vegan & Sustainable",
          description: "Cruelty-free sourcing, always.",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-cosmetic-products_23-2149163133.jpg",
        },
        {
          title: "Luxury Packaging",
          description: "Designed for aesthetic luxury.",
          imageSrc: "http://img.b2bpic.net/free-photo/liquor-beautiful-glass-bottle_176474-6070.jpg",
        },
      ]}
      title="Why Choose Aura"
      description="Excellence in every drop."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: Award,
          title: "Awards Won",
          value: "24+",
        },
        {
          id: "m2",
          icon: Users,
          title: "Happy Customers",
          value: "10k+",
        },
        {
          id: "m3",
          icon: Globe,
          title: "Global Shipping",
          value: "50+",
        },
      ]}
      title="Our Impact"
      description="We are proud of our journey so far."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="Aura represents true modern luxury. The attention to detail is remarkable."
      rating={5}
      author="Sarah M."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/black-woman-s-portrait-dramma-look_633478-1621.jpg",
          alt: "User 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/model-man_158595-3785.jpg",
          alt: "User 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-fashionable-model-with-natural-blond-hair-posing-red-background-close-up-studio-shot-silk-cocktail-dress_639032-817.jpg",
          alt: "User 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-blond-woman-black-hat-ink-dress-posing-studio-studio-with-pampas-grass-decor_273443-5095.jpg",
          alt: "User 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-beautiful-girl-studio-fashion-portrait_1328-2194.jpg",
          alt: "User 5",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Newsletter"
      title="Join Our Inner Circle"
      description="Subscribe for early access to new launches and exclusive offers."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/gold-glitter-dull-pink-brushstroke_53876-101901.jpg"
      logoText="Aura"
      columns={[
        {
          title: "Collection",
          items: [
            {
              label: "All Scents",
              href: "#products",
            },
            {
              label: "New Arrivals",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "FAQ",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
