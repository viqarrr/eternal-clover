import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const About = () => {
    return (
        <section id='about' className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">We turn excitement into something you can play</h2>
                    <div className="space-y-6">
                        <p>Lyra is evolving to be more than just the models. It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate.</p>
                        <p>
                            Tailark. It supports an entire ecosystem — from products innovate. Sit minus, quod debitis autem quia aspernatur delectus impedit modi, neque non id ad dignissimos? Saepe deleniti perferendis beatae.
                        </p>
                        <Button
                            asChild
                            size="sm"
                            className="gap-1 pr-1.5">
                            <Link href="#">
                                Explore Our Games
                                <ChevronRight className="size-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;