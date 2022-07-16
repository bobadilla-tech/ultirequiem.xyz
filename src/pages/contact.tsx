import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

import { ListItem, TimeStatus } from "../components";
import { EMAIL, form, TELEPHONE_NUMBER, USERNAME } from "../util";
import { Email, Twitter } from "../container/socials";

import { HiOutlineMail } from "react-icons/hi";
import { RiPhoneLine, RiSendPlane2Line } from "react-icons/ri";
import { SiTwitter } from "react-icons/si";

export default function Talk() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold sm:text-3xl">Let's talk 💬</h1>
      <p>
        Leave a message on the form below or get in touch through Twitter or
        Email.
      </p>

      <TimeStatus />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="p-5 bg-gray-100 dark:bg-white/5 rounded-lg">
          <form
            className="space-y-2"
            action="/api/form"
            method="POST"
            onSubmit={async (event) => {
              event.preventDefault();

              const values = Object.fromEntries(
                new FormData(event.target as HTMLFormElement).entries()
              );

              const promise = form.post(
                {},
                {
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(values),
                }
              );

              await toast
                .promise(promise, {
                  success: "Success!",
                  loading: "Sending...",
                  error: (error: Error) =>
                    error?.message ?? "Something went wrong...",
                })
                .then(() => router.push("/thanks"));
            }}
          >
            <label htmlFor="email" className="block">
              <span className="text-sm font-bold tracking-wide dark:text-white uppercase select-none text-opacity-50">
                Email Address
              </span>

              <input
                required
                type="email"
                name="email"
                id="email"
                className="block py-1 px-4 w-full font-sans text-lg bg-gray-200 dark:bg-white/5 rounded-md focus:outline-none focus:ring"
              />
            </label>

            <label htmlFor="body" className="block">
              <span className="text-sm font-bold tracking-wide dark:text-white uppercase select-none text-opacity-50">
                Message
              </span>

              <textarea
                rows={5}
                name="body"
                minLength={10}
                id="body"
                className="block py-1 px-4 w-full font-sans text-lg bg-gray-200 dark:bg-white/5 rounded-md focus:outline-none focus:ring resize-none"
              />
            </label>

            <div className="block pt-2">
              <button
                type="submit"
                className="inline-flex items-center py-2 px-8 space-x-2 text-lg text-blue-100 dark:text-white bg-blue-700 dark:bg-white/5 dark:hover:bg-white/10 rounded-full focus:outline-none focus:ring"
              >
                <span>Send</span> <RiSendPlane2Line />
              </button>
            </div>
          </form>
        </div>

        <div>
          <ul className="space-y-2 list-disc list-inside">
            <Email>
              <ListItem icon={HiOutlineMail} text={EMAIL} />
            </Email>
            <br />

            <Twitter>
              <ListItem icon={SiTwitter} text={USERNAME} />
            </Twitter>

            <br />
            <ListItem icon={RiPhoneLine} text={TELEPHONE_NUMBER} />
          </ul>
        </div>
      </div>
    </div>
  );
}
