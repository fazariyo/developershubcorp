import type { Metadata } from "next";
import { CourseDetailBody } from "@/components/CourseDetailBody";
import { getCourse } from "@/components/coursesData";
import "../courses-page.css";

/** Static route — the slug is guaranteed to exist in COURSES. */
const course = getCourse("art-of-selling")!;

export const metadata: Metadata = {
  title: course.metaTitle,
  description: course.metaDescription,
  alternates: { canonical: "/courses/art-of-selling" },
};

export default function ArtOfSellingCoursePage() {
  return <CourseDetailBody course={course} />;
}
