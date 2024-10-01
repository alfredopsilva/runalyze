import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

function RunningTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Distance</TableHead>
                    <TableHead>Duration (min)</TableHead>
                    <TableHead>Pace (min/km)</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell >$250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>

    );
}

export default RunningTable;
weh
