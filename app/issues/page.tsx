import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "@/prisma/client";
import Issues from "./components/issues";
import NewIssuePage from "./new/page";

const IssuesPage = () => {
  return (
    <div>
      <Issues />

      <div className="h-10"></div>
      {/* <Button>
        <Link href="/issues/new" className="bg-red-200">
          New Issue
        </Link>
      </Button> */}

      <NewIssuePage />
    </div>
  );
};

export default IssuesPage;
