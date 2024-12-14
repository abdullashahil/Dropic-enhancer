'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TextToImage() {
    const [prompt, setPrompt] = useState('')
    const [generatedImage, setGeneratedImage] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)
        setGeneratedImage(null)

        try {
            const apiKey = "0affe1a4f1fcc8a36d659ad55a15380ebbbe695b6ef8cc63231528805591a667f9b8756883bd734fcd451e09ae915a4c";
            const apiUrl = "https://clipdrop-api.co/text-to-image/v1";

            const formData = new FormData();
            formData.append("prompt", prompt);

            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "x-api-key": apiKey,
                },
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to generate image");
            }

            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);

            setGeneratedImage(imageUrl);
        } catch (err) {
            setError(err, 'Failed to generate image. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-4">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Text to Image Generator</CardTitle>
            </CardHeader>

            <Card className="flex flex-col md:flex-row items-start justify-between h-[80vh] md:h-[60vh] w-full border border-gray-300 bg-theme-1 p-5 gap-5">
                <CardContent className='border bg-white p-5 rounded-lg w-full md:w-1/2'>
                    <div className="w-full">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Input
                                type="text"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="Enter your text prompt"
                                required
                                className="w-full"
                            />
                            <Button type="submit" disabled={isLoading} className="w-full bg-theme-1">
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Generating...
                                    </>
                                ) : (
                                    'Generate Image'
                                )}
                            </Button>
                        </form>
                    </div>
                </CardContent>

                <CardContent className='border bg-white p-5 rounded-lg w-full md:w-1/2 h-full'>
                    <div className="w-full">
                        {isLoading && (
                            <div className="flex justify-center items-center h-64">
                                <Loader2 className="h-8 w-8 animate-spin" />
                            </div>
                        )}
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
                                <p>{error}</p>
                            </div>
                        )}
                        {generatedImage && (
                            <div className="border flex justify-center items-center">
                                <img src={generatedImage} alt="Generated image" className="w-[50%] h-auto rounded-lg shadow-lg" />
                            </div>
                            
                        )}

                        {!isLoading && !error && !generatedImage &&(
                            <div className="flex justify-center items-center h-64 text-gray-500">
                                <p>No image.</p>
                            </div>

                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
