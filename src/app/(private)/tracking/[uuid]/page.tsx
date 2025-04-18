import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import UrlDetails from "@/components/url-details"
import TrackDetails from "@/components/track-details"


const trackingInfo = {
     id: "a3lkkrow",
     originalUrl: "https://exemplo.com/de/link/para/rastrear",
     trackingUrl: "http://127.0.0.1:5500/index.html?track=a3lkkrow",
     state: "São Paulo",
     city: "São Paulo",
     cep: "01310-200",
     neighborhood: "Bela Vista",
     street: "Avenida Paulista",
     created_at: "2023-04-15T14:30:00Z",
     clicks: 42,
}

export default async function UrlTrackingInfo({
     params,
   }: {
     params: Promise<{ uuid: string }>
}) {

     const { uuid } = await params;

     return (
          <div className="container p-14">
               <div className="flex justify-between items-center mb-6">  
                    <h1 className="text-2xl font-bold">Detalhes do Link Rastreável</h1>
                    <Button variant="ghost" size="sm" className="mr-2">
                         <ArrowLeft className="h-4 w-4 mr-2" />
                         Voltar
                    </Button>
               </div>

               <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                         <CardHeader>
                              <CardTitle>Informações do Link</CardTitle>
                              <CardDescription>Detalhes do link rastreável gerado</CardDescription>
                         </CardHeader>
                         <UrlDetails trackInfo={trackingInfo} />
                    </Card>

                    <Card>
                         <TrackDetails trackInfo={trackingInfo} />
                    </Card>
               </div>
          </div>
     )
}
