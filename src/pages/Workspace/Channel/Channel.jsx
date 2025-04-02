import { useParams } from "react-router-dom"
import { useGetChannelById } from "@/hooks/apis/channels/useGetChannelById"
import { Loader2Icon } from "lucide-react";
import { ChatInput } from "@/components/molecules/ChatInput/ChatInput";
import { FaBullseye } from "react-icons/fa";


export const Channel = () => {
    const { channelId } = useParams();
    const { isFetching, channelDetail, isError } = useGetChannelById(channelId);

    if (isFetching) {
        return (
            <div className="h-full flex items-center justify-center">
                <Loader2Icon className="size-5 animate-spin text-muted-foreground" />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="h-full flex items-center justify-center">
                <p className="text-red-500">Error fetching channel data.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full text-blue-500">
          <div className="flex-1"/>
         
          <ChatInput/>
            <p> channel Detail &{channelId} </p>
        </div>
    );
};
