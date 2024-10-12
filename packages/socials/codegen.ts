import type { CodegenConfig } from "@graphql-codegen/cli";

const codegenConfig: CodegenConfig = {
  overwrite: true,
  generates: {
    "./graphql/github/types.ts": {
      schema: "https://docs.github.com/public/fpt/schema.docs.graphql",
      documents: [
        "./graphql/github/queries/**/*.gql",
        "./graphql/github/mutations/**/*.gql",
      ],
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

    "./graphql/github/schema.gql": {
      schema: "https://docs.github.com/public/fpt/schema.docs.graphql",
      plugins: ["schema-ast"],
    },
  },
  hooks: {
    afterAllFileWrite: ["npx prettier --write"],
  },
};

export default codegenConfig;
