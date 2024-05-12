import type { CodegenConfig } from "@graphql-codegen/cli";

const codegenConfig: CodegenConfig = {
  overwrite: true,
  generates: {
    "./src/types/socials-server.ts": {
      schema: "./schema/**/*.gql",
      plugins: ["typescript"],
    },

    "./src/types/github.ts": {
      schema: "https://docs.github.com/public/fpt/schema.docs.graphql",
      documents: ["./src/app/services/github/**/*.gql"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: false,
        withComponent: false,
        withHOC: false,
      },
    },

    "./src/types/github.gql": {
      schema: "https://docs.github.com/public/fpt/schema.docs.graphql",
      plugins: ["schema-ast"],
    },
  },
  hooks: {
    afterAllFileWrite: ["npx prettier --write"],
  },
};

export default codegenConfig;
