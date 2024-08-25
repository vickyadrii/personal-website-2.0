"use client";

import { getAssetUrl } from "@/lib/utils";

import ButtonIcon from "@/components/ui/button-icon/button-icon";
import { useState } from "react";
import { EmailMessage } from "@/types/types";
import Toast from "@/components/ui/toast/toast";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [emailMessage, setEmailMessage] = useState<EmailMessage>({
    name: "",
    email: "",
    message: "",
  });

  const handleOnChange = (name: string, value: string) => {
    setEmailMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const res = await fetch("https://www.vickyadrii.my.id/api/send", {
        method: "POST",
        body: JSON.stringify(emailMessage),
      });
      const resData = await res.json();
      setEmailMessage({
        email: "",
        message: "",
        name: "",
      });
      setResponseMessage(resData?.message);
      setTimeout(() => {
        setResponseMessage("");
      }, 2500);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleOnSubmit} autoComplete="off" className="space-y-6">
        <div className="md:space-y-14 space-y-4">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="md:text-xl text-base">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                autoComplete="off"
                required
                value={emailMessage.name}
                onChange={(event) => handleOnChange(event.target.id, event.target.value)}
                className="bg-transparent border-b-2 border-b-primary-dark-600 outline-none pb-2 md:text-base text-sm focus:border-b-primary-dark-500 transition-all duration-150 ease-in"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="md:text-xl text-base">
                Email
              </label>
              <input
                type="email"
                id="email"
                autoComplete="off"
                required
                value={emailMessage.email}
                onChange={(event) => handleOnChange(event.target.id, event.target.value)}
                className="bg-transparent border-b-2 border-b-primary-dark-600 outline-none pb-2 md:text-base text-sm focus:border-b-primary-dark-500 transition-all duration-150 ease-in"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="md:text-xl text-base">
              Your Message
            </label>
            <textarea
              id="message"
              autoComplete="off"
              required
              value={emailMessage.message}
              onChange={(event) => handleOnChange(event.target.id, event.target.value)}
              className="bg-transparent border-b-2 border-b-primary-dark-600 outline-none pb-2 md:text-base text-sm focus:border-b-primary-dark-500 transition-all duration-150 ease-in resize-none"
              rows={4}
            />
          </div>
        </div>

        <ButtonIcon disabled={isLoading} icon={getAssetUrl("/icons/ic_telegram.svg")}>
          {isLoading ? "Loading..." : "Send Message"}
        </ButtonIcon>
      </form>

      <Toast isOpen={!!responseMessage} />
    </>
  );
};

export default ContactForm;
