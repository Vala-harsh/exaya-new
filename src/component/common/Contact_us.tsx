'use client'
import React from 'react'
import { CustomInput } from "@/component/common/form/CustomInput";
import { Customtextarea } from "@/component/common/form/CustomTextArea";
import { Button } from '@/component/common/Button';
import { Form } from "@/component/ui/form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const btn = {
  btntext: "SUBMIT",
  btnlink: "",
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username name is required",
  }),
  email: z
    .string()
    .min(2, {
      message: "Email is  required",
    })
    .email({
      message: "Invalid email address.",
    }),
  phone: z.string().min(10, {
    message: "Phone number is required",
  }),
  subject: z.string().min(2, {
    message: "Subject is required",
  }),
  message: z.string().min(2, {
    message: "Message is required",
  }),
});

export const Contact_us = ({ data }: { data: any }) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });
  const onsubmit = async () => {
    setLoading(true);
    const data = {
      name: form.getValues("name"),
      email: form.getValues("email"),
      phone: form.getValues("phone"),
      subject: form.getValues("subject"),
      message: form.getValues("message"),
    }
    const res = await fetch("/api/contact-form", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          setLoading(false);
          router.push("/thank-you");
        } else {
          setLoading(false);
          setError(res.statusText);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }
  return (
    <div className=' backdrop-blur-sm   '>
      <div className=' w-full py-3'>
       
        <Form {...form}>
          <form
            className="flex flex-col space-y-4  "
            onSubmit={form.handleSubmit(onsubmit)}
          >
            <CustomInput
              name="name"
              label="Name"
              type="text"
              placeholder="Enter Your Name"
              classes=" text-white md:text-xl font-light text-sm "
              required={true}
            />
            <CustomInput
              name="phone"
              label="Phone"
              type="text"
              placeholder="Enter Your Phone Number"
              classes="text-white md:text-xl font-light text-sm "
              required={true}
            />
            <CustomInput
              name="email"
              label="Email"
              type="email"
              placeholder="Enter Your Email"
              classes=" text-white   md:text-xl font-light text-sm"
              required={true}
            />

            <Customtextarea
              name="message"
              label="Message"
              placeholder="Type Your Message..."
              classes="text-white md:text-xl font-light text-sm  "
              required={true}
            />
            <div>
              {error ? <p className="text-theme-primary-700 font-primary md:text-xl font-light text-sm">{error}</p> : null}
            </div>
            <div className="">
              <Button data={btn} type={"submit"} loading={loading} border={"squre"} align={data}/>
            </div>

          </form>
        </Form>

      </div>
    </div>
  )
}
