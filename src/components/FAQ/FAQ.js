import React from 'react'
import classes from './FAQ.scss'
import FAQSection from 'components/FAQSection'

export const FAQ = () => (
  <div className={classes.FAQ}>
    <div className={'container text-center'}>
      <div className={classes.header}>
        HACKDUKE IS ABOUT
      </div>
      <FAQSection title={"COLLABORATION NOT COMPETITION."}
        text={"HackDuke is not just about building meaningful projects. \
              It's also an open forum to discuss, share and bring to life ideas \
              that aim to make a positive impact on social issues. Look forward \
              to working with experts from non-profits and coding alongside \
              mentors from tech companies!"} />
      <FAQSection title={"EXPLORING THE INTERSECTION BETWEEN TECH & SOCIAL GOOD."}
        text={"HackDuke is not just FAQ building meaningful projects. \
              It's also an open forum to discuss, share and bring to life ideas \
              that aim to make a positive impact on social issues. Look forward \
              to working with experts from non-profits and coding alongside \
              mentors from tech companies!"} />
      <FAQSection title={"GIVING BACK."}
        text={"HackDuke encourages students to venture beyond the classroom. \
               Learn how your skills can be used to make a difference other people’s lives."} />
    </div>
  </div>
)

export default FAQ