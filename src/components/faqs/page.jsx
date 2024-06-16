'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "How It Works",
    answer: "Steps: Here’s a breakdown of the process from the initial consultation to the tattoo session and aftercare:\n\n" +
      "1. Initial Consultation: We begin with a consultation to discuss your ideas, preferences, and the design you want. This can be done in person or online.\n\n" +
      "2. Design Creation: Based on our discussion, I will create a custom design for your tattoo. We will review and refine the design until you are completely satisfied.\n\n" +
      "3. Scheduling the Session: Once the design is finalized, we will schedule the tattoo session at a time that is convenient for you.\n\n" +
      "4. Tattoo Session: On the day of your appointment, I will ensure that you are comfortable and understand the process. The tattoo will be applied with great care and precision.\n\n" +
      "5. Aftercare Instructions: After the tattoo is done, you will receive detailed aftercare instructions to ensure proper healing and to maintain the quality of your new tattoo.\n\n" +
      "6. Follow-Up: We may schedule a follow-up appointment to check the healing process and touch up any areas if necessary."
  },
  {
    question: "How long does a tattoo session usually take?",
    answer: "The length of a tattoo session can vary greatly depending on the size and complexity of the design. Small tattoos can take less than an hour, while larger or more detailed pieces may require multiple hours or even multiple sessions."
  },
  {
    question: "Does getting a tattoo hurt?",
    answer: "Pain tolerance varies from person to person, but most people describe the sensation as a slight to moderate discomfort. The level of pain can also depend on the location of the tattoo on your body."
  },
  {
    question: "How should I prepare for my tattoo appointment?",
    answer: "Ensure you are well-rested, hydrated, and have eaten a good meal before your appointment. Avoid alcohol and blood-thinning medications, and wear comfortable clothing that allows easy access to the area being tattooed."
  },
  {
    question: "What is the aftercare process for a new tattoo?",
    answer: "Aftercare is crucial for healing and maintaining the quality of your tattoo. Keep the tattoo clean and moisturized, avoid direct sunlight, swimming, and heavy sweating for the first few weeks, and follow any specific instructions provided by your tattoo artist."
  },
  {
    question: "Can I get a tattoo if I have certain medical conditions?",
    answer: "It's important to consult with your doctor if you have medical conditions such as diabetes, skin conditions, or if you are on certain medications. Inform your tattoo artist of any health concerns before your session."
  },
  {
    question: "How much does a tattoo cost?",
    answer: "The cost of a tattoo depends on various factors, including the size, complexity, and placement of the design, as well as the artist's experience and hourly rate. It's best to discuss your design and get a quote during the consultation."
  },
]

export default function Faqs() {
  return (
    <div className="mt-32" id="faqs">
      <div className="mx-auto max-w-7xl px-4 ">
        <div className="mx-auto max-w-4xl divide-y divide-gray-400/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gold-800">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-400/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="flex w-full items-start justify-between text-left text-gray-100">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-justify leading-7 text-gray-400 whitespace-pre-line">{faq.answer}</p>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
