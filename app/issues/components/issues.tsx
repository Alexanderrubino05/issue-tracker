"use server";
import prisma from "@/prisma/client";
import React from "react";

const Issues = async () => {
  async function getPosts() {
    const posts = await prisma.issue.findMany();
    return posts;
  }

  const posts = await getPosts();

  return (
    <div className="flex flex-col space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-100 p-2">
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Issues;
