import { Microscope, Snowflake, FlaskConical, HeartPulse, Box, Syringe, ScanSearch, Dna, Target } from "lucide-react";
import ivfImg from "@/assets/treatments/ivf.jpg";
import eggFreezingImg from "@/assets/treatments/egg-freezing.jpg";
import embryoFreezingImg from "@/assets/treatments/embryo-freezing.jpg";
import fertilityPreservationImg from "@/assets/treatments/fertility-preservation.jpg";
import surrogacyImg from "@/assets/treatments/surrogacy.jpg";
import maleFertilityImg from "@/assets/treatments/male-fertility.jpg";
import ovulationImg from "@/assets/treatments/ovulation.jpg";
import pgtImg from "@/assets/treatments/pgt.jpg";

export interface TreatmentData {
  slug: string;
  icon: typeof Microscope;
  title: string;
  subtitle: string;
  image: string;
  overview: string;
  howItWorks: string;
  whoNeeds: string[];
  process: { step: string; description: string }[];
  benefits: { title: string; description: string }[];
  stats: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
}

export const treatments: TreatmentData[] = [
  {
    slug: "ivf",
    icon: Microscope,
    title: "In Vitro Fertilization (IVF)",
    subtitle: "Advanced reproductive technology to help you achieve your dream of parenthood with the highest success rates.",
    image: ivfImg,
    overview: "In Vitro Fertilization (IVF) is one of the most effective forms of assisted reproductive technology. The procedure involves retrieving eggs from the ovaries, fertilizing them with sperm in a laboratory, and then transferring the resulting embryo(s) into the uterus. IVF has helped millions of couples worldwide achieve successful pregnancies when other fertility treatments have not worked.",
    howItWorks: "During IVF, fertility medications are used to stimulate the ovaries to produce multiple eggs. These eggs are then retrieved through a minor surgical procedure and combined with sperm in the lab. The fertilized eggs (embryos) are monitored for several days before the healthiest embryo is transferred to the uterus.",
    whoNeeds: [
      "Women with blocked or damaged fallopian tubes",
      "Couples with unexplained infertility",
      "Men with low sperm count or motility issues",
      "Women with ovulation disorders",
      "Couples who have tried other treatments without success",
      "Individuals using donor eggs or surrogacy"
    ],
    process: [
      { step: "Initial Consultation", description: "Comprehensive evaluation of your fertility history and personalized treatment planning." },
      { step: "Ovarian Stimulation", description: "Fertility medications stimulate the ovaries to produce multiple mature eggs." },
      { step: "Egg Retrieval", description: "A minor procedure to collect mature eggs from the ovaries under mild sedation." },
      { step: "Fertilization & Culture", description: "Eggs are fertilized with sperm in the lab and embryos are monitored for 3-5 days." },
      { step: "Embryo Transfer", description: "The best quality embryo is gently transferred into the uterus." },
      { step: "Pregnancy Test", description: "A blood test confirms pregnancy approximately two weeks after the transfer." }
    ],
    benefits: [
      { title: "High Success Rate", description: "IVF offers one of the highest success rates among fertility treatments." },
      { title: "Advanced Technology", description: "State-of-the-art lab equipment and techniques for optimal results." },
      { title: "Genetic Screening", description: "Option for PGT to screen embryos for genetic conditions." },
      { title: "Personalized Care", description: "Treatment protocols tailored to your unique medical profile." }
    ],
    stats: [
      { value: "65%+", label: "Success Rate" },
      { value: "5000+", label: "Babies Born" },
      { value: "10+", label: "Years Experience" },
      { value: "98%", label: "Patient Satisfaction" }
    ],
    faqs: [
      { question: "How long does one IVF cycle take?", answer: "A typical IVF cycle takes about 4 to 6 weeks from the start of medication to the embryo transfer." },
      { question: "Is IVF painful?", answer: "Most patients experience minimal discomfort. The egg retrieval is done under mild sedation, and the embryo transfer is a painless procedure." },
      { question: "What is the success rate of IVF?", answer: "Success rates vary based on age and individual factors, but our clinic achieves a 60-70% success rate for patients under 35." },
      { question: "How many embryos are transferred?", answer: "Typically, one or two embryos are transferred to minimize the risk of multiple pregnancies while maximizing success." }
    ]
  },
  {
    slug: "egg-freezing",
    icon: Snowflake,
    title: "Egg Freezing",
    subtitle: "Preserve your fertility and take control of your reproductive timeline with advanced egg freezing technology.",
    image: eggFreezingImg,
    overview: "Egg freezing, or oocyte cryopreservation, is a process that allows women to preserve their eggs for future use. This technology gives women the flexibility to plan their families on their own timeline while ensuring the quality of their eggs is maintained at the age they were frozen.",
    howItWorks: "The process involves stimulating the ovaries with hormones to produce multiple eggs, retrieving the mature eggs, and then rapidly freezing them using a technique called vitrification. The frozen eggs can be stored for many years and thawed when the woman is ready to conceive.",
    whoNeeds: [
      "Women who wish to delay childbearing for personal or professional reasons",
      "Women about to undergo cancer treatment that may affect fertility",
      "Women with a family history of early menopause",
      "Women who want to preserve younger, healthier eggs",
      "Single women planning for future family building"
    ],
    process: [
      { step: "Initial Consultation", description: "Fertility assessment and discussion of your goals and timeline." },
      { step: "Ovarian Stimulation", description: "Hormone injections for 10-14 days to stimulate egg production." },
      { step: "Monitoring", description: "Regular ultrasounds and blood tests to track egg development." },
      { step: "Egg Retrieval", description: "A quick procedure to collect mature eggs under light sedation." },
      { step: "Vitrification", description: "Eggs are flash-frozen using advanced cryopreservation techniques." },
      { step: "Storage", description: "Eggs are safely stored in our state-of-the-art facility until needed." }
    ],
    benefits: [
      { title: "Fertility Preservation", description: "Freeze your eggs at their peak quality for future use." },
      { title: "Flexible Timeline", description: "Take control of when you start your family." },
      { title: "Proven Technology", description: "Vitrification offers excellent egg survival rates upon thawing." },
      { title: "Peace of Mind", description: "Reduce anxiety about age-related fertility decline." }
    ],
    stats: [
      { value: "95%", label: "Egg Survival Rate" },
      { value: "2000+", label: "Eggs Frozen" },
      { value: "10+", label: "Years Storage" },
      { value: "99%", label: "Safety Record" }
    ],
    faqs: [
      { question: "What is the best age to freeze eggs?", answer: "Ideally before age 35, as egg quality and quantity decline with age. However, eggs can be frozen at any reproductive age." },
      { question: "How long can eggs be stored?", answer: "Frozen eggs can be stored indefinitely, though most women use them within 5-10 years." },
      { question: "Does egg freezing guarantee pregnancy?", answer: "While it significantly improves future fertility options, success depends on egg quality and the number of eggs frozen." },
      { question: "Is the procedure safe?", answer: "Yes, egg freezing is a well-established and safe procedure with minimal risks." }
    ]
  },
  {
    slug: "embryo-freezing",
    icon: FlaskConical,
    title: "Embryo Freezing",
    subtitle: "Preserve high-quality embryos from IVF for future family planning with advanced cryopreservation.",
    image: embryoFreezingImg,
    overview: "Embryo freezing, or embryo cryopreservation, involves freezing and storing embryos created during an IVF cycle for future use. This allows couples to preserve surplus high-quality embryos, providing additional chances for pregnancy without repeating the full IVF process.",
    howItWorks: "After eggs are fertilized during IVF, the resulting embryos are cultured in the laboratory. High-quality embryos that are not transferred in the initial cycle are carefully frozen using vitrification and stored in liquid nitrogen at extremely low temperatures.",
    whoNeeds: [
      "Couples undergoing IVF with surplus high-quality embryos",
      "Patients wanting to preserve embryos before medical treatments",
      "Couples planning for future siblings from the same IVF cycle",
      "Those who wish to delay additional embryo transfers",
      "Patients undergoing PGT who need time for genetic results"
    ],
    process: [
      { step: "IVF Cycle", description: "Complete the IVF process including egg retrieval and fertilization." },
      { step: "Embryo Culture", description: "Embryos are grown in the lab for 3-5 days to reach optimal development." },
      { step: "Quality Assessment", description: "Embryologists evaluate embryos and select the best for freezing." },
      { step: "Vitrification", description: "Selected embryos are rapidly frozen using advanced technology." },
      { step: "Secure Storage", description: "Embryos are stored in liquid nitrogen in our certified lab." },
      { step: "Future Transfer", description: "When ready, embryos are thawed and transferred to the uterus." }
    ],
    benefits: [
      { title: "Multiple Chances", description: "Additional pregnancy attempts without repeating full IVF." },
      { title: "Cost Effective", description: "Reduces the need for repeated ovarian stimulation cycles." },
      { title: "High Survival Rate", description: "Modern vitrification ensures excellent embryo survival." },
      { title: "Family Planning", description: "Plan for future siblings with preserved embryos." }
    ],
    stats: [
      { value: "98%", label: "Survival Rate" },
      { value: "3000+", label: "Embryos Frozen" },
      { value: "60%+", label: "Transfer Success" },
      { value: "10+", label: "Years Experience" }
    ],
    faqs: [
      { question: "How long can embryos remain frozen?", answer: "Embryos can be safely stored for many years. There is no significant decline in quality over time when properly stored." },
      { question: "Is the thawing process safe?", answer: "Yes, with vitrification technology, over 98% of frozen embryos survive the thawing process." },
      { question: "Can frozen embryos result in a healthy pregnancy?", answer: "Absolutely. Studies show that pregnancies from frozen embryos have outcomes comparable to fresh embryo transfers." },
      { question: "What happens to unused embryos?", answer: "You have options including continued storage, donation, or disposition based on your personal decision." }
    ]
  },
  {
    slug: "fertility-preservation",
    icon: HeartPulse,
    title: "Fertility Preservation",
    subtitle: "Safeguard your future fertility with comprehensive preservation options tailored to your needs.",
    image: fertilityPreservationImg,
    overview: "Fertility preservation encompasses various techniques to protect reproductive potential for the future. Whether facing medical treatments that may impact fertility or simply planning ahead, our preservation options ensure you have choices when you're ready to build your family.",
    howItWorks: "Depending on your situation, fertility preservation may involve freezing eggs, sperm, or embryos. Advanced cryopreservation techniques ensure that your reproductive cells maintain their viability for years, giving you the freedom to start a family when the time is right.",
    whoNeeds: [
      "Cancer patients about to undergo chemotherapy or radiation",
      "Individuals facing surgery that may affect reproductive organs",
      "Transgender individuals before hormone therapy",
      "People with autoimmune conditions requiring treatments that affect fertility",
      "Anyone who wants to proactively preserve their fertility"
    ],
    process: [
      { step: "Consultation", description: "Discuss your medical situation and preservation options with our specialist." },
      { step: "Fertility Assessment", description: "Comprehensive testing to evaluate current reproductive health." },
      { step: "Treatment Planning", description: "Create a personalized preservation plan based on your timeline." },
      { step: "Procedure", description: "Egg, sperm, or embryo collection based on your chosen method." },
      { step: "Cryopreservation", description: "Advanced freezing techniques to preserve your reproductive cells." },
      { step: "Ongoing Monitoring", description: "Regular check-ins and secure long-term storage of your samples." }
    ],
    benefits: [
      { title: "Future Options", description: "Maintain reproductive choices regardless of medical circumstances." },
      { title: "Expert Guidance", description: "Personalized counseling and support throughout the process." },
      { title: "Advanced Technology", description: "State-of-the-art cryopreservation for maximum viability." },
      { title: "Emotional Support", description: "Compassionate care during challenging medical situations." }
    ],
    stats: [
      { value: "95%+", label: "Preservation Rate" },
      { value: "1500+", label: "Patients Helped" },
      { value: "15+", label: "Years Stored" },
      { value: "100%", label: "Secure Storage" }
    ],
    faqs: [
      { question: "How quickly can fertility preservation be done?", answer: "In urgent cases like before cancer treatment, we can begin within days and complete the process in about 2 weeks." },
      { question: "Is fertility preservation covered by insurance?", answer: "Many insurance plans now cover fertility preservation for medical reasons. We can help you navigate coverage options." },
      { question: "What are the success rates?", answer: "Success rates depend on the method and age at preservation. Eggs frozen before age 35 have the best outcomes." },
      { question: "Can men also preserve fertility?", answer: "Yes, sperm freezing is a simple and effective option for male fertility preservation." }
    ]
  },
  {
    slug: "surrogacy",
    icon: Box,
    title: "Surrogacy Support",
    subtitle: "Comprehensive guidance and support for your surrogacy journey with experienced medical and legal coordination.",
    image: surrogacyImg,
    overview: "Surrogacy is an arrangement where a gestational carrier carries a pregnancy for intended parents. Our surrogacy support program provides comprehensive medical, emotional, and logistical guidance to help individuals and couples navigate this path to parenthood with confidence and care.",
    howItWorks: "In gestational surrogacy, embryos created through IVF using the intended parents' or donors' eggs and sperm are transferred to the surrogate's uterus. The surrogate carries the pregnancy but has no genetic connection to the baby. Our team manages the medical aspects while coordinating with legal professionals.",
    whoNeeds: [
      "Women who cannot carry a pregnancy due to medical conditions",
      "Couples who have experienced recurrent pregnancy loss",
      "Same-sex male couples wishing to have biological children",
      "Women who have had a hysterectomy",
      "Individuals with conditions that make pregnancy high-risk"
    ],
    process: [
      { step: "Initial Consultation", description: "Discuss surrogacy options and understand the process, timeline, and requirements." },
      { step: "Surrogate Matching", description: "Carefully match with a screened and approved gestational carrier." },
      { step: "Legal Agreements", description: "Establish legal contracts protecting all parties with expert attorneys." },
      { step: "IVF & Embryo Transfer", description: "Create embryos via IVF and transfer to the surrogate." },
      { step: "Pregnancy Monitoring", description: "Regular medical check-ups and support throughout the pregnancy." },
      { step: "Birth & Beyond", description: "Support during delivery and post-birth legal proceedings." }
    ],
    benefits: [
      { title: "Expert Coordination", description: "Comprehensive medical and logistical management." },
      { title: "Screened Surrogates", description: "Thoroughly vetted and medically cleared carriers." },
      { title: "Legal Protection", description: "Complete legal framework for all parties involved." },
      { title: "Emotional Support", description: "Counseling services throughout the journey." }
    ],
    stats: [
      { value: "90%+", label: "Success Rate" },
      { value: "500+", label: "Families Created" },
      { value: "10+", label: "Years Experience" },
      { value: "100%", label: "Legal Compliance" }
    ],
    faqs: [
      { question: "How long does the surrogacy process take?", answer: "The entire process typically takes 12-18 months, including matching, legal work, IVF, and pregnancy." },
      { question: "Is surrogacy legal?", answer: "Surrogacy laws vary by location. Our legal team ensures full compliance with applicable laws and regulations." },
      { question: "Will the baby be genetically related to us?", answer: "In gestational surrogacy, the baby is genetically related to the intended parents or donors, not the surrogate." },
      { question: "How are surrogates screened?", answer: "Surrogates undergo comprehensive medical, psychological, and background screening before approval." }
    ]
  },
  {
    slug: "male-fertility",
    icon: Syringe,
    title: "Male Fertility Care",
    subtitle: "Comprehensive diagnostic evaluation and advanced treatment options for male factor infertility.",
    image: maleFertilityImg,
    overview: "Male fertility issues contribute to approximately 40-50% of all infertility cases. Our male fertility care program offers thorough diagnostic evaluation and cutting-edge treatments to address a wide range of male reproductive health concerns, from low sperm count to hormonal imbalances.",
    howItWorks: "Our approach begins with a comprehensive semen analysis and hormonal evaluation. Based on the findings, we develop a personalized treatment plan that may include lifestyle modifications, medication, surgical interventions, or assisted reproductive techniques like ICSI (Intracytoplasmic Sperm Injection).",
    whoNeeds: [
      "Men with low sperm count or poor sperm motility",
      "Couples where male factor is contributing to infertility",
      "Men with varicocele or other structural issues",
      "Men with hormonal imbalances affecting fertility",
      "Men who have undergone prior vasectomy reversal",
      "Those with unexplained male infertility"
    ],
    process: [
      { step: "Initial Assessment", description: "Complete medical history review and physical examination." },
      { step: "Semen Analysis", description: "Detailed evaluation of sperm count, motility, and morphology." },
      { step: "Hormonal Testing", description: "Blood tests to check testosterone and other hormone levels." },
      { step: "Diagnosis", description: "Identify the specific cause of fertility issues." },
      { step: "Treatment Plan", description: "Personalized treatment strategy based on diagnosis." },
      { step: "Follow-Up Care", description: "Regular monitoring and treatment adjustments as needed." }
    ],
    benefits: [
      { title: "Expert Diagnosis", description: "Advanced testing to identify the root cause of infertility." },
      { title: "ICSI Technology", description: "Direct sperm injection for severe male factor cases." },
      { title: "Holistic Approach", description: "Lifestyle guidance alongside medical treatments." },
      { title: "Confidential Care", description: "Private and sensitive handling of all consultations." }
    ],
    stats: [
      { value: "70%+", label: "Treatment Success" },
      { value: "3000+", label: "Men Treated" },
      { value: "10+", label: "Years Experience" },
      { value: "95%", label: "Diagnosis Accuracy" }
    ],
    faqs: [
      { question: "What causes male infertility?", answer: "Common causes include low sperm production, abnormal sperm function, blockages, hormonal imbalances, and lifestyle factors." },
      { question: "Can male infertility be treated?", answer: "Yes, many causes of male infertility are treatable with medication, surgery, or assisted reproductive techniques." },
      { question: "What is ICSI?", answer: "ICSI is a technique where a single sperm is directly injected into an egg, ideal for cases of severe male factor infertility." },
      { question: "How long does treatment take?", answer: "Treatment duration varies from a few weeks for medication to several months for surgical interventions." }
    ]
  },
  {
    slug: "ovulation-induction",
    icon: ScanSearch,
    title: "Ovulation Induction",
    subtitle: "Stimulate natural ovulation with carefully monitored medication protocols for improved fertility.",
    image: ovulationImg,
    overview: "Ovulation induction is a fertility treatment that uses medications to stimulate the ovaries to produce and release eggs. It is often the first-line treatment for women who have irregular or absent ovulation, offering a less invasive approach to achieving pregnancy.",
    howItWorks: "Medications such as Clomiphene Citrate or Letrozole are prescribed to stimulate the ovaries. The response is carefully monitored through ultrasounds and blood tests. When eggs are mature, ovulation is triggered, and timed intercourse or intrauterine insemination (IUI) is coordinated for optimal conception.",
    whoNeeds: [
      "Women with irregular menstrual cycles",
      "Women diagnosed with PCOS (Polycystic Ovary Syndrome)",
      "Couples with unexplained infertility",
      "Women who are not ovulating regularly",
      "Patients preparing for IUI procedures"
    ],
    process: [
      { step: "Consultation", description: "Evaluate your menstrual history and fertility concerns." },
      { step: "Baseline Testing", description: "Ultrasound and blood work to assess baseline ovarian function." },
      { step: "Medication Protocol", description: "Start ovulation-inducing medications as prescribed." },
      { step: "Monitoring", description: "Regular ultrasounds to track follicle growth and egg maturation." },
      { step: "Ovulation Trigger", description: "Timed trigger injection when eggs are optimally mature." },
      { step: "Conception Window", description: "Guided timing for intercourse or IUI for best results." }
    ],
    benefits: [
      { title: "Less Invasive", description: "A gentler first-step fertility treatment option." },
      { title: "Close Monitoring", description: "Careful tracking ensures safety and effectiveness." },
      { title: "Cost Effective", description: "More affordable than IVF for suitable candidates." },
      { title: "Natural Conception", description: "Supports the body's natural reproductive process." }
    ],
    stats: [
      { value: "50%+", label: "Success Rate" },
      { value: "4000+", label: "Patients Treated" },
      { value: "3-6", label: "Cycles Average" },
      { value: "10+", label: "Years Experience" }
    ],
    faqs: [
      { question: "How effective is ovulation induction?", answer: "Success rates vary but are generally 15-25% per cycle for women under 35. Multiple cycles may improve cumulative success." },
      { question: "Are there side effects?", answer: "Common side effects include mild bloating, mood changes, and headaches. Your doctor will monitor for ovarian hyperstimulation." },
      { question: "How many cycles are recommended?", answer: "Typically 3-6 cycles are attempted before considering more advanced treatments like IVF." },
      { question: "Can I combine this with IUI?", answer: "Yes, ovulation induction is often combined with IUI to improve the chances of conception." }
    ]
  },
  {
    slug: "pgt",
    icon: Dna,
    title: "PGT (Preimplantation Genetic Testing)",
    subtitle: "Screen embryos for genetic conditions before transfer to ensure the healthiest possible pregnancy.",
    image: pgtImg,
    overview: "Preimplantation Genetic Testing (PGT) is an advanced technique used during IVF to screen embryos for genetic abnormalities before they are transferred to the uterus. This helps identify embryos with the best potential for a healthy pregnancy, reducing the risk of genetic disorders and miscarriage.",
    howItWorks: "During an IVF cycle, a few cells are carefully biopsied from each embryo at the blastocyst stage (day 5-6). These cells are analyzed for chromosomal abnormalities (PGT-A), specific genetic conditions (PGT-M), or structural chromosomal changes (PGT-SR). Only genetically normal embryos are selected for transfer.",
    whoNeeds: [
      "Women over 35 years of age",
      "Couples with a history of recurrent miscarriages",
      "Families with known genetic disorders",
      "Patients with previous IVF failures",
      "Couples wanting to reduce the risk of chromosomal abnormalities",
      "Those with a family history of genetic conditions"
    ],
    process: [
      { step: "IVF Cycle", description: "Complete the standard IVF process with egg retrieval and fertilization." },
      { step: "Embryo Culture", description: "Grow embryos to the blastocyst stage (day 5-6)." },
      { step: "Biopsy", description: "Carefully remove a few cells from each embryo for testing." },
      { step: "Genetic Analysis", description: "Advanced lab analysis of the biopsied cells for genetic conditions." },
      { step: "Results Review", description: "Discuss results with your doctor and select the best embryo." },
      { step: "Embryo Transfer", description: "Transfer the genetically screened embryo for optimal pregnancy outcome." }
    ],
    benefits: [
      { title: "Reduced Miscarriage", description: "Lower risk of miscarriage by selecting chromosomally normal embryos." },
      { title: "Genetic Screening", description: "Detect over 400+ genetic conditions before pregnancy." },
      { title: "Higher Success", description: "Improved IVF success rates with genetically tested embryos." },
      { title: "Informed Decisions", description: "Empowering families with knowledge about their embryos." }
    ],
    stats: [
      { value: "99%", label: "Testing Accuracy" },
      { value: "400+", label: "Conditions Screened" },
      { value: "75%+", label: "Transfer Success" },
      { value: "10+", label: "Years Experience" }
    ],
    faqs: [
      { question: "Does PGT harm the embryo?", answer: "No, the biopsy is performed on cells that will become the placenta, not the baby. It is a safe and well-established procedure." },
      { question: "How long do results take?", answer: "PGT results are typically available within 1-2 weeks after the biopsy." },
      { question: "What types of PGT are available?", answer: "PGT-A screens for chromosomal abnormalities, PGT-M tests for specific genetic diseases, and PGT-SR checks for structural changes." },
      { question: "Is PGT recommended for everyone?", answer: "PGT is particularly beneficial for women over 35, those with recurrent losses, or families with known genetic conditions." }
    ]
  }
];

export const getTreatmentBySlug = (slug: string): TreatmentData | undefined => {
  return treatments.find(t => t.slug === slug);
};
