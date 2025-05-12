import * as SecureStore from "expo-secure-store";

async function saveToSecureStore(key: string, value: string) {
    try {
        await SecureStore.setItemAsync(key, value);
    } catch (error) {
        console.error("Error saving to secure store", error);
    }
}

async function getFromSecureStore(key: string) {
    try {
        let result = await SecureStore.getItemAsync(key);
        return result ?? null;
    } catch (error) {
        console.error("Error retrieving from secure store", error);
    }
}

async function deleteFromSecureStore(key: string) {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.error("Error deleting from secure store", error);
    }
}

export { saveToSecureStore, getFromSecureStore, deleteFromSecureStore };
