import { ArrowLeft } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import UrlDetails from "@/components/url-details"
import Link from "next/link"
import TrackDetails from "@/components/track-details"


export default async function UrlTrackingInfo({
     params,
   }: {
     params: Promise<{ uuid: string }>
}) {

     const { uuid } = await params;

     return (
          <div className="container px-4 py-10 sm:px-6 md:px-10 lg:px-14">
               <div className="flex justify-between items-center flex-wrap gap-2 mb-6">
                    <h1 className="text-2xl font-bold">Detalhes do Link Rastreável</h1>
                    <Link href="/home" className="flex items-center text-sm text-muted-foreground">
                         <ArrowLeft className="h-4 w-4 mr-2" />
                         Voltar
                    </Link>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                         <CardHeader>
                              <CardTitle>Informações do Link</CardTitle>
                              <CardDescription>Detalhes do link rastreável gerado</CardDescription>
                         </CardHeader>
                         <UrlDetails uuid={uuid} />
                    </Card>
                    <Card>
                         <TrackDetails uuid={uuid} />
                    </Card>
               </div>
          </div>
     )
}
