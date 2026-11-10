/* ADD NEW WORK HERE. Drop images in /img (webp), add an entry, done.
   Image names: "name.webp" (full) and "name-t.webp" (thumbnail). */

const SITE = {
  name: "Mogaji Mohammed Ajibola",
  email: "mogajimohd@gmail.com",
  phone: "+234 907 845 2773",
  linkedin: "https://www.linkedin.com/in/mohammed-mogaji-93b050273/"
};

/* UI/UX: each project keeps its own colour via `accent`.
   Empty `goals` / `role` fields are hidden until you fill them in. */
const UIUX = [
  { id: "gistr", title: "Gistr", category: "Website design · Mobile app", accent: "#4d42b5",
    img: "gistr", desc: "Gistr is a calling app that gives you your own number to call international and local numbers at low rates. Its main purpose is helping Nigerians abroad call Nigerians back home more cheaply, though anyone in Nigeria can use it too. Unlike ordinary phone lines, there are no cards to buy: you top up, transfer credit and make calls all in the same app. My job was to showcase these features on a one-page website, with direct links to download the app from the app stores.",
    role: "UI/UX Designer", tools: "Figma",
    goals: ["Show what Gistr does, and who it is for, at a glance","Showcase calling, top-up and transfer in one app","Make downloading easy with direct app store links"],
    link: { href: "https://gistr.co/", label: "Visit the live website ↗" } },
  { id: "intarvas", title: "IntarvAS Top Up", category: "Product design · Client work", accent: "#9d5d44",
    img: "intarvas", desc: "A top-up website for IntarvAS Communications Limited. Customers use it to top up, and I designed the pages as the reference that developers built from.",
    role: "UI/UX Designer", tools: "Figma", goals: ["A clear, fast top-up flow","Design files ready for developer handoff"],
    link: { href: "https://www.figma.com/proto/W9eyzpZJOJIPxqXCfILcz0/IntarVAS-Top-UP-Page?node-id=7335-80&t=IrGgUoGHjXeKAnW4-0&scaling=min-zoom&content-scaling=fixed&page-id=7%3A206&starting-point-node-id=7182%3A253", label: "Open Figma prototype ↗" } },
  { id: "polio", title: "Polio", category: "SaaS · Design system", accent: "#2b2f3a",
    img: "polio", desc: "SaaS homepage and design system for Polio, built from reusable components.",
    role: "UI/UX Designer", tools: "Figma", goals: [],
    link: { href: "https://www.figma.com/proto/BkmHBGqhRTSnXBbhhJrcdi/Final-Project-Design-System-for-Polio?node-id=7-505&t=cZXUPhsTI0WvQBGe-0&scaling=min-zoom&content-scaling=fixed&page-id=7%3A206", label: "Open Figma prototype ↗" } },
  { id: "yistory", title: "YISTORY Car Dealer", category: "Website design · Prototype", accent: "#de8a60",
    img: "yistory", desc: "A concept I worked on while learning, and my first major prototyping project. Hover over the car sections and the featured car and its name switch, which is the interaction I built in the prototype.",
    role: "UI/UX Designer", tools: "Figma prototyping", goals: ["Practise interactive prototyping","Build hover-driven section switching"],
    link: { href: "https://www.figma.com/proto/9nKWQyS4SZ3JzHt4F15kuQ/YISTORY-Car-Dealer-Homepage?node-id=4002-2&t=cZXUPhsTI0WvQBGe-0&scaling=contain&content-scaling=responsive&page-id=0%3A1", label: "Open Figma prototype ↗" } },
  { id: "travel", title: "Travel Guide", category: "Website design · Practice concept", accent: "#8e6c1a",
    img: "travel", desc: "An early practice piece. I followed a YouTube tutorial as a template while learning, so this is a concept design rather than a working website.",
    role: "UI/UX Designer", tools: "Figma", goals: [],
    link: { href: "https://www.figma.com/proto/SMrY9m5LKNwwpkdI7BJ6x6/TRAVEL-GUIDE-WEBPAGE?node-id=2003-4&t=HQZdxIsskLrom75P-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1", label: "Open Figma prototype ↗" } },
  { id: "krypto", title: "Krypto NFTs", category: "Web3 · Practice concept", accent: "#31336a",
    img: "krypto", desc: "An early practice piece. I followed a YouTube tutorial as a template while learning, so this is a concept design rather than a working website.",
    role: "UI/UX Designer", tools: "Figma", goals: [],
    link: { href: "https://www.figma.com/proto/6c6Vw99VOiw1XuJdRStSpq/KRYPTO-NFT-WEBPAGE?node-id=205-76&t=SPk0YLuDzf17CbcQ-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1", label: "Open Figma prototype ↗" } }
];

/* LOGOS: `shots` = [image, caption]. First shot is the cover. `brief` is optional text. */
const LOGOS = [
  { id: "luxe", coverImg: "luxe-logo", fit: "contain", title: "Luxe Plaza", sub: "Beverage distributor in Wofun, Ibadan",
    brief: "A logo and visual identity for Luxe Plaza Multi-purpose Limited, a wholesale beverage distributor at Wofun, along the Ibadan–Iwo Road corridor. It had to tell shop owners, supermarkets, restaurants and event suppliers at a glance that the company supplies drinks in volume, and stay recognisable on a moving truck or a stack of crates.",
    concept: "A loaded distribution cart carries two crates, one of PET bottles and one of contour glass bottles, drawn generic so no bottler’s brand is copied. Half-tire wheels with the tread cut out as negative space suggest delivery and motion, and a yellow speed stripe under the name signals fast service.",
    deliver: "Four logo versions (primary, alternate, plain and black) as SVG and PNG, colour codes, the wordmark typography (Quicksand SemiBold), and mockups on a delivery vehicle, website, signboard and branded merchandise.",
    shots: [["luxe-08","Primary logo, colour codes and usage"],["luxe-07","Logo versions"],["luxe-06","Colour and typography"],["luxe-01","Project brief"],["luxe-12","Delivery vehicle"],["luxe-13","Website"],["luxe-14","Signboard"],["luxe-15","Branded merchandise"]] },
  { id: "xavier", title: "Xavier’s Dive Bar", sub: "Logo and identity",
    brief: "Logo and identity for Xavier’s Dive-Bar, shown with the creative brief, logo presentation and mockups.",
    shots: [["logo-brief-xavier-s-dive-bar","Creative brief"],["xavier-s-diver-bar-1","Final logo"],["logo-presentation-xavier-s-divbar","Logo presentation"],["xavier-s-diver-mock-up","Mockup"],["logo-mock-up-xavier-s-dive-bar","Mockup"]] },
  { id: "penbleeds", coverImg: "pen-3", title: "Penbleeds & Co", sub: "Logo redesign · Apr 2023 – Oct 2025",
    brief: "A logo redesign for Penbleeds & Co, a publishing company I worked with as Graphic Design Specialist from April 2023 to October 2025. Redesigning their logo was one of my first major projects there. The previous logo did not feel premium, so the goal was a mark that looks professional and makes it clear this is a company that publishes books.",
    concept: "The name made the idea straightforward: a pen bleeding ink onto an open book. It is a simple concept, but it came out premium and professional, and it made the design process easier for me. I had a great time working with Penbleeds, and the full concept sheet is in the gallery.",
    shots: [["pen-3","Final logo"],["pen-7","Pictorial mark"],["pen-6","Logo concept"],["pen-4","Brand identity and brief"],["pen-5","Business card"],["pen-1","Social mockup"],["pen-2","Social mockup"]] },
  { id: "arias", coverImg: "arias-bottle-water-logo", title: "Arias Bottled Water", sub: "AB monogram",
    brief: "A monogram logo for a bottled water company. Arias Bottled Water is not a real client: it is a self-initiated concept project, created to practise brand identity design. The A and B are combined into a single mark in water blue. Shown with the creative brief, concept and a bottle mockup.",
    shots: [["ab-monogram-lofgo-brief","Creative brief"],["ab-monogram-logo-concept","Logo concept"],["arias-bottle-water-logo","Final logo"],["arias-bottle-water-logo-mock-up","Bottle mockup"]] },
  { id: "perotti", title: "Perotti", sub: "PD monogram",
    brief: "A PD monogram logo for Perotti, a skincare brand, shown with the concept and a mockup.",
    shots: [["pd-monogram-logo-concept-perotti","Logo concept"],["pd-monogram-logo-perotti-1","Final logo"],["perotti-mock-up","Mockup"]] }
];

const FLYERS = [
  { img: "controlled-chaos", title: "Controlled Chaos", note: "Rave school party flyer for the College of Science Students’ Association, ABUAD" },
  { img: "eid-mubarak", title: "Eid Mubarak", note: "Eid greeting flyer" },
  { img: "eid-mubarak-mssn-abuad", title: "Eid Mubarak, MSSN ABUAD", note: "Eid greeting flyer for the Muslim Students’ Society, ABUAD" },
  { img: "whipped-by-fathy", title: "Whipped by Fathy", note: "Flyer for a small baker of freshly baked treats" },
  { img: "femme-five-event-decor-training-registra", title: "Femme Five", note: "Event décor training registration" },
  { img: "oath-taking-flyer-celebration", title: "Oath-taking celebration", note: "Celebration flyer" }
];

/* MERCH: MarqueXrl. First image of each colourway shows first. */
const MERCH = {
  brand: "MarqueXrl",
  colourways: [
    { name: "Red", hex: "#b3262a", imgs: ["hoodie-mockup-red-w-black-lips-final","hoodie-mockup-red-w-black-lips-back","hoodie-mockup-red-w-black-lips-front-bac","free-pants-mock-red-w-black"] },
    { name: "Black / pink", hex: "#1a1a1a", imgs: ["hoodie-mockup-black-w-pink-lips","hoodie-mockup-black-w-pink-lips-back","hoodie-mockup-black-w-pink-lips-front-ba","free-pants-mock-black-w-pink"] },
    { name: "Black / red", hex: "#2a0f12", imgs: ["hoodie-mockup-black-w-red-lips-final","hoodie-mockup-black-w-red-lips-back","hoodie-mockup-black-w-red-lips-front-bac","free-pants-mock-black-w-red"] },
    { name: "White", hex: "#eeeae4", imgs: ["hoodie-mockup-white-w-red-lips","hoodie-mockup-white-w-red-lips-back","hoodie-mockup-white-w-red-lips-front-bac"] },
    { name: "White / black", hex: "#c9c4bb", imgs: ["hoodie-mockup-white-black-w-red-lips","hoodie-mockup-white-black-w-red-lips-bac","hoodie-mockup-white-black-w-red-lips-fro"] },
    { name: "Brown", hex: "#5a3a2a", imgs: ["hoodie-mockup-brown-w-black-lips-final","hoodie-mockup-brown-w-black-lips-back","hoodie-mockup-brown-w-black-lips-front-b","free-pants-mock-brown-w-black"] }
  ]
};

/* TESTIMONIALS: section stays hidden until this has entries.
   { quote, name, role, photo: "img/people/name.webp" } */
const TESTIMONIALS = [
  { quote: "Mohammed is an incredibly talented and consistent collaborator. He brought fantastic concepts to the table that aligned the team, including a premium redesign of our company logo. His execution is precise and high-quality. I highly recommend him.",
    name: "Olamide Ayoade", role: "Founder & Director, Penbleeds and Co", worked: "Graphics Designer at Penbleeds",
    photo: "img/people/olamide-ayoade.webp", linkedin: "https://www.linkedin.com/in/olamide-ayoade" },
  { quote: "Working with Mohammed was phenomenal and the results were highly satisfying. He has a creative mind and a real talent for delivering innovative designs that elevated our product. He brings a fresh perspective to everything he touches.",
    name: "Tomiwa Bada", role: "CEO, Fitventry", worked: "Freelance Product Designer",
    photo: "img/people/tomiwa-bada.webp", linkedin: "https://www.linkedin.com/in/tomiwa-bada-572018173" },
  { quote: "Mohammed makes developer collaboration effortless. While designing the Gistr website, he constantly synced with us to ensure his concepts were practical to build. I loved how he carried the team along, making the handoff smooth and straightforward.",
    name: "Toluwani Oluwaranti", role: "Full Stack Developer, IntarvAS Communications", worked: "UI/UX Designer at IntarvAS",
    photo: "img/people/toluwani-oluwaranti.webp", linkedin: "https://www.linkedin.com/in/toluwani-oluwaranti/" },
  { quote: "Mohammed is highly dedicated, hits his deadlines perfectly, and is just genuinely fun to work with. I worked closely with him and was thoroughly impressed by his design skills. He is a massive asset to any product team.",
    name: "Ayooluwatomide Komolafe", role: "Chief Technology Officer (CTO), IntarvAS Communications", worked: "UI/UX Designer at IntarvAS",
    photo: "img/people/ayooluwatomide-komolafe.webp", linkedin: "https://www.linkedin.com/in/ayooluwatomide-komolafe-854391173" }
];

const EXPERIENCE = [
  { role: "UI/UX Designer", org: "IntarvAS Communications Limited", when: "2026",
    pts: ["Designed user-focused website interfaces, wireframes and interactive prototypes in Figma.", "Recreated existing website designs in Figma through visual analysis, without access to original design assets.", "Applied usability, accessibility and user-centred principles, and refined layouts, navigation and visual hierarchy."] },
  { role: "Graphic Design Specialist", org: "Penbleeds and Co · Remote", when: "Apr 2023 – Oct 2025",
    pts: ["Designed promotional materials and branding visuals.", "Assisted with layout design for digital and print content.", "Improved consistency of visual identity across designs."] },
  { role: "Graphic Designer, Freelance", org: "Self-employed", when: "2022 – 2025",
    pts: ["Designed posters, flyers, banners and social media graphics for individuals and small organisations.", "Worked with clients on briefs and revisions while managing several projects at once."] }
];
const SKILLS = {
  "UI/UX": ["User interface design","Wireframing","Prototyping","User flow design","Layout and visual hierarchy","Responsive design","Design thinking"],
  "Graphic design": ["Branding and identity","Logo design","Poster and flyer design","Social media graphics","Typography","Colour theory"],
  "Tools": ["Figma","FigJam","Adobe Illustrator","Adobe Photoshop","Canva","Visual Studio Code"]
};
