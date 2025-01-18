import { GetMediumSocialsResponse } from "./types";

export async function getMediumSocials(): Promise<GetMediumSocialsResponse> {
  return {
    articles: [
      {
        title:
          "Using modals in Next.js with parallel routes (slots), route groups and interceptors",
        subtitle:
          "If you’ve ever been on Unsplash or Instagram’s desktop website, you may notice that depending on the context of your visiting you will receive a different user experience when enlarging a photo. This article walks you through the process to implement this design pattern in Next.js.",
        links: [
          {
            url: "https://medium.com/@bashaus/1-5-profiling-and-logging-microservices-using-opentelemetry-and-aws-x-ray-669bc7755462",
            title:
              "Using modals in Next.js with parallel routes (slots), route groups and interceptors",
          },
        ],
      },
      {
        title:
          "Managing environment variables in Azure Kubernetes Service (AKS)",
        subtitle: "",
        links: [
          {
            title:
              "Injecting environment variables from App Configuration and Key Vault into AKS containers",
            url: "https://medium.com/@bashaus/1-4-injecting-environment-variables-from-app-configuration-and-key-vault-into-aks-containers-87a711df8f30",
          },
          {
            title:
              "Configuring App Configuration to expose environment variables to Azure Kubernetes Services",
            url: "https://medium.com/@bashaus/2-4-configuring-app-configuration-to-expose-environment-variables-to-azure-kubernetes-services-273664df35e0",
          },
          {
            title:
              "Configuring Key Vault to expose environment variables to Azure Kubernetes Services",
            url: "https://medium.com/@bashaus/3-4-configuring-key-vault-to-expose-environment-variables-to-azure-kubernetes-services-48b633ec9e67",
          },
          {
            title:
              "Configuring Azure Kubernetes Services to consume ConfigMap and Secret resources",
            url: "https://medium.com/@bashaus/4-4-configuring-azure-kubernetes-services-containers-to-consume-configmap-and-secret-resources-9a66314adb1e",
          },
        ],
      },

      {
        title:
          "Profiling and logging microservices using OpenTelemetry and AWS X-Ray",
        subtitle: "",
        links: [
          {
            title:
              "Profiling and logging microservices using OpenTelemetry and AWS X-Ray",
            url: "https://medium.com/@bashaus/1-5-profiling-and-logging-microservices-using-opentelemetry-and-aws-x-ray-669bc7755462",
          },
          {
            title: "Enabling X-Ray on common AWS services",
            url: "https://medium.com/@bashaus/2-5-enabling-x-ray-on-common-aws-services-bab0e8416c2a",
          },
          {
            title: "Installing X-Ray on EKS — Elastic Kubernetes Service",
            url: "https://medium.com/@bashaus/3-5-installing-x-ray-on-eks-elastic-kubernetes-service-ab0657e5708d",
          },
          {
            title:
              "Reporting OpenTelemetry metrics from your back-end microservices",
            url: "https://medium.com/@bashaus/4-5-reporting-opentelemetry-metrics-from-your-back-end-microservices-90d5048d1f6f",
          },
          {
            title: "Tracing individual X-Ray requests from the front-end",
            url: "https://medium.com/@bashaus/5-5-tracing-individual-x-ray-requests-from-the-front-end-3377d0ecd638",
          },
        ],
      },
      {
        title: "Validating a person’s name from user input",
        subtitle: "",
        links: [
          {
            title: "Validating a person’s name from user input",
            url: "https://medium.com/design-bootcamp/validating-a-persons-name-from-user-input-8801a86f82d7",
          },
        ],
      },
    ],
  };
}
