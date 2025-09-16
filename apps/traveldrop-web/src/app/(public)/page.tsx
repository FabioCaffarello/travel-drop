import {
  Badge,
  buttonVariants,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@travel-drop/ui';
import Link from 'next/link';

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const features: FeatureProps[] = [
  {
    title: 'Seamless Booking',
    description:
      'Book flights, hotels, and car rentals all in one place with our easy-to-use platform.',
    icon: '🛫',
  },
  {
    title: 'Personalized Itineraries',
    description:
      'Get travel recommendations tailored to your preferences and interests.',
    icon: '🗺️',
  },
  {
    title: '24/7 Support',
    description:
      'Our dedicated support team is available around the clock to assist you with any travel needs.',
    icon: '📞',
  },
  {
    title: 'Exclusive Deals',
    description:
      'Access special discounts and offers available only to our members.',
    icon: '💰',
  },
];

export default function Home() {
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant={'outline'}>The future of travel is here!</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Elevate your travel experience with TravelDrop
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Discover a new way to explore the world with our modern, interactive
            travel management system. Access high-quality resources and tools to
            unblock your travel potential today! You deserve the best travel
            experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            {/* TODO: rename route */}
            <Link
              className={buttonVariants({
                size: 'lg',
              })}
              href="/roadmap"
            >
              Explore Roadmap
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
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}
