export interface PackageTreatment {
  title: string
  description: string
  for?: "general" | "women" | "men"
}

export interface AyurvedaPackage {
  id: string
  title: string
  name: string
  subtitle: string
  duration: string
  objective: string
  treatments: PackageTreatment[]
  packageIncludes: string[]
  benefits: string[]
  notes?: string[]
  costNote: string
  image?: string        
  pricePerDayEuro?: number  // Changed to euro per day (optional)
}

// Common reusable strings to optimize data
const ACCOMMODATION_RESORT = "Accommodation: Comfortable stay at our Ayurveda resort."
const ACCOMMODATION_RETREAT = "Accommodation: Comfortable stay at our Ayurveda retreat."
const MEALS = "Meals: Healthy and nutritious meals prepared according to Ayurvedic principles."
const TREATMENTS_ALL = "Treatments: All the treatments mentioned above."
const YOGA_MEDITATION = "Yoga and Meditation: Sessions to promote relaxation and reduce stress."

const COST_NOTE_GENERIC = "The cost of the package will depend on the duration of stay and the specific treatments included."
const COST_NOTE_CONSULT = COST_NOTE_GENERIC + " Please consult with our Ayurvedic doctor to get a customized package and cost estimate."

export const packages: AyurvedaPackage[] = [
  {
    id: "pumsavana",
    name: "PUMSAVANA",
    image: "/panchakarma.jpeg",
    title: "PUMSAVANA", 
    subtitle: "Ayurveda Treatment Package for Infertility",
    duration: "7-30 days",
    objective: "To improve reproductive health and increase fertility in both men and women",
    treatments: [
      { title: "Panchakarma Therapy", description: "Detoxification and rejuvenation treatments to balance the doshas and improve overall health." },
      { title: "Vajikarana Therapy", description: "Ayurvedic treatments specifically designed to improve reproductive health and fertility." },
      { title: "Herbal Medications", description: "Customized herbal medicines to improve sperm quality, ovulation, and hormonal balance." },
      { title: "Dietary Counseling", description: "Personalized diet plan to support reproductive health and fertility." },
      { title: "Yoga and Meditation", description: "Sessions to reduce stress and promote relaxation." },
      { title: "Massage Therapy", description: "Abhyanga and other massage techniques to improve blood flow and reduce stress." },
      { title: "Yoni Prakshalana", description: "Vaginal cleansing and rejuvenation treatment.", for: "women" },
      { title: "Yoni Pichu", description: "Vaginal tampon treatment with medicated oils.", for: "women" },
      { title: "Artavajanana Therapy", description: "Treatments to regulate menstrual cycle and improve ovulation.", for: "women" },
      { title: "Vrishana Tantra", description: "Treatments to improve sperm quality and fertility.", for: "men" },
      { title: "Sperm-enhancing herbal medications", description: "Customized herbal medicines to improve sperm count and motility.", for: "men" },
    ],
    packageIncludes: [
      ACCOMMODATION_RESORT,
      MEALS,
      TREATMENTS_ALL,
      "Medications: Customized herbal medications.",
      YOGA_MEDITATION,
    ],
    benefits: [
      "Improved Fertility: Increased chances of conception.",
      "Hormonal Balance: Regulation of hormonal imbalance.",
      "Stress Reduction: Reduced stress and anxiety.",
      "Overall Health: Improved overall health and well-being.",
    ],
    notes: [
      "Patient should continue internal Ayurveda medicines for 6 to 12 months depending upon the severity of the condition."
    ],
    costNote: COST_NOTE_CONSULT,
    pricePerDayEuro: 100,
  },
  {
    id: "prasanthi",
    name: "PRASANTHI",
    image: "/stress.jpeg",
    title: "PRASANTHI",
    subtitle: "Ayurveda Treatment Package for Stress Relief",
    duration: "3-14 days",
    objective: "To reduce stress and promote relaxation and well-being.",
    treatments: [
      { title: "Abhyanga (Ayurvedic Massage)", description: "A full-body massage with warm oil to calm the mind and relax the muscles." },
      { title: "Shirodhara", description: "A treatment where warm oil is poured onto the forehead to calm the mind and promote relaxation." },
      { title: "Nasya", description: "A nasal treatment with medicated oil to calm the nervous system and promote relaxation." },
      { title: "Herbal Tea", description: "A soothing tea made with herbs like Ashwagandha, Brahmi, and Tulsi to calm the mind and promote relaxation." },
      { title: "Yoga and Meditation", description: "Sessions to promote relaxation, reduce stress, and improve overall well-being." },
      { title: "Panchakarma Therapy", description: "A detoxification treatment to remove toxins from the body and promote relaxation." },
    ],
    packageIncludes: [
      ACCOMMODATION_RETREAT,
      MEALS,
      TREATMENTS_ALL,
      YOGA_MEDITATION,
    ],
    benefits: [
      "Reduces Stress and Anxiety: The treatments help to calm the mind and promote relaxation.",
      "Improves Sleep: The treatments help to regulate sleep patterns and improve the quality of sleep.",
      "Boosts Immune System: The treatments help to remove toxins from the body and boost the immune system.",
      "Promotes Relaxation: The treatments help to promote relaxation and reduce muscle tension.",
    ],
    notes: [],
    costNote: COST_NOTE_GENERIC,
    pricePerDayEuro: 100,
  },
  {
    id: "prasada",
    name: "PRASADA",
    image: "/rejuvination.jpeg",
    title: "PRASADA",
    subtitle: "Ayurveda Skin Complexion Enhancement Package",
    duration: "3-14 days",
    objective: "To improve skin complexion, prevent and cure skin diseases, and promote overall skin health.",
    treatments: [
      { title: "Udvartana (Herbal Powder Massage)", description: "Exfoliates and nourishes the skin, removing dead skin cells and improving complexion." },
      { title: "Lepa (Herbal Mask)", description: "Nourishes and rejuvenates the skin, reducing imperfections and promoting a glowing complexion." },
      { title: "Thaila Seka (Oil Massage)", description: "Moisturizes and nourishes the skin, improving skin elasticity and reducing fine lines and wrinkles." },
      { title: "Kashaya Ksheeradhara (Warm Medicated Milk Bath)", description: "Nourishes and rejuvenates the skin, improving complexion and reducing stress." },
      { title: "Herbal Facial", description: "Customized facial treatment using Ayurvedic herbs to improve skin complexion and reduce imperfections." },
    ],
    packageIncludes: [
      ACCOMMODATION_RESORT,
      MEALS,
      TREATMENTS_ALL,
      "Herbal Products: Customized herbal products for skin care.",
    ],
    benefits: [
      "Improved Skin Complexion: Treatments help to reduce hyperpigmentation, acne scars, and other skin imperfections.",
      "Glowing Skin: Treatments nourish and rejuvenate the skin, promoting a healthy and radiant glow.",
      "Reduced Fine Lines and Wrinkles: Treatments improve skin elasticity and reduce signs of aging.",
      "Improved Skin Texture: Treatments exfoliate and nourish the skin, improving skin texture and tone.",
    ],
    notes: [],
    costNote: COST_NOTE_GENERIC,
    pricePerDayEuro: 100,
  },
  {
    id: "susandhi",
    name: "SUSANDHI",
    image: "/joint.jpeg",
    title: "SUSANDHI",
    subtitle: "Joint Protection and Care",
    duration: "7-14 days",
    objective: "To prevent and cure joint pain, improve joint mobility, and promote overall joint health.",
    treatments: [
      { title: "Kati Basti (Lower Back Treatment)", description: "A therapeutic treatment that involves pouring warm medicated oil into a dough ring placed on the lower back to nourish and strengthen the joints." },
      { title: "Janu Basti (Knee Treatment)", description: "A treatment that involves pouring warm medicated oil into a dough ring placed on the knee joint to reduce pain and inflammation." },
      { title: "Abhyanga (Oil Massage)", description: "A full-body massage with medicated oil to nourish and lubricate the joints." },
      { title: "Podala Sweda (Herbal Bolus Therapy)", description: "A treatment that involves inducing sweat using powder or leaf boluses to remove toxins and reduce joint pain and inflammation." },
      { title: "Lepana (Warm Herbal Paste Application)", description: "A treatment that involves applying warm herbal paste to the affected joints to reduce pain and inflammation." },
    ],
    packageIncludes: [
      ACCOMMODATION_RESORT,
      MEALS,
      TREATMENTS_ALL,
      "Herbal Medications: Customized herbal medications to support joint health.",
    ],
    benefits: [
      "Relieves Joint Pain: Treatments help reduce joint pain and inflammation.",
      "Improves Joint Mobility: Treatments help improve joint mobility and flexibility.",
      "Prevents Joint Degeneration: Treatments help prevent joint degeneration and promote overall joint health.",
      "Reduces Inflammation: Treatments help reduce inflammation and promote healing.",
    ],
    notes: [],
    costNote: COST_NOTE_GENERIC,
    pricePerDayEuro: 100,
  },
  {
    id: "krusagathra",
    name: "KRUSAGATHRA",
    image: "/weight.jpeg",
    title: "KRUSAGATHRA",
    subtitle: "Ayurveda Slimming Package",
    duration: "7-28 days",
    objective: "To promote weight loss, improve metabolism, and enhance overall health.",
    treatments: [
      { title: "Udvartana (Herbal Powder Massage)", description: "Exfoliates and nourishes the skin, improves circulation, and boosts metabolism." },
      { title: "Dhanyamla Dhara", description: "Removes toxins and excess fat from the body." },
      { title: "Swedana (Herbal Bolus Therapy)", description: "Induces sweat to remove toxins and improve circulation using herbal powder boluses." },
      { title: "Snehana (Oil Massage)", description: "Nourishes and tones the body, improves circulation and digestion." },
      { title: "Dietary Counseling", description: "Personalized diet plan to support weight loss and improve overall health." },
    ],
    packageIncludes: [
      ACCOMMODATION_RESORT,
      MEALS,
      TREATMENTS_ALL,
      "Herbal Medications: Customized herbal medications to support weight loss.",
    ],
    benefits: [
      "Weight Loss: Treatments help promote weight loss and improve body composition.",
      "Improved Metabolism: Treatments boost metabolism and enhance digestion.",
      "Detoxification: Treatments remove toxins and excess fat from the body.",
      "Improved Energy: Treatments improve energy levels and overall well-being.",
    ],
    notes: [],
    costNote: COST_NOTE_GENERIC,
    pricePerDayEuro: 100,
  },
  {
    id: "prasanna",
    name: "PRASANNA",
    image: "/women.jpeg",
    title: "PRASANNA",
    subtitle: "Ayurveda Beauty Enhancement Package",
    duration: "3-14 days",
    objective: "To enhance beauty, improve skin and hair health, and boost confidence.",
    treatments: [
      { title: "Udvartana (Herbal Powder Massage)", description: "Exfoliates and nourishes the skin, improving complexion and texture." },
      { title: "Lepa (Herbal Mask)", description: "Nourishes and rejuvenates the skin, reducing imperfections and promoting a glowing complexion." },
      { title: "Thaila Seka (Oil Massage)", description: "Moisturizes and nourishes the skin and hair, improving elasticity and shine." },
      { title: "Hair Treatment", description: "Customized hair treatment using Ayurvedic herbs to nourish and strengthen hair." },
      { title: "Facial", description: "Customized facial treatment using Ayurvedic herbs to improve skin complexion and reduce imperfections." },
    ],
    packageIncludes: [
      ACCOMMODATION_RESORT,
      MEALS,
      TREATMENTS_ALL,
      "Herbal Products: Customized herbal products for skin and hair care.",
    ],
    benefits: [
      "Glowing Skin: Treatments nourish and rejuvenate the skin, promoting a healthy and radiant glow.",
      "Healthy Hair: Treatments nourish and strengthen hair, improving texture and shine.",
      "Improved Confidence: Treatments enhance beauty, promoting confidence and self-esteem.",
      "Relaxation: Treatments promote relaxation and reduce stress.",
    ],
    notes: [
      "This package is designed to enhance beauty, improve skin and hair health, and boost confidence. Our experienced Ayurvedic practitioners will tailor the treatments to meet your individual needs and preferences."
    ],
    costNote: COST_NOTE_CONSULT,
    pricePerDayEuro: 100,
  },
]
