import { getUser } from "../utilities/users-service"

export function useGetUserID() {
    const user = getUser();
    console.log('user', user);
    return {userId: user._id}
}