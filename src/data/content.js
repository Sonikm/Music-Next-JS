import Image from "next/image";
import img from "../assets/courses/guitar.jpg";

export const musicSchoolContent = [
  {
    title: "Harmony Music Academy",
    description:
      "At Harmony Music Academy, we offer comprehensive music education for students of all ages and skill levels. Our experienced instructors provide personalized lessons in a variety of instruments, including piano, guitar, violin, and voice. Whether you're a beginner or an advanced musician, our goal is to help you achieve your musical aspirations in a supportive and inspiring environment. Join us to explore your passion for music and discover the joy of making music with others.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={img}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
        {/* <p>Learn with export</p> */}
      </div>
    ),
  },
  {
    title: "Melody Makers School of Music",
    description:
      "Melody Makers School of Music is dedicated to nurturing musical talent through high-quality instruction and performance opportunities. We specialize in teaching a wide range of instruments and styles, from classical to contemporary music. Our state-of-the-art facilities and passionate educators create a vibrant learning community for musicians of all ages.",
  },
  {
    title: "Rhythm and Tunes Music Institute",
    description:
      "Rhythm and Tunes Music Institute offers a dynamic and engaging learning experience for music enthusiasts. Our curriculum includes private lessons, group classes, and ensemble opportunities to help students develop their skills and express their creativity. We cater to all levels, from beginners to advanced musicians, with a focus on fostering a lifelong love of music.",
  },
  {
    title: "Crescendo Conservatory",
    description:
      "Crescendo Conservatory provides elite music education with a focus on classical training and performance excellence. Our highly qualified instructors bring a wealth of experience to their teaching, offering personalized lessons tailored to each student's goals. We aim to cultivate exceptional musicianship and prepare students for professional careers in music.",
  },
  {
    title: "Allegro Music School",
    description:
      "Allegro Music School is committed to delivering top-notch music instruction in a welcoming and inclusive environment. We offer lessons in a variety of instruments and genres, ensuring that every student finds their musical niche. Our programs are designed to build confidence, technique, and a deep appreciation for the art of music.",
  },
  {
    title: "Symphony Stars Music Academy",
    description:
      "Symphony Stars Music Academy empowers students to reach their full musical potential through dedicated teaching and mentorship. Our diverse programs include private lessons, theory classes, and performance workshops, all aimed at developing well-rounded musicians. We believe in the transformative power of music and strive to inspire each student to achieve their best.",
  },
];


export const testimonials = [
  {
    quote:
      "Music can change the world because it can change people. The lessons here were like a symphony, guiding me through the complexities of life with every note and chord.",
    name: "Ludwig van Beethoven",
    title: "Composer",
  },
  {
    quote:
      "Where words fail, music speaks. The instructors at this school helped me find my voice through the universal language of music.",
    name: "Hans Christian Andersen",
    title: "Author",
  },
  {
    quote:
      "Without music, life would be a mistake. This school gave me the tools to make music and, by extension, a more meaningful life.",
    name: "Friedrich Nietzsche",
    title: "Philosopher",
  },
  {
    quote:
      "The only truth is music. The dedication and passion of the teachers here have shown me that music is not just an art form, but a way of life.",
    name: "Jack Kerouac",
    title: "Writer",
  },
  {
    quote:
      "Music expresses that which cannot be said and on which it is impossible to be silent. The profound teachings at this school have allowed my music to speak volumes.",
    name: "Victor Hugo",
    title: "Author",
  },
];

export const featuredWebinars = [
  {
    title: 'Understanding Music Theory',
    description:
      'Dive deep into the fundamentals of music theory and enhance your musical skills.',
    slug: 'understanding-music-theory',
    isFeatured: true,
  },
  {
    title: 'The Art of Songwriting',
    description:
      'Learn the craft of songwriting from experienced musicians and songwriters.',
    slug: 'the-art-of-songwriting',
    isFeatured: true,
  },
  {
    title: 'Mastering Your Instrument',
    description:
      'Advanced techniques to master your musical instrument of choice.',
    slug: 'mastering-your-instrument',
    isFeatured: true,
  },
  {
    title: 'Music Production Essentials',
    description:
      'Get started with music production with this comprehensive overview.',
    slug: 'music-production-essentials',
    isFeatured: true,
  },
  // Added two more webinars
  {
    title: 'Live Performance Techniques',
    description:
      'Enhance your live performance skills with expert tips and strategies.',
    slug: 'live-performance-techniques',
    isFeatured: true,
  },
  {
    title: 'Digital Music Marketing',
    description:
      'Learn how to promote your music effectively in the digital age.',
    slug: 'digital-music-marketing',
    isFeatured: true,
  },
];

export const courseInstructors = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export const footerContent = [
  {
    title: "About Us",
    links: [
      { text: "Our Mission", url: "/about/mission" },
      { text: "History", url: "/about/history" },
      { text: "Faculty", url: "/about/faculty" },
      { text: "Careers", url: "/about/careers" },
    ],
  },
  {
    title: "Programs",
    links: [
      { text: "Undergraduate Programs", url: "/programs/undergraduate" },
      { text: "Graduate Programs", url: "/programs/graduate" },
      { text: "Online Courses", url: "/programs/online" },
      { text: "Summer Programs", url: "/programs/summer" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { text: "Apply Now", url: "/admissions/apply" },
      { text: "Tuition & Fees", url: "/admissions/tuition" },
      { text: "Scholarships", url: "/admissions/scholarships" },
      { text: "Visit Us", url: "/admissions/visit" },
    ],
  },
  {
    title: "Student Resources",
    links: [
      { text: "Library", url: "/resources/library" },
      { text: "Practice Rooms", url: "/resources/practice-rooms" },
      { text: "Student Portal", url: "/resources/portal" },
      { text: "Counseling Services", url: "/resources/counseling" },
    ],
  },
  {
    title: "Events",
    links: [
      { text: "Concerts", url: "/events/concerts" },
      { text: "Masterclasses", url: "/events/masterclasses" },
      { text: "Workshops", url: "/events/workshops" },
      { text: "Webinars", url: "/events/webinars" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { text: "General Inquiries", url: "/contact/general" },
      { text: "Admissions Office", url: "/contact/admissions" },
      { text: "Support Services", url: "/contact/support" },
      { text: "Feedback", url: "/contact/feedback" },
    ],
  },
];
