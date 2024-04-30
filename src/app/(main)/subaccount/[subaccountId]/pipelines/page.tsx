import { db } from "@/libs/db";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: { subaccountId: string };
};

const Pipelines = async ({ params }: Props) => {
  const pinelineExists = await db.pipeline.findFirst({
    where: {
      subAccountId: params.subaccountId,
    },
  });

  if (pinelineExists) {
    return redirect(
      `/subaccount/${params.subaccountId}/pipelines/${pinelineExists.id}`
    );
  }

  try {
    const response = await db.pipeline.create({
      data: {
        name: "First Pineline",
        subAccountId: params.subaccountId,
      },
    });

    return redirect(
      `/subaccount/${params.subaccountId}/pipelines/${response.id}`
    );
  } catch (error) {
    console.log(error);
  }
};

export default Pipelines;
