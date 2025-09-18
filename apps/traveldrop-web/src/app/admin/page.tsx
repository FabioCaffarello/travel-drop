import { ChartAreaInteractive, DataTable, SectionCards } from '@travel-drop/ui';

import data from './data.json';

export default function AdminIndexPage() {
  return (
    <>
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </>
  );
}
