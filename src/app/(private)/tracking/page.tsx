"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { formatDate } from "@/helpers/utils"
import { Calendar, Copy, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface TrackingInfo {
  id: string
  originalUrl: string
  trackingUrl: string
  state: string
  city: string
  created_at: string
  clicks: number
}

export default function TrackingPage() {
  const [trackingList, setTrackingList] = useState<TrackingInfo[]>([
    {
      id: "a3lkkrow",
      originalUrl: "https://exemplo.com/de/link/para/rastrear",
      trackingUrl: "http://127.0.0.1:5500/index.html?track=a3lkkrow",
      state: "São Paulo",
      city: "São Paulo",
      created_at: "2023-04-15T14:30:00Z",
      clicks: 42,
    },
    {
      id: "b5stwrrk",
      originalUrl: "https://exemplo.com/outro/link",
      trackingUrl: "http://127.0.0.1:5500/index.html?track=b5stwrrk",
      state: "Rio de Janeiro",
      city: "Rio de Janeiro",
      created_at: "2023-04-16T10:15:00Z",
      clicks: 27,
    },
    {
      id: "vg2bnooi",
      originalUrl: "https://exemplo.com/mais/um/link",
      trackingUrl: "http://127.0.0.1:5500/index.html?track=vg2bnooi",
      state: "Minas Gerais",
      city: "Belo Horizonte",
      created_at: "2023-04-17T09:45:00Z",
      clicks: 13,
    },
  ])

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 2
  const totalPages = Math.ceil(trackingList.length / itemsPerPage)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = trackingList.slice(indexOfFirstItem, indexOfLastItem)

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center p-6">
        <div className="w-full max-w-2xl space-y-8">
          <div className="space-y-2 text-center">
            <div className="space-y-4">
              {currentItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-[1fr_auto] border-b">
                      <div className="p-4 md:p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium truncate">{item.originalUrl}</h3>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(item.trackingUrl)}>
                              <Copy className="h-4 w-4 mr-2" />
                              Copiar
                            </Button>
                          </div>
                        </div>

                        <div className="text-sm text-muted-foreground truncate mb-2">{item.trackingUrl}</div>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="h-3.5 w-3.5 mr-1" />
                            {item.city}, {item.state}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            {formatDate(item.created_at)}
                          </div>
                          <p className="hidden md:inline-flex">{item.clicks} cliques</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-end p-4 md:p-6 bg-muted/50">
                        <Link href={`/tracking/${item.id}`}>
                          <Button>Ver detalhes</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  aria-label="Página anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => goToPage(page)}
                      aria-label={`Ir para página ${page}`}
                      aria-current={currentPage === page ? "page" : undefined}
                      className="w-8 h-8"
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  aria-label="Próxima página"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}

            <div className="text-sm text-muted-foreground mt-2">
              Mostrando {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, trackingList.length)} de {trackingList.length}{" "}
              itens
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
