"use server";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export async function createIssuePost(formData: FormData) {
  const validatedFields = createIssueSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return validatedFields.error.flatten().fieldErrors;
  }

  const { title, description } = validatedFields.data;

  const newIssue = await prisma.issue.create({
    data: {
      title: title,
      description: description,
    },
  });

  return {
    message: "Works",
  };
}
