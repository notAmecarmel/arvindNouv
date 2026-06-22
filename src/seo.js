const SITE_URL = "https://drarvind-website.vercel.app";
const DEFAULT_IMAGE = `${SITE_URL}/favicon.svg`;

const PAGE_META = {
  "/": {
    title: "Dr. B. Arvind | Maxillofacial Surgeon in Hyderabad",
    description: "Maxillofacial, facial reconstruction, oncology, trauma, and implant surgery at PACE Hospitals, Hyderabad. Schedule a private consultation with Dr. B. Arvind.",
    image: DEFAULT_IMAGE,
    path: "/",
  },
  "/about": {
    title: "About Dr. B. Arvind | Maxillofacial Surgeon",
    description: "Learn about Dr. B. Arvind's training, fellowship, oncology expertise, and patient-centred surgical practice in Hyderabad.",
    image: DEFAULT_IMAGE,
    path: "/about",
  },
  "/consultation": {
    title: "Consultation Request | Dr. B. Arvind",
    description: "Request a private consultation with Dr. B. Arvind for expert maxillofacial surgery guidance at PACE Hospitals, Hyderabad.",
    image: DEFAULT_IMAGE,
    path: "/consultation",
  },
  "/contact": {
    title: "Contact | Dr. B. Arvind",
    description: "Contact Dr. B. Arvind for appointments, hospital consultations, and specialist maxillofacial care in Hyderabad.",
    image: DEFAULT_IMAGE,
    path: "/contact",
  },
  "/treatments": {
    title: "Treatments | Maxillofacial & Facial Surgery",
    description: "Explore jaw correction, dental implants, facial trauma reconstruction, TMJ care, and specialist oral surgical procedures with Dr. B. Arvind.",
    image: DEFAULT_IMAGE,
    path: "/treatments",
  },
  "/treatments/jaw-correction": {
    title: "Jaw Correction Surgery | Dr. B. Arvind",
    description: "Jaw correction surgery and orthognathic treatment from Dr. B. Arvind at PACE Hospitals, Hyderabad.",
    image: DEFAULT_IMAGE,
    path: "/treatments/jaw-correction",
  },
};

const getOrigin = () => {
  if (typeof window === "undefined") {
    return SITE_URL;
  }
  return window.location.origin || SITE_URL;
};

const elementCache = new Map();
let lastSeoKey = "";

const getCachedElement = (selector) => {
  if (elementCache.has(selector)) {
    return elementCache.get(selector);
  }

  const element = document.head.querySelector(selector);
  if (element) {
    elementCache.set(selector, element);
  }
  return element;
};

const createHeadElement = (tagName, attributes) => {
  const element = document.createElement(tagName);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  document.head.appendChild(element);
  return element;
};

const updateAttribute = (element, attributeName, value) => {
  if (element.getAttribute(attributeName) !== value) {
    element.setAttribute(attributeName, value);
  }
};

const setMeta = (name, content) => {
  const selector = `meta[name="${name}"]`;
  const meta = getCachedElement(selector) || createHeadElement("meta", { name, content });
  elementCache.set(selector, meta);
  updateAttribute(meta, "content", content);
};

const setMetaProperty = (property, content) => {
  const selector = `meta[property="${property}"]`;
  const meta = getCachedElement(selector) || createHeadElement("meta", { property, content });
  elementCache.set(selector, meta);
  updateAttribute(meta, "content", content);
};

const setLink = (rel, href) => {
  const selector = `link[rel="${rel}"]`;
  const link = getCachedElement(selector) || createHeadElement("link", { rel, href });
  elementCache.set(selector, link);
  updateAttribute(link, "href", href);
};

const setJsonLd = (json) => {
  const id = "structured-data";
  const selector = `script#${id}`;
  const content = JSON.stringify(json, null, 2);
  let script = getCachedElement(selector);
  if (!script) {
    script = createHeadElement("script", { id, type: "application/ld+json" });
    elementCache.set(selector, script);
  }

  if (script.textContent !== content) {
    script.textContent = content;
  }
};

const getMetaForPath = (path) => {
  const normalized = path.replace(/\/$/, "") || "/";
  return PAGE_META[normalized] || PAGE_META["/"];
};

const getSchema = (url) => ({
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. B. Arvind",
  "url": url,
  "image": DEFAULT_IMAGE,
  "description": "Specialist maxillofacial surgeon offering consultation and surgical care at PACE Hospitals, Hyderabad.",
  "medicalSpecialty": "Oral and Maxillofacial Surgery",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "PACE Hospitals, HI-TEC City",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500081",
    "addressCountry": "IN"
  },
  "telephone": "+91 8331003232",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  },
  "sameAs": [
    "https://www.facebook.com",
    "https://www.linkedin.com"
  ]
});

export const updateSeo = (path) => {
  const meta = getMetaForPath(path);
  const origin = getOrigin();
  const url = `${origin.replace(/\/$/, "")}${meta.path}`;
  const seoKey = `${meta.title}|${meta.description}|${url}|${meta.image}`;

  if (seoKey === lastSeoKey) {
    return;
  }

  lastSeoKey = seoKey;
  document.title = meta.title;
  setMeta("description", meta.description);
  setMeta("robots", "index, follow");
  setMetaProperty("og:title", meta.title);
  setMetaProperty("og:description", meta.description);
  setMetaProperty("og:type", "website");
  setMetaProperty("og:url", url);
  setMetaProperty("og:image", meta.image);
  setMetaProperty("og:image:alt", "Portrait of Dr. B. Arvind at PACE Hospitals, Hyderabad");
  setMetaProperty("og:site_name", "Dr. B. Arvind");
  setMetaProperty("og:locale", "en_IN");
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:description", meta.description);
  setMeta("twitter:title", meta.title);
  setMeta("twitter:image", meta.image);
  setMeta("twitter:image:alt", "Portrait of Dr. B. Arvind at PACE Hospitals, Hyderabad");
  setLink("canonical", url);
  setJsonLd(getSchema(url));
};
