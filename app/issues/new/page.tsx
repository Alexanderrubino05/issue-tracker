import React from "react";
import { createIssuePost } from "@/app/api/issues/route";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  return (
    <form
      className="max-w-xl space-y-4 flex flex-col"
      action={createIssuePost}
      method="POST"
    >
      <input type="text" placeholder="Title" name="title" />
      <input type="description" placeholder="Description" name="description" />
      <button type="submit" className="bg-red-500">
        Submit
      </button>
    </form>
  );
};

export default NewIssuePage;
