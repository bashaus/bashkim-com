export default {
  info_brief: {
    type: "Text",
    config: {
      label: "Brief",
    },
  },
  info_strategy: {
    type: "Text",
    config: {
      label: "Strategy",
    },
  },
  info_implementation: {
    type: "Text",
    config: {
      label: "Implementation",
    },
  },
  info_deliverables: {
    type: "Group",
    config: {
      fields: {
        info_deliverable_name: {
          type: "Text",
          config: {
            label: "Deliverable name",
          },
        },
        info_deliverable_link: {
          type: "Link",
          config: {
            label: "Deliverable link",
            select: null,
          },
        },
      },
      label: "Deliverables",
    },
  },
  info_client: {
    type: "Text",
    config: {
      label: "Client",
    },
  },
  info_agency: {
    type: "Text",
    config: {
      label: "Agency",
    },
  },
  info_role: {
    type: "Text",
    config: {
      label: "Role",
    },
  },
  info_institution: {
    type: "Text",
    config: {
      label: "Institution",
    },
  },
  info_degree: {
    type: "Text",
    config: {
      label: "Degree",
    },
  },
  info_launch_date: {
    type: "Date",
    config: {
      label: "Launch date",
    },
  },
  info_decommission_date: {
    type: "Date",
    config: {
      label: "Decommission date",
    },
  },
  info_target_audiences: {
    type: "Group",
    config: {
      fields: {
        info_target_audience_name: {
          type: "Text",
          config: {
            label: "Audience name",
          },
        },
      },
      label: "Target audience",
    },
  },
  info_markets: {
    type: "Group",
    config: {
      fields: {
        info_market: {
          type: "Text",
          config: {
            label: "Market",
          },
        },
      },
      label: "Markets",
    },
  },
  info_outcomes: {
    type: "Group",
    config: {
      fields: {
        info_outcome: {
          type: "Text",
          config: {
            label: "Outcome",
          },
        },
      },
      label: "Outcomes",
    },
  },
  info_technologies: {
    type: "Group",
    config: {
      fields: {
        info_technology: {
          type: "Link",
          config: {
            select: "document",
            customtypes: ["technology"],
            label: "Technology",
          },
        },
      },
      label: "Technologies",
    },
  },
};
