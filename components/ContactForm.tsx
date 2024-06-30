"use client";

import Button from "./Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { toast } from "sonner";
import { contactFormSchema } from "@/utils/schemaValidation";

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = ({ className }: { className: string }) => {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    // const result = await somefunction(data)
    try {
      setSubmitting(true);
      //TODO: post data to server and remove mockup post

      // mockup post
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Your message has been sent!");
      reset();
      setSubmitting(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className={`${className} bg-gray-70 rounded-xl content-size`}
    >
      <div>
        <input
          id="name"
          autoComplete="given-name"
          type="text"
          placeholder="Name"
          {...register("name")}
          className="text-input form-input"
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </div>

      <div>
        <input
          id="email"
          autoComplete="off"
          type="email"
          placeholder="Email"
          {...register("email")}
          className="form-input"
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </div>

      <div>
        <textarea
          id="message"
          placeholder="Message"
          rows={6}
          {...register("message")}
          className="resize-none form-input"
        />
        <ErrorMessage>{errors.message?.message}</ErrorMessage>
      </div>

      <Button
        type="submit"
        label="Submit"
        className="min-[600px]:self-end"
        disabled={submitting}
      />
    </form>
  );
};

export default ContactForm;
