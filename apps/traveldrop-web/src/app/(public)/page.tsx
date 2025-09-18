import {
  Badge,
  buttonVariants,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@travel-drop/ui';
import {
  SearchIcon,
  BrainIcon,
  EditIcon,
  ShoppingCartIcon,
  Globe2Icon,
  PlaneIcon,
  MapIcon,
  HeadphonesIcon,
  BadgePercentIcon,
} from 'lucide-react';
import Link from 'next/link';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureProps[] = [
  {
    title: 'Seamless Booking',
    description:
      'Book flights, hotels, and car rentals all in one place with our easy-to-use platform.',
    icon: (
      <PlaneIcon
        size={32}
        className="text-primary"
        aria-label="Seamless Booking"
      />
    ),
  },
  {
    title: 'Personalized Itineraries',
    description:
      'Get travel recommendations tailored to your preferences and interests.',
    icon: (
      <MapIcon
        size={32}
        className="text-primary"
        aria-label="Personalized Itineraries"
      />
    ),
  },
  {
    title: '24/7 Support',
    description:
      'Our dedicated support team is available around the clock to assist you with any travel needs.',
    icon: (
      <HeadphonesIcon
        size={32}
        className="text-primary"
        aria-label="24/7 Support"
      />
    ),
  },
  {
    title: 'Exclusive Deals',
    description:
      'Access special discounts and offers available only to our members.',
    icon: (
      <BadgePercentIcon
        size={32}
        className="text-primary"
        aria-label="Exclusive Deals"
      />
    ),
  },
];

export default function Home() {
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant={'outline'}>All-in-one travel superapp</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Plan, Book, and Live Your Next Adventure
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            From inspiration to reservation, TravelDrop lets you discover real
            journeys, create smart itineraries, and book experiences in minutes.
            Powered by creators, designed for travelers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              className={buttonVariants({
                size: 'lg',
              })}
              href="/itinerary"
            >
              Start Planning
            </Link>
            <Link
              className={buttonVariants({
                size: 'lg',
                variant: 'outline',
              })}
              href="/login"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Journey Steps Section - now with icons */}
      <section className="container mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
          <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-sm">
            <SearchIcon
              size={32}
              className="text-primary mb-2"
              aria-label="Discover"
            />
            <span className="font-semibold mt-2">Discover</span>
            <span className="text-muted-foreground text-sm mt-1">
              Find destinations and inspiration from real creators.
            </span>
          </div>
          <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-sm">
            <BrainIcon
              size={32}
              className="text-primary mb-2"
              aria-label="Plan"
            />
            <span className="font-semibold mt-2">Plan</span>
            <span className="text-muted-foreground text-sm mt-1">
              Get smart, editable itineraries tailored to you.
            </span>
          </div>
          <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-sm">
            <EditIcon
              size={32}
              className="text-primary mb-2"
              aria-label="Edit"
            />
            <span className="font-semibold mt-2">Edit</span>
            <span className="text-muted-foreground text-sm mt-1">
              Customize your trip with drag-and-drop simplicity.
            </span>
          </div>
          <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-sm">
            <ShoppingCartIcon
              size={32}
              className="text-primary mb-2"
              aria-label="Book"
            />
            <span className="font-semibold mt-2">Book</span>
            <span className="text-muted-foreground text-sm mt-1">
              Reserve hotels, tours, and experiences instantly.
            </span>
          </div>
          <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-sm">
            <Globe2Icon
              size={32}
              className="text-primary mb-2"
              aria-label="Travel"
            />
            <span className="font-semibold mt-2">Travel</span>
            <span className="text-muted-foreground text-sm mt-1">
              Enjoy your journey with companion tools and support.
            </span>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="text-4xl mb-1">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
              {/* Microtext for trust */}
              {index === 0 && (
                <span className="text-xs text-primary mt-2 block">
                  Powered by real creators and verified partners
                </span>
              )}
              {index === 1 && (
                <span className="text-xs text-primary mt-2 block">
                  Edit, drag, and personalize every step
                </span>
              )}
              {index === 2 && (
                <span className="text-xs text-primary mt-2 block">
                  Support in-app, chat, and email
                </span>
              )}
              {index === 3 && (
                <span className="text-xs text-primary mt-2 block">
                  Members-only deals, instant booking
                </span>
              )}
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Testimonials Section (placeholder) */}
      <section className="container mx-auto mb-24 text-center">
        <h2 className="text-2xl font-bold mb-6">
          What travelers and creators say
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="max-w-sm p-4 border rounded-lg bg-background shadow">
            <p className="text-muted-foreground">
              “TravelDrop made planning our trip effortless. The itinerary was
              spot on and booking was a breeze!”
            </p>
            <span className="block mt-2 font-semibold">— Alex, Traveler</span>
          </div>
          <div className="max-w-sm p-4 border rounded-lg bg-background shadow">
            <p className="text-muted-foreground">
              “As a creator, I love seeing my content help real people travel
              better. The analytics are amazing!”
            </p>
            <span className="block mt-2 font-semibold">— Jamie, Creator</span>
          </div>
        </div>
      </section>
    </>
  );
}
