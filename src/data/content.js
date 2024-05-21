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
