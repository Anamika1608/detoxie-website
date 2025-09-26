"use client";

import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';

const hilmarLight = localFont({ src: '../../../public/fonts/Hilmar-Light.otf' });

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#dcf1f7] via-[#e8f6fa] to-white px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className={`${hilmarLight.className} text-4xl md:text-5xl mb-2 text-center text-gray-900`}>
                    Privacy Policy
                </h1>
                <p className={`${poppins.className} text-center text-gray-600 mb-8`}>
                    Last Updated: September 26, 2025
                </p>

                <div className={`${poppins.className} space-y-6 text-gray-700`}>

                    {/* Start of new content */}

                    <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                        <p>
                            Welcome to Detoxie. We are committed to protecting your privacy and providing a transparent experience. Our app is designed to be a private, on-device tool to help you manage your screen time. This Privacy Policy explains how Detoxie handles your information.
                        </p>
                        <p className="mt-4">
                            The most important principle of our app is that <strong>Detoxie works entirely offline. All your data is stored only on your device and is never sent to us or any third party.</strong>
                        </p>
                    </section>

                    <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900">1. Compliance with Google Play Policies &amp; Use of Sensitive Permissions</h2>
                        <p className="mb-4">
                            Detoxie is designed to comply with all Google Play developer policies. We request sensitive permissions only when they are essential for our app&rsquo;s core, user-facing functionality. Below is a detailed explanation of why we require these permissions.
                        </p>

                        <div className="mt-4">
                            <h3 className="font-semibold text-lg text-gray-800">1.1 Accessibility Service API</h3>
                            <ul className="list-disc ml-6 mt-2 space-y-2">
                                <li>
                                    <strong>Core Feature Enabled:</strong> The primary purpose of using the Accessibility Service is to enable our core feature: <strong>automated screen time tracking for social media apps.</strong>
                                </li>
                                <li>
                                    <strong>How It Is Used:</strong> When you are using a social media app, the service reads the UI elements on the screen in real-time to identify specific, non-personal keywords (e.g., &ldquo;reels,&rdquo; &ldquo;explore&rdquo;). If a keyword is found, the app starts a timer. When you navigate away from that screen, the timer stops. This data is processed ephemerally (in the moment) and is not stored.
                                </li>
                                <li>
                                    <strong>What We DO NOT Do:</strong> We state unequivocally that this service is <strong>NOT</strong> used to:
                                    <ul className="list-circle ml-6 mt-2">
                                        <li>- Collect any personal or sensitive user data (messages, passwords, usernames, financial details, etc.).</li>
                                        <li>- Circumvent Android privacy controls or user notifications.</li>
                                        <li>- Change device settings without user consent.</li>
                                        <li>- Work in a way that is deceptive or violates Google Play policies.</li>
                                        <li>- Implement advertising or analytics.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h3 className="font-semibold text-lg text-gray-800">1.2 Display Over Other Apps (Overlay Permission)</h3>
                            <ul className="list-disc ml-6 mt-2 space-y-2">
                                <li>
                                    <strong>Core Feature Enabled:</strong> This permission is essential for our other core feature: <strong>displaying a non-intrusive reminder overlay</strong> to help you curb your usage.
                                </li>
                                <li>
                                    <strong>How It Is Used:</strong> When your pre-set time limit for social media usage is reached, the app uses this permission to display a screen on top of the social media app. This overlay contains only the content you have created: your to-do list and your &ldquo;Dream Vision&rdquo; image, serving as a personal, motivating reminder.
                                </li>
                                <li>
                                    <strong>What We DO NOT Do:</strong> This permission is <strong>NOT</strong> used for:
                                    <ul className="list-circle ml-6 mt-2">
                                        <li>- Displaying advertisements or deceptive pop-ups.</li>
                                        <li>- Obscuring system-critical warnings.</li>
                                        <li>- Interfering with the usability of other apps or the operating system.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900">2. Information We Collect and Store Locally</h2>
                        <p>
                            Detoxie only collects information that you provide and stores it privately on your device. We never transmit this data.
                        </p>
                        <ul className="list-disc ml-6 mt-4 space-y-2">
                            <li>
                                <strong>User-Provided Content:</strong> Your to-do list tasks and your &ldquo;Dream Vision&rdquo; image are stored in the app&rsquo;s local database.
                            </li>
                            <li>
                                <strong>Configuration Data:</strong> Your set timer duration is saved locally.
                            </li>
                            <li>
                                <strong>App Usage Data:</strong> The total time you&rsquo;ve spent on monitored apps is calculated and stored locally to show you your stats.
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900">3. Data Storage and Security</h2>
                        <p>
                            All information is stored in a private SQLite database on your device. We do not use any cloud servers. If you uninstall the app, all its data is permanently deleted from your device.
                        </p>
                    </section>

                    <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900">4. Data Sharing and Third Parties</h2>
                        <p>
                            <strong>We do not share, sell, rent, or trade your information with any third parties.</strong> Because all data is stored locally and the app does not transmit data, it is technically impossible for us to access or share your data.
                        </p>
                    </section>

                    <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900">5. Changes to This Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                        </p>
                    </section>

                    <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900">6. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact me at:{' '}
                            <a href="mailto:anamikaagg07@gmail.com" className="text-blue-600 hover:underline">
                                anamikaagg07@gmail.com
                            </a>
                        </p>
                    </section>
                    {/* End of new content */}
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;