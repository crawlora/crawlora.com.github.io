import { z } from "astro:schema";
import { api } from "./client";

export const downloadTypes = z.object({
  version: z.string(),
  links: z
    .object({
      name: z.string(),
      os: z.string(),
      arch: z.string(),
      extension: z.string(),
      icon: z.string(),
      url: z.string().url(),
    })
    .array(),
});

export const getDownloadLinks = async () => {
  const { data } = await api().get<typeof downloadTypes._type>(
    "/webhook/6a2ad00d-6381-4c79-a801-7768d51a8378",
  );

  return downloadTypes.parse(data);
};
