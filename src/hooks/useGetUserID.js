export function useGetUserID() {
    return window.localStorage.getItem("userID");
}