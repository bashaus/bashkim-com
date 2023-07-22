import type { CodegenConfig } from "@graphql-codegen/cli";

const codegenConfig: CodegenConfig = {
  overwrite: true,
  schema: "../socials-server/schema/**/*.gql",
  generates: {
    "./dist/index.ts": {
      documents: "src/**/*.gql",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
      },
    },

    "./dist/schema.gql": {
      plugins: ["schema-ast"],
    },
  },
  hooks: {
    afterAllFileWrite: ["npx prettier --write"],
  },
};

export default codegenConfig;
