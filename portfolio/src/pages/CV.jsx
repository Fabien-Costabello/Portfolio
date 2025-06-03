import ContactSection from "../components/ContactSection";

export default function CV() {
  return (
    <>
      <div className="w-full h-screen">
        <iframe
          src="/cv.pdf"
          title="CV"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>
      <ContactSection />
    </>
  );
}
