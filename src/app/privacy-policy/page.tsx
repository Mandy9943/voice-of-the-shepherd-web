import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
export const runtime = "edge";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-vos-bg-light text-vos-text-primary selection:bg-vos-accent/30 selection:text-vos-primary">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
            <p className="text-lg">
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use the Voice of the Shepherd
              mobile application. Please read this policy carefully. If you do
              not agree with the terms of this privacy policy, please do not
              access or use the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Information We Collect
            </h2>
            <div className="text-lg space-y-3">
              <p>
                The app primarily focuses on providing a reflective and
                meditative experience with the words of Jesus. Based on the
                app&apos;s features, the primary information handled is related
                to your interaction with the content and app settings, stored
                locally on your device using AsyncStorage. This may include:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  <strong>Usage Data:</strong> Information about how you use the
                  app, such as listening history, favorite teachings, and
                  progress tracking. This data is stored locally.
                </li>
                <li>
                  <strong>App Preferences:</strong> Settings like light/dark
                  mode preference, audio playback speed, background music
                  preference, auto-play content choices, and notification
                  preferences. This data is stored locally.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              How We Use Your Information
            </h2>
            <div className="text-lg space-y-3">
              <p>
                The information collected and stored locally on your device is
                used to:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Provide and personalize your experience within the app.</li>
                <li>
                  Enable features like saving favorites and tracking
                  history/progress.
                </li>
                <li>Apply your preferred settings and customizations.</li>
                <li>
                  Manage optional daily notifications based on your preferences.
                </li>
              </ul>
              <p>
                Information processed via the tRPC/Hono server is primarily for
                delivering app content and ensuring the app&apos;s
                functionality.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Sharing Your Information
            </h2>
            <div className="text-lg space-y-3">
              <p>
                We do not share your locally stored personal usage data or app
                preferences with third parties. This information resides on your
                device.
              </p>
              <p>
                The app uses third-party services for specific functionalities:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  <strong>Expo Notifications:</strong> Used for managing
                  optional daily reminders. Notification data and preferences
                  are handled by Expo, and their privacy practices apply.
                </li>
              </ul>
              <p>
                We do not control the privacy practices of these third parties
                and are not responsible for their policies.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
            <p className="text-lg">
              We are committed to protecting your information. While the
              majority of user-specific data is stored locally on your device
              using AsyncStorage, we implement commercially reasonable security
              measures to protect the integrity and security of our app and any
              data processed through our server infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
            <div className="text-lg space-y-3">
              <p>
                Since most of your personal usage data and preferences are
                stored locally on your device, managing this data is primarily
                done through the app&apos;s settings and your device&apos;s
                storage management.
              </p>
              <p>
                You can typically clear locally stored app data through your
                device&apos;s application settings, which would remove your
                listening history, favorites, progress, and preferences.
                Uninstalling the app will also remove all locally stored data.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Changes to This Privacy Policy
            </h2>
            <p className="text-lg">
              We may update this Privacy Policy from time to time. The updated
              version will be indicated by an updated &quot;Revised&quot; date
              and the updated version will be effective as soon as it is
              accessible. We encourage you to review this privacy policy
              frequently to be informed of how we are protecting your
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
            <p className="text-lg">
              If you have questions or comments about this Privacy Policy, you
              may contact us at bucur.andrei.teodor@gmail.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
