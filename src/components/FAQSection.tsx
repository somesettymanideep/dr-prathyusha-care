import { Phone, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does an IVF cycle take?",
    answer:
      "A typical IVF cycle takes about 4 to 6 weeks from the start of ovarian stimulation to the embryo transfer. The timeline may vary based on individual response to medication and treatment protocol.",
  },
  {
    question: "How many IVF cycles might I need?",
    answer:
      "The number of cycles varies for each patient. Some may achieve pregnancy in the first cycle, while others may need 2–3 cycles. Dr. Prathyusha will create a personalised plan based on your health profile.",
  },
  {
    question: "What are the success rates of IVF?",
    answer:
      "Success rates depend on factors like age, underlying conditions, and embryo quality. Dr. Prathyusha's clinic maintains high success rates, and she will discuss realistic expectations during your consultation.",
  },
  {
    question: "Can IVF be used with donor eggs or sperm?",
    answer:
      "Yes, IVF can be performed using donor eggs, donor sperm, or both. Dr. Prathyusha provides comprehensive counselling to help you understand all available options.",
  },
  {
    question: "Is IVF treatment painful?",
    answer:
      "Most patients experience mild discomfort during injections and the egg retrieval procedure, but it is generally well-tolerated. Pain management options are always available.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 section-soft-bg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="text-primary font-semibold tracking-wide text-sm uppercase">
              FAQs
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-3xl font-bold mb-6 leading-tight">
            <span className="text-secondary">Your IVF questions,</span>
            <br />
            <span className="text-secondary">clearly</span> <span className="text-primary">answered here</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md">
            Find clear, trusted answers to the most common questions about
            IVF—designed to guide and support you every step of the way.
          </p>

          {/* Contact Card */}
          <div className="rounded-2xl overflow-hidden max-w-md">
            <div className="bg-primary text-primary-foreground text-center py-3 font-semibold text-lg">
              Curious About IVF? Let's Talk.
            </div>
            <div className="bg-secondary text-secondary-foreground flex divide-x divide-secondary-foreground/20 py-6 px-6">
              <div className="flex items-center gap-3 flex-1">
                <Phone className="w-5 h-5" />
                <div>
                  <p className="font-semibold text-sm">Call Us:</p>
                  <p className="text-sm opacity-80">+91-888-600-2422</p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-1 pl-6">
                <Mail className="w-5 h-5" />
                <div>
                  <p className="font-semibold text-sm">E-mail Us:</p>
                  <p className="text-sm opacity-80">info@drprathyusha.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-2xl px-6 data-[state=open]:bg-primary data-[state=open]:border-primary transition-colors"
              >
                <AccordionTrigger className="text-base font-bold text-[#6a3e74] hover:no-underline data-[state=open]:text-primary-foreground [&[data-state=open]>svg]:text-primary-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-primary-foreground/80 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
