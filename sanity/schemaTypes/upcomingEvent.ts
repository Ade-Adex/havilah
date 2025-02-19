import { SchemaTypeDefinition } from "sanity";

export const eventSchema: SchemaTypeDefinition = {
  name: "event",
  title: "Upcoming Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Event Type",
      type: "string",
      options: {
        list: ["Wedding", "Conference", "Seminar", "Concert", "Others"], // Predefined options
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "customType",
      title: "Custom Event Type",
      type: "string",
      hidden: ({ parent }) => (parent as { type?: string })?.type !== "Others",
      validation: (Rule) =>
        Rule.custom((customType, context) => {
          const selectedType = (context.parent as { type?: string })?.type;
          if (selectedType === "Others" && !customType) {
            return "Please enter a custom event type.";
          }
          return true;
        }),
    },
    {
      name: "date",
      title: "Event Date",
      type: "datetime", // ✅ Enables both date and time selection
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "Pending" },
          { title: "Ongoing", value: "Ongoing" },
          { title: "Completed", value: "Completed" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Event Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      eventType: "type",
      customType: "customType",
    },
    prepare({ title, eventType, customType }) {
      return {
        title,
        subtitle: eventType === "Others" ? `Custom: ${customType}` : eventType,
      };
    },
  },
};
