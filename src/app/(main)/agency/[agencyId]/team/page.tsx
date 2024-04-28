import React from "react";
import { db } from "@/libs/db";
import DataTable from "./data-table";
import { currentUser } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { columns } from "./columns";
import SendInvitation from "@/components/forms/send-invitation";

type Props = {
  params: {
    agencyId: string;
  };
};

const TeamPage = async ({ params }: Props) => {
  const authUser = await currentUser();
  const teamMembers = await db.user.findMany({
    where: {
      Agency: {
        id: params.agencyId,
      },
    },
    include: {
      Agency: { include: { SubAccount: true } },
      Permissions: { include: { SubAccount: true } },
    },
  });

  if (!authUser) return null;

  const agencyDetails = await db.agency.findUnique({
    where: {
      id: params.agencyId,
    },
    include: {
      SubAccount: true,
    },
  });

  if (!agencyDetails) return;

  return (
    <DataTable
      actionButtonText={
        <>
          <Plus size={15} />
          Add
        </>
      }
      modalChildren={
        <SendInvitation agencyId={agencyDetails.id}></SendInvitation>
      }
      filterValue="name"
      columns={columns}
      data={teamMembers}
    ></DataTable>
  );
};

export default TeamPage;