/**
 * Inner-page content taken from the official JAYAM Technical Services LLC PDF.
 * Nothing here is invented beyond that document.
 */

import { HD } from "@/data/photos";

export const CONTACT_DETAILS = {
  company: "JAYAM Technical Services LLC",
  manager: "Mohan Kumar Subbaraj",
  phone: "+971 54 358 2569",
  phoneHref: "tel:+971543582569",
  email: "info@jayam.me",
  emailHref: "mailto:info@jayam.me",
  whatsappHref: "https://wa.me/971543582569",
  location: "Dubai, United Arab Emirates",
} as const;

export const ABOUT_COPY = {
  heroLabel: "About Jayam",
  heroTitle: ["A Trusted Technical", "Services Partner", "in the UAE"],
  heroLede:
    "JAYAM Technical Services LLC was established in 2021 and specializes in MEP, landscaping, swimming pool and water feature design and maintenance services.",
  story: [
    "Our team works across different types of properties and project environments, including retail spaces, office workspaces, villas and commercial buildings.",
    "We understand that every property has different technical requirements. For this reason, we focus on providing solutions according to the specific needs, condition and requirements of each project.",
    "Our objective is to provide dependable services while maintaining professional communication, quality workmanship and customer satisfaction.",
    "The experience listed in our company profile includes MEP, plumbing, landscaping, indoor plantation, swimming pool maintenance, chilled water work and MEP fit-out projects across the UAE.",
  ],
  approach:
    "Our approach is simple: understand the client's requirements, provide the right solution and deliver professional service. We believe that every project is more than just a job. It is an opportunity to build trust and establish a long-term relationship with our clients.",
  whatWeDo:
    "We provide a wide range of technical services covering MEP, plumbing, air conditioning and ventilation, landscaping, swimming pools, water features and other property maintenance requirements.",
  visionTitle: "Creating Better Spaces Through Reliable Technical Solutions",
  vision:
    "Our vision is to grow as a trusted and professional technical services company by providing innovative, practical and reliable solutions that improve the quality, functionality and appearance of properties. We aim to continuously improve our services, understand changing project requirements and provide solutions that deliver lasting value to our clients. We also believe that responsible technical services should consider the surrounding environment and the long-term needs of the property.",
  missionTitle: "Customer Satisfaction Through Quality and Dependable Service",
  mission: [
    "Our mission is to satisfy every client by providing practical solutions, professional service and dependable support. We believe in honest communication and maintaining clear relationships with our clients throughout every project.",
    "From the first discussion to project completion and maintenance support, we aim to understand our client's expectations and deliver services that meet the required standards. Every project entrusted to us is treated as an investment in a long-term relationship.",
    "Our goal is to earn client confidence through reliable service, professional execution and consistent support. This reflects the company's original mission to provide innovative solutions, first-rate service, trustworthy communication and dependable service.",
  ],
} as const;

export const WHY_JAYAM = [
  {
    title: "One Company for Multiple Technical Requirements",
    body: "Managing different technical requirements can be difficult when you have to coordinate with multiple service providers. JAYAM provides a broad range of technical, MEP, landscaping and maintenance services, helping clients manage their property requirements through one experienced service partner.",
  },
  {
    title: "Professional Service",
    body: "We approach every project with professionalism, clear communication and attention to the client's requirements.",
  },
  {
    title: "Practical Solutions",
    body: "We focus on understanding the actual requirement before recommending a suitable technical solution.",
  },
  {
    title: "Wide Range of Services",
    body: "Our services cover MEP, plumbing, HVAC-related works, landscaping, swimming pools, water features, interior finishing and other technical requirements.",
  },
  {
    title: "Residential & Commercial Experience",
    body: "Our project portfolio includes villas, retail spaces, restaurants, hotels, offices, residential developments and commercial properties.",
  },
  {
    title: "Customer Focus",
    body: "Customer satisfaction is central to our approach. We aim to build long-term relationships rather than simply complete individual projects.",
  },
  {
    title: "Reliable Maintenance",
    body: "Regular maintenance is important for keeping technical systems, landscapes, swimming pools and other facilities functional and presentable. We provide maintenance support based on project requirements.",
  },
] as const;

export const PROCESS = [
  {
    n: "01",
    title: "Understand",
    body: "We begin by understanding your property, project scope, technical requirements and expectations.",
  },
  {
    n: "02",
    title: "Assess",
    body: "Our team reviews the requirements and identifies the appropriate service or technical solution.",
  },
  {
    n: "03",
    title: "Plan",
    body: "We plan the work based on the project scope, site requirements and expected outcome.",
  },
  {
    n: "04",
    title: "Execute",
    body: "Our team carries out the agreed work with attention to quality, professionalism and project requirements.",
  },
  {
    n: "05",
    title: "Maintain",
    body: "Where ongoing maintenance is required, we provide continued technical support based on the agreed service requirements.",
  },
  {
    n: "06",
    title: "Support",
    body: "We remain focused on communication and customer satisfaction throughout the service process.",
  },
] as const;

export const COMMITMENT = [
  {
    title: "Quality",
    body: "We focus on professional workmanship and attention to project requirements.",
  },
  {
    title: "Reliability",
    body: "We aim to provide dependable service and support our clients throughout the project.",
  },
  {
    title: "Professionalism",
    body: "We maintain clear communication and a professional approach.",
  },
  {
    title: "Customer Satisfaction",
    body: "We work to meet client expectations and build long-term relationships.",
  },
  {
    title: "Continuous Improvement",
    body: "We continue to improve our approach and services as project requirements and industry expectations develop.",
  },
] as const;

export type Capability = {
  slug: string;
  title: string;
  kicker: string;
  body: string;
  points: string[];
  image: string;
};

export const CAPABILITIES: Capability[] = [
  {
    slug: "electrical-works",
    title: "Electrical Works",
    kicker: "Electrical Design, Approvals and Installation",
    body: "Electrical work on a UAE property starts well before the first cable is pulled. JAYAM handles the design and consultation, prepares and submits the drawings to the relevant authority, follows the approval through, and arranges the inspection — with DEWA, TAQA and SEWA. From there we carry out the installation, testing and ongoing maintenance for residential, commercial and retail properties.",
    points: [
      "Electrical design and consultation",
      "Authority submission and approval (DEWA, TAQA, SEWA)",
      "Authority inspection coordination",
      "Electrical installation",
      "Testing and commissioning",
      "Electrical maintenance and repair",
    ],
    image: HD.engineer,
  },
  {
    slug: "plumbing-sanitary",
    title: "Plumbing",
    kicker: "Professional Plumbing Services for Residential & Commercial Properties",
    body: "Plumbing systems are essential to the daily operation of every building. A properly planned, installed and maintained plumbing system helps ensure reliable water supply, drainage and sanitary facilities. JAYAM provides plumbing and sanitary services for villas, offices, retail spaces and commercial properties. Our experience includes plumbing work for residential developments, villas and commercial projects across the UAE.",
    points: [
      "Water supply works",
      "Drainage works",
      "Sanitary installation",
      "Plumbing installation",
      "Plumbing maintenance",
      "Plumbing repair",
      "Project-specific plumbing works",
      "Design, consultation and authority submission (DEWA, TAQA, SEWA)",
    ],
    image: HD.plumbing,
  },
  {
    slug: "electro-mechanical",
    title: "Electromechanical",
    kicker: "Reliable Electro-Mechanical Solutions for Properties",
    body: "Electro-mechanical systems play an important role in the operation and functionality of modern buildings. Proper installation, maintenance and technical support help ensure that building systems continue to operate effectively. JAYAM provides electro-mechanical services for different types of residential and commercial properties. Whether the requirement is related to a new project, renovation, fit-out or ongoing maintenance, we aim to provide a suitable technical solution based on the property's requirements.",
    points: [
      "Electro-mechanical installation",
      "Technical maintenance",
      "System-related support",
      "Inspection and troubleshooting",
      "Repair and maintenance requirements",
      "Project-specific technical works",
    ],
    image: HD.mep,
  },
  {
    slug: "air-conditioning",
    title: "Air Conditioning",
    kicker: "Air Conditioning & Ventilation Services in Dubai",
    body: "A comfortable indoor environment depends on properly functioning air conditioning and ventilation systems. JAYAM provides air conditioning and ventilation services for residential and commercial properties, helping clients maintain comfortable and functional indoor environments.",
    points: [
      "Air conditioning works",
      "Ventilation works",
      "Installation support",
      "Preventive maintenance",
      "Technical inspection",
      "Troubleshooting",
      "Repair and maintenance support",
    ],
    image: HD.hvac,
  },
  {
    slug: "gypsum-ceiling",
    title: "Gypsum",
    kicker: "Interior Finishing Solutions for Modern Spaces",
    body: "Well-designed interiors require functional and professional finishing work. JAYAM provides gypsum, false ceiling and partition services for residential and commercial spaces. These solutions can help improve the appearance, organization and functionality of interior areas. Our team works according to the project's design, functional requirements and site conditions.",
    points: [
      "Gypsum works",
      "False ceiling installation",
      "Partition works",
      "Interior finishing",
      "Repair and maintenance",
      "Project-specific finishing requirements",
    ],
    image: HD.interior,
  },
  {
    slug: "aluminium-glass",
    title: "Aluminium",
    kicker: "Aluminium & Glass Installation and Maintenance",
    body: "Aluminium and glass are widely used in modern residential and commercial properties because of their practical and aesthetic benefits. JAYAM provides aluminium and glass installation and maintenance services based on the requirements of the project. We focus on delivering clean, functional and professionally executed work suitable for the property's requirements.",
    points: [
      "Aluminium works",
      "Glass installation",
      "Aluminium and glass maintenance",
      "Repair requirements",
      "Replacement support",
      "Project-specific installation work",
    ],
    image: HD.glass,
  },
  {
    slug: "lift-installation",
    title: "Lift Installation",
    kicker: "Lift Installation and Servicing",
    body: "Vertical transportation has to be safe, compliant and available every day it is in use. JAYAM provides lift installation and servicing for residential and commercial buildings, working to the building's requirements and the applicable safety standards.",
    points: [
      "Lift installation",
      "Escalator works",
      "Preventive servicing",
      "Technical inspection",
      "Repair and maintenance support",
      "Project-specific installation works",
    ],
    image: HD.escalator,
  },
  {
    slug: "pergola",
    title: "Pergola",
    kicker: "Outdoor Pergola & Shade Solutions",
    body: "Outdoor spaces can become more comfortable and useful with properly designed shade structures. JAYAM provides pergola and shade structure services for residential and commercial outdoor areas. We consider the property's requirements and outdoor environment when planning the work.",
    points: [
      "Villas",
      "Gardens",
      "Outdoor seating areas",
      "Commercial properties",
      "Recreational spaces",
      "Landscape areas",
    ],
    image: HD.pergola,
  },
  {
    slug: "soft-landscaping",
    title: "Soft Landscaping",
    kicker: "Soft Landscaping & Garden Maintenance",
    body: "Soft landscaping focuses on the natural and green elements of an outdoor space. JAYAM provides soft landscaping solutions designed to improve the appearance and overall environment of gardens, outdoor areas and properties. Our team understands that plants and landscaped areas require regular care to remain healthy and attractive.",
    points: [
      "Planting",
      "Garden development",
      "Green areas",
      "Plant maintenance",
      "Indoor plantation",
      "Landscape maintenance",
      "Property greenery maintenance",
    ],
    image: HD.landscape,
  },
  {
    slug: "hard-landscaping",
    title: "Hard Landscaping",
    kicker: "Functional & Attractive Outdoor Spaces",
    body: "Hard landscaping includes the structural and decorative elements that help define outdoor spaces. JAYAM provides hard landscaping services for properties that require durable, practical and visually appealing outdoor solutions. We work according to the property's layout, requirements and intended use.",
    points: [
      "Outdoor structure",
      "Durable surfaces",
      "Practical long-term value",
      "Work complementary to surrounding architecture",
    ],
    image: HD.hardscape,
  },
  {
    slug: "swimming-pools",
    title: "Swimming Pool",
    kicker: "Swimming Pool Maintenance Services in Dubai",
    body: "A swimming pool requires regular care and maintenance to remain clean, functional and suitable for use. JAYAM provides swimming pool maintenance services for residential and commercial properties. We also provide maintenance support for kids' pools and recreational areas.",
    points: [
      "Regular pool maintenance",
      "Technical inspection",
      "Pool-related maintenance",
      "Cleaning support",
      "Maintenance of pool equipment and related systems",
      "Repair and service requirements",
      "Kids pool maintenance",
    ],
    image: HD.pool,
  },
  {
    slug: "water-features",
    title: "Water Features & Water Fountains",
    kicker: "Water Feature Maintenance Services",
    body: "Water features and fountains add character and visual appeal to residential, commercial and hospitality environments. However, they require regular maintenance to remain clean, functional and visually attractive. JAYAM provides maintenance services for water features and water fountains based on the requirements of the property.",
    points: [
      "Water fountain maintenance",
      "Water feature maintenance",
      "Technical inspection",
      "Cleaning and maintenance support",
      "Repair requirements",
      "Ongoing maintenance support",
    ],
    image: HD.water,
  },
  {
    slug: "play-area",
    title: "Play Area Maintenance",
    kicker: "Safe & Well-Maintained Recreational Areas",
    body: "Play areas require regular inspection and maintenance to keep the space clean, functional and properly maintained. JAYAM provides play area maintenance support for residential communities, properties and recreational environments.",
    points: [
      "Regular inspection",
      "Maintenance support",
      "Cleaning-related requirements",
      "Repair support",
      "General upkeep",
      "Site maintenance",
    ],
    image: HD.play,
  },
  {
    slug: "installation-maintenance",
    title: "Installation & Maintenance",
    kicker: "Installation and Ongoing Maintenance Services",
    body: "Proper installation is only one part of maintaining a property. Regular maintenance is equally important for keeping systems and facilities functional over time. JAYAM provides installation and maintenance support across its service areas according to individual project requirements.",
    points: [
      "MEP systems",
      "Plumbing",
      "Landscaping",
      "Swimming pools",
      "Water features",
      "Other technical services",
    ],
    image: HD.industrial,
  },
];

export const INDUSTRIES = [
  {
    title: "Villas & Residential Properties",
    body: "We provide MEP, plumbing, landscaping, swimming pool, indoor plantation and other technical services for private villas and residential properties.",
    image: HD.villa,
  },
  {
    title: "Commercial Buildings",
    body: "Commercial buildings require reliable technical systems and regular maintenance. Our services support different commercial property requirements.",
    image: HD.dubai,
  },
  {
    title: "Offices & Workspaces",
    body: "We provide technical services for office environments, including MEP, air conditioning, ventilation, plumbing, partitions and other requirements.",
    image: HD.interior,
  },
  {
    title: "Retail Spaces",
    body: "Retail properties require functional technical systems and attractive environments. Our experience includes MEP and fit-out works for retail projects.",
    image: HD.hospitality,
  },
  {
    title: "Restaurants & Hospitality",
    body: "Our project portfolio includes MEP and fit-out work for restaurants and hospitality-related properties.",
    image: HD.restaurant,
  },
  {
    title: "Residential Developments",
    body: "Our plumbing and maintenance experience also includes larger residential developments, including a 32-villa project at DAMAC Hills.",
    image: HD.evening,
  },
] as const;

export const FAQS = [
  {
    q: "What does JAYAM Technical Services do?",
    a: "JAYAM Technical Services LLC provides MEP, electro-mechanical, air conditioning and ventilation, plumbing and sanitary, gypsum, false ceiling, partition, aluminium and glass, landscaping, swimming pool, water feature, pergola, shade structure and play area maintenance services.",
  },
  {
    q: "Where is JAYAM Technical Services located?",
    a: "JAYAM Technical Services LLC operates in Dubai, UAE, and has project experience across different locations in the UAE.",
  },
  {
    q: "When was JAYAM Technical Services established?",
    a: "JAYAM Technical Services LLC was established in 2021.",
  },
  {
    q: "Does JAYAM provide MEP services in Dubai?",
    a: "Yes. MEP is one of JAYAM's core service areas. The company has completed MEP and MEP fit-out works across different commercial, hospitality, retail and residential projects.",
  },
  {
    q: "What MEP services does JAYAM provide?",
    a: "JAYAM's technical service portfolio includes electro-mechanical services, air conditioning and ventilation, plumbing and sanitary and related installation and maintenance requirements.",
  },
  {
    q: "Does JAYAM provide plumbing services?",
    a: "Yes. Plumbing and sanitary services are among JAYAM's areas of expertise. The company's project portfolio includes plumbing works for villas, residential developments and commercial properties.",
  },
  {
    q: "Does JAYAM provide landscaping services?",
    a: "Yes. JAYAM provides both soft landscaping and hard landscaping services, along with landscape maintenance and indoor plantation services.",
  },
  {
    q: "Does JAYAM provide swimming pool maintenance?",
    a: "Yes. Swimming pool and kids pool maintenance are part of JAYAM's listed service areas.",
  },
  {
    q: "Does JAYAM maintain water fountains?",
    a: "Yes. Water features and water fountains are among the company's areas of expertise.",
  },
  {
    q: "Does JAYAM provide air conditioning services?",
    a: "Yes. Air conditioning and ventilation are included in JAYAM's technical service portfolio.",
  },
  {
    q: "Does JAYAM provide gypsum and false ceiling work?",
    a: "Yes. Gypsum, false ceiling and partition works are included among the company's services.",
  },
  {
    q: "Does JAYAM provide aluminium and glass work?",
    a: "Yes. JAYAM provides aluminium and glass installation and maintenance services.",
  },
  {
    q: "Does JAYAM work with villas?",
    a: "Yes. JAYAM has experience working on private villas and residential properties, including MEP, plumbing, landscaping, indoor plantation and swimming pool maintenance projects.",
  },
  {
    q: "Does JAYAM work with commercial properties?",
    a: "Yes. The company's project experience includes commercial buildings, retail spaces, restaurants, hotels and other commercial environments.",
  },
  {
    q: "Can JAYAM provide maintenance services?",
    a: "Yes. Maintenance is an important part of JAYAM's service offering and includes areas such as landscaping, swimming pools, water features, indoor plantation, plumbing and technical systems.",
  },
  {
    q: "How can I request a quotation?",
    a: "You can contact JAYAM Technical Services LLC by phone or email and provide your project or maintenance requirements. Our team can then understand the requirement and discuss the appropriate service.",
  },
] as const;

export const SERVICE_OPTIONS = CAPABILITIES.map((c) => c.title);

export const CONTACT_COPY = {
  heroLabel: "Contact",
  heroTitle: ["Let's Discuss", "Your Project"],
  lede: "Looking for a reliable technical services company in Dubai? Whether you need MEP services, plumbing, air conditioning and ventilation, landscaping, swimming pool maintenance, water feature maintenance or other technical services, JAYAM Technical Services LLC is ready to discuss your requirements.",
  support:
    "Tell us about your property, project or maintenance requirement. Our team will understand your needs and discuss the appropriate solution.",
} as const;
