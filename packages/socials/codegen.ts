import type { CodegenConfig } from "@graphql-codegen/cli";

const codegenConfig: CodegenConfig = {
  overwrite: true,
  generates: {
    "./src/github/graphql-types.ts": {
      schema: "./generated/github/schema.gql",
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
  },
  hooks: {
    afterAllFileWrite: ["npx prettier --write"],
  },
};

export default codegenConfig;
