import { CreateItineraryDialog } from '@travel-drop/features-itinerary-ui';

export default function ItineraryPage() {
  return (
    <>
      <div className="flex-1 flex flex-col h-full">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Itinerary</h1>
            <p className="text-muted-foreground">Manage your itineraries</p>
          </div>
          <CreateItineraryDialog triggerText="Create Itinerary" />
        </div>
      </div>
    </>
  );
}
