import { graphql } from "../../gql";

export const AccoladeSliceTypeField = graphql(`
  fragment AccoladeSliceTypeField on Case_studyAccoladesAccoladeslicetypeFields {
    __typename
    accolade_slice_type_award_place
    accolade_slice_type_award_category
    accolade_slice_type_award_link {
      ...PrismicExternalLink
    }
  }
`);

export const AccoladeSliceTypePrimary = graphql(`
  fragment AccoladeSliceTypePrimary on Case_studyAccoladesAccoladeslicetypePrimary {
    __typename
    accolade_slice_type_issuer
    accolade_slice_type_description
    accolade_slice_type_date
  }
`);

export const AccoladeSliceType = graphql(`
  fragment AccoladeSliceType on Case_studyAccoladesAccoladeslicetype {
    __typename

    primary {
      ...AccoladeSliceTypePrimary
    }

    fields {
      ...AccoladeSliceTypeField
    }
  }
`);
