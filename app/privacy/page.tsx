import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-24 bg-[#fafafa]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="mb-12">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">Privacy Policy</h1>
            <p className="text-slate-500 font-medium">Last Updated: April 2026</p>
          </div>

          <div className="bg-white rounded-[2rem] border border-slate-100 p-8 md:p-12 shadow-sm text-slate-600 leading-relaxed space-y-6">
            <p>
              Sakura Pipe Udhyog Pvt. Ltd. ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 pt-8 pb-2">1. Information We Collect</h2>
            <p>
              We may collect, use, store, and transfer different kinds of personal data about you when you interact with our website, especially when you fill out contact forms or request quotes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data:</strong> includes first name, last name, title, and company name.</li>
              <li><strong>Contact Data:</strong> includes email address, billing address, delivery address, and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products, and services.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 pt-8 pb-2">2. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and fulfill your requests, such as to send you requested quotes or technical data.</li>
              <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
              <li>To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance).</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 pt-8 pb-2">3. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 pt-8 pb-2">4. Third-Party Links</h2>
            <p>
              This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 pt-8 pb-2">5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data, and (where the lawful ground of processing is consent) to withdraw consent.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 pt-8 pb-2">6. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <strong>Email:</strong> <a href="mailto:info@sakurapipe.com.np" className="text-green-600 hover:underline">info@sakurapipe.com.np</a><br />
              <strong>Phone:</strong> +977-071-531659<br />
              <strong>Address:</strong> Butwal, Rupandehi, Nepal
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
