'use client'

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const cards = [
  {
    title: "Text to image",
    description: "To generate a picture from personalised prompt or text.",
    videoUrl: "https://storage.googleapis.com/clipdrop-static-assets/web/apis/text-to-image/text-to-image-1280-720.mp4",
    route: "/text-to-image",
  },
  {
    title: "Sketch to image",
    description: "To generate an image from a sketch and a prompt describing what you expect.",
    videoUrl: "https://static.clipdrop.co/web/apis/sketch-to-image/sketch-to-image-1280-720.mp4",
    route: "/sketch-to-image",
  },
  {
    title: "Remove Background",
    description: "To remove the background of your pictures.",
    videoUrl: "https://static.clipdrop.co/web/apis/remove-background/remove-background-demo.mp4",
    route: "/remove-background",
  },
  {
    title: "Image upscaling",
    description: "To enhance and upscale your images.",
    videoUrl: "https://static.clipdrop.co/web/apis/super-resolution/super-resolution-demo.mp4",
    route: "/image-upscaling",
  },
]

export default function CardGrid() {
  const router = useRouter()

  return (
    <div className="container mt-12 mx-auto px-8 py-8 rounded-3xl bg-theme-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="p-0">
              <video
                src={card.videoUrl}
                autoPlay
                loop
                muted
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <CardTitle className="text-xl mb-2">{card.title}</CardTitle>
              <p className="text-muted-foreground">{card.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" onClick={() => router.push(card.route)}>
                Try now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
