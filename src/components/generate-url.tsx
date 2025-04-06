"use client"

import * as React from "react"

import { Button } from "./ui/button";
import { Input } from "./ui/input";


export default function GenerateUrl() {
     const [url, setUrl] = React.useState("")

     const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
     }

     return (
          <>
              <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                         <div className="flex gap-2">
                              <Input
                                   id="url"
                                   placeholder="https://example.com/very/long/url/that/needs/shortening"
                                   value={url}
                                   onChange={(e) => setUrl(e.target.value)}
                                   className="flex-1 h-12 text-base"
                                   required
                              />
                              <Button type="submit" size="lg" className="h-12 px-6">
                                   Gerar
                              </Button>
                         </div>
                    </div>
               </form>
          </>
     );
}