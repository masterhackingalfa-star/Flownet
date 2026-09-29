import { Inngest } from "inngest";
import User from "../moduls/User.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "my-app" });

// Inngest function to save user data
const syncUserCreation = inngest.createFunction(
    { id: 'sync-user-from-clerk', triggers: { event: 'clerk/user.created' } },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const email = email_addresses[0].email_address;

        let username = email.split('@')[0];
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            username = username + Math.floor(Math.random() * 10000);
        }

        const userData = {
            _id: id,
            email,
            username,
            full_name: `${first_name} ${last_name}`,
            profile_picture: image_url
        };
        await User.create(userData);
    }
);

// Inngest function to update user data in database
const syncUserUpdate = inngest.createFunction(
    { id: 'update-user-from-clerk', triggers: { event: 'clerk/user.updated' } },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;

        const updatedUserData = {
            email: email_addresses[0].email_address,
            full_name: `${first_name} ${last_name}`,
            profile_picture: image_url
        };
        await User.findByIdAndUpdate(id, updatedUserData);
    }
);

// Inngest function to delete user from database
const syncUserDeletion = inngest.createFunction(
    { id: 'delete-user-from-clerk', triggers: { event: 'clerk/user.deleted' } },
    async ({ event }) => {
        const { id } = event.data;
        await User.findByIdAndDelete(id);
    }
);

export const functions = [syncUserCreation, syncUserUpdate, syncUserDeletion];