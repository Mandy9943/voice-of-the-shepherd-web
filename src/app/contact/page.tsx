import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";

export const runtime = "edge";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-vos-bg-light text-vos-text-primary selection:bg-vos-accent/30 selection:text-vos-primary">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg mb-4 text-center">
            If you have any questions, feedback, or inquiries regarding the app,
            please feel free to reach out to us via email:
          </p>
          <div className="text-center mb-8">
            <p className="text-xl font-semibold text-vos-accent">
              bucur.andrei.teodor@gmail.com
            </p>
          </div>
          {/* You can add a contact form or other contact details here */}
          {/* 
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
            {/* Add your contact form component here */}
          {/* <ContactForm /> */}
          {/* </div> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
