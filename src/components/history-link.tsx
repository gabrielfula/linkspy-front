import { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import {
  HomeIcon,
  Building2Icon,
  MapPinIcon,
  TagIcon,
  LocateFixedIcon,
} from "lucide-react";

interface HistoryLinkProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  locations: [];
}

export default function HistoryLink({ isOpen, setIsOpen, locations }: HistoryLinkProps) {
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="w-[90%] md:max-w-md md:w-full md:ml-32 md:p-5">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <MapPinIcon className="w-5 h-5" /> Histórico de Localizações
                    </DialogTitle>

                    {locations.slice(0, 5).map((item: any) => (
                        <div className="border flex flex-col rounded p-2 mt-5" key={item.uuid}>
                            <div className="flex items-center gap-2 text-sm truncate">
                                <HomeIcon className="w-4 h-4 text-muted-foreground" />
                                Rua: {item.street}
                            </div>
                            <div className="flex items-center gap-2 text-sm truncate">
                                <Building2Icon className="w-4 h-4 text-muted-foreground" />
                                Cidade: {item.city}
                            </div>
                            <div className="flex items-center gap-2 text-sm truncate">
                                <MapPinIcon className="w-4 h-4 text-muted-foreground" />
                                Bairro: {item.neighborhood}
                            </div>
                            <div className="flex items-center gap-2 text-sm truncate">
                                <TagIcon className="w-4 h-4 text-muted-foreground" />
                                CEP: {item.cep}
                            </div>
                            <div className="flex items-center gap-2 text-sm truncate">
                                <LocateFixedIcon className="w-4 h-4 text-muted-foreground" />
                                Latitude: {item.latitude}
                            </div>
                            <div className="flex items-center gap-2 text-sm truncate">
                                <LocateFixedIcon className="w-4 h-4 text-muted-foreground" />
                                Longitude: {item.longitude}
                            </div>
                        </div>
                    ))}
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
