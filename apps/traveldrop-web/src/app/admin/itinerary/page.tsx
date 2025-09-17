import { buttonVariants } from '@travel-drop/ui';
import Link from 'next/link';

export default function ItineraryPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Itinerary</h1>
        <Link className={buttonVariants()} href="/admin/itinerary/create">Create Itinerary</Link>
      </div>
      <div>
        <h1>Here you can manage your itinerary items</h1>
      </div>
    </>
  );
}
