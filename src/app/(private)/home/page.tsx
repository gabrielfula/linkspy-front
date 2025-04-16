import GenerateUrl from "@/components/generate-url"
import RecentUrl from "@/components/recent-url"

export default function HomePage() {
     return (
          <>
               <main className="flex flex-1 flex-col items-center justify-center p-6">
                    <div className="w-full max-w-2xl space-y-8">
                         <div className="space-y-2 text-center">
                              <h2 className="text-3xl font-bold tracking-tight">Crie sua nova URL</h2>
                              <p className="text-muted-foreground">
                                   Cole sua URL abaixo para gerar um link rastreável.
                              </p>
                         </div>
                         <GenerateUrl />
                         <RecentUrl />
                    </div>
               </main>
          </>
     )
}