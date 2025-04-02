import axiosConfig from "@/config/axiosConfig";

export const getChannelById = async ({ channelId, token }) => {
    try {
        const response = await axiosConfig.get(`/channels/${channelId}`, {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;
    } catch(error) {
        console.log('Error in getChannelByIdRequest', error);
    }
};




// what should be the input to get channel Detail By Id
//    token , id
