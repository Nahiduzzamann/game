import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { v1 } from "uuid";
const DATA = [
  {
    date: new Date(),
    method: "Bkash",
    channel: "DPAY",
    id: v1(),
    amount: 500,
    bonus: 0,
    status: "Pending",
    remark: "---",
  },
  {
    date: new Date(),
    method: "Bkash",
    channel: "DPAY",
    id: v1(),
    amount: 500,
    bonus: 0,
    status: "Pending",
    remark: "---",
  },
  {
    date: new Date(),
    method: "Bkash",
    channel: "DPAY",
    id: v1(),
    amount: 500,
    bonus: 0,
    status: "Pending",
    remark: "---",
  },
  {
    date: new Date(),
    method: "Bkash",
    channel: "DPAY",
    id: v1(),
    amount: 500,
    bonus: 0,
    status: "Pending",
    remark: "---",
  },
];

export default function DepositHistory() {
  return (
    <TableContainer className="w-full">
      <Table  variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Deposit Method</Th>
            <Th>Payment Channel</Th>
            <Th>Deposit ID</Th>
            <Th isNumeric>Deposit Amount</Th>
            <Th isNumeric>Bonus</Th>
            <Th>Status</Th>
            <Th>Remark</Th>
          </Tr>
        </Thead>
        <Tbody >
          {DATA.map((d, i) => (
            <Tr className="">
              <Td className="">{new Date(d.date).toDateString()}</Td>
              <Td>{d.method}</Td>
              <Td>{d.channel}</Td>
              <Td>{d.id}</Td>
              <Td>{d.amount}</Td>
              <Td>{d.bonus}</Td>
              <Td>{d.status}</Td>
              <Td>{d.remark}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Total</Th>
            <Th>39543 BDT</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
