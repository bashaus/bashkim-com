import { GetMediumSocialsResponse } from "../../../types/socials-server";

/**
 * Medium doesn't have a great API, so the information is represented here
 * statically
 */
export const getMediumSocials = (): GetMediumSocialsResponse => {
  return {
    articles: [
      {
        url: "https://medium.com/@bashaus/1-5-profiling-and-logging-microservices-using-opentelemetry-and-aws-x-ray-669bc7755462",
        title:
          "Profiling and logging microservices using OpenTelemetry and AWS X-Ray",
        subtitle:
          "This is a multi-part series on how to install, configure and get the most out of OpenTelemetry and AWS X-Ray with your microservices.",
        claps: 2,
      },
      {
        url: "https://bootcamp.uxdesign.cc/validating-a-persons-name-from-user-input-8801a86f82d7",
        title: "Validating a person’s name from user input",
        subtitle:
          "William Shakespeare once famously wrote “What’s in a name? That which we call a rose by any other name would smell as sweet.” – clearly he has never heard of Tom, the Tank Engine.",
        claps: 5,
      },
    ],
  };
};
