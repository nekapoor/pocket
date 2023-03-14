import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Do I really need an app for a COVID-19 test?',
      answer:
        "No, you definitely do not! And we get it. Detecting lines with the human eye isn't rocket science! But our app does offer some unique features. First, you can leave it to us to interpret your results. This helps, especially in those cases where you get a faint line and are unable to figure out if a line is there or not. Or where you might think there's a chance of misinterpretation. But more importantly, we will immediately allow you to get treatment after a result, should you need it.",
    },
    {
      question: 'What does "test and treat" mean?',
      answer:
        'If you test positive, we will connect you with a telehealth partner who can provide you with treatment like Paxlovid. ',
    },
    {
      question: 'Why does your app have 3 lines when every other test I have done has 2?',
      answer:
        'Other tests have no way of determining whether you have swabbed the inside of your nose enough to get a good sample. Our test has a third line to help you determine if you have swabbed enough. We call it a sample adeqacy line and helps us to better ensure we are providing the right result.',
    },
    {
      question: 'Can this app be used for any other tests?',
      answer:
        'Right now, no! But if the pandemic has taught us anything, it is that at-home care will continue to be a big part of our future. We are working on expanding our app to include other tests and treatments.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-1"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
