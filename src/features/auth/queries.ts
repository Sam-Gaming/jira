// "use server";


import { createSessionClient } from "@/lib/appwrite";

export const getCurrent = async () => {
  try {
    const { account } = await createSessionClient();

    // console.log(account);

    return await account.get();
  } catch {
    return null;
  }
};
