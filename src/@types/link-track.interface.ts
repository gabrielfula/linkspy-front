export interface ITrackingInfo {
  id: string
  originalUrl: string
  trackingUrl: string
  state: string
  city: string
  created_at: string
  clicks: number
}

export interface ITrackingDetails {
  location: {
    id?: string
    originalUrl?: string
    trackingUrl?: string
    state?: string
    city?: string
    cep?: string
    neighborhood?: string
    street?: string
    created_at?: string
    clicks?: number
    longitude?: string
    latitude?: string
  }
}