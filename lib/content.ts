/**
 * Site copy for elenauvarova.com.
 * Edit this file to change the words on the site, then refresh the browser.
 *
 * Project photographs: add image: "/projects/your-file.jpg" on a project
 * and put the file in public/projects/. Until then, each project uses an
 * original colour study.
 */

export const site = {
  name: "Elena Uvarova",
  url: "https://elenauvarova.com",
  email: "elenauvarova@me.com",
  phoneDisplay: "+44 7703 564394",
  phoneHref: "tel:+447703564394",
  linkedin: "https://www.linkedin.com/in/elena-uvarova/",
  location: "London",
  role: "Creative Producer • Technical Production • Experience Design • Light Artist",
  cvMailto:
    "mailto:elenauvarova@me.com?subject=CV%20request%20%E2%80%94%20Elena%20Uvarova&body=Hello%20Elena%2C%0A%0AI%27d%20like%20to%20request%20your%20CV.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills & Services" },
  { href: "/work-with-me", label: "Work with me" },
  { href: "/contact", label: "Contact" },
] as const;

export const clients = [
  "BTS",
  "Samsung",
  "Netflix",
  "Lenovo",
  "Mercedes",
  "McVitie's",
  "Paramount+",
  "Merlin Entertainments",
  "Rimmel",
  "London New Year's Eve",
] as const;

export type ProjectCategory = "Light" | "Installation" | "Landmark";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  summary: string;
  mission: string;
  challenge: string;
  solution: string[];
  metrics: string[];
  /** Path under public/, for example "/projects/soma-sleep-lab.jpg". */
  image?: string;
};

export const projectCategories = [
  "All",
  "Light",
  "Installation",
  "Landmark",
] as const;

export type ProjectFilter = (typeof projectCategories)[number];

export const projects: Project[] = [
  {
    slug: "immersive-colour-light",
    title: "Immersive Colour Light",
    client: "Self-initiated",
    category: "Light",
    summary:
      "A self-produced light installation exploring how colour and space can induce a hyper-aware, contemplative state — created for my MA dissertation, drawing on James Turrell's Ganzfeld works and Olafur Eliasson's colour installations.",
    mission:
      "Test whether an immersive encounter with light and colour could produce a genuine perceptual and emotional shift in its audience — a phenomenon widely observed in immersive light art, but rarely studied. The aim: strip a space back to just light and colour, and see what happens when the mind has nothing else to hold onto. Drawing on James Turrell's Ganzfeld environments and Olafur Eliasson's colour installations, I set out to remove familiar visual reference points and create an experience in which perception itself became the subject — then evaluate whether its effects continued beyond the immediate encounter.",
    challenge:
      "Translate an academic research question into a compelling physical experience that could also generate meaningful audience insight. The installation needed to create a fully enclosed, perceptually convincing environment with no visible external reference points, while working within a self-funded budget, borrowed studio and limited build window. Creative ambition therefore had to be balanced with material experimentation, technical feasibility, participant safety and a methodology for evaluating an inherently subjective experience.",
    solution: [
      "I developed the project from research hypothesis through to concept, sensory design and spatial experience, reducing the environment to three primary elements: light, colour and sound. Inspired by the perceptual deprivation of the Ganzfeld effect, I designed a freestanding cylindrical canopy in white theatre-grade lycra that removed external visual reference points and became an apparently boundaryless field of colour. An externally controlled LED system flooded the enclosure through an 18-minute journey of four core colours and transitional states, while a spatial soundscape developed with sound artist Fabio Garzes provided a grounding counterpoint to the intensity of the visual environment.",
      "I led the project end to end — from artistic research, concept development and colour testing through to spatial and technical design, budgeting, crew coordination, rigging, installation, RAMS and live operation. The experience was delivered in controlled small-group sessions with an invigilator present throughout, allowing the installation to function simultaneously as an artwork and a research environment. I then designed participant questionnaires and follow-up interviews to examine whether the perceptual effects extended beyond the installation itself, turning audience response into evidence with which to evaluate the original creative hypothesis. The project established an approach that continues to inform my work: starting with a question about human experience, translating it into a sensory environment, and testing whether the experience creates the intended shift.",
    ],
    metrics: [
      "300+ participants experienced the installation in controlled small-group sessions",
      "80% described the experience as memorable six months later, based on my follow-up research",
      "55% reported increased perceptual awareness after two months, based on my follow-up interviews",
      "18-minute audiovisual journey built around four core colours and a wider transitional palette",
      "Original research methodology combining immersive installation, participant questionnaires and longitudinal follow-up interviews",
      "Self-initiated and self-funded, developed as the practical research component of my MA dissertation",
      "End-to-end creative ownership across research, concept, sensory and spatial design, colour development, technical design, testing and installation",
      "Multidisciplinary delivery coordinating build, lighting and audio specialists, with full RAMS and controlled audience operation",
    ],
  },
  {
    slug: "soma-sleep-lab",
    title: "Soma Sleep Lab",
    client: "Soma Studio",
    category: "Light",
    summary:
      "An immersive sound-and-light sleep experience exploring how suspension, colour and live sound can create a state of deep rest — commissioned and hosted by Soma Studio for a two-week public run, in collaboration with sound artist Fabio Garzes.",
    mission:
      "Create an antidote to the overstimulation of city life — transforming a London studio into a restorative environment where visitors could physically disconnect, slow down and experience deep rest through an immersive combination of hammock suspension, red light and live sound.",
    challenge:
      "Translate the intangible experience of rest into a physical environment that could operate repeatedly for public audiences. The installation needed to make visitors feel physically and psychologically removed from everyday life while integrating ten suspended hammocks, a choreographed light programme and live music into one coherent sensory journey — balancing atmosphere, comfort and creative intent with the technical and safety requirements of suspending participants from the building structure.",
    solution: [
      "I developed the concept and creative direction around three interconnected elements: suspension, red light and live sound. Ten full-body hammocks were arranged across the studio to create individual cocoons within a shared environment, physically lifting visitors away from the everyday space beneath them. Drawing on research into sleep, light and circadian rhythm, in collaboration with Rachel Wingfield, I developed a saturated red visual language that transformed the white studio into a warm, enveloping environment, using changes in intensity and hue to support the progression from arrival into deeper relaxation.",
      "Working with sound artist Fabio Garzes, I developed the experience around a live soundscape structured through a four-second breathing rhythm, with the changing light environment responding in tandem to create a single audiovisual journey. I led the project from concept through to its two-week public run — spanning research, moodboards and creative direction, spatial and lighting design, technical feasibility, prototyping and development through to budget, multidisciplinary team coordination, installation and live delivery. Working with Rachel Wingfield on the hammock rigging design, I translated the creative concept into a safe, operational installation capable of safely supporting participants throughout the public run while protecting the intimacy and atmosphere at the heart of the experience.",
    ],
    metrics: [
      "90% of attendees reported feeling deeply relaxed following the experience",
      "10 suspended full-body hammocks creating individual rest environments within a shared installation",
      "10 operating days across a two-week public run, with approximately 100 attendees at full capacity",
      "£15k production budget managed from concept through delivery",
      "8-person multidisciplinary team across rigging, AV, creative and production",
      "Live audiovisual experience synchronising a changing red-light environment with Fabio Garzes' four-second breathing rhythm",
      "Technical drawing and spatial planning, in collaboration with Rachel Wingfield",
    ],
  },
  {
    slug: "somatic-states",
    title: "Somatic States",
    client: "London Design Festival",
    category: "Light",
    summary:
      "An immersive sound-and-light meditation exploring rest, creativity and presence — commissioned for London Design Festival 2020 and created in collaboration with light artist Rachel Wingfield and sound meditation artist Leo Cosendai.",
    mission:
      "Create a moment of genuine mental and emotional reset within the intensity of London — using light, colour, spatial design and guided sound meditation to explore the relationship between rest, creativity, connection and presence, built around the idea of “the rested mind.”",
    challenge:
      "Translate an internal, intangible state — calm — into a physical and sensory experience. The installation needed to bring light, sound, space and performance together as one meditative journey, while remaining visually compelling on camera and adaptable across multiple spatial configurations for a filmed experience broadcast throughout London Design Festival 2020.",
    solution: [
      "I developed the creative direction around “the rested mind”, using the circle as a recurring visual symbol of attention, restoration and renewal. Five illuminated hoops became both light source and spatial architecture, arranged across three configurations to shift the experience between enclosure, grounding and depth. I developed two colour systems — moving through deep reds, warm ambers and soft blush tones into contrasting turquoise — to create distinct emotional atmospheres throughout the journey, while blackout conditions and haze allowed colour and light to dissolve the boundaries of the surrounding studio.",
      "Working with sound meditation artist Leo Cosendai, I structured the experience around Arrival, Grounding, Immersion, Deep Rest and Integration, pairing the changing light environment with a bespoke sound meditation performed using singing bowls and gong. The experience was captured on film and designed to be revisited digitally throughout the festival, extending a temporary physical installation into an accessible meditative experience. I led the project and a 12-person multidisciplinary team end to end — from concept development, research, moodboards and creative direction through spatial and lighting design, technical development, scheduling, supplier coordination and stakeholder management to final filmed delivery — managing a £50k production budget.",
    ],
    metrics: [
      "£50k production budget managed from concept through to final delivery",
      "12-person multidisciplinary team led across creative, lighting, sound, technical, film and production",
      "5 bespoke illuminated hoops creating a modular light and spatial system",
      "3 spatial configurations developed to create distinct relationships between light, performer and environment",
      "2 custom colour systems designed to support the emotional progression of the experience",
      "5-stage sensory journey — Arrival, Grounding, Immersion, Deep Rest and Integration",
      "400+ viewers across three sessions, with the experience available digitally throughout London Design Festival 2020",
      "Creative collaboration with Rachel Wingfield and Leo Cosendai, integrating light, spatial design and bespoke sound meditation into one experience",
    ],
  },
  {
    slug: "have-a-wee-like-actually",
    title: "Have a Wee, Like Actually",
    client: "Burning Bear",
    category: "Installation",
    summary:
      "A temporary immersive installation combining 3D sculptural geometry, projection mapping and bespoke kaleidoscopic content — created for Burning Bear 2025, a four-day community festival staged within the weathered basement of a historic German castle.",
    mission:
      "Transform a forgotten, overlooked space into a place of wonder, curiosity and connection — using sculptural geometry, light and colour to disrupt perceptions of the existing architecture and explore how a place can be experienced differently when the familiar is fragmented and reconstructed through digital media.",
    challenge:
      "Design and fabricate a lightweight, modular installation for a four-day festival within a protected heritage site, working with a minimal budget, short build window and international transportation. On arrival, the agreed clear room had become a disused urinal block, requiring the concept to be reimagined in real time around four existing urinals, a deteriorating no-drill wall and limited infrastructure — without losing the visual language or experiential intent of the original concept.",
    solution: [
      "I developed the installation from initial research and concept narrative through to its visual, sculptural and spatial language. Drawing on ideas around perception, fragmentation, architectural memory and light as material, I reduced the physical design to repeatable three-dimensional triangular modules that could be fabricated flat, transported internationally and rapidly assembled into different compositions through changes in scale, rotation and orientation. Colour studies explored neon, prism, dichroic and kaleidoscopic palettes, creating a vivid visual counterpoint to the deteriorating architecture.",
      "When the site changed, I adapted the composition around the room rather than attempting to disguise it. The triangular sculpture, weathered wall and existing urinals became a single projection canvas, mapped with custom abstract content that fractured across the different surfaces and transformed the room through colour, movement and optical distortion. The experience was designed around Arrival, Discovery, Exploration, Immersion and Reflection, but evolved socially once live: visitors brought plush armchairs into the room, stayed for extended periods and turned a previously overlooked space into an informal gathering point, their presence and movement echoing its colour and light and bringing the work to life. I led the project end to end — across research, concept development, visual and colour direction, modular design, prototyping, projection content, technical feasibility, stakeholder coordination and on-site installation — delivering the experience with a minimal crew and budget within a four-day festival window.",
    ],
    metrics: [
      "4-day immersive installation created for Burning Bear 2025 in a historic German castle",
      "~200 festival attendees, with the installation continuously occupied during live periods",
      "14 bespoke modular sculptures across three scales, designed for flat-pack transportation from the UK to Germany and rapid on-site assembly",
      "Real-time creative adaptation from an agreed clear room to a disused four-urinal space on arrival",
      "5-stage audience journey developed across Arrival, Discovery, Exploration, Immersion and Reflection",
      "4 bespoke colour studies developed to define the installation's projection and visual language",
      "End-to-end creative ownership across research, concept narrative, visual development, sculpture, prototyping, projection content and installation",
      "Visitors organically introduced armchairs and prolonged dwell, transforming the installation into a social gathering space",
    ],
  },
  {
    slug: "feel-the-pull",
    title: "Feel The Pull Installation",
    client: "Pixel Artworks",
    category: "Installation",
    summary:
      "An interactive audiovisual installation exploring magnetic forces through light, sound and movement — commissioned for Clerkenwell Design Week 2025 and produced by Pixel Artworks within the vaulted spaces of the former Clerkenwell Prison.",
    mission:
      "Make an invisible force visible, spatial and physical — translating the push and pull of magnetism into a responsive environment where visitors' movement actively shapes the experience. The installation needed to invite curiosity and participation while using digital content to elevate rather than overpower the landmark architecture around it.",
    challenge:
      "Transform a historic underground space into a fully responsive digital environment, integrating five LED screens, two sensing systems, reactive lighting, audio and real-time content into one seamless experience. The challenge was not simply making the technology work together, but designing an interaction intuitive enough to be discovered without instruction — balancing content, responsiveness, dwell time and audience flow to create moments of both individual discovery and collective play.",
    solution: [
      "Five LED screens were positioned between the existing arches to create a digital gallery, with a visual language inspired by magnetic fields, polarity and fluid dynamics. Saturated reds and oranges collided with electric blues, while responsive LED lighting carried the colour beyond the screens and across the brick vaults and columns, integrating the architecture into the experience. At rest, the content held a mirrored symmetry; as visitors entered the field, skeletal tracking translated their movement into shifting, distorting geometry, while proximity sensors at opposing ends acted as magnetic poles, changing the density and direction of the field. A reactive soundscape completed the system, allowing visuals, light, sound and movement to behave as one interconnected environment.",
      "The experience was deliberately designed to be discovered rather than explained. Colour and movement glimpsed through the arches created the initial pull; entering the space revealed that physical position affected what visitors could see and hear. Discovery became experimentation as people stepped closer, moved away and watched one another reshape the environment — turning an individual interaction into collective play. I shaped the early creative development, from concept narrative and interaction principles to visual language and moodboards, then led production through technical feasibility, prototyping, integration and live delivery, managing the budget and an 18-person multidisciplinary team across content, interactive technology, LED, lighting, audio and production.",
    ],
    metrics: [
      "4,500+ visitors across the three-day Clerkenwell Design Week installation",
      "~1,500 visitors per day across approximately 10 live hours",
      "Estimated 80% active interaction — approximately 3,600 visitors engaging directly with the responsive experience",
      "Observed extended dwell — approximately 20% staying 10+ minutes, with around 13 people interacting simultaneously during peak periods",
      "Estimated 35% photographed or shared the experience",
      "5 LED screens + 2 sensing systems integrating skeletal tracking and proximity sensing with real-time TouchDesigner content, lighting and audio",
      "18-person multidisciplinary team across creative, content, interactive, LED, lighting, audio, technical and production",
      "Visitor feedback described the experience as “hypnotic” and among the most innovative installations encountered at the festival",
    ],
  },
  {
    slug: "county-hall-shows",
    title: "County Hall Shows",
    client: "County Hall",
    category: "Landmark",
    summary:
      "A series of large-scale projection mapping, architectural lighting and audio shows transforming the river-facing façades of the iconic County Hall into a canvas for global brand storytelling on London's South Bank — delivering end-to-end production for clients such as BTS, Samsung, Netflix (Luther), Lenovo, Mercedes and McVitie's.",
    mission:
      "Transform one of London's most recognisable landmarks into an unexpected moment of spectacle — stopping people in their tracks, provoking a double take and creating a campaign moment designed to travel beyond the physical experience through social media, press and broadcast. Each activation needed to feel unmistakably connected to the client's story while using the scale and architecture of County Hall to amplify its impact.",
    challenge:
      "Translate each distinct creative brief into bespoke architectural-scale experiences, projected approximately 250 metres across the Thames and synchronised across projection, lighting and audio in real time. Content had to remain visually powerful at monumental scale — from making the building appear to collapse or burst into flames to displaying live personalised data — while working within the technical constraints of the site, a complex stakeholder environment and the operational requirements of one of London's most iconic landmarks.",
    solution: [
      "Each show treated County Hall's architecture as part of the storytelling rather than simply a surface for content projection. I worked from early research and concept development to translate each brand brief into an idea that could exploit the building's scale and geometry: County Hall appeared to burn for Netflix's Luther, collapse in on itself for BTS, while Lenovo brought personalised biometric data onto the façade in real time. Projection mapping created movement, depth and optical illusion across the two river-facing façades, while architectural lighting and audio extended the experience beyond the image to create a unified spectacle across the South Bank.",
      "I led the six activations from early development through to live show, managing budgets of up to £250k and multidisciplinary teams of up to 30. Acting as the link between client, creative and technical teams, I shaped creative ideas around the opportunities and constraints of architectural-scale projection while protecting the core vision through production. My role spanned research, storyboarding and concept development through to technical design and feasibility, projection studies, testing, supplier and crew management, stakeholder approvals, installation and show control — bringing projection, lighting, audio and content together as one seamless experience.",
    ],
    metrics: [
      "6 global brand activations delivered end-to-end for BTS, Samsung, Netflix, Lenovo, Mercedes and McVitie's",
      "Up to £250k budgets managed per activation",
      "Up to 30-person multidisciplinary teams led across creative, projection, lighting, audio, technical and production",
      "~250m projection distance across the Thames onto two river-facing façades",
      "8 high-powered projectors integrated with architectural lighting and audio across both banks",
      "First technical relationship established with County Hall, creating the foundation for repeat activations at the landmark",
      "Lenovo: personalised biometric data and real-time scheduling integrated into the façade, described in press coverage as a first for a projection campaign",
      "Samsung: architectural spectacle broadcast live across the brand's social channels",
      "Multi-agency stakeholder delivery across the Metropolitan Police, Port of London Authority, Civil Aviation Authority and County Hall stakeholders",
    ],
  },
  {
    slug: "hologauze-projections",
    title: "Hologauze Projections",
    client: "Pixel Artworks",
    category: "Landmark",
    summary:
      "A camera-led projection format that makes digital content appear to materialise within real-world landmarks. Produced by Pixel Artworks for London New Year's Eve, Merlin Entertainments, Samsung, Rimmel and Paramount+, the format has transformed views of the London Eye, Tower Bridge and Orlando Wheel into seemingly impossible in-camera spectacles — without CGI compositing.",
    mission:
      "Create an impossible moment within a real landmark: digital objects materialising against a recognisable skyline, captured physically in-camera and designed to travel far beyond the activation itself through film, photography, press and social media. For Merlin Entertainments' Galacticoaster launch, that idea became a portal between continents. The London Eye and Orlando Wheel acted as two ends of the same experience, with audiences in London and Florida witnessing the same spacecraft assembled within their respective skylines.",
    challenge:
      "Deliver a precision-built optical illusion where content, projection engineering, spatial design and cinematography operate as one system, capturing projected imagery in the foreground while keeping iconic landmarks hundreds of metres away sharp and recognisable. With no CGI to fall back on, screen geometry, brightness, camera position, lensing and ambient light had to align precisely across different sites and tightly regulated environments — often against extremely compressed timelines, including just ten days from brief to launch for Galacticoaster.",
    solution: [
      "The illusion uses Hologauze — a highly reflective, near-transparent projection fabric positioned between the camera and landmark — allowing custom content and the real skyline to be captured together in-camera. Each installation was designed backwards from the desired final shot: the hero frame determined camera position, screen dimensions, projector alignment, lensing and enclosure design. The system was then re-engineered for each location, from a modular tower across the Thames for the London Eye to a compact, light-controlled truss structure in Orlando and bespoke configurations for Tower Bridge. The technology created the illusion; bespoke narrative-led content gave each activation its meaning.",
      "I led each activation from early development through to final capture, translating the creative brief into an experience that worked both technically and visually on camera, while managing budgets of up to £50k and multidisciplinary teams of up to 14. My role spanned concept narrative, moodboarding and content development through to technical design and feasibility, testing, supplier coordination, installation, commissioning and show control. Acting as the link between creative, technical and videography teams, I continually tested creative ambition against projection geometry, framing, depth of field and ambient light — ensuring each concept was both visually compelling and technically achievable.",
    ],
    metrics: [
      "5 major clients — London New Year's Eve, Merlin Entertainments, Samsung, Rimmel and Paramount+",
      "£50k project budgets managed through end-to-end delivery",
      "Up to 14-person multidisciplinary teams across projection, build, film, technical and creative production",
      "10M+ global viewers for London New Year's Eve 2025, with coverage from Sky News and Metro",
      "2 continents — the same Galacticoaster content delivered simultaneously over the London Eye and Orlando Wheel",
      "10-day turnaround from Galacticoaster brief to launch",
      "2 Tower Bridge activations for Paramount+ and Rimmel, each requiring a different viewpoint and technical solution",
      "Trade press recognition through an interview with LIVE magazine on the Merlin production",
      "Described by the Mayor of London as a “world-first use of hologram animations” as part of London New Year's Eve 2025",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { previous, next };
}

export const about = {
  intro: [
    "I work at the intersection of **creative vision and technical production** — crafting immersive experiences that transform how people feel in space.",
  ],
  whatIDo: [
    "Working across experiential campaigns, immersive installations and interactive environments, I bring ordinary spaces to life as awe-inspiring encounters — from projection shows lighting up County Hall with custom content for thousands of viewers, and a Ganzfeld-inspired experience of colour and space with 300+ visitors in two days, to various immersive installations built for Berlin's Burning Man community. The drive to create moments of wonder, connection and discovery are central to my work, spanning the cultural, commercial and public sectors.",
    "Armed with expertise in creative development and technical production, I turn ambitious, complex ideas into extraordinary experiences without losing **artistic intent or technical precision**. In shaping emotionally resonant work that bridges conceptual thinking, creative storytelling and technical strategy, I deliver seamlessly executable projects that land with impact.",
  ],
  background: [
    "My background spans both cultural and experiential sectors — from artist-led studios and consultancies including Wolfe von Lenkiewicz, Encounter Contemporary and Helen McIntyre, to galleries such as Jealous and Cardi, and immersive production studios including Loop.ph, Soma Studio and Pixel Artworks.",
    "Over the past seven years, I've delivered projects across the UK and internationally, leading immersive productions that span experiential campaigns, public activations and landmark-scale installations for globally recognised clients, with budgets of up to £250K and on-site teams of up to 30, from client brief through to final delivery.",
  ],
  education:
    "Alongside industry practice, my work is informed by a First-Class Honours degree in Modern Art History & Philosophy from Goldsmiths, University of London, and an MA in Arts & Cultural Management from King's College London, where my graduate research into the transformative potential of immersive light art earned a Distinction.",
  practice: [
    "I believe immersive experience is one of the most direct tools we have for perceptual change — capable of reshaping how people encounter the world, and themselves within it. That conviction is informed by neuroaesthetics, phenomenology and the psychology of immersion. I'm drawn to ambition over convenience and to projects that challenge convention, demanding imagination and technical innovation.",
    "Working across interactive, digital, experiential, light and responsive environments, I'm particularly interested in how colour and sensory design alter atmosphere, affect perception and redefine the relationship between audience and space. My passion for colour and light began with painting, and deepened through years spent creating work across the light and wellness space and Burning Man community, where light and structure are conjured collaboratively from nothingness.",
    "My practice is driven by a single ambition: to make the intangible tangible — to bring stories, ideas and emotional truths into physical space as experiences people can step inside, feel and leave transformed. Too much immersive work chases spectacle at the expense of feeling and connection — yet spectacle fades the moment the lights come up, while **feeling and connection** are what stays with you. That's what I design for: an experience that leaves a lasting imprint long after the encounter is over.",
  ],
};

export const home = {
  headline:
    "I create immersive experiences that transform how people feel in space.",
  intro:
    "Across culture, experiential campaigns and brand environments, I combine **storytelling, light and technology** to design experiences that connect audiences and leave a lasting impact — backed by **7+ years** delivering ambitious creative visions with clarity, precision and excellence.",
  invitation: "Have an idea? Let's build it together.",
};

export const skillsIntro = [
  "Most ideas are lost somewhere between the pitch and opening night, so that's where I work. I act as the story architect on a project, holding structure, tone and meaning while guiding an idea from first spark to lived encounter, and staying with it right through to the final de-rig. With 7+ years and 25+ projects across the UK, Orlando, Vienna and Egypt, for the global clients shown below, I've owned budgets of up to £250K, led teams of up to 30 and kept around 75% of clients coming back.",
];

export const skillsAfterClients = [
  "I care about clarity over spectacle, and experiences that land emotionally as well as operationally. I'm as comfortable shaping a creative pitch as negotiating a supplier contract or troubleshooting live on site: production, to me, is a creative discipline. What I'm most passionate about is creating experiences audiences step inside and genuinely feel, leaving with a sense of awe, renewal and shifted perception. That's what gives the work its impact and value, for clients and audiences alike.",
];

export const services = [
  {
    title: "Creative and research-led development",
    summary: "Turning a brief into a buildable idea.",
    items: [
      "Brief interrogation with creative directors and artists",
      "Concept and narrative development, moodboards and references",
      "Storyboarding, work-in-progress reviews and simulations",
      "Pitch writing and project proposals",
      "Cultural, perceptual and art-historical research behind concepts",
      "Treatments and creative frameworks ready for client or funder presentation",
    ],
  },
  {
    title: "Audience and experience design",
    summary: "Designing how people feel, move and remember.",
    items: [
      "Audience journey design",
      "Designing for perception, memory and emotional response",
      "Light, sound, scale and space as design material",
      "Evaluation through surveys, interviews and dwell-time modelling",
    ],
  },
  {
    title: "Technical production",
    summary: "Making ambitious ideas work in the real world.",
    items: [
      "Site surveys, technical tests and feasibility",
      "Projection studies, technical specification and design",
      "Lighting, audio and interaction design",
      "Installation, commissioning, show control and creative quality control",
    ],
  },
  {
    title: "Production management",
    summary: "Delivering on time, on budget and to a high standard.",
    items: [
      "Project costing, budget management and scheduling",
      "Supplier negotiation, equipment hire and procurement",
      "Resourcing across a trusted network of specialist suppliers",
      "RAMS, site plans, permits and full project documentation",
    ],
  },
  {
    title: "Client and stakeholder leadership",
    summary: "Keeping everyone aligned.",
    items: [
      "Day-to-day client lead and link between creative and technical teams",
      "Public authority and venue liaison, including the Metropolitan Police, Port of London Authority and Civil Aviation Authority",
      "Leading multi-disciplinary teams of up to 30, from creative collaborators to on-site crew and contractors",
      "Supporting artists, designers and technologists to do their best work while keeping the production on track",
      "Protecting artistic intent through delivery",
    ],
  },
] as const;

export const tools =
  "Vectorworks · MappingMatter · Resolume · MadMapper · Figma and Canva · Microsoft and Google Suites · Trello, Team Gantt and Resource Guru · AV and immersive technologies, including projection mapping, LED, interactive sensing and Hologauze";

export const certifications = [
  "ECS Electrical Safety Course (2025)",
  "IOSH Managing Safely for Theatre and Production (2024)",
] as const;

export const delivery = [
  {
    figure: "25+",
    label:
      "Campaigns, activations and installations, in the UK, Orlando, Vienna and Egypt",
  },
  {
    figure: "£250K",
    label: "Budgets managed, with a consistent 44% margin",
  },
  {
    figure: "75%",
    label: "Repeat bookings from clients",
  },
] as const;

export const workWithMe = {
  intro:
    "A London-based creative producer with 7+ years in live and experiential production. Whether you're at the first spark or already have a brief on the table, I bring the imagination to shape an idea and the discipline to deliver it, from first conversation to completion, keeping the feeling you set out to create intact all the way through.",
  offers: [
    {
      title: "Creative development",
      body: "Concept and narrative development, pitch writing and treatments that turn a brief into an idea that's ambitious, technically feasible and ready to build.",
    },
    {
      title: "Creative producing",
      body: "Project plans and scheduling, work-in-progress reviews, and client feedback carried through to the team, adapting to unexpected changes, tight budgets and short timelines.",
    },
    {
      title: "Production at scale",
      body: "Budgets, suppliers, crew, permits and on-site delivery, from first site visit to final de-rig, including projection, LED and interactive systems, in the UK and internationally.",
    },
    {
      title: "Documentation and compliance",
      body: "RAMS, applications, venue relations, permits and public authority liaison.",
    },
    {
      title: "Client trust",
      body: "Around 75% repeat bookings, as the link between creative, technical and client teams through to delivery.",
    },
    {
      title: "Audience insight",
      body: "A research background in perception and immersive light art that shapes how experiences are designed and evaluated.",
    },
  ],
  lookingFor:
    "Creative producer roles at immersive studios, experiential agencies and arts and culture organisations in London, on work that asks for both imagination and technical ingenuity.",
};

export const contactIntro = {
  title: "Let's talk.",
  body: "If you're hiring, or you've seen something in my work that sparks an idea, I'd love to hear from you.",
};
