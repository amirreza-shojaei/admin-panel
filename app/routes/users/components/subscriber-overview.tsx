import {
  Card,
  CardContent
} from "~/components/ui/card";

import customersData from "./data.json";
import type { RecentCustomerRow } from "./recent-customers-table/schema";
import { RecentCustomersTable } from "./recent-customers-table/table";
import { findAllUsers } from "~/api/services/usersApi";


const users = await findAllUsers();
const customers = users as RecentCustomerRow[];

export function SubscriberOverview() {
  return (
    <Card>
      <CardContent className="pt-0">
        <RecentCustomersTable data={customers} />
      </CardContent>
    </Card>
  );
}
