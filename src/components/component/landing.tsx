
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Landing() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Accelerate Your Relationships</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Leverage our powerful features to build and nurture your relationships like never before.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <HeartIcon className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Matchmaking</h3>
              </div>
              <p className="text-muted-foreground">Find your perfect match with our advanced algorithms.</p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <GroupIcon className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Relationship Advice</h3>
              </div>
              <p className="text-muted-foreground">Get personalized guidance to strengthen your connections.</p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <HeartIcon className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Romantic Gestures</h3>
              </div>
              <p className="text-muted-foreground">Discover unique ways to express your love and affection.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-0 py-12 md:py-24 lg:py-32 bg-[#F5F8FA]">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join the Love Revolution</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sign up now to be the first to experience our cutting-edge relationship platform.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex gap-2">
              <Input type="text" placeholder="Enter your name" className="max-w-lg flex-1 rounded-[6px]" />
              <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1 rounded-[6px]" />
              <Button type="submit" className="bg-[#000] rounded-[6px] text-[#fff]" >Sign Up</Button>
            </form>
            <p className="text-xs text-muted-foreground">
              By signing up, you agree to our{" "}
              <Link href="#" className="underline underline-offset-2" prefetch={false}>
                Terms &amp; Conditions
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

function GroupIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
}


function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
