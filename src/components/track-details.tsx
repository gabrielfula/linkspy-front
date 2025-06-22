import { fetchDetailsUrl } from "@/queries/use-detail-url";
import TrackDetailsClient from "./track-details-client";

type TrackDetailsProps = {
  uuid: string;
};

export default async function TrackDetails({ uuid }: TrackDetailsProps) {
  const detaildData = await fetchDetailsUrl(uuid);
  const fallbackLocation = detaildData?.location.last_location;

  return <TrackDetailsClient uuid={uuid} fallbackLocation={fallbackLocation} />;
}
