import { DIVYANSH_PROFILE } from "@/content/divyanshContent";

export function JsonLd() {
  const siteUrl = "https://divyanshkatiyar.web.app";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: DIVYANSH_PROFILE.name,
        givenName: DIVYANSH_PROFILE.firstName,
        familyName: DIVYANSH_PROFILE.lastName,
        url: siteUrl,
        image: `${siteUrl}/hero-silhouette.png`,
        jobTitle: "PCB Student, Innovator & Applied Tech Explorer",
        description: DIVYANSH_PROFILE.summary,
        knowsAbout: [
          "Physics, Chemistry, and Biology (PCB)",
          "Biological Sciences & Life Systems",
          "Human Physiology & Cellular Mechanics",
          "Applied Science & School Innovations",
          "Hardware Prototyping & Tech Mechanics",
          "Organic Chemistry & Kinetics",
          "Ray & Wave Optics",
          "Electromagnetism & Circuits",
        ],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Senior Secondary Education",
          educationalLevel: "Class 12 Senior Secondary",
          about: "Physics, Chemistry & Biology (PCB)",
        },
        nationality: {
          "@type": "Country",
          name: "India",
        },
        homeLocation: {
          "@type": "Place",
          name: DIVYANSH_PROFILE.location,
        },
        sameAs: [siteUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${DIVYANSH_PROFILE.name} | Biology Student, Innovation & Science Portfolio`,
        description: `Official academic and innovation portfolio of ${DIVYANSH_PROFILE.name}, Class 12 PCB student with an inventor's mindset.`,
        inLanguage: "en-US",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        creator: {
          "@type": "Person",
          name: "Piyush Ratan",
          url: "https://piyushratan.in",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: `${DIVYANSH_PROFILE.name} - Innovation & Science Portfolio`,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
          audienceType:
            "Science Educators, Innovators, Academic Mentors & Evaluators",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
