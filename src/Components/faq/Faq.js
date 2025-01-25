import React from "react";
import { Accordion } from "react-bootstrap";
import CountUp from "react-countup";
import "./faq.css";

const Faq = () => {
  const questions = [
    {
      title: "Do I need to be tech-savvy to work with you and order software?",
      content:
        "You don't need to be an expert in software development - that's why we're here to help! While any experience you have in this area is welcome, we are fully prepared to guide you through the process, address all your inquiries, and handle everything you need. Just focus on your requirements, and we'll handle the rest.",
    },
    {
      title: "What should I know before getting in touch with you?",
      content:
        "Well, knowing your goals is the most crucial thing to have. I need this software, but why? For what purpose? What ought it to accomplish? When placing an order for software, it is essential to have a clear goal in mind. Without knowing what you need, you don't want to work with us for several months on its development. Please feel free to contact us if you have no prior experience with it. As we have experience creating projects from scratch, we will also be happy to assist you in getting started.",
    },
    {
      title: "How long will it take you to create my application?",
      content:
        "We need to draft a project scope and a budget before we can respond to you specifically. After some effort, we'll be able to estimate how long it will take and inform you how much of that scope can be done within the budget. We think that every reputable software business should provide you with a budget and duration of the project beforehand. To find out more about our procedures, contact us.",
    },
  ];
  return (
    <>
      <section class="fact__area">
        <div class="container">
          <div class="fact__inner-wrap">
            <div class="row">
              <div class="col-lg-3 col-sm-6">
                <div class="fact__item">
                  <div class="odometer-inside">
                    <CountUp end={900} />
                    <p>Active Students</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-sm-6">
                <div class="fact__item">
                  <CountUp end={1600} />

                  <p>Faculty Courses</p>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="fact__item">
                  <CountUp end={1400} />
                  <p>Best Professors</p>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="fact__item">
                  <CountUp end={100} />
                  <p>Award Achieved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="faq__area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="faq__content">
                <div class="section__title pb-10 text-center">
                  <h2 class="main_heading mb-4">Faq's</h2>
                </div>

                <div class="faq__wrap">
                  <Accordion defaultActiveKey="0">
                    {questions.map((question, index) => (
                      <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{question.title}</Accordion.Header>
                        <Accordion.Body>{question.content}</Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
