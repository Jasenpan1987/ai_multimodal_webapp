import React from "react";
import Image from "next/image";

function Features() {
  return (
    <section className="mt-[112px]">
      <div className="md:w-2/3 lg:w-1/2 m-20 z-[-1]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-secondary"
        >
          <path
            fill-rule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clip-rule="evenodd"
          />
        </svg>

        <h2 className="my-8 text-2xl font-bold text-gray-700 text-[#6D6C6A] md:text-4xl">
          Some of Our <span className="gradient">Specialities</span>
        </h2>
        <p className="text-gray-600 text-lg dark:text-white-300">
          Our expertise enhances the mental health environment through scientific-efficient
          A.I. design, aligning with a vision to address this rising global challenge
          collaboratively.
        </p>
      </div>




      <div className="flex items-center justify-center pb-20 px-7">
        
     
        <div className="mt-16 grid divide-x divide-y divide-gray-300 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-400 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4 max-w-screen-2xl">
          <div className="group bg-white dark:bg-gray-800 hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="space-y-8 py-12 p-8">
              <Image
                src="/img/features/User centric.svg"
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white group-hover:text-green-500">
                  Student Centric Design
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Leading certifications, enterprise design, student consulting
                  strategies, emergency mangement protocols, and on premise solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="group bg-white dark:bg-gray-800 transition hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="space-y-8 py-12 p-8">
              <Image
                src="/img/features/Expert team.svg"
                className="w-12 z-[-1]"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-green-500">
                  Expert Team
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Team of experts, including psychologists, call support, and
                  emergency consultants.
                </p>
              </div>
            </div>
          </div>
          <div className="group bg-white dark:bg-gray-800 transition hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="space-y-8 py-12 p-8">
              <Image
                src="/img/features/Track record.svg"
                className="w-12"
                width="512"
                height="512"
                alt="Team of Experts"
              />
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-green-500">
                  Track Record
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  A successful track record in implementing improvements in student mental health solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="group bg-white dark:bg-gray-800 transition hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
              <Image
                src="/img/features/Sustainability benefits.svg"
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-green-500">
                  Education Benefits
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Improved access reduces stress and anxiety. Resulting in postive interpersonal skills, lower fatalities, improved health, and an
                  increased academic value.
                </p>
              </div>
            </div>
          </div>
        </div>

        </div>
    </section>
  );
}

export default Features;
