import type { Metadata } from "next";
import { CourseDetailBody } from "@/components/CourseDetailBody";
import { getCourse } from "@/components/coursesData";
import "../courses-page.css";

/** Static route — the slug is guaranteed to exist in COURSES. */
const course = getCourse("ai-content-generation")!;

export const metadata: Metadata = {
  title: course.metaTitle,
  description: course.metaDescription,
  alternates: { canonical: "/courses/ai-content-generation" },
};

export default function AiContentGenerationCoursePage() {
  return <CourseDetailBody course={course} />;
}
