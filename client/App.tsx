import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Classes from "./pages/Classes";
import Registration from "./pages/Registration";
import StudentRegistration from "./pages/StudentRegistration";
import InstructorRegistration from "./pages/InstructorRegistration";
import Staff from "./pages/Staff";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import StudentActivities from "./pages/StudentActivities";
import Events from "./pages/Events";
import ArtsProgram from "./pages/ArtsProgram";
import Faculties from "./pages/Faculties";
import GlobalNetwork from "./pages/GlobalNetwork";
import VirtualOpenHouse from "./pages/VirtualOpenHouse";
import TuitionAid from "./pages/TuitionAid";
import FAQs from "./pages/FAQs";
import APCourses from "./pages/APCourses";
import Apply from "./pages/Apply";
import Leadership from "./pages/Leadership";
import Vision from "./pages/Vision";
import Counselling from "./pages/Counselling";
import EnrollmentForm from "./pages/EnrollmentForm";
import FacultyGrid from "./pages/FacultyGrid";
import CalendarPage from "./pages/Calendar";
import CoursePlaceholder from "./pages/CoursePlaceholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/course-list" element={<Classes />} />
            <Route path="/course-registration" element={<Registration />} />
            <Route path="/student-registration" element={<StudentRegistration />} />
            <Route path="/instructor-registration" element={<InstructorRegistration />} />
            <Route path="/our-staff" element={<Staff />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/student-activities" element={<StudentActivities />} />
            <Route path="/clubs-activities" element={<StudentActivities />} />
            <Route path="/events" element={<Events />} />
            <Route path="/upcoming-events" element={<Events />} />
            <Route path="/arts-program" element={<ArtsProgram />} />
            <Route path="/arts" element={<ArtsProgram />} />
            <Route path="/faculties" element={<Faculties />} />
            <Route path="/our-faculties" element={<Faculties />} />
            <Route path="/global-network" element={<GlobalNetwork />} />
            <Route path="/our-global-network" element={<GlobalNetwork />} />
            <Route path="/virtual-open-house" element={<VirtualOpenHouse />} />
            <Route path="/open-house" element={<VirtualOpenHouse />} />
            <Route path="/tuition-aid" element={<TuitionAid />} />
            <Route path="/financial-aid" element={<TuitionAid />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/faq" element={<FAQs />} />
            <Route path="/ap-courses" element={<APCourses />} />
            <Route path="/ap-classes" element={<APCourses />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/counselling" element={<Counselling />} />
            <Route path="/enrollment" element={<EnrollmentForm />} />
            <Route path="/enroll" element={<EnrollmentForm />} />
            <Route path="/faculty-members" element={<FacultyGrid />} />
            <Route path="/faculty-grid" element={<FacultyGrid />} />
            {/* Course detail routes */}
            <Route path="/grade-6-details" element={<CoursePlaceholder />} />
            <Route path="/grade-7-details" element={<CoursePlaceholder />} />
            <Route path="/grade-8-details" element={<CoursePlaceholder />} />
            <Route path="/grade-9-details" element={<CoursePlaceholder />} />
            <Route path="/grade-10-details" element={<CoursePlaceholder />} />
            <Route path="/grade-11-details" element={<CoursePlaceholder />} />
            <Route path="/grade-12-details" element={<CoursePlaceholder />} />
            <Route path="/after-school-classes" element={<CoursePlaceholder />} />
            <Route path="/vocational-studies" element={<CoursePlaceholder />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
