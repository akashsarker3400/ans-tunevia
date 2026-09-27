// All site copy lives here. Only claims we can stand behind: no artist counts, store counts,
// delivery-time promises or support hours unless they are stated as plan terms below.

export const site = {
  name: "Tunevia",
  legalName: "Tunevia Music Group",
  domain: "https://tunevia.com",
  tagline: "Music distribution and publishing for independent artists and labels.",
  description:
    "Tunevia distributes your music to Spotify, Apple Music, TikTok, YouTube and regional stores worldwide, collects your publishing royalties and protects your catalogue. You keep 100% ownership.",
  email: "support@tunevia.com",
  claimsEmail: "claim@tunevia.com",
  parent: { name: "ANS Music", url: "https://ansmusic.io" },
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Video", href: "/video" },
  { label: "Publishing", href: "/publishing" },
  { label: "Stores", href: "/stores" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

export const cta = { label: "Get started", href: "/contact" };

export const hero = {
  kicker: "Independent music distribution",
  title: "Release everywhere. Keep everything.",
  lead: "Upload once and Tunevia delivers your music to Spotify, Apple Music, TikTok, YouTube and regional stores across the world. You keep 100% of your rights, and on every plan you keep 100% of your distribution royalties.",
  points: ["Unlimited releases on every plan", "100% ownership of masters and compositions", "No label contract, no per-release fees"],
};

export const steps = [
  { title: "Upload", text: "Add your WAV masters, artwork and metadata. We check every release before delivery so stores accept it the first time." },
  { title: "We deliver", text: "Your release goes to the stores and territories you choose, with ISRC and UPC codes included." },
  { title: "You get paid", text: "Royalties are reported and paid out monthly by bank transfer, PayPal or Payoneer." },
];

export const pillars = [
  {
    slug: "distribution",
    title: "Distribution",
    text: "Audio delivery to the major streaming services, download stores, social platforms and regional stores in South Asia, China, Africa and MENA.",
    items: ["Spotify, Apple Music, Amazon, YouTube Music, Tidal, Deezer", "TikTok, Instagram, Facebook, Snapchat, CapCut", "JioSaavn, Gaana, Boomplay, Anghami, Tencent, NetEase"],
    href: "/stores",
  },
  {
    slug: "video",
    title: "Video",
    text: "Music video delivery to YouTube, VEVO, Apple Music and Tidal, including official VEVO artist channels for eligible clients.",
    items: ["VEVO channel creation and management", "1080p and 4K delivery", "Official Artist Channel synchronisation"],
    href: "/video",
  },
  {
    slug: "publishing",
    title: "Publishing administration",
    text: "We register your songs with collection societies worldwide and collect the mechanical and performance royalties you are owed as a writer.",
    items: ["Worldwide song registration", "Mechanical and performance collection", "You keep 100% of your copyrights"],
    href: "/publishing",
  },
  {
    slug: "rights",
    title: "Rights and YouTube",
    text: "YouTube Content ID, CMS linking and copyright protection so your music earns wherever it is used, including fan uploads.",
    items: ["Content ID fingerprinting and claims", "YouTube CMS / MCN channel linking", "Takedown and counterclaim handling"],
    href: "/youtube-cms",
  },
];

export const why = [
  { title: "You own it", text: "Tunevia never takes ownership. Masters and compositions stay yours, and you can take your catalogue down at any time." },
  { title: "Clear money", text: "Monthly statements you can read. 100% of distribution royalties on every plan; a fixed 20% only where we administer publishing or standard distribution." },
  { title: "Regional reach", text: "Built from Bangladesh for the world: the South Asian, Chinese, African and Middle Eastern stores that global distributors treat as afterthoughts." },
  { title: "Real people", text: "Every release is checked by our team, and support is answered by people who know how stores work, not a bot." },
];

export type Plan = { name: string; price: string; period: string; text: string; features: string[]; featured?: boolean };
export const plans: Plan[] = [
  { name: "Artist", price: "$9.99", period: "per year", text: "For an independent artist releasing under one name.", features: ["Unlimited releases", "1 artist profile", "Keep 100% of distribution royalties", "ISRC and UPC codes", "Release scheduling", "Basic analytics", "Support within 48 hours"] },
  { name: "Label", price: "$39.99", period: "per year", text: "For labels and artists releasing under several names.", features: ["Everything in Artist", "Up to 10 artist profiles", "YouTube Content ID", "Spotify verification help", "Custom label name on stores", "Advanced analytics", "Support within 24 hours"], featured: true },
  { name: "Professional", price: "$99.99", period: "per year", text: "For established artists and labels with a large catalogue.", features: ["Everything in Label", "Unlimited artist profiles", "VEVO channel creation", "Publishing administration", "Sync licensing", "API access", "Dedicated account manager", "Priority support"] },
];

export type Cell = boolean | string;
export const matrix: { feature: string; info: string; cells: [Cell, Cell, Cell] }[] = [
  { feature: "Unlimited music distribution", info: "Release as many singles, EPs and albums as you want.", cells: [true, true, true] },
  { feature: "Keep 100% ownership", info: "Masters and compositions stay yours.", cells: [true, true, true] },
  { feature: "Artist profiles", info: "Artist names you can release under from one account.", cells: ["1", "Up to 10", "Unlimited"] },
  { feature: "YouTube Content ID", info: "Claim revenue from fan-uploaded videos.", cells: [false, true, true] },
  { feature: "Spotify verification", info: "Help claiming and verifying your Spotify for Artists profile.", cells: [false, true, true] },
  { feature: "Custom label name", info: "Choose the label name shown on stores.", cells: [false, true, true] },
  { feature: "VEVO channel creation", info: "VEVO onboarding and video delivery.", cells: [false, false, true] },
  { feature: "Publishing administration", info: "We collect your mechanical and performance royalties worldwide.", cells: [false, false, true] },
  { feature: "API access", info: "Deliver and read data from your own systems.", cells: [false, false, true] },
  { feature: "Dedicated account manager", info: "One person who knows your catalogue.", cells: [false, false, true] },
  { feature: "Support response", info: "Time to first reply on business days.", cells: ["48 hours", "24 hours", "Priority"] },
];

export const pricingFaq = [
  { q: "Is the price fixed for the year?", a: "Yes. The rate you pay at purchase is locked for that year. There are no per-release or per-store fees." },
  { q: "Can I cancel any time?", a: "Yes. Cancel auto-renewal whenever you like; your music stays live until the end of the period you paid for." },
  { q: "What happens if I do not renew?", a: "Stores eventually remove content from expired accounts. You get a 30-day grace period to renew and keep your catalogue live." },
  { q: "How does the publishing 80/20 split work?", a: "On the Professional plan we collect 100% of your mechanical and performance royalties. We keep a 20% administration fee for registration, collection and audit work; you keep 80%. Distribution royalties are unaffected and stay 100% yours." },
  { q: "Can I upgrade mid-year?", a: "Yes. Move from Artist to Label or Professional at any time and pay only the pro-rated difference." },
];

export const faq: { cat: string; q: string; a: string }[] = [
  { cat: "Distribution", q: "How long until my music is live?", a: "Our team reviews each release after you submit it. Once approved, most stores list music within a few days, and some take longer. Schedule releases in advance whenever you can." },
  { cat: "Distribution", q: "Which stores do you deliver to?", a: "The major streaming services (Spotify, Apple Music, Amazon Music, YouTube Music, Tidal, Deezer), social platforms (TikTok, Instagram, Facebook, Snapchat) and regional stores such as JioSaavn, Gaana, Boomplay, Anghami and Tencent. See the Stores page for the list." },
  { cat: "Distribution", q: "What audio formats do you accept?", a: "16-bit or 24-bit WAV at 44.1 kHz or higher. Artwork must be square, at least 3000 by 3000 pixels." },
  { cat: "Distribution", q: "Can I release cover songs?", a: "Yes, as long as you hold the mechanical licence where it is required. We handle the delivery." },
  { cat: "Distribution", q: "Can I switch from another distributor?", a: "Yes. Upload your catalogue with the same ISRC and UPC codes, then ask your old distributor for a takedown once your releases are live through us, so your stream counts carry over." },
  { cat: "Royalties", q: "Do I keep 100% of my royalties?", a: "On the Artist, Label and Professional plans you keep 100% of the royalties we receive from distribution. Publishing administration and standard (non-subscription) distribution carry a 20% fee." },
  { cat: "Royalties", q: "How and when do I get paid?", a: "Royalties are reported and paid monthly, by bank transfer, PayPal or Payoneer. Stores report to us on a 45 to 90 day delay, so a January stream typically appears in your statement in March or April." },
  { cat: "Publishing", q: "Do I keep my copyrights with Tunevia Publishing?", a: "Yes. We act as administrator only. You keep 100% of your compositions and masters." },
  { cat: "YouTube", q: "What is YouTube Content ID?", a: "We fingerprint your music so YouTube can find it in any upload, including fan videos and Shorts, and route the ad revenue to you." },
  { cat: "YouTube", q: "How do I monetise my channel through Tunevia?", a: "Eligible music channels can be linked to the Tunevia YouTube CMS. See the YouTube CMS page for the conditions and revenue share." },
  { cat: "Video", q: "Can I get a VEVO channel?", a: "Yes. VEVO channel creation and management is included in the Professional plan and available to eligible clients." },
  { cat: "Account", q: "Do you offer Spotify verification?", a: "On the Label and Professional plans we help you claim your Spotify for Artists profile and get verified." },
];

export type Store = { name: string; id: string; category: string; region: string };
export const stores: Store[] = [
  { name: "Spotify", id: "spotify", category: "Streaming", region: "Global" },
  { name: "Apple Music", id: "itunes", category: "Streaming", region: "Global" },
  { name: "Amazon Music", id: "amazon", category: "Streaming", region: "Global" },
  { name: "YouTube Music", id: "youtube-music", category: "Streaming", region: "Global" },
  { name: "YouTube", id: "youtube", category: "Video", region: "Global" },
  { name: "TikTok", id: "tiktok", category: "Social", region: "Global" },
  { name: "Tidal", id: "tidal", category: "Streaming", region: "Global" },
  { name: "Deezer", id: "deezer", category: "Streaming", region: "Global" },
  { name: "SoundCloud", id: "soundcloud", category: "Streaming", region: "Global" },
  { name: "Audiomack", id: "audiomack", category: "Streaming", region: "Global" },
  { name: "Pandora", id: "pandora", category: "Streaming", region: "Americas" },
  { name: "iHeartRadio", id: "iheart", category: "Radio", region: "Americas" },
  { name: "Napster", id: "napster", category: "Streaming", region: "Global" },
  { name: "Qobuz", id: "qobuz", category: "Hi-Fi", region: "Global" },
  { name: "7digital", id: "7-digital", category: "Download", region: "Global" },
  { name: "Bandcamp", id: "bandcamp", category: "Store", region: "Global" },
  { name: "VEVO", id: "vevo", category: "Video", region: "Global" },
  { name: "Shazam", id: "shazam", category: "Discovery", region: "Global" },
  { name: "Facebook", id: "facebook", category: "Social", region: "Global" },
  { name: "Snapchat", id: "snap", category: "Social", region: "Global" },
  { name: "CapCut", id: "capcut", category: "Social", region: "Global" },
  { name: "Canva", id: "canva", category: "Sync", region: "Global" },
  { name: "Lickd", id: "lickd", category: "Sync", region: "Global" },
  { name: "Peloton", id: "peloton", category: "Fitness", region: "Global" },
  { name: "Mixcloud", id: "mixcloud", category: "Streaming", region: "Global" },
  { name: "Jaxsta", id: "jaxsta", category: "Credits", region: "Global" },
  { name: "SoundExchange", id: "soundexchange", category: "Collection", region: "Americas" },
  { name: "Trebel", id: "trebel", category: "Streaming", region: "Americas" },
  { name: "iMusica", id: "imusica", category: "Streaming", region: "Latin America" },
  { name: "JioSaavn", id: "saavn", category: "Streaming", region: "India" },
  { name: "Gaana", id: "gaana", category: "Streaming", region: "India" },
  { name: "Hungama", id: "hungama", category: "Streaming", region: "India" },
  { name: "Anghami", id: "anghami", category: "Streaming", region: "MENA" },
  { name: "Boomplay", id: "boomplay", category: "Streaming", region: "Africa" },
  { name: "Tencent Music", id: "tencent", category: "Streaming", region: "China" },
  { name: "NetEase Cloud Music", id: "netease", category: "Streaming", region: "China" },
  { name: "Kugou", id: "kugou", category: "Streaming", region: "China" },
  { name: "Kuwo", id: "kuwo", category: "Streaming", region: "China" },
  { name: "AliMusic", id: "alimusic", category: "Streaming", region: "China" },
  { name: "Douyin", id: "douyin", category: "Social", region: "China" },
  { name: "Kuaishou", id: "kuaishou", category: "Social", region: "China" },
  { name: "WeChat", id: "wechat", category: "Social", region: "China" },
  { name: "JOOX", id: "joox", category: "Streaming", region: "Southeast Asia" },
  { name: "KKBOX", id: "kkbox", category: "Streaming", region: "East Asia" },
  { name: "AWA", id: "awa", category: "Streaming", region: "Japan" },
  { name: "LINE Music", id: "linemusic", category: "Streaming", region: "Japan" },
  { name: "FLO", id: "flo", category: "Streaming", region: "Korea" },
  { name: "Moov", id: "moov", category: "Streaming", region: "Hong Kong" },
  { name: "VK Music", id: "vkmusic", category: "Streaming", region: "Russia & CIS" },
  { name: "Nuuday", id: "nuuday", category: "Telecom", region: "Nordics" },
  { name: "AGEDI", id: "agedi", category: "Collection", region: "Europe" },
  { name: "Hook", id: "hook", category: "Social", region: "Global" },
  { name: "Lissen", id: "lissen", category: "Streaming", region: "Global" },
  { name: "Tune Global", id: "tune-global", category: "Distribution", region: "Global" },
];

export const heroStores = ["spotify", "itunes", "youtube", "tiktok", "amazon", "tidal", "deezer", "saavn", "boomplay", "anghami", "tencent", "vevo"];

export const publishing = {
  title: "You wrote it. Get paid for it.",
  lead: "Every time a song you wrote is streamed, downloaded, broadcast or performed, a publishing royalty is owed to the writer. Most independent writers never collect it. Tunevia registers your songs with collection societies worldwide and brings that money home.",
  streams: [
    { title: "Performance royalties", text: "From radio, TV, live venues and streaming, collected through performing rights organisations worldwide." },
    { title: "Mechanical royalties", text: "From streams, downloads and physical copies, collected through mechanical societies and direct DSP licences." },
    { title: "Songwriter share", text: "The part of every royalty tied to the person who wrote the words and the melody: registered in your name." },
    { title: "Publisher share", text: "The publisher's half of performance royalties, which unaffiliated writers usually leave uncollected." },
    { title: "Lyric royalties", text: "From lyric platforms and lyric sync licences." },
    { title: "Neighbouring rights", text: "Where applicable, revenue from public performance of the recording itself." },
  ],
  include: ["Worldwide song registration and administration", "Collection from PROs and CMOs", "Metadata management for every society", "Transparent statements and audit support", "Sync licensing for film, TV and ads", "No upfront fee for distribution clients"],
  terms: "Publishing administration is included in the Professional plan. We keep a 20% administration fee on publishing income and pay you 80%. You keep 100% of your copyrights and can leave at any time.",
};

export const video = {
  title: "Your videos, on the screens that pay.",
  lead: "Tunevia delivers music videos to YouTube, VEVO, Apple Music and Tidal, creates official VEVO artist channels for eligible clients, and claims the revenue when your video is reused.",
  features: [
    { title: "VEVO channels", text: "Official VEVO artist channel creation and management, with the VEVO watermark, higher ad rates and chart eligibility." },
    { title: "Store delivery", text: "1080p and 4K masters delivered to Apple Music, Tidal and YouTube with DDEX-compliant metadata." },
    { title: "Content ID for video", text: "Fingerprinting and claims on fan uploads and re-uploads of your video." },
    { title: "Scheduling", text: "Set a global premiere date and we deliver early so every store goes live together." },
    { title: "Catalogue tools", text: "Bulk metadata and rights management for labels with large video libraries." },
    { title: "Reporting", text: "Video performance and revenue in the same monthly statement as your audio." },
  ],
  process: ["Upload your 1080p or 4K master and metadata", "We check quality and platform requirements", "Delivery to YouTube, VEVO, Apple Music and Tidal", "Monthly reporting and payout"],
  faq: [
    { q: "How do I submit a video?", a: "Send your 1080p or 4K master and metadata to your account manager or through your dashboard once onboarded." },
    { q: "Can I get a VEVO channel through Tunevia?", a: "Yes. VEVO channel creation is included in the Professional plan for eligible artists." },
    { q: "How long does video delivery take?", a: "Allow 7 to 10 business days after approval. Submit at least three weeks before a premiere so all stores go live together." },
    { q: "Do I keep my rights?", a: "Yes. Tunevia is a delivery and administration partner. You keep full ownership and control." },
  ],
};

export const youtubeCms = {
  title: "Link your channel to the Tunevia CMS.",
  lead: "For music channels: Content ID protection, higher monetisation rates and claims on every fan upload, through Tunevia's YouTube CMS partnership.",
  benefits: [
    { title: "Content ID", text: "Your music is fingerprinted and claimed automatically wherever it appears on YouTube." },
    { title: "Better rates", text: "Channels linked to a music CMS typically earn higher ad rates than standalone channels." },
    { title: "Rights protection", text: "We handle claims, disputes and takedowns on your behalf." },
  ],
  eligibility: ["Content must be strictly music-related and at least 95% original and fully owned by you", "Channel must meet all YouTube Partner Program requirements and monetisation guidelines", "Channel is registered with Tunevia's email for monitoring"],
  maintenance: "To stay linked, the channel must do at least two of the following each month: upload a video, live stream, post a Short, create a playlist, publish a community post, or comment as the channel owner.",
  strikes: ["One copyright strike that is not successfully countered leads to immediate unlinking and a hold on upcoming revenue.", "Manipulating monetisation (improper intros or outros, purchased placements) is prohibited and may lead to Content ID removal, termination and legal action."],
  fees: ["Tunevia keeps a 25% share of gross YouTube earnings. Negotiable for channels earning $5,000 or more per month.", "Payouts run on a two-month cycle: January earnings are paid in March.", "Minimum payout is $50.", "Payments via Payoneer or bank transfer to verified account holders. You are responsible for local taxes and VAT."],
  unlinking: "We may unlink a channel immediately for violating these terms or YouTube's policies. Channel owners must give two months' written notice before the term ends to unlink.",
  review: "Applications are reviewed within three to five business days.",
};

export const contacts = [
  { label: "Support", who: "Distribution, publishing, payments and account questions", email: "support@tunevia.com" },
  { label: "Claims", who: "Copyright claims, DMCA notices and counterclaims", email: "claim@tunevia.com" },
];
