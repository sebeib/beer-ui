import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef, //if using TypeScript (optional, but recommended)
} from 'material-react-table';

export interface Beer {
  brand: string;
  description: string;
  price: string;
  from: Date;
  to: Date;
}

interface Props {
    name: string,
    beer: Array<Beer>
}

export function Table(props: Props) {
    const data = props.beer;

    const columns = useMemo<MRT_ColumnDef<Beer>[]>(
        () => [
          {
            accessorKey: 'brand',
            header: 'Marke',
            muiTableHeadCellProps: { style: { color: 'green' } },
          },{
            accessorKey: 'description',
            header: 'Beschreibung',
            muiTableHeadCellProps: { style: { color: 'green' } },
          },{
            accessorKey: 'price',
            header: 'Preis',
            muiTableHeadCellProps: { style: { color: 'green' } },
          },{
            accessorKey: 'from',
            header: 'Von',
            muiTableHeadCellProps: { style: { color: 'green' } },
          },{
            accessorKey: 'to',
            header: 'Bis',
            muiTableHeadCellProps: { style: { color: 'green' } },
          }
        ],
        [],
      );
    
      const table = useMaterialReactTable({
        columns,
        data,
        initialState: { density: 'compact' },
        
      });
    
      return <>
                {props.name}
                <MaterialReactTable table={table} />
            </>;
}