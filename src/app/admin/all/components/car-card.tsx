'use client';

import { CardHeader, CardTitle, CardContent, CardFooter } from "@/components/card";
import { Icons } from "@/components/icons";
import { cn } from "@/utils/utils";
import { Card } from "antd";

interface UserCardProps {
  index: number;
  user: {
    nom: string;
    prenom: string;
    nni: string;
    phone: string;
    email: string;
  };
}

export function UserCard({ index, user }: UserCardProps) {
  const { nom, prenom, nni, phone, email } = user;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-baseline justify-between gap-x-2 whitespace-nowrap">
          <CardTitle className="inline-block max-w-full overflow-hidden text-ellipsis text-left text-[15px] font-semibold">
            {`${nom} ${prenom}`}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mt-4 space-y-2 text-base">
          <p className="text-sm text-neutral-600">
            <strong>NNI:</strong> {nni}
          </p>
          <p className="text-sm text-neutral-600">
            <strong>Phone:</strong> {phone}
          </p>
          <p className="text-sm text-neutral-600">
            <strong>Email:</strong> {email}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-2.5 pt-0">
        {/* Additional actions or details can go here */}
      </CardFooter>
    </Card>
  );
}
